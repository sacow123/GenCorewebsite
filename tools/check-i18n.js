const fs = require("fs");
const path = require("path");
const vm = require("vm");

const rootDir = path.resolve(__dirname, "..");
const htmlPath = path.join(rootDir, "index.html");
const i18nPath = path.join(rootDir, "src", "scripts", "i18n.js");
const autoVisibleI18nPath = path.join(rootDir, "src", "data", "visible-i18n-auto.js");

function parseArgs(argv) {
  const options = {
    langs: null,
    section: null,
    listSections: false,
    strictRaw: false,
    strictVisible: false,
    verbose: false,
    strictKoEnglish: false
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--lang" || arg === "--langs") {
      options.langs = argv[i + 1].split(",").map(v => v.trim()).filter(Boolean);
      i += 1;
    } else if (arg === "--section") {
      options.section = argv[i + 1].replace(/^#/, "");
      i += 1;
    } else if (arg === "--list-sections") {
      options.listSections = true;
    } else if (arg === "--strict-raw") {
      options.strictRaw = true;
    } else if (arg === "--strict-visible") {
      options.strictVisible = true;
    } else if (arg === "--verbose") {
      options.verbose = true;
    } else if (arg === "--strict-ko-english") {
      options.strictKoEnglish = true;
    } else if (arg === "--help" || arg === "-h") {
      printHelp();
      process.exit(0);
    }
  }

  return options;
}

function printHelp() {
  console.log(`Usage:
  node tools/check-i18n.js
  node tools/check-i18n.js --lang ko,en
  node tools/check-i18n.js --section sec-mf-hd-features
  node tools/check-i18n.js --lang ja --strict-raw
  node tools/check-i18n.js --lang ja --strict-raw --strict-visible --verbose
  node tools/check-i18n.js --list-sections

Checks data-i18n keys and visible Korean text that must resolve for the selected language.`);
}

function loadI18n() {
  const autoVisibleCode = fs.existsSync(autoVisibleI18nPath)
    ? fs.readFileSync(autoVisibleI18nPath, "utf8")
    : "";
  const code = autoVisibleCode + "\n" + fs.readFileSync(i18nPath, "utf8") + `
this.TRANSLATIONS = TRANSLATIONS;
this.getI18nText = getI18nText;
this.hasHangulText = hasHangulText;
this.getStaticTranslation = getStaticTranslation;
`;
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox, { filename: i18nPath });
  return sandbox;
}

