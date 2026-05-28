const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace script tags
html = html.replace('<script src="dbconfig-data.js"></script>', '<script src="dbconfig-data-en.js"></script>\n  <script src="dbconfig-data-ko.js"></script>');

// 2. Replace dbConfigData usage
const targetStr = `if (typeof dbConfigData !== 'undefined' && dbConfigData[title]) {
            let text = dbConfigData[title];`;
              
const replacementStr = `let db = null;
            if (typeof currentLang !== 'undefined') {
              if (currentLang === 'ko' && typeof dbConfigDataKO !== 'undefined') db = dbConfigDataKO;
              else if (currentLang === 'ja' && typeof dbConfigDataJA !== 'undefined') db = dbConfigDataJA;
              else if (currentLang === 'zh' && typeof dbConfigDataZH !== 'undefined') db = dbConfigDataZH;
              else if (currentLang === 'es' && typeof dbConfigDataES !== 'undefined') db = dbConfigDataES;
            }
            if (!db && typeof dbConfigDataEN !== 'undefined') db = dbConfigDataEN; // Fallback to English
            
            if (db && db[title]) {
              let text = db[title];`;

if (html.includes(targetStr)) {
    html = html.replace(targetStr, replacementStr);
    fs.writeFileSync('index.html', html, 'utf8');
    console.log('HTML updated successfully');
} else {
    console.log('Target string not found in index.html!');
}
