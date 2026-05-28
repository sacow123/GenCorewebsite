const fs = require('fs');
let code = fs.readFileSync('dbconfig-data.js', 'utf8');

const startIdx = code.indexOf('{');
const endIdx = code.lastIndexOf('}') + 1;
const dataStr = code.substring(startIdx, endIdx);

let data = JSON.parse(dataStr);

// 1. Fix missing Hybrid Ceramic_Inlay/Onlay_2nd -Occlusal
let baseText = data['Hybrid Ceramic_Inlay/Onlay_2nd -Occlusal [+0.05]'];
if (baseText) {
  // Remove the specific line
  baseText = baseText.replace('This is for milling it 0.05mm bigger than the original design. You can stragically utilize this one.\n', '');
  data['Hybrid Ceramic_Inlay/Onlay_2nd -Occlusal'] = baseText;
}

// Write back
const newCode = `const dbConfigData = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync('dbconfig-data.js', newCode, 'utf8');
console.log('Fixed missing data key');
