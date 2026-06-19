const fs = require('fs');

const rawData = [
  {"index":0,"class":"mf-callout-custom center","style":"left: 34.9%; top: 56.8%; min-width: 250px; display: block !important; opacity: 1; cursor: move; pointer-events: auto; right: auto;"},
  {"index":1,"class":"mf-callout-custom center","style":"left: 51.9%; top: 56.9%; min-width: 250px; display: block !important; opacity: 1; cursor: move; pointer-events: auto; right: auto;"},
  {"index":2,"class":"mf-callout-custom center","style":"left: 66.4%; top: 40.6%; min-width: 250px; display: block !important; opacity: 1; cursor: move; pointer-events: auto; right: auto;"},
  {"index":3,"class":"mf-callout-custom center","style":"left: 66.3%; top: 52.6%; min-width: 250px; display: block !important; opacity: 1; cursor: move; pointer-events: auto; right: auto;"},
  {"index":4,"class":"mf-callout-custom center","style":"left: 66.4%; top: 65.4%; min-width: 250px; display: block !important; opacity: 1; cursor: move; pointer-events: auto; right: auto;"}
];

let popups = rawData.map(d => {
    let style = d.style
        .replace(/cursor: move;\s*/g, '')
        .replace(/pointer-events: auto;\s*/g, '')
        .replace(/display: block !important;\s*/g, '')
        .replace(/opacity: 1 !important;\s*/g, '')
        .replace(/opacity: 1;\s*/g, '')
        .replace(/right: auto;\s*/g, '')
        .trim();
        
    let leftMatch = style.match(/left:\s*([\d.]+)%/);
    let topMatch = style.match(/top:\s*([\d.]+)%/);
    
    let extraClass = '';
    if (leftMatch && parseFloat(leftMatch[1]) > 50) extraClass += ' right-arrow';
    if (topMatch && parseFloat(topMatch[1]) > 50) extraClass += ' bottom-arrow';
    
    return {
        style: style,
        classStr: d.class.replace(' temp-drag', '') + extraClass
    };
});

let c = fs.readFileSync('index.html', 'utf8');

// Replace the Play popup
const playStart = c.indexOf('<div class="mf-callout-custom center temp-drag" style="left: 30%; top: 40%; min-width: 250px; display: block !important; opacity: 1 !important;"><span class="title">가공 시작</span>');
if (playStart > -1) {
    const playEnd = c.indexOf('</div>', playStart) + 6;
    let newHtml = `<div class="${popups[0].classStr}" style="${popups[0].style}"><span class="title">가공 시작</span><span class="desc">: 기계 가공을 시작합니다</span></div>`;
    c = c.substring(0, playStart) + newHtml + c.substring(playEnd);
}

// Replace the Stop popup
const stopStart = c.indexOf('<div class="mf-callout-custom center temp-drag" style="left: 30%; top: 40%; min-width: 250px; display: block !important; opacity: 1 !important;"><span class="title">가공 중지</span>');
if (stopStart > -1) {
    const stopEnd = c.indexOf('</div>', stopStart) + 6;
    let newHtml = `<div class="${popups[1].classStr}" style="${popups[1].style}"><span class="title">가공 중지</span><span class="desc">: 기계 가공을 중지합니다</span></div>`;
    c = c.substring(0, stopStart) + newHtml + c.substring(stopEnd);
}

// Replace Tool Return
const toolStart = c.indexOf('<div class="mf-callout-custom center temp-drag" style="left: 30%; top: 40%; min-width: 250px; display: block !important; opacity: 1 !important;"><span class="title">Tool return</span>');
if (toolStart > -1) {
    const toolEnd = c.indexOf('</div>', toolStart) + 6;
    let newHtml = `<div class="${popups[2].classStr}" style="${popups[2].style}"><span class="title">Tool return</span><span class="desc">: 툴을 반환합니다</span></div>`;
    c = c.substring(0, toolStart) + newHtml + c.substring(toolEnd);
}

// Replace Auto Off
const autoStart = c.indexOf('<div class="mf-callout-custom center temp-drag" style="left: 30%; top: 52%; min-width: 250px; display: block !important; opacity: 1 !important;"><span class="title">Auto off</span>');
if (autoStart > -1) {
    const autoEnd = c.indexOf('</div>', autoStart) + 6;
    let newHtml = `<div class="${popups[3].classStr}" style="${popups[3].style}"><span class="title">Auto off</span><span class="desc">: 작업을 자동 종료합니다</span></div>`;
    c = c.substring(0, autoStart) + newHtml + c.substring(autoEnd);
}

// Replace Vacuum
const vacStart = c.indexOf('<div class="mf-callout-custom center temp-drag" style="left: 30%; top: 64%; min-width: 250px; display: block !important; opacity: 1 !important;"><span class="title">Vacuum</span>');
if (vacStart > -1) {
    const vacEnd = c.indexOf('</div>', vacStart) + 6;
    let newHtml = `<div class="${popups[4].classStr}" style="${popups[4].style}"><span class="title">Vacuum</span><span class="desc">: 집진기를 작동시킵니다</span></div>`;
    c = c.substring(0, vacStart) + newHtml + c.substring(vacEnd);
}

// Clean up the dev tools entirely for now
const devToolsStart = c.indexOf('<!-- Developer Drag & Drop UI (Callouts Only) -->');
if (devToolsStart > -1) {
    const devToolsEnd = c.indexOf('</script>', devToolsStart) + 9;
    c = c.substring(0, devToolsStart) + c.substring(devToolsEnd);
}

// Add hover logic for .mf-hotspot
const styleStart = c.indexOf('<style>');
if (styleStart > -1) {
    const styleBlockEnd = c.indexOf('</style>', styleStart);
    if (!c.substring(styleStart, styleBlockEnd).includes('.mf-hotspot:hover + .mf-callout-custom')) {
        const hoverCss = `
              .mf-hotspot:hover + .mf-callout-custom,
              .mf-hotspot:hover + .mf-callout-custom.right-arrow,
              .mf-hotspot:hover + .mf-callout-custom.bottom-arrow,
              .mf-hotspot:hover + .mf-callout-custom.right-arrow.bottom-arrow {
                opacity: 1;
              }
`;
        c = c.substring(0, styleBlockEnd) + hoverCss + c.substring(styleBlockEnd);
    }
}


fs.writeFileSync('index.html', c);
console.log('Finalized Batch 2 popup positions and hover rules.');
