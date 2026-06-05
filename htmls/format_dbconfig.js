const fs = require('fs');

const koFile = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\dbconfig-data-ko.js';
const enFile = 'C:\\Users\\USER\\Documents\\GitHub\\GenCorewebsite\\dbconfig-data-en.js';

function formatData(file, isKo) {
    let content = fs.readFileSync(file, 'utf8');

    if (isKo) {
        content = content.replace(/You can select this template,/g, '템플릿을 사용하기 위한 조건');
        content = content.replace(/The part type is the (.*?)(?=\n|$)/g, '보철물 유형: $1');
        content = content.replace(/The materials is (.*?)(?=\n|$)/g, '소재: $1');
        
        // Also translate some missing headers if they appear as English in KO file
        content = content.replace(/Tools list used/g, '해당 템플릿에서 사용되는 공구 목록');
        content = content.replace(/Overwritable processes/g, '조정 가능한 항목들');
        content = content.replace(/User-defined area\(UDA\) availble/g, '사용자 정의 영역을 사용하실 수 있습니다.');
        content = content.replace(/General settings/g, '일반 설정');
        content = content.replace(/Boundary offset/g, '증분식 경계 옵셋');
    } else {
        content = content.replace(/You can select this template,/g, 'The conditions for selecting');
        content = content.replace(/The part type is the (.*?)(?=\n|$)/g, 'Part (Prosthesis): $1');
        content = content.replace(/The materials is (.*?)(?=\n|$)/g, 'Materials: $1');
    }

    fs.writeFileSync(file, content);
    console.log(`Formatted ${file}`);
}

formatData(koFile, true);
formatData(enFile, false);
