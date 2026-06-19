const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const startMarker = '<!-- 배치 2: 파일/조작 관련 -->';
const endMarker = '<!-- Developer Drag & Drop UI (Clean Move Only) -->';

const startIdx = c.indexOf(startMarker);
const endIdx = c.indexOf(endMarker);

if (startIdx > -1 && endIdx > -1) {
    const labels = [
      {title: "임시 테두리", desc: ": 임시 설명"}
    ];
    
    // Just create 1 pair
    let batchHtml = `\n            <!-- 배치 2: 파일/조작 관련 -->\n`;
    batchHtml += `            <div class="mf-hotspot temp-drag" style="left: 30%; top: 40%; width: 160px; height: 160px; border-radius: 50%;"></div>\n`;
    batchHtml += `            <div class="mf-callout-custom center temp-drag" style="left: 30%; top: 40%; min-width: 250px;"><span class="title">${labels[0].title}</span><span class="desc">${labels[0].desc}</span></div>\n\n            `;
    
    c = c.substring(0, startIdx) + batchHtml + c.substring(endIdx);
    fs.writeFileSync('index.html', c);
    console.log('Removed 5 items, left only 1.');
} else {
    console.log('Markers not found.');
}
