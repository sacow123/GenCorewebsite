const fs = require('fs');

const logPath = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\ee37f5d2-4c23-4730-97af-57e20d0863e2\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n');

// Let's look at all tool calls before 02:42 UTC
let results = [];

for (let l of lines) {
    if (!l.trim()) continue;
    try {
        const step = JSON.parse(l);
        const ts = step.created_at || '';
        if (!ts) continue;
        if (ts > '2026-06-19T02:42:00Z') continue;

        if (step.tool_calls) {
            for (let t of step.tool_calls) {
                results.push(`${ts} | ${t.name} | args_keys: ${Object.keys(t.args || {}).join(',')}`);
            }
        }
    } catch(e) {}
}

console.log(results.join('\n'));
