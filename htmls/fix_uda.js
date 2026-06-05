const fs = require('fs');

const koFile = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\dbconfig-data-ko.js';
const enFile = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\dbconfig-data-en.js';

function fixUDA(file) {
    let content = fs.readFileSync(file, 'utf8');
    // Replace "Optional (UDA, Fissure machining)" with "Optional (Custom Area, Fissure machining)"
    // because "UDA" is a reserved header keyword in index.html and breaks the table!
    let newContent = content.replace(/\(UDA,\s*Fissure machining\)/g, "(Custom area, Fissure machining)");
    fs.writeFileSync(file, newContent);
    console.log(`Fixed ${file}`);
}

fixUDA(koFile);
fixUDA(enFile);
