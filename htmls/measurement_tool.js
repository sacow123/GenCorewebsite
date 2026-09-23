/* Temporary image-ratio measurement tool. It only affects images while enabled. */
(() => {
  // Keep this authoring-only helper out of every deployed site. It remains
  // available from a local preview server and when the HTML file is opened directly.
  const isLocalAuthoringEnvironment = location.protocol === 'file:'
    || ['localhost', '127.0.0.1', '[::1]'].includes(location.hostname);
  if (!isLocalAuthoringEnvironment) return;

  const PANEL_ID = 'gencore-image-measure-tool';
  let enabled = false, arrowMode = false, drag = null, arrowPress = null, arrowStart = null;
  let lockedResult = '', lockedImageLabel = '', marker = null, selection = null;
  let arrowStartMarker = null, arrowEndMarker = null, arrowLine = null;
  const clamp = (value, min, max) => Math.max(min, Math.min(value, max));
  const percent = (value, size) => ((value / size) * 100).toFixed(2);

  function isMeasureImage(image) {
    if (!(image instanceof HTMLImageElement) || !image.complete || !image.naturalWidth) return false;
    if (image.closest('.site-header, .sidebar, .nav-product-name, [data-measure-ignore]')) return false;
    const rect = image.getBoundingClientRect();
    return rect.width >= 32 && rect.height >= 32;
  }
  function getImage(event) {
    const image = event.target instanceof Element ? event.target.closest('img') : null;
    return isMeasureImage(image) ? image : null;
  }
  function pointFor(event, image) {
    const rect = image.getBoundingClientRect();
    const x = clamp(event.clientX - rect.left, 0, rect.width);
    const y = clamp(event.clientY - rect.top, 0, rect.height);
    return { rect, x, y, xPercent: percent(x, rect.width), yPercent: percent(y, rect.height) };
  }
  function pagePointFor(event) {
    const image = getImage(event);
    const bodyRect = document.body.getBoundingClientRect();
    const content = document.querySelector('main, .main-content, article') || document.body;
    const contentRect = content.getBoundingClientRect();
    const contentX = clamp(event.clientX - contentRect.left + content.scrollLeft, 0, Math.max(content.scrollWidth, content.clientWidth));
    const contentY = clamp(event.clientY - contentRect.top + content.scrollTop, 0, Math.max(content.scrollHeight, content.clientHeight));
    return {
      image, imagePoint: image ? pointFor(event, image) : null,
      x: event.clientX - bodyRect.left, y: event.clientY - bodyRect.top,
      pageXPercent: percent(contentX, Math.max(content.scrollWidth, content.clientWidth)),
      pageYPercent: percent(contentY, Math.max(content.scrollHeight, content.clientHeight))
    };
  }
  function imageLabel(image) {
    const source = image.currentSrc || image.getAttribute('src') || '';
    const filename = source.split('/').pop()?.split('?')[0] || '이름 없는 사진';
    const duplicates = [...document.images].filter(candidate => (candidate.currentSrc || candidate.getAttribute('src') || '') === source);
    const duplicateSuffix = duplicates.length > 1 ? `_${duplicates.indexOf(image) + 1}` : '';
    const namedFilename = duplicateSuffix ? filename.replace(/(\.[^.]+)?$/, `${duplicateSuffix}$1`) : filename;
    return image.alt ? `${image.alt} (${namedFilename})` : namedFilename;
  }
  function withImageName(image, coordinates) {
    return `사진: ${imageLabel(image)}\n${coordinates}`;
  }
  function arrowPointLabel(point) {
    return point.imagePoint
      ? `사진: ${imageLabel(point.image)} X:${point.imagePoint.xPercent}% Y:${point.imagePoint.yPercent}%`
      : `페이지 X:${point.pageXPercent}% Y:${point.pageYPercent}%`;
  }
  function setReadout(text, canCopy) {
    const panel = document.getElementById(PANEL_ID);
    const readout = panel?.querySelector('[data-measure-readout]');
    if (readout) readout.textContent = text;
    const copy = panel?.querySelector('[data-measure-copy]');
    if (copy) copy.disabled = !canCopy;
  }
  function setTarget(image) {
    const target = document.querySelector(`#${PANEL_ID} [data-measure-target]`);
    if (!target) return;
    lockedImageLabel = image ? imageLabel(image) : '';
    target.textContent = lockedImageLabel ? `대상 사진: ${lockedImageLabel}` : '대상 사진: 아직 선택하지 않았습니다.';
  }
  async function copyResult() {
    if (!lockedResult) return;
    try { await navigator.clipboard.writeText(lockedResult); setReadout(`${lockedResult} · 복사되었습니다.`, true); }
    catch { setReadout(`${lockedResult} · 복사에 실패했습니다.`, true); }
  }
  function clearArrowVisuals() {
    arrowStartMarker?.remove(); arrowEndMarker?.remove(); arrowLine?.remove();
    arrowStartMarker = null; arrowEndMarker = null; arrowLine = null;
  }
  function clearVisuals() {
    marker?.remove(); selection?.remove(); marker = null; selection = null;
    clearArrowVisuals(); arrowStart = null; arrowPress = null;
  }
  function visual(className, image) {
    const anchor = image.parentElement || image;
    if (getComputedStyle(anchor).position === 'static') anchor.style.position = 'relative';
    const element = document.createElement('span'); element.className = className; element.setAttribute('aria-hidden', 'true'); anchor.append(element); return element;
  }
  function imageOffset(image, anchor) {
    const imageRect = image.getBoundingClientRect(), anchorRect = anchor.getBoundingClientRect();
    return { left: imageRect.left - anchorRect.left + anchor.scrollLeft, top: imageRect.top - anchorRect.top + anchor.scrollTop };
  }
  function updateSelection() {
    if (!drag) return;
    const left = Math.min(drag.start.x, drag.current.x), top = Math.min(drag.start.y, drag.current.y);
    const width = Math.abs(drag.start.x - drag.current.x), height = Math.abs(drag.start.y - drag.current.y);
    selection ||= visual('gencore-measure-selection', drag.image);
    const offset = imageOffset(drag.image, selection.parentElement);
    Object.assign(selection.style, { left: `${offset.left + left}px`, top: `${offset.top + top}px`, width: `${width}px`, height: `${height}px` });
  }
  function positionVisual(element, image, point) {
    const offset = imageOffset(image, element.parentElement);
    element.style.left = `${offset.left + point.x}px`;
    element.style.top = `${offset.top + point.y}px`;
  }
  function pageVisual(className) {
    const element = document.createElement('span');
    element.className = className; element.setAttribute('aria-hidden', 'true'); document.body.append(element); return element;
  }
  function positionPageVisual(element, point) {
    element.style.left = `${point.x}px`; element.style.top = `${point.y}px`;
  }
  function setArrowStart(point) {
    clearVisuals();
    arrowStart = point;
    arrowStartMarker = pageVisual('gencore-measure-arrow-point gencore-measure-arrow-start');
    positionPageVisual(arrowStartMarker, point);
    lockedResult = '';
    setTarget(point.image);
    setReadout('화살표 끝점(꼭지점)을 페이지 어디에서든 한 번 더 클릭하세요.', false);
  }
  function completeArrow(end) {
    const start = arrowStart;
    if (!start) { setArrowStart(end); return; }
    arrowEndMarker = pageVisual('gencore-measure-arrow-point gencore-measure-arrow-end');
    positionPageVisual(arrowEndMarker, end);
    arrowLine = pageVisual('gencore-measure-arrow');
    const dx = end.x - start.x, dy = end.y - start.y;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    Object.assign(arrowLine.style, {
      left: `${start.x}px`, top: `${start.y}px`, width: `${Math.hypot(dx, dy)}px`,
      transform: `translateY(-50%) rotate(${angle}deg)`
    });
    lockedResult = `화살표 시작 ${arrowPointLabel(start)} → 끝(꼭지점) ${arrowPointLabel(end)} 방향:${angle.toFixed(2)}°`;
    arrowStart = null;
    setReadout(lockedResult, true);
  }
  function onPointerDown(event) {
    if (!enabled || event.button !== 0) return;
    if (arrowMode) {
      if (event.target instanceof Element && event.target.closest(`#${PANEL_ID}`)) return;
      event.preventDefault(); event.stopPropagation();
      arrowPress = { start: pagePointFor(event) };
      return;
    }
    const image = getImage(event); if (!image) return;
    event.preventDefault(); event.stopPropagation();
    clearVisuals();
    setTarget(image); drag = { image, start: pointFor(event, image), current: null, moved: false };
    drag.current = drag.start; image.setPointerCapture?.(event.pointerId);
  }
  function onPointerMove(event) {
    if (arrowPress) { event.preventDefault(); return; }
    if (!drag) return;
    event.preventDefault(); drag.current = pointFor(event, drag.image);
    drag.moved ||= Math.abs(drag.current.x - drag.start.x) > 3 || Math.abs(drag.current.y - drag.start.y) > 3;
    if (drag.moved) updateSelection();
  }
  function onPointerUp(event) {
    if (arrowPress) {
      event.preventDefault();
      const press = arrowPress, end = pagePointFor(event);
      arrowPress = null;
      if (Math.abs(end.x - press.start.x) > 5 || Math.abs(end.y - press.start.y) > 5) {
        setReadout('화살표는 드래그하지 말고 시작점과 끝점을 각각 클릭하세요.', Boolean(lockedResult));
        return;
      }
      if (!arrowStart) setArrowStart(end);
      else completeArrow(end);
      return;
    }
    if (!drag) return;
    event.preventDefault(); const end = pointFor(event, drag.image);
    if (drag.moved) {
      const left = Math.min(drag.start.x, end.x), top = Math.min(drag.start.y, end.y);
      const width = Math.abs(drag.start.x - end.x), height = Math.abs(drag.start.y - end.y);
      lockedResult = withImageName(drag.image, `시작 X:${percent(left, end.rect.width)}% Y:${percent(top, end.rect.height)}% 가로:${percent(width, end.rect.width)}% 세로:${percent(height, end.rect.height)}%`);
      drag.current = end; updateSelection();
    } else {
      marker ||= visual('gencore-measure-marker', drag.image);
      const offset = imageOffset(drag.image, marker.parentElement);
      marker.style.left = `${offset.left + end.x}px`; marker.style.top = `${offset.top + end.y}px`;
      lockedResult = withImageName(drag.image, `사진 X:${end.xPercent}% Y:${end.yPercent}%`);
    }
    drag = null; setReadout(lockedResult, true);
  }
  function updatePanelVisibility() {
    // The authoring tool is intentionally available on every local page and section.
    document.getElementById(PANEL_ID)?.removeAttribute('hidden');
  }
  function installInFrame(frame) {
    const addTool = () => {
      try {
        const frameDocument = frame.contentDocument;
        if (!frameDocument?.head || frameDocument.getElementById('gencore-image-measure-tool-script')) return;
        const script = frameDocument.createElement('script');
        script.id = 'gencore-image-measure-tool-script';
        script.src = new URL('htmls/measurement_tool.js', window.location.href).href;
        frameDocument.head.append(script);
      } catch {
        // A cross-origin document cannot receive the local-only authoring helper.
      }
    };
    frame.addEventListener('load', addTool);
    if (frame.contentDocument?.readyState === 'complete') addTool();
  }
  function installInFrames(root = document) {
    if (root instanceof HTMLIFrameElement) installInFrame(root);
    root.querySelectorAll?.('iframe').forEach(installInFrame);
  }
  function createPanel() {
    if (document.getElementById(PANEL_ID)) return;
    const style = document.createElement('style');
    style.textContent = `
      #${PANEL_ID}{position:fixed;right:24px;top:50%;z-index:10010;display:flex;align-items:center;flex-wrap:wrap;gap:9px;width:min(340px,calc(100vw - 32px));padding:11px 12px;border:1px dashed #a855f7;border-radius:10px;background:#faf5ff;box-shadow:0 8px 22px rgba(88,28,135,.28);transform:translateY(-50%);box-sizing:border-box}#${PANEL_ID}[hidden]{display:none}.gencore-measure-toggle,.gencore-measure-arrow-toggle,.gencore-measure-copy{border-radius:7px;padding:8px 11px;font:700 13px/1.2 inherit;cursor:pointer}.gencore-measure-toggle{border:0;background:#7e22ce;color:#fff}.gencore-measure-toggle[aria-pressed=true]{background:#4c1d95}.gencore-measure-arrow-toggle{border:1px solid #b45309;background:#fffbeb;color:#92400e}.gencore-measure-arrow-toggle[aria-pressed=true]{border-color:#92400e;background:#f59e0b;color:#451a03}.gencore-measure-copy{border:1px solid #a855f7;background:#fff;color:#6b21a8}.gencore-measure-copy:disabled{opacity:.45;cursor:not-allowed}.gencore-measure-readout,.gencore-measure-target{color:#581c87;font:500 12px/1.45 ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace}.gencore-measure-target{width:100%;overflow-wrap:anywhere}.gencore-measure-marker{position:absolute;z-index:10011;width:18px;height:18px;margin:-9px 0 0 -9px;border:2px solid #ef4444;border-radius:50%;background:rgba(255,255,255,.65);pointer-events:none}.gencore-measure-marker::before,.gencore-measure-marker::after{content:"";position:absolute;background:#ef4444}.gencore-measure-marker::before{width:1px;height:34px;left:7px;top:-10px}.gencore-measure-marker::after{width:34px;height:1px;left:-10px;top:7px}.gencore-measure-selection{position:absolute;z-index:10011;border:2px dashed #7e22ce;background:rgba(126,34,206,.14);border-radius:4px;pointer-events:none;box-sizing:border-box}.gencore-measure-arrow{position:absolute;z-index:10011;height:3px;border-radius:3px;background:#f59e0b;transform-origin:left center;pointer-events:none;box-shadow:0 0 0 2px rgba(255,255,255,.8)}.gencore-measure-arrow::after{content:"";position:absolute;right:-2px;top:50%;width:11px;height:11px;border-top:3px solid #f59e0b;border-right:3px solid #f59e0b;transform:translateY(-50%) rotate(45deg);box-sizing:border-box}.gencore-measure-arrow-point{position:absolute;z-index:10012;width:16px;height:16px;margin:-8px 0 0 -8px;border:2px solid #b45309;border-radius:50%;background:#fff7ed;pointer-events:none;box-sizing:border-box}.gencore-measure-arrow-point::after{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);font:700 10px/1 sans-serif;color:#78350f}.gencore-measure-arrow-start::after{content:"1"}.gencore-measure-arrow-end::after{content:"2"}@media(max-width:768px){#${PANEL_ID}{right:auto;left:50%;top:auto;bottom:18px;transform:translateX(-50%);width:min(760px,calc(100vw - 32px))}}
    `;
    document.head.append(style);
    const panel = document.createElement('aside'); panel.id = PANEL_ID;
    panel.innerHTML = '<button type="button" class="gencore-measure-toggle" aria-pressed="false">⌖ 비율 측정</button><button type="button" class="gencore-measure-arrow-toggle" aria-pressed="false">↗ 화살표 측정</button><button type="button" class="gencore-measure-copy" data-measure-copy disabled>비율 복사</button><span class="gencore-measure-readout" data-measure-readout>비율 측정 모드를 켠 뒤 사진을 클릭하거나 드래그하세요.</span><span class="gencore-measure-target" data-measure-target>대상 사진: 아직 선택하지 않았습니다.</span>';
    document.body.append(panel);
    panel.querySelector('.gencore-measure-toggle').addEventListener('click', (event) => {
      enabled = !enabled; arrowMode = false;
      panel.querySelector('.gencore-measure-arrow-toggle').setAttribute('aria-pressed', 'false');
      event.currentTarget.setAttribute('aria-pressed', String(enabled)); event.currentTarget.textContent = enabled ? '✕ 측정 종료' : '⌖ 비율 측정';
      if (!enabled) clearVisuals();
      setReadout(enabled ? '사진을 클릭하거나 드래그해 X% / Y% 값을 측정하세요.' : '비율 측정 모드를 켠 뒤 사진을 클릭하거나 드래그하세요.', Boolean(lockedResult));
    });
    panel.querySelector('.gencore-measure-arrow-toggle').addEventListener('click', (event) => {
      arrowMode = !arrowMode; enabled = true; clearVisuals();
      panel.querySelector('.gencore-measure-toggle').setAttribute('aria-pressed', 'true');
      panel.querySelector('.gencore-measure-toggle').textContent = '✕ 측정 종료';
      event.currentTarget.setAttribute('aria-pressed', String(arrowMode));
      setReadout(arrowMode ? '화살표 시작점을 사진에서 클릭하세요.' : '사진을 클릭하거나 드래그해 X% / Y% 값을 측정하세요.', Boolean(lockedResult));
    });
    panel.querySelector('[data-measure-copy]').addEventListener('click', copyResult); updatePanelVisibility();
  }
  function init() {
    createPanel(); document.addEventListener('pointerdown', onPointerDown, true); document.addEventListener('pointermove', onPointerMove, true); document.addEventListener('pointerup', onPointerUp, true);
    installInFrames();
    new MutationObserver((records) => {
      updatePanelVisibility();
      records.forEach(record => record.addedNodes.forEach(node => { if (node instanceof Element) installInFrames(node); }));
    }).observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ['class'] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true }); else init();
})();
