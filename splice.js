const fs = require('fs');
const goodHTML = fs.readFileSync('index_recovered_utf8.html', 'utf-8');
const badHTML = fs.readFileSync('index.html', 'utf-8');

const startTag = '            <!-- 우측 패널 -->';
const endTag = '      <section id="sec-mf-hd-install"';

const goodStartIdx = goodHTML.indexOf(startTag);
const goodEndIdx = goodHTML.indexOf(endTag);
const missingBlock = goodHTML.substring(goodStartIdx, goodEndIdx);

const badStartIdx = badHTML.indexOf(startTag);
const badEndIdx = badHTML.indexOf(endTag);

const fixedHTML = badHTML.substring(0, badStartIdx) + missingBlock + badHTML.substring(badEndIdx);

fs.writeFileSync('index.html', fixedHTML, 'utf-8');
console.log('Fixed HTML generated directly to index.html');
