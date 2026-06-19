const fs = require('fs');

const rawData = [
  {"index":0,"class":"mf-hotspot pill","style":"left: 26.4%; top: 5.4%; width: 13.2%; height: 5%; border-radius: 999px; cursor: move; pointer-events: auto;"},
  {"index":1,"class":"mf-callout-custom center","style":"left: 26.5%; top: 8.9%; min-width: 315px; cursor: move; pointer-events: auto; opacity: 1;"},
  {"index":2,"class":"mf-hotspot pill","style":"left: 60.2%; top: 4.9%; width: 13.3%; height: 5%; border-radius: 999px; cursor: move; pointer-events: auto;"},
  {"index":3,"class":"mf-callout-custom center","style":"left: 60.5%; top: 8.6%; min-width: 295px; cursor: move; pointer-events: auto; opacity: 1;"},
  {"index":4,"class":"mf-hotspot","style":"left: 83.4%; top: 1.8%; width: 4.3%; height: 6.8%; border-radius: 50%; cursor: move; pointer-events: auto;"},
  {"index":5,"class":"mf-callout-custom center","style":"right: 12%; top: 8.5%; min-width: 190px; cursor: move; pointer-events: auto; opacity: 1; left: 82.2%;"},
  {"index":6,"class":"mf-hotspot","style":"left: 88.5%; top: 1.65%; width: 4.3%; height: 6.8%; border-radius: 50%; cursor: move; pointer-events: auto;"},
  {"index":7,"class":"mf-callout-custom center","style":"right: 7.3%; top: 8.4%; min-width: 200px; cursor: move; pointer-events: auto; opacity: 1; left: 87.4%;"},
  {"index":8,"class":"mf-hotspot","style":"left: 93.7%; top: 1.6%; width: 4.2%; height: 6.8%; border-radius: 50%; cursor: move; pointer-events: auto;"},
  {"index":9,"class":"mf-callout-custom center","style":"right: 2.5%; top: 8.5%; min-width: 150px; cursor: move; pointer-events: auto; opacity: 1; left: 92.5%;"}
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

    // Clean up inline styles
    let hsStyle = hotspot.style.replace(/cursor: move;\s*/g, '').replace(/pointer-events: auto;\s*/g, '').trim();
    let coStyle = callout.style.replace(/cursor: move;\s*/g, '').replace(/pointer-events: auto;\s*/g, '').replace(/opacity: 1;\s*/g, '').trim();
    
    // Clean up multiple right/left properties (keep only left if present)
    if(coStyle.includes('left:') && coStyle.includes('right:')) {
        coStyle = coStyle.replace(/right:\s*[^;]+;\s*/g, '');
    }

    // Determine inversion based on hotspot coordinates
    let leftMatch = hsStyle.match(/left:\s*([\d\.]+)%/);
    let topMatch = hsStyle.match(/top:\s*([\d\.]+)%/);
    
    let leftVal = leftMatch ? parseFloat(leftMatch[1]) : 0;
    let topVal = topMatch ? parseFloat(topMatch[1]) : 0;
    
    let coClass = callout.class;
    if(leftVal > 50.0 && !coClass.includes('right-arrow')) coClass += ' right-arrow';
    if(topVal > 50.0 && !coClass.includes('bottom-arrow')) coClass += ' bottom-arrow';
    
    finalHtml += `            <button class="${hotspot.class}" style="${hsStyle}"></button>\n`;
    finalHtml += `            <div class="${coClass}" style="${coStyle}"><span class="title">${labels[i].title}</span><span class="desc">${labels[i].desc}</span></div>\n\n`;
}

// Now replace the content in index.html
let c = fs.readFileSync('index.html', 'utf8');

// Find the boundaries to replace
// The dev tools start at: <!-- Developer Drag & Drop UI -->
// And end at the last closing div of the section.
const startToken = '<!-- Developer Drag & Drop UI -->';
const endToken = '</div>\n        </div>\n      </section>';

const startIndex = c.indexOf(startToken);
const endIndex = c.indexOf(endToken, startIndex);

if (startIndex > -1 && endIndex > -1) {
    c = c.substring(0, startIndex) + finalHtml + '          ' + c.substring(endIndex);
    fs.writeFileSync('index.html', c);
    console.log('Successfully applied user coordinates and removed dev tools.');
} else {
    console.log('Could not find injection boundaries.');
}
