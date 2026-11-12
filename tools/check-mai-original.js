// Source/schema checks only. Does not substitute for tomorrow's browser review.
const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto');
const source=require('./mai-selected-260830-source.json');
const c={window:{}};vm.runInNewContext(fs.readFileSync('src/data/mai-original-260830-templates.js','utf8'),c);
const records=JSON.parse(JSON.stringify(c.window.MaiOriginal260830Templates));
const exposed=j=>j.p.calculate==='1'||j.p.calculate_ovwren==='1';
const editable=p=>Object.keys(p).filter(k=>k.endsWith('_ovwren')&&p[k]==='1').map(k=>k.slice(0,-7));
for(const f of source.checks.sourceFiles)assert.equal(crypto.createHash('sha256').update(fs.readFileSync(source.source+f.name)).digest('hex'),f.sha256,'Changed original: '+f.name);
assert.equal(records.length,source.records.length);
assert.equal(new Set(records.map(r=>r.title)).size,records.length,'Duplicate article titles');
assert.equal(new Set(records.map(r=>r.sourceProfileId)).size,records.length,'Duplicate profile IDs');
const counts={};
for(const raw of source.records){
  const r=records.find(r=>r.sourceProfileId===raw.id);assert(r,raw.name);assert.equal(r.title,raw.name);
  assert.equal(raw.unmatched.length,0);assert.equal(r.material,raw.materialGroup);
  assert.equal(r.filterMemberships.length,raw.partTypes.length);
  const expectedTools=raw.tools.filter(t=>raw.jobs.some(j=>j.p.tool===t.id&&exposed(j))).map(t=>'T'+Number(t.number)+'_'+t.name.replace(/^T\d+_/i,'')).sort();
  assert.deepEqual(r.tools.map(t=>t.id+'_'+t.name).sort(),expectedTools,'Tools: '+r.title);
  for(const t of r.tools){assert(/^T\d+$/.test(t.id),r.title);assert.equal(t.imageAvailable!==false,fs.existsSync('assets/images/sec-mai-tools/tool-list/t'+t.id.slice(1).padStart(2,'0')+'.webp'),'Tool photo availability: '+r.title+' '+t.id);}
  const jobs=raw.jobs.filter(j=>exposed(j)&&editable(j.p).length);
  assert.deepEqual(r.processes.filter(p=>p.sourceJobId).map(p=>p.sourceJobId),jobs.map(j=>j.id),'Adjustable jobs: '+r.title);
  for(const j of jobs){const p=r.processes.find(p=>p.sourceJobId===j.id);for(const f of editable(j.p).filter(f=>f!=='calculate'))assert(p.descriptions.some(t=>t.en.includes('Default: '+j.p[f])),'Default '+r.title+' '+f);}
  for(const key of editable(raw.globals))assert(r.processes[0].descriptions.some(t=>t.en.includes('Default: '+raw.globals[key])),'Global default '+r.title);
  function walk(value){if(value&&typeof value==='object'){if('ko'in value){for(const lang of ['ko','en','ja'])assert(typeof value[lang]==='string'&&value[lang].trim(),'Missing language: '+r.title);for(const lang of ['en','ja'])assert(!/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(value[lang]),'Korean residual: '+r.title+' '+lang);}Object.values(value).forEach(walk);}}
  walk(r);assert(!/undefined|NaN/.test(JSON.stringify(r)),'Invalid value '+r.title);
  counts[r.material]=(counts[r.material]||0)+1;
}
const zi=records.filter(r=>r.material==='Zirconia'&&r.filterMemberships.some(m=>m.type==='Abutment Crown Bridge'));
assert.deepEqual(zi.map(r=>r.title).sort(),['Zirconia_Screw Head (T-cut)','Zirconia_Abutment crown bridge_D0.6','Zirconia_Abutment Crown Bridge_NCS (highnees)','Zirconia_Abutment Crown Bridge_NCS (Megalink)','Zirconia_Abutment Crown Bridge_NCS (M-Fix)','Zirconia_Abutment Crown Bridge_NCS (Urdent)'].sort());
assert(zi.every(r=>r.filterMemberships.some(m=>m.type==='Abutment Crown Bridge')));
for(const page of ['사용자 매뉴얼.html','src/index.template.html']){const h=fs.readFileSync(page,'utf8');assert(h.indexOf('src/data/mai-original-260830-templates.js')<h.indexOf('src/scripts/mai-dbconfig.js'));assert(h.includes('src/data/mai-original-260830-templates.js'));}
const index=fs.readFileSync('index.html','utf8'),template=fs.readFileSync('src/index.template.html','utf8');assert(index.includes('local-entry.js'));assert(template.includes('local-entry.js'));
fs.mkdirSync('output/verification/mai-original-260830',{recursive:true});fs.writeFileSync('output/verification/mai-original-260830/source-check.json',JSON.stringify({status:'passed',counts,sourceHashes:true,screenVerification:'NOT RUN: explicitly deferred by user',checked:'catalog membership, tools, images, adjustable jobs/defaults, KO/EN/JA fields, script order, protected local entry'},null,2));
console.log('PASS source checks:',counts,'Source validation only; actual browser evidence is recorded separately.');
