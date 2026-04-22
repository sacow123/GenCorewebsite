const fs = require('fs');

const htmlPath = 'c:/Users/USER/Desktop/2026-gencore- manual/index.html';
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace the content of sections that are now dynamic
const dynamicSections = [
  "sec-mf-spec", "sec-mf-parts", "sec-mai-spec", "sec-mai-intro"
];

dynamicSections.forEach(id => {
  const regex = new RegExp(`(<section id="${id}"[^>]*>)([\\s\\S]*?)(</section>)`, 'g');
  html = html.replace(regex, (match, start, inner, end) => {
    // Keep h2 and p.subtitle if they exist
    const h2Match = inner.match(/<h2[^>]*>.*?<\/h2>/);
    const subMatch = inner.match(/<p class="subtitle"[^>]*>.*?<\/p>/);
    
    let newInner = '\n        ';
    if (h2Match) newInner += h2Match[0] + '\n        ';
    if (subMatch) newInner += subMatch[0] + '\n        ';
    newInner += '<div class="content-card"></div>\n      ';
    
    return start + newInner + end;
  });
});

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('index.html sections cleaned up for dynamic hydration!');
