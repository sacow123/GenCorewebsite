const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const mainSecStart = c.indexOf('<section id="sec-mf-main-page"');
const mainSecEnd = c.indexOf('</section>', mainSecStart) + 10;
let mainSec = c.substring(mainSecStart, mainSecEnd);

// Keep everything up to the end of the <style> tag
const styleEnd = mainSec.lastIndexOf('</style>') + 8;
const beforeButtons = mainSec.substring(0, styleEnd);

// Reconstruct the section: everything up to </style>, then close the divs and section
const cleanMainSec = beforeButtons + `
          </div>
        </div>
      </section>`;

c = c.substring(0, mainSecStart) + cleanMainSec + c.substring(mainSecEnd);

fs.writeFileSync('index.html', c);
console.log('Cleaned main page hotspots and popups');
