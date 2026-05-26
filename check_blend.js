const sharp = require('sharp');
const path = require('path');

const imgDir = path.join(__dirname, 'images', 'sec-mf-toollifetimesetting');

async function checkScreenBlend() {
    // We can't really "test" mix-blend-mode in node, but we can verify if the image is mostly dark.
    // If it's mostly dark, screen blend will make the dark pixels disappear.
}

checkScreenBlend();
