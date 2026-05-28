const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The problematic code:
// htmlContent += '<div style="margin-bottom: 12px; font-weight: 700; color: #4b5563; padding-left: 21px; margin-left: ' + marginLeft + 'px; position: relative;"><span style="position: absolute; left: 0; top: 0;">•</span>' + textContent + '</div>';

// Replace it with display: flex
const targetStr = `htmlContent += '<div style="margin-bottom: 12px; font-weight: 700; color: #4b5563; padding-left: 21px; margin-left: ' + marginLeft + 'px; position: relative;"><span style="position: absolute; left: 0; top: 0;">•</span>' + textContent + '</div>';`;

const replacementStr = `htmlContent += '<div style="margin-bottom: 12px; font-weight: 700; color: #4b5563; margin-left: ' + marginLeft + 'px; display: flex; align-items: flex-start;"><span style="margin-right: 12px; flex-shrink: 0;">•</span><span>' + textContent + '</span></div>';`;

if (html.includes(targetStr)) {
    html = html.replace(targetStr, replacementStr);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Bullet layout fixed to display: flex');
} else {
    console.log('Target string not found!');
}
