const fs = require('fs');
const frontB64 = fs.readFileSync('c:/Users/USER/Desktop/2026-gencore- manual/public/MillFix front.png', 'base64');
const sideB64 = fs.readFileSync('c:/Users/USER/Desktop/2026-gencore- manual/public/MillFix side.png', 'base64');

let html = fs.readFileSync('c:/Users/USER/Desktop/2026-gencore- manual/index.html', 'utf8');

const frontTag = `<img src="data:image/png;base64,${frontB64}" alt="MillFix 정면 도면" style="height: 350px; border-radius: 8px; object-fit: contain;">`;
const sideTag = `<img src="data:image/png;base64,${sideB64}" alt="MillFix 측면 도면" style="height: 350px; border-radius: 8px; object-fit: contain;">`;

html = html.replace(/<div class="img-placeholder"[^>]*>.*?URL.*?<\/div>/, frontTag);
html = html.replace(/<div class="img-placeholder"[^>]*>.*?URL.*?<\/div>/, sideTag);

fs.writeFileSync('c:/Users/USER/Desktop/2026-gencore- manual/index.html', html, 'utf8');
console.log('Images injected!');
