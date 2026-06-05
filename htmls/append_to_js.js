const fs = require('fs');
const path = require('path');

const koFile = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\dbconfig-data-ko.js';
const enFile = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\dbconfig-data-en.js';

const pmmaPeek = fs.readFileSync('C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\htmls\\parsed_pmma_peek.txt', 'utf8');
const waxZirc = fs.readFileSync('C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\htmls\\parsed_wax_zirconia.txt', 'utf8');

function appendToJS(jsFilePath) {
    let content = fs.readFileSync(jsFilePath, 'utf8');
    
    // Find where the object ends (the last "};")
    const lastBraceIndex = content.lastIndexOf('};');
    if (lastBraceIndex === -1) return;
    
    let beforeBrace = content.substring(0, lastBraceIndex).trim();
    if (beforeBrace.endsWith(',')) {
        // Remove trailing comma if present
        beforeBrace = beforeBrace.slice(0, -1);
    }
    
    // Extract properties from our parsed txt files
    // They are in the format:   "KEY": `...`,
    const regex = /("[^"]+": `[\s\S]*?`,)/g;
    
    let newProps = '';
    
    let match;
    while ((match = regex.exec(pmmaPeek)) !== null) {
        newProps += '\n' + match[1];
    }
    while ((match = regex.exec(waxZirc)) !== null) {
        newProps += '\n' + match[1];
    }
    
    // Remove the very last comma of newProps
    newProps = newProps.trim();
    if (newProps.endsWith(',')) {
        newProps = newProps.slice(0, -1);
    }
    
    const finalContent = beforeBrace + ',\n' + newProps + '\n};\n';
    fs.writeFileSync(jsFilePath, finalContent);
}

appendToJS(koFile);
appendToJS(enFile);

console.log('Appended to JS files successfully!');
