// Generate M AI PMMA records from the supplied exports.
const fs=require('fs'),vm=require('vm');
const source=JSON.parse(fs.readFileSync('tools/mai-pmma-source.json','utf8'));
const peekBuilder=fs.readFileSync('tools/build-mai-peek.js','utf8');
const inherited=vm.runInNewContext(peekBuilder.slice(0,peekBuilder.lastIndexOf('\nconst records='))+'\n({translations,localize});',{require,console});
const translations=inherited.translations;
for(const [part,ko,ja] of [
  ['an Abutment crown bridge','어버트먼트 크라운 브릿지','アバットメントクラウンブリッジ'],
  ['an Abutment crown','어버트먼트 크라운','アバットメントクラウン'],
  ['a Coping bridge','코핑 브릿지','コーピングブリッジ'],
  ['a Coping/Crown bridge','코핑/크라운 브릿지','コーピング／クラウンブリッジ'],
  ['a Coping /Crown','코핑/크라운','コーピング／クラウン'],
  ['a Coping','코핑','コーピング'],['a Crown bridge','크라운 브릿지','クラウンブリッジ'],['a Crown','크라운','クラウン']
])translations['This is for milling '+part+' in the PMMA Disc.']=['PMMA 디스크용 '+ko+' 가공 템플릿입니다.','PMMAディスクで'+ja+'を加工するテンプレートです。'];
Object.assign(translations,{
  'Allowance X&Y : Available to adjust(Only X&Y axes) the fit inside of abutment bases':['여유량 X&Y: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.','余裕量X&Y：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。'],
  'finishing process inside copings by the path of insertion that was set with 0.6mm diameter tool':['직경 0.6mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.','直径0.6mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。'],
  'Occlusal groove machining process with 0.3mm diameter tool':['직경 0.3mm 공구로 교합면의 그루브를 가공합니다.','直径0.3mmの工具で咬合面の溝を加工します。'],
  'Incremental Boundary offset':['증분식 경계 옵셋','増分境界オフセット'],
  'Finishing process inside abutment bases with 1.0mm diameter flat tool':['직경 1.0mm 플랫 공구로 어버트먼트 베이스 내부를 정삭합니다.','直径1.0mmのフラット工具でアバットメントベース内部を仕上げます。'],
  'Finishing process inside long cavity by simultaneous 5-axis movement with 1.0mm diameter tool':['직경 1.0mm 공구를 사용하여 동시 5축으로 긴 캐비티 내부를 정삭합니다.','直径1.0mmの工具を使用し、同時5軸で長いキャビティ内部を仕上げます。'],
  'Finishing process inside copings by separated 8-axis movement with 1.0mm diameter tool':['직경 1.0mm 공구를 사용하여 분리된 8축 움직임으로 코핑 내부를 정삭합니다.','直径1.0mmの工具を使用し、分離した8軸の動きでコーピング内部を仕上げます。'],
  'Finishing process insidecopings with 1.0mm diameter tool':['직경 1.0mm 공구로 코핑 내부를 정삭합니다.','直径1.0mmの工具でコーピング内部を仕上げます。'],
  'Occlusal(0º) groove machining process with 1.0mm diameter tool':['직경 1.0mm 공구로 교합면(0°)의 그루브를 가공합니다.','直径1.0mmの工具で咬合面（0°）の溝を加工します。'],
  'Finishing process inside long cavity by simultaneous 5-axis movement with 0.6mm diameter tool':['직경 0.6mm 공구를 사용하여 동시 5축으로 긴 캐비티 내부를 정삭합니다.','直径0.6mmの工具を使用し、同時5軸で長いキャビティ内部を仕上げます。'],
  'This is for milling a Partial denture frame that has simple design in the PMMA Disc.':['PMMA 디스크에서 단순한 디자인의 부분 의치 프레임을 가공하는 템플릿입니다.','PMMAディスクでシンプルなデザインの部分義歯フレームを加工するテンプレートです。'],
  'This is for milling a Flexible denture frame that has simple design in the PMMA Disc.':['PMMA 디스크에서 단순한 디자인의 유연 의치 프레임을 가공하는 템플릿입니다.','PMMAディスクでシンプルなデザインのフレキシブル義歯フレームを加工するテンプレートです。'],
  'This is for milling a Full denture frame that has simple design in the PMMA Disc.':['PMMA 디스크에서 단순한 디자인의 전체 의치 프레임을 가공하는 템플릿입니다.','PMMAディスクでシンプルなデザインの総義歯フレームを加工するテンプレートです。'],
  'The part should be set to Denture Teeth':['보철물 종류를 Denture Teeth로 설정해야 합니다.','補綴物の種類をDenture Teethに設定してください。'],
  'The part should be set to Flexible denture.':['보철물 종류를 Flexible denture로 설정해야 합니다.','補綴物の種類をFlexible dentureに設定してください。'],
  'The part should be set to Full Denture':['보철물 종류를 Full Denture로 설정해야 합니다.','補綴物の種類をFull Dentureに設定してください。'],
  'The part should be set to Partial frame.':['보철물 종류를 Partial frame으로 설정해야 합니다.','補綴物の種類をPartial frameに設定してください。'],
  'The part should be set to Over Structure':['보철물 종류를 Over Structure로 설정해야 합니다.','補綴物の種類をOver Structureに設定してください。'],
  'This template takes about half an hour longer, but the prosthesis surface is much smoother than normal version.':['일반 버전보다 약 30분 더 걸리지만 보철물 표면이 훨씬 매끄럽습니다.','通常版より約30分長くかかりますが、補綴物の表面がより滑らかになります。'],
  'Finishing process inside tooth pocket with 1.0mm diameter tool.':['직경 1.0mm 공구로 치아 포켓 내부를 정삭합니다.','直径1.0mmの工具で歯のポケット内部を仕上げます。'],
  'Allowance: Available to adjust the fit inside of the tooth pockets':['여유량: 치아 포켓 내부의 적합을 조정할 수 있습니다.','余裕量：歯のポケット内部の適合を調整できます。'],
  'This is for milling a Supra-structure of iBar in the PMMA Disc.':['PMMA 디스크에서 iBar의 상부 구조물을 가공하는 템플릿입니다.','PMMAディスクでiBarの上部構造を加工するテンプレートです。'],
  'This template includes a Finishing inside copings with 8 different angles.':['8개의 서로 다른 각도로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.','8つの異なる角度でコーピング内部を仕上げる工程が含まれます。']
});
const localize=inherited.localize;
const records=source.map(record=>{
  const lines=record.lines,toolsAt=lines.indexOf('Tools list used'),udaAt=lines.indexOf('User-define area(UDA) available'),processesAt=lines.indexOf('Overwritable process');
  if([toolsAt,udaAt,processesAt].some(i=>i<0))throw Error('Missing section: '+record.title);
  const tools=[];
  for(let i=toolsAt+1;i<udaAt;i++){
    if(!/^(T\d+$|[GMZ]\d)/.test(lines[i]))continue;
    const id=/^T\d+$/.test(lines[i])?lines[i++]:'',name=lines[i++],comments=[];
    while(i<udaAt&&!/^(T\d+$|[GMZ]\d)/.test(lines[i]))comments.push(lines[i++]);i--;
    tools.push({id,name,optional:comments.some(c=>/^Optional/.test(c)),comments:comments.map(localize)});
  }
  const processes=[];
  for(const line of lines.slice(processesAt+1)){
    if(/^(General settings|Finishing inside|Fissure machining)/.test(line))processes.push({title:line,...(line==='General settings'?{titleText:{ko:'일반 설정',en:line,ja:'一般設定'}}:{}),descriptions:[]});
    else {if(!processes.length)throw Error('Unattached description');processes.at(-1).descriptions.push(localize(line));}
  }
  const type=record.title.slice(5).replace(/^MAI_/,'').split('_')[0];
  const family=/^Abutment/i.test(type)?'Abutment':/^Coping/i.test(type)?'Coping':/^(Denture teeth|Flexible denture|Full denture|Partial Frame)$/i.test(type)?'Denture & Frame':type==='Over Structure'?type:/bridge$/i.test(type)?'Bridge':'Crown';
  if(record.images.length)throw Error('Unexpected images: '+record.title);
  return {title:record.title,source:record.source,material:'PMMA',type,family,conditions:lines.slice(0,toolsAt).map(localize),uda:lines.slice(udaAt+1,processesAt).map(localize),tools,processes,images:[]};
});
fs.writeFileSync('src/data/mai-pmma-templates.js','// Source: supplied PMMA HTML exports. Generated with node tools/build-mai-pmma.js.\nwindow.MaiPmmaTemplates = '+JSON.stringify(records,null,2)+';\n');
console.log('Built '+records.length+' PMMA records with KO/EN/JA fields.');
