const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto');
const source=require('./mf-selected-260830-source.json'),ctx={window:{}};
vm.runInNewContext(fs.readFileSync('src/data/mf-hybrid-260830-templates.js','utf8'),ctx);
const records=JSON.parse(JSON.stringify(ctx.window.MfHybrid260830Templates));
const rawRecords=source.records.filter(r=>r.materialGroup==='Hybrid Ceramic');
for(const f of source.checks.sourceFiles)assert.equal(crypto.createHash('sha256').update(fs.readFileSync(source.source+f.name)).digest('hex'),f.sha256);
assert(!/wood.*ruff/i.test(JSON.stringify(records)), 'Excluded Woodrruff content was published');
assert.equal(records.length,18);assert.equal(rawRecords.length,18);
const enabled=j=>j.p.calculate==='1'||j.p.calculate_ovwren==='1';
const editable=p=>Object.keys(p).filter(k=>k.endsWith('_ovwren')&&p[k]==='1').map(k=>k.slice(0,-7));
for(const original of rawRecords){
  const excludedTools=new Set(original.tools.filter(t=>/wood.*ruff/i.test(t?.name || '')).map(t=>t.id));
  const raw={...original,jobs:original.jobs.filter(j=>!excludedTools.has(j.p.tool))};
  const r=records.find(r=>r.sourceProfileId===raw.id);assert(r);assert.equal(r.title,raw.name);assert.equal(raw.unmatched.length,0);
  assert.deepEqual(r.partTypes,raw.partTypes);
  const tools=raw.tools.filter(t=>raw.jobs.some(j=>j.p.tool===t.id&&enabled(j))).map(t=>'T'+Number(t.number)+'_'+t.name.replace(/^T\d+_/i,'')).sort();
  assert.deepEqual(r.tools.map(t=>t.id+'_'+t.name).sort(),tools);
  const jobs=raw.jobs.filter(j=>enabled(j)&&editable(j.p).length);
  assert.deepEqual(r.processes.filter(p=>p.sourceJobId).map(p=>p.sourceJobId),jobs.map(j=>j.id));
  for(const j of jobs){const p=r.processes.find(p=>p.sourceJobId===j.id);assert(p.descriptions.some(v=>v.en==='Calculate default: '+(j.p.calculate==='1'?'On':'Off')));for(const field of editable(j.p).filter(f=>f!=='calculate'))assert(p.descriptions.some(v=>v.en.includes('Default: '+j.p[field])));}
  for(const field of editable(raw.globals))assert(r.processes[0].descriptions.some(v=>v.en.includes('Default: '+raw.globals[field])));
  assert.equal(r.uda.length,raw.jobs.filter(j=>/^uarea/.test(j.type)&&enabled(j)).length);
  function walk(v){if(v&&typeof v==='object'){if('ko'in v)for(const lang of ['ko','en','ja']){assert(v[lang]?.trim());if(lang!=='ko')assert(!/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(v[lang]));}Object.values(v).forEach(walk);}}walk(r);
}
for(const p of ['index.html','src/index.template.html'])assert(fs.readFileSync(p,'utf8').includes('src/scripts/local-entry.js'));
for(const p of ['사용자 매뉴얼.html','src/index.template.html']){const s=fs.readFileSync(p,'utf8');assert(s.includes('src/scripts/mf-hybrid-dbconfig.js'));assert(s.includes('MfHybridDbconfig?.render'));}
fs.writeFileSync('output/verification/mf-hybrid-260830/source-check.json',JSON.stringify({status:'passed',templates:18,sourceHashes:true,checked:'variant overrides, memberships, adjustable jobs and defaults, tools, UDA, languages and protected local entry'},null,2));
console.log('PASS: 18 MillFix Hybrid Ceramic templates match original.');
