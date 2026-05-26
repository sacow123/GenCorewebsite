const sharp = require('sharp');
const path = require('path');

const imgDir = path.join(__dirname, 'images', 'sec-mf-toollifetimesetting');

async function debugAlpha() {
    const { data, info } = await sharp(path.join(imgDir, '그림2.webp')).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    
    // Create a new buffer
    const outData = Buffer.from(data);
    for (let i = 0; i < outData.length; i += 4) {
        if (outData[i+3] === 0) {
            // Fully transparent -> make it bright magenta
            outData[i] = 255;   // R
            outData[i+1] = 0;   // G
            outData[i+2] = 255; // B
            outData[i+3] = 255; // A
        }
    }
    
    await sharp(outData, { raw: { width: info.width, height: info.height, channels: 4 } })
        .png()
        .toFile(path.join(__dirname, 'debug_alpha.png'));
    console.log('Saved debug_alpha.png');
}

debugAlpha();
