const crypto = require("crypto");

const SESSION_MAX_AGE_SECONDS = 7 * 24 * 60 * 60;
const PRODUCTION_COOKIE_NAME = "__Host-dealer_session";
const LOCAL_COOKIE_NAME = "dealer_session";

function encodeBase64Url(value) {
  return Buffer.from(value).toString("base64url");
}

function decodeBase64Url(value) {
  return Buffer.from(value, "base64url").toString("utf8");
}

function timingSafeStringEqual(left, right) {
  const leftBuffer = Buffer.from(String(left));
  const rightBuffer = Buffer.from(String(right));
  if (leftBuffer.length !== rightBuffer.length) return false;
  return crypto.timingSafeEqual(leftBuffer, rightBuffer);
}

function verifyPassword(password) {
  const encodedHash = process.env.DEALER_PASSWORD_HASH || "";
  const parts = encodedHash.split("$");
  if (parts.length !== 6 || parts[0] !== "scrypt") return false;

  const cost = Number(parts[1]);
  const blockSize = Number(parts[2]);
  const parallelization = Number(parts[3]);
  const salt = Buffer.from(parts[4], "base64url");
  const expected = Buffer.from(parts[5], "base64url");

  if (!cost || !blockSize || !parallelization || expected.length !== 32) return false;

  const actual = crypto.scryptSync(String(password), salt, expected.length, {
    N: cost,
    r: blockSize,
    p: parallelization,
    maxmem: 64 * 1024 * 1024
  });

  return crypto.timingSafeEqual(actual, expected);
}

function createSessionToken(nowSeconds = Math.floor(Date.now() / 1000)) {
  const sessionSecret = process.env.SESSION_SECRET || "";
  if (sessionSecret.length < 32) throw new Error("SESSION_SECRET is not configured securely.");

  const payload = encodeBase64Url(JSON.stringify({
    iat: nowSeconds,
    exp: nowSeconds + SESSION_MAX_AGE_SECONDS,
    v: String(process.env.DEALER_PASSWORD_VERSION || "1")
  }));
  const signature = crypto.createHmac("sha256", sessionSecret).update(payload).digest("base64url");
  return `${payload}.${signature}`;
}

function verifySessionToken(token, nowSeconds = Math.floor(Date.now() / 1000)) {
  const sessionSecret = process.env.SESSION_SECRET || "";
  if (!token || sessionSecret.length < 32) return false;

  const [payload, signature, extra] = String(token).split(".");
  if (!payload || !signature || extra) return false;

  const expected = crypto.createHmac("sha256", sessionSecret).update(payload).digest("base64url");
  if (!timingSafeStringEqual(signature, expected)) return false;

  try {
    const session = JSON.parse(decodeBase64Url(payload));
    return Number.isInteger(session.iat)
      && Number.isInteger(session.exp)
      && session.iat <= nowSeconds + 60
      && session.exp > nowSeconds
      && session.exp - session.iat <= SESSION_MAX_AGE_SECONDS
      && String(session.v) === String(process.env.DEALER_PASSWORD_VERSION || "1");
  } catch {
    return false;
  }
}

function parseCookies(cookieHeader = "") {
  return cookieHeader.split(";").reduce((cookies, item) => {
    const separator = item.indexOf("=");
    if (separator < 0) return cookies;
    const name = item.slice(0, separator).trim();
    const value = item.slice(separator + 1).trim();
    if (name) cookies[name] = value;
    return cookies;
  }, {});
}

function sanitizeNext(value) {
  const candidate = typeof value === "string" ? value : "/";
  if (!candidate.startsWith("/") || candidate.startsWith("//") || candidate.includes("\\")) return "/";
  if (candidate.startsWith("/dealer-access") || candidate.startsWith("/api/auth/")) return "/";
  return candidate;
}

function getSessionCookie(token, secure = true) {
  const cookieName = secure ? PRODUCTION_COOKIE_NAME : LOCAL_COOKIE_NAME;
  const secureAttribute = secure ? "; Secure" : "";
  return `${cookieName}=${token}; Path=/; HttpOnly${secureAttribute}; SameSite=Lax; Max-Age=${SESSION_MAX_AGE_SECONDS}`;
}

function getExpiredSessionCookies(secure = true) {
  const names = secure ? [PRODUCTION_COOKIE_NAME] : [LOCAL_COOKIE_NAME, PRODUCTION_COOKIE_NAME];
  return names.map(name => `${name}=; Path=/; HttpOnly${secure ? "; Secure" : ""}; SameSite=Lax; Max-Age=0`);
}

module.exports = {
  LOCAL_COOKIE_NAME,
  PRODUCTION_COOKIE_NAME,
  createSessionToken,
  getExpiredSessionCookies,
  getSessionCookie,
  parseCookies,
  sanitizeNext,
  verifyPassword,
  verifySessionToken
};
