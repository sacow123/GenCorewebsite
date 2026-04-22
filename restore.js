const fs = require('fs');

const htmlFile = 'c:/Users/USER/Desktop/2026-gencore- manual/index.html';
const headerFile = 'c:/Users/USER/Desktop/2026-gencore- manual/pristine_header.html';
const sidebarFile = 'c:/Users/USER/Desktop/2026-gencore- manual/pristine_sidebar.html';

let html = fs.readFileSync(htmlFile, 'utf8');
const header = fs.readFileSync(headerFile, 'utf8');
const sidebar = fs.readFileSync(sidebarFile, 'utf8');

// Replace header
html = html.replace(/<header class="site-header">[\s\S]*?<\/header>/, header);

// Replace sidebar
html = html.replace(/<nav id="sidebar" class="sidebar">[\s\S]*?<\/nav>/, sidebar);

// Fix title description tag if corrupted
html = html.replace(/<meta name="description"[^>]*>/, '<meta name="description" content="GenCore 제품 매뉴얼 및 기술 지원 센터">');

fs.writeFileSync(htmlFile, html, 'utf8');
console.log('Restored header and sidebar!');
