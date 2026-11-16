const fs = require('fs');
const data = require('./mai-premill-blanks-source.json');
const escape = value => String(value || '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const label = (key, fallback) => '<span data-i18n="premill-' + key + '">' + escape(fallback) + '</span>';
const th = (key, fallback) => '<th scope="col">' + label(key, fallback) + '</th>';
const td = value => '<td>' + (value ? escape(value) : '<span class="pm-empty">—</span>') + '</td>';
const table = (head, body) => '<div class="pm-table-scroll" tabindex="0"><table><thead><tr>' + head + '</tr></thead><tbody>' + body + '</tbody></table></div>';
// Preserve the two source columns and their line alignment, including merged cells.
function compatibilityMarkup(group) {
  const columns = [2,3].map(index => [...new Set(group.rows.map(row => row[index]).filter(Boolean))].join('\n').split(/\r?\n/));
  const height = Math.max(...columns.map(lines => lines.length));
  const rows = Array.from({length:height}, (_, index) => '<tr>' + columns.map(lines => {
    if (lines.length === 1 && index > 0) return '';
    const span = lines.length === 1 && height > 1 ? ' rowspan="' + height + '"' : '';
    return '<td' + span + '>' + escape(lines[index] || '') + '</td>';
  }).join('') + '</tr>').join('');
  return '<div class="pm-compatibility"><table class="pm-compat-table"><thead><tr>' + th('manufacturer','제조사') + th('system','호환 임플란트 시스템') + '</tr></thead><tbody>' + rows + '</tbody></table></div>';
}
const medentika = data.medentika.map(group => {
  const metadata = [...new Set(group.rows.flatMap(row => [row[2], row[3]]).filter(Boolean))];
  let platform = '', ps = '';
  const rows = group.rows.map(row => {
    if (row[4]) { platform = row[4]; ps = row[5] || ''; }
    else if (row[5]) ps = row[5];
    const search = ['Medentika', group.name, ...metadata, platform, ps, row[7], row[8]].join(' ');
    return '<tr data-pm-row data-pm-search="' + escape(search) + '">' + [platform,ps,row[7],row[8]].map(td).join('') + '</tr>';
  }).join('');
  const head = th('platform','플랫폼') + '<th scope="col">PS</th><th scope="col">Medentika brochure</th><th scope="col">GenCore</th>';
  return '<div class="pm-series" data-pm-group><h3>' + escape(group.name) + '</h3>' + compatibilityMarkup(group) + table(head, rows) + '</div>';
}).join('\n');
const straumann = table(th('system','호환 임플란트 시스템') + th('platform','플랫폼') + th('d115','D11.5 블랭크') + th('d16','D16 블랭크'), data.straumann.map(row => '<tr data-pm-row data-pm-search="' + escape('Straumann ' + row.join(' ')) + '">' + row.map(td).join('') + '</tr>').join(''));
const count = data.medentika.reduce((sum, g) => sum + g.rows.length, 0);
const brand = (name, body, number) => '<details class="content-card mai-premill-brand" data-pm-brand="' + name + '"><summary><span>' + name + '</span><span class="pm-count" data-pm-count>' + number + '</span></summary><div class="pm-brand-content"><p class="pm-jig">for S ME Premill jig</p>' + body + '</div></details>';
const html = '<section id="sec-mai-hd-premill-brands" class="content-section">\n' +
  '<link rel="stylesheet" href="assets/css/mai-premill-blanks.css">\n' +
  '<h2>Medentika/ Straumann Pre-mill Blanks</h2><p class="subtitle">M AI hyperDENT</p>\n' +
  '<div class="pm-toolbar"><label for="premill-blank-search">' + label('search','제조사 · 시리즈 · 플랫폼 · 블랭크명 검색') + '</label><div class="pm-search-row"><input id="premill-blank-search" type="search" autocomplete="off" data-i18n-placeholder="premill-placeholder" placeholder="예: Anthogyr, AB series, NC, D16"><button type="button" data-pm-reset>' + label('reset','초기화') + '</button></div><p class="pm-results" role="status" aria-live="polite"><span data-pm-brands>2</span> ' + label('brands','제조사') + ' · <span data-pm-total>' + (count + data.straumann.length) + '</span> ' + label('rows','항목') + '</p></div>\n' +
  brand('Medentika', medentika, count) + '\n' + brand('Straumann', '<div data-pm-group>' + straumann + '</div>', data.straumann.length) + '\n' +
  '<p class="pm-no-results" hidden data-i18n="premill-no-results">검색 결과가 없습니다. 다른 검색어를 입력하세요.</p>\n' +
  '<script src="src/scripts/mai-premill-blanks.js"></script>\n</section>\n';
const manual = '사용자 매뉴얼.html';
let page = fs.readFileSync(manual, 'utf8');
const start = page.indexOf('<section id="sec-mai-hd-premill-brands"');
const end = page.indexOf('</section>', start) + '</section>'.length;
if (start < 0 || end < start) throw Error('Missing target section');
page = page.slice(0,start) + html.trimEnd() + page.slice(end);
fs.writeFileSync('src/components/sections/sec-mai-hd-premill-brands.html', html);
fs.writeFileSync(manual,page);
console.log(JSON.stringify({series:data.medentika.length,medentika:count,straumann:data.straumann.length,total:count+data.straumann.length}));
