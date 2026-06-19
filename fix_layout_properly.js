const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

// Get the original HTML for main page from recovered_html.txt
const recovered = fs.readFileSync('recovered_html.txt', 'utf8');

const codeViewStartIdx = recovered.indexOf('<section id="sec-mf-code-view"');
let mainPageOriginal = recovered.substring(0, codeViewStartIdx);

// Extract the exact section id="sec-mf-main-page" block from recovered HTML
const startMarker = '<section id="sec-mf-main-page"';
const startIdxRecovered = mainPageOriginal.indexOf(startMarker);
const endIdxRecovered = mainPageOriginal.lastIndexOf('</section>') + 10;
let newMainSec = mainPageOriginal.substring(startIdxRecovered, endIdxRecovered);

// Add the Main button requested by user at left:50.3%; top:9.3%;
const newButtonHtml = `
            <button class="mf-hotspot" style="left:50.3%;top:9.3%;width:13.3%;height:5.0%;border-radius:8px;"></button>
            <div class="mf-callout-custom right-arrow" style="left:50.3%;top:14.3%;min-width:200px;">
              <span class="title">Main</span>
              <span class="desc">: Main 메뉴입니다</span>
            </div>
`;

// Insert it right after the Tool List page button (around left:60.2%)
newMainSec = newMainSec.replace('<!-- 파일 관련 -->', newButtonHtml + '\n            <!-- 파일 관련 -->');

// Replace the section in index.html
const startIdxC = c.indexOf(startMarker);
const endIdxC = c.indexOf('</section>', startIdxC) + 10;

c = c.substring(0, startIdxC) + newMainSec + c.substring(endIdxC);

fs.writeFileSync('index.html', c);
console.log('Restored original main page layout and added Main button');
