const fs=require('fs'),crypto=require('crypto');
const source=JSON.parse(fs.readFileSync('tmp/pdfs/ti-bridge/data.json','utf8'));
for(const f of source.checks.sourceFiles){if(crypto.createHash('sha256').update(fs.readFileSync(source.source+f.name)).digest('hex')!==f.sha256)throw Error('DB changed: '+f.name);}
const raw=source.records.find(r=>r.name==='Ti_Abutment bridge_EXT/INT (Fast)');
if(!raw.partTypes.includes('abutment_bridge')||raw.unmatched.length)throw Error('Invalid profile');
const loc=(ko,en,ja)=>({ko,en,ja});
const state=(v)=>v==='1'?['켜짐','On','ON']:['꺼짐','Off','OFF'];
const tool=j=>raw.tools.find(t=>t.id===j.p.tool);
const calc=v=>{const s=state(v);return loc(`계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: ${s[0]})`,`Calculate: Choose whether to run this process. (Default: ${s[1]})`,`計算：この工程を実行するか選択できます。（初期値：${s[2]}）`)};
const processes=[{title:'General settings',titleText:loc('일반 설정','General settings','一般設定'),descriptions:[
 loc(`증분식 경계 옵셋: 가공 경계의 추가 옵셋을 조정할 수 있습니다. (기본값: ${raw.globals.millincoffset})`,`Incremental boundary offset: Adjusts the additional milling boundary offset. (Default: ${raw.globals.millincoffset})`,`増分境界オフセット：加工境界の追加オフセットを調整できます。（初期値：${raw.globals.millincoffset}）`),
 loc(`증분식 경계 각도: 가공 경계의 추가 각도를 조정할 수 있습니다. (기본값: ${raw.globals.milloffset_incangle})`,`Incremental boundary angle: Adjusts the additional milling boundary angle. (Default: ${raw.globals.milloffset_incangle})`,`増分境界角度：加工境界の追加角度を調整できます。（初期値：${raw.globals.milloffset_incangle}）`)
]}];
for(const j of raw.jobs){
 const p=j.p,fields=Object.keys(p).filter(k=>k.endsWith('_ovwren')&&p[k]==='1').map(k=>k.slice(0,-7));if(!fields.length)continue;
 const t=tool(j),d=t.diameter;let desc;
 if(j.type==='abutbaseedgefin')desc=loc(`직경 ${d}mm 공구로 어버트먼트 외측을 정삭합니다.`,`Finishes the outside of the abutment with a ${d} mm diameter tool.`,`直径${d}mmの工具でアバットメント外側を仕上げます。`);
 else if(j.type==='abutbaseinnerfin')desc=loc(`직경 ${d}mm 공구로 어버트먼트 베이스 내부를 정삭합니다.`,`Finishes the inside of the abutment base with a ${d} mm diameter tool.`,`直径${d}mmの工具でアバットメントベース内部を仕上げます。`);
 else if(j.type==='abutbasermat')desc=loc(`직경 ${d}mm 공구로 어버트먼트 베이스 내부의 잔여 영역을 가공합니다.`,`Machines remaining material inside the abutment base with a ${d} mm diameter tool.`,`直径${d}mmの工具でアバットメントベース内部の削り残しを加工します。`);
 else desc=loc(`직경 ${d}mm 공구로 교합면의 피셔 영역을 가공합니다.`,`Machines occlusal fissures with a ${d} mm diameter tool.`,`直径${d}mmの工具で咬合面の裂溝を加工します。`);
 const descriptions=[desc];
 for(const f of fields){
  if(f==='calculate')descriptions.push(calc(p.calculate));
  else if(f==='allowance')descriptions.push(loc(`여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다. (기본값: ${p[f]})`,`Allowance: Adjusts the fit inside the abutment base. (Default: ${p[f]})`,`余裕量：アバットメントベース内部の適合を調整できます。（初期値：${p[f]}）`));
  else if(f==='addallowancexy')descriptions.push(loc(`XY 여유량: 어버트먼트 베이스 내부의 XY 방향 적합을 조정할 수 있습니다. (기본값: ${p[f]})`,`XY allowance: Adjusts the fit inside the abutment base in the XY directions. (Default: ${p[f]})`,`XY余裕量：アバットメントベース内部のXY方向の適合を調整できます。（初期値：${p[f]}）`));
  else throw Error('Untranslated parameter '+f);
 }
 if(p.condcalcgeo==='geonex')descriptions.push(loc('형상 조건: 지정된 인터페이스 형상이 없는 경우에 적용됩니다.','Geometry condition: Applies when the specified interface geometry is absent.','形状条件：指定されたインターフェース形状がない場合に適用されます。'));
 if(/M0\.6Bx(?:06|10)/.test(p.jobname))descriptions.push(loc(`실제 연결 공구: ${t.name}`,`Linked tool: ${t.name}`,`実際の割り当て工具：${t.name}`));
 processes.push({title:p.jobname,descriptions});
}
const uda=raw.jobs.filter(j=>/uarea/.test(j.type)).map(j=>{
 const p=j.p,t=tool(j),s=state(p.calculate),clip=p.jobname.includes('Clip')?' / Clip':'',angle=p.jobname.includes('90deg')?' / 90deg':'';
 const stage=j.type==='uarearm'?['잔여 가공','Restmachining','削り残し加工']:['정삭','Finishing','仕上げ'];
 if(p.jobname.includes('Bar Retention'))stage.splice(0,3,'Bar Retention 홈 가공','Bar retention groove machining','バー保持溝加工');
 return loc(`유형 ${p.categories}: ${t.name} / ${stage[0]}${clip}${angle} (기본값: ${s[0]})`,`Category ${p.categories}: ${t.name} / ${stage[1]}${clip}${angle} (Default: ${s[1]})`,`カテゴリー${p.categories}：${t.name} / ${stage[2]}${clip}${angle}（初期値：${s[2]}）`);
});
const groups=new Map();
for(const j of raw.jobs.filter(j=>j.type==='impintwallfin')){const p=j.p,t=tool(j),key=[p.category,t.name,p.calculate].join('|'),g=groups.get(key)||{cat:p.category,name:t.name,calculate:p.calculate,sides:[]};if(!g.sides.includes(p.sideid))g.sides.push(p.sideid);groups.set(key,g);}
const interfaces=[...groups.values()].map(g=>{const s=state(g.calculate);const sides=[g.sides.map(v=>v==='outer'?'외벽':'내벽').join('·'),g.sides.map(v=>v==='outer'?'Outer wall':'Inner wall').join(' / '),g.sides.map(v=>v==='outer'?'外壁':'内壁').join('・')];return loc(`유형 ${g.cat}: ${g.name} / ${sides[0]} (기본값: ${s[0]})`,`Category ${g.cat}: ${g.name} / ${sides[1]} (Default: ${s[1]})`,`カテゴリー${g.cat}：${g.name} / ${sides[2]}（初期値：${s[2]}）`)});
const tools=raw.tools.filter(t=>raw.jobs.some(j=>j.p.tool===t.id&&(j.p.calculate==='1'||j.p.calculate_ovwren==='1'))).sort((a,b)=>Number(a.number)-Number(b.number)).map(t=>{
 const n=Number(t.number),comments=[],optional=n===1||n>=23;
 if(n===1)comments.push(loc('해당 스크류 채널 공정에 연결된 공구입니다.','Linked to the corresponding screw channel processes.','該当するスクリューチャンネル工程に割り当てられた工具です。'));
 else if(n>=25)comments.push(loc('해당 나사산 조건에 따라 사용합니다.','Used when the corresponding thread condition applies.','該当するねじ条件に応じて使用します。'));
 else if(n===23)comments.push(loc('앵글드 스크류 채널의 T-cut 공정에서 사용합니다.','Used in T-cut processes for angled screw channels.','アングルドスクリューチャンネルのT-cut工程で使用します。'));
 else if(n===24)comments.push(loc('T-cut 공정 또는 유형 10의 Bar Retention 홈 가공에 사용합니다.','Used for T-cut processes or category 10 bar retention grooves.','T-cut工程またはカテゴリー10のバー保持溝加工で使用します。'));
 return {id:'T'+n,name:t.name.slice(t.name.indexOf('_')+1),optional,comments};
});
const record={title:'Ti_Abutment bridge_EXT/INT (Fast mode)',subtitle:'Abutment bridge_EXT/INT (Fast mode)',source:'hdNPmillstrategy.hddb + hdNPmillstrategyvariantprofile.hddb + hdTool.hddb',material:'Ti',type:'Abutment bridge',family:'Abutment',conditions:[
 loc('Ti 디스크에서 어버트먼트 브릿지를 가공하는 Fast 템플릿입니다.','Fast template for milling abutment bridges from Ti discs.','Tiディスクからアバットメントブリッジを加工するFastテンプレートです。'),
 loc('파트 타입: Abutment bridge','Part type: Abutment bridge','パーツタイプ：Abutment bridge'),
 loc('기준 DB: 260830 / 기본 전략: MAI_Ti_Abutment Crown bridge_(Fast)-260825','Source DB: 260830 / Base strategy: MAI_Ti_Abutment Crown bridge_(Fast)-260825','基準DB：260830 / 基本ストラテジー：MAI_Ti_Abutment Crown bridge_(Fast)-260825'),
 loc('계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.','Enabled processes may still be skipped depending on geometry, category, or hole conditions.','計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。')
],processes,uda,interfaces,tools,toolHints:{basic:loc('공정·형상 조건에 따라 사용','Used according to process and geometry conditions','工程・形状条件に応じて使用'),optional:loc('해당 조건에 따라 사용','Used when the corresponding conditions apply','該当条件に応じて使用')},images:[],sourceToolCount:tools.length,sourceRevision:'260830'};
const evidence={variantId:raw.id,partTypes:raw.partTypes,baseProfile:raw.baseName,sourceFiles:source.checks.sourceFiles,sourceJobCount:raw.jobs.length,appliedOverrides:raw.applied,adjustableJobs:raw.jobs.filter(j=>Object.keys(j.p).some(k=>k.endsWith('_ovwren')&&j.p[k]==='1')).map(j=>({id:j.id,name:j.p.jobname,calculate:j.p.calculate,allowance:j.p.allowance,xy:j.p.addallowancexy,tool:tool(j).name,fields:Object.keys(j.p).filter(k=>k.endsWith('_ovwren')&&j.p[k]==='1')})),udaJobCount:uda.length,interfaceJobCount:raw.jobs.filter(j=>j.type==='impintwallfin').length};
fs.writeFileSync('tools/mai-ti-fast-260830.json',JSON.stringify({record,evidence},null,2)+'\n');
console.log(JSON.stringify({processes:processes.length,uda:uda.length,interfaces:interfaces.length,tools:tools.length}));
