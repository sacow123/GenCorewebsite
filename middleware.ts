const COOKIE_NAME = "__Host-dealer_session";
const SESSION_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;
const PUBLIC_PATHS = new Set([
  "/dealer-access",
  "/dealer-access.html",
  "/api/auth/login",
  "/api/auth/logout"
]);

function parseCookie(header: string | null, name: string) {
  const prefix = `${name}=`;
  for (const item of (header || "").split(";")) {
    const value = item.trim();
    if (value.startsWith(prefix)) return value.slice(prefix.length);
  }
  return "";
}

function decodeBase64Url(value: string) {
  const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
  const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");
  return atob(padded);
}

function timingSafeEqual(left: string, right: string) {
  if (left.length !== right.length) return false;
  let mismatch = 0;
  for (let index = 0; index < left.length; index += 1) {
    mismatch |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return mismatch === 0;
}

async function sign(payload: string, secret: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  const bytes = Array.from(new Uint8Array(signature), byte => String.fromCharCode(byte)).join("");
  return btoa(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function hasValidSession(request: Request) {
  const secret = process.env.SESSION_SECRET || "";
  if (secret.length < 32) return false;

  const token = parseCookie(request.headers.get("cookie"), COOKIE_NAME);
  const [payload, signature, extra] = token.split(".");
  if (!payload || !signature || extra) return false;

  const expected = await sign(payload, secret);
  if (!timingSafeEqual(signature, expected)) return false;

  try {
    const session = JSON.parse(decodeBase64Url(payload));
    const now = Math.floor(Date.now() / 1000);
    return Number.isInteger(session.iat)
      && Number.isInteger(session.exp)
      && session.iat <= now + 60
      && session.exp > now
      && session.exp - session.iat <= SESSION_MAX_AGE_SECONDS
      && String(session.v) === String(process.env.DEALER_PASSWORD_VERSION || "1");
  } catch {
    return false;
  }
}

export const config = {
  matcher: "/:path*"
};

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  if (PUBLIC_PATHS.has(url.pathname)) return;

  if (!process.env.DEALER_PASSWORD_HASH || !process.env.SESSION_SECRET) {
    return new Response("Authentication is not configured.", {
      status: 503,
      headers: { "Cache-Control": "no-store", "Content-Type": "text/plain; charset=utf-8" }
    });
  }

  if (await hasValidSession(request)) return;

  if (url.pathname.startsWith("/api/")) {
    return Response.json({ error: "Authentication required" }, {
      status: 401,
      headers: { "Cache-Control": "no-store" }
    });
  }

  const loginUrl = new URL("/dealer-access", request.url);
  loginUrl.searchParams.set("next", `${url.pathname}${url.search}`);
  return Response.redirect(loginUrl, 307);
}
