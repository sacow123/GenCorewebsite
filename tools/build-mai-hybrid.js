// Generate M AI Hybrid Ceramic records from the supplied export snapshot.
const fs = require('fs'), vm = require('vm');
const source = JSON.parse(fs.readFileSync('tools/mai-hybrid-source.json', 'utf8'));
const translations = {};
for (const builder of ['tools/build-mai-cocr.js', 'tools/build-mai-glass.js']) {
  const code = fs.readFileSync(builder, 'utf8').split('const records =')[0];
  Object.assign(translations, vm.runInNewContext(code + '\ntranslations;', {require,console}));
}
Object.assign(translations, {
  'This is for milling an Abutment crown bridge in the Hybrid-ceramic block and disc.': ['하이브리드 세라믹 블록 및 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.', 'ハイブリッドセラミックのブロックおよびディスクでアバットメントクラウンブリッジを加工するテンプレートです。'],
  'This is for milling an Abutment crown in the Hybrid-ceramic block and disc.': ['하이브리드 세라믹 블록 및 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.', 'ハイブリッドセラミックのブロックおよびディスクでアバットメントクラウンを加工するテンプレートです。'],
  'This is for milling a Crown in the Hybrid-ceramic block and disc.': ['하이브리드 세라믹 블록 및 디스크에서 크라운을 가공하는 템플릿입니다.', 'ハイブリッドセラミックのブロックおよびディスクでクラウンを加工するテンプレートです。'],
  'This is for milling an Inlay/Crown bridge even if they are mixed in a bridge in the Hybrid-ceramic block and disc.': ['하이브리드 세라믹 블록 및 디스크에서 인레이/크라운 브릿지를 가공하는 템플릿입니다. 하나의 브릿지에 인레이와 크라운이 혼합된 경우에도 사용할 수 있습니다.', 'ハイブリッドセラミックのブロックおよびディスクでインレー／クラウンブリッジを加工するテンプレートです。1つのブリッジにインレーとクラウンが混在していても使用できます。'],
  'This is for milling an Inlay/Onlay in the Hybrid-ceramic block and disc.': ['하이브리드 세라믹 블록 및 디스크에서 인레이/온레이를 가공하는 템플릿입니다.', 'ハイブリッドセラミックのブロックおよびディスクでインレー／オンレーを加工するテンプレートです。'],
  'This is for milling a Inlay/Onlay in the Hybrid-ceramic block and disc.': ['하이브리드 세라믹 블록 및 디스크에서 인레이/온레이를 가공하는 템플릿입니다.', 'ハイブリッドセラミックのブロックおよびディスクでインレー／オンレーを加工するテンプレートです。'],
  'This template includes a Finishing inside Inlay/onlay with both a single insertion direction (3+2-axis).': ['단일 삽입 방향(3+2축)으로 인레이/온레이 내부를 정삭하는 공정이 포함되어 있습니다.', '単一の挿入方向（3+2軸）でインレー／オンレー内部を仕上げる工程が含まれます。'],
  'a single insertion direction (3+2-axis).': ['단일 삽입 방향(3+2축).', '単一の挿入方向（3+2軸）。'],
  'Incremental Boundary offset.': ['Incremental Boundary offset (가공 경계 오프셋).', 'Incremental Boundary offset（加工境界のオフセット）。'],
  'You can adjust milling boundary offset.': ['가공 경계의 오프셋을 조정할 수 있습니다.', '加工境界のオフセットを調整できます。'],
  'Incremental Boundary angle.': ['Incremental Boundary angle (가공 경계 각도).', 'Incremental Boundary angle（加工境界の角度）。'],
  'You can adjust milling boundary angle.': ['가공 경계의 각도를 조정할 수 있습니다.', '加工境界の角度を調整できます。'],
  'Allowance : Available to adjust the fit cavity side.': ['여유량: 캐비티 측의 적합을 조정할 수 있습니다.', '余裕量：キャビティ側の適合を調整できます。'],
  'Allowance XY : Available to adjust the fit cavity side by modifying X and Y axes only.': ['여유량 XY: X축과 Y축만 변경하여 캐비티 측의 적합을 조정할 수 있습니다.', '余裕量XY：X軸とY軸のみを変更してキャビティ側の適合を調整できます。'],
  'Finishing process inside coping with 1.0mm diameter tool': ['직경 1.0mm 공구로 코핑 내부를 정삭합니다.', '直径1.0mmの工具でコーピング内部を仕上げます。'],
  'Finishing process inside coping with 0.6mm diameter tool': ['직경 0.6mm 공구로 코핑 내부를 정삭합니다.', '直径0.6mmの工具でコーピング内部を仕上げます。'],
  'Finishing process cavity side(180º) with 1.0mm diameter tool': ['직경 1.0mm 공구로 캐비티 측(180°)을 정삭합니다.', '直径1.0mmの工具でキャビティ側（180°）を仕上げます。'],
  'Restmachining process cavity side with 0.6mm diameter tool': ['직경 0.6mm 공구로 캐비티 측의 잔삭을 가공합니다.', '直径0.6mmの工具でキャビティ側の残削加工を行います。'],
  'It is utilized for the O-cavity inlay that it is difficult to add a connector. This is milling the cavity side only. After milling the cavity side, add gypsum to fix the object, and then start 2nd occlusal milling.': ['커넥터를 추가하기 어려운 O-cavity 인레이에 사용합니다. 캐비티 측만 가공합니다. 캐비티 측 가공 후 석고를 추가하여 보철물을 고정한 다음, 2차 교합면 가공을 시작합니다.', 'コネクターの追加が難しいO-cavityインレーに使用します。キャビティ側のみを加工します。キャビティ側の加工後、石膏を追加して補綴物を固定し、2回目の咬合面加工を開始します。'],
  'It is utilized for the O-cavity inlay that it is difficult to add a connector. This is milling the occlusal side only. Before starting the 2nd occlusal milling, the object should be fixed by gypsum in caviry side.': ['커넥터를 추가하기 어려운 O-cavity 인레이에 사용합니다. 교합면 측만 가공합니다. 2차 교합면 가공을 시작하기 전에 캐비티 측에 석고를 넣어 보철물을 고정해야 합니다.', 'コネクターの追加が難しいO-cavityインレーに使用します。咬合面側のみを加工します。2回目の咬合面加工を開始する前に、キャビティ側に石膏を入れて補綴物を固定してください。']
});
for (const amount of ['0.05','0.08']) {
  const line = 'In case the adaptation is loose with “Hybrid Ceramic_Inlay/Onlay/Veneers_D0.6”, this template can mill the prosthesis around ' + amount + 'mm bigger.';
  translations[line] = ['“Hybrid Ceramic_Inlay/Onlay/Veneers_D0.6”의 적합이 느슨한 경우, 이 템플릿으로 보철물을 약 ' + amount + 'mm 더 크게 가공할 수 있습니다.', '「Hybrid Ceramic_Inlay/Onlay/Veneers_D0.6」で適合が緩い場合、このテンプレートで補綴物を約' + amount + 'mm大きく加工できます。'];
}
function localize(line) {
  const pair = translations[line];
  if (!pair) throw Error('Missing translation: ' + line);
  return {ko:pair[0],en:line,ja:pair[1]};
}
const records = source.map(record => {
  const lines=record.lines, toolsAt=lines.indexOf('Tools list used'), udaAt=lines.indexOf('User-define area(UDA) available'), processesAt=lines.indexOf('Overwritable process');
  if ([toolsAt,udaAt,processesAt].some(i=>i<0)) throw Error('Missing section: '+record.title);
  const tools=[];
  for(let i=toolsAt+1;i<udaAt;i++){
    if(!/^T\d+$/.test(lines[i]))continue;
    const id=lines[i++],name=lines[i++],comments=[];
    while(i<udaAt&&!/^T\d+$/.test(lines[i]))comments.push(lines[i++]);
    i--;
    tools.push({id,name,optional:comments.some(c=>/^Optional/.test(c)),comments:comments.map(localize)});
  }
  const processes=[];
  for(const line of lines.slice(processesAt+1)){
    if(/^(General settings|Finishing inside|Fissure machining|Overall finishing|Overall restmachining)/.test(line)) processes.push({title:line, ...(line==='General settings'?{titleText:{ko:'일반 설정',en:line,ja:'一般設定'}}:{}),descriptions:[]});
    else {if(!processes.length)throw Error('Unattached description');processes.at(-1).descriptions.push(localize(line));}
  }
  const type=record.title.slice('Hybrid Ceramic_'.length).split('_')[0];
  const family=type.startsWith('Abutment')?'Abutment':type.startsWith('Inlay/Onlay')?'Inlay/Onlay':/bridge$/i.test(type)?'Bridge':'Crown';
  return {title:record.title,source:record.source,material:'Hybrid Ceramic',type,family,conditions:lines.slice(0,toolsAt).map(localize),uda:lines.slice(udaAt+1,processesAt).map(localize),tools,processes,
    images:record.images.map(src=>({source:src,src:'assets/images/sec-mai-dbconfig/hybrid-ceramic/boundary-settings.webp',process:'General settings',alt:{ko:'가공 경계 오프셋과 각도 설정 원본 이미지',en:'Original milling boundary offset and angle settings image',ja:'加工境界のオフセットと角度の設定の原画像'}}))};
});
fs.writeFileSync('src/data/mai-hybrid-templates.js','// Source: supplied Hybrid Ceramic HTML exports. Generated with node tools/build-mai-hybrid.js.\nwindow.MaiHybridTemplates = '+JSON.stringify(records,null,2)+';\n');
console.log('Built '+records.length+' Hybrid Ceramic templates with KO/EN/JA fields.');
