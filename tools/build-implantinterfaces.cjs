const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const source = process.argv[2];
if (!source) throw Error('Pass the ImplantInterface package folder.');
const esc = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
const groups = fs.readdirSync(source, {withFileTypes:true}).filter(d => d.isDirectory()).map(d => ({folder:d.name, files:fs.readdirSync(path.join(source,d.name), {recursive:true,withFileTypes:true}).filter(f => f.isFile() && f.name.toLowerCase().endsWith('.hdpartz')).map(f => path.relative(path.join(source,d.name),path.join(f.parentPath,f.name)).replaceAll('\\','/')).sort((a,b) => a.localeCompare(b,'en'))})).sort((a,b) => a.folder.localeCompare(b.folder,'en'));
const pages = JSON.parse(fs.readFileSync(path.join(root,'src/data/implantinterface-notion-source.json'),'utf8'));
const exclusions = JSON.parse(fs.readFileSync(path.join(root,'src/data/implantinterface-exclusions.json'),'utf8'));
for (const group of groups) group.files = group.files.filter(file => !exclusions.some(item => item.folder === group.folder && item.file === file));
const total = groups.reduce((n,g) => n + g.files.length, 0);
const translations = {ko:{},en:{},ja:{}};
function t(key, ko, en, ja) {
  ['ko','en','ja'].forEach((lang,i) => translations[lang]['implantinterface-'+key] = [ko,en,ja][i]);
  return `<span data-i18n="implantinterface-${key}">${ko}</span>`;
}
const canonical = value => value.toLowerCase().replace(/[^a-z0-9]/g,'');
const overrides = JSON.parse(fs.readFileSync(path.join(root,'src/data/implantinterface-overrides.json'),'utf8'));
const audit = {exact:0, spelling:0, confirmed:0, missing:0, groups:[]};
function folderMetadata(group) {
  const page = pages.find(p => p.title.toLowerCase() === group.folder.toLowerCase());
  if (!page) throw Error('Missing Notion page: '+group.folder);
  const rows = page.tables.flatMap(table => {
    const headers = table.rows[0];
    if (headers[0] !== 'Platform diameters' || headers[1] !== 'Interface shape' || headers[3] !== 'Corresponding library file name') throw Error('Unexpected source columns: '+page.title);
    return table.rows.slice(1).map(row => ({series:table.series, platform:row[0],shape:row[1],sourceFile:row[3],tools:row[4],note:row[5] || ''}));
  });
  const files = group.files.map(file => {
    const base = path.posix.basename(file).replace(/\.hdpartz$/i,'');
    const override = overrides.find(item => item.folder === group.folder && item.file === file);
    if (override) {
      const reference = override.copyFrom ? rows.find(row => row.sourceFile === override.copyFrom) : {platform:'',shape:'',tools:'',note:''};
      if (!reference) throw Error('Missing override reference: '+file);
      audit.confirmed++;
      return {...reference, platform:override.platform ?? reference.platform, shape:override.shape ?? reference.shape, tools:override.tools ?? reference.tools, series:override.series, file, sourceFile:base, status:'confirmed', provenance:override.provenance};
    }
    let candidates = rows.filter(row => row.sourceFile === base);
    let status = 'exact';
    if (!candidates.length) { candidates = rows.filter(row => canonical(row.sourceFile) === canonical(base)); status = 'spelling'; }
    if (candidates.length > 1) {
      const signatures = new Set(candidates.map(row => JSON.stringify([row.platform, row.shape.replace(/^Multiunits$/, 'Multiunit'), row.tools, row.note])));
      if (signatures.size !== 1) throw Error('Conflicting source specifications: '+file);
      candidates = [candidates[0]];
    }
    if (!candidates.length) { status = 'missing'; audit.missing++; return {file,status}; }
    audit[status]++;
    return {...candidates[0],file,status};
  });
  for (const override of overrides.filter(item => item.folder === group.folder && item.insertAfter)) {
    const index = files.findIndex(row => row.file === override.file);
    if (index < 0) throw Error('Missing ordered file: '+override.file);
    const [row] = files.splice(index,1);
    const after = files.findIndex(item => item.file === override.insertAfter);
    if (after < 0) throw Error('Missing ordering reference: '+override.insertAfter);
    files.splice(after+1,0,row);
  }
  const result = {folder:group.folder, source:'https://gencoretech.notion.site/'+page.id.replaceAll('-',''), rows:files, sourceOnly:rows.filter(row => !files.some(f => f.sourceFile === row.sourceFile))};
  audit.groups.push(result);
  return result;
}
function renderTools(row) {
  if (row.status === 'missing' || !row.tools) return '—';
  const note = row.tools.includes('(no need 0.6, 0.5 tools)') ? t('tools-note','0.6, 0.5 공구 불필요','No need for 0.6 or 0.5 tools','0.6、0.5工具は不要') : '';
  const tools = row.tools.replace(' (no need 0.6, 0.5 tools)','').split(',').map(s=>s.trim()).filter(Boolean);
  const extra = row.note === 'Powerball screw applied' ? t('powerball-note','Powerball 스크류 적용','Powerball screw applied','Powerballスクリュー適用') : esc(row.note);
  return `<div class="ii-tool-list">${tools.map(tool=>`<code>${esc(tool)}</code>`).join('')}</div>${note ? `<small class="ii-row-note">${note}</small>` : ''}${extra ? `<small class="ii-row-note">${extra}</small>` : ''}`;
}
function folderBody(group) {
  const metadata = folderMetadata(group);
  const seriesNames = [...new Set(metadata.rows.map(row => row.series || ''))];
  const missingLabel = () => t('missing-detail','상세 정보 확인 필요','Details need verification','詳細情報の確認が必要');
  const tables = seriesNames.map((name,i) => {
    const title = name ? esc(name) : missingLabel();
    return `<div class="ii-series" data-ii-series><h3><span>${String(i+1).padStart(2,'0')}</span> ${title}</h3><div class="ii-table-scroll" tabindex="0" role="region" aria-label="${esc(name || group.folder)}"><table><caption class="ii-sr-only">${title}</caption><thead><tr><th scope="col">${t('library-file','라이브러리 파일명','Library file name','ライブラリファイル名')}</th><th scope="col">${t('platform','플랫폼 직경','Platform diameters','プラットフォーム径')}</th><th scope="col">${t('shape','인터페이스 형상','Interface shape','インターフェース形状')}</th><th scope="col">${t('tools','사용되는 공구','Tools used','使用工具')}</th></tr></thead><tbody>${metadata.rows.filter(row => (row.series || '') === name).map(row => `<tr data-ii-filename="${esc(row.file)}" data-ii-match="${row.status}"><td><code>${esc(row.file)}</code>${row.status === 'spelling' ? `<small class="ii-row-note">${t('source-filename','Notion 파일명','Notion filename','Notionファイル名')}: <code>${esc(row.sourceFile)}</code></small>` : ''}</td><td>${esc(row.platform || '—')}</td><td>${row.shape ? `<span class="ii-shape ${row.shape.startsWith('Non-') ? 'ii-nonhex' : 'ii-hex'}">${esc(row.shape)}</span>` : '—'}</td><td>${renderTools(row)}</td></tr>`).join('')}</tbody></table></div></div>`;
  }).join('');
  const missingNote = metadata.rows.some(row => row.status === 'missing') ? `<p class="ii-missing-note">${t('missing-note','상세 정보 확인 필요: Notion에서 동일 파일명의 정보를 찾지 못했습니다. 플랫폼 직경, 형상, 공구는 확인 후 추가합니다.','Details need verification: no matching filename was found in Notion. Platform diameter, shape and tools will be added after verification.','詳細情報の確認が必要：Notionに一致するファイル名が見つかりません。径・形状・工具は確認後に追加します。')}</p>` : '';
  return `<div class="ii-library-info">${tables}${missingNote}</div>`;
}
const html = `<section id="sec-mai-hd-settings-implantinterface" class="content-section">
<header class="implantinterface-heading"><p class="implantinterface-eyebrow">M AI / hyperDENT / SETTING FILES</p><h2>ImplantInterface <span data-i18n="implantinterface-subtitle">인터페이스 라이브러리</span></h2><p class="ii-lead">${t('intro','제조사별 폴더를 펼쳐 인터페이스 라이브러리 파일을 확인하세요.','Expand a manufacturer folder to browse its interface library files.','メーカー別フォルダーを開いて、インターフェースライブラリのファイルをご確認ください。')}</p></header>
<div class="ii-package"><div><strong>${esc(path.basename(source))}</strong></div><p><b>${groups.length}</b> ${t('folders','폴더','folders','フォルダー')}<span class="ii-separator">·</span><b>${total}</b> ${t('files','파일','files','ファイル')}</p></div>
<div class="ii-toolbar"><label class="ii-search-label" for="implantinterface-search">${t('search','제조사 · 파일명 검색','Search manufacturer or filename','メーカー・ファイル名を検索')}</label><div class="ii-search-row"><input id="implantinterface-search" type="search" autocomplete="off" spellcheck="false"><button type="button" data-ii-reset>${t('reset','초기화','Reset','リセット')}</button></div><p class="ii-results" aria-live="polite"><b data-ii-folders>${groups.length}</b> ${t('folders','폴더','folders','フォルダー')}<span class="ii-separator">·</span><b data-ii-files>${total}</b> ${t('files','파일','files','ファイル')}</p></div>
<div class="ii-list">${groups.map((group,i) => `<details class="ii-folder" data-ii-folder="${esc(group.folder)}"><summary><span class="ii-number">${String(i+1).padStart(2,'0')}</span><span class="ii-folder-title">${esc(group.folder)}</span><span class="ii-file-count">${group.files.length}</span><span class="ii-chevron" aria-hidden="true">⌄</span></summary>${folderBody(group)}</details>`).join('\n')}</div>
<p class="ii-no-results" hidden>${t('no-results','검색 결과가 없습니다. 다른 검색어를 입력하세요.','No results. Try a different search term.','検索結果がありません。別のキーワードを入力してください。')}</p>
</section>`;
for (const relative of ['src/components/sections/sec-mai-hd-settings.html','사용자 매뉴얼.html']) {
  const target = path.join(root,relative);
  const text = fs.readFileSync(target,'utf8');
  const pattern = /<section id="sec-mai-hd-settings-implantinterface"[\s\S]*?<\/section>/;
  if (!pattern.test(text)) throw Error('Missing section: '+relative);
  fs.writeFileSync(target,text.replace(pattern,html));
}
const translationFile = path.join(root,'src/scripts/i18n.js');
let text = fs.readFileSync(translationFile,'utf8').replace(/\/\* BEGIN IMPLANTINTERFACE LIST TRANSLATIONS \*\/[\s\S]*?\/\* END IMPLANTINTERFACE LIST TRANSLATIONS \*\//,'');
text += '\n/* BEGIN IMPLANTINTERFACE LIST TRANSLATIONS */\n'+['ko','en','ja'].map(lang=>`Object.assign(TRANSLATIONS.${lang}, ${JSON.stringify(translations[lang])});`).join('\n')+'\n/* END IMPLANTINTERFACE LIST TRANSLATIONS */\n';
fs.writeFileSync(translationFile,text);
fs.writeFileSync(path.join(root,'src/data/implantinterface-manifest.json'),JSON.stringify({package:path.basename(source),folders:groups.length,files:total,groups},null,2)+'\n');
fs.writeFileSync(path.join(root,'src/data/implantinterface-details.json'),JSON.stringify(audit,null,2)+'\n');
console.log(JSON.stringify({folders:groups.length,files:total,exact:audit.exact,spelling:audit.spelling,confirmed:audit.confirmed,missing:audit.missing}));
