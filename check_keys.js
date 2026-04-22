const fs = require('fs');
const content = fs.readFileSync('images.js', 'utf8');
const match = content.match(/const IMAGES = \{([\s\S]*?)\};/);
if (match) {
    const keys = match[1].split('\n')
        .map(line => line.trim().split(':')[0].replace(/['"]/g, ''))
        .filter(key => key.length > 0);
    console.log(keys);
} else {
    console.log('Not found');
}
