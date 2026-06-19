const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const lines = html.split('\n');
const out = [];
lines.forEach((line, index) => {
    if (line.includes('iframe') || line.includes('sec-mf-main-page') || line.includes('FINAL_CALLOUT_COORDINATES') || line.includes('BATCH2_COORDINATES')) {
        out.push(`${index + 1}: ${line.trim()}`);
    }
});
fs.writeFileSync('found_html_utf8.txt', out.join('\n'), 'utf8');
