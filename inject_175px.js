const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const marker = '<!-- Developer Drag & Drop UI (Clean Move Only) -->';
const markerIdx = c.indexOf(marker);

if (markerIdx > -1) {
    let batchHtml = `\n            <!-- 배치 2: 임시 테두리 (175px) -->\n`;
    batchHtml += `            <div class="mf-hotspot temp-drag" style="left: 30%; top: 40%; width: 175px; height: 175px; border-radius: 50%;"></div>\n`;
    batchHtml += `            <div class="mf-callout-custom center temp-drag" style="left: 30%; top: 40%; min-width: 250px;"><span class="title">임시 테두리</span><span class="desc">: 임시 설명</span></div>\n\n            `;
    
    c = c.substring(0, markerIdx) + batchHtml + c.substring(markerIdx);
    fs.writeFileSync('index.html', c);
    console.log('Injected 175px circular border.');
} else {
    console.log('Marker not found.');
}
