const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const mainSecStart = c.indexOf('<section id="sec-mf-main-page"');
const mainSecEnd = c.indexOf('</section>', mainSecStart);
let mainSec = c.substring(mainSecStart, mainSecEnd);

// The hotspots and callouts
const data = [
  { hot_left: 60.2, hot_width: 13.3, name: '툴 리스트 페이지' },
  { hot_left: 83.4, hot_width: 4.3, name: '워밍업' },
  { hot_left: 88.5, hot_width: 4.3, name: '셋업 페이지' },
  { hot_left: 93.7, hot_width: 4.2, name: '종료' }
];

data.forEach(item => {
  // calculate perfect left
  const perfectLeft = (item.hot_left + (item.hot_width / 2) + 1.26).toFixed(1);
  
  // Find the callout div for this item
  const regex = new RegExp(`(<div class="mf-callout-custom[^>]*right-arrow[^>]*" style="[^"]*)left:\\s*[\\d\\.]+%;([^"]*"><span class="title">${item.name})`);
  
  mainSec = mainSec.replace(regex, `$1left: ${perfectLeft}%;$2`);
  
  // Just in case left: is at the end or somewhere else
  // Let's do a more robust replace:
  // Find the exact div string
  const divStart = mainSec.indexOf(`<span class="title">${item.name}`);
  if(divStart > -1) {
     const tagStart = mainSec.lastIndexOf('<div', divStart);
     let tagStr = mainSec.substring(tagStart, divStart);
     if(tagStr.includes('right-arrow')) {
         tagStr = tagStr.replace(/left:\s*[\d\.]+%;/, `left: ${perfectLeft}%;`);
         mainSec = mainSec.substring(0, tagStart) + tagStr + mainSec.substring(divStart);
     }
  }
});

c = c.substring(0, mainSecStart) + mainSec + c.substring(mainSecEnd);
fs.writeFileSync('index.html', c);
console.log('Fixed alignments');
