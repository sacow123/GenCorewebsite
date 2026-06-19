const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

// Replace those two divs that don't pulse with proper mf-hotspot buttons
c = c.replace(
    '<div class="mf-rounded-rect" style="left:88.2%; top:94.575%; width:6.5%; height:9.35%;"></div>',
    '<button class="mf-hotspot" style="left:88.2%; top:94.575%; width:6.5%; height:9.35%; border-radius:12px;"></button>'
);

c = c.replace(
    '<div class="mf-rounded-rect" style="left:95.0%; top:94.375%; width:5.5%; height:8.35%;"></div>',
    '<button class="mf-hotspot" style="left:95.0%; top:94.375%; width:5.5%; height:8.35%; border-radius:12px;"></button>'
);

// We need to also allow mf-hotspot to trigger the .mf-callout-custom visibility
// But we actually DO already have that in the CSS:
// .mf-hotspot:hover+.mf-callout-custom, .mf-rounded-rect:hover+.mf-callout-custom, .mf-rect:hover+.mf-callout-custom

fs.writeFileSync('index.html', c);
console.log('Replaced custom divs with mf-hotspot buttons for pulse effect');
