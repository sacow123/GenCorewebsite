const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

const coords = [
{"index":0,"class":"mf-callout-custom center top-arrow","style":"left: 33.8%; top: 28.1%; min-width: 250px; cursor: move; pointer-events: auto; opacity: 1; right: auto;"},
{"index":1,"class":"mf-callout-custom center right-arrow top-arrow","style":"left: 58.2%; top: 55.5%; min-width: 250px; cursor: move; pointer-events: auto; opacity: 1; right: auto;"},
{"index":2,"class":"mf-callout-custom center right-arrow","style":"left: 80%; top: 42.8%; min-width: 250px; cursor: move; pointer-events: auto; opacity: 1; right: auto;"},
{"index":3,"class":"mf-callout-custom center right-arrow bottom-arrow","style":"left: 80.1%; top: 73.8%; min-width: 250px; cursor: move; pointer-events: auto; opacity: 1; right: auto;"},
{"index":4,"class":"mf-callout-custom center right-arrow bottom-arrow","style":"left: 80.1%; top: 86.6%; min-width: 250px; cursor: move; pointer-events: auto; opacity: 1; right: auto;"}
];

const popups = [
    { title: "가공 시작" },
    { title: "가공 중지" },
    { title: "Tool return" },
    { title: "Auto off" },
    { title: "Vacuum" }
];

for (let i = 0; i < 5; i++) {
    const targetTitle = popups[i].title;
    const newData = coords[i];
    
    // Clean up style
    let cleanStyle = newData.style;
    cleanStyle = cleanStyle.replace(/cursor:\s*move;/g, '');
    cleanStyle = cleanStyle.replace(/pointer-events:\s*auto;/g, '');
    cleanStyle = cleanStyle.replace(/opacity:\s*1;/g, '');
    cleanStyle = cleanStyle.replace(/right:\s*auto;/g, '');
    cleanStyle = cleanStyle.replace(/\s+/g, ' ').trim();
    // remove double spaces or space before semicolon
    cleanStyle = cleanStyle.replace(/ ;/g, ';').replace(/; /g, '; ').replace(/  /g, ' ');
    if (cleanStyle.endsWith(' ')) cleanStyle = cleanStyle.trim();

    const regex = new RegExp('<div class="mf-callout-custom[^>]*?><span class="title">' + targetTitle + '</span>', 'g');
    const match = regex.exec(c);
    
    if (match) {
        const replaceString = '<div class="' + newData.class + '" style="' + cleanStyle + '"><span class="title">' + targetTitle + '</span>';
        c = c.replace(match[0], replaceString);
        console.log('Replaced ' + targetTitle);
    } else {
        console.log('Could not find ' + targetTitle);
    }
}

// Clean up dev tools
const devToolsStart = c.indexOf('<!-- Developer Drag & Drop UI (Callouts Only) -->');
if (devToolsStart > -1) {
    const devToolsEnd = c.indexOf('</script>', devToolsStart) + 9;
    c = c.substring(0, devToolsStart) + c.substring(devToolsEnd);
    console.log('Cleaned up dev tools.');
} else {
    // If we can't find the comment, look for the style tag and coord-display explicitly
    const start2 = c.indexOf('<style>\\n              .mf-callout-custom.temp-drag');
    if (start2 > -1) {
        const end2 = c.indexOf('</script>', start2) + 9;
        c = c.substring(0, start2) + c.substring(end2);
        console.log('Cleaned up dev tools (fallback).');
    }
}

fs.writeFileSync('index.html', c);
console.log('Done.');
