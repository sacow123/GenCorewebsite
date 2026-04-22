const fs = require('fs');

const htmlFile = 'c:/Users/USER/Desktop/2026-gencore- manual/index.html';
let html = fs.readFileSync(htmlFile, 'utf8');

// Regex to find the images
const frontRegex = /<img src="(data:image\/png;base64,[^"]+)" alt="MillFix 정면 도면"[^>]*>/;
const sideRegex = /<img src="(data:image\/png;base64,[^"]+)" alt="MillFix 측면 도면"[^>]*>/;

const frontMatch = html.match(frontRegex);
const sideMatch = html.match(sideRegex);

if (frontMatch && sideMatch) {
  const imagesJsContent = `// Auto-generated Image Data File
const IMAGES = {
  "mf-spec-front": "${frontMatch[1]}",
  "mf-spec-side": "${sideMatch[1]}"
};
`;
  fs.writeFileSync('c:/Users/USER/Desktop/2026-gencore- manual/images.js', imagesJsContent, 'utf8');

  // Replace in HTML with data attributes instead of raw base64
  const frontReplacement = '<img data-img-key="mf-spec-front" alt="MillFix 정면 도면" style="height: 350px; border-radius: 8px; object-fit: contain;">';
  const sideReplacement = '<img data-img-key="mf-spec-side" alt="MillFix 측면 도면" style="height: 350px; border-radius: 8px; object-fit: contain;">';

  html = html.replace(frontMatch[0], frontReplacement);
  html = html.replace(sideMatch[0], sideReplacement);

  // Inject images.js script tag before app.js if not exists
  if (!html.includes('<script src="images.js"></script>')) {
    html = html.replace('<script src="app.js"></script>', '<script src="images.js"></script>\n  <script src="app.js"></script>');
  }

  fs.writeFileSync(htmlFile, html, 'utf8');
  console.log('Images extracted to images.js and HTML updated!');
} else {
  console.log('Could not find base64 images in HTML.');
}
