const sharp = require('sharp');
const path = require('path');

const imgDir = path.join(__dirname, 'images', 'sec-mf-toollifetimesetting');

async function checkFullyTransparent() {
    const { data, info } = await sharp(path.join(imgDir, '그림2.webp')).raw().toBuffer({ resolveWithObject: true });
    let transparentCount = 0;
    let opaqueCount = 0;
    for (let i = 3; i < data.length; i += 4) {
        if (data[i] === 0) transparentCount++;
        else opaqueCount++;
    }
    console.log(`Fully transparent pixels: ${transparentCount}`);
    console.log(`Opaque/Semi-opaque pixels: ${opaqueCount}`);
    console.log(`Total pixels: ${data.length / 4}`);
}

checkFullyTransparent();
