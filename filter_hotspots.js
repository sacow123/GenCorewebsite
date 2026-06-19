const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const startTarget = '<!-- 파일 관련 -->';
const endTarget = '</span>\n            </div>';

const mainSecStart = c.indexOf('<section id="sec-mf-main-page"');
const mainSecEnd = c.indexOf('</section>', mainSecStart);

let mainSec = c.substring(mainSecStart, mainSecEnd);

const cutStart = mainSec.indexOf(startTarget);
// Find the last hotspot which is M code block, ending with </div>
const cutEnd = mainSec.lastIndexOf(endTarget) + endTarget.length;

if (cutStart !== -1 && cutEnd !== -1) {
    mainSec = mainSec.substring(0, cutStart) + mainSec.substring(cutEnd);
    c = c.substring(0, mainSecStart) + mainSec + c.substring(mainSecEnd);
    fs.writeFileSync('index.html', c);
    console.log('Removed all unwanted hotspots.');
} else {
    console.log('Could not find start or end target.');
}
