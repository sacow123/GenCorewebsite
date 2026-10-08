// Rebuild Glass Ceramic records from the supplied HTML export snapshot.
const fs = require('fs');
const source = JSON.parse(fs.readFileSync('tools/mai-glass-source.json', 'utf8'));
const translations = {
  'This is for milling a Crown and Veneer in the Glass-ceramic block or disc.': ['글라스 세라믹 블록 또는 디스크에서 크라운과 비니어를 가공하는 템플릿입니다.', 'ガラスセラミックのブロックまたはディスクでクラウンとベニアを加工するテンプレートです。'],
  'This template includes a Finishing inside copings with both a single insertion direction (3+2-axis) by G1.0B.': ['G1.0B 공구로 단일 삽입 방향(3+2축)에 따라 코핑 내부를 정삭하는 공정이 포함되어 있습니다.', 'G1.0B工具を使用し、単一の挿入方向（3+2軸）に沿ってコーピング内部を仕上げる工程が含まれます。'],
  'Two connectors are available to set. Therefore the connectors can be thiner. All connectors must be connected to the blank remained.': ['커넥터를 2개 설정할 수 있으므로 더 얇게 설정할 수 있습니다. 모든 커넥터는 남아 있는 블랭크에 연결해야 합니다.', 'コネクターを2本設定できるため、より薄く設定できます。すべてのコネクターを残存するブランクに接続してください。'],
  'One connector is available to set. Therefore the connector must have an enough thickness.The direction of the connector must be forward to the jig(fixture).': ['커넥터를 1개 설정할 수 있으므로 충분한 두께를 확보해야 합니다. 커넥터의 방향은 지그(픽스처)를 향해야 합니다.', 'コネクターを1本設定できるため、十分な厚さを確保してください。コネクターの方向はジグ（フィクスチャー）に向けてください。'],
  'This is for milling a Inlay/Onlay in the Glass-ceramic block or disc.': ['글라스 세라믹 블록 또는 디스크에서 인레이/온레이를 가공하는 템플릿입니다.', 'ガラスセラミックのブロックまたはディスクでインレー／オンレーを加工するテンプレートです。'],
  'This is for milling a Inlay/Onlay in the Glass-ceramic disc.': ['글라스 세라믹 디스크에서 인레이/온레이를 가공하는 템플릿입니다.', 'ガラスセラミックのディスクでインレー／オンレーを加工するテンプレートです。'],
  'This template for the Inlay/Onlay milling without connectors. Only mill half of the cavity direction(180º).': ['커넥터 없이 인레이/온레이를 가공하는 템플릿입니다. 캐비티 방향(180°)의 절반만 가공합니다.', 'コネクターなしでインレー／オンレーを加工するテンプレートです。キャビティ方向（180°）の半分のみを加工します。'],
  'This template for the Inlay/Onlay milling without connectors. Only mill half of the occlusal direction(0º).': ['커넥터 없이 인레이/온레이를 가공하는 템플릿입니다. 교합면 방향(0°)의 절반만 가공합니다.', 'コネクターなしでインレー／オンレーを加工するテンプレートです。咬合面方向（0°）の半分のみを加工します。'],
  'The Fissure machining by G0.6B is included as default.': ['G0.6B 공구를 사용하는 열구 가공이 기본으로 포함되어 있습니다.', 'G0.6B工具による裂溝加工が標準で含まれます。'],
  'Optional, For the Fissure machining': ['선택 사항: 열구 가공용입니다.', '任意：裂溝加工用です。'],
  'Category 1: T07_G1.0B_L9': ['유형 1: T07_G1.0B_L9', 'カテゴリ1: T07_G1.0B_L9'],
  'Category 3: T08_G0.6B_L9': ['유형 3: T08_G0.6B_L9', 'カテゴリ3: T08_G0.6B_L9'],
  'Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool': ['직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.', '直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。'],
  'Allowance : Available to adjust the fit cavity side of Inlay/Onlay.': ['여유량: 인레이/온레이 캐비티 측의 적합을 조정할 수 있습니다.', '余裕量：インレー／オンレーのキャビティ側の適合を調整できます。'],
  'Alloance: Available to adjust the fit cavity side of Inlay/Onlay.': ['여유량: 인레이/온레이 캐비티 측의 적합을 조정할 수 있습니다.', '余裕量：インレー／オンレーのキャビティ側の適合を調整できます。'],
  'Finishing process cavity side(180º) with 1.0mm diameter tool.': ['직경 1.0mm 공구로 캐비티 측(180°)을 정삭합니다.', '直径1.0mmの工具でキャビティ側（180°）を仕上げます。'],
  'Restmachining process cavity side(180º) with 0.6mm diameter tool.': ['직경 0.6mm 공구로 캐비티 측(180°)의 잔삭을 가공합니다.', '直径0.6mmの工具でキャビティ側（180°）の残削加工を行います。'],
  'Occlusal(0º) groove machining process with 0.6mm diameter tool': ['직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.', '直径0.6mmの工具で咬合面（0°）の溝を加工します。'],
  'Occlusal(0º) groove machining process with 0.3mm diameter tool': ['직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.', '直径0.3mmの工具で咬合面（0°）の溝を加工します。']
};
function localize(line) {
  let pair = translations[line];
  if (!pair && /^(Calculate\s*: |Selectable operate)/.test(line)) {
    const on = line.endsWith('(Default: On)');
    pair = ['계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: ' + (on ? '켜짐' : '꺼짐') + ')', '計算：この工程を実行するか選択できます。（初期値：' + (on ? 'ON' : 'OFF') + '）'];
  }
  if (!pair) throw Error('Missing translation: ' + line);
  return { ko: pair[0], en: line, ja: pair[1] };
}
const records = source.map(record => {
  const lines = record.lines, toolsAt = lines.indexOf('Tools list used'), udaAt = lines.indexOf('User-define area(UDA) available'), processesAt = lines.indexOf('Overwritable process');
  if ([toolsAt, udaAt, processesAt].some(i => i < 0)) throw Error('Missing section: ' + record.title);
  const tools = [];
  for (let i = toolsAt + 1; i < udaAt; i++) {
    if (!/^T\d+$/.test(lines[i])) continue;
    const id = lines[i++], name = lines[i++], comments = [];
    while (i < udaAt && !/^T\d+$/.test(lines[i])) comments.push(lines[i++]);
    i--;
    tools.push({ id, name, optional: comments.some(c => /^Optional/.test(c)), comments: comments.map(localize) });
  }
  const processes = [];
  for (const line of lines.slice(processesAt + 1)) {
    if (/^(Finishing inside|Fissure machining|Overall finishing|Overall restmachining)/.test(line)) processes.push({ title: line, descriptions: [] });
    else {
      if (!processes.length) throw Error('Unattached description');
      processes.at(-1).descriptions.push(localize(line));
    }
  }
  const type = record.title.slice('Glass Ceramic_'.length).split('_')[0];
  return { title: record.title, source: record.source, material: 'Glass Ceramic', type, family: type.startsWith('Crown') ? 'Crown' : 'Inlay/Onlay',
    conditions: lines.slice(0, toolsAt).map(localize), uda: lines.slice(udaAt + 1, processesAt).map(localize), tools, processes,
    images: record.images.map((src, index) => ({ source: src, src: 'assets/images/sec-mai-dbconfig/glass-ceramic/' + decodeURIComponent(src).replace(' ', '-').replace('.png', '.webp'), alt: {ko: '원본 커넥터 설정 예시 ' + (index + 1), en: 'Original connector setup example ' + (index + 1), ja: '原資料のコネクター設定例 ' + (index + 1)} })) };
});
fs.writeFileSync('src/data/mai-glass-templates.js', '// Source: supplied Glass Ceramic HTML exports. Generated with node tools/build-mai-glass.js.\nwindow.MaiGlassTemplates = ' + JSON.stringify(records, null, 2) + ';\n');
console.log('Built ' + records.length + ' Glass Ceramic templates with KO/EN/JA text.');
