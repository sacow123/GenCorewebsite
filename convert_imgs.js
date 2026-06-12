const sharp = require('sharp');
const fs = require('fs');

async function convert() {
    const src1 = "C:\\Users\\USER\\Desktop\\images\\millfix_hyperDENT_install\\스크린샷 2026-06-12 180534.png";
    const src2 = "C:\\Users\\USER\\Desktop\\images\\millfix_hyperDENT_install\\스크린샷 2026-06-12 180544.png";
    const dest1 = "assets/images/sec-mf-install/install_19_1.webp";
    const dest2 = "assets/images/sec-mf-install/install_19_2.webp";

    try {
        await sharp(src1).webp().toFile(dest1);
        console.log("Converted " + dest1);
        await sharp(src2).webp().toFile(dest2);
        console.log("Converted " + dest2);
    } catch(e) {
        console.error("Error converting images:", e);
    }
}

convert();
