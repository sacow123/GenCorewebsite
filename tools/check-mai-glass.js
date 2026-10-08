// Complements actual browser checks; never substitutes for screen verification.
const fs = require('fs'), vm = require('vm'), assert = require('assert');
const context = { window: {} };
vm.runInNewContext(fs.readFileSync('src/data/mai-glass-templates.js', 'utf8'), context);
const records = context.window.MaiGlassTemplates;
const sources = JSON.parse(fs.readFileSync('tools/mai-glass-source.json', 'utf8'));
assert.equal(records.length, 7);
assert.equal(new Set(records.map(r => r.title)).size, 7);
const headings = new Set(['Tools list used', 'Tool pocket #', 'Tools', 'Comment', 'User-define area(UDA) available', 'Overwritable process']);
for (const source of sources) {
  const record = records.find(r => r.title === source.title);
  assert(record, source.title);
  const texts = [...record.conditions, ...record.uda, ...record.tools.flatMap(t => t.comments), ...record.processes.flatMap(p => p.descriptions)];
  const preserved = [...texts.map(t => t.en), ...record.tools.flatMap(t => [t.id, t.name]), ...record.processes.map(p => p.title)];
  for (const line of source.lines) if (!headings.has(line)) assert(preserved.includes(line), 'Lost source line: ' + line);
  assert.equal(record.tools.length, source.lines.filter(l => /^T\d+$/.test(l)).length);
  assert.deepEqual(record.tools.map(t => t.id), ['T5', 'T6', 'T7', 'T8']);
  assert.equal(record.tools.at(-1).optional, source.lines.includes('Optional, For the Fissure machining'));
  assert.equal(record.images.length, source.images.length);
  for (const image of record.images) {
    assert(source.images.includes(image.source));
    assert(image.src.startsWith('assets/images/') && image.src.endsWith('.webp') && fs.existsSync(image.src));
    texts.push(image.alt);
  }
  for (const text of texts) {
    for (const lang of ['ko', 'en', 'ja']) assert(text[lang]?.trim(), 'Missing ' + lang);
    for (const lang of ['en', 'ja']) assert(!/[가-힣]/.test(text[lang]), 'Korean in ' + lang);
  }
  for (const tool of record.tools) assert(fs.existsSync('assets/images/sec-mai-tools/tool-list/t' + tool.id.slice(1).padStart(2, '0') + '.webp'));
}
for (const page of ['사용자 매뉴얼.html', 'src/index.template.html']) {
  const html = fs.readFileSync(page, 'utf8');
  assert(html.includes('src/data/mai-glass-templates.js'));
  assert(html.indexOf('src/data/mai-glass-templates.js') < html.indexOf('src/scripts/mai-dbconfig.js'));
}
console.log('PASS: 7 Glass Ceramic templates; all source text, defaults, tools and illustrations retained; KO/EN/JA fields and page wiring checked.');
