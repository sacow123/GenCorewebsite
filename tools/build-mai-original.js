// Canonical selectable templates. Browser QA is explicitly deferred for this batch.
const fs = require('fs');
const source = require('./mai-selected-260830-source.json');
const loc = (ko,en,ja) => ({ko,en,ja});
const types = {
  crown_single:['Crown','Crown'], cap_single:['Coping','Coping'], crown_bridge:['Crown Bridge','Bridge'], cap_bridge:['Coping Bridge','Coping'],
  'crown_single:Veneer':['Veneer','Crown'], onlay_single:['Inlay/Onlay','Inlay/Onlay'], onlaycrown_single:['Inlay/Onlay Crown','Inlay/Onlay'],
  onlay_bridge:['Inlay/Onlay Bridge','Inlay/Onlay'], onlaycrown_bridge:['Inlay/Onlay Crown Bridge','Inlay/Onlay'],
  abutment_single:['Abutment','Abutment'], abutment_bridge:['Abutment Bridge','Abutment'], abutmentcrown_single:['Abutment Crown','Abutment'], abutmentcrown_bridge:['Abutment Crown Bridge','Abutment'],
  'bitesplint_single:Over Structure':['Over Structure','Over Structure'], 'bitesplint_single:Full denture':['Full Denture','Denture & Frame'],
  'bitesplint_single:Full/partial_denture':['Full/Partial Denture','Denture & Frame'], 'model_single:Partial Frame':['Partial Frame','Denture & Frame'],
  'model_single:Flexible denture':['Flexible Denture','Denture & Frame'], 'model_single:denture Teeth':['Denture Teeth','Denture & Frame'],
  'bitesplint_single:Night Guard':['Night Guard','Denture & Frame'], model_single:['Model','Other'], bitesplint_single:['Bite Splint','Denture & Frame']
};
const fields = {
  millincoffset:['증분식 경계 옵셋','Incremental boundary offset','増分境界オフセット'], milloffset_incangle:['증분식 경계 각도','Incremental boundary angle','増分境界角度'],
  allowance:['여유량','Allowance','余裕量'], addallowancexy:['XY 여유량','XY allowance','XY余裕量'], boundcheckoffset:['경계 검사 옵셋','Boundary check offset','境界チェックオフセット'],
  addrad:['추가 반경','Additional radius','追加半径'], stepdown:['스텝다운','Stepdown','ステップダウン']
};
const editable = p => Object.keys(p).filter(k=>k.endsWith('_ovwren') && p[k]==='1').map(k=>k.slice(0,-7));
const exposed = j => j.p.calculate==='1'||j.p.calculate_ovwren==='1';
const onoff = v => v==='1'?['켜짐','On','ON']:['꺼짐','Off','OFF'];
const calculateDefault = v => {const a=onoff(v);return loc('계산 기본값: '+a[0],'Calculate default: '+a[1],'計算の初期値：'+a[2]);};
function parameter(p,key) {
  if(key==='calculate')return loc('계산: 이 공정의 실행 여부를 선택할 수 있습니다.','Calculate: Choose whether to run this process.','計算：この工程を実行するか選択できます。');
  const label=fields[key];if(!label || p[key]===undefined)throw Error('Unknown or missing adjustable parameter: '+key);
  return loc(label[0]+': 조정 가능 (기본값: '+p[key]+')',label[1]+': Adjustable (Default: '+p[key]+')',label[2]+'：調整可能（初期値：'+p[key]+'）');
}
const order=['CoCr','Glass Ceramic','Hybrid Ceramic','PEEK','PMMA','Pre-Mill','Pre-Mil+Rev.','Ti','Wax','Zirconia','DuraFlex','Amber_Dry','Medentika Pre-mill'];
const preserved=[...require('./build-mai-cocr-bridge.js'),...require('./build-mai-cocr-crown.js')];
const records=source.records.slice().sort((a,b)=>order.indexOf(a.materialGroup)-order.indexOf(b.materialGroup)).map(raw=>{
  if(raw.unmatched.length)throw Error('Unmatched overrides: '+raw.name);
  const memberships=raw.partTypes.map(t=>{if(!types[t])throw Error('Unknown part type '+t);return {sourceType:t,type:types[t][0],family:types[t][1]};});
  const material=raw.materialGroup;
  const prior=preserved.find(r=>r.sourceProfileId===raw.id);
  const applicableMaterials=source.materials.filter(m=>{let id=m.id;const visited=new Set();while(id&&!visited.has(id)){if(id===raw.material)return true;visited.add(id);id=source.materials.find(x=>x.id===id)?.parent;}return false;}).map(m=>m.id);
  const toolFor=j=>{const t=raw.tools.find(t=>t && t.id===j.p.tool);if(!t)throw Error('Missing tool: '+raw.name+' / '+j.p.jobname);return t;};
  const processes=[];
  function rangeFor(job, key) {
    const ids=job?[job.id,job.objectid,job.p.joboid]:['globals'];
    const override=raw.overrides.find(o=>o.kind==='Restriction'&&ids.some(id=>o.key===id+'##'+key));
    if(!override)return [];
    const bounds=[...override.value.matchAll(/(biggerOrEqual|smallerOrEqual|bigger|smaller)<double>\("([^"]+)"\)/g)];
    if(!bounds.length)throw Error('Unknown range: '+override.value);
    const symbols={biggerOrEqual:'≥',smallerOrEqual:'≤',bigger:'>',smaller:'<'};
    const text=bounds.map(b=>symbols[b[1]]+' '+b[2]).join(', '),label=fields[key];
    return [loc(label[0]+' 조정 범위: '+text,label[1]+' range: '+text,label[2]+'の調整範囲：'+text)];
  }
  const general=editable(raw.globals).flatMap(key=>[parameter(raw.globals,key),...rangeFor(null,key)]);
  if(general.length)processes.push({title:'General settings',titleText:loc('일반 설정','General settings','一般設定'),descriptions:general});
  for(const j of raw.jobs.filter(j=>exposed(j)&&editable(j.p).length)) {
    const descriptions=[];
    if(j.p.tool){const t=toolFor(j);descriptions.push(loc('연결 공구: '+t.name,'Linked tool: '+t.name,'割り当て工具：'+t.name));}
    descriptions.push(calculateDefault(j.p.calculate),...editable(j.p).flatMap(key=>[parameter(j.p,key),...(key==='calculate'?[]:rangeFor(j,key))]));
    processes.push({title:j.p.jobname,descriptions,sourceJobId:j.id});
  }
  const uda=raw.jobs.filter(j=>/^uarea/.test(j.type)&&exposed(j)).map(j=>loc('유형 '+j.p.categories+': '+toolFor(j).name,'Category '+j.p.categories+': '+toolFor(j).name,'カテゴリー'+j.p.categories+'：'+toolFor(j).name));
  const groups=new Map();
  for(const j of raw.jobs.filter(j=>j.type==='impintwallfin')){const t=toolFor(j),p=j.p,key=[p.category,t.name,p.calculate].join('|');const g=groups.get(key)||{cat:p.category,tool:t.name,calc:p.calculate,sides:[]};if(!g.sides.includes(p.sideid))g.sides.push(p.sideid);groups.set(key,g);}
  const interfaces=[...groups.values()].map(g=>{const a=onoff(g.calc),side=(outer,inner)=>g.sides.map(s=>s==='outer'?outer:inner).join(' / ');return loc('유형 '+g.cat+': '+g.tool+' / '+side('외벽','내벽')+' (기본값: '+a[0]+')','Category '+g.cat+': '+g.tool+' / '+side('Outer wall','Inner wall')+' (Default: '+a[1]+')','カテゴリー'+g.cat+'：'+g.tool+' / '+side('外壁','内壁')+'（初期値：'+a[2]+'）');});
  const tools=raw.tools.filter(t=>t&&raw.jobs.some(j=>j.p.tool===t.id&&exposed(j))).sort((a,b)=>Number(a.number)-Number(b.number)).map(t=>{
    const jobs=raw.jobs.filter(j=>j.p.tool===t.id&&exposed(j));
    const optional=jobs.every(j=>j.p.calculate!=='1')||jobs.every(j=>['threadmach','screwch','impintwallfin','engraving'].includes(j.type));
    return {id:'T'+Number(t.number),name:t.name.replace(/^T\d+_/i,''),imageAvailable:fs.existsSync('assets/images/sec-mai-tools/tool-list/t'+String(Number(t.number)).padStart(2,'0')+'.webp'),optional,comments:optional?[loc('해당 공정의 선택 및 형상 조건에 따라 사용합니다.','Used according to the selected processes and geometry conditions.','選択した工程と形状条件に応じて使用します。')]:[]};
  });
  let record=prior || {title:raw.name,subtitle:raw.name.replace(/^[^_]+_/,''),material,type:memberships[0].type,family:memberships[0].family,partTypes:raw.partTypes,
    conditions:[loc(material+' 재료의 '+memberships.map(m=>m.type).join(' / ')+' 가공용 템플릿입니다.','Template for machining '+memberships.map(m=>m.type).join(' / ')+' in '+material+'.',material+'素材の'+memberships.map(m=>m.type).join(' / ')+'加工用テンプレートです。'),
      loc('기준 DB: 260830 원본 / 기본 전략: '+raw.baseName,'Source DB: 260830 original / Base strategy: '+raw.baseName.replace('매몰법','investment technique'),'基準DB：260830オリジナル / 基本ストラテジー：'+raw.baseName.replace('매몰법','埋没法')),
      loc('계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.','Enabled processes may still be skipped depending on geometry, category, or hole conditions.','計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。')],
    processes,uda,interfaces,tools,toolHints:{basic:loc('공정·형상 조건에 따라 사용','Used according to process and geometry conditions','工程・形状条件に応じて使用'),optional:loc('해당 조건에 따라 사용','Used when the corresponding conditions apply','該当条件に応じて使用')},images:[],sourceToolCount:tools.length,sourceRevision:'260830',sourceProfileId:raw.id};
  record = {...record, conditions: record.conditions.map(item => /^(기준 DB:|Source DB:|基準DB：)/.test(item.ko || item.en || item.ja || '') ? loc('기준 DB: 260830 원본','Source DB: 260830 original','基準DB：260830オリジナル') : item)};
  return {...record,sourceCatalog:'260830-original',catalogScope:null,filterMemberships:memberships,sourceMaterialId:raw.material,applicableMaterialIds:applicableMaterials};
});
// Preserve links whose spelling differs only in punctuation, spacing or 2nd/2st.
const legacyContext={window:{}};
for(const file of ['cocr','glass','hybrid','peek','pmma','batch'])require('vm').runInNewContext(fs.readFileSync('src/data/mai-'+file+'-templates.js','utf8'),legacyContext);
const normalize=name=>name.toLowerCase().replace(/2nd/g,'2st').replace(/º/g,'°').replace(/[^a-z0-9°]/g,'');
const aliases={};
for(const old of Object.values(legacyContext.window).flat()){
  if(records.some(r=>r.title===old.title))continue;
  const matches=records.filter(r=>r.material===old.material&&normalize(r.title)===normalize(old.title));
  if(matches.length===1)aliases[old.title]=matches[0].title;
}
fs.writeFileSync('src/data/mai-original-260830-templates.js','// Generated from hash-verified 260830 original. Run node tools/build-mai-original.js.\nwindow.MaiOriginal260830Templates = '+JSON.stringify(records,null,2)+';\nwindow.MaiOriginal260830Materials = '+JSON.stringify(source.materials)+';\nwindow.MaiOriginal260830Aliases = '+JSON.stringify(aliases,null,2)+';\n');
fs.writeFileSync('tools/mai-original-260830-index.json',JSON.stringify({source:source.source,checks:source.checks,screenVerification:'Deferred by explicit user request',coverage:source.coverage,materials:source.materials,disabledPartTypes:source.disabledPartTypes,userPartTypes:source.userPartTypes,records:records.map(r=>({title:r.title,material:r.material,sourceProfileId:r.sourceProfileId,memberships:r.filterMemberships,tools:r.tools.map(t=>t.id+'_'+t.name),adjustable:r.processes.map(p=>({title:p.title,sourceJobId:p.sourceJobId}))}))},null,2));
console.log('Built canonical templates:',records.reduce((a,r)=>(a[r.material]=(a[r.material]||0)+1,a),{}));
