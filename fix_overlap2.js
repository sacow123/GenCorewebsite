const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetRegex = /if \(line\.length > 0\) \{[\s\S]*?\}\s*\}/;

const newLogic = `if (line.length > 0) {
                let dashMatch = line.match(/^(-+)/);
                let dashCount = dashMatch ? dashMatch[1].length : 0;
                let textContent = line.replace(/^(-+)/, '').trim();
                let marginLeft = dashCount * 30; // 30px per dash
                  
                  if (textContent === 'General settings') {
                    htmlContent += '<div style="float: right; width: 340px; max-width: 340px;"><img src="./images/sec-mf-Dbconfig/Boundaryoffsetangle.webp" style="width: 320px; border-radius: 8px; margin: 0 0 16px 20px; object-fit: contain; box-shadow: 0 4px 12px rgba(0,0,0,0.1); display: block;"></div>';
                    currentMarginRight = 360;
                  } else if (dashCount === 1 && textContent !== 'General settings') {
                    currentMarginRight = 0;
                  }

                if (textContent.includes(':')) {
                  const parts = textContent.split(':');
                  htmlContent += '<div style="margin-bottom: 12px; font-weight: 700; display: flex; gap: 8px; margin-left: ' + marginLeft + 'px; margin-right: ' + currentMarginRight + 'px;"><span style="width: 9px; height: 9px; background: #a855f7; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></span><span>' + parts[0] + ': <span style="color: #d946ef; font-style: italic;">' + parts.slice(1).join(':') + '</span></span></div>';
                } else if (dashCount === 0 && textContent.length < 50 && !textContent.includes('.') && !textContent.includes(',') && !textContent.includes('-')) {
                  // Bold subheader
                  htmlContent += '<div style="margin: 24px ' + currentMarginRight + 'px 12px ' + marginLeft + 'px; font-size: 21px; font-weight: 700; color: #4b5563;">' + textContent + '</div>';
                } else {
                  // Bullet point
                  htmlContent += '<div style="margin-bottom: 12px; font-weight: 700; color: #4b5563; margin-left: ' + marginLeft + 'px; margin-right: ' + currentMarginRight + 'px; display: flex; align-items: flex-start;"><span style="margin-right: 12px; flex-shrink: 0;">•</span><span>' + textContent + '</span></div>';
                }
              }`;

html = html.replace(targetRegex, newLogic);
html = html.replace('let tableRow = [];', 'let tableRow = [];\n            let currentMarginRight = 0;');

fs.writeFileSync('index.html', html, 'utf8');
console.log('margin-right logic applied');
