const fs = require('fs');
const path = require('path');

const dirPath = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\htmls\\Mf-templates\\ExportBlock-e4a73256-5e83-4724-9e88-58b6b94e7ef8-Part-1';
const koFile = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\dbconfig-data-ko.js';
const enFile = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\dbconfig-data-en.js';

const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html') && !f.includes('DB_MillFix_V10 1 X') && !f.includes('제목 없음'));

function customStrip(html) {
    let text = html;
    
    // Instead of naive regex, let's just make tr into \n and td into \n
    // but avoid excessive \n
    text = text.replace(/<tr[^>]*>/gi, '\n');
    text = text.replace(/<td[^>]*>/gi, '\n');
    text = text.replace(/<th[^>]*>/gi, '\n');
    
    // other block elements
    text = text.replace(/<li[^>]*>/gi, '\n');
    text = text.replace(/<p[^>]*>/gi, '\n');
    text = text.replace(/<div[^>]*>/gi, '\n');
    text = text.replace(/<h[1-6][^>]*>/gi, '\n');
    
    text = text.replace(/<[^>]+>/g, '');
    
    text = text.replace(/&nbsp;/g, ' ')
               .replace(/&amp;/g, '&')
               .replace(/&lt;/g, '<')
               .replace(/&gt;/g, '>');
               
    let lines = text.split('\n').map(l => l.trim());
    
    let finalLines = [];
    let emptyCount = 0;
    for (let l of lines) {
        if (l === '') {
            emptyCount++;
            if (emptyCount <= 1) {
                finalLines.push(l); // keep max 1 empty line
            }
        } else {
            emptyCount = 0;
            finalLines.push(l);
        }
    }
    
    return finalLines.join('\n').trim();
}

function processGroup(groupName, filterFn) {
    const groupFiles = files.filter(filterFn);
    let output = '';
    
    for (const file of groupFiles) {
        let templateName = file.replace(/\s+[a-f0-9]{32}\.html$/, '');
        const match = file.match(/(.*)\s+[a-f0-9]{32}\.html$/);
        if (match) {
            templateName = match[1];
        } else {
            templateName = file.replace(/\.html$/, '');
        }

        const html = fs.readFileSync(path.join(dirPath, file), 'utf8');
        
        const bodyMatch = html.match(/<div class="page-body">([\s\S]*?)<\/article>/);
        const bodyHtml = bodyMatch ? bodyMatch[1] : html;
        
        const headerMatch = html.match(/<header>([\s\S]*?)<\/header>/);
        let headerText = '';
        if (headerMatch) {
            headerText = customStrip(headerMatch[1]);
        }
        
        const bodyText = customStrip(bodyHtml);
        
        let combined = headerText + '\n' + bodyText;
        combined = combined.replace(/created\n.*?\n/gi, '');
        
        output += `  "${templateName}": \`\n${combined}\n\`,\n`;
    }
    return output;
}

let newProps = '';
newProps += processGroup('PMMA', f => f.startsWith('PMMA_'));
newProps += processGroup('PEEK', f => f.startsWith('PEEK_'));
newProps += processGroup('Wax', f => f.toLowerCase().startsWith('wax'));
newProps += processGroup('Zirconia', f => f.startsWith('Zirconia_'));

newProps = newProps.trim();
if (newProps.endsWith(',')) {
    newProps = newProps.slice(0, -1);
}

function removeOldAppended(jsFilePath) {
    let content = fs.readFileSync(jsFilePath, 'utf8');
    const marker = '"Hybrid Ceramic_Inlay/Onlay_2nd -Occlusal": `';
    const markerIdx = content.indexOf(marker);
    if (markerIdx === -1) return content;
    
    // Find the end of this last original template
    const endOfMarkerObj = content.indexOf('`', markerIdx + marker.length);
    const endOfTemplate = content.indexOf(',', endOfMarkerObj);
    
    let originalPart = content.substring(0, endOfTemplate);
    return originalPart + '\n};\n';
}

function appendToJS(jsFilePath, props) {
    let content = removeOldAppended(jsFilePath);
    
    const lastBraceIndex = content.lastIndexOf('};');
    if (lastBraceIndex === -1) return;
    
    let beforeBrace = content.substring(0, lastBraceIndex).trim();
    if (beforeBrace.endsWith(',')) {
        beforeBrace = beforeBrace.slice(0, -1);
    }
    
    const finalContent = beforeBrace + ',\n' + props + '\n};\n';
    fs.writeFileSync(jsFilePath, finalContent);
}

appendToJS(koFile, newProps);
appendToJS(enFile, newProps);

console.log('Fixed parsing and appended to JS successfully!');
