const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The buggy part:
// if (inTable) { htmlContent += '</tbody></table></div>'; inTable = false; tableRow = []; }

// The replacement:
const replacement = `if (inTable) {
                  if (tableRow.length > 0) {
                    while (tableRow.length < 3) tableRow.push('');
                    htmlContent += '<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 10px; font-weight: 700;">' + tableRow[0] + '</td><td style="padding: 10px;">' + tableRow[1] + '</td><td style="padding: 10px; color: #6b7280;">' + tableRow[2] + '</td></tr>';
                  }
                  htmlContent += '</tbody></table></div>'; 
                  inTable = false; 
                  tableRow = []; 
                }`;

html = html.replace(
  /if \(inTable\) \{ htmlContent \+= '<\/tbody><\/table><\/div>'; inTable = false; tableRow = \[\]; \}/g,
  replacement
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed table flush bug');