function getSections(html) {
  const sections = [];
  const regex = /<section\s+id=["']([^"']+)["'][\s\S]*?(?=<section\s+id=["']|<\/main>|<\/body>|$)/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    sections.push({ id: match[1], html: match[0] });
  }
  return sections;
}

function getKeys(markup) {
  return [...new Set([...markup.matchAll(/data-i18n=(["'])(.*?)\1/g)].map(match => match[2]))];
}

function addKeySection(map, key, sectionId) {
  if (!map.has(key)) map.set(key, new Set());
  map.get(key).add(sectionId);
}

function hasOwn(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj || {}, key);
}

function isEmptyTranslation(value) {
  return value === undefined || value === null;
}

function looksEnglish(value) {
  return /[A-Za-z]{4,}/.test(String(value));
}

function isAllowedKoreanLatin(value) {
  return /MillFix|GenCore|hyperDENT|M AI|NC|G코드|M코드|RPM|Feedrate|Ready|TeamViewer|Close|Open|On|Off|PEEK|PMMA|Amber|Hybrid|Ceramic|Zirconia|Fixture|Dbconfig|USB|LED|CAM|PC|Tool/.test(String(value));
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findFallbackForKey(markup, key) {
  const pattern = new RegExp(`<[^>]*data-i18n=(["'])${escapeRegExp(key)}\\1[^>]*>([\\s\\S]*?)<\\/[^>]+>`);
  const match = markup.match(pattern);
  return match ? match[2] : undefined;
}

function findVisibleKorean(markup) {
  const withoutCode = markup.replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "");
  const findings = [];
  const stack = [];
  const voidTags = new Set(["img", "input", "br", "meta", "link", "hr", "source", "area", "base", "col", "embed", "param", "track", "wbr"]);
  const tokenRegex = /<[^>]*>|[^<]+/g;
  const hangul = /[\uac00-\ud7a3]/;

  for (const match of withoutCode.matchAll(tokenRegex)) {
    const token = match[0];
    if (token.startsWith("<!--")) continue;
    if (token.startsWith("</")) {
      stack.pop();
      continue;
    }
    if (token.startsWith("<")) {
      if (/^<!/.test(token)) continue;
      const tag = token.match(/^<([\w-]+)/)?.[1];
      const attributeRegex = /\b(?:placeholder|alt|title|aria-label|data-title)=("([^"]*)"|'([^']*)')/g;
      for (const attribute of token.matchAll(attributeRegex)) {
        const value = attribute[2] || attribute[3] || "";
        if (hangul.test(value)) findings.push({ type: "attribute", text: value });
      }
      if (tag && !voidTags.has(tag.toLowerCase()) && !/\/>$/.test(token)) {
        stack.push({ translated: /\bdata-i18n=/.test(token) });
      }
      continue;
    }
    const text = token.trim();
    if (text && hangul.test(text) && !stack.some(item => item.translated)) {
      findings.push({ type: "text", text });
    }
  }
  return findings;
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  const html = fs.readFileSync(htmlPath, "utf8");
  const i18n = loadI18n();
  const sections = getSections(html);

  if (options.listSections) {
    sections.forEach(section => console.log(section.id));
    return;
  }

  let scopeHtml = html;
  let scopeLabel = "all";
  if (options.section) {
    const section = sections.find(item => item.id === options.section);
    if (!section) {
      console.error(`Section not found: ${options.section}`);
      process.exit(2);
    }
    scopeHtml = section.html;
    scopeLabel = section.id;
  }

  const scopedKeys = getKeys(scopeHtml);
  const visibleKorean = findVisibleKorean(scopeHtml);
  const fallbackByKey = new Map();
  scopedKeys.forEach(key => {
    const fallback = findFallbackForKey(scopeHtml, key);
    if (fallback !== undefined) fallbackByKey.set(key, fallback);
  });
  const keySections = new Map();
  sections.forEach(section => {
    getKeys(section.html).forEach(key => addKeySection(keySections, key, section.id));
  });

  const languages = options.langs || Object.keys(i18n.TRANSLATIONS);
  const report = {};
  let hasFailure = false;

  for (const lang of languages) {
    const dict = i18n.TRANSLATIONS[lang] || {};
    const missingRaw = [];
    const pendingRuntime = [];
    const hangulRuntime = [];
    const englishInKo = [];
    const unresolvedVisible = lang === "ko" ? [] : visibleKorean.filter(item => !i18n.getStaticTranslation(lang, item.text));

    for (const key of scopedKeys) {
      const rawValue = dict[key];
      const runtimeValue = i18n.getI18nText(lang, key, fallbackByKey.get(key));
      const locations = [...(keySections.get(key) || [])];

      if (!hasOwn(dict, key) || isEmptyTranslation(rawValue)) {
        missingRaw.push({ key, sections: locations });
      }

      if (/translation pending|Missing translation|번역 누락/i.test(String(runtimeValue))) {
        pendingRuntime.push({ key, value: runtimeValue, sections: locations });
      }

      if (lang === "en" && i18n.hasHangulText(runtimeValue)) {
        hangulRuntime.push({ key, value: runtimeValue, sections: locations });
      }

      if (options.strictKoEnglish && lang === "ko" && looksEnglish(runtimeValue) && !isAllowedKoreanLatin(runtimeValue)) {
        englishInKo.push({ key, value: runtimeValue, sections: locations });
      }
    }

    if ((options.strictRaw && missingRaw.length) || (options.strictVisible && unresolvedVisible.length) || pendingRuntime.length || hangulRuntime.length || englishInKo.length) {
      hasFailure = true;
    }

    report[lang] = {
      checkedKeys: scopedKeys.length,
      missingRaw,
      pendingRuntime,
      hangulRuntime,
      englishInKo,
      unresolvedVisible
    };
  }

  if (options.verbose) {
    console.log(JSON.stringify({ scope: scopeLabel, languages, report }, null, 2));
  } else {
    const summary = {};
    for (const lang of languages) {
      const item = report[lang];
      summary[lang] = {
        checkedKeys: item.checkedKeys,
        missingRaw: item.missingRaw.length,
        pendingRuntime: item.pendingRuntime.length,
        hangulRuntime: item.hangulRuntime.length,
        englishInKo: item.englishInKo.length,
        unresolvedVisible: item.unresolvedVisible.length,
        missingRawSample: item.missingRaw.slice(0, 20),
        pendingRuntimeSample: item.pendingRuntime.slice(0, 20),
        hangulRuntimeSample: item.hangulRuntime.slice(0, 20),
        englishInKoSample: item.englishInKo.slice(0, 20)
        ,unresolvedVisibleSample: item.unresolvedVisible.slice(0, 20)
      };
    }
    console.log(JSON.stringify({ scope: scopeLabel, languages, strictRaw: options.strictRaw, summary }, null, 2));
  }

  if (hasFailure) {
    process.exit(1);
  }
}

main();
