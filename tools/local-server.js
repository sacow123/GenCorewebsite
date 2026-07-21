const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const host = process.env.HOST || "127.0.0.1";
const requestedPort = Number(process.env.PORT || process.argv[2] || 8080);

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
  let pathname = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  if (pathname === "/") pathname = "/index.html";

  const filePath = path.resolve(root, `.${pathname}`);
  if (!filePath.startsWith(root + path.sep) && filePath !== root) {
    return null;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    return path.join(filePath, "index.html");
  }

  return filePath;
}

function createServer() {
  return http.createServer((req, res) => {
    const filePath = resolveFilePath(req.url || "/");

    if (!filePath) {
      res.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Forbidden");
      return;
    }

    fs.readFile(filePath, (error, body) => {
      if (error) {
        res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
        res.end(`404 Not Found: ${req.url}`);
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, {
        "Content-Type": contentTypes[ext] || "application/octet-stream",
        "Cache-Control": "no-store"
      });
      res.end(body);
    });
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
    const url = `http://${host}:${port}/`;
    console.log("");
    console.log("=========================================================");
    console.log("  GenCore local server is running.");
    console.log(`  Browser URL: ${url}`);
    console.log("  Press Ctrl+C in this terminal to stop the server.");
    console.log("=========================================================");
    console.log("");
  });
}

listen(requestedPort);
