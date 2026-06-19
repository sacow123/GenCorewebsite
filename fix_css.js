const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

c = c.replace(/\.mf-hotspot\s*\{\s*position:\s*absolute;\s*border:\s*2px solid rgba\(255, 204, 0, 0\.5\);\s*background:\s*transparent;\s*cursor:\s*pointer;\s*z-index:\s*5;\s*transition:\s*\.15s ease;\s*outline:\s*none;\s*animation:\s*pulse-border 2s infinite;\s*\}/, 
`.mf-hotspot {
                position: absolute;
                border: 5px solid #ffcc00;
                background: transparent;
                cursor: pointer;
                z-index: 5;
                transition: .15s ease;
                outline: none;
              }`);

c = c.replace(/@keyframes pulse-border\s*\{[\s\S]*?100%\s*\{\s*box-shadow:\s*0 0 0 0 rgba\(255, 204, 0, 0\);\s*\}\s*\}/, '');

fs.writeFileSync('index.html', c);
