const fs = require('fs');

const rawData = [
  {"index":0,"class":"mf-hotspot pill","style":"left: 26.4%; top: 5.4%; width: 13.2%; height: 5%; border-radius: 999px; cursor: move; pointer-events: auto; right: auto;"},
  {"index":1,"class":"mf-callout-custom center","style":"left: 26.5%; top: 8.9%; min-width: 315px; cursor: move; pointer-events: auto; opacity: 1;"},
  {"index":2,"class":"mf-hotspot pill","style":"left: 60.3%; top: 5.4%; width: 13.3%; height: 5%; border-radius: 999px; cursor: move; pointer-events: auto; right: auto;"},
  {"index":3,"class":"mf-callout-custom center right-arrow","style":"left: 68.1%; top: 8.6%; min-width: 295px; cursor: move; pointer-events: auto; opacity: 1;"},
  {"index":4,"class":"mf-hotspot","style":"left: 83.4%; top: 2%; width: 4.3%; height: 6.8%; border-radius: 50%; cursor: move; pointer-events: auto; right: auto;"},
  {"index":5,"class":"mf-callout-custom center right-arrow","style":"top: 8.5%; min-width: 190px; left: 86.8%; cursor: move; pointer-events: auto; opacity: 1;"},
  {"index":6,"class":"mf-hotspot","style":"left: 88.5%; top: 2%; width: 4.3%; height: 6.8%; border-radius: 50%; cursor: move; pointer-events: auto; right: auto;"},
  {"index":7,"class":"mf-callout-custom center right-arrow","style":"top: 8.4%; min-width: 200px; left: 91.9%; cursor: move; pointer-events: auto; opacity: 1;"},
  {"index":8,"class":"mf-hotspot","style":"left: 93.6%; top: 1.9%; width: 4.2%; height: 6.8%; border-radius: 50%; cursor: move; pointer-events: auto; right: auto;"},
  {"index":9,"class":"mf-callout-custom center right-arrow","style":"top: 8.5%; min-width: 150px; left: 97.1%; cursor: move; pointer-events: auto; opacity: 1;"}
];

const labels = [
  {title: "코드뷰 페이지", desc: ": 코드뷰 페이지로 이동합니다"},
  {title: "툴 리스트 페이지", desc: ": 툴리스트 페이지를 엽니다"},
  {title: "워밍업", desc: ": 워밍업 NC파일을 불러옵니다"},
  {title: "셋업 페이지", desc: ": 셋업 페이지로 이동합니다"},
  {title: "종료", desc: ": 전원을 끕니다"}
];

let finalHtml = `            <!-- 상단 -->\n`;

for(let i=0; i<5; i++) {
    let hotspot = rawData[i*2];
    let callout = rawData[i*2+1];

    // Clean up temporary drag/drop inline styles
    let hsStyle = hotspot.style
        .replace(/cursor: move;\s*/g, '')
        .replace(/pointer-events: auto;\s*/g, '')
        .replace(/right: auto;\s*/g, '')
        .trim();
        
    let coStyle = callout.style
        .replace(/cursor: move;\s*/g, '')
        .replace(/pointer-events: auto;\s*/g, '')
        .replace(/opacity: 1;\s*/g, '')
        .replace(/right: auto;\s*/g, '')
        .trim();
        
    finalHtml += `            <button class="${hotspot.class}" style="${hsStyle}"></button>\n`;
    finalHtml += `            <div class="${callout.class}" style="${coStyle}"><span class="title">${labels[i].title}</span><span class="desc">${labels[i].desc}</span></div>\n\n`;
}

// Read index.html and replace
let c = fs.readFileSync('index.html', 'utf8');

// The dev tools start at <!-- Developer Drag & Drop UI with Smart Guides -->
const startToken = '<!-- Developer Drag & Drop UI with Smart Guides -->';
// And end at the last closing div of the section.
const endToken = '</div>\n        </div>\n      </section>';

const startIndex = c.indexOf(startToken);
const endIndex = c.indexOf(endToken, startIndex);

if (startIndex > -1 && endIndex > -1) {
    c = c.substring(0, startIndex) + finalHtml + '          ' + c.substring(endIndex);
    fs.writeFileSync('index.html', c);
    console.log('Successfully applied final coordinates from user and removed dev tools completely.');
} else {
    console.log('Could not find injection boundaries.');
}
