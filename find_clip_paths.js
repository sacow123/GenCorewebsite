const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imgDir = path.join(__dirname, 'images', 'sec-mf-toollifetimesetting');

async function getBoundingBoxes(filename) {
    const { data, info } = await sharp(path.join(imgDir, filename)).raw().toBuffer({ resolveWithObject: true });
    const width = info.width;
    const height = info.height;
    
    // We want to group non-transparent pixels into left/right/top/bottom clusters.
    // A simple way is to scan the image and find the min/max X and Y for left half vs right half.
    
    let leftBox = { minX: width, maxX: 0, minY: height, maxY: 0 };
    let rightBox = { minX: width, maxX: 0, minY: height, maxY: 0 };
    let topRightBox = { minX: width, maxX: 0, minY: height, maxY: 0 };
    let bottomRightBox = { minX: width, maxX: 0, minY: height, maxY: 0 };
    
    let hasLeft = false;
    let hasRight = false;
    let hasTopRight = false;
    let hasBottomRight = false;

    // Thresholds
    const midX = width / 2; // ~48% to 50%
    const midYRight = height * 0.28; // To split top-right and bottom-right in 그림2

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = (y * width + x) * 4;
            const r = data[idx];
            const g = data[idx+1];
            const b = data[idx+2];
            // Look for yellowish or whitish pixels (the drawings/text)
            // Yellow is high R and G. Text is high R, G, B.
            // Also ignore the dark semi-transparent background (R=68, G=38, B=15)
            if (r > 150 && g > 150) {
                if (x < midX) {
                    leftBox.minX = Math.min(leftBox.minX, x);
                    leftBox.maxX = Math.max(leftBox.maxX, x);
                    leftBox.minY = Math.min(leftBox.minY, y);
                    leftBox.maxY = Math.max(leftBox.maxY, y);
                    hasLeft = true;
                } else {
                    rightBox.minX = Math.min(rightBox.minX, x);
                    rightBox.maxX = Math.max(rightBox.maxX, x);
                    rightBox.minY = Math.min(rightBox.minY, y);
                    rightBox.maxY = Math.max(rightBox.maxY, y);
                    hasRight = true;
                    
                    if (y < midYRight) {
                        topRightBox.minX = Math.min(topRightBox.minX, x);
                        topRightBox.maxX = Math.max(topRightBox.maxX, x);
                        topRightBox.minY = Math.min(topRightBox.minY, y);
                        topRightBox.maxY = Math.max(topRightBox.maxY, y);
                        hasTopRight = true;
                    } else {
                        bottomRightBox.minX = Math.min(bottomRightBox.minX, x);
                        bottomRightBox.maxX = Math.max(bottomRightBox.maxX, x);
                        bottomRightBox.minY = Math.min(bottomRightBox.minY, y);
                        bottomRightBox.maxY = Math.max(bottomRightBox.maxY, y);
                        hasBottomRight = true;
                    }
                }
            }
        }
    }

    const toPerc = (val, max) => (val / max * 100).toFixed(2);
    const boxStr = (box) => `left: ${toPerc(box.minX, width)}%, top: ${toPerc(box.minY, height)}%, right: ${toPerc(box.maxX, width)}%, bottom: ${toPerc(box.maxY, height)}%`;

    console.log(`--- ${filename} ---`);
    if (hasLeft) console.log(`Left: ${boxStr(leftBox)}`);
    if (filename === '그림2.webp') {
        if (hasTopRight) console.log(`TopRight: ${boxStr(topRightBox)}`);
        if (hasBottomRight) console.log(`BottomRight: ${boxStr(bottomRightBox)}`);
    } else {
        if (hasRight) console.log(`Right: ${boxStr(rightBox)}`);
    }
}

async function run() {
    await getBoundingBoxes('그림2.webp');
    await getBoundingBoxes('그림4.webp');
    await getBoundingBoxes('그림6.webp');
}
run();
