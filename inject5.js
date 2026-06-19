const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

// Find the exact M code popup from the main page and remove it
// It's the one we inserted manually earlier today:
// <div class="mf-rounded-rect" style="left:88.2%; top:94.575%; width:6.5%; height:9.35%;"></div>
// <div class="mf-callout-custom right-arrow bottom-arrow" style="left:88.2%; top:93.7%;">
const targetRect = '<div class="mf-rounded-rect" style="left:88.2%; top:94.575%; width:6.5%; height:9.35%;"></div>';
const startIdx = c.indexOf(targetRect);

if(startIdx > -1) {
    const endIdx = c.indexOf('</div>', c.indexOf('</div>', startIdx + targetRect.length) + 6) + 6;
    const before = c.substring(0, startIdx);
    const after = c.substring(endIdx);
    c = before + after;
    fs.writeFileSync('index.html', c);
    console.log('Removed duplicate M-Code popup successfully.');
} else {
    console.log('Duplicate M-Code popup not found.');
}
