// Usage cards open in the normal page area, preserving their existing content.
(() => {
  const listId = 'sec-mf-hd-features';
  const list = document.getElementById(listId);
  const main = document.querySelector('.main-content');
  if (!list || !main) return;
  const keys = new Set([...list.querySelectorAll('[data-feature-key]')].map(card => card.dataset.featureKey));
  const page = document.createElement('section');
  page.id = 'hyperdent-feature-article';
  page.className = 'content-section template-detail-page';
  page.setAttribute('role', 'article');
  page.innerHTML = '<div class="template-detail-panel"><header class="template-detail-header"><h3 tabindex="-1"></h3><button type="button" class="template-detail-back"></button></header><div class="template-detail-body"></div></div>';
  main.append(page);
  const title = page.querySelector('h3');
  const body = page.querySelector('.template-detail-body');
  const back = page.querySelector('button');
  const labels = {ko:'목록으로', en:'Back to list', ja:'一覧に戻る', es:'Volver a la lista'};
  let origin, scroll = 0;
  function updateLabel() {
    back.textContent = '← ' + (labels[typeof currentLang === 'undefined' ? 'ko' : currentLang] || labels.en);
  }
  function show(key, push) {
    const hash = '#feature-' + key;
    if (push && location.hash !== hash) {
      origin = document.activeElement;
      scroll = main.scrollTop;
      history.pushState({featureArticle:true}, '', hash);
    }
    document.querySelectorAll('.content-section.active').forEach(el => el.classList.remove('active'));
    page.classList.add('active');
    document.querySelectorAll('.nav-item.active').forEach(el => el.classList.remove('active'));
    const nav = document.querySelector('.nav-item[data-section="' + listId + '"]');
    nav?.classList.add('active');
    let menu = nav?.closest('.sub-menu');
    while (menu) {
      menu.classList.add('open');
      menu.parentElement.classList.add('open');
      menu = menu.parentElement.closest('.sub-menu');
    }
    document.getElementById('feature-modal').style.display = 'none';
    updateLabel();
    main.scrollTop = 0;
    if (push) title.focus({preventScroll:true});
  }
  function showFeature(key, sourceTitle, sourceBody, push = true) {
    title.innerHTML = sourceTitle.innerHTML;
    body.replaceChildren(...sourceBody.childNodes);
    if (key === 'create-thread') {
      const warning = document.createElement('aside');
      warning.className = 'thread-design-warning';
      warning.setAttribute('role', 'note');
      warning.style.cssText = 'display:flex;align-items:flex-start;gap:12px;margin:0 0 24px;padding:18px 20px;border:1px solid #f59e0b;border-left:5px solid #f59e0b;border-radius:10px;background:#fffbeb;color:#92400e;font-weight:700;line-height:1.8;overflow-wrap:anywhere;';
      const fallback = 'Please design the area where the thread will be created as a cylinder.<br>hyperDENT cannot recognize a hole that has been designed with thread geometry.<br>Design the area where the thread will be created as a cylinder.';
      const lang = typeof currentLang === 'undefined' ? 'ko' : currentLang;
      const text = typeof getI18nText === 'function' ? getI18nText(lang, 'thread-guide-design-warning', fallback) : fallback;
      warning.innerHTML = '<span aria-hidden="true">⚠️</span><div data-i18n="thread-guide-design-warning" style="min-width:0;">' + text + '</div>';
      body.prepend(warning);
      const conditions = body.querySelector('[data-i18n="thread-guide-condition-20"]')?.closest('ul');
      if (conditions) {
        const specs = [
          ['M1.4','1.1','T28_M1.4TH_L06(P0.3)'],
          ['M1.6','1.25','T27_M1.6TH_L06(P0.35)'],
          ['M1.8','1.45','T26_M1.8TH_L06(P0.35)'],
          ['M2','1.6','T25_M2.0TH_L06(P0.4)'],
          ['M2.3','1.9','T25_M2.0TH_L06(P0.4)'],
          ['M2.6','2.1','T26_M2.6TH_L06(P0.45)'],
          ['M3.0','2.5','T27_M3.0TH_L06(P0.5)']
        ];
        const translated = (key, fallback) => typeof getI18nText === 'function' ? getI18nText(lang, key, fallback) : fallback;
        const labels = [['thread-guide-table-spec','Thread specification'],['thread-guide-table-hole','Hole diameter (mm)'],['thread-guide-table-tool','Tool used'],['thread-guide-table-version','Added in']];
        const container = document.createElement('div');
        container.className = 'thread-conditions-table';
        container.innerHTML = '<style>#hyperdent-feature-article .thread-conditions-table{width:100%;overflow-x:auto;margin:12px 0 20px}#hyperdent-feature-article .thread-conditions-table table{width:100%;border-collapse:collapse;text-align:left;font-size:15px;line-height:1.6;color:var(--text-color,#374151)}#hyperdent-feature-article .thread-conditions-table th,#hyperdent-feature-article .thread-conditions-table td{padding:12px 14px;border-bottom:1px solid #e5e7eb;vertical-align:middle}#hyperdent-feature-article .thread-conditions-table th{background:#f3f0fa;color:#5424d8;font-weight:700;white-space:nowrap}#hyperdent-feature-article .thread-conditions-table td:first-child,#hyperdent-feature-article .thread-conditions-table td:nth-child(2){white-space:nowrap}#hyperdent-feature-article .thread-conditions-table td:nth-child(3){overflow-wrap:anywhere;min-width:155px}#hyperdent-feature-article .thread-conditions-table .thread-added-badge{display:inline-block;padding:2px 7px;border-radius:5px;background:#f2ecff;color:#5424d8;font-size:12px;font-weight:700;white-space:nowrap}</style>' +
          '<table><thead><tr>' + labels.map(([key,fallback]) => '<th scope="col" data-i18n="' + key + '">' + translated(key,fallback) + '</th>').join('') + '</tr></thead><tbody>' +
          specs.map(([spec,hole,tool], index) => '<tr><td>ISO ' + spec + '</td><td>' + hole + '</td><td>' + tool.replace(/\(P[^)]*\)$/, '') + '</td><td>' + (index >= 4 ? '<span class="thread-added-badge" data-i18n="thread-guide-added-261030">' + translated('thread-guide-added-261030','Added in 261030') + '</span>' : '—') + '</td></tr>').join('') + '</tbody></table>';
        const toolNote = document.createElement('aside');
        toolNote.className = 'thread-tool-position-note';
        toolNote.setAttribute('role', 'note');
        toolNote.setAttribute('data-i18n', 'thread-guide-tool-position-note');
        toolNote.style.cssText = 'margin:0 0 24px;padding:14px 18px;border-left:4px solid #f59e0b;border-radius:8px;background:#fffbeb;color:#92400e;font-size:15px;line-height:1.8;overflow-wrap:anywhere;';
        toolNote.innerHTML = translated('thread-guide-tool-position-note', '<strong>⚠️ISO M1.6 and ISO M3.0 share tool position T27.<br>&nbsp;&nbsp;&nbsp;&nbsp;ISO M1.8 and ISO M2.6 share tool position T26.</strong><br>Check that the tool matches the thread specification to be machined before installing it.');
        conditions.replaceWith(container, toolNote);
      }
    }
    show(key, push);
  }
  function showGuide(push = true) {
    const modal = document.getElementById('screwchannel-category-guide-modal');
    if (!modal) return;
    modal.style.display = 'none';
    title.innerHTML = document.getElementById('screwchannel-category-guide-title').innerHTML;
    const frame = document.getElementById('screwchannel-category-guide-document');
    body.replaceChildren(frame);
    show('screw-channel-category', push);
  }
  back.addEventListener('click', () => {
    if (history.state?.featureArticle) history.back();
    else location.hash = listId;
  });
  function route() {
    if (location.hash === '#feature-screw-channel-category') showGuide(false);
    else if (!keys.has(location.hash.replace(/^#feature-/, ''))) {
      page.classList.remove('active');
      if (location.hash === '#' + listId) {
        list.classList.add('active');
        main.scrollTop = scroll;
        origin?.focus({preventScroll:true});
      }
      // Keep the guide frame available for reopening and language handoff.
      const frame = body.querySelector('#screwchannel-category-guide-document');
      if (frame) document.getElementById('screwchannel-category-guide-modal').append(frame);
      body.replaceChildren();
    }
  }
  list.querySelectorAll('.feature-card').forEach(card => {
    card.setAttribute('role', 'link');
    card.tabIndex = 0;
    if (card.tagName !== 'BUTTON' && !card.hasAttribute('data-guide-modal')) {
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); card.click(); }
      });
    }
  });
  window.FeatureArticleNavigation = {isFeature:key => keys.has(key), showFeature, showGuide};
  window.addEventListener('hashchange', route);
  window.addEventListener('gencore-language-changed', updateLabel);
  updateLabel();
  route();
})();
