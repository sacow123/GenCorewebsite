// MillFix Hybrid Ceramic records resolved from the read-only 260830_R1 original.
const fs = require('fs');
const source = require('./mf-selected-260830-source.json');
const materialScope=process.argv[2] || 'Hybrid Ceramic';
const targets={PEEK:{file:'mf-peek-260830-templates.js',global:'MfPeek260830Templates'},Wax:{file:'mf-wax-260830-templates.js',global:'MfWax260830Templates',group:'Soft materials'},Zirconia:{file:'mf-zirconia-260830-templates.js',global:'MfZirconia260830Templates',group:'Zirconia Group'},'Hybrid Ceramic':{file:'mf-hybrid-260830-templates.js',global:'MfHybrid260830Templates'},PMMA:{file:'mf-pmma-260830-templates.js',global:'MfPmma260830Templates'}};
if(!targets[materialScope])throw Error('Unsupported MillFix material');
const target=targets[materialScope];
const normalize=value=>value.toLowerCase().replace(/flexble/g,'flexible').replace(/2nd/g,'2st').replace(/[^a-z0-9]/g,'');
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
source.records=source.records.filter(r=>r.materialGroup===(target.group || materialScope) && (materialScope!=='Wax' || source.materials.find(m=>m.id===r.material)?.name==='Wax Disc'));
const preserved=[];
const records=source.records.slice().sort((a,b)=>order.indexOf(a.materialGroup)-order.indexOf(b.materialGroup)).map(original=>{
  // Permanent user exception: never publish MillFix jobs linked to Woodrruff tools.
  const excludedTools=new Set(original.tools.filter(t=>/wood.*ruff/i.test(t?.name || '')).map(t=>t.id));
  const raw={...original,jobs:original.jobs.filter(j=>!excludedTools.has(j.p.tool))};
  if(raw.unmatched.length)throw Error('Unmatched overrides: '+raw.name);
  const memberships=raw.partTypes.map(t=>{if(!types[t])throw Error('Unknown part type '+t);return {sourceType:t,type:types[t][0],family:types[t][1]};});
  const material=materialScope;
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
    const optional=jobs.every(j=>j.p.calculate!=='1'||['threadmach','screwch','impintwallfin','engraving','uarearm','uareafin'].includes(j.type));
    return {id:'T'+Number(t.number),name:t.name.replace(/^T\d+_/i,''),imageAvailable:false,optional,comments:optional?[loc('해당 공정의 선택 및 형상 조건에 따라 사용합니다.','Used according to the selected processes and geometry conditions.','選択した工程と形状条件に応じて使用します。')]:[]};
  });
  let record=prior || {title:raw.name,subtitle:raw.name.replace(/^[^_]+_/,''),material,type:memberships[0].type,family:memberships[0].family,partTypes:raw.partTypes,
    conditions:[loc(material+' 재료의 '+memberships.map(m=>m.type).join(' / ')+' 가공용 템플릿입니다.','Template for machining '+memberships.map(m=>m.type).join(' / ')+' in '+material+'.',material+'素材の'+memberships.map(m=>m.type).join(' / ')+'加工用テンプレートです。'),
      loc('기준 DB: 260830 원본 / 기본 전략: '+raw.baseName,'Source DB: 260830 original / Base strategy: '+raw.baseName.replace('매몰법','investment technique'),'基準DB：260830オリジナル / 基本ストラテジー：'+raw.baseName.replace('매몰법','埋没法')),
      loc('계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.','Enabled processes may still be skipped depending on geometry, category, or hole conditions.','計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。')],
    processes,uda,interfaces,tools,toolHints:{basic:loc('공정·형상 조건에 따라 사용','Used according to process and geometry conditions','工程・形状条件に応じて使用'),optional:loc('해당 조건에 따라 사용','Used when the corresponding conditions apply','該当条件に応じて使用')},images:[],sourceToolCount:tools.length,sourceRevision:'260830',sourceProfileId:raw.id};
  record = {...record, conditions: record.conditions.map(item => /^(기준 DB:|Source DB:|基準DB：)/.test(item.ko || item.en || item.ja || '') ? loc('기준 DB: 260830 원본','Source DB: 260830 original','基準DB：260830オリジナル') : item)};
  return {...record,sourceCatalog:'260830-original',catalogScope:null,filterMemberships:memberships,sourceMaterialId:raw.material,applicableMaterialIds:applicableMaterials};
});

// Preserve existing usage/preparation guidance, while DB-derived processes replace the old descriptions.
const manuals = {};
for (const lang of ['ko','en','ja']) {
  const ctx = {};
  require('vm').runInNewContext(fs.readFileSync('src/data/dbconfig-data-'+lang+'.js','utf8')+'\nthis.data=dbConfigData'+lang.toUpperCase(),ctx);
  manuals[lang]=ctx.data;
}
const headings={ko:['템플릿을 사용하기 위한 조건','조정 가능한 항목들'],en:['The conditions for selecting','Overwritable processes'],ja:['この戦略（テンプレート）を選択するための条件','上書き可能なプロセス']};
for(const record of records){
  const note={};
  for(const lang of ['ko','en','ja']){
    const title=Object.keys(manuals[lang]).find(t=>normalize(t)===normalize(record.title));
    if(!title)continue;
    const lines=manuals[lang][title].split('\n').map(s=>s.trim()).filter(Boolean);
    const start=lines.findIndex(l=>l.startsWith(headings[lang][0]) || (lang==='ja' && l==='選択の条件は'));
    const boundary=/^(Overwritable processes|Tools used|Tools list used|User-defined area|General settings|조정 가능한 항목들|해당 템플릿에서 사용되는 공구 목록|사용자 정의 영역|일반 설정|上書き可能なプロセス|使用した工具一覧|ユーザー定義領域|一般設定)/;
    const end=lines.findIndex((l,i)=>i>start && boundary.test(l));
    if(start<0||end<=start)throw Error('Missing usage guidance: '+title+' '+lang);
    note[lang]=lines.slice(start+1,end).filter(l=>! /^(Part|Materials:|보철물 유형:|소재:|パーツ|部品|材質:)/.test(l)).join('\n');
  }
  if(note.ko==='별도의 필수 마진 설정은 없습니다.') {
    note.en ||= 'No mandatory margin-line setting is required.';
    note.ja ||= '必須のマージンライン設定はありません。';
  }
  if(Object.keys(note).length){if(Object.keys(note).length!==3)throw Error('Missing translated guidance');record.conditions.push(note);}
}
fs.writeFileSync('src/data/'+target.file,'// Generated from MillFix 260830_R1 original.\nwindow.'+target.global+' = '+JSON.stringify(records,null,2)+';\n');
console.log('Built MillFix '+materialScope+':', records.length);
