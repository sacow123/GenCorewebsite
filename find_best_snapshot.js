const fs = require('fs');

const logPath = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\ee37f5d2-4c23-4730-97af-57e20d0863e2\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n');

// Get ALL view_file outputs for index.html before 02:42 UTC, collect the largest one
let best = null;

for (let l of lines) {
    if (!l.trim()) continue;
    try {
        const step = JSON.parse(l);
        const ts = step.created_at || '';
        if (!ts) continue;
        if (ts > '2026-06-19T02:42:00Z') continue;

        if (step.tool_calls) {
            for (let t of step.tool_calls) {
                if (t.name === 'view_file' && t.args && t.args.AbsolutePath && t.args.AbsolutePath.includes('index.html')) {
                    const out = t.output || '';
                    if (out.length > (best ? best.output.length : 0)) {
                        best = { ts, startLine: t.args.StartLine, endLine: t.args.EndLine, output: out };
                    }
                }
            }
        }
    } catch(e) {}
}

if (best) {
    console.log(`Best snapshot: ${best.ts}, lines ${best.startLine}-${best.endLine}, length: ${best.output.length}`);
    fs.writeFileSync('best_snapshot.txt', best.output);
} else {
    console.log('No snapshot found');
}
