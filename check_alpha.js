const sharp = require('sharp');
const path = require('path');

const imgDir = path.join(__dirname, 'images', 'sec-mf-toollifetimesetting');

async function checkTransparency() {
    const { data, info } = await sharp(path.join(imgDir, '그림2.webp')).raw().toBuffer({ resolveWithObject: true });
    let hasTransparentPixels = false;
    for (let i = 3; i < data.length; i += 4) {
        if (data[i] < 255) {
            hasTransparentPixels = true;
            break;
        }
    }
    console.log('Has transparent pixels:', hasTransparentPixels);
}

checkTransparency();
