const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const gitDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\.git';

function readObject(hash) {
    const dir = hash.substring(0, 2);
    const file = hash.substring(2);
    const objPath = path.join(gitDir, 'objects', dir, file);
    if (fs.existsSync(objPath)) {
        const compressed = fs.readFileSync(objPath);
        return zlib.inflateSync(compressed);
    }
    return null;
}

// Walk commit history
function getCommits(startHash, maxDepth = 30) {
    let commits = [];
    let hash = startHash;
    for (let i = 0; i < maxDepth; i++) {
        const data = readObject(hash);
        if (!data) { console.log('Pack file - stopping at', hash); break; }
        const str = data.toString('utf8');
        const nullIdx = str.indexOf('\0');
        const body = str.substring(nullIdx + 1);
        const lines = body.split('\n');
        let parent = null;
        let author = '';
        let date = '';
        let msg = '';
        for (const l of lines) {
            if (l.startsWith('parent ')) parent = l.split(' ')[1];
            if (l.startsWith('author ')) {
                author = l;
                // Extract timestamp
                const parts = l.split(' ');
                const ts = parseInt(parts[parts.length - 2]);
                date = new Date(ts * 1000).toISOString();
            }
        }
        const msgStart = body.indexOf('\n\n');
        if (msgStart >= 0) msg = body.substring(msgStart + 2).trim();
        commits.push({ hash, date, msg: msg.substring(0, 80) });
        if (!parent) break;
        hash = parent;
    }
    return commits;
}

const headRef = fs.readFileSync(path.join(gitDir, 'refs', 'heads', 'main'), 'utf8').trim();
const commits = getCommits(headRef);
commits.forEach(c => console.log(`${c.date} | ${c.hash.substring(0,8)} | ${c.msg}`));
