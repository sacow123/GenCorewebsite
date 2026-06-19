const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const mainStart = c.indexOf('<section id="sec-mf-main-page"');
const mainEnd = c.indexOf('</section>', mainStart) + 10;

let mainSec = c.substring(mainStart, mainEnd);

// Remove the injected line-number prefixes like "3831: ", "3832: " etc.
// These appear as standalone tokens at the start of lines inside the HTML
// Pattern: optional whitespace then 4-digit number then ": " then optional more numbers+": "
mainSec = mainSec.replace(/(\n[ \t]*)\d{4}: (\d{4}: )*/g, '$1');

c = c.substring(0, mainStart) + mainSec + c.substring(mainEnd);

fs.writeFileSync('index.html', c);
console.log('Done removing injected line numbers');
