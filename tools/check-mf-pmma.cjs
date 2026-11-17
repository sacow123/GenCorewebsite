const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto');
const source=require('./mf-selected-260830-source.json'),ctx={window:{}};
vm.runInNewContext(fs.readFileSync('src/data/mf-pmma-260830-templates.js','utf8'),ctx);
const records=JSON.parse(JSON.stringify(ctx.window.MfPmma260830Templates));
const rawRecords=source.records.filter(r=>r.materialGroup==='PMMA');
for(const f of source.checks.sourceFiles)assert.equal(crypto.createHash('sha256').update(fs.readFileSync(source.source+f.name)).digest('hex'),f.sha256);
assert(!/wood.*ruff/i.test(JSON.stringify(records)), 'Excluded Woodrruff content was published');
assert.equal(records.length,17);assert.equal(rawRecords.length,17);
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
// Every published PMMA tool card must retain a real image after renderer changes.
ctx.document={createElement:()=>({}),head:{append:()=>{}}};
ctx.window.addEventListener=()=>{};
ctx.window.GenCoreMaterialTemplateCard={styles:()=>''};
vm.runInNewContext(fs.readFileSync('src/scripts/mf-hybrid-dbconfig.js','utf8'),ctx);
for(const record of records){
  const html=ctx.window.MfHybridDbconfig.render(record.title,'ko').html;
  const images=[...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(images.length,record.tools.length,'Missing tool photo: '+record.title);
  for(const image of images)assert(fs.existsSync(image),'Missing photo file: '+image);
}
const cp=require('child_process');
const page='사용자 매뉴얼.html';
const after=fs.readFileSync(page,'utf8');
const baseline=require('../output/verification/mf-pmma-260830/baseline.json');
const section=after.match(/<section id="sec-mf-hd-dbconfig"[\s\S]*?<\/section>/)[0];
assert.equal(section.split('<!-- PMMA -->')[0].replace(/\r\n/g,'\n'),baseline.otherMaterialSection.split('<!-- PMMA EXCLUDED -->')[0]);
assert.equal(crypto.createHash('sha256').update(fs.readFileSync('src/data/mf-hybrid-260830-templates.js')).digest('hex'),baseline.hybridHash,'Hybrid Ceramic changed');
const titles=[...section.match(/<!-- PMMA -->[\s\S]*?<!-- PEEK -->/)[0].matchAll(/<li>([^<]+)<\/li>/g)].map(m=>m[1]);
assert.deepEqual(titles,records.map(r=>r.title));
for(const p of ['index.html','src/index.template.html'])assert(fs.readFileSync(p,'utf8').includes('src/scripts/local-entry.js'));
for(const p of [page,'src/index.template.html']){const s=fs.readFileSync(p,'utf8');assert(s.includes('src/scripts/mf-hybrid-dbconfig.js') && s.includes('src/data/mf-pmma-260830-templates.js'));assert(s.includes('MfHybridDbconfig?.render'));}
fs.writeFileSync('output/verification/mf-pmma-260830/source-check.json',JSON.stringify({status:'passed',templates:17,sourceHashes:true,otherMaterialsUnchanged:true,checked:'variant overrides, memberships, adjustable jobs and defaults, tools, UDA, languages and protected local entry'},null,2));
console.log('PASS: 17 MillFix PMMA templates match original; other materials unchanged.');
