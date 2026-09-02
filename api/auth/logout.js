const { getExpiredSessionCookies } = require("../../lib/auth");

module.exports = function logout(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    response.status(405).json({ error: "Method not allowed" });
    return;
  }

  response.setHeader("Set-Cookie", getExpiredSessionCookies(true));
  response.setHeader("Cache-Control", "no-store");
  response.statusCode = 303;
  response.setHeader("Location", "/dealer-access");
  response.end();
};
