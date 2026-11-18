const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const html = fs.readFileSync('assets/documents/mai-sme-premill/index.html', 'utf8');
const script = html.match(/<script data-sme-document-base>([\s\S]*?)<\/script>/)[1];
for (const url of [
  'https://gen-corewebsite.vercel.app/assets/documents/mai-sme-premill',
  'https://gen-corewebsite.vercel.app/assets/documents/mai-sme-premill/',
  'http://127.0.0.1:8080/assets/documents/mai-sme-premill/index.html',
  'file:///C:/Users/USER/Documents/GitHub/GenCorewebsite/assets/documents/mai-sme-premill/index.html'
]) {
  const location = new URL(url);
  let baseUrl = url;
  const document = {createElement: () => ({}), head: {appendChild: base => {baseUrl = new URL(base.href, url).href;}}};
  vm.runInNewContext(script, {location, document});
  for (const resource of ['document.css', 'content.js', 'document.js', '../../images/mai-sme-premill/step-01.webp']) {
    const expected = new URL(resource, new URL('./assets/documents/mai-sme-premill/index.html', url.startsWith('file:') ? 'file:///C:/Users/USER/Documents/GitHub/GenCorewebsite/' : location.origin+'/')).href;
    assert.equal(new URL(resource, baseUrl).href, expected);
  }
}
assert(fs.readFileSync('tools/import-sme-premill.cjs', 'utf8').includes('data-sme-document-base'));
console.log('PASS: document assets resolve correctly for clean URL, directory, HTML and file URLs.');
