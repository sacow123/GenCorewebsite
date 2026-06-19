const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const startIdx = c.indexOf('<section id="sec-mf-main-page"');
const endIdx = c.indexOf('</section>', startIdx);

let mainSec = c.substring(startIdx, endIdx);

// Convert mf-callout to mf-callout-custom with proper arrow classes
mainSec = mainSec.replace(/<div class="mf-callout[^"]*" style="([^"]*)">([\s\S]*?)<\/div>/g, (match, style, innerHTML) => {
    let leftMatch = style.match(/left:\s*([\d.]+)%/);
    let rightMatch = style.match(/right:\s*([\d.]+)%/);
    let topMatch = style.match(/top:\s*([\d.]+)%/);
    
    let leftVal = leftMatch ? parseFloat(leftMatch[1]) : (rightMatch ? 100 - parseFloat(rightMatch[1]) : 0);
    let topVal = topMatch ? parseFloat(topMatch[1]) : 0;
    
    let extraClasses = [];
    if (leftVal > 50) extraClasses.push('right-arrow');
    if (topVal > 50) extraClasses.push('bottom-arrow');
    
    let classStr = 'mf-callout-custom' + (extraClasses.length > 0 ? ' ' + extraClasses.join(' ') : '');
    
    return `<div class="${classStr}" style="${style}">${innerHTML}</div>`;
});

// Add the new button the user requested: left:50.3%; top:9.3%;
// Width and height same as tool list: width:13.3%;height:5.0%;
// Slightly rounded corners: border-radius: 8px;
const newButtonHtml = `
            <button class="mf-hotspot" style="left:50.3%;top:9.3%;width:13.3%;height:5.0%;border-radius:8px;"></button>
            <div class="mf-callout-custom right-arrow" style="left:50.3%;top:14.3%;min-width:200px;">
              <span class="title">Main</span>
              <span class="desc">: Main 메뉴입니다</span>
            </div>
`;

// Insert it right after the first tooltip description (around line 3973)
// Let's just put it before the <!-- 파일 관련 --> comment
mainSec = mainSec.replace('<!-- 파일 관련 -->', newButtonHtml + '\n            <!-- 파일 관련 -->');

c = c.substring(0, startIdx) + mainSec + c.substring(endIdx);

fs.writeFileSync('index.html', c);
console.log('Fixed main page popups and added the missing button!');
