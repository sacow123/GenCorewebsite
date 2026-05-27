const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Fix horizontal grid to vertical column for all sections that used this
html = html.replace(
  /grid-template-columns:\s*repeat\(auto-fit,\s*minmax\(280px,\s*1fr\)\)/g,
  'grid-template-columns: 1fr'
);

// 2. Fix the fatal bug that hid all text
html = html.replace(/\|\|\s*line\.includes\(''\)/g, '');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed index.html layout and modal bug');
