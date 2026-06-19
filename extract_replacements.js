const fs = require('fs');
const path = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\ee37f5d2-4c23-4730-97af-57e20d0863e2\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(path, 'utf8').split('\n');
const promptLine = lines.findIndex(l => l.includes('자 이제 메인페이지는 끝났어'));

const replacements = [];
for (let i = 0; i < promptLine; i++) {
    if (!lines[i]) continue;
    try {
        const obj = JSON.parse(lines[i]);
        if (obj.type === 'PLANNER_RESPONSE' && obj.tool_calls) {
            for (const call of obj.tool_calls) {
                if (call.name === 'replace_file_content' && call.args && call.args.TargetFile && call.args.TargetFile.includes('index.html')) {
                    replacements.push(call.args.ReplacementContent);
                }
            }
        }
    } catch (e) {}
}

fs.writeFileSync('all_replacements.txt', replacements.join('\n---\n'));
console.log('Saved replacements');
