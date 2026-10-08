(() => {
  'use strict';
  const section = document.getElementById('sec-mai-hd-settings-db');
  const records = [...(window.MaiCoCrTemplates || []), ...(window.MaiGlassTemplates || []), ...(window.MaiHybridTemplates || []), ...(window.MaiPeekTemplates || []), ...(window.MaiPmmaTemplates || []), ...(window.MaiBatchTemplates || [])];
  if (!section || !records.length) return;
  const copy = {
    ko: { intro: '소재별 포함 템플릿 목록입니다.', material: '소재', prosthesis: '보철물 종류', all: '전체', filters: '템플릿 필터', conditions: '사용 조건', adjustable: '조정 가능 항목', uda: '사용자 정의 영역 (UDA)', tools: '공구', basic: '기본 사용 공구', basicHint: '항상 사용', optional: '조건부 사용 공구', optionalHint: '조건에 따라 사용', close: '닫기' },
    en: { intro: 'Templates included by material.', material: 'Material', prosthesis: 'Prosthesis type', all: 'All', filters: 'Template filters', conditions: 'WHEN TO USE', adjustable: 'ADJUSTABLE', uda: 'USER-DEFINED AREA (UDA)', tools: 'TOOLS', basic: 'Basic tools', basicHint: 'Always used', optional: 'Conditional tools', optionalHint: 'Used when applicable', close: 'Close' },
    ja: { intro: '素材別の収録テンプレート一覧です。', material: '素材', prosthesis: '補綴物の種類', all: 'すべて', filters: 'テンプレートフィルター', conditions: '使用条件', adjustable: '調整可能な項目', uda: 'ユーザー定義領域 (UDA)', tools: '工具', basic: '基本使用工具', basicHint: '常に使用', optional: '条件付き使用工具', optionalHint: '条件に応じて使用', close: '閉じる' }
  };
  const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
  const language = () => typeof currentLang !== 'undefined' && copy[currentLang] ? currentLang : 'en';
  const imageCopy = {
    ko: { open: '사진 확대', title: '확대 사진', close: '확대 사진 닫기' },
    en: { open: 'Enlarge photo', title: 'Enlarged photo', close: 'Close enlarged photo' },
    ja: { open: '写真を拡大', title: '拡大写真', close: '拡大写真を閉じる' }
  };
  const boundaryImageCopy = {
    ko: { open: '사진으로 보기', close: '사진 닫기', offset: '증분식 경계 옵셋', angle: '증분식 경계 각도', note: ["만약 계산중에 '경계 옵셋이나 경계각이 너무 적음'과 같은 에러가 발생한다면", '해당 수치들을 조금 늘려 다시 시도해보세요.'] },
    en: { open: 'View image', close: 'Close image', offset: 'Incremental Boundary offset', angle: 'Incremental Boundary angle', note: ["If an error such as 'boundary offset or angle is too small' occurs during calculation,", 'increase these values slightly and try again.'] },
    ja: { open: '画像を見る', close: '画像を閉じる', offset: '増分境界オフセット', angle: '増分境界角度', note: ['計算中に「境界オフセットまたは角度が小さすぎる」などのエラーが発生した場合は、', 'これらの値を少し大きくして再試行してください。'] }
  };
  let family = '', type = '', selectedMaterial = '', activeRecord = null;
  const icons = { Abutment: 'abutment', Crown: 'crown', Bridge: 'bridge', Coping: 'coping', 'Inlay/Onlay': 'inlay-onlay', 'Over Structure': 'assets/images/sec-mf-Tutorials/overstructure_icon.webp', 'Denture & Frame': 'denture-frame', Other: null };
  const extraFamilyCopy = {
    ko: { Other: '기타', Connector: '커넥터', Interface: '인터페이스', 'Screw Head (T-cut)': '스크류 헤드 (T-cut)', 'Screw Hole Finishing (expansion)': '스크류 홀 정삭 (확장)', 'Userdefined areas': '사용자 정의 영역 확인' },
    en: { Other: 'Other', Connector: 'Connector', Interface: 'Interface', 'Screw Head (T-cut)': 'Screw Head (T-cut)', 'Screw Hole Finishing (expansion)': 'Screw Hole Finishing (expansion)', 'Userdefined areas': 'User-defined area check' },
    ja: { Other: 'その他', Connector: 'コネクター', Interface: 'インターフェース', 'Screw Head (T-cut)': 'スクリューヘッド (T-cut)', 'Screw Hole Finishing (expansion)': 'スクリューホール仕上げ（拡張）', 'Userdefined areas': 'ユーザー定義領域の確認' }
  };
  const modal = document.createElement('div');
  modal.id = 'mai-template-modal';
  modal.innerHTML = '<div><header><h3 id="mai-template-title"></h3><button type="button" class="mai-template-close"></button></header><div class="mai-template-body"></div></div>';
  const title = modal.querySelector('h3'), close = modal.querySelector('button'), body = modal.querySelector('.mai-template-body');
  window.TemplateArticleNavigation.register('mai', { root: modal, title, backButton: close, body, listId: section.id });
  const imageViewer = document.createElement('dialog');
  imageViewer.id = 'mai-template-image-viewer';
  imageViewer.innerHTML = '<button type="button" class="mai-image-close">&times;</button><div class="mai-image-content"><img alt=""></div>';
  document.body.append(imageViewer);
  const enlargedImage = imageViewer.querySelector('img'), imageClose = imageViewer.querySelector('button');
  let viewingSource = '';
  function updateImageLabels() {
    const labels = imageCopy[language()];
    imageViewer.setAttribute('aria-label', labels.title);
    imageClose.setAttribute('aria-label', labels.close);
    if (viewingSource) {
      const source = body.querySelector('img[src="' + viewingSource + '"]');
      if (source) enlargedImage.alt = source.alt;
    }
  }
  imageClose.addEventListener('click', () => imageViewer.close());
  imageViewer.addEventListener('click', event => {
    if (event.target !== imageViewer) return;
    const bounds = imageViewer.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) imageViewer.close();
  });
  imageViewer.addEventListener('close', () => { enlargedImage.removeAttribute('src'); enlargedImage.alt = ''; viewingSource = ''; });
  body.addEventListener('click', event => {
    const trigger = event.target.closest('[data-mai-image]');
    if (!trigger) return;
    const photo = trigger.querySelector('img');
    viewingSource = photo.getAttribute('src');
    enlargedImage.src = photo.currentSrc || photo.src;
    enlargedImage.alt = photo.alt;
    imageViewer.classList.toggle('is-tool', trigger.classList.contains('mai-template-tool-photo'));
    updateImageLabels();
    imageViewer.showModal();
  });
  function filterButton(label, active, action) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'dbconfig-filter-button' + (active ? ' is-active' : '');
    button.textContent = label;
    button.setAttribute('aria-pressed', String(active));
    button.addEventListener('click', action);
    return button;
  }
  function renderFilters() {
    const c = copy[language()];
    section.querySelector('.mai-db-intro').textContent = c.intro;
    section.querySelector('[data-mai-label="material"]').textContent = c.material;
    section.querySelector('[data-mai-label="prosthesis"]').textContent = c.prosthesis;
    section.querySelector('.dbconfig-filter-panel').setAttribute('aria-label', c.filters);
    const materials = section.querySelector('.mai-material-filters');
    materials.replaceChildren(...['', ...new Set(records.map(r => r.material))].map(value => filterButton(value || c.all, selectedMaterial === value, () => { selectedMaterial = value; family = type = ''; renderFilters(); })));
    const materialRecords = records.filter(r => !selectedMaterial || r.material === selectedMaterial);
    const families = section.querySelector('.dbconfig-prosthesis-types');
    families.replaceChildren(...Object.keys(icons).filter(value => materialRecords.some(r => r.family === value)).map(value => {
      const label = extraFamilyCopy[language()][value] || value;
      const button = filterButton(label, family === value, () => { family = family === value ? '' : value; type = ''; renderFilters(); });
      button.className = 'dbconfig-prosthesis-type' + (family === value ? ' is-active' : '');
      const icon = !icons[value] ? '' : icons[value].startsWith('assets/') ? icons[value] : 'assets/images/dbconfig-filter-icons/' + icons[value] + '-purple.webp';
      button.innerHTML = '<span class="dbconfig-prosthesis-icon">' + (icon ? '<img src="' + icon + '" alt="">' : '') + '</span><span>' + escape(label) + '</span>';
      return button;
    }));
    const details = section.querySelector('.dbconfig-prosthesis-detail');
    details.hidden = !family;
    const types = [...new Set(materialRecords.filter(r => r.family === family).map(r => r.type))];
    const dentureLabels = { 'Denture teeth': 'Denture teeth', 'Flexible denture': 'flexible', 'Full denture': 'full', 'Partial Frame': 'partial frame' };
    details.replaceChildren(...['', ...types].map(value => filterButton(value ? (family === 'Denture & Frame' ? dentureLabels[value] || value : family === 'Other' ? extraFamilyCopy[language()][value] || value : value) : c.all, type === value, () => { type = value; renderFilters(); })));
    const visible = materialRecords.filter(r => (!family || r.family === family) && (!type || r.type === type));
    section.querySelector('.mai-template-groups').replaceChildren(...[...new Set(visible.map(r => r.material))].map(material => {
      const group = document.createElement('div'), heading = document.createElement('h4'), list = document.createElement('ul');
      group.className = 'mai-template-group'; heading.textContent = material; list.className = 'card-list mai-template-list';
      list.replaceChildren(...visible.filter(r => r.material === material).map(record => {
        const li = document.createElement('li'), button = document.createElement('button');
        button.type = 'button'; button.textContent = record.title; button.dataset.maiTemplate = record.title;
        button.addEventListener('click', () => open(record)); li.append(button); return li;
      }));
      group.append(heading, list); return group;
    }));
    requestAnimationFrame(updateConnector);
  }
  function updateConnector() {
    const selected = section.querySelector('.dbconfig-prosthesis-type.is-active');
    const detail = section.querySelector('.dbconfig-prosthesis-detail');
    if (!selected || detail.hidden) return;
    const a = selected.getBoundingClientRect(), b = detail.getBoundingClientRect();
    detail.style.setProperty('--dbconfig-detail-connector-x', (a.left + a.width / 2 - b.left) + 'px');
  }
  const listMarkup = items => '<ul>' + items.map(item => '<li>' + escape(item[language()]) + '</li>').join('') + '</ul>';
  const cardSection = (label, content) => '<section class="hybrid-card-section"><h4><span aria-hidden="true"></span>' + escape(label) + '</h4>' + content + '</section>';
  function renderDetail() {
    const record = activeRecord, lang = language(), c = copy[lang];
    title.textContent = record.title;
    window.TemplateArticleNavigation.updateLabels();
    function toolsMarkup(optional) {
      const tools = record.tools.filter(t => t.optional === optional);
      if (!tools.length) return '';
      return '<p class="hybrid-tool-group">' + (optional ? c.optional : c.basic) + '<small>' + (optional ? c.optionalHint : c.basicHint) + '</small></p><div class="hybrid-tool-grid ' + (optional ? 'conditional' : 'basic') + '">' + tools.map(t => '<div class="hybrid-tool' + (optional ? ' is-conditional' : '') + '">' + (t.id && t.name ? '<button type="button" data-mai-image class="mai-template-tool-photo" aria-label="' + escape(imageCopy[lang].open + ': ' + t.id + ' ' + t.name) + '"><img loading="lazy" src="assets/images/sec-mai-tools/tool-list/t' + (t.imageId || t.id).slice(1).padStart(2, '0') + '.webp" alt="' + escape(t.id + ' ' + t.name) + '"></button>' : '') + '<strong>' + escape(t.id) + '</strong><em>' + escape(t.name) + '</em>' + t.comments.map(comment => '<small>' + escape(comment[lang]) + '</small>').join('') + '</div>').join('') + '</div>';
    }
    const illustrations = (process = '') => {
      const images = (record.images || []).filter(img => (img.process || '') === process);
      if (!images.length) return '';
      if (process === 'General settings') {
        const labels = boundaryImageCopy[lang];
        const src = 'assets/images/sec-mf-Dbconfig/' + (lang === 'ko' ? 'Boundaryoffsetangle_ko.webp' : 'Boundaryoffsetangle.webp');
        return '<details class="hybrid-boundary-image"><summary><span class="hybrid-boundary-image__open">' + labels.open + '</span><span class="hybrid-boundary-image__close">' + labels.close + '</span></summary><img src="' + src + '" alt="' + escape(labels.offset + ' / ' + labels.angle) + '" loading="lazy"></details>';
      }
      const photos = '<div class="mai-template-illustrations">' + images.map(img => '<button type="button" data-mai-image aria-label="' + escape(imageCopy[lang].open + ': ' + img.alt[lang]) + '"><img loading="lazy" src="' + escape(img.src) + '" alt="' + escape(img.alt[lang]) + '"></button>').join('') + '</div>';
      return photos;
    };
    const processDescriptions = process => {
      if (process.title !== 'General settings' || record.material !== 'Hybrid Ceramic') return listMarkup(process.descriptions);
      const labels = boundaryImageCopy[lang];
      return '<ul><li>' + escape(labels.offset) + '</li><li>' + escape(labels.angle) + '</li></ul><p class="hybrid-adjustment-note"><strong>※</strong> ' + labels.note.map(escape).join('<br>') + '</p>';
    };
    body.innerHTML = window.GenCoreMaterialTemplateCard.styles() + '<article class="hybrid-template-card" lang="' + lang + '"><span class="hybrid-template-card__tag">M AI TEMPLATE</span><h3>' + escape(record.material) + '</h3><p class="hybrid-template-card__subtitle">' + escape((record.subtitle || record.title.slice(record.material.length + 1)).replace(/_/g, ' · ')) + '</p>' + cardSection(c.conditions, listMarkup(record.conditions) + illustrations()) + (record.processes.length ? cardSection(c.adjustable, record.processes.map(p => '<div class="hybrid-adjustment-group"><h5>' + escape(p.titleText?.[lang] || p.title) + '</h5>' + processDescriptions(p) + illustrations(p.title) + '</div>').join('')) : '') + (record.uda.length ? cardSection(c.uda, listMarkup(record.uda)) : '') + ((record.interfaces || []).length ? cardSection({ko:'임플란트 인터페이스 벽',en:'Implant interface walls',ja:'インプラントインターフェースの壁'}[lang], listMarkup(record.interfaces)) : '') + (record.tools.length ? '<section class="hybrid-tools"><h4><span aria-hidden="true"></span>' + c.tools + '</h4>' + toolsMarkup(false) + toolsMarkup(true) + '</section>' : '') + '</article>';
  }
  function open(record, push = true) {
    activeRecord = record; renderDetail();
    window.TemplateArticleNavigation.show('mai', record.title, push);
  }
  function hide() {
    window.TemplateArticleNavigation.back('mai');
  }
  close.addEventListener('click', hide);
  window.addEventListener('gencore-language-changed', () => { renderFilters(); if (activeRecord && modal.classList.contains('active')) renderDetail(); updateImageLabels(); });
  window.addEventListener('hashchange', () => { if (imageViewer.open) imageViewer.close(); });
  window.addEventListener('resize', updateConnector);
  renderFilters();
  function route() {
    if (!location.hash.startsWith('#mai-template-')) return;
    const record = records.find(r => r.title === decodeURIComponent(location.hash.slice(14)));
    if (record) open(record, false);
  }
  window.addEventListener('hashchange', route);
  route();
})();
