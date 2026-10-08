// Rebuild the structured M AI records from the checked export snapshot.
const fs = require('fs');
const source = JSON.parse(fs.readFileSync('tools/mai-cocr-source.json', 'utf8'));
const translations = {
  'This is for milling an Abutment crown bridge in the Co.Cr. Disc.': ['Co.Cr. 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.', 'Co.Cr.ディスクでアバットメントクラウンブリッジを加工するテンプレートです。'],
  'This is for milling an Abutment crown in the Co.Cr. Disc.': ['Co.Cr. 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.', 'Co.Cr.ディスクでアバットメントクラウンを加工するテンプレートです。'],
  'This is for milling a Coping bridge in the Co.Cr. Disc.': ['Co.Cr. 디스크에서 코핑 브릿지를 가공하는 템플릿입니다.', 'Co.Cr.ディスクでコーピングブリッジを加工するテンプレートです。'],
  'This is for milling a Coping in the Co.Cr. Disc.': ['Co.Cr. 디스크에서 코핑을 가공하는 템플릿입니다.', 'Co.Cr.ディスクでコーピングを加工するテンプレートです。'],
  'This is for milling a Crown bridge in the Co.Cr. Disc.': ['Co.Cr. 디스크에서 크라운 브릿지를 가공하는 템플릿입니다.', 'Co.Cr.ディスクでクラウンブリッジを加工するテンプレートです。'],
  'This is for milling a Crown in the Co.Cr. Disc.': ['Co.Cr. 디스크에서 크라운을 가공하는 템플릿입니다.', 'Co.Cr.ディスクでクラウンを加工するテンプレートです。'],
  'For the Abutment Interface of the Highness system': ['Highness 시스템의 어버트먼트 인터페이스용입니다.', 'Highnessシステムのアバットメントインターフェース用です。'],
  'For the Abutment Interface of the M-Fix system': ['M-Fix 시스템의 어버트먼트 인터페이스용입니다.', 'M-Fixシステムのアバットメントインターフェース用です。'],
  'For the Abutment Interface of the M-Fix': ['M-Fix의 어버트먼트 인터페이스용입니다.', 'M-Fixのアバットメントインターフェース用です。'],
  'This template includes a Finishing inside copings with a single insertion direction (3+2-axis).': ['단일 삽입 방향(3+2축)으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.', '単一の挿入方向（3+2軸）でコーピング内部を仕上げる工程が含まれます。'],
  'This template includes a Finishing inside copings with a simultaneous 5-axis.': ['동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.', '同時5軸でコーピング内部を仕上げる工程が含まれます。'],
  'Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side': ['선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.', '任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。'],
  'Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side': ['선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.', '任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。'],
  'Optional, For the Thread process of 2.0mm screw hole only': ['선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.', '任意：2.0mmスクリューホールのねじ加工専用です。'],
  'Optional, For the Thread process of 1.8mm screw hole only': ['선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.', '任意：1.8mmスクリューホールのねじ加工専用です。'],
  'Optional, For the Thread process of 1.6mm screw hole only': ['선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.', '任意：1.6mmスクリューホールのねじ加工専用です。'],
  'Optional, For the Thread process of 1.4mm screw hole only': ['선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.', '任意：1.4mmスクリューホールのねじ加工専用です。'],
  'Optional, For the User-defined area Category 3 and 4, Fissure machining': ['선택 사항: 사용자 정의 영역 유형 3·4 및 열구 가공용입니다.', '任意：ユーザー定義領域のカテゴリ3・4および裂溝加工用です。'],
  'Optional, For the screw hole which has a wide diameter (bigger than 2.25 mm) and longer length (more than 11 mm).': ['선택 사항: 직경이 2.25mm를 초과하고 길이가 11mm를 초과하는 스크류 홀용입니다.', '任意：直径が2.25mmを超え、長さが11mmを超えるスクリューホール用です。'],
  'Optional, For the screw hole which has a narrow diameter (smaller than 2.25 mm) and longer length (more than 11 mm).': ['선택 사항: 직경이 2.25mm 미만이고 길이가 11mm를 초과하는 스크류 홀용입니다.', '任意：直径が2.25mm未満で、長さが11mmを超えるスクリューホール用です。'],
  'Category 1/2 : T12_M1.0B_L10': ['유형 1/2 : T12_M1.0B_L10', 'カテゴリ1/2 : T12_M1.0B_L10'],
  'Category 3/4 : T13_M0.6B_L03': ['유형 3/4 : T13_M0.6B_L03', 'カテゴリ3/4 : T13_M0.6B_L03'],
  'Finishing process inside abutment bases by simultaneous 5-axis movement with 1.5mm diameter tool': ['직경 1.5mm 공구를 사용하여 동시 5축으로 어버트먼트 베이스 내부를 정삭합니다.', '直径1.5mmの工具を使用し、同時5軸でアバットメントベース内部を仕上げます。'],
  'Finishing process inside abutment bases with 1.5mm diameter tool': ['직경 1.5mm 공구로 어버트먼트 베이스 내부를 정삭합니다.', '直径1.5mmの工具でアバットメントベース内部を仕上げます。'],
  'Allowance : Available to adjust the fit inside of abutment bases': ['여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.', '余裕量：アバットメントベース内部の適合を調整できます。'],
  'finishing process inside copings by the path of insertion that was set with 1.0mm diameter tool': ['직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.', '直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。'],
  'Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool': ['직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.', '直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。'],
  'Allowance : Available to adjust the fit inside of copings': ['여유량: 코핑 내부의 적합을 조정할 수 있습니다.', '余裕量：コーピング内部の適合を調整できます。'],
  'Allowance : Available to adjust the fit inside of crowns/copings': ['여유량: 크라운/코핑 내부의 적합을 조정할 수 있습니다.', '余裕量：クラウン／コーピング内部の適合を調整できます。'],
  'finishing process inside copings by the path of insertion that was set with 1.5mm Flat tool': ['1.5mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.', '1.5mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。'],
  'Occlusal groove machining process with 1.0mm diameter tool': ['직경 1.0mm 공구로 교합면의 그루브를 가공합니다.', '直径1.0mmの工具で咬合面の溝を加工します。'],
  'Occlusal groove machining process with 0.6mm diameter tool': ['직경 0.6mm 공구로 교합면의 그루브를 가공합니다.', '直径0.6mmの工具で咬合面の溝を加工します。'],
  'Calculate : Selectable operate this process or skip, (Default: On)': ['계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)', '計算：この工程を実行するか選択できます。（初期値：ON）'],
  'Calculate : Selectable operate this process or skip, (Default: Off)': ['계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)', '計算：この工程を実行するか選択できます。（初期値：OFF）']
};
function localize(line) {
  if (!line) return { ko: '', en: '', ja: '' };
  const pair = translations[line];
  // Machine process identifiers remain exactly as supplied in all languages.
  if (!pair && !/^(Finishing inside|Fissure machining)/.test(line)) throw Error('Missing translation: ' + line);
  return { en: line, ko: pair ? pair[0] : line, ja: pair ? pair[1] : line };
}
const records = source.map(record => {
  const lines = record.lines;
  const toolsAt = lines.indexOf('Tools list used');
  const udaAt = lines.indexOf('User-define area(UDA) available');
  const processesAt = lines.indexOf('Overwritable process');
  if ([toolsAt, udaAt, processesAt].some(i => i < 0)) throw Error('Missing section: ' + record.title);
  const tools = [];
  for (let i = toolsAt + 1; i < udaAt; i++) {
    if (!/^T\d+$/.test(lines[i])) continue;
    const id = lines[i++], name = lines[i++];
    const comments = [];
    while (i < udaAt && !/^T\d+$/.test(lines[i])) comments.push(lines[i++]);
    i--;
    tools.push({ id, name, optional: comments.some(c => /^Optional/.test(c)), comments: comments.map(localize) });
  }
  const processes = [];
  for (const line of lines.slice(processesAt + 1)) {
    if (/^(Finishing inside|Fissure machining)/.test(line)) processes.push({ title: line, descriptions: [] });
    else {
      if (!processes.length) throw Error('Unattached description');
      processes.at(-1).descriptions.push(localize(line));
    }
  }
  const type = record.title.slice(5).split('_')[0];
  const family = type.startsWith('Abutment') ? 'Abutment' : type.startsWith('Coping') ? 'Coping' : type.endsWith('Bridge') ? 'Bridge' : type;
  return { title: record.title, source: record.source, material: 'CoCr', type, family,
    conditions: lines.slice(0, toolsAt).map(localize), uda: lines.slice(udaAt + 1, processesAt).map(localize), tools, processes };
});
fs.writeFileSync('src/data/mai-cocr-templates.js', '// Source: supplied CoCr HTML exports. Generated with node tools/build-mai-cocr.js.\nwindow.MaiCoCrTemplates = ' + JSON.stringify(records, null, 2) + ';\n');
console.log('Built ' + records.length + ' CoCr templates with Korean, English and Japanese text.');
