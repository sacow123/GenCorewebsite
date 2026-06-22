/**
 * MillFix Alt+Drag Measurement Tool
 * Alt 키를 누른 상태로 드래그하여 % 기반의 좌표(left, top, width, height)를 추출합니다.
 */

(function() {
  let isDrawing = false;
  let startX = 0;
  let startY = 0;
  let overlay = null;
  let container = null;

  // 스타일 주입
  const style = document.createElement('style');
  style.innerHTML = `
    .mf-measurement-overlay {
      position: absolute;
      border: 2px dashed #00ffff;
      background: rgba(0, 255, 255, 0.2);
      pointer-events: none;
      z-index: 9999;
    }
    .mf-measurement-toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #333;
      color: #fff;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      z-index: 10000;
      opacity: 1;
      transition: opacity 0.5s;
    }
  `;
  document.head.appendChild(style);

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'mf-measurement-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 500);
    }, 2000);
  }

  document.addEventListener('mousedown', function(e) {
    if (!e.altKey) return;
    
    // 가장 가까운 content-card의 내부 상대 컨테이너 찾기
    const contentCard = e.target.closest('.content-card');
    if (contentCard) {
      container = contentCard.querySelector('div[style*="position:relative"]') || contentCard.querySelector('div[style*="position: relative"]');
    }
    
    if (!container) {
       // fallback: 이미지를 감싸는 가장 가까운 relative 요소
       container = e.target.closest('div[style*="relative"]');
    }

    if (!container) return; // 컨테이너를 찾지 못하면 취소

    e.preventDefault(); // 이미지 드래그 방지
    isDrawing = true;

    // 컨테이너 기준 마우스 좌표
    const rect = container.getBoundingClientRect();
    startX = e.clientX - rect.left;
    startY = e.clientY - rect.top;

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
    let currentX = e.clientX - rect.left;
    let currentY = e.clientY - rect.top;

    // 범위 제한 (0 ~ 컨테이너 크기)
    currentX = Math.max(0, Math.min(currentX, rect.width));
    currentY = Math.max(0, Math.min(currentY, rect.height));

    const left = Math.min(startX, currentX);
    const top = Math.min(startY, currentY);
    const width = Math.abs(currentX - startX);
    const height = Math.abs(currentY - startY);

    overlay.style.left = left + 'px';
    overlay.style.top = top + 'px';
    overlay.style.width = width + 'px';
    overlay.style.height = height + 'px';
  });

  document.addEventListener('mouseup', function(e) {
    if (!isDrawing || !overlay || !container) return;
    isDrawing = false;

    const rect = container.getBoundingClientRect();
    
    // px 좌표 가져오기
    const pxLeft = parseFloat(overlay.style.left);
    const pxTop = parseFloat(overlay.style.top);
    const pxWidth = parseFloat(overlay.style.width);
    const pxHeight = parseFloat(overlay.style.height);

    // % 계산 (소수점 1자리까지)
    const pctLeft = ((pxLeft / rect.width) * 100).toFixed(1);
    const pctTop = ((pxTop / rect.height) * 100).toFixed(1);
    const pctWidth = ((pxWidth / rect.width) * 100).toFixed(1);
    const pctHeight = ((pxHeight / rect.height) * 100).toFixed(1);

    const styleString = `left:${pctLeft}%; top:${pctTop}%; width:${pctWidth}%; height:${pctHeight}%;`;
    
    // 콘솔에 출력
    console.log("=============================");
    console.log("📏 측정 완료:");
    console.log(`style="${styleString}"`);
    console.log("=============================");

    // 클립보드 복사
    navigator.clipboard.writeText(`style="${styleString}"`).then(() => {
      showToast(`복사됨: style="${styleString}"`);
    }).catch(err => {
      console.error('클립보드 복사 실패:', err);
      showToast('클립보드 복사 실패 (콘솔 확인)');
    });

    // overlay를 바로 지우지 않고 0.5초 뒤에 지워서 잠시 보여줌
    setTimeout(() => {
      if(overlay && overlay.parentNode) {
        overlay.remove();
      }
      overlay = null;
      container = null;
    }, 500);
  });
})();
