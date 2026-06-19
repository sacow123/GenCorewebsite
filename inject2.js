const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

// The new Main button content for sec-mf-code-view
const newCodeViewContent = `
            <div class="mf-rounded-rect" style="left:50.3%; top:9.3%; width:13.5%; height:5.5%;"></div>
            <div class="mf-callout-custom right-arrow" style="left:50.3%; top:9.3%;">
              <span class="title" data-i18n="popup-main-title">Main:</span>
              <span class="desc" data-i18n="popup-main-desc">메인 페이지로 이동합니다.</span>
            </div>
`;

// Extract the <style> block from #sec-mf-main-page
const styleMatch = c.match(/<section id="sec-mf-main-page"[\s\S]*?(<style>[\s\S]*?<\/style>)/);
let styleBlock = '';
if(styleMatch) {
    styleBlock = styleMatch[1].replace(/#sec-mf-main-page/g, '#sec-mf-code-view');
}

// Find #sec-mf-code-view bounds
const startIdx = c.indexOf('<section id="sec-mf-code-view"');
const contentStart = c.indexOf('<img loading="lazy"', startIdx);
const contentEnd = c.indexOf('</div>\r\n        </div>\r\n      </section>', contentStart); // end of inner div

if(startIdx > -1 && contentStart > -1 && contentEnd > -1) {
    // find where the actual tags begin after the img and warning text
    const imgEnd = c.indexOf('</div>', contentStart) + 6;
    
    // Replace the content inside the stage with just the new button
    const before = c.substring(0, imgEnd);
    const after = c.substring(contentEnd);
    
    c = before + '\n' + (styleBlock ? styleBlock + '\n' : '') + newCodeViewContent + after;
    fs.writeFileSync('index.html', c);
}
