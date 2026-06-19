const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const marker = '<!-- 배치 2: 파일/조작 관련 -->';
const startIdx = c.indexOf(marker);

if (startIdx > -1) {
    // Find where the circle HTML ends and the dev tools start
    const endIdx = c.indexOf('<!-- Developer Drag & Drop UI (Clean Move Only) -->', startIdx);
    if (endIdx > -1) {
        c = c.substring(0, startIdx) + c.substring(endIdx);
        fs.writeFileSync('index.html', c);
        console.log('Removed the single circle.');
    } else {
        console.log('Could not find dev tools marker.');
    }
} else {
    console.log('Circle marker not found.');
}
