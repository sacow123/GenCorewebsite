const fs = require('fs');
const path = require('path');
const vm = require('vm');

const rootDir = path.resolve(__dirname, '..');
const templatePattern = /^(Hybrid Ceramic|PMMA|PEEK|Wax|Zirconia)_/;
const hangulPattern = /[\uac00-\ud7a3]/;
const unseparatedToolCodePattern = /\bT\d{2}[A-Z]\d(?:\.\d+)?[A-Z]?\b/;

function loadRuntime() {
  const context = { window: {} };
  vm.createContext(context);

  const runtimeFiles = [
    'src/data/dbconfig-data-en.js',
    'src/data/dbconfig-data-ko.js',
    'src/data/dbconfig-data-ja.js',
    'src/data/hybrid-template-localizations.js',
    'src/scripts/hybrid-template-card.js'
  ];

  runtimeFiles.forEach((relativePath) => {
    const filePath = path.join(rootDir, relativePath);
    vm.runInContext(fs.readFileSync(filePath, 'utf8'), context, { filename: relativePath });
  });

  vm.runInContext(
    'this.templateData = { ko: dbConfigDataKO, en: dbConfigDataEN, ja: dbConfigDataJA }; this.templateRenderer = window.GenCoreMaterialTemplateCard;',
    context
  );

  if (!context.templateRenderer || typeof context.templateRenderer.render !== 'function') {
    throw new Error('Template renderer was not initialized.');
  }

  return context;
}

function getVisibleText(html) {
  return String(html)
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(?:nbsp|amp|lt|gt|quot);/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getKoreanFragments(text) {
  return String(text)
    .split(/(?<=[.!?。])\s+|\s{2,}/)
    .map((fragment) => fragment.trim())
    .filter((fragment) => hangulPattern.test(fragment));
}

function validatePmmaFlexibleDentureStructure(language, title, rendered) {
  if (title !== 'PMMA_Flexble denture') return null;

  const expectedHeadings = language === 'ja'
    ? [
      '一般設定',
      '咬合面全体仕上げ（ブリッジ）_[M1.0B_L15]',
      'キャビティ側全体仕上げ（ブリッジ）_[M1.0B_L15]',
      '裂溝加工 [M1.0B_L15]',
      '裂溝加工 [Z0.6BX05]'
    ]
    : [
      'General settings',
      'Overall finishing occlusal side (bridge)_[M1.0B_L15]',
      'Overall finishing cavity side (bridge)_[M1.0B_L15]',
      'Fissure machining [M1.0B_L15]',
      'Fissure machining [Z0.6BX05]'
    ];

  for (const heading of expectedHeadings) {
    if (!rendered.includes(`<h5>${heading}</h5>`)) {
      return `expected adjustment heading was not rendered as its own card: ${heading}`;
    }
    if (rendered.includes(`<li>${heading}</li>`)) {
      return `adjustment heading was incorrectly rendered as a list item: ${heading}`;
    }
  }

  return null;
}

function main() {
  const runtime = loadRuntime();
  const titles = Object.keys(runtime.templateData.ko).filter((title) => templatePattern.test(title));
  const failures = [];

  ['en', 'ja'].forEach((language) => {
    titles.forEach((title) => {
      const sourceText = runtime.templateData[language][title];
      if (!sourceText) {
        failures.push({ language, title, reason: 'missing template data' });
        return;
      }

      const rendered = runtime.templateRenderer.render({ title, sourceText, lang: language });
      const structureFailure = validatePmmaFlexibleDentureStructure(language, title, rendered);
      if (structureFailure) {
        failures.push({ language, title, reason: structureFailure });
      }
      const unseparatedToolCode = rendered.match(unseparatedToolCodePattern);
      if (unseparatedToolCode) {
        failures.push({ language, title, reason: `tool code is missing a separator: ${unseparatedToolCode[0]}` });
      }
      const visibleText = getVisibleText(rendered);
      const koreanFragments = getKoreanFragments(visibleText);
      if (koreanFragments.length) {
        failures.push({ language, title, reason: 'Korean text in rendered template', samples: koreanFragments.slice(0, 5) });
      }
    });
  });

  const summary = {
    checkedTemplates: titles.length,
    checkedLanguages: ['en', 'ja'],
    failures: failures.length
  };
  console.log(JSON.stringify({ summary, failures }, null, 2));

  if (failures.length) process.exit(1);
}

main();
