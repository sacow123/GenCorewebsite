const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\htmls\\Mf-Features\\ExportBlock-5ac99b26-deb8-442d-8232-9c9d35a0b529-Part-1';
const destDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\images\\sec-mf-Features\\How to set the Other hole';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  'image 17.png',
  'image 18.png',
  'image 19.png',
  'image 20.png'
];

async function processImages() {
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    if (!fs.existsSync(srcPath)) {
      console.log('Not found:', srcPath);
      continue;
    }
    
    if (file.endsWith('.png')) {
      const destName = file.replace('.png', '.webp');
      const destPath = path.join(destDir, destName);
      await sharp(srcPath).webp().toFile(destPath);
      console.log('Converted:', file);
    }
  }
}
processImages();
