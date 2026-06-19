const fs = require('fs');
const logPath = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\ee37f5d2-4c23-4730-97af-57e20d0863e2\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n');

let bestMatch = '';
for (let l of lines) {
    if (!l.trim()) continue;
    try {
        const step = JSON.parse(l);
        if (step.content && step.content.includes('<section id="sec-mf-main-page"')) {
            bestMatch = step.content;
        }
        
        // Sometimes the tool outputs the file in step.tool_calls or step.tool_responses
        // But transcript.jsonl structure: 
        // type: "TOOL_RESPONSE", content: <the string output> or tool_calls has output?
        // Let's check both
        if (step.type === 'TOOL_RESPONSE' && typeof step.content === 'string') {
            if (step.content.includes('<section id="sec-mf-main-page"')) {
                bestMatch = step.content;
            }
        }
        
        // Also check if step has 'output' directly or inside some object
        if (step.output && typeof step.output === 'string') {
             if (step.output.includes('<section id="sec-mf-main-page"')) {
                 bestMatch = step.output;
             }
        }
    } catch(e) {}
}

fs.writeFileSync('recovered_html.txt', bestMatch);
console.log('Done recovering');
