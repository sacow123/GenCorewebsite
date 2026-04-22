const fs = require('fs');
const content = fs.readFileSync('images.js', 'utf8');
const keys = content.match(/"[a-zA-Z0-9-]+"(?=\s*:)/g);
if (keys) {
    console.log(keys.map(k => k.replace(/"/g, '')));
} else {
    console.log('No keys found');
}
