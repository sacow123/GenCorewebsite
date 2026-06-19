const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const codeViewStartIdx = c.indexOf('<section id="sec-mf-code-view"');
const codeViewEndIdx = c.indexOf('</section>', codeViewStartIdx);

let codeViewSec = c.substring(codeViewStartIdx, codeViewEndIdx);
codeViewSec = codeViewSec.replace(/<button class="mf-hotspot"[^>]*><\/button>/g, '');
codeViewSec = codeViewSec.replace(/<div class="mf-callout[^>]*>[\s\S]*?<\/div>/g, '');

c = c.substring(0, codeViewStartIdx) + codeViewSec + c.substring(codeViewEndIdx);

fs.writeFileSync('index.html', c);
console.log('Cleared code view page');
