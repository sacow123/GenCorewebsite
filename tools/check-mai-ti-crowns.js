const fs=require('fs'), vm=require('vm'), assert=require('assert'), crypto=require('crypto');
const source=require('./mai-ti-crowns-r1-source.json');
const c={window:{}};
vm.runInNewContext(fs.readFileSync('src/data/mai-batch-templates.js','utf8'),c);
const records=c.window.MaiBatchTemplates.filter(r=>source.records.some(raw=>raw.id===r.sourceProfileId));
assert.equal(records.length,13);
for(const file of source.checks.sourceFiles) assert.equal(crypto.createHash('sha256').update(fs.readFileSync(source.source+file.name)).digest('hex'),file.sha256,'Original DB changed: '+file.name);
for(const raw of source.records){
  const record=records.find(r=>r.sourceProfileId===raw.id);
  assert(record,raw.name); assert.equal(record.title,raw.name); assert.equal(record.sourceRevision,'260830');
  assert.equal(raw.unmatched.length,0);
  const visibleJobs=raw.jobs.filter(j=>Object.keys(j.p).some(k=>k.endsWith('_ovwren')&&j.p[k]==='1')&&(j.p.calculate==='1'||j.p.calculate_ovwren==='1'));
  assert.deepEqual(Array.from(record.processes.slice(1),p=>p.title),visibleJobs.map(j=>j.p.jobname),'Unexpected adjustable job in '+raw.name);
  for(const job of raw.jobs){
    const fields=Object.keys(job.p).filter(k=>k.endsWith('_ovwren')&&job.p[k]==='1');
    if(!fields.length||(job.p.calculate!=='1'&&!fields.includes('calculate_ovwren')))continue;
    if(/^Ti_Abutment/i.test(raw.name)&&(!fields.length||(job.p.calculate!=='1'&&!fields.includes('calculate_ovwren'))))continue;
    if(raw.name==='Interface_Test'&&job.p.calculate==='0'&&!fields.includes('calculate_ovwren'))continue;
    if(!fields.length&&raw.name!=='Ti_Connector_cut'&&!raw.overrides.some(o=>o.key===job.id+'##calculate'))continue;
    const p=record.processes.find(p=>p.sourceJobId===job.id);assert(p,'Missing job '+job.p.jobname);
    assert(p.descriptions.some(d=>d.en==='Calculate default: '+(job.p.calculate==='1'?'On':'Off')),'Wrong default '+job.p.jobname);
    const tool=raw.tools.find(t=>t.id===job.p.tool);
    assert(p.descriptions.some(d=>d.en==='Linked tool: '+tool.name));
    for(const field of fields.filter(f=>f!=='calculate_ovwren')) assert(p.descriptions.some(d=>d.en.includes('(Default: '+job.p[field.slice(0,-7)]+')')||d.en.includes(': '+job.p[field.slice(0,-7)]+' (Default)')));
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
console.log('PASS: 13 Ti Abutment Crown/shared profiles; original DB hashes, variant defaults, adjustable fields, UDA, interface walls and linked tools.');

const mfix=c.window.MaiBatchTemplates.find(r=>r.title==='Ti_Abutment Crown_NCS (M-Fix)');
assert.deepEqual(Array.from(mfix.processes,p=>p.title),['General settings','Finishing abutment outside_[M1.5Bx10]','Finishing inside abutment bases_[M1.0B_L10]','Finishing inside abutment bases_[M1.5RxL07]_M-Fix','Fissure machining [M0.6BXL03]'],'M-Fix Jobs must match the supplied hyperDENT screenshot');
