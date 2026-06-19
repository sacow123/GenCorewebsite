const fs = require('fs');

const dragToolsJS = `
            <!-- ===== DEVELOPER POSITIONING TOOL (2단계: 테두리 위치 설정) ===== -->
            <style id="dev-positioning-styles">
              /* 팝업 기능 일시 중단 */
              .mf-callout-custom {
                display: none !important;
              }
              /* 모든 핫스팟이 눈에 보이도록 강제 스타일 지정 */
              .mf-hotspot {
                border: 5px solid #ffcc00 !important;
                background: rgba(255, 204, 0, 0.15) !important;
                opacity: 1 !important;
                animation: none !important;
              }
              /* 신규 핫스팟은 초록색 테두리로 구분하며 z-index를 높여서 항상 위에 표시하고 선택된 녀석은 마젠타 아웃라인 추가 */
              .mf-hotspot.temp-draggable {
                border-color: #00ff00 !important;
                background: rgba(0, 255, 0, 0.15) !important;
                z-index: 20 !important; /* 기존 핫스팟(z-index:5) 위에 띄워 클릭/드래그 보장 */
              }
              .mf-hotspot.temp-draggable.selected {
                outline: 3px solid #ff00ff !important;
                border-color: #00ff00 !important;
              }
            </style>

            <div id="coord-display" style="position:absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.85); color: #00ff00; padding: 6px 12px; border-radius: 4px; font-family: monospace; font-size: 14px; z-index: 10001; pointer-events: none; border: 1px solid #00ff00;">
              신규 테두리를 드래그하거나 방향키로 이동하세요. (선택 시 마젠타 아웃라인)
            </div>
            <button id="save-layout-btn" style="position:absolute; top: 10px; right: 10px; background: #ffcc00; color: #000; font-weight: bold; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; z-index: 10001;">배치 완료 (좌표 저장)</button>

            <!-- 신규 테두리 6개 생성 (중앙 부근에 정렬하여 겹치지 않게 배치) -->
            <!-- 1. 길이 14.5% 높이 6% 캡슐형 테두리 2개 -->
            <button class="mf-hotspot temp-draggable pill" style="left: 30.0%; top: 40.0%; width: 14.5%; height: 6.0%; border-radius: 999px;"></button>
            <button class="mf-hotspot temp-draggable pill" style="left: 30.0%; top: 48.0%; width: 14.5%; height: 6.0%; border-radius: 999px;"></button>
            
            <!-- 2. 지름 3% 원형 테두리 2개 (aspect-ratio 사용) -->
            <button class="mf-hotspot temp-draggable round" style="left: 48.0%; top: 40.0%; width: 3.0%; aspect-ratio: 1 / 1; height: auto; border-radius: 50%;"></button>
            <button class="mf-hotspot temp-draggable round" style="left: 48.0%; top: 48.0%; width: 3.0%; aspect-ratio: 1 / 1; height: auto; border-radius: 50%;"></button>
            
            <!-- 3. 길이 13% 높이 4.5% 모서리 살짝 둥근 사각형 테두리 1개 -->
            <button class="mf-hotspot temp-draggable" style="left: 55.0%; top: 40.0%; width: 13.0%; height: 4.5%; border-radius: 8px;"></button>
            
            <!-- 4. 길이 13% 높이 10% 캡슐형 테두리 1개 -->
            <button class="mf-hotspot temp-draggable pill" style="left: 55.0%; top: 48.0%; width: 13.0%; height: 10.0%; border-radius: 999px;"></button>

            <script>
              document.addEventListener('DOMContentLoaded', () => {
                const container = document.querySelector('#sec-mf-main-page .content-card > div');
                if (!container) return;

                const coordDisplay = document.getElementById('coord-display');
                const draggables = container.querySelectorAll('.temp-draggable');
                
                let activeEl = null;
                let selectedEl = null;
                let startMouseX = 0;
                let startMouseY = 0;
                let startLeft = 0;
                let startTop = 0;

                // 클릭/드래그 설정
                draggables.forEach(el => {
                  el.style.cursor = 'move';
                  el.style.pointerEvents = 'auto';

                  el.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // 기존 선택 해제 및 새로운 선택 지정
                    draggables.forEach(d => d.classList.remove('selected'));
                    selectedEl = el;
                    el.classList.add('selected');
                    
                    activeEl = el;
                    startMouseX = e.clientX;
                    startMouseY = e.clientY;
                    startLeft = parseFloat(el.style.left) || 0;
                    startTop = parseFloat(el.style.top) || 0;
                    el.style.zIndex = '20000'; // 드래그 중인 요소를 임시로 맨 위로
                  });
                });

                // 마우스 드래그 동작
                document.addEventListener('mousemove', (e) => {
                  if (!activeEl) return;
                  const rect = container.getBoundingClientRect();
                  const dx = ((e.clientX - startMouseX) / rect.width) * 100;
                  const dy = ((e.clientY - startMouseY) / rect.height) * 100;

                  let newLeft = Math.round((startLeft + dx) * 10) / 10;
                  let newTop = Math.round((startTop + dy) * 10) / 10;

                  activeEl.style.left = newLeft + '%';
                  activeEl.style.top = newTop + '%';

                  coordDisplay.textContent = \`선택됨: left: \${newLeft}%, top: \${newTop}% (방향키 미세조정 가능)\`;
                });

                document.addEventListener('mouseup', () => {
                  if (activeEl) {
                    activeEl.style.zIndex = '20000'; // 마우스 놓아도 기존보다는 위에 있도록 z-index 유지
                    activeEl = null;
                  }
                });

                // 키보드 조작 및 미세조정 추가 (선택된 테두리가 있을 때 작동)
                document.addEventListener('keydown', (e) => {
                  if (!selectedEl) return;

                  let step = 0.1; // 기본 0.1%씩 이동
                  if (e.shiftKey) step = 1.0; // Shift 누른 상태에서는 1%씩 이동

                  let left = parseFloat(selectedEl.style.left) || 0;
                  let top = parseFloat(selectedEl.style.top) || 0;

                  if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    selectedEl.style.left = (left - step).toFixed(1) + '%';
                  } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    selectedEl.style.left = (left + step).toFixed(1) + '%';
                  } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    selectedEl.style.top = (top - step).toFixed(1) + '%';
                  } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    selectedEl.style.top = (top + step).toFixed(1) + '%';
                  }

                  coordDisplay.textContent = \`선택됨: left: \${selectedEl.style.left}, top: \${selectedEl.style.top} (방향키 미세조정 가능)\`;
                });

                // 저장 버튼 클릭 시 좌표 출력
                document.getElementById('save-layout-btn').addEventListener('click', () => {
                  const data = Array.from(draggables).map((el, i) => {
                    let shape = '캡슐형';
                    if (el.classList.contains('round')) shape = '원형';
                    else if (!el.classList.contains('pill')) shape = '둥근 사각형';

                    return {
                      index: i + 1,
                      shape: shape,
                      left: el.style.left,
                      top: el.style.top,
                      width: el.style.width,
                      height: el.style.height,
                      borderRadius: el.style.borderRadius
                    };
                  });

                  console.log('NEW_HOTSPOT_COORDINATES:', JSON.stringify(data));
                  alert('새로운 테두리들의 좌표가 저장되었습니다. F12 개발자 도구의 콘솔 창을 열어 [NEW_HOTSPOT_COORDINATES] 로그를 복사하여 전달해주세요.');
                });
              });
            </script>
`;

let c = fs.readFileSync('index.html', 'utf8');

// 기존 2단계 툴을 정규식 매칭하여 삭제
const startMarker = '<!-- ===== DEVELOPER POSITIONING TOOL (2단계: 테두리 위치 설정) ===== -->';
const endMarker = '</script>';
const startIdx = c.indexOf(startMarker);

if (startIdx > -1) {
    const endScriptIdx = c.indexOf(endMarker, startIdx);
    if (endScriptIdx > -1) {
        const endIdx = endScriptIdx + endMarker.length;
        c = c.substring(0, startIdx) + c.substring(endIdx);
        console.log('Successfully removed old version of 2단계 tool.');
    }
}

// 새 2단계 툴 주입
const marker = '<!-- 상단 -->';
const markerIndex = c.indexOf(marker);

if (markerIndex > -1) {
    c = c.substring(0, markerIndex) + dragToolsJS + '\n            ' + c.substring(markerIndex);
    fs.writeFileSync('index.html', c);
    console.log('Successfully injected 2단계 positioning tool v2 (keyboard nudges & z-index fixes).');
} else {
    console.error('Error: <!-- 상단 --> marker not found in index.html');
}
