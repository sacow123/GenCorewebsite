const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const srcDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\htmls\\Mf-Features\\ExportBlock-5ac99b26-deb8-442d-8232-9c9d35a0b529-Part-1';
const destDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\images\\sec-mf-Features\\How to edit the NC file';

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = [
  '1.png', '2.png', '3.png', '4.png', '5.png', '그림6.png', '7.png', '그림8.png', '그림9.png', '그림10.png', 
  'image 21.png', '그림11.png', '그림12.png', '그림13.png', '그림14.png', '그림16.png', '그림17.png', '그림18.png', 
  '그림19.png', 'image 22.png', '그림20.png'
];

async function convert() {
  for (const file of files) {
    const srcPath = path.join(srcDir, file);
    const destName = file.replace('.png', '.webp');
    const destPath = path.join(destDir, destName);
    
    if (fs.existsSync(srcPath)) {
      await sharp(srcPath).webp().toFile(destPath);
      console.log('Converted:', file);
    } else {
      console.log('Not found:', srcPath);
    }
  }
}
convert();
