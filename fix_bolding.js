const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix the bolding of short lines that I mistakenly made h5 bold
html = html.replace(
  /'<h5 style="margin: 16px 0 8px 0; font-size: 14px; font-weight: 600; color: #4b5563;">' \+ line \+ '<\/h5>'/g,
  "'<div style=\"margin: 16px 0 8px 0; font-size: 14px; font-weight: normal; color: #4b5563;\">' + line + '</div>'"
);

// Write back
fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed arbitrary bolding');
