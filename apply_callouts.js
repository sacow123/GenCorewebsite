const fs = require('fs');

const calloutData = [
  {"index":0,"class":"mf-callout-custom center","style":"left: 26.5%; top: 8.9%; min-width: 315px; cursor: move; pointer-events: auto; opacity: 1;"},
  {"index":1,"class":"mf-callout-custom center right-arrow","style":"left: 67.9%; top: 8.7%; min-width: 295px; cursor: move; pointer-events: auto; opacity: 1; right: auto;"},
  {"index":2,"class":"mf-callout-custom center right-arrow","style":"top: 8.5%; min-width: 190px; left: 88.6%; cursor: move; pointer-events: auto; opacity: 1; right: auto;"},
  {"index":3,"class":"mf-callout-custom center right-arrow","style":"top: 8.5%; min-width: 200px; left: 93.7%; cursor: move; pointer-events: auto; opacity: 1; right: auto;"},
  {"index":4,"class":"mf-callout-custom center right-arrow","style":"top: 8.5%; min-width: 150px; left: 99%; cursor: move; pointer-events: auto; opacity: 1; right: auto;"}
];

let c = fs.readFileSync('index.html', 'utf8');

// The hotspots and callouts are located between <!-- 상단 --> and the end of the section
const sectionStart = c.indexOf('<section id="sec-mf-main-page"');
const sectionEnd = c.indexOf('</section>', sectionStart);
let section = c.substring(sectionStart, sectionEnd);

const labels = [
  {title: "코드뷰 페이지", desc: ": 코드뷰 페이지로 이동합니다"},
  {title: "툴 리스트 페이지", desc: ": 툴리스트 페이지를 엽니다"},
  {title: "워밍업", desc: ": 워밍업 NC파일을 불러옵니다"},
  {title: "셋업 페이지", desc: ": 셋업 페이지로 이동합니다"},
  {title: "종료", desc: ": 전원을 끕니다"}
];

calloutData.forEach((callout, i) => {
    // Clean up temp styles
    let coStyle = callout.style
        .replace(/cursor: move;\s*/g, '')
        .replace(/pointer-events: auto;\s*/g, '')
        .replace(/opacity: 1;\s*/g, '')
        .replace(/right: auto;\s*/g, '')
        .trim();
        
    // Find the specific callout div for this label
    const titleMatch = `<span class="title">${labels[i].title}</span>`;
    const divStart = section.indexOf(titleMatch);
    if(divStart > -1) {
        const tagStart = section.lastIndexOf('<div', divStart);
        let tagStr = section.substring(tagStart, divStart);
        
        // We replace the style attribute with the new one
        // and also ensure the class is updated (in case right-arrow was added/removed, though the user script didn't modify classes this time, it's safer)
        tagStr = tagStr.replace(/class="[^"]+"/, 'class="' + callout.class + '"');
        tagStr = tagStr.replace(/style="[^"]+"/, 'style="' + coStyle + '"');
        
        section = section.substring(0, tagStart) + tagStr + section.substring(divStart);
    }
});

// Now remove the dev tools
const devToolsStart = section.indexOf('<!-- Developer Drag & Drop UI with Smart Guides (Callouts Only) -->');
const devToolsEnd = section.indexOf('</script>', devToolsStart) + 9;

if (devToolsStart > -1 && devToolsEnd > -1) {
    section = section.substring(0, devToolsStart) + section.substring(devToolsEnd);
}

c = c.substring(0, sectionStart) + section + c.substring(sectionEnd);

fs.writeFileSync('index.html', c);
console.log('Successfully applied final callout coordinates and removed dev tools.');
