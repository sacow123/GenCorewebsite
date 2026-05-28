const fs = require('fs');
const code = fs.readFileSync('dbconfig-data.js', 'utf8');

const regex = /\"(.*?)\":\s*\"([\s\S]*?)\"(,|\n})/g;

let newCode = code.replace(regex, (match, key, value, suffix) => {
    const newValue = value.replace(/\\n/g, '<br>');
    return '\"' + key + '\": \"' + newValue + '\"' + suffix;
});

fs.writeFileSync('dbconfig-data.js', newCode, 'utf8');
