const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetRegex = /let marginLeft = dashCount \* 30;[^\n]*/;
const match = html.match(targetRegex);
console.log('Match found:', match ? match[0] : 'None');

if (match) {
    const replacementStr = match[0] + `
                  
                  if (textContent === 'General settings') {
                    htmlContent += '<img src="./images/sec-mf-Dbconfig/Boundaryoffsetangle.webp" style="float: right; width: 40%; max-width: 320px; border-radius: 8px; margin: 0 0 16px 24px; object-fit: contain; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">';
                  }
`;
    html = html.replace(match[0], replacementStr);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('Image injected successfully!');
} else {
    console.log('Target string not found.');
}
