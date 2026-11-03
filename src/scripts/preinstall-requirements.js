// Shared attachment for the two installation prerequisite sections only.
(() => {
  const labels = {
    ko: ['설치 전 확인 사항', '클릭하여 펼치기', '클릭하여 접기', '설치 전 확인 사항 안내 이미지'],
    en: ['Pre-installation checklist', 'Click to expand', 'Click to collapse', 'Pre-installation requirements guide'],
    ja: ['設置前の確認事項', 'クリックして開く', 'クリックして閉じる', '設置前の要件ガイド'],
    es: ['Comprobaciones previas a la instalación', 'Haga clic para desplegar', 'Haga clic para contraer', 'Guía de requisitos previos a la instalación']
  };
  const style = document.createElement('style');
  style.textContent = `
    .preinstall-requirements { margin: 0 0 24px; border: 1px solid #fecaca; border-radius: 10px; background: #fff; overflow: hidden; }
    .preinstall-requirements > summary { display: flex; align-items: center; flex-wrap: wrap; gap: 8px 12px; padding: 16px 20px; background: #fff7f7; color: #dc2626; font-size: 17pt; font-weight: 700; line-height: 1.5; cursor: pointer; list-style: none; }
    .preinstall-requirements > summary::-webkit-details-marker { display: none; }
    .preinstall-requirements > summary::before { content: '▶'; font-size: 13px; }
    .preinstall-requirements[open] > summary::before { content: '▼'; }
    .preinstall-requirements > summary:focus-visible { outline: 3px solid #6366f1; outline-offset: -3px; }
    .preinstall-requirements .preinstall-hint { margin-left: auto; color: #b91c1c; font-size: 13px; font-weight: 500; }
    .preinstall-requirements img { display: block; width: 100%; height: auto; cursor: zoom-in; }
    .preinstall-requirements img:focus-visible { outline: 3px solid #6366f1; outline-offset: -3px; }
    .preinstall-zoom { position: fixed; inset: 0; margin: auto; width: min(96vw, 1540px); max-width: 96vw; max-height: 92vh; padding: 0; border: 0; border-radius: 12px; overflow: auto; background: white; }
    .preinstall-zoom::backdrop { background: rgba(15,23,42,.8); }
    .preinstall-zoom-header { position: sticky; top: 0; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 20px; background: #fff; border-bottom: 1px solid #e2e8f0; z-index: 1; }
    .preinstall-zoom-header strong { color: #dc2626; }
    .preinstall-zoom-close { cursor: pointer; padding: 8px 14px; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc; color: #334155; font: inherit; }
    .preinstall-zoom > img { display: block; width: 100%; height: auto; }
    body:has(.preinstall-zoom[open]) { overflow: hidden; }
    @media(max-width: 640px) { .preinstall-requirements > summary { padding: 14px 12px; } }
  `;
  document.head.append(style);
  const zoomLabels = {
    ko: ['클릭하여 확대', '닫기'], en: ['Click to enlarge', 'Close'],
    ja: ['クリックして拡大', '閉じる'], es: ['Haga clic para ampliar', 'Cerrar']
  };
  const getLang = () => typeof currentLang !== 'undefined' ? currentLang : document.documentElement.lang || 'ko';
  const dialog = document.createElement('dialog');
  dialog.className = 'preinstall-zoom';
  const header = document.createElement('div');
  header.className = 'preinstall-zoom-header';
  const zoomTitle = document.createElement('strong');
  zoomTitle.id = 'preinstall-zoom-title';
  dialog.setAttribute('aria-labelledby', zoomTitle.id);
  const closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'preinstall-zoom-close';
  const zoomImage = document.createElement('img');
  header.append(zoomTitle, closeButton);
  dialog.append(header, zoomImage);
  document.body.append(dialog);
  let trigger = null;
  const closeZoom = () => dialog.close();
  closeButton.addEventListener('click', closeZoom);
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeZoom();
  });
  dialog.addEventListener('close', () => {
    zoomImage.removeAttribute('src');
    if (trigger?.isConnected) trigger.focus({ preventScroll: true });
  });
  const openZoom = image => {
    const lang = getLang();
    trigger = image;
    zoomTitle.textContent = (labels[lang] || labels.en)[0];
    closeButton.textContent = '✕ ' + (zoomLabels[lang] || zoomLabels.en)[1];
    zoomImage.src = image.currentSrc || image.src;
    zoomImage.alt = image.alt;
    dialog.showModal();
    dialog.scrollTop = 0;
  };
  document.addEventListener('click', event => {
    const image = event.target.closest('.preinstall-requirements img');
    if (image) openZoom(image);
  });
  document.addEventListener('keydown', event => {
    if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('.preinstall-requirements img')) {
      event.preventDefault();
      openZoom(event.target);
    }
  });
  const attachments = [];
  for (const id of ['sec-mai-precheck', 'sec-mf-precheck']) {
    const section = document.getElementById(id);
    if (!section) continue;
    const details = document.createElement('details');
    details.className = 'preinstall-requirements';
    const summary = document.createElement('summary');
    const title = document.createElement('span');
    const hint = document.createElement('span');
    hint.className = 'preinstall-hint';
    const image = document.createElement('img');
    image.width = 1489;
    image.height = 2105;
    image.loading = 'lazy';
    summary.append(title, hint);
    details.append(summary, image);
    const subtitle = section.querySelector('.subtitle');
    if (subtitle) subtitle.after(details);
    else section.prepend(details);
    const update = () => {
      // Language switching restores section HTML, replacing the original nodes.
      const live = document.getElementById(id)?.querySelector('.preinstall-requirements');
      if (!live) return;
      const title = live.querySelector('summary > span');
      const hint = live.querySelector('.preinstall-hint');
      const image = live.querySelector('img');
      const lang = typeof currentLang !== 'undefined' ? currentLang : document.documentElement.lang || 'ko';
      const text = labels[lang] || labels.en;
      if (title.textContent !== text[0]) title.textContent = text[0];
      if (hint.textContent !== text[live.open ? 2 : 1]) hint.textContent = text[live.open ? 2 : 1];
      if (image.alt !== text[3]) image.alt = text[3];
      image.tabIndex = 0;
      image.setAttribute('role', 'button');
      image.setAttribute('aria-haspopup', 'dialog');
      const zoomHint = (zoomLabels[lang] || zoomLabels.en)[0];
      image.title = zoomHint;
      image.setAttribute('aria-label', `${text[3]} — ${zoomHint}`);
      const src = `assets/images/preinstall-requirements/${lang === 'ko' ? 'ko' : 'en'}-1.webp`;
      if (image.getAttribute('src') !== src) image.src = src;
    };
    attachments.push(update);
    update();
  }
  window.addEventListener('gencore-language-changed', () => {
    if (dialog.open) closeZoom();
    attachments.forEach(update => update());
  });
  document.addEventListener('toggle', event => {
    if (event.target.matches('.preinstall-requirements')) attachments.forEach(update => update());
  }, true);
  const main = document.querySelector('.main-content');
  if (main) new MutationObserver(records => {
    if (records.some(record => record.target.matches?.('#sec-mai-precheck, #sec-mf-precheck')))
      attachments.forEach(update => update());
  })
    .observe(main, { childList: true, subtree: true });
})();
