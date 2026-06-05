const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\htmls\\Mf-Features\\ExportBlock-5ac99b26-deb8-442d-8232-9c9d35a0b529-Part-1';
const destDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\images\\sec-mf-Features\\Partial framework Full Denture base Flexible denture';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function processImages() {
  for (let i = 25; i <= 37; i++) {
    const file = 'image ' + i + '.png';
    const srcPath = path.join(srcDir, file);
    if (!fs.existsSync(srcPath)) {
      console.log('Not found:', srcPath);
      continue;
    }
    
    const destName = 'image ' + i + '.webp';
    const destPath = path.join(destDir, destName);
    await sharp(srcPath).webp().toFile(destPath);
    console.log('Converted:', file);
  }
  
  const vidSrc = path.join(srcDir, 'full.denture_set.margin_25.10.16.r1.mp4');
  const vidDest = path.join(destDir, 'full.denture_set.margin_25.10.16.r1.mp4');
  if (fs.existsSync(vidSrc)) {
    fs.copyFileSync(vidSrc, vidDest);
    console.log('Copied video');
  }
}
processImages();
