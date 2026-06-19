const fs = require('fs');

const popupEditorJS = `
            <!-- ===== DEVELOPER POPUP POSITIONING TOOL (3단계: 메시지 위치 설정) ===== -->
            <style id="dev-popup-positioning-styles">
              /* 3단계: 신규 팝업창들만 편집을 위해 강제로 항상 노출 */
              .temp-callout-draggable {
                opacity: 1 !important;
                pointer-events: auto !important;
                border-color: #ff00ff !important; /* 조작 대상임을 알리기 위해 보라색 테두리로 노출 */
              }
              .temp-callout-draggable.selected {
                outline: 3px solid #00ff00 !important; /* 선택된 팝업창은 초록색 아웃라인 */
              }
            </style>

            <div id="coord-display" style="position:absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.85); color: #00ff00; padding: 6px 12px; border-radius: 4px; font-family: monospace; font-size: 14px; z-index: 10001; pointer-events: none; border: 1px solid #00ff00;">
              보라색 신규 팝업창을 드래그하거나 방향키로 이동하세요. (R: right-arrow 토글, B: bottom-arrow 토글)
            </div>
            <button id="save-layout-btn" style="position:absolute; top: 10px; right: 10px; background: #ffcc00; color: #000; font-weight: bold; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; z-index: 10001;">배치 완료 (좌표 저장)</button>

            <script>
              document.addEventListener('DOMContentLoaded', () => {
                const container = document.querySelector('#sec-mf-main-page .content-card > div');
                if (!container) return;

                const coordDisplay = document.getElementById('coord-display');
                const draggables = container.querySelectorAll('.temp-callout-draggable');
                
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

                  const classes = Array.from(activeEl.classList).filter(c => c !== 'temp-callout-draggable' && c !== 'selected').join(' ');
                  coordDisplay.textContent = \`선택됨 (\${classes}): left: \${newLeft}%, top: \${newTop}% (방향키: 미세이동, R: right-arrow 토글, B: bottom-arrow 토글)\`;
                });

                document.addEventListener('mouseup', () => {
                  if (activeEl) {
                    activeEl.style.zIndex = '20000';
                    activeEl = null;
                  }
                });

                // 키보드 미세조정 및 클래스 토글
                document.addEventListener('keydown', (e) => {
                  if (!selectedEl) return;

                  let step = 0.1;
                  if (e.shiftKey) step = 1.0;

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
                  } else if (e.key.toLowerCase() === 'r') {
                    e.preventDefault();
                    selectedEl.classList.toggle('right-arrow');
                  } else if (e.key.toLowerCase() === 'b') {
                    e.preventDefault();
                    selectedEl.classList.toggle('bottom-arrow');
                  }

                  const classes = Array.from(selectedEl.classList).filter(c => c !== 'temp-callout-draggable' && c !== 'selected').join(' ');
                  coordDisplay.textContent = \`선택됨 (\${classes}): left: \${selectedEl.style.left}, top: \${selectedEl.style.top} (방향키: 미세이동, R: right-arrow 토글, B: bottom-arrow 토글)\`;
                });

                // 저장 버튼 클릭 시 팝업창 좌표 및 클래스 출력
                document.getElementById('save-layout-btn').addEventListener('click', () => {
                  const data = Array.from(draggables).map((el, i) => {
                    const classes = Array.from(el.classList).filter(c => c !== 'temp-callout-draggable' && c !== 'selected');
                    return {
                      index: i + 1,
                      class: classes.join(' '),
                      left: el.style.left,
                      top: el.style.top
                    };
                  });

                  console.log('NEW_CALLOUT_COORDINATES:', JSON.stringify(data));
                  alert('새로운 팝업창들의 좌표가 저장되었습니다. F12 개발자 도구의 콘솔 창을 열어 [NEW_CALLOUT_COORDINATES] 로그를 복사하여 전달해주세요.');
                });
              });
            </script>
`;

let c = fs.readFileSync('index.html', 'utf8');

// 1. 기존 2단계 드래그 도구 제거
const startMarker = '<!-- ===== DEVELOPER POSITIONING TOOL (2단계: 테두리 위치 설정) ===== -->';
const endMarker = '</script>';
const startIdx = c.indexOf(startMarker);

