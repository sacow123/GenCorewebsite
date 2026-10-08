// Protected project behavior: changes require the user's explicit approval.
// Browsers cannot start Node.js; start the local server with 로컬 서버 열기.cmd.
(function redirectFileEntryToLocalServer() {
  if (window.location.protocol !== 'file:') return;
  window.location.replace('http://127.0.0.1:8080/index.html' + window.location.search + window.location.hash);
})();
