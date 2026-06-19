const fs = require('fs');
const path = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\ee37f5d2-4c23-4730-97af-57e20d0863e2\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(path, 'utf8').split('\n');

const promptLine = lines.findIndex(l => l.includes('자 이제 메인페이지는 끝났어'));

let c = fs.readFileSync('index.html', 'utf8');

// Find all replacements
const replacements = [];
for (let i = 0; i < promptLine; i++) {
    if (!lines[i]) continue;
    try {
        const obj = JSON.parse(lines[i]);
        if (obj.type === 'PLANNER_RESPONSE' && obj.tool_calls) {
            for (const call of obj.tool_calls) {
                if (call.name === 'replace_file_content' && call.args && call.args.TargetFile && call.args.TargetFile.includes('index.html')) {
                    replacements.push(call.args);
                }
            }
        }
    } catch (e) {}
}

console.log(`Found ${replacements.length} replacements to replay.`);
let successCount = 0;
for (const rep of replacements) {
    const target = rep.TargetContent;
    const replacement = rep.ReplacementContent;
    if (c.includes(target)) {
        c = c.replace(target, replacement);
        successCount++;
    } else {
        console.log('Could not find target content from a past replacement! Length:', target.length);
        console.log('Target prefix:', target.substring(0, 50));
    }
}

fs.writeFileSync('index_replayed.html', c);
console.log(`Successfully replayed ${successCount}/${replacements.length} replacements.`);
