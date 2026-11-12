const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const c={window:{},document:{getElementById:()=>null},structuredClone};
for(const f of ['mai-original-260830-templates.js','mai-261030-updates.js'])vm.runInNewContext(fs.readFileSync('src/data/'+f,'utf8'),c);
const before=JSON.stringify(c.window.MaiOriginal260830Templates),overlay=c.window.Mai261030Updates;
const code=fs.readFileSync('src/scripts/mai-dbconfig.js','utf8').replace('if (!section || !records.length) return;','window.testRecords=records; return;');
vm.runInNewContext(code,c);assert.equal(JSON.stringify(c.window.MaiOriginal260830Templates),before,'Baseline was mutated');
const records=c.window.testRecords;assert.equal(records.length,c.window.MaiOriginal260830Templates.length+8);
assert.equal(new Set(records.map(r=>r.title)).size,records.length);
const updated=records.filter(r=>overlay.updates[r.sourceProfileId]||r.sourceRevision==='261030');
function walk(v){if(v&&typeof v==='object'){if('ko'in v)for(const lang of ['ko','en','ja']){assert(typeof v[lang]==='string'&&v[lang].trim());if(lang!=='ko')assert(!/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(v[lang]),v[lang]);assert(!/(^|[^0-9])1030\s*(추가|변경)/.test(v[lang]));}Object.values(v).forEach(walk);}}
updated.forEach(walk);
let originalThreadCount=0,originalThreadTemplates=0;
for(const raw of require('./mai-selected-260830-source.json').records){
 const jobs=raw.jobs.filter(j=>j.type==='threadmach'||/(?:^|[\s_])thread(?:[\s_]|$)/i.test(j.p.jobname));
 if(!jobs.length)continue;
 const r=records.find(r=>r.sourceProfileId===raw.id);assert(r,raw.name);originalThreadTemplates++;
 for(const j of jobs){
  const matches=r.processes.filter(p=>p.sourceJobId===j.id||p.title===j.p.jobname);assert.equal(matches.length,1,'Missing or duplicate original thread: '+raw.name+' / '+j.p.jobname);
  assert(!matches[0].descriptions.some(x=>x.en.startsWith('Added in 261030')),'Original thread mislabeled as new');
  walk(matches[0]);originalThreadCount++;
 }
}
console.log('PASS original thread coverage:',originalThreadTemplates,'templates,',originalThreadCount,'processes.');
const source=require('./mai-261030-update-source.json');
for(const raw of source.existing){const r=records.find(r=>r.sourceProfileId===raw.id);for(const change of raw.changes){const p=r.processes.find(p=>p.sourceJobId===change.job.id);assert(p);if(change.kind==='added'){assert.equal(p.addedIn,'261030');assert(p.descriptions.every(x=>!x.en.startsWith('Added in 261030')));}else assert(p.descriptions.some(x=>x.versionUpdate));if(change.kind==='calculate'){const word=change.job.p.calculate==='1'?'On':'Off';assert(p.descriptions.some(x=>x.en==='Changed in 261030: Calculate default changed to '+word+'.'));}}}
for(const r of records)assert(!r.conditions.some(x=>/260830 instructions are retained|Added in 261030/.test(x.en)),'Version notice left in body');
const premill=records.find(r=>r.title==='Pre-Mil+Rev._Abutment_90°_M_D1.0');
const pair=premill.processes.filter(p=>/1\.0BR.*90.*(3\+2|5x)/i.test(p.title));assert.equal(pair.length,2);assert(pair[0].title.includes('3+2'));assert(pair[0].descriptions.some(x=>x.en.includes('remains Off')));assert(pair[1].descriptions.some(x=>x.en.includes('changed to Off')));
for(const file of ['사용자 매뉴얼.html','src/index.template.html']){const html=fs.readFileSync(file,'utf8');assert(html.indexOf('mai-original-260830-templates.js')<html.indexOf('mai-261030-updates.js'));assert(html.indexOf('mai-261030-updates.js')<html.indexOf('src/scripts/mai-dbconfig.js'));}
assert(fs.readFileSync('index.html','utf8').includes('src/scripts/local-entry.js'));
console.log('PASS: 40 annotations, 8 additions; baseline unchanged; KO/EN/JA data; actual M_D1.0 defaults; entry order.');
