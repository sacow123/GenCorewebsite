const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const origin = 'https://preview.invalid';
const failures = [];
let checked = 0;

function checkDocument(file) {
  const route = path.relative(root, path.dirname(file)).split(path.sep).map(encodeURIComponent).join('/');
  const explicitUrl = new URL(`/${route}/index.html`, origin);
  const cleanUrl = new URL(`/${route}`, origin);
  const html = fs.readFileSync(file, 'utf8');
  let cleanBase = cleanUrl;
  let explicitBase = explicitUrl;
  const baseTag = html.match(/<base\s[^>]*\bhref=["']([^"']+)["']/i);
  const baseScript = html.match(/<script data-sme-document-base>([\s\S]*?)<\/script>/);
  if (baseTag) {
    cleanBase = new URL(baseTag[1], cleanUrl);
    explicitBase = new URL(baseTag[1], explicitUrl);
  } else if (baseScript) {
    const script = new vm.Script(baseScript[1]);
    const resolveBase = location => {
      let base = location;
      const document = {
        createElement: () => ({}),
        head: { appendChild: element => { base = new URL(element.href, location); } }
      };
      script.runInNewContext({ location, document }, { timeout: 100 });
      return base;
    };
    cleanBase = resolveBase(cleanUrl);
    explicitBase = resolveBase(explicitUrl);
  }

  for (const [, reference] of html.matchAll(/<(?:img|script|link|iframe|source|video|audio|a)\b[^>]*?\s(?:src|href|poster)\s*=\s*["']([^"']+)["']/gi)) {
    if (/^(?:#|[a-z][a-z\d+.-]*:)/i.test(reference)) continue;
    const expected = new URL(reference, explicitBase);
    const actual = new URL(reference, cleanBase);
    if (actual.href !== expected.href) failures.push(`${file}: ${reference} resolves to ${actual.pathname}; expected ${expected.pathname}`);
  }
  checked++;
}

function scan(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) scan(file);
    else if (entry.isFile() && entry.name === 'index.html') checkDocument(file);
  }
}

scan(path.join(root, 'assets'));
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Verified clean URL resource paths in ${checked} asset documents.`);
}
