const sharp = require('sharp');
const path = require('path');

const imgDir = path.join(__dirname, 'images', 'sec-mf-toollifetimesetting');

async function analyzeBackground() {
    const { data, info } = await sharp(path.join(imgDir, '그림2.webp')).raw().toBuffer({ resolveWithObject: true });
    
    // Sample a pixel at (10, 10) which is likely background
    const x = 10;
    const y = 10;
    const idx = (y * info.width + x) * 4;
    console.log(`Pixel at (10,10): R=${data[idx]}, G=${data[idx+1]}, B=${data[idx+2]}, A=${data[idx+3]}`);
    
    // Sample a pixel near the middle (800, 450)
    const mx = 800;
    const my = 450;
    const midx = (my * info.width + mx) * 4;
    console.log(`Pixel at (800,450): R=${data[midx]}, G=${data[midx+1]}, B=${data[midx+2]}, A=${data[midx+3]}`);
}

analyzeBackground();
