const fs = require('fs');

const labels = [
  {title: "파일 불러오기", desc: ": 가공할 NC 파일을 불러옵니다"},
  {title: "파일명 표시 창", desc: ": 현재 불러온 파일의 이름을 표시합니다"},
  {title: "불러온 파일 삭제", desc: ": 불러온 파일을 삭제합니다"},
  {title: "호밍", desc: ": 기계를 원점 위치로 복귀시킵니다"},
  {title: "B축 30도 회전", desc: ": B축을 30도 회전시킵니다"},
  {title: "B축 180도 회전", desc: ": B축을 180도 회전시킵니다"}
];

let batchHtml = `\n            <!-- 배치 2: 좌측 영역 (File / B축) -->\n`;
for(let i=0; i<labels.length; i++) {
    batchHtml += `            <div class="mf-hotspot temp-drag" style="left: 5%; top: 5%; width: 5%; height: 5%; border-radius: 12px; background: rgba(255,0,0,0.5);"></div>\n`;
    batchHtml += `            <div class="mf-callout-custom center temp-drag" style="left: 5%; top: 5%; min-width: 250px;"><span class="title">${labels[i].title}</span><span class="desc">${labels[i].desc}</span></div>\n\n`;
}

const devToolsJS = `
            <!-- Developer Drag & Drop UI (Resize + Move) -->
            <div id="coord-display" style="position:absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.8); color: #0f0; padding: 5px 10px; border-radius: 4px; font-family: monospace; z-index: 1000; pointer-events: none; display: none;">X: 0.0%, Y: 0.0%</div>
            <button id="save-layout-btn" style="position:absolute; top: 10px; left: 50%; transform: translateX(-50%); background: #ffcc00; color: #000; font-weight: bold; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; z-index: 1000;">테두리 배치 완료 (좌표 저장)</button>
            <style>
              .mf-callout-custom.temp-drag { display: none !important; }
              /* Force display block and give it a solid red background to be highly visible while dragging/resizing */
              .mf-hotspot.temp-drag { background: rgba(255, 0, 0, 0.5) !important; border: 5px solid red !important; display: block !important; }
            </style>
            <script>
              document.addEventListener('DOMContentLoaded', () => {
                const container = document.querySelector('#sec-mf-main-page .content-card > div');
                const coordDisplay = document.getElementById('coord-display');
                
                container.addEventListener('mousemove', (e) => {
                  if(e.target === document.getElementById('save-layout-btn')) return;
                  const rect = container.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
                  const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
                  coordDisplay.style.display = 'block';
                  coordDisplay.textContent = \`X: \${x}%, Y: \${y}%\`;
                  coordDisplay.style.left = (e.clientX - rect.left + 15) + 'px';
                  coordDisplay.style.top = (e.clientY - rect.top + 15) + 'px';
                });
                container.addEventListener('mouseleave', () => {
                  coordDisplay.style.display = 'none';
                });

                const draggables = container.querySelectorAll('.temp-drag.mf-hotspot');
                
                let activeEl = null;
                let startMouseX = 0;
                let startMouseY = 0;
                let startLeft = 0;
                let startTop = 0;
                let selectedEl = null;

                draggables.forEach(el => {
                  el.style.cursor = 'move';
                  el.style.pointerEvents = 'auto'; 
                  
                  // ENABLE NATIVE CSS RESIZE FOR THESE ELEMENTS
                  el.style.resize = 'both';
                  el.style.overflow = 'hidden';

                  el.addEventListener('mousedown', (e) => {
                    // Prevent default EXCEPT when clicking on the bottom-right resize handle
                    const rect = el.getBoundingClientRect();
                    const isResize = (e.clientX > rect.right - 15) && (e.clientY > rect.bottom - 15);
                    if(!isResize) {
                        e.preventDefault();
                    }
                    e.stopPropagation();
                    activeEl = el;
                    startMouseX = e.clientX;
                    startMouseY = e.clientY;
                    startLeft = parseFloat(el.style.left) || parseFloat(el.style.right) || 0;
                    startTop = parseFloat(el.style.top) || 0;
                    el.style.zIndex = '100'; 
                  });

                  el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if(selectedEl) selectedEl.style.outline = 'none';
                    selectedEl = el;
                    selectedEl.style.outline = '3px solid blue'; 
                    // Temporarily remove border radius so the resize handle is visible and clickable
                    if(selectedEl.dataset.origRadius === undefined) {
                        selectedEl.dataset.origRadius = selectedEl.style.borderRadius || '';
                    }
                    selectedEl.style.borderRadius = '0';
                  });
                });

                document.addEventListener('mousemove', (e) => {
                  if (!activeEl) return;
                  
                  // Check if we are resizing or moving
                  const rect = activeEl.getBoundingClientRect();
                  const isResize = (activeEl.style.width && activeEl.style.width.includes('px')) || (activeEl.style.height && activeEl.style.height.includes('px'));
                  if(isResize) return; // Let native CSS resize handle it

                  const containerRect = container.getBoundingClientRect();
                  const dx = ((e.clientX - startMouseX) / containerRect.width) * 100;
                  const dy = ((e.clientY - startMouseY) / containerRect.height) * 100;
                  
                  let newLeft = Math.round((startLeft + dx) * 10) / 10;
                  let newTop = Math.round((startTop + dy) * 10) / 10;
                  
                  activeEl.style.left = newLeft + '%';
                  activeEl.style.top = newTop + '%';
                  activeEl.style.right = 'auto'; 
                });

                document.addEventListener('mouseup', () => {
                  if (activeEl) {
                    activeEl.style.zIndex = '';
                    activeEl = null;
                  }
                });

                container.addEventListener('click', () => {
                  if(selectedEl) {
                      selectedEl.style.outline = 'none';
                      if(selectedEl.dataset.origRadius !== undefined) {
                          selectedEl.style.borderRadius = selectedEl.dataset.origRadius;
                      }
                  }
                  selectedEl = null;
                });

                // KEYBOARD: Ctrl+Arrows to resize, Arrows to move
                document.addEventListener('keydown', (e) => {
                  if(!selectedEl) return; 
                  
                  let step = 0.1;
                  if (e.shiftKey) step = 0.5;

                  const containerRect = container.getBoundingClientRect();

                  if(e.ctrlKey) {
                    // Resize
                    let width = parseFloat(selectedEl.style.width) || 0;
                    let height = parseFloat(selectedEl.style.height) || 0;
                    
                    if(selectedEl.style.width.includes('px')) width = (parseFloat(selectedEl.style.width) / containerRect.width) * 100;
                    if(selectedEl.style.height.includes('px')) height = (parseFloat(selectedEl.style.height) / containerRect.height) * 100;

                    let resized = false;
                    if (e.key === 'ArrowUp') { height -= step; resized = true; }
                    if (e.key === 'ArrowDown') { height += step; resized = true; }
                    if (e.key === 'ArrowLeft') { width -= step; resized = true; }
                    if (e.key === 'ArrowRight') { width += step; resized = true; }

                    if (resized) {
                      e.preventDefault();
                      selectedEl.style.width = Math.max(0.1, Math.round(width * 10) / 10) + '%';
                      selectedEl.style.height = Math.max(0.1, Math.round(height * 10) / 10) + '%';
                    }
                  } else {
                    // Move
                    let left = parseFloat(selectedEl.style.left) || parseFloat(selectedEl.style.right) || 0;
                    let top = parseFloat(selectedEl.style.top) || 0;
                    let moved = false;
                    if (e.key === 'ArrowUp') { top -= step; moved = true; }
                    if (e.key === 'ArrowDown') { top += step; moved = true; }
                    if (e.key === 'ArrowLeft') { left -= step; moved = true; }
                    if (e.key === 'ArrowRight') { left += step; moved = true; }

                    if (moved) {
                      e.preventDefault();
                      left = Math.round(left * 10) / 10;
                      top = Math.round(top * 10) / 10;
                      selectedEl.style.left = left + '%';
                      selectedEl.style.top = top + '%';
                      selectedEl.style.right = 'auto';
                    }
                  }
                });

                document.getElementById('save-layout-btn').addEventListener('click', () => {
                  const containerRect = container.getBoundingClientRect();
                  const allTemp = container.querySelectorAll('.temp-drag');
                  const data = Array.from(allTemp).map((el, i) => {
                    if(el.style.outline) el.style.outline = '';
                    if(el.dataset.origRadius !== undefined) el.style.borderRadius = el.dataset.origRadius;
                    
                    // Convert px back to %
                    if(el.style.width.includes('px')) el.style.width = (parseFloat(el.style.width) / containerRect.width * 100).toFixed(1) + '%';
                    if(el.style.height.includes('px')) el.style.height = (parseFloat(el.style.height) / containerRect.height * 100).toFixed(1) + '%';
                    
                    // Cleanup inline resize/overflow styles
                    el.style.resize = '';
                    el.style.overflow = '';
                    el.style.background = '';
                    el.style.border = '';

                    return { index: i, class: el.className.replace(' temp-drag', ''), style: el.getAttribute('style') };
                  });
                  console.log('BATCH2_COORDINATES:', JSON.stringify(data));
                  alert('테두리 좌표 및 크기가 콘솔에 저장되었습니다. 복사해서 채팅창에 주시면 바로 적용합니다.');
                });
              });
            </script>
`;

let c = fs.readFileSync('index.html', 'utf8');

const injectionPoint = c.indexOf('</div>\n        </div>\n      </section>');

if (injectionPoint > -1) {
    c = c.substring(0, injectionPoint) + batchHtml + devToolsJS + '\n          ' + c.substring(injectionPoint);
    fs.writeFileSync('index.html', c);
    console.log('Successfully injected batch 2 elements with size adjustability.');
} else {
    console.log('Injection point not found.');
}
