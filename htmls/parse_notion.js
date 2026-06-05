const fs = require('fs');
const path = require('path');

const dirPath = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\htmls\\Mf-templates\\ExportBlock-e4a73256-5e83-4724-9e88-58b6b94e7ef8-Part-1';
const pmmaPeekOutPath = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\htmls\\parsed_pmma_peek.txt';
const waxZirconiaOutPath = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\htmls\\parsed_wax_zirconia.txt';

const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.html') && !f.includes('DB_MillFix_V10 1 X') && !f.includes('제목 없음'));

function stripHtml(html) {
    // Basic stripping, keeping lists and tables somewhat structured
    let text = html;
    
    // Replace table rows with newlines
    text = text.replace(/<tr[^>]*>/gi, '\n');
    // Replace table cells with tabs
    text = text.replace(/<td[^>]*>/gi, '');
    text = text.replace(/<\/td>/gi, '\t');
    
    // Replace list items with newlines
    text = text.replace(/<li[^>]*>/gi, '\n');
    
    // Replace paragraphs and divs with newlines
    text = text.replace(/<(p|div|h[1-6]|ul|ol)[^>]*>/gi, '\n');
    
    // Remove all remaining tags
    text = text.replace(/<[^>]+>/g, '');
    
    // Decode HTML entities
    text = text.replace(/&nbsp;/g, ' ')
               .replace(/&amp;/g, '&')
               .replace(/&lt;/g, '<')
               .replace(/&gt;/g, '>');
               
    // Clean up excessive newlines and tabs
    text = text.replace(/\n\s*\n/g, '\n').replace(/\t\s+/g, '\t');
    
    return text.trim();
}

function processGroup(groupName, filterFn) {
    const groupFiles = files.filter(filterFn);
    let output = '';
    
    for (const file of groupFiles) {
        // Extract real template name from filename. 
        // e.g. "PMMA_Abutment Crown bridge 979cfb3e...html" -> "PMMA_Abutment Crown bridge"
        // Also handling things like "PMMA_Abutment Crown bridge_NCS (highnees) 45ecf..."
        let templateName = file.replace(/\s+[a-f0-9]{32}\.html$/, '');
        
        // Wait, some filenames might not perfectly match the regex if they have spaces before the hash
        // Let's just find the last block of 32 hex chars and remove it
        const match = file.match(/(.*)\s+[a-f0-9]{32}\.html$/);
        if (match) {
            templateName = match[1];
        } else {
            templateName = file.replace(/\.html$/, '');
        }

        const html = fs.readFileSync(path.join(dirPath, file), 'utf8');
        
        // Find the start of the actual content to skip boilerplate
        const bodyMatch = html.match(/<div class="page-body">([\s\S]*?)<\/article>/);
        const bodyHtml = bodyMatch ? bodyMatch[1] : html;
        
        // For materials and part, they are in the header properties
        const headerMatch = html.match(/<header>([\s\S]*?)<\/header>/);
        let headerText = '';
        if (headerMatch) {
            headerText = stripHtml(headerMatch[1]);
            // Clean up the header to remove page title and created time if needed, 
            // but let's just strip and clean
        }
        
        const bodyText = stripHtml(bodyHtml);
        
        let combined = templateName + '\n' + headerText + '\n' + bodyText;
        
        // Clean up "created\t2026년..." etc
        combined = combined.replace(/created\t.*?\n/gi, '');
        combined = combined.replace(/Materials\t/gi, 'Materials\n');
        combined = combined.replace(/Part \(Prosthesis\)\t/gi, 'Part (Prosthesis)\n');
        
        output += `  "${templateName}": \`\n${combined.trim()}\n\`,\n`;
    }
    return output;
}

const pmmaPeekResult = 
    "--- PMMA/PEEK ---\n" + 
    processGroup('PMMA', f => f.startsWith('PMMA_')) + 
    processGroup('PEEK', f => f.startsWith('PEEK_'));

fs.writeFileSync(pmmaPeekOutPath, pmmaPeekResult);

const waxZirconiaResult = 
    "--- WAX/ZIRCONIA ---\n" + 
    processGroup('Wax', f => f.toLowerCase().startsWith('wax')) + 
    processGroup('Zirconia', f => f.startsWith('Zirconia_'));

fs.writeFileSync(waxZirconiaOutPath, waxZirconiaResult);

console.log('Parsing complete!');
