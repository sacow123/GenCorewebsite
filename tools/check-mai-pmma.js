// Static source/resource verification only; browser validation intentionally skipped.
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const context={window:{}};
vm.runInNewContext(fs.readFileSync('src/data/mai-pmma-templates.js','utf8'),context);
const records=context.window.MaiPmmaTemplates;
const source=JSON.parse(fs.readFileSync('tools/mai-pmma-source.json','utf8'));
assert.equal(records.length,18);assert.equal(new Set(records.map(r=>r.title)).size,18);
const headings=new Set(['Tools list used','Tool pocket #','Tools','Comment','User-define area(UDA) available','Overwritable process']);
for(const original of source){
  const record=records.find(r=>r.title===original.title);assert(record,original.title);
  const texts=[...record.conditions,...record.uda,...record.tools.flatMap(t=>t.comments),...record.processes.flatMap(p=>p.descriptions)];
  const preserved=[...texts.map(t=>t.en),...record.tools.flatMap(t=>[t.id,t.name]),...record.processes.map(p=>p.title)];
  for(const line of original.lines)if(!headings.has(line))assert(preserved.includes(line),'Lost source line: '+line);
  assert.equal(record.tools.filter(t=>t.id).length,original.lines.filter(l=>/^T\d+$/.test(l)).length);
  assert.equal(record.images.length,original.images.length);
  for(const image of record.images){assert(original.images.includes(image.source));assert(fs.existsSync(image.src)&&image.src.endsWith('.webp'));assert(record.processes.some(p=>p.title===image.process));texts.push(image.alt);}
  for(const process of record.processes)if(process.titleText)texts.push(process.titleText);
  for(const text of texts){
    for(const lang of ['ko','en','ja'])assert(text[lang]?.trim(),'Missing '+lang);
    for(const lang of ['en','ja'])assert(!/[가-힣]/.test(text[lang]),'Korean in '+lang);
  }
  for(const tool of record.tools)if(tool.id)assert(fs.existsSync('assets/images/sec-mai-tools/tool-list/t'+tool.id.slice(1).padStart(2,'0')+'.webp'),'Missing tool '+tool.id);
}
for(const page of ['사용자 매뉴얼.html','src/index.template.html']){
  const html=fs.readFileSync(page,'utf8');assert(html.includes('src/data/mai-pmma-templates.js'));assert(html.indexOf('src/data/mai-pmma-templates.js')<html.indexOf('src/scripts/mai-dbconfig.js'));
}
assert(fs.readFileSync('src/scripts/mai-dbconfig.js','utf8').includes('window.MaiPmmaTemplates'));
console.log('PASS: 18 PMMA records; original text, defaults, tools and images retained; KO/EN/JA fields and resources wired. Browser checks skipped at user request.');

assert(fs.existsSync('assets/images/sec-mf-Tutorials/overstructure_icon.webp'));
