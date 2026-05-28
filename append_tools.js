const fs = require('fs');
let code = fs.readFileSync('dbconfig-data.js', 'utf8');

const missingText = `\nFinishing inside abutment bases [M1.0F_L06]_highness
Finishing inside abutments with 1.0mm diameter FLAT tool
Add. Allowance XY: Available to adjust the abutment inside fit.
Fissure machining G0.6B -0
Occlusal groove machining process with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools list used
Tool pocket #
Tools
Comment
T35
G2.0B

T36
G1.0B

T37
G0.6B

T42
M1.5FL
Screw Channel (SC) machining
T43
M1.0F
Interface machining
T45
M1.6T
Optional, for the angled screw channel
`;

// Find the JSON object string
const startIdx = code.indexOf('{');
const endIdx = code.lastIndexOf('}') + 1;
const dataStr = code.substring(startIdx, endIdx);

let data;
try {
  data = JSON.parse(dataStr);
} catch (e) {
  console.error("JSON parse failed:", e);
  process.exit(1);
}

// Append missing text to the highnees templates
if (data['Hybrid Ceramic_Abutment Crown bridge_NCS (highnees)']) {
  data['Hybrid Ceramic_Abutment Crown bridge_NCS (highnees)'] += missingText;
}

if (data['Hybrid Ceramic_Abutment Crown_NCS (highnees)']) {
  data['Hybrid Ceramic_Abutment Crown_NCS (highnees)'] += missingText;
}

// Write it back
const newCode = `const dbConfigData = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync('dbconfig-data.js', newCode, 'utf8');
console.log('Appended missing tools list to dbconfig-data.js');
