const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

const codeRunReadyCode = `
            <div class="mf-rounded-rect" style="left:76.6%;top:87.8%;width:6.3%;height:8.6%;"></div>
            <div class="mf-callout-custom" style="left:60.0%;top:82.5%;min-width:250px;">
              <span class="title">Code Run</span>
              <span class="desc">: 코드뷰 페이지에서 가공 시작</span>
            </div>

            <div class="mf-rounded-rect" style="left:83.2%;top:87.8%;width:6.3%;height:8.6%;"></div>
            <div class="mf-callout-custom" style="left:65.0%;top:82.5%;min-width:250px;">
              <span class="title">Ready</span>
              <span class="desc">: 가공 준비 상태 표시</span>
            </div>
`;

// Replace M-Code run entirely in sec-mf-code-view
const target = '<button class="mf-hotspot" data-label="M코드 동작중"';
const targetStart = c.indexOf(target);
if(targetStart > -1) {
    const targetEnd = c.indexOf('</div>', targetStart) + 6;
    const before = c.substring(0, targetStart);
    const after = c.substring(targetEnd);
    c = before + codeRunReadyCode + after;
    fs.writeFileSync('index.html', c);
    console.log('Replaced Code Run and Ready successfully.');
} else {
    console.log('Could not find target.');
}
