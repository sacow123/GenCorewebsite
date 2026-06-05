const fs = require('fs');

const koFile = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\dbconfig-data-ko.js';
const enFile = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\dbconfig-data-en.js';

function revertUDA(file) {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content.replace(/\(Custom area,\s*Fissure machining\)/g, "(UDA, Fissure machining)");
    fs.writeFileSync(file, newContent);
    console.log(`Reverted ${file}`);
}

revertUDA(koFile);
revertUDA(enFile);
