/**
 * MillFix Callout Drag & Drop Tool
 * 말풍선(.mf-callout-custom)을 직접 드래그하여 위치를 조절하고 % 좌표를 추출합니다.
 */

(function() {
  let isDragging = false;
  let currentTarget = null;
  let startX = 0;
  let startY = 0;
  let initialLeft = 0;
  let initialTop = 0;
  let container = null;

  // 팝업이 항상 보이도록 스타일 강제 주입
  const style = document.createElement('style');
  style.innerHTML = `
    .mf-callout-custom {
      opacity: 1 !important;
      pointer-events: auto !important;
      cursor: grab !important;
      z-index: 10001 !important;
    }
    .mf-callout-custom:active {
      cursor: grabbing !important;
    }
    .mf-drag-toast {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #ffcc00;
      color: #000;
      padding: 10px 20px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: bold;
      z-index: 100000;
      opacity: 1;
      transition: opacity 0.5s;
    }
  `;
  document.head.appendChild(style);

  function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'mf-drag-toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 500);
    }, 2000);
  }

  document.addEventListener('mousedown', function(e) {
    const callout = e.target.closest('.mf-callout-custom');
    if (!callout) return;

    isDragging = true;
    currentTarget = callout;
    
    // 가장 가까운 상대 위치 컨테이너 찾기
    container = callout.closest('div[style*="position:relative"]') || callout.parentElement;

    // 현재 마우스 시작 위치
    startX = e.clientX;
    startY = e.clientY;

    // 현재 말풍선의 픽셀 좌표 계산 (스타일에 %가 섞여 있을 수 있으므로 offset 사용)
    initialLeft = callout.offsetLeft;
    initialTop = callout.offsetTop;

    e.preventDefault(); // 기본 드래그 방지
  });

  document.addEventListener('mousemove', function(e) {
    if (!isDragging || !currentTarget || !container) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    // 새로운 픽셀 위치
    let newLeft = initialLeft + dx;
    let newTop = initialTop + dy;

    currentTarget.style.left = newLeft + 'px';
    currentTarget.style.top = newTop + 'px';
  });

  document.addEventListener('mouseup', function(e) {
    if (!isDragging || !currentTarget || !container) return;

    const rect = container.getBoundingClientRect();
    
    // 픽셀 -> 퍼센트 변환
    const pxLeft = parseFloat(currentTarget.style.left);
    const pxTop = parseFloat(currentTarget.style.top);

    const pctLeft = ((pxLeft / rect.width) * 100).toFixed(1);
    const pctTop = ((pxTop / rect.height) * 100).toFixed(1);

    currentTarget.style.left = pctLeft + '%';
    currentTarget.style.top = pctTop + '%';

    const result = `left: ${pctLeft}%; top: ${pctTop}%;`;
    
    console.log("=============================");
    console.log("🎯 말풍선 위치 이동 완료:");
    console.log(result);
    console.log("=============================");

    navigator.clipboard.writeText(result).then(() => {
      showToast(`복사됨: ${result}`);
    }).catch(err => {
      console.error('클립보드 복사 실패:', err);
    });

    isDragging = false;
    currentTarget = null;
    container = null;
  });
})();
