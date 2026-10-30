// Source and resource checks. Actual browser verification is performed separately.
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const context={window:{}};
vm.runInNewContext(fs.readFileSync('src/data/mai-batch-templates.js','utf8'),context);
const records=context.window.MaiBatchTemplates;
const sources=JSON.parse(fs.readFileSync('tools/mai-batch-source.json','utf8'));
const fastUpdate=JSON.parse(fs.readFileSync('tools/mai-ti-fast-260830.json','utf8'));
assert.equal(records.length,70);assert.equal(new Set(records.map(r=>r.title)).size,70);
assert.deepEqual(records.reduce((count,r)=>(count[r.material]=(count[r.material]||0)+1,count),{}),{'Pre-Mil+Rev.':16,'Pre-Mill':4,Ti:26,Wax:5,Zirconia:19});
const headings=new Set(['Tools list used','Tool pocket #','Tools','Comment','User-define area(UDA) available','Overwritable process']);
const exceptions=[];
for(const source of sources){
  const record=records.find(r=>r.title===source.title);assert(record,source.title);
  const texts=[...record.conditions,...record.uda,...record.interfaces,...record.tools.flatMap(t=>t.comments),...record.processes.flatMap(p=>p.descriptions)];
  const preserved=[...texts.map(t=>t.sourceText||t.en),...record.tools.flatMap(t=>[t.id,t.name]),...record.processes.map(p=>p.title)];
  if(record.title===fastUpdate.record.title){
    assert.equal(JSON.stringify(record),JSON.stringify(fastUpdate.record),'Fast article differs from verified DB snapshot');
    assert.equal(record.sourceRevision,'260830');
    assert(fastUpdate.evidence.partTypes.includes('abutment_bridge'),'Fast profile is not enabled for Abutment bridge');
    assert.equal(record.processes.length,fastUpdate.evidence.adjustableJobs.length+1);
    for(const job of fastUpdate.evidence.adjustableJobs){
      const process=record.processes.find(p=>p.title===job.name);assert(process,'Missing DB process: '+job.name);
      if(job.fields.includes('calculate_ovwren'))assert(process.descriptions.some(d=>d.en.includes('(Default: '+(job.calculate==='1'?'On':'Off')+')')),'Wrong DB default: '+job.name);
    }
    assert(record.uda.some(d=>d.en.startsWith('Category 10: T24_M2.0T_L06')),'Missing Bar Retention category 10');
  }else{
    for(const line of source.lines)if(!headings.has(line))assert(preserved.includes(line),'Lost source line in '+record.title+': '+line);
    assert.equal(record.sourceToolCount,source.lines.filter(l=>/^T\d+$/.test(l)).length,'Source tool count mismatch: '+record.title);
  }
  for(const process of record.processes)if(process.titleText)texts.push(process.titleText);
  if(record.toolHints)texts.push(...Object.values(record.toolHints));
  for(const text of texts){
    for(const lang of ['ko','en','ja'])assert(text[lang]?.trim(),'Missing '+lang+': '+record.title);
    for(const lang of ['en','ja'])assert(!/[가-힣]/.test(text[lang]),'Korean in '+lang+': '+record.title);
  }
  for(const tool of record.tools){
    if(!tool.id||!tool.name)exceptions.push({title:record.title,issue:'Missing source tool identifier/name',id:tool.id,name:tool.name});
    if(tool.id&&tool.name)assert(fs.existsSync('assets/images/sec-mai-tools/tool-list/t'+(tool.imageId||tool.id).slice(1).padStart(2,'0')+'.webp'),'Missing tool resource: '+tool.id);
    if(record.tools.some(t=>t!==tool&&t.id===tool.id&&t.name!==tool.name))exceptions.push({title:record.title,issue:'Source repeats pocket with different tool names',id:tool.id,name:tool.name});
  }
  assert.equal(record.images.length,source.images.length);
}
for(const page of ['사용자 매뉴얼.html','src/index.template.html']){
  const html=fs.readFileSync(page,'utf8');assert(html.includes('src/data/mai-batch-templates.js'));assert(html.indexOf('src/data/mai-batch-templates.js')<html.indexOf('src/scripts/mai-dbconfig.js'));
}
const renderer=fs.readFileSync('src/scripts/mai-dbconfig.js','utf8');
assert(renderer.includes('window.MaiBatchTemplates'));
for(const family of new Set(records.map(r=>r.family)))assert(renderer.includes(family),'Unreachable family: '+family);
fs.writeFileSync('tools/mai-batch-source-exceptions.json',JSON.stringify(exceptions,null,2)+'\n');
console.log('PASS: 70 records; legacy sources preserved except the explicitly replaced Fast 260830 snapshot; DB defaults, KO/EN/JA fields and resources checked. Browser verification is separate.');
console.log('Source anomalies retained:',exceptions.length);
