const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\htmls\\Mf-Features\\ExportBlock-5ac99b26-deb8-442d-8232-9c9d35a0b529-Part-1';
const destDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\images\\sec-mf-Features\\how to expand the screw channel after milling';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  'image 39.png', 'image 40.png', 'image 41.png', 'image 42.png',
  'edit.nc.in.hyperVIEW_25.07.23.r1.gif', 'screw.channel.checking_1.gif',
  'screw.channel.checking_2.gif', 'expanding.sc_25.07.23.r1.gif'
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
    } else if (file.endsWith('.gif')) {
      const destPath = path.join(destDir, file);
      fs.copyFileSync(srcPath, destPath);
      console.log('Copied:', file);
    }
  }
}
processImages();
