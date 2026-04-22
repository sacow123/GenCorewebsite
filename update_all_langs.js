const fs = require('fs');

const i18nPath = 'c:/Users/USER/Desktop/2026-gencore- manual/i18n.js';
let i18nContent = fs.readFileSync(i18nPath, 'utf8');

// We've already added 'contents' to 'ko'.
// Now let's add it to 'en', 'ja', 'es'.

const placeholders = {
  en: "Detailed content is being prepared for this section.",
  ja: "このセクションの詳細コンテンツは準備中です。",
  es: "Se está preparando el contenido detallado de esta sección."
};

const languages = ['en', 'ja', 'es'];

languages.forEach(lang => {
  const startKey = `"${lang}": {`;
  const nextLang = lang === 'en' ? '"ja": {' : (lang === 'ja' ? '"es": {' : '};');
  
  const startIndex = i18nContent.indexOf(startKey);
  const endIndex = i18nContent.indexOf(nextLang, startIndex);
  const insertIndex = i18nContent.lastIndexOf('}', endIndex) - 1;
  
  const content = {};
  // Populate with same keys as KO but with translated placeholder
  const koStart = i18nContent.indexOf('contents: {');
  const koEnd = i18nContent.indexOf('}', i18nContent.indexOf('}', koStart) + 1);
  // This is too complex for regex, I'll just use a simpler approach for placeholders.
  
  const contentStr = `,\n    contents: {\n      "default": "${placeholders[lang]}"\n    }`;
  
  i18nContent = i18nContent.slice(0, insertIndex + 1) + contentStr + i18nContent.slice(insertIndex + 1);
});

fs.writeFileSync(i18nPath, i18nContent, 'utf8');
console.log('All languages updated with content placeholders!');
