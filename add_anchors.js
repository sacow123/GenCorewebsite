const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf-8');

// 1. Add id to menu items
content = content.replace(/<div class="nav-item"\s+data-section="([^"]+)">/g, (match, section_id) => {
    if (match.includes('id="menu-')) return match;
    return match.replace(`data-section="${section_id}"`, `data-section="${section_id}" id="menu-${section_id}"`);
});

// 2. Add ID display to sections
content = content.replace(/(<section id="([^"]+)"[^>]*>)\s*(<h2[^>]*>.*?<\/h2>)/g, (match, p1, p2, p3) => {
    if (match.includes('class="section-anchor"')) return match;
    return `${p1}\n        ${p3}\n        <div class="section-anchor" style="font-size:12px; color:#a855f7; margin-bottom:16px; font-family:monospace;">🔗 Anchor: <a href="#${p2}" style="color:#a855f7; text-decoration:none;">#${p2}</a></div>`;
});

fs.writeFileSync('index.html', content, 'utf-8');
console.log("Done");