if (startIdx > -1) {
    const endScriptIdx = c.indexOf(endMarker, startIdx);
    if (endScriptIdx > -1) {
        const endIdx = endScriptIdx + endMarker.length;
        c = c.substring(0, startIdx) + c.substring(endIdx);
        console.log('Removed 2단계 positioning tool.');
    }
}

// 2. 신규 테두리 6개 및 매칭 팝업창들을 메인 섹션 하단에 삽입
const targetClosingDiv = '</div>\n        </div>\n      </section>\n      <section id="sec-mf-code-view"';
const insertIndex = c.indexOf(targetClosingDiv);

if (insertIndex > -1) {
    const newHotspotsAndPopups = `
            <!-- 배치 2: 신규 추가된 테두리 6개 및 그에 해당하는 팝업창 -->
            <!-- 1. 길이 14.5% 높이 6% 캡슐형 테두리 2개 -->
            <button class="mf-hotspot pill" style="left: 3.9%; top: 60.4%; width: 14.5%; height: 6.0%; border-radius: 999px;"></button>
            <div class="mf-callout-custom center temp-callout-draggable" data-idx="1" style="left: 3.9%; top: 60.4%; min-width: 250px;"><span class="title">신규 팝업 1</span><span class="desc">: 임시 설명글 1</span></div>

            <button class="mf-hotspot pill" style="left: 3.8%; top: 68.2%; width: 14.5%; height: 6.0%; border-radius: 999px;"></button>
            <div class="mf-callout-custom center temp-callout-draggable" data-idx="2" style="left: 3.8%; top: 68.2%; min-width: 250px;"><span class="title">신규 팝업 2</span><span class="desc">: 임시 설명글 2</span></div>

            <!-- 2. 지름 3% 원형 테두리 2개 -->
            <button class="mf-hotspot round" style="left: 77.1%; top: 17.4%; width: 3.0%; aspect-ratio: 1 / 1; height: auto; border-radius: 50%;"></button>
            <div class="mf-callout-custom center temp-callout-draggable" data-idx="3" style="left: 77.1%; top: 17.4%; min-width: 250px;"><span class="title">신규 팝업 3</span><span class="desc">: 임시 설명글 3</span></div>

            <button class="mf-hotspot round" style="left: 3.2%; top: 17.5%; width: 3.0%; aspect-ratio: 1 / 1; height: auto; border-radius: 50%;"></button>
            <div class="mf-callout-custom center temp-callout-draggable" data-idx="4" style="left: 3.2%; top: 17.5%; min-width: 250px;"><span class="title">신규 팝업 4</span><span class="desc">: 임시 설명글 4</span></div>

            <!-- 3. 길이 13% 높이 4.5% 모서리 살짝 둥근 사각형 테두리 1개 -->
            <button class="mf-hotspot" style="left: 13.0%; top: 17.7%; width: 13.0%; height: 4.5%; border-radius: 8px;"></button>
            <div class="mf-callout-custom center temp-callout-draggable" data-idx="5" style="left: 13.0%; top: 17.7%; min-width: 250px;"><span class="title">신규 팝업 5</span><span class="desc">: 임시 설명글 5</span></div>

            <!-- 4. 길이 13% 높이 10% 캡슐형 테두리 1개 -->
            <button class="mf-hotspot pill" style="left: 85.1%; top: 15.9%; width: 13.0%; height: 10.0%; border-radius: 999px;"></button>
            <div class="mf-callout-custom center temp-callout-draggable" data-idx="6" style="left: 85.1%; top: 15.9%; min-width: 250px;"><span class="title">신규 팝업 6</span><span class="desc">: 임시 설명글 6</span></div>
`;
    
    // 신규 테두리와 팝업을 Vacuum 팝업 하단(컨테이너 닫히기 직전)에 영구 기록
    c = c.substring(0, insertIndex) + newHotspotsAndPopups + c.substring(insertIndex);
    console.log('Permanently added 6 hotspots & popups to index.html HTML structure.');
}

// 3. 3단계 팝업 위치 드래그 도구를 index.html 상단에 주입
const marker = '<!-- 상단 -->';
const markerIndex = c.indexOf(marker);

if (markerIndex > -1) {
    c = c.substring(0, markerIndex) + popupEditorJS + '\n            ' + c.substring(markerIndex);
    fs.writeFileSync('index.html', c);
    console.log('Injected 3단계 popup positioning tool successfully.');
} else {
    console.error('Error: <!-- 상단 --> marker not found in index.html');
}
