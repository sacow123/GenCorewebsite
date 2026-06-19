const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

c = c.replace(
    '.mf-hotspot {\r\n                position: absolute;\r\n                border: 2px solid rgba(255, 204, 0, 0.5);',
    '.mf-hotspot {\r\n                position: absolute;\r\n                border: 5px solid #ffcc00;'
);
c = c.replace(
    '.mf-hotspot {\n                position: absolute;\n                border: 2px solid rgba(255, 204, 0, 0.5);',
    '.mf-hotspot {\n                position: absolute;\n                border: 5px solid #ffcc00;'
);

fs.writeFileSync('index.html', c);
console.log('Fixed CSS class');
