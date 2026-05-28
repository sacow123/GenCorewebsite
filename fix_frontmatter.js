const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /let text = dbConfigData\[title\];[\s\S]*?const lines = text\.split\('\\n'\)\.map\(l => l\.trim\(\)\)\.filter\(l => l\);/;

const newCode = `let text = dbConfigData[title];
              let lines = text.split('\\n').map(l => l.trim()).filter(l => l);
              
              // Remove frontmatter robustly
              let startIdx = 0;
              for (let i = 0; i < lines.length; i++) {
                // If it hits "Add a property", we know the real content starts shortly after
                if (lines[i] === 'Add a property') {
                  startIdx = i + 1;
                  // Skip garbage lines directly after 'Add a property' like '댓글' or '??'
                  while (startIdx < lines.length && (
                    lines[startIdx] === '댓글' || 
                    lines[startIdx].includes('??') || 
                    lines[startIdx] === '볤'
                  )) {
                    startIdx++;
                  }
                  break;
                }
              }
              
              if (startIdx > 0 && startIdx < lines.length) {
                // Slice everything before and including the garbage
                lines = lines.slice(startIdx);
              }
              
              // Remove any residual Notion top-level share buttons
              while (lines.length > 0 && (lines[0].includes('공유') || lines[0].includes('5월 21일') || lines[0] === '페이지')) {
                lines = lines.slice(1);
              }
`;

html = html.replace(regex, newCode);
fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed frontmatter bug');
