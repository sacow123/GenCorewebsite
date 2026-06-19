const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const startToken = '<!-- 배치 2: 파일/조작 관련 -->';
const endToken = '</script>';

const startIdx = c.indexOf(startToken);
if (startIdx > -1) {
    const endIdx = c.indexOf(endToken, startIdx) + endToken.length;
    if (endIdx > -1) {
        c = c.substring(0, startIdx) + c.substring(endIdx);
        fs.writeFileSync('index.html', c);
        console.log('Removed batch 2 and dev tools.');
    }
} else {
    console.log('Batch 2 not found.');
}
