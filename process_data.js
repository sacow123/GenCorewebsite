const fs = require('fs');

const inputFile = 'C:/Users/USER/.gemini/antigravity/brain/4b5be498-9e94-49c3-a706-9397ba82314b/.system_generated/steps/72/output.txt';
let rawData = fs.readFileSync(inputFile, 'utf-8');
// Extract json between ```json and ```
const match = rawData.match(/```json\n([\s\S]*?)\n```/);
if (match) {
    rawData = match[1];
}
const data = JSON.parse(rawData);

const dbConfigData = {};

data.forEach(text => {
    // The title is usually around line 8-10, after the standard Notion headers.
    // "공유\n이 페이지는 gencoretech.notion.site에 게시되어 있습니다.\n사이트 보기\n사이트 설정\n아이콘 추가\n커버 추가\n인증 추가\n레이아웃 사용자 지정\n[TITLE]"
    const lines = text.split('\n');
    let title = "";
    let bodyStart = 0;
    
    for (let i = 0; i < Math.min(20, lines.length); i++) {
        const line = lines[i].trim();
        if (line === "레이아웃 사용자 지정") {
            // Next line or two is the title
            title = lines[i+1].trim();
            // Sometimes title is split across two lines if it's long, let's just take one line for simplicity
            // or maybe two lines if the next line starts with a parenthesis or bracket
            if (lines[i+2] && lines[i+2].trim().startsWith('(')) {
                title += ' ' + lines[i+2].trim();
                bodyStart = i + 3;
            } else {
                bodyStart = i + 2;
            }
            break;
        }
    }
    
    // Fallback if title not found
    if (!title) {
        title = lines[0].substring(0, 50);
    }
    
    // Clean up title (remove extra spaces)
    title = title.replace(/\s+/g, ' ');
    
    // Extract body
    const bodyText = lines.slice(bodyStart).join('\n');
    
    dbConfigData[title] = bodyText;
});

const outputJs = `const dbConfigData = ${JSON.stringify(dbConfigData, null, 2)};\n`;
fs.writeFileSync('dbconfig-data.js', outputJs, 'utf-8');
console.log('Successfully generated dbconfig-data.js');
