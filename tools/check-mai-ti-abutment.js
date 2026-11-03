const fs=require('fs'), vm=require('vm'), assert=require('assert'), crypto=require('crypto');
const source=require('./mai-ti-abutment-r1-source.json');
const c={window:{}};
vm.runInNewContext(fs.readFileSync('src/data/mai-batch-templates.js','utf8'),c);
const records=c.window.MaiBatchTemplates.filter(r=>source.records.some(raw=>raw.id===r.sourceProfileId));
assert.equal(records.length,5);
for(const file of source.checks.sourceFiles) assert.equal(crypto.createHash('sha256').update(fs.readFileSync(source.source+file.name)).digest('hex'),file.sha256,'Original DB changed: '+file.name);
for(const raw of source.records){
  const record=records.find(r=>r.sourceProfileId===raw.id);
  assert(record,raw.name); assert.equal(record.title,raw.name); assert.equal(record.sourceRevision,'260830');
  assert.equal(raw.unmatched.length,0);
  for(const job of raw.jobs){
    const fields=Object.keys(job.p).filter(k=>k.endsWith('_ovwren')&&job.p[k]==='1');
    if(raw.name==='Interface_Test'&&job.p.calculate==='0'&&!fields.includes('calculate_ovwren'))continue;
    if(!fields.length&&raw.name!=='Ti_Connector_cut'&&!raw.overrides.some(o=>o.key===job.id+'##calculate'))continue;
    const p=record.processes.find(p=>p.sourceJobId===job.id);assert(p,'Missing job '+job.p.jobname);
    assert(p.descriptions.some(d=>d.en==='Calculate default: '+(job.p.calculate==='1'?'On':'Off')),'Wrong default '+job.p.jobname);
    const tool=raw.tools.find(t=>t.id===job.p.tool);
    assert(p.descriptions.some(d=>d.en==='Linked tool: '+tool.name));
    for(const field of fields.filter(f=>f!=='calculate_ovwren')) assert(p.descriptions.some(d=>d.en.includes('(Default: '+job.p[field.slice(0,-7)]+')')));
  }
  assert.equal(record.uda.length,raw.jobs.filter(j=>/^uarea/.test(j.type)).length);
  for(const job of raw.jobs.filter(j=>j.type==='impintwallfin')){
    const t=raw.tools.find(t=>t.id===job.p.tool);
    assert(record.interfaces.some(d=>d.en.startsWith('Category '+job.p.category+': '+t.name+' / ')&&d.en.includes(job.p.sideid==='outer'?'Outer wall':'Inner wall')));
  }
  const activeTools=raw.tools.filter(t=>raw.jobs.some(j=>j.p.tool===t.id&&(j.p.calculate==='1'||j.p.calculate_ovwren==='1')));
  assert.equal(record.tools.length,activeTools.length);
  for(const t of activeTools) assert(record.tools.some(x=>x.id==='T'+Number(t.number)&&x.name===t.name.slice(t.name.indexOf('_')+1)));
}
console.log('PASS: 5 Ti Abutment/shared profiles; original DB hashes, variant defaults, adjustable fields, UDA, interface walls and linked tools.');
