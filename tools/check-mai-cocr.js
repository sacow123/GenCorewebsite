// Run with: node tools/check-mai-cocr.js
// This source check complements (does not replace) browser verification.
const fs = require('fs'), vm = require('vm'), assert = require('assert');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync('src/data/mai-cocr-templates.js', 'utf8'), context);
const records = context.window.MaiCoCrTemplates;
const sources = JSON.parse(fs.readFileSync('tools/mai-cocr-source.json', 'utf8'));
assert.equal(records.length, 12);
assert.equal(new Set(records.map(r => r.title)).size, 12);
for (const source of sources) {
  const record = records.find(r => r.title === source.title);
  assert(record, source.title);
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
for (const page of ['사용자 매뉴얼.html', 'src/index.template.html']) {
  const html = fs.readFileSync(page, 'utf8');
  for (const file of ['src/data/mai-cocr-templates.js', 'src/scripts/mai-dbconfig.js', 'assets/css/mai-dbconfig.css']) assert(html.includes(file), 'Missing resource: ' + page);
}
console.log('PASS: 12 templates; every source line and tool retained; KO/EN/JA fields present; EN/JA Korean residual 0; page/template resources wired.');
