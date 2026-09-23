/*
 * Imports the supplied M AI UI 2.0 Notion HTML exports as embeddable manual
 * documents. Run with:
 * node tools/import-mai-ui2-manuals.js "<export-directory>"
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

const sourceDirectory = process.argv[2];
if (!sourceDirectory || !fs.existsSync(sourceDirectory)) {
  throw new Error('Provide the existing export directory as the first argument.');
}

const projectRoot = path.resolve(__dirname, '..');
const documentDirectory = path.join(projectRoot, 'assets', 'documents', 'mai-ui2');
const imageDirectory = path.join(projectRoot, 'assets', 'images', 'mai-ui2');

const documents = [
  ['jog-mode', '5 3 h 조그 모드 1bbcfb3e905880ac8a9ac745adfb8e80.html'],
  ['machining-room-cleaning', '5 3 f 가공룸 청소 1bbcfb3e905880dcaa3bdad7af7c6560.html'],
  ['main-page', '5 1 메인 페이지 1bbcfb3e9058804196bfc632d597cdb5.html'],
  ['settings-page', '5 3 셋업 페이지 1bbcfb3e90588013bcb7dbdce159a841.html'],
  ['ai-disk-calibration', '5 3 a AI 디스크 캘리브레이션 1bbcfb3e90588007ac1cec65f847f1ee.html'],
  ['manual-disk-calibration', '5 3 c 매뉴얼 디스크 캘리브레이션 1bbcfb3e905880f380e8eaac233f5dd1.html'],
  ['ai-premill-calibration-v1-2', '5 3 b 1 AI 프리밀 캘리브레이션 V1 2 1bbcfb3e90588012be05f98e0ad8f3c7.html'],
  ['ai-premill-calibration-v2-0', '5 3 b 2 AI 프리밀 캘리브레이션 V2 0 211cfb3e905880da9d6afb873677ad02.html'],
  ['auto-tool-pocket-calibration', '5 3 d AI 툴포켓 캘리브레이션 1bbcfb3e90588046acbfde510e888f7f.html'],
  ['manual-tool-pocket-calibration', '5 3 e 매뉴얼 툴포켓 캘리브레이션 1bbcfb3e90588036a4afe83051500ff4.html']
];
const selectedSlug = process.env.MAI_UI2_DOCUMENT;

const mediaPattern = /\.(?:png|jpe?g|gif|webp)$/i;
const localReferencePattern = /(?:src|href)="([^"]+)"/g;
const assetPaths = new Map();

function decodeReference(reference) {
  try {
    return decodeURIComponent(reference);
  } catch {
    return reference;
  }
}

function outputName(sourceName) {
  const stem = path.basename(sourceName, path.extname(sourceName))
    .normalize('NFKD')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase() || 'image';
  const digest = crypto.createHash('sha1').update(sourceName).digest('hex').slice(0, 10);
  return `${stem}-${digest}.webp`;
}

async function convertAsset(reference) {
  if (assetPaths.has(reference)) return assetPaths.get(reference);
  const sourceName = decodeReference(reference);
  const sourcePath = path.join(sourceDirectory, sourceName);
  if (!fs.existsSync(sourcePath)) return reference;

  const destinationName = outputName(sourceName);
  const destinationPath = path.join(imageDirectory, destinationName);
  if (!fs.existsSync(destinationPath)) {
    await sharp(sourcePath, { animated: /\.gif$/i.test(sourceName), limitInputPixels: false })
      .webp({ effort: 4 })
      .toFile(destinationPath);
  }
  const result = `../../images/mai-ui2/${destinationName}`;
  assetPaths.set(reference, result);
  return result;
}

function extractBody(html) {
  const start = html.indexOf('<div class="page-body">');
  const end = html.lastIndexOf('</div></article>');
  if (start === -1 || end === -1) throw new Error('The exported document does not contain a page body.');
  return html.slice(start, end + '</div>'.length)
    // The Notion export adds this navigation link after the manual body. It has
    // no target in the support site and is intentionally not part of the body.
    .replace(/<div[^>]*>\s*<p[^>]*>\s*<a href="User%20Manual[^>]*>[\s\S]*?<\/a>\s*<\/p>\s*<\/div>/g, '');
}

function getHead(html) {
  const head = html.match(/<head>[\s\S]*?<\/head>/i)?.[0];
  if (!head) throw new Error('The exported document does not contain a document head.');
  return head.replace('</head>', `<style>
    html, body { background: transparent; }
    @media only screen { body { margin: 0; max-width: none; } }
    .page-body { padding: 0; }
    @media (max-width: 720px) {
      .column-list { flex-direction: column; gap: 0; }
      .column[style] { width: 100% !important; }
    }
  </style></head>`);
}

async function run() {
  fs.mkdirSync(documentDirectory, { recursive: true });
  fs.mkdirSync(imageDirectory, { recursive: true });

  for (const [slug, sourceFile] of documents.filter(([slug]) => !selectedSlug || slug === selectedSlug)) {
    console.log(`Importing ${slug}`);
    const sourceHtml = fs.readFileSync(path.join(sourceDirectory, sourceFile), 'utf8');
    const body = extractBody(sourceHtml);
    const references = [...body.matchAll(localReferencePattern)]
      .map((match) => match[1])
      .filter((reference) => !/^(?:https?:|data:|#)/i.test(reference) && mediaPattern.test(decodeReference(reference)));

    let outputBody = body;
    for (const reference of [...new Set(references)]) {
      const replacement = await convertAsset(reference);
      if (replacement !== reference) {
        outputBody = outputBody.split(`"${reference}"`).join(`"${replacement}"`);
      }
    }

    const output = `${getHead(sourceHtml)}<body><article class="page sans mai-ui2-import">${outputBody}</article><script src="mai-ui2-document-i18n.js?v=20260923n"></script></body></html>`;
    fs.writeFileSync(path.join(documentDirectory, `${slug}.html`), output, 'utf8');
    console.log(`Imported ${slug}`);
  }
}

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
