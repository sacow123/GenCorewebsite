const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function loadLocalEnvironment() {
  const envPath = path.join(root, ".env.local");
  if (!fs.existsSync(envPath)) return;

  for (const rawLine of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const separator = line.indexOf("=");
    if (separator < 1) continue;
    const name = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    if (!process.env[name]) process.env[name] = value;
  }
}

loadLocalEnvironment();

const {
  LOCAL_COOKIE_NAME,
  createSessionToken,
  getExpiredSessionCookies,
  getSessionCookie,
  parseCookies,
  sanitizeNext,
  verifyPassword,
  verifySessionToken
} = require("../lib/auth");

const host = process.env.HOST || "127.0.0.1";
const requestedPort = Number(process.env.PORT || process.argv[2] || 8080);
const attempts = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
  ".mov": "video/quicktime",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2"
};

function resolveFilePath(urlPath) {
  let pathname = decodeURIComponent(urlPath);
  if (pathname === "/") pathname = "/index.html";
  if (pathname === "/dealer-access") pathname = "/dealer-access.html";

  const filePath = path.resolve(root, `.${pathname}`);
  if (!filePath.startsWith(root + path.sep) && filePath !== root) return null;
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) return path.join(filePath, "index.html");
  return filePath;
}

function redirect(response, location, cookies) {
  response.writeHead(303, {
    "Location": location,
    "Cache-Control": "no-store",
    ...(cookies ? { "Set-Cookie": cookies } : {})
  });
  response.end();
}

function isRateLimited(address, now = Date.now()) {
  const record = attempts.get(address);
  if (!record || now - record.startedAt >= WINDOW_MS) {
    attempts.delete(address);
    return false;
  }
  return record.count >= MAX_ATTEMPTS;
}

function recordFailure(address, now = Date.now()) {
  const record = attempts.get(address);
  if (!record || now - record.startedAt >= WINDOW_MS) {
    attempts.set(address, { count: 1, startedAt: now });
  } else {
    record.count += 1;
  }
}

function handleLogin(request, response) {
  let body = "";
  request.on("data", chunk => {
    body += chunk;
    if (body.length > 4096) request.destroy();
  });
  request.on("end", () => {
    const form = new URLSearchParams(body);
    const next = sanitizeNext(form.get("next"));
    const address = request.socket.remoteAddress || "unknown";

    if (isRateLimited(address)) {
      redirect(response, `/dealer-access?error=rate&next=${encodeURIComponent(next)}`);
      return;
    }
    if (!verifyPassword(form.get("password") || "")) {
      recordFailure(address);
      redirect(response, `/dealer-access?error=invalid&next=${encodeURIComponent(next)}`);
      return;
    }

    attempts.delete(address);
    redirect(response, next, getSessionCookie(createSessionToken(), false));
  });
}

function serveFile(response, pathname) {
  const filePath = resolveFilePath(pathname);
  if (!filePath) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, body) => {
    if (error) {
      response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      response.end(`404 Not Found: ${pathname}`);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    response.writeHead(200, {
      "Content-Type": contentTypes[ext] || "application/octet-stream",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN"
    });
    response.end(body);
  });
}

function createServer() {
  return http.createServer((request, response) => {
    const url = new URL(request.url || "/", `http://${host}`);

    if (request.method === "POST" && url.pathname === "/api/auth/login") {
      handleLogin(request, response);
      return;
    }
    if (request.method === "POST" && url.pathname === "/api/auth/logout") {
      redirect(response, "/dealer-access", getExpiredSessionCookies(false));
      return;
    }
    if (url.pathname === "/dealer-access" || url.pathname === "/dealer-access.html") {
      serveFile(response, "/dealer-access.html");
      return;
    }

    const cookies = parseCookies(request.headers.cookie || "");
    if (!verifySessionToken(cookies[LOCAL_COOKIE_NAME])) {
      const loginUrl = `/dealer-access?next=${encodeURIComponent(`${url.pathname}${url.search}`)}`;
      response.writeHead(307, { "Location": loginUrl, "Cache-Control": "no-store" });
      response.end();
      return;
    }

    serveFile(response, url.pathname);
  });
}

function listen(port) {
  const server = createServer();
  server.on("error", error => {
    if (error.code === "EADDRINUSE" && port !== 8085) {
      listen(8085);
      return;
    }
    console.error(`Failed to start local server: ${error.message}`);
    process.exit(1);
  });
  server.listen(port, host, () => {
    console.log("");
    console.log("=========================================================");
    console.log("  GenCore authenticated local server is running.");
    console.log(`  Browser URL: http://${host}:${port}/`);
    console.log("  Press Ctrl+C in this terminal to stop the server.");
    console.log("=========================================================");
    console.log("");
  });
}

listen(requestedPort);
