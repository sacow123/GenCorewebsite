// Batch import: supplied Pre-Mill, Pre-Mil+Rev., Ti, Wax and Zirconia exports.
const fs=require('fs'),vm=require('vm');
const source=JSON.parse(fs.readFileSync('tools/mai-batch-source.json','utf8'));
const pmmaBuilder=fs.readFileSync('tools/build-mai-pmma.js','utf8');
const inherited=vm.runInNewContext(pmmaBuilder.slice(0,pmmaBuilder.lastIndexOf('\nconst records='))+'\n({translations,localize});',{require,console});
const translations=inherited.translations;
// Indices refer to the frozen, readable source strings in mai-batch-new-lines.json.
const newLines=JSON.parse(fs.readFileSync('tools/mai-batch-new-lines.json','utf8'));
const additions={
0:['Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.','Tiプレミルブロックでアバットメントを加工するテンプレートです。'],
1:['어버트먼트 베이스의 보호 영역을 크게 설정하여 가공합니다.','アバットメントベースの保護領域を大きく設定して加工します。'],
2:['최종 정삭에 M1.0B 공구를 사용합니다.','最終仕上げにM1.0B工具を使用します。'],
3:['90도 가공이 포함되어 있습니다.','90度加工が含まれます。'],
4:['선택 사항: 각인 및 스크류 가공용입니다.','任意：刻印およびスクリュー加工用です。'],
6:['직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.','直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。'],
9:['직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.','直径1.0mmの工具で準備工程で設定した文字を刻印します。'],
11:['직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.','直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。'],
13:['직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.','直径1.0mmの工具で0°側の維持溝を加工します。'],
15:['직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.','直径1.0mmの工具で180°側の維持溝を加工します。'],
16:['상부 구조물(크라운)의 시멘트 갭을 0.02 추가합니다. 어버트먼트 이머전스 라인 위쪽을 설계보다 0.02mm 작게 가공합니다.','上部構造（クラウン）のセメントギャップを0.02追加します。アバットメントのエマージェンスラインより上部を設計より0.02mm小さく加工します。'],
17:['상부 구조물(크라운)의 시멘트 갭을 0.04 추가합니다. 어버트먼트 이머전스 라인 위쪽을 설계보다 0.04mm 작게 가공합니다.','上部構造（クラウン）のセメントギャップを0.04追加します。アバットメントのエマージェンスラインより上部を設計より0.04mm小さく加工します。'],
18:['최종 정삭에 M1.5B 공구를 사용합니다.','最終仕上げにM1.5B工具を使用します。'],
19:['어버트먼트 베이스의 보호 영역을 중간 크기로 설정하여 가공합니다.','アバットメントベースの保護領域を中程度の大きさに設定して加工します。'],
20:['Ti 프리밀 블록에서 미니 크기 어버트먼트를 가공하는 템플릿입니다.','Tiプレミルブロックでミニサイズのアバットメントを加工するテンプレートです。'],
21:['Ti 프리밀 블록에서 앵글드 멀티 유닛 어버트먼트를 가공하는 템플릿입니다.','Tiプレミルブロックでアングルドマルチユニットアバットメントを加工するテンプレートです。'],
22:['90도 가공이 포함되어 있지 않습니다.','90度加工は含まれません。'],
23:['선택 사항','任意'],
24:['Ti 프리밀 블록에서 로케이터 어버트먼트를 가공하는 템플릿입니다.','Tiプレミルブロックでロケーターアバットメントを加工するテンプレートです。'],
27:['Ti 디스크에서 어버트먼트를 가공하는 템플릿입니다.','Tiディスクでアバットメントを加工するテンプレートです。'],
28:['Con-log 시스템의 어버트먼트 인터페이스용입니다.','Con-logシステムのアバットメントインターフェース用です。'],
29:['임플란트 인터페이스 벽에 사용할 수 있습니다.','インプラントインターフェースの壁に使用できます。'],
30:['유형이 적용된 어버트먼트 인터페이스와 적용되지 않은 인터페이스 모두에 사용합니다.','カテゴリが適用されたアバットメントインターフェースと適用されていないものの両方に使用します。'],
31:['임플란트 인터페이스 벽(내벽/외벽)에 사용할 수 있습니다.','インプラントインターフェースの壁（内壁／外壁）に使用できます。'],
32:['250410 버전부터 …_EXT/INT 템플릿에 통합됨','バージョン250410以降、…_EXT/INTテンプレートに統合されています。'],
33:['Ti 디스크에서 어버트먼트 브릿지를 가공하는 템플릿입니다.','Tiディスクでアバットメントブリッジを加工するテンプレートです。'],
34:['형상이 좁은 어버트먼트 인터페이스용입니다.','形状が狭いアバットメントインターフェース用です。'],
35:['형상이 좁은 어버트먼트 인터페이스용입니다.','形状が狭いアバットメントインターフェース用です。'],
36:['유형이 적용된 어버트먼트 인터페이스와 적용되지 않은 인터페이스에 사용합니다.','カテゴリが適用されたアバットメントインターフェースと適用されていないものに使用します。'],
37:['단순한 디자인에만 사용합니다.','シンプルなデザインにのみ使用します。'],
38:['공구 소모가 빨라질 수 있습니다.','工具の消耗が早まる場合があります。'],
41:['직경 0.6mm 공구로 어버트먼트 베이스 내부의 잔삭을 가공합니다.','直径0.6mmの工具でアバットメントベース内部の残削加工を行います。'],
42:['Staumann 시스템에서 형상이 좁은 어버트먼트 인터페이스용입니다.','Staumannシステムの形状が狭いアバットメントインターフェース用です。'],
43:['Ti 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.','Tiディスクでアバットメントクラウンを加工するテンプレートです。'],
44:['Ti 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.','Tiディスクでアバットメントクラウンブリッジを加工するテンプレートです。'],
45:['여유량 XY: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.','余裕量XY：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。'],
46:['Ti 디스크에서 커넥터만 가공하는 템플릿입니다.','Tiディスクでコネクターのみを加工するテンプレートです。'],
47:['Ti 디스크에서 코핑 브릿지를 가공하는 템플릿입니다.','Tiディスクでコーピングブリッジを加工するテンプレートです。'],
48:['직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.','直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。'],
50:['직경 1.0mm 공구로 캐비티 측 외부 영역의 잔삭을 가공합니다.','直径1.0mmの工具でキャビティ側の外側領域の残削加工を行います。'],
51:['직경 1.0mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.','直径1.0mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。'],
52:['Ti 디스크에서 코핑을 가공하는 템플릿입니다.','Tiディスクでコーピングを加工するテンプレートです。'],
53:['Ti 디스크에서 크라운 브릿지를 가공하는 템플릿입니다.','Tiディスクでクラウンブリッジを加工するテンプレートです。'],
54:['Ti 디스크에서 크라운을 가공하는 템플릿입니다.','Tiディスクでクラウンを加工するテンプレートです。'],
55:['선택 사항: 코핑 내부의 평면용입니다.','任意：コーピング内部の平面用です。'],
56:['Ti 디스크에서 인터페이스 벽을 확장 가공하는 전용 템플릿입니다.','Tiディスクでインターフェースの壁を拡張加工する専用テンプレートです。'],
58:['직경 1.5mm 플랫 라운드 공구로 교합면 측(0°)의 스크류 채널을 가공합니다.','直径1.5mmのフラットラウンド工具で咬合面側（0°）のスクリューチャンネルを加工します。'],
59:['스크류 채널 반경 오프셋: 교합면 측 스크류 채널의 반경을 조정할 수 있습니다.','スクリューチャンネルの半径オフセット：咬合面側のスクリューチャンネルの半径を調整できます。'],
61:['직경 1.5mm 플랫 라운드 공구로 교합면 측(0°)의 앵글드 스크류 채널을 가공합니다.','直径1.5mmのフラットラウンド工具で咬合面側（0°）のアングルドスクリューチャンネルを加工します。'],
63:['직경 1.5mm 플랫 라운드 공구로 캐비티 측(180°)의 스크류 채널을 가공합니다.','直径1.5mmのフラットラウンド工具でキャビティ側（180°）のスクリューチャンネルを加工します。'],
64:['스크류 채널 반경 오프셋: 캐비티 측 스크류 채널의 반경을 조정할 수 있습니다.','スクリューチャンネルの半径オフセット：キャビティ側のスクリューチャンネルの半径を調整できます。'],
66:['직경 2.0mm 공구로 캐비티 측(180°)의 커넥터를 가공합니다.','直径2.0mmの工具でキャビティ側（180°）のコネクターを加工します。'],
67:['Ti 디스크에서 스크류 헤드를 가공하는 전용 템플릿입니다.','Tiディスクでスクリューヘッドを加工する専用テンプレートです。'],
68:['캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.','キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。'],
69:['Ti 디스크에서 실제 가공 없이 사용자 정의 영역의 계산 가능 여부만 확인하는 템플릿입니다.','Tiディスクで実際の加工を行わず、ユーザー定義領域を計算できるかのみを確認するテンプレートです。'],
70:['Wax 디스크에서 코핑을 가공하는 템플릿입니다.','Waxディスクでコーピングを加工するテンプレートです。'],
71:['선택 사항: 열구 가공 및 코핑 내부 정삭용입니다.','任意：裂溝加工およびコーピング内部の仕上げ用です。'],
72:['선택 사항: 열구 가공용입니다.','任意：裂溝加工用です。'],
73:['직경 1.0mm 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.','直径1.0mmの工具でキャビティ側（180°）のコーピング内部を仕上げます。'],
74:['직경 1.5mm 플랫 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.','直径1.5mmのフラット工具でキャビティ側（180°）のコーピング内部を仕上げます。'],
75:['Wax 디스크에서 크라운을 가공하는 템플릿입니다.','Waxディスクでクラウンを加工するテンプレートです。'],
76:['최종 정삭에 Z0.6B 공구를 사용합니다.','最終仕上げにZ0.6B工具を使用します。'],
77:['Wax 디스크에서 코핑 브릿지를 가공하는 템플릿입니다.','Waxディスクでコーピングブリッジを加工するテンプレートです。'],
78:['Wax 디스크에서 크라운 브릿지를 가공하는 템플릿입니다.','Waxディスクでクラウンブリッジを加工するテンプレートです。'],
79:['직경 1.0mm 공구로 캐비티 측(180°) 인레이/온레이 내부를 정삭합니다.','直径1.0mmの工具でキャビティ側（180°）のインレー／オンレー内部を仕上げます。'],
80:['Wax 디스크에서 인레이/온레이를 가공하는 템플릿입니다.','Waxディスクでインレー／オンレーを加工するテンプレートです。'],
82:['직경 0.6mm 공구로 캐비티 측(180°)의 잔삭을 가공합니다.','直径0.6mmの工具でキャビティ側（180°）の残削加工を行います。'],
83:['Zirconia 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.','Zirconiaディスクでアバットメントクラウンブリッジを加工するテンプレートです。'],
84:['여유량 XY: X축과 Y축만 변경하여 캐비티 측의 적합을 조정할 수 있습니다.','余裕量XY：X軸とY軸のみを変更してキャビティ側の適合を調整できます。'],
86:['Megalink 시스템의 어버트먼트 인터페이스용입니다.','Megalinkシステムのアバットメントインターフェース用です。'],
87:['Zirconia 디스크에서 코핑 브릿지를 가공하는 템플릿입니다.','Zirconiaディスクでコーピングブリッジを加工するテンプレートです。'],
88:['직경 1.5mm 플랫 공구로 코핑 내부를 정삭합니다.','直径1.5mmのフラット工具でコーピング内部を仕上げます。'],
89:['Zirconia 디스크에서 코핑을 가공하는 템플릿입니다.','Zirconiaディスクでコーピングを加工するテンプレートです。'],
90:['Zirconia 디스크에서 크라운 브릿지를 가공하는 템플릿입니다.','Zirconiaディスクでクラウンブリッジを加工するテンプレートです。'],
91:['Z0.3B 공구를 사용하는 열구 가공이 기본으로 포함되어 있습니다.','Z0.3B工具による裂溝加工が標準で含まれます。'],
92:['Zirconia 디스크에서 크라운을 가공하는 템플릿입니다.','Zirconiaディスクでクラウンを加工するテンプレートです。'],
93:['Zirconia 디스크에서 인레이/온레이 브릿지를 가공하는 템플릿입니다.','Zirconiaディスクでインレー／オンレーブリッジを加工するテンプレートです。'],
94:['인레이와 크라운이 혼합된 브릿지에도 사용할 수 있습니다.','インレーとクラウンが混在したブリッジにも使用できます。'],
95:['크라운의 코핑 내부 정삭에는 동시 5축이 적용됩니다.','クラウンのコーピング内部の仕上げには同時5軸が適用されます。'],
96:['Z0.3B 공구를 사용하는 열구 가공과 캐비티 측 가공이 기본으로 포함되어 있습니다.','Z0.3B工具による裂溝加工とキャビティ側の加工が標準で含まれます。'],
97:['선택 사항: 사용자 정의 영역 유형 5·6, 열구 가공 및 캐비티 측 가공용입니다.','任意：ユーザー定義領域のカテゴリ5・6、裂溝加工およびキャビティ側の加工用です。'],
98:['Zirconia 디스크에서 인레이/온레이를 가공하는 템플릿입니다.','Zirconiaディスクでインレー／オンレーを加工するテンプレートです。'],
99:['Zirconia 디스크에서 iBar의 상부 구조물을 가공하는 템플릿입니다.','ZirconiaディスクでiBarの上部構造を加工するテンプレートです。'],
100:['보철물 종류를 Over Sturcture로 설정해야 합니다.','補綴物の種類をOver Sturctureに設定してください。']
};
for(const [index,pair] of Object.entries(additions))translations[newLines[index]]=pair;
const englishOverrides={'250410 버전부터 …_EXT/INT 템플릿에 통합됨':'Merged into the …_EXT/INT template from version 250410.'};
function localize(line){
  let pair=translations[line];
  if(!pair&&/^Category/.test(line)){
    const match=line.match(/^Category\s*(\d+(?:\/\d+)?)\s*:\s*(.+)$/);
    if(match)pair=['유형 '+match[1]+' : '+match[2],'カテゴリ'+match[1]+' : '+match[2]];
  }
  if(!pair&&/^Calculate\s*:/.test(line)){
    if(!/Default:\s*(On|Off)/.test(line))throw Error('Unrecognized default: '+line);
    pair=translations['Calculate : Selectable operate this process or skip, (Default: '+(/Default:\s*On/.test(line)?'On':'Off')+')'];
  }
  if(!pair)throw Error('Missing translation: '+line);
  return {ko:pair[0],en:englishOverrides[line]||line,ja:pair[1],...(englishOverrides[line]?{sourceText:line}:{})};
}
const processTitle = line => /^(General settings$|Finishing inside|Restmachining inside|Fissure machining|Rest machining outer areas|Overall rest machining|Screw channel machining|Cut\/Reduce connector|\(An\)|Engraving D1$|(?:Top|Bottom|Botton) .*Retention groove$)/.test(line);
const tableLabels=new Set(['Tools list used','Tool pocket #','Tools','Comment']);
const records=source.map(record=>{
  const conditions=[],uda=[],interfaces=[],tools=[],processes=[];
  let state='conditions',pendingTool=null;
  for(let i=0;i<record.lines.length;i++){
    const line=record.lines[i];
    if(line==='Tools list used'){state='tools';pendingTool=null;continue;}
    if(line==='User-define area(UDA) available'){state='uda';continue;}
    if(/^Walls of implant interfaces available/.test(line)){state='interfaces';interfaces.push(localize(line));continue;}
    if(line==='Overwritable process'){state='processes';continue;}
    if(processTitle(line)){
      state='processes';processes.push({title:line,...(line==='General settings'?{titleText:{ko:'일반 설정',en:line,ja:'一般設定'}}:{}),descriptions:[]});continue;
    }
    if(state==='tools'){
      if(tableLabels.has(line))continue;
      if(/^T\d+$/.test(line)){
        const name=/^[GMZ]\d/.test(record.lines[i+1]||'')?record.lines[++i]:'';
        pendingTool={id:line,name,optional:false,comments:[]};tools.push(pendingTool);continue;
      }
      if(/^[GMZ]\d/.test(line)){pendingTool={id:'',name:line,optional:false,comments:[]};tools.push(pendingTool);continue;}
      if(!pendingTool)throw Error('Unattached tool comment: '+line);
      pendingTool.comments.push(localize(line));pendingTool.optional ||= /^Optional/i.test(line);continue;
    }
    if(state==='processes'){
      if(!processes.length)throw Error('Unattached process description: '+line);
      processes.at(-1).descriptions.push(localize(line));
    }else ({conditions,uda,interfaces})[state].push(localize(line));
  }
  // The first source repeats its complete identical tool table. Render it once.
  const uniqueTools=tools.filter((tool,index)=>tools.findIndex(t=>JSON.stringify(t)===JSON.stringify(tool))===index);
  // Keep the supplied pocket label, but use the tool-list photo for its actual name.
  for(const tool of uniqueTools)if(tool.id==='T27'&&tool.name==='M1.4TH')tool.imageId='T28';
  let material,type;
  if(record.title.startsWith('Pre-Mil+Rev.')){material='Pre-Mil+Rev.';type='Abutment';}
  else if(record.title.startsWith('Pre-Mill_')){material='Pre-Mill';type='Abutment';}
  else if(/^WAX - /.test(record.title)){material='Wax';type=record.title.slice(6).split('_')[0];}
  else {material=record.title.split('_')[0];type=record.title.slice(material.length+1).split('_')[0];}
  if(type.startsWith('Inlay/Onlay'))type=type.replace(/ -D0\.6$/,'');
  const otherTypes=new Set(['Connector','Interface','Screw Head (T-cut)','Screw Hole Finishing (expansion)','Userdefined areas']);
  const family=otherTypes.has(type)?'Other':/^Abutment/i.test(type)?'Abutment':/^Coping/i.test(type)?'Coping':/^Inlay\/Onlay/i.test(type)?'Inlay/Onlay':/bridge$/i.test(type)?'Bridge':/^Crown/i.test(type)?'Crown':type;
  if(record.images.length)throw Error('Unexpected images: '+record.title);
  const subtitle=material==='Wax'?record.title.replace(/^(Wax_|WAX - )/,''):record.title.slice(material.length+1);
  return {title:record.title,subtitle,source:record.source,material,type,family,conditions,uda,interfaces,tools:uniqueTools,processes,images:[],sourceToolCount:tools.length};
});
fs.writeFileSync('src/data/mai-batch-templates.js','// Source: supplied Pre-Mill, Pre-Mil+Rev., Ti, Wax, Zirconia HTML exports.\n// Generated with node tools/build-mai-batch.js.\nwindow.MaiBatchTemplates = '+JSON.stringify(records,null,2)+';\n');
console.log('Built '+records.length+' templates:',records.reduce((counts,r)=>(counts[r.material]=(counts[r.material]||0)+1,counts),{}));
