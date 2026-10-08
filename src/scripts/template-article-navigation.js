// Template details use the normal content area and browser history.
(() => {
  const views = new Map();
  const main = document.querySelector('.main-content');
  const labels = { ko: '목록으로', en: 'Back to list', ja: '一覧に戻る', es: 'Volver a la lista' };
  const lang = () => typeof currentLang === 'undefined' ? 'ko' : currentLang;
  function activateList(view) {
    document.querySelectorAll('.content-section.active').forEach(el => el.classList.remove('active'));
    document.getElementById(view.listId)?.classList.add('active');
    if (main) main.scrollTop = view.listScroll || 0;
    view.backButton.blur();
    view.origin?.focus({ preventScroll: true });
  }
  function markNavigation(view) {
    document.querySelectorAll('.nav-item.active').forEach(el => el.classList.remove('active'));
    const item = document.querySelector('.nav-item[data-section="' + view.listId + '"]');
    item?.classList.add('active');
    let parent = item?.closest('.sub-menu');
    while (parent) {
      parent.classList.add('open');
      parent.parentElement.classList.add('open');
      parent = parent.parentElement.closest('.sub-menu');
    }
  }
  function register(product, view) {
    view.root.removeAttribute('style');
    view.root.removeAttribute('hidden');
    view.root.className = 'content-section template-detail-page';
    view.root.setAttribute('role', 'article');
    const panel = view.root.firstElementChild;
    panel.removeAttribute('style');
    panel.removeAttribute('role');
    panel.removeAttribute('aria-modal');
    panel.className = 'template-detail-panel';
    const header = view.title.parentElement;
    header.removeAttribute('style');
    header.className = 'template-detail-header';
    view.title.removeAttribute('style');
    view.title.tabIndex = -1;
    view.backButton.removeAttribute('style');
    view.backButton.className = 'template-detail-back';
    view.body.removeAttribute('style');
    view.body.className = 'template-detail-body';
    main.append(view.root);
    views.set(product, view);
    updateLabels();
  }
  function updateLabels() {
    for (const view of views.values()) {
      view.backButton.textContent = '← ' + (labels[lang()] || labels.en);
      view.backButton.setAttribute('aria-label', labels[lang()] || labels.en);
    }
  }
  function show(product, title, push = false) {
    const view = views.get(product);
    if (!view) return;
    const hash = (product === 'mai' ? '#mai-template-' : '#template-') + encodeURIComponent(title);
    if (push && location.hash !== hash) {
      view.origin = document.activeElement;
      view.listScroll = main?.scrollTop || 0;
      history.pushState({ templateArticle: product, title }, '', hash);
    }
    document.querySelectorAll('.content-section.active').forEach(el => el.classList.remove('active'));
    view.root.classList.add('active');
    view.root.style.removeProperty('display');
    markNavigation(view);
    updateLabels();
    if (main) main.scrollTop = 0;
    if (push) view.title.focus({ preventScroll: true });
  }
  function back(product) {
    const view = views.get(product);
    if (history.state?.templateArticle === product) history.back();
    else {
      history.replaceState(null, '', '#' + view.listId);
      activateList(view);
      markNavigation(view);
    }
  }
  window.addEventListener('hashchange', () => {
    for (const view of views.values()) {
      if (location.hash === '#' + view.listId) activateList(view);
    }
  });
  window.addEventListener('gencore-language-changed', updateLabels);
  window.TemplateArticleNavigation = { register, show, back, updateLabels };
  const millfixRoot = document.getElementById('template-modal');
  if (millfixRoot) register('mf', {
    root: millfixRoot,
    title: document.getElementById('template-modal-title'),
    backButton: document.getElementById('template-modal-close'),
    body: document.getElementById('template-modal-body'),
    listId: 'sec-mf-hd-dbconfig'
  });
})();
