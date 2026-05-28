const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Find the loop styling the list items
html = html.replace(
  /li\.style\.textUnderlineOffset = '4px';/g,
  "li.style.textUnderlineOffset = '4px';\n          li.style.fontWeight = 'bold';"
);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed list items bolding');
