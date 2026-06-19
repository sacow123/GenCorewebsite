const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const hookStart = '<!-- 상단 -->';
const hookEnd = '</div>\n        </div>\n      </section>';

const start = c.indexOf(hookStart);
const end = c.indexOf(hookEnd, start);

if (start > -1 && end > -1) {
    let block = c.substring(start, end);
    // Replace <button class="mf-hotspot..." with <div class="mf-hotspot..."
    block = block.replace(/<button class="mf-hotspot([^>]*)>(.*?)<\/button>/g, '<div class="mf-hotspot$1>$2</div>');
    
    c = c.substring(0, start) + block + c.substring(end);
    fs.writeFileSync('index.html', c);
    console.log('Converted buttons to divs.');
} else {
    console.log('Hooks not found.');
}
