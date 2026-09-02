const {
  createSessionToken,
  getSessionCookie,
  sanitizeNext,
  verifyPassword
} = require("../../lib/auth");

const attempts = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS = 5;

function getClientAddress(request) {
  return String(request.headers["x-forwarded-for"] || request.socket?.remoteAddress || "unknown")
    .split(",")[0]
    .trim();
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
    return;
  }
  record.count += 1;
}

function redirect(response, location) {
  response.statusCode = 303;
  response.setHeader("Location", location);
  response.setHeader("Cache-Control", "no-store");
  response.end();
}

module.exports = async function login(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  const next = sanitizeNext(request.body?.next);
  const address = getClientAddress(request);

  if (isRateLimited(address)) {
    redirect(response, `/dealer-access?error=rate&next=${encodeURIComponent(next)}`);
    return;
  }

  if (!process.env.DEALER_PASSWORD_HASH || !process.env.SESSION_SECRET) {
    response.status(503).json({ error: "Authentication is not configured." });
    return;
  }

  if (!verifyPassword(request.body?.password || "")) {
    recordFailure(address);
    redirect(response, `/dealer-access?error=invalid&next=${encodeURIComponent(next)}`);
    return;
  }

  attempts.delete(address);
  const token = createSessionToken();
  response.setHeader("Set-Cookie", getSessionCookie(token, true));
  redirect(response, next);
};
