const fs = require('fs');

const logPath = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\ee37f5d2-4c23-4730-97af-57e20d0863e2\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n');

// Get the view_file output from 02:35:01Z (which is the last view before major changes)
// and the replace_file_content calls up to 02:42:00Z

let fileContents = {};  // key: lineNum -> content
let baseContent = '';
let ops = [];

for (let l of lines) {
    if (!l.trim()) continue;
    try {
        const step = JSON.parse(l);
        const ts = step.created_at || '';
        if (!ts) continue;

        if (step.tool_calls) {
            for (let t of step.tool_calls) {
                // Grab view_file output (last one before 02:42)
                if (t.name === 'view_file' && ts <= '2026-06-19T02:42:00Z') {
                    if (t.args && t.args.AbsolutePath && t.args.AbsolutePath.includes('index.html')) {
                        const out = t.output || '';
                        ops.push({ type: 'view', ts, startLine: t.args.StartLine, endLine: t.args.EndLine, output: out });
                    }
                }
                // Grab all replace_file_content calls before 02:42
                if (t.name === 'replace_file_content' && ts <= '2026-06-19T02:42:00Z') {
                    if (t.args && t.args.TargetFile && t.args.TargetFile.includes('index.html')) {
                        ops.push({ type: 'replace', ts, 
                            targetContent: t.args.TargetContent,
                            replacementContent: t.args.ReplacementContent,
                            startLine: t.args.StartLine,
                            endLine: t.args.EndLine
                        });
                    }
                }
            }
        }
    } catch(e) {}
}

console.log(`Total ops found: ${ops.length}`);
ops.forEach(o => console.log(`${o.ts} | ${o.type} | ${o.type === 'view' ? `lines ${o.startLine}-${o.endLine}, len=${o.output.length}` : `replace len=${(o.targetContent||'').length}`}`));
fs.writeFileSync('ops_list.json', JSON.stringify(ops, null, 2));
