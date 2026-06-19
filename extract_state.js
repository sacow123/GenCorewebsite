const fs = require('fs');
const path = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\ee37f5d2-4c23-4730-97af-57e20d0863e2\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(path, 'utf8').split('\n');

const promptLine = lines.findIndex(l => l.includes('자 이제 메인페이지는 끝났어'));
console.log('Prompt found at line:', promptLine);

// Find the state of index.html BEFORE the prompt
let htmlContent = '';
for (let i = promptLine - 1; i >= 0; i--) {
    if (!lines[i]) continue;
    try {
        const obj = JSON.parse(lines[i]);
        if (obj.type === 'PLANNER_RESPONSE' && obj.tool_calls) {
            for (const call of obj.tool_calls) {
                if (call.name === 'replace_file_content' || call.name === 'write_to_file') {
                    if (call.args && call.args.TargetFile && call.args.TargetFile.includes('index.html')) {
                        console.log(`Found modification at line ${i} using tool ${call.name}`);
                        if (call.args.ReplacementContent) {
                             console.log('It was a replacement.');
                        } else if (call.args.CodeContent) {
                             htmlContent = call.args.CodeContent;
                             break;
                        }
                    }
                }
            }
        }
        if (htmlContent) break;
    } catch (e) {
        // ignore JSON parse errors
    }
}

if (htmlContent) {
    fs.writeFileSync('restored_from_transcript.html', htmlContent);
    console.log('Saved restored_from_transcript.html!');
} else {
    console.log('Could not find full HTML content in transcript before this point.');
}
