const fs = require('fs');
const text = fs.readFileSync('index.html', 'utf8');
const sectionMatch = text.match(/<section id="sec-mf-collet" class="content-section">[\s\S]*?<\/section>/);
if (sectionMatch) {
  const section = sectionMatch[0];
  const h3s = section.match(/<h3.*?>.*?<\/h3>/g);
  console.log(h3s);
} else {
  console.log("Section not found");
}
