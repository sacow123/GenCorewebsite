const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\htmls\\Mf-Features\\ExportBlock-5ac99b26-deb8-442d-8232-9c9d35a0b529-Part-1';
const destDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\images\\sec-mf-Features\\How to set connectors efficiently';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  'hyperDENT_connector.efficiently_1.symptom_25.04.22.gif',
  'hyperDENT_connector.efficiently_2.adjusting_25.04.22.gif',
  'hyperDENT_connector.efficiently_3.check_25.04.22.gif',
  'image 23.png',
  'image 24.png',
  '6b291657-fdf5-47a4-9462-65974f7e80b2.png'
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
