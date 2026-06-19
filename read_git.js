const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const gitDir = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\.git';

// Read HEAD commit hash
const headRef = fs.readFileSync(path.join(gitDir, 'refs', 'heads', 'main'), 'utf8').trim();
console.log('HEAD commit:', headRef);

// Read pack files list
const packDir = path.join(gitDir, 'objects', 'pack');
const packs = fs.readdirSync(packDir);
console.log('Pack files:', packs);

// Read loose objects count
const objDir = path.join(gitDir, 'objects');
let looseCount = 0;
for (const d of fs.readdirSync(objDir)) {
    if (d.length === 2) {
        const sub = fs.readdirSync(path.join(objDir, d));
        looseCount += sub.length;
    }
}
console.log('Loose objects:', looseCount);

// Try to read the commit object
function readObject(hash) {
    const dir = hash.substring(0, 2);
    const file = hash.substring(2);
    const objPath = path.join(gitDir, 'objects', dir, file);
    if (fs.existsSync(objPath)) {
        const compressed = fs.readFileSync(objPath);
        return zlib.inflateSync(compressed).toString('utf8');
    }
    return null;
}

const commitData = readObject(headRef);
if (commitData) {
    console.log('Commit data (first 500):', commitData.substring(0, 500));
} else {
    console.log('Commit is in pack file - need to parse pack');
}
