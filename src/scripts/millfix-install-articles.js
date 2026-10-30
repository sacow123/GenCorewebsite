// Installation guides share the template article layout, with independent history.
(() => {
  const listId = 'sec-mf-hd-install';
  const list = document.getElementById(listId);
  const main = document.querySelector('.main-content');
  if (!list || !main) return;
  const featureKeys = new Set(['mf-hd-install-video', 'mf-hd-settings-video']);
  const page = document.createElement('section');
  page.id = 'millfix-install-article';
  page.className = 'content-section template-detail-page';
  page.setAttribute('role', 'article');
  page.innerHTML = '<div class="template-detail-panel"><header class="template-detail-header"><h3 tabindex="-1"></h3><button type="button" class="template-detail-back"></button></header><div class="template-detail-body"></div></div>';
  main.append(page);
  const title = page.querySelector('h3');
  const back = page.querySelector('button');
  const body = page.querySelector('.template-detail-body');
  let listScroll = 0, origin = null;
  const labels = {ko:'목록으로', en:'Back to list', ja:'一覧に戻る', es:'Volver a la lista'};
  function updateLabels() {
    const lang = typeof currentLang === 'undefined' ? 'ko' : currentLang;
    back.textContent = '← ' + (labels[lang] || labels.en);
  }
  function show(hash, push) {
    if (push && location.hash !== hash) {
      origin = document.activeElement;
      listScroll = main.scrollTop;
      history.pushState({millfixInstallArticle:true}, '', hash);
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
    updateLabels();
    main.scrollTop = 0;
    if (push) title.focus({preventScroll:true});
  }
  function showFeature(key, sourceTitle, sourceBody, push) {
    title.removeAttribute('data-i18n');
    title.innerHTML = sourceTitle.innerHTML;
    body.replaceChildren(...sourceBody.childNodes);
    show('#feature-' + key, push);
  }
  function showMachine(push = true) {
    title.setAttribute('data-i18n', 'machine-settings-title');
    title.innerHTML = document.getElementById('machine-settings-modal-title').innerHTML;
    const image = document.createElement('img');
    image.src = 'assets/images/hyperdent/machine-settings-millfix.webp';
    image.alt = 'MillFix hyperDENT machine settings';
    image.style.cssText = 'display:block;width:100%;height:auto;border:1px solid #cbd5e1;border-radius:8px';
    body.replaceChildren(image);
    show('#millfix-install-machine-settings', push);
  }
  back.addEventListener('click', () => {
    if (history.state?.millfixInstallArticle) history.back();
    else {
      history.replaceState(null, '', '#' + listId);
      restoreList();
    }
  });
  function restoreList() {
    page.classList.remove('active');
    list.classList.add('active');
    main.scrollTop = listScroll;
    origin?.focus({preventScroll:true});
    // Stop tutorial playback after leaving its article.
    body.replaceChildren();
  }
  function route() {
    if (location.hash === '#millfix-install-machine-settings') showMachine(false);
    else if (location.hash === '#' + listId) restoreList();
    else if (!featureKeys.has(location.hash.slice(9))) {
      page.classList.remove('active');
      body.replaceChildren();
    }
  }
  const originalMachine = window.openMachineSettingsModal;
  window.openMachineSettingsModal = function(machine) {
    if (machine === 'millfix') showMachine();
    else originalMachine.apply(this, arguments);
  };
  list.querySelectorAll('.feature-card[data-feature-key]').forEach(card => {
    card.setAttribute('role', 'link');
    card.tabIndex = 0;
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });
  });
  window.InstallArticleNavigation = {isFeature:key => featureKeys.has(key), showFeature};
  window.addEventListener('hashchange', route);
  window.addEventListener('gencore-language-changed', updateLabels);
  route();
})();
