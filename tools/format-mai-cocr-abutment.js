// Shared card formatter for original CoCr abutment crown/bridge records.
const loc = (ko, en, ja) => ({ko, en, ja});
const state = value => value === '1' ? ['켜짐', 'On', 'ON'] : ['꺼짐', 'Off', 'OFF'];
const defaults = value => {
  const s = state(value);
  return loc(`계산 기본값: ${s[0]}`, `Calculate default: ${s[1]}`, `計算の初期値：${s[2]}`);
};
module.exports = (source, partType) => source.records.map(raw => {
  const bridge = partType === "Abutment Crown Bridge";
  if (raw.unmatched.length) throw Error('Invalid Abutment source');
  const tool = job => {
    const t = raw.tools.find(t => t.id === job.p.tool);
    if (!t) throw Error('Missing tool: ' + job.p.jobname);
    return t;
  };
  const conditions = [
    bridge ? loc('Co.Cr. 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.', 'Template for milling abutment crown bridges from Co.Cr. discs.', 'Co.Cr.ディスクでアバットメントクラウンブリッジを加工するテンプレートです。') : loc('Co.Cr. 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.', 'Template for milling abutment crowns from Co.Cr. discs.', 'Co.Cr.ディスクでアバットメントクラウンを加工するテンプレートです。'),
    loc('적용 보철물: '+partType, 'Applicable prosthesis: '+partType, '適用補綴物：'+partType),
    loc('기준 DB: 260830 원본 / 기본 전략: '+raw.baseName, 'Source DB: 260830 original / Base strategy: '+raw.baseName, '基準DB：260830オリジナル / 基本ストラテジー：'+raw.baseName),
    loc('계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.', 'Enabled processes may still be skipped depending on geometry, category, or hole conditions.', '計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。')
  ];
  if(raw.name.includes('highnees')) conditions.splice(1,0,loc('Highness 시스템의 어버트먼트 인터페이스용입니다.', 'For abutment interfaces of the Highness system.', 'Highnessシステムのアバットメントインターフェース用です。'));
  if(raw.name.includes('M-Fix')) conditions.splice(1,0,loc('M-Fix 시스템의 어버트먼트 인터페이스용입니다.', 'For abutment interfaces of the M-Fix system.', 'M-Fixシステムのアバットメントインターフェース用です。'));
  const processes = [{title:'General settings', titleText:loc('일반 설정','General settings','一般設定'), descriptions:[
    loc(`증분식 경계 옵셋: 가공 경계의 추가 옵셋을 조정할 수 있습니다. (기본값: ${raw.globals.millincoffset})`, `Incremental boundary offset: Adjusts the additional milling boundary offset. (Default: ${raw.globals.millincoffset})`, `増分境界オフセット：加工境界の追加オフセットを調整できます。（初期値：${raw.globals.millincoffset}）`),
    loc(`증분식 경계 각도: 가공 경계의 추가 각도를 조정할 수 있습니다. (기본값: ${raw.globals.milloffset_incangle})`, `Incremental boundary angle: Adjusts the additional milling boundary angle. (Default: ${raw.globals.milloffset_incangle})`, `増分境界角度：加工境界の追加角度を調整できます。（初期値：${raw.globals.milloffset_incangle}）`)
  ]}];
  for (const job of raw.jobs) {
    const p = job.p;
    const fields = Object.keys(p).filter(k => k.endsWith('_ovwren') && p[k] === '1').map(k => k.slice(0,-7));
    if (!fields.length || (p.calculate !== '1' && !fields.includes('calculate'))) continue;
    // A disabled job is shown only when Calculate can be changed.
    const t = tool(job), descriptions = [loc(`연결 공구: ${t.name}`, `Linked tool: ${t.name}`, `割り当て工具：${t.name}`)];
    if (job.type === 'capcavouterfin') descriptions.unshift(loc(`직경 ${t.diameter}mm 공구로 캐비티 측 외측 영역을 정삭합니다.`, `Finishes the outer cavity-side areas with a ${t.diameter} mm diameter tool.`, `直径${t.diameter}mmの工具でキャビティ側の外側領域を仕上げます。`));
    if (job.type === 'occallrmat') descriptions.unshift(loc(`직경 ${t.diameter}mm 공구로 교합면의 피셔 영역을 가공합니다.`, `Machines occlusal fissures with a ${t.diameter} mm diameter tool.`, `直径${t.diameter}mmの工具で咬合面の裂溝を加工します。`));
    descriptions.push(defaults(p.calculate));
    for (const f of fields) {
      if (f === 'calculate') descriptions.push(loc('계산: 이 공정의 실행 여부를 선택할 수 있습니다.', 'Calculate: Choose whether to run this process.', '計算：この工程を実行するか選択できます。'));
      else if (f === 'stepdown') descriptions.push(loc(`스텝다운: 깊이 방향 가공 간격을 조정할 수 있습니다. (기본값: ${p[f]})`, `Stepdown: Adjusts the machining interval in the depth direction. (Default: ${p[f]})`, `ステップダウン：深さ方向の加工間隔を調整できます。（初期値：${p[f]}）`));
      else if (['allowance','addallowancexy','addrad'].includes(f)) { const labels={allowance:['여유량','Allowance','余裕量'],addallowancexy:['XY 여유량','XY allowance','XY余裕量'],addrad:['추가 반경','Additional radius','追加半径']}[f]; descriptions.push(loc(labels[0]+': 조정 가능 (기본값: '+p[f]+')',labels[1]+': Adjustable (Default: '+p[f]+')',labels[2]+'：調整可能（初期値：'+p[f]+'）')); } else throw Error('Untranslated parameter: ' + f);
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
    else if(n===24) comments.push(loc('앵글드 스크류 채널의 T-cut 및 인터페이스 유형 30 공정에서 사용합니다.', 'Used in T-cut processes for angled screw channels and interface category 30 processes.', 'アングルドスクリューチャンネルのT-cutおよびインターフェースカテゴリー30の工程で使用します。'));
    else if(optional) comments.push(loc('앵글드 스크류 채널의 T-cut 공정에서 사용합니다.', 'Used in T-cut processes for angled screw channels.', 'アングルドスクリューチャンネルのT-cut工程で使用します。'));
    return {id:'T'+n, name:t.name.slice(t.name.indexOf('_')+1), optional, comments};
  });
  return {title:raw.name, subtitle:raw.name.slice(5), source:'hdNPmillstrategy.hddb + hdNPmillstrategyvariantprofile.hddb + hdTool.hddb', material:'CoCr', type:partType, family:'Abutment', partTypes:raw.partTypes, conditions, processes, uda, interfaces, tools, toolHints:{basic:loc('공정·형상 조건에 따라 사용','Used according to process and geometry conditions','工程・形状条件に応じて使用'), optional:loc('해당 조건에 따라 사용','Used when the corresponding conditions apply','該当条件に応じて使用')}, images:[], sourceToolCount:tools.length, sourceRevision:'260830', sourceProfileId:raw.id};
});
