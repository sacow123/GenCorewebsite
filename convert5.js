const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\htmls\\Mf-Features\\ExportBlock-5ac99b26-deb8-442d-8232-9c9d35a0b529-Part-1';
const destDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\images\\sec-mf-Features\\Overwritable parameters';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

async function processImages() {
  for (let i = 3; i <= 16; i++) {
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
}
processImages();
