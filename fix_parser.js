const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Update headers array
const headersRegex = /const headers = \[[\s\S]*?\];/;
const newHeaders = `const headers = [
              "The conditions for selecting", "템플릿을 사용하기 위한 조건", "선택 조건",
              "What it needs to Prepare", "준비해야 할 사항", "준비 사항",
              "Overwritable processes", "덮어쓸 수 있는 공정", "세부 설정",
              "User-defined area", "사용자 정의 영역", "UDA",
              "Tools list used", "사용된 공구 목록",
              "Tools used in this strategy", "해당 템플릿에 사용되는 공구 목록", "사용되는 공구"
            ];`;
html = html.replace(headersRegex, newHeaders);

// 2. Update 'tool' check for starting the table
const toolCheckRegex = /if \(line\.toLowerCase\(\)\.includes\(\"tool\"\)\) \{/;
const newToolCheck = `if (line.toLowerCase().includes("tool") || line.includes("공구")) {`;
html = html.replace(toolCheckRegex, newToolCheck);

fs.writeFileSync('index.html', html, 'utf8');
console.log('Parser updated for Korean headers and table generation');
