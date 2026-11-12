// One viewport-level viewer for article photos, including long embedded documents.
(() => {
  'use strict';
  if (window.GenCoreArticleZoom) return;
  const dialog = document.createElement('dialog');
  dialog.id = 'article-image-zoom';
  dialog.style.cssText = 'position:fixed;inset:0;width:100vw;height:100dvh;max-width:none;max-height:none;margin:0;padding:56px 16px 16px;border:0;background:rgba(9,17,27,.94);overflow:hidden;';
  dialog.innerHTML = '<button type="button" style="position:absolute;right:16px;top:10px;width:44px;height:44px;border:1px solid #ffffff66;border-radius:50%;background:#0004;color:#fff;font-size:28px;cursor:pointer">×</button><img alt="" style="display:block;width:100%;height:100%;object-fit:contain">';
  document.body.append(dialog);
  const enlarged = dialog.querySelector('img');
  const closeButton = dialog.querySelector('button');
  let scrolls = [], origin, overflow;
  const tracked = new WeakSet();
  const selector = '.content-section,main article,body>article,[role="dialog"],[id$="-modal"],dialog,.image-button,.cat2-image-open,.internal-image-card,.internal-images,.preinstall-requirements,.mai-blank-dimensions-images,#feature-modal-body,.mai-ui2-import figure.image,[data-image-zoom]';
  function captureScroll(photo) {
    const result = [], seen = new Set();
    let node = photo;
    while (node) {
      if (!seen.has(node) && (node.scrollHeight > node.clientHeight || node.scrollWidth > node.clientWidth)) {
        seen.add(node); result.push([node, node.scrollLeft, node.scrollTop]);
      }
      if (node.parentElement) node = node.parentElement;
      else {
        const doc = node.ownerDocument;
        if (doc?.scrollingElement && !seen.has(doc.scrollingElement)) {
          const scroller=doc.scrollingElement;seen.add(scroller);result.push([scroller,scroller.scrollLeft,scroller.scrollTop]);
        }
        try { node = doc?.defaultView?.frameElement; } catch { node = null; }
      }
    }
    return result;
  }
  function open(photo) {
    if (dialog.open) return;
    origin = photo.closest('button,a,[tabindex]') || photo;
    scrolls = captureScroll(photo);
    overflow = document.body.style.overflow;
    enlarged.src = photo.currentSrc || photo.src;
    enlarged.alt = photo.alt || '';
    const lang = document.documentElement.lang || 'ko';
    closeButton.setAttribute('aria-label', {ko:'확대 사진 닫기',en:'Close enlarged image',ja:'拡大画像を閉じる',es:'Cerrar imagen ampliada'}[lang] || 'Close enlarged image');
    document.body.style.overflow = 'hidden';
    dialog.showModal();
  }
  function close() { if (dialog.open) dialog.close(); }
  closeButton.addEventListener('click', close);
  dialog.addEventListener('click', event => { if (event.target === dialog) close(); });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = overflow || '';
    enlarged.removeAttribute('src');
    origin?.focus?.({preventScroll:true});
    scrolls.forEach(([node,x,y]) => { node.scrollLeft=x;node.scrollTop=y; });
    origin=null;scrolls=[];
  });
  function bind(doc) {
    if (!doc || tracked.has(doc)) return;
    tracked.add(doc);
    function activate(event) {
      if (event.type === 'keydown' && !['Enter',' '].includes(event.key)) return;
      if (doc.documentElement.dataset.gencoreMeasureEnabled === 'true') return;
      const target = event.target;
      if (!target.closest || target.closest('#article-image-zoom,#screw-guide-image-zoom,#mai-template-image-viewer,.cat2-lightbox,.hyperdent-image-lightbox,.mai-ui2-image-lightbox,#faq-image-lightbox')) return;
      const photo = target.closest('img') || target.closest('.image-button,.cat2-image-open,[data-image-zoom],.mai-ui2-import figure.image a')?.querySelector('img');
      if (!photo || !photo.src) return;
      if (/\/(?:brand|icons)\//i.test(photo.src) || photo.alt === 'icon') return;
      const zoomCursor = doc.defaultView.getComputedStyle(photo).cursor === 'zoom-in';
      const embeddedArticle = doc !== document && photo.closest('main,article');
      if (!photo.closest(selector) && !zoomCursor && !embeddedArticle) return;
      const link = photo.closest('a[href]');
      if (link && !/\.(?:webp|png|jpe?g|gif|svg)(?:[?#]|$)/i.test(link.getAttribute('href'))) return;
      // Linked navigation and hotspot controls retain their original actions.
      if (photo.closest('.mf-hotspot,.mf-callout,[data-hotspot],.parts-card,.feature-card')) return;
      event.preventDefault();event.stopImmediatePropagation();open(photo);
    }
    doc.addEventListener('click', activate, true);
    doc.addEventListener('keydown', activate, true);
    function bindFrame(frame) {
      try { bind(frame.contentDocument); } catch { /* Third-party video frames do not contain article photos. */ }
    }
    doc.addEventListener('load', event => { if (event.target.tagName === 'IFRAME') bindFrame(event.target); }, true);
    doc.querySelectorAll('iframe').forEach(bindFrame);
    new MutationObserver(records => records.forEach(record => record.addedNodes.forEach(node => {
      if (node.nodeType !== 1) return;
      if (node.tagName === 'IFRAME') bindFrame(node);
      node.querySelectorAll?.('iframe').forEach(bindFrame);
    }))).observe(doc.documentElement,{childList:true,subtree:true});
  }
  window.GenCoreArticleZoom = {open,close};
  bind(document);
  window.addEventListener('hashchange',close);
})();
