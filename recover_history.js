const fs = require('fs');
const path = require('path');

try {
  const historyDir = process.env.APPDATA + '\\Code\\User\\History';
  const dirs = fs.readdirSync(historyDir);
  
  for (const dir of dirs) {
    const entryFile = path.join(historyDir, dir, 'entries.json');
    if (fs.existsSync(entryFile)) {
       const content = fs.readFileSync(entryFile, 'utf8');
       if (content.includes('index.html')) {
          console.log(`Found index.html in ${dir}`);
          const entries = JSON.parse(content);
          
          // Sort entries by timestamp descending
          entries.entries.sort((a, b) => b.timestamp - a.timestamp);
          
          for (const entry of entries.entries) {
             const fileId = entry.id;
             const filePath = path.join(historyDir, dir, fileId);
             if (fs.existsSync(filePath)) {
                const fileContent = fs.readFileSync(filePath, 'utf8');
                // Check if it has tutorial 8
                if (fileContent.includes('iBar calculation in hyperDENT')) {
                   console.log(`Found a version with Tutorial 8! Saving to recovered_index.html`);
                   fs.writeFileSync('recovered_index.html', fileContent);
                   process.exit(0);
                }
             }
          }
       }
    }
  }
  console.log("Could not find a version with Tutorial 8");
} catch(e) {
  console.error(e);
}
