const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

c = c.replace(/\.mf-hotspot\s*\{[\s\S]*?\}/g, (match) => {
    return match.replace(/border:\s*2px solid rgba\(255,\s*204,\s*0,\s*0\.5\);/g, 'border: 5px solid #ffcc00;');
});

fs.writeFileSync('index.html', c);
console.log('Fixed ALL .mf-hotspot border thicknesses');
