const fs = require('fs');

const logPath = 'C:\\Users\\USER\\.gemini\\antigravity\\brain\\ee37f5d2-4c23-4730-97af-57e20d0863e2\\.system_generated\\logs\\transcript_full.jsonl';
const lines = fs.readFileSync(logPath, 'utf8').split('\n');

// 11:42 KST = 02:42 UTC
// We want file view outputs before 02:42 UTC that contain sec-mf-main-page
// Let's collect all view_file outputs for index.html with timestamps

let snapshots = [];

for (let l of lines) {
    if (!l.trim()) continue;
    try {
        const step = JSON.parse(l);
        const ts = step.created_at || '';
        if (!ts) continue;

        // Only look at steps before 02:42 UTC
        if (ts > '2026-06-19T02:42:00Z') continue;

        if (step.tool_calls) {
            for (let t of step.tool_calls) {
                if (t.name === 'view_file' && t.args && t.args.AbsolutePath && t.args.AbsolutePath.includes('index.html')) {
                    snapshots.push({ ts, output: t.output || '' });
                }
                // Also check run_command that outputs file content
                if ((t.name === 'run_command' || t.name === 'write_to_file') && t.args && JSON.stringify(t.args).includes('index.html')) {
                    if (t.output && t.output.includes('sec-mf-main-page')) {
                        snapshots.push({ ts, type: t.name, output: t.output.substring(0, 500) });
                    }
                }
            }
        }
    } catch(e) {}
}

console.log(`Found ${snapshots.length} snapshots before 02:42 UTC`);
if (snapshots.length > 0) {
    console.log('Latest snapshot:', snapshots[snapshots.length - 1].ts);
    fs.writeFileSync('snapshot_check.txt', JSON.stringify(snapshots.map(s => ({ts: s.ts, len: s.output.length})), null, 2));
}
