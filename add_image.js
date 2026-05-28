const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Add clear: both to the <hr>
html = html.replace(
  '<hr style="margin: 32px 0 24px; border: 0; border-top: 1px solid #e5e7eb;">', 
  '<hr style="margin: 32px 0 24px; border: 0; border-top: 1px solid #e5e7eb; clear: both;">'
);

// 2. Add the image injection logic
// We need to inject it right after `let marginLeft = dashCount * 30;`
const targetStr = "let marginLeft = dashCount * 30; // 30px per dash";
const replacementStr = targetStr + `
                  
                  if (textContent === 'General settings') {
                    htmlContent += '<img src="./images/sec-mf-Dbconfig/Boundaryoffsetangle.webp" style="float: right; width: 40%; max-width: 320px; border-radius: 8px; margin: 0 0 16px 24px; object-fit: contain; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">';
                  }
`;
html = html.replace(targetStr, replacementStr);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Image injection logic added');
