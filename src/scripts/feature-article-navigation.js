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
