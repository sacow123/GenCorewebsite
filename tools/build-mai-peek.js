// Generate M AI PEEK records from supplied HTML exports.
const fs=require('fs'),vm=require('vm');
const source=JSON.parse(fs.readFileSync('tools/mai-peek-source.json','utf8'));
const hybridBuilder=fs.readFileSync('tools/build-mai-hybrid.js','utf8');
const translations=vm.runInNewContext(hybridBuilder.slice(0,hybridBuilder.lastIndexOf('\nconst records ='))+'\ntranslations;', {require,console});
Object.assign(translations, {
  'This is for milling an Abutment crown in the PEEK Disc.':['PEEK 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.','PEEKディスクでアバットメントクラウンを加工するテンプレートです。'],
  'This is for milling an Abutment crown bridge in the PEEK Disc.':['PEEK 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.','PEEKディスクでアバットメントクラウンブリッジを加工するテンプレートです。'],
  'This is for milling a Crown bridge in the PEEK Disc.':['PEEK 디스크에서 크라운 브릿지를 가공하는 템플릿입니다.','PEEKディスクでクラウンブリッジを加工するテンプレートです。'],
  'This is for milling a Crown in the PEEK Disc.':['PEEK 디스크에서 크라운을 가공하는 템플릿입니다.','PEEKディスクでクラウンを加工するテンプレートです。'],
  'This is for milling a Supra-structure of iBar in the PEEK Disc.':['PEEK 디스크에서 iBar의 상부 구조물을 가공하는 템플릿입니다.','PEEKディスクでiBarの上部構造を加工するテンプレートです。'],
  'The part should be set to Over structure':['보철물 종류를 Over structure로 설정해야 합니다.','補綴物の種類をOver structureに設定してください。'],
  'This template includes a Finishing inside copings with 8 different angle.':['8개의 서로 다른 각도로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.','8つの異なる角度でコーピング内部を仕上げる工程が含まれます。'],
  'The Fissure machining by M0.6B is included as default.':['M0.6B 공구를 사용하는 열구 가공이 기본으로 포함되어 있습니다.','M0.6B工具による裂溝加工が標準で含まれます。'],
  'Optional, For the User-defined area Category 5 and 6, Fissure machining':['선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.','任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。'],
  'Optional, For the screw seating area':['선택 사항: 스크류 안착부용입니다.','任意：スクリューの座面用です。'],
  'Optional, For the angled screw hole':['선택 사항: 앵글드 스크류 홀용입니다.','任意：アングルドスクリューホール用です。'],
  'Allowance XY : Available to adjust the fit(Only X&Y axes) inside of abutment bases':['여유량 XY: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.','余裕量XY：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。'],
  'Allowance: Available to adjust the fit cavity side of crown bridge.':['여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.','余裕量：クラウンブリッジのキャビティ側の適合を調整できます。'],
  'Allowance: Available to adjust the fit cavity side of crown.':['여유량: 크라운 캐비티 측의 적합을 조정할 수 있습니다.','余裕量：クラウンのキャビティ側の適合を調整できます。'],
  'Allowance: Available to adjust the fit cavity side.':['여유량: 캐비티 측의 적합을 조정할 수 있습니다.','余裕量：キャビティ側の適合を調整できます。'],
  'Finishing process inside abutment bases with 1.0mm diameter tool':['직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.','直径1.0mmの工具でアバットメントベース内部を仕上げます。'],
  'Finishing process inside abutment bases with 0.6mm diameter tool':['직경 0.6mm 공구로 어버트먼트 베이스 내부를 정삭합니다.','直径0.6mmの工具でアバットメントベース内部を仕上げます。'],
  'Finishing process inside copings with 1.0mm diameter tool':['직경 1.0mm 공구로 코핑 내부를 정삭합니다.','直径1.0mmの工具でコーピング内部を仕上げます。'],
  'Finishing process inside copings with 0.6mm diameter tool':['직경 0.6mm 공구로 코핑 내부를 정삭합니다.','直径0.6mmの工具でコーピング内部を仕上げます。'],
  'Finishing process inside copings with 1.5mm Flat diameter tool':['1.5mm 플랫 공구로 코핑 내부를 정삭합니다.','1.5mmのフラット工具でコーピング内部を仕上げます。'],
  'Finishing process inside copings by simultaneous 5-axis movement with 1.0mm diameter tool':['직경 1.0mm 공구를 사용하여 동시 5축으로 코핑 내부를 정삭합니다.','直径1.0mmの工具を使用し、同時5軸でコーピング内部を仕上げます。'],
  'Finishing process inside long cavity by separated 8-axis movement with 1.0mm diameter tool':['직경 1.0mm 공구를 사용하여 분리된 8축 움직임으로 긴 캐비티 내부를 정삭합니다.','直径1.0mmの工具を使用し、分離した8軸の動きで長いキャビティ内部を仕上げます。'],
  'Finishing process inside long cavity with 1.0mm diameter tool':['직경 1.0mm 공구로 긴 캐비티 내부를 정삭합니다.','直径1.0mmの工具で長いキャビティ内部を仕上げます。']
});
function localize(line){
  let pair=translations[line];
  if(!pair&&/^Calculate\s*:/.test(line))pair=translations['Calculate : '+line.split(':').slice(1).join(':').trim()];
  if(!pair&&/^Category/.test(line)){
    const match=line.match(/^Category\s+(\d\/\d)\s*:\s*(.+)$/);
    if(match)pair=['유형 '+match[1]+' : '+match[2],'カテゴリ'+match[1]+' : '+match[2]];
  }
  if(!pair)throw Error('Missing translation: '+line);
  return {ko:pair[0],en:line,ja:pair[1]};
}
const records=source.map(record=>{
  const lines=record.lines,toolsAt=lines.indexOf('Tools list used'),udaAt=lines.indexOf('User-define area(UDA) available'),processesAt=lines.indexOf('Overwritable process');
  if([toolsAt,udaAt,processesAt].some(i=>i<0))throw Error('Missing section: '+record.title);
  const tools=[];
  for(let i=toolsAt+1;i<udaAt;i++){
    if(!/^(T\d+$|[GMZ]\d)/.test(lines[i]))continue;
    // One supplied table leaves the pocket number blank for Z0.3B.
    const id=/^T\d+$/.test(lines[i])?lines[i++]:'',name=lines[i++],comments=[];
    while(i<udaAt&&!/^(T\d+$|[GMZ]\d)/.test(lines[i]))comments.push(lines[i++]);i--;
    tools.push({id,name,optional:comments.some(c=>/^Optional/.test(c)),comments:comments.map(localize)});
  }
  const processes=[];
  for(const line of lines.slice(processesAt+1)){
    if(/^(Finishing inside|Fissure machining)/.test(line))processes.push({title:line,descriptions:[]});
    else {if(!processes.length)throw Error('Unattached description');processes.at(-1).descriptions.push(localize(line));}
  }
  const type=record.title.slice(5).split('_')[0];
  const family=type.startsWith('Abutment')?'Abutment':type==='Over Structure'?type:/Bridge$/i.test(type)?'Bridge':'Crown';
  if(record.images.length)throw Error('Unexpected source images: '+record.title);
  return {title:record.title,source:record.source,material:'PEEK',type,family,conditions:lines.slice(0,toolsAt).map(localize),uda:lines.slice(udaAt+1,processesAt).map(localize),tools,processes,images:[]};
});
fs.writeFileSync('src/data/mai-peek-templates.js','// Source: supplied PEEK HTML exports. Generated with node tools/build-mai-peek.js.\nwindow.MaiPeekTemplates = '+JSON.stringify(records,null,2)+';\n');
console.log('Built '+records.length+' PEEK records with KO/EN/JA fields.');
