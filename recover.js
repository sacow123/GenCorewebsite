const cp = require('child_process');
const fs = require('fs');
const out = cp.execSync('"C:/Users/USER/AppData/Local/GitHubDesktop/app-3.5.10/resources/app/git/cmd/git.exe" show HEAD:index.html');
fs.writeFileSync('index_recovered_utf8.html', out);
