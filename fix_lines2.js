const fs = require('fs');
const htmlPath = 'c:/Users/USER/Desktop/2026-gencore- manual/index.html';
let lines = fs.readFileSync(htmlPath, 'utf8').split('\n');

const replacements = {
  // HTML comment fixes (lines with garbled comments)
  334: '      <!-- M AIº 설치/ 기본 조작 -->',
  372: '        <h2 data-i18n="nav-mai-tool-list">툴 리스트 페이지</h2>',
  377: '        <h2 data-i18n="nav-mai-settings">설정 페이지</h2>',
  404: '        <h2 data-i18n="nav-mai-routine">수시 관리 사항</h2>',
  409: '        <h2 data-i18n="nav-mai-tool-care">공구 관리</h2>',
  414: '        <h2 data-i18n="nav-mai-collet">콜렛 관리</h2>',
  435: '      <!-- MillFix 설치/ 기본 조작 -->',
  473: '        <h2 data-i18n="nav-mf-tool-list">툴 리스트 페이지</h2>',
  478: '        <h2 data-i18n="nav-mf-settings">설정 페이지</h2>',
  505: '        <h2 data-i18n="nav-mf-routine">수시 관리 사항</h2>',
  510: '        <h2 data-i18n="nav-mf-tool-care">공구 관리</h2>',
  515: '        <h2 data-i18n="nav-mf-collet">콜렛 관리</h2>',
  533: '        <h2 data-i18n="nav-rep-parts-guide">소모품/ 부품 교체 가이드</h2>',
  545: '        <h2 data-i18n="nav-rep-parts-guide">소모품/ 부품 교체 가이드</h2>',
  553: '        <p class="subtitle" data-i18n="section-tutorial-desc">단계별 사용 가이드 및 영상 튜토리얼입니다.</p>',
  555: '          <div class="img-placeholder">이미지 준비 중</div>',
  565: '          <div class="img-placeholder">이미지 준비 중</div>'
};

let count = 0;
for (const [lineIdx, newContent] of Object.entries(replacements)) {
  const idx = parseInt(lineIdx);
  if (idx < lines.length) {
    lines[idx] = newContent;
    count++;
  }
}

fs.writeFileSync(htmlPath, lines.join('\n'), 'utf8');
console.log(`Replaced ${count} lines in index.html (second pass)`);
