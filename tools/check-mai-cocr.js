// Run with: node tools/check-mai-cocr.js
// This source check complements (does not replace) browser verification.
const fs = require('fs'), vm = require('vm'), assert = require('assert');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync('src/data/mai-cocr-templates.js', 'utf8'), context);
const records = context.window.MaiCoCrTemplates;
const sources = JSON.parse(fs.readFileSync('tools/mai-cocr-source.json', 'utf8'));
assert.equal(records.length, 14);
assert.equal(new Set(records.map(r => r.title)).size, 14);
for (const source of sources) {
  const record = records.find(r => r.title === source.title);
  assert(record, source.title);
  if (record.sourceRevision === '260830') continue; // Validated against effective original DB below.
  const headings = new Set(['Tools list used', 'Tool pocket #', 'Tools', 'Comment', 'User-define area(UDA) available', 'Overwritable process']);
  const preserved = [record.title, ...record.conditions.map(t => t.en), ...record.uda.map(t => t.en),
    ...record.tools.flatMap(t => [t.id, t.name, ...t.comments.map(c => c.en)]),
    ...record.processes.flatMap(p => [p.title, ...p.descriptions.map(t => t.en)])];
  for (const line of source.lines) if (!headings.has(line)) assert(preserved.includes(line), 'Lost source text: ' + line);
  assert.equal(record.tools.length, source.lines.filter(l => /^T\d+$/.test(l)).length);
  for (const text of [...record.conditions, ...record.uda, ...record.tools.flatMap(t => t.comments), ...record.processes.flatMap(p => p.descriptions)]) {
    for (const lang of ['ko', 'en', 'ja']) assert(text[lang]?.trim(), 'Missing ' + lang + ': ' + source.title);
    for (const lang of ['en', 'ja']) assert(!/[가-힣]/.test(text[lang]), 'Korean in ' + lang + ': ' + source.title);
  }
}
const snapshots = [require('./mai-cocr-bridge-260830-source.json'), require('./mai-cocr-crown-260830-source.json')];
for (const snapshot of snapshots) {
const crypto = require('crypto');
for (const file of snapshot.checks.sourceFiles) assert.equal(crypto.createHash('sha256').update(fs.readFileSync(snapshot.source + file.name)).digest('hex'), file.sha256, 'Original DB changed: ' + file.name);
assert.equal(snapshot.records.length, 3);
for (const raw of snapshot.records) {
  assert.equal(raw.unmatched.length, 0);
  const record = records.find(r => r.title === raw.name);
  assert.equal(record.type, raw.partTypes.includes('abutmentcrown_bridge') ? 'Abutment Crown Bridge' : 'Abutment Crown');
  assert.equal(record.material, 'CoCr');
  const expectedTools = raw.tools.filter(t => raw.jobs.some(j => j.p.tool === t.id && (j.p.calculate === '1' || j.p.calculate_ovwren === '1'))).map(t => 'T' + Number(t.number)).sort();
  assert.deepEqual(Array.from(record.tools,t => t.id).sort(), expectedTools);
  const editableJobs = raw.jobs.filter(j => Object.entries(j.p).some(([k,v]) => k.endsWith('_ovwren') && v === '1') && (j.p.calculate === '1' || j.p.calculate_ovwren === '1'));
  assert.deepEqual(Array.from(record.processes.slice(1),p => p.sourceJobId), editableJobs.map(j => j.id));
  assert.equal(record.processes[0].title, 'General settings');
  for (const job of editableJobs) {
    const process = record.processes.find(p => p.sourceJobId === job.id);
    for (const [key,value] of Object.entries(job.p)) {
      if (!key.endsWith('_ovwren') || value !== '1' || key === 'calculate_ovwren') continue;
      assert(process.descriptions.some(t => t.en.includes('(Default: ' + job.p[key.slice(0,-7)] + ')')));
    }
  }
  for (const text of [...record.conditions,...record.uda,...record.interfaces,...record.processes.flatMap(p=>[...(p.titleText?[p.titleText]:[]),...p.descriptions]),...record.tools.flatMap(t=>t.comments),...Object.values(record.toolHints)]) {
    for (const lang of ['ko','en','ja']) assert(text[lang]?.trim());
    for (const lang of ['en','ja']) assert(!/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(text[lang]));
  }
}
}
for (const page of ['사용자 매뉴얼.html', 'src/index.template.html']) {
  const html = fs.readFileSync(page, 'utf8');
  for (const file of ['src/data/mai-cocr-templates.js', 'src/scripts/mai-dbconfig.js', 'assets/css/mai-dbconfig.css']) assert(html.includes(file), 'Missing resource: ' + page);
}
console.log('PASS: 14 CoCr templates; 3 crowns and 3 bridges verified against hashed 260830 original; tools, adjustable jobs/defaults and KO/EN/JA checked; remaining 8 exports retained.');
