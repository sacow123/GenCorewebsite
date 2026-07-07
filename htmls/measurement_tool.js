/**
 * Measurement tool for marked image stages.
 * - Alt + drag: copies left/top/width/height percentages.
 * - Left click: copies left/top coordinate percentages.
 *
 * The tool only runs inside elements with data-measure-stage, so normal
 * menus, cards, and other sections are not affected.
 */
(function() {
  let isDrawing = false;
  let didDrag = false;
  let startX = 0;
  let startY = 0;
  let overlay = null;
  let container = null;
  let suppressNextClick = false;

  const style = document.createElement('style');
  style.innerHTML = `
    .mf-measurement-overlay {
      position: absolute;
      border: 2px dashed #00ffff;
      background: rgba(0, 255, 255, 0.2);
      pointer-events: none;
      z-index: 9999;
    }
    .mf-measurement-point {
      position: absolute;
      width: 14px;
      height: 14px;
      border: 2px solid #00ffff;
      border-radius: 50%;
      background: rgba(0, 255, 255, 0.35);
      transform: translate(-50%, -50%);
      pointer-events: none;
      z-index: 9999;
    }
    .mf-measurement-toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      max-width: min(520px, calc(100vw - 40px));
      background: #333;
      color: #fff;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      z-index: 10000;
      opacity: 1;
      transition: opacity 0.5s;
      white-space: nowrap;
    }
  `;
  document.head.appendChild(style);

  function findMeasureStage(target) {
    return target.closest('[data-measure-stage]');
  }

  function clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
  }

  function toPercent(value, size) {
    return ((value / size) * 100).toFixed(1);
  }

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'mf-measurement-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 500);
    }, 2200);
  }

  function copyResult(text) {
    console.log('=============================');
    console.log('Measurement result:');
    console.log(text);
    console.log('=============================');

    navigator.clipboard.writeText(text).then(() => {
      showToast('Copied: ' + text);
    }).catch(err => {
      console.error('Clipboard copy failed:', err);
      showToast('Clipboard copy failed. Check console.');
    });
  }

  document.addEventListener('mousedown', function(e) {
    if (!e.altKey || e.button !== 0) return;

    container = findMeasureStage(e.target);
    if (!container) return;

    e.preventDefault();
    isDrawing = true;
    didDrag = false;

    const rect = container.getBoundingClientRect();
    startX = clamp(e.clientX - rect.left, 0, rect.width);
    startY = clamp(e.clientY - rect.top, 0, rect.height);

    overlay = document.createElement('div');
    overlay.className = 'mf-measurement-overlay';
    overlay.style.left = startX + 'px';
    overlay.style.top = startY + 'px';
    overlay.style.width = '0px';
    overlay.style.height = '0px';
    container.appendChild(overlay);
  });

  document.addEventListener('mousemove', function(e) {
    if (!isDrawing || !overlay || !container) return;

    const rect = container.getBoundingClientRect();
    const currentX = clamp(e.clientX - rect.left, 0, rect.width);
    const currentY = clamp(e.clientY - rect.top, 0, rect.height);

    if (Math.abs(currentX - startX) > 2 || Math.abs(currentY - startY) > 2) {
      didDrag = true;
    }

    const left = Math.min(startX, currentX);
    const top = Math.min(startY, currentY);
    const width = Math.abs(currentX - startX);
    const height = Math.abs(currentY - startY);

    overlay.style.left = left + 'px';
    overlay.style.top = top + 'px';
    overlay.style.width = width + 'px';
    overlay.style.height = height + 'px';
  });

  document.addEventListener('mouseup', function() {
    if (!isDrawing || !overlay || !container) return;
    isDrawing = false;
    suppressNextClick = didDrag;

    const rect = container.getBoundingClientRect();
    const pxLeft = parseFloat(overlay.style.left);
    const pxTop = parseFloat(overlay.style.top);
    const pxWidth = parseFloat(overlay.style.width);
    const pxHeight = parseFloat(overlay.style.height);

    if (didDrag && pxWidth > 0 && pxHeight > 0) {
      const styleString =
        'style="left:' + toPercent(pxLeft, rect.width) +
        '%; top:' + toPercent(pxTop, rect.height) +
        '%; width:' + toPercent(pxWidth, rect.width) +
        '%; height:' + toPercent(pxHeight, rect.height) + '%;"';
      copyResult(styleString);
    }

    setTimeout(() => {
      if (overlay && overlay.parentNode) overlay.remove();
      overlay = null;
      container = null;
      didDrag = false;
    }, 500);
  });

  document.addEventListener('click', function(e) {
    if (suppressNextClick) {
      suppressNextClick = false;
      e.preventDefault();
      return;
    }

    if (e.altKey || e.button !== 0 || isDrawing) return;

    const stage = findMeasureStage(e.target);
    if (!stage) return;

    const rect = stage.getBoundingClientRect();
    const x = clamp(e.clientX - rect.left, 0, rect.width);
    const y = clamp(e.clientY - rect.top, 0, rect.height);
    const result = 'style="left:' + toPercent(x, rect.width) + '%; top:' + toPercent(y, rect.height) + '%;"';

    const point = document.createElement('div');
    point.className = 'mf-measurement-point';
    point.style.left = x + 'px';
    point.style.top = y + 'px';
    stage.appendChild(point);
    setTimeout(() => point.remove(), 800);

    copyResult(result);
  });
})();
