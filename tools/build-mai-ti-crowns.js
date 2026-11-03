// Effective strategy + variant overrides extracted from the hash-verified 260830 original.
const source = require('./mai-ti-crowns-r1-source.json');
const loc = (ko, en, ja) => ({ko, en, ja});
const state = value => value === '1' ? ['켜짐', 'On', 'ON'] : ['꺼짐', 'Off', 'OFF'];
const defaults = value => {
  const s = state(value);
  return loc(`계산 기본값: ${s[0]}`, `Calculate default: ${s[1]}`, `計算の初期値：${s[2]}`);
};
module.exports = source.records.map(raw => {
  if (raw.unmatched.length) throw Error('Invalid Abutment source');
  const tool = job => {
    const t = raw.tools.find(t => t.id === job.p.tool);
    if (!t) throw Error('Missing tool: ' + job.p.jobname);
    return t;
  };
  const conditions = [
    loc('Ti 디스크에서 어버트먼트를 가공하는 템플릿입니다.', 'Template for milling abutments from Ti discs.', 'Tiディスクからアバットメントを加工するテンプレートです。'),
    loc('파트 타입: Abutment', 'Part type: Abutment', 'パーツタイプ：Abutment'),
    loc(`기준 DB: 260830 / 기본 전략: ${raw.baseName}`, `Source DB: 260830 / Base strategy: ${raw.baseName}`, `基準DB：260830 / 基本ストラテジー：${raw.baseName}`),
    loc('계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.', 'Enabled processes may still be skipped depending on geometry, category, or hole conditions.', '計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。')
  ];
  conditions[2] = loc(`기준 DB: DB_M.Ai_V10.1.X_260830_R1 / 기본 전략: ${raw.baseName}`, `Source DB: DB_M.Ai_V10.1.X_260830_R1 / Base strategy: ${raw.baseName}`, `基準DB：DB_M.Ai_V10.1.X_260830_R1 / 基本ストラテジー：${raw.baseName}`);
  if (raw.name === 'Ti_Connector_cut') conditions[0] = loc('Ti 디스크의 커넥터 가공용 템플릿입니다.', 'Template for machining connectors in Ti discs.', 'Tiディスクのコネクター加工用テンプレートです。');
  if (raw.name === 'Interface_Test') {
    conditions[0] = loc('Ti 재료의 Abutment 보철물에 연결된 인터페이스 테스트 템플릿입니다.', 'Interface test template assigned to Ti material and Abutment prostheses.', 'Ti素材のAbutment補綴物に割り当てられたインターフェーステスト用テンプレートです。');
    conditions[2] = loc('출처: DB_M.Ai_V10.1.X_260830_R1 / Interface_Test', 'Source: DB_M.Ai_V10.1.X_260830_R1 / Interface_Test', '出典：DB_M.Ai_V10.1.X_260830_R1 / Interface_Test');
  }
  conditions[0] = loc('Ti 디스크용 '+raw.name+' 템플릿입니다.', 'Ti disc template: '+raw.name+'.', 'Tiディスク用テンプレート：'+raw.name+'。');
  conditions[1] = loc('적용 보철물: '+raw.partTypes.map(t=>t==='abutmentcrown_single'?'Abutment Crown':'Abutment Crown Bridge').join(' / '), 'Applicable prostheses: '+raw.partTypes.map(t=>t==='abutmentcrown_single'?'Abutment Crown':'Abutment Crown Bridge').join(' / '), '適用補綴物：'+raw.partTypes.map(t=>t==='abutmentcrown_single'?'Abutment Crown':'Abutment Crown Bridge').join(' / '));
  if (raw.name.includes('Conlog')) conditions.splice(1, 0, loc('Conlog 시스템용 어버트먼트 템플릿입니다.', 'Abutment template for the Conlog system.', 'Conlogシステム用のアバットメントテンプレートです。'));
  if (raw.name.includes('Angled-MUA')) conditions.splice(1, 0, loc('Angled-MUA (Tap+F1.5)용 템플릿입니다. M1.5F 공구의 앵글 교합면 정삭 공정이 켜져 있습니다.', 'Template for Angled-MUA (Tap+F1.5). Angled occlusal finishing with the M1.5F tool is enabled.', 'Angled-MUA (Tap+F1.5)用テンプレートです。M1.5F工具による傾斜咬合面の仕上げ工程がONです。'));
  const processes = [{title:'General settings', titleText:loc('일반 설정','General settings','一般設定'), descriptions:[
    loc(`증분식 경계 옵셋: 가공 경계의 추가 옵셋을 조정할 수 있습니다. (기본값: ${raw.globals.millincoffset})`, `Incremental boundary offset: Adjusts the additional milling boundary offset. (Default: ${raw.globals.millincoffset})`, `増分境界オフセット：加工境界の追加オフセットを調整できます。（初期値：${raw.globals.millincoffset}）`),
    loc(`증분식 경계 각도: 가공 경계의 추가 각도를 조정할 수 있습니다. (기본값: ${raw.globals.milloffset_incangle})`, `Incremental boundary angle: Adjusts the additional milling boundary angle. (Default: ${raw.globals.milloffset_incangle})`, `増分境界角度：加工境界の追加角度を調整できます。（初期値：${raw.globals.milloffset_incangle}）`)
  ]}];
  for (const job of raw.jobs) {
    const p = job.p;
    const fields = Object.keys(p).filter(k => k.endsWith('_ovwren') && p[k] === '1').map(k => k.slice(0,-7));
    if (!fields.length || (p.calculate !== '1' && !fields.includes('calculate'))) continue;
    // hyperDENT exposes disabled jobs only when Calculate itself is overwritable.
    // Variant overrides alone do not make a job an adjustable UI item.
    if (/^Ti_Abutment/i.test(raw.name) && (!fields.length || (p.calculate !== '1' && !fields.includes('calculate')))) continue;
    if (raw.name === 'Interface_Test' && p.calculate === '0' && !fields.includes('calculate')) continue;
    // Also show fixed variant differences, without implying that they are editable.
    if (!fields.length && raw.name !== 'Ti_Connector_cut' && !raw.overrides.some(o => o.key === job.id + '##calculate')) continue;
    const t = tool(job), descriptions = [loc(`연결 공구: ${t.name}`, `Linked tool: ${t.name}`, `割り当て工具：${t.name}`)];
    if (job.type === 'capcavouterfin') descriptions.unshift(loc(`직경 ${t.diameter}mm 공구로 캐비티 측 외측 영역을 정삭합니다.`, `Finishes the outer cavity-side areas with a ${t.diameter} mm diameter tool.`, `直径${t.diameter}mmの工具でキャビティ側の外側領域を仕上げます。`));
    if (job.type === 'occallrmat') descriptions.unshift(loc(`직경 ${t.diameter}mm 공구로 교합면의 피셔 영역을 가공합니다.`, `Machines occlusal fissures with a ${t.diameter} mm diameter tool.`, `直径${t.diameter}mmの工具で咬合面の裂溝を加工します。`));
    descriptions.push(defaults(p.calculate));
    for (const f of fields) {
      if (f === 'calculate') descriptions.push(loc('계산: 이 공정의 실행 여부를 선택할 수 있습니다.', 'Calculate: Choose whether to run this process.', '計算：この工程を実行するか選択できます。'));
      else if (f === 'stepdown') descriptions.push(loc(`스텝다운: 깊이 방향 가공 간격을 조정할 수 있습니다. (기본값: ${p[f]})`, `Stepdown: Adjusts the machining interval in the depth direction. (Default: ${p[f]})`, `ステップダウン：深さ方向の加工間隔を調整できます。（初期値：${p[f]}）`));
      else if (['allowance','addallowancexy','addrad'].includes(f)) { const labels={allowance:['여유량','Allowance','余裕量'],addallowancexy:['XY 여유량','XY allowance','XY余裕量'],addrad:['추가 반경','Additional radius','追加半径']}[f]; descriptions.push(loc(labels[0]+': '+p[f]+' (기본값)',labels[1]+': '+p[f]+' (Default)',labels[2]+'：'+p[f]+'（初期値）')); } else throw Error('Untranslated parameter: ' + f);
    }
    processes.push({title:p.jobname, descriptions, sourceJobId:job.id});
  }
  const uda = raw.jobs.filter(j => /^uarea/.test(j.type)).map(job => {
    const p=job.p, t=tool(job), s=state(p.calculate);
    const stage=job.type==='uarearm'?['잔여 가공','Restmachining','削り残し加工']:['정삭','Finishing','仕上げ'];
    const suffix=(p.jobname.includes('Clip')?' / Clip':'')+(p.jobname.includes('90deg')?' / 90deg':'');
    return loc(`유형 ${p.categories}: ${t.name} / ${stage[0]}${suffix} (기본값: ${s[0]})`, `Category ${p.categories}: ${t.name} / ${stage[1]}${suffix} (Default: ${s[1]})`, `カテゴリー${p.categories}：${t.name} / ${stage[2]}${suffix}（初期値：${s[2]}）`);
  });
  const groups=new Map();
  for (const job of raw.jobs.filter(j=>j.type==='impintwallfin')) {
    const p=job.p, t=tool(job), key=[p.category,t.name,p.calculate].join('|');
    const group=groups.get(key)||{category:p.category, name:t.name, calculate:p.calculate, sides:[]};
    if(!group.sides.includes(p.sideid)) group.sides.push(p.sideid);
    groups.set(key,group);
  }
  const interfaces=[...groups.values()].map(g=>{
    const s=state(g.calculate), sides=[g.sides.map(v=>v==='outer'?'외벽':'내벽').join('·'),g.sides.map(v=>v==='outer'?'Outer wall':'Inner wall').join(' / '),g.sides.map(v=>v==='outer'?'外壁':'内壁').join('・')];
    return loc(`유형 ${g.category}: ${g.name} / ${sides[0]} (기본값: ${s[0]})`, `Category ${g.category}: ${g.name} / ${sides[1]} (Default: ${s[1]})`, `カテゴリー${g.category}：${g.name} / ${sides[2]}（初期値：${s[2]}）`);
  });
  const tools=raw.tools.filter(t=>raw.jobs.some(j=>j.p.tool===t.id&&(j.p.calculate==='1'||j.p.calculate_ovwren==='1'))).sort((a,b)=>Number(a.number)-Number(b.number)).map(t=>{
    const n=Number(t.number), optional=n>=23, comments=[];
    if(n>=25) comments.push(loc('해당 나사산 조건에 따라 사용합니다.', 'Used when the corresponding thread condition applies.', '該当するねじ条件に応じて使用します。'));
    else if(optional) comments.push(loc('앵글드 스크류 채널의 T-cut 공정에서 사용합니다.', 'Used in T-cut processes for angled screw channels.', 'アングルドスクリューチャンネルのT-cut工程で使用します。'));
    return {id:'T'+n, name:t.name.slice(t.name.indexOf('_')+1), optional, comments};
  });
  return {title:raw.name, subtitle:raw.name.slice(3), source:'hdNPmillstrategy.hddb + hdNPmillstrategyvariantprofile.hddb + hdTool.hddb', material:'Ti', type:raw.partTypes.includes('abutmentcrown_single')?'Abutment Crown':'Abutment Crown Bridge', family:'Abutment', partTypes:raw.partTypes, conditions, processes, uda, interfaces, tools, toolHints:{basic:loc('공정·형상 조건에 따라 사용','Used according to process and geometry conditions','工程・形状条件に応じて使用'), optional:loc('해당 조건에 따라 사용','Used when the corresponding conditions apply','該当条件に応じて使用')}, images:[], sourceToolCount:tools.length, sourceRevision:'260830', sourceProfileId:raw.id};
});
