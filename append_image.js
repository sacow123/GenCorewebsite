const fs = require('fs');
const imgB64 = fs.readFileSync('c:/Users/USER/Desktop/2026-gencore- manual/public/MillFix part left.png', 'base64');
let js = fs.readFileSync('c:/Users/USER/Desktop/2026-gencore- manual/images.js', 'utf8');

js = js.replace('};', '  ,"mf-part-left": "data:image/png;base64,' + imgB64 + '"\n};');

fs.writeFileSync('c:/Users/USER/Desktop/2026-gencore- manual/images.js', js, 'utf8');
console.log('Added mf-part-left to images.js');
