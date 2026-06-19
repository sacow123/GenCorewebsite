const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

const startIdx = c.indexOf('<section id="sec-mf-main-page"');
const endIdx = c.indexOf('<section id="sec-mf-code-view"');

if (startIdx > -1 && endIdx > -1) {
    let mainSec = c.substring(startIdx, endIdx);
    
    // Replace all <button class="mf-hotspot"> with <div class="mf-rect">
    mainSec = mainSec.replace(/<button class="mf-hotspot"/g, '<div class="mf-rect"');
    
    // Replace all <button class="mf-hotspot pill"> with <div class="mf-rounded-rect">
    mainSec = mainSec.replace(/<button class="mf-hotspot pill"/g, '<div class="mf-rounded-rect"');
    
    // Replace closing buttons
    mainSec = mainSec.replace(/><\/button>/g, '></div>');
    
    // Replace callout classes
    mainSec = mainSec.replace(/class="mf-callout small center"/g, 'class="mf-callout-custom"');
    mainSec = mainSec.replace(/class="mf-callout center"/g, 'class="mf-callout-custom"');
    mainSec = mainSec.replace(/class="mf-callout"/g, 'class="mf-callout-custom"');

    c = c.substring(0, startIdx) + mainSec + c.substring(endIdx);
    fs.writeFileSync('index.html', c);
    console.log('Main section updated');
} else {
    console.log('Sections not found');
}
