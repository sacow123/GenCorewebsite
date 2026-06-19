const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

// 1. Remove the old border and popup
const borderStart = c.indexOf('<!-- 배치 2: 175px 원형 테두리 -->');
if (borderStart > -1) {
    const borderEnd = c.indexOf('<!-- Developer Drag & Drop UI (Callouts Only) -->', borderStart);
    if (borderEnd > -1) {
        c = c.substring(0, borderStart) + c.substring(borderEnd);
    }
}

// 2. Remove the current dev tools
const devToolsStart = c.indexOf('<!-- Developer Drag & Drop UI (Callouts Only) -->');
if (devToolsStart > -1) {
    const devToolsEnd = c.indexOf('</script>', devToolsStart) + 9;
    if (devToolsEnd > -1) {
        c = c.substring(0, devToolsStart) + c.substring(devToolsEnd);
    }
}

// 3. Prepare the new 15.6% border and popup
let batchHtml = `\n            <!-- 배치 2: 15.6% 원형 테두리 -->\n`;
batchHtml += `            <div class="mf-hotspot temp-drag" style="left: 30%; top: 40%; width: 15.6%; aspect-ratio: 1 / 1; height: auto; border-radius: 50%;"></div>\n`;
batchHtml += `            <div class="mf-callout-custom center temp-drag" style="left: 30%; top: 40%; min-width: 250px;"><span class="title">재생 버튼</span><span class="desc">: 가공을 시작합니다</span></div>\n\n            `;

// 4. Prepare the Dev Tools (Border Move Only + Ruler with Px and %)
const devToolsJS = `
            <!-- Developer Drag & Drop UI (Clean Move Only) -->
            <div id="coord-display" style="position:absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.8); color: #0f0; padding: 5px 10px; border-radius: 4px; font-family: monospace; z-index: 1000; pointer-events: none; display: none;">X: 0.0%, Y: 0.0%</div>
            <button id="save-layout-btn" style="position:absolute; top: 10px; left: 50%; transform: translateX(-50%); background: #ffcc00; color: #000; font-weight: bold; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; z-index: 1000;">테두리 배치 완료 (좌표 저장)</button>
            <style>
              .mf-callout-custom.temp-drag { display: none !important; }
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
                  if(!e.altKey) {
                      coordDisplay.style.display = 'block';
                      coordDisplay.textContent = \`X: \${x}%, Y: \${y}%\`;
                      coordDisplay.style.left = (e.clientX - rect.left + 15) + 'px';
                      coordDisplay.style.top = (e.clientY - rect.top + 15) + 'px';
                  }
                });
                container.addEventListener('mouseleave', () => {
                  if(!document.getElementById('ruler-line') || document.getElementById('ruler-line').style.display === 'none') {
                      coordDisplay.style.display = 'none';
                  }
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
                  
                  el.addEventListener('mousedown', (e) => {
                    if(e.altKey) return;
                    e.preventDefault();
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
                    selectedEl.style.outline = '3px solid red'; 
                  });
                });

                document.addEventListener('mousemove', (e) => {
                  if (!activeEl) return;
                  const rect = container.getBoundingClientRect();
                  
                  const dx = ((e.clientX - startMouseX) / rect.width) * 100;
                  const dy = ((e.clientY - startMouseY) / rect.height) * 100;
                  
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
                  if(selectedEl) selectedEl.style.outline = 'none';
                  selectedEl = null;
                });

                document.addEventListener('keydown', (e) => {
                  if(!selectedEl || e.ctrlKey) return; 
                  
                  let left = parseFloat(selectedEl.style.left) || parseFloat(selectedEl.style.right) || 0;
                  let top = parseFloat(selectedEl.style.top) || 0;
                  
                  let step = 0.1;
                  if (e.shiftKey) step = 0.5;

                  let moved = false;
                  if (e.key === 'ArrowUp') { top -= step; moved = true; }
                  if (e.key === 'ArrowDown') { top += step; moved = true; }
                  if (e.key === 'ArrowLeft') { left -= step; moved = true; }
                  if (e.key === 'ArrowRight') { left += step; moved = true; }

                  if (moved) {
                    e.preventDefault();
                    left = Math.round(left * 10) / 10;
                    top = Math.round(top * 10) / 10;
                    
                    left = Math.max(0, Math.min(100, left));
                    top = Math.max(0, Math.min(100, top));

                    selectedEl.style.left = left + '%';
                    selectedEl.style.top = top + '%';
                    selectedEl.style.right = 'auto';
                  }
                });

                document.getElementById('save-layout-btn').addEventListener('click', () => {
                  const data = Array.from(container.querySelectorAll('.temp-drag')).map((el, i) => {
                    if(el.style.outline) el.style.outline = '';
                    return { index: i, class: el.className.replace(' temp-drag', ''), style: el.getAttribute('style') };
                  });
                  console.log('BATCH2_COORDINATES:', JSON.stringify(data));
                  alert('테두리 좌표가 콘솔에 저장되었습니다.');
                });

                // --- RULER TOOL (Point 1 to Point 2) ---
                let measureStart = null;
                const rulerLine = document.createElement('div');
                rulerLine.id = 'ruler-line';
                rulerLine.style.position = 'absolute';
                rulerLine.style.border = '1px dashed #0f0';
                rulerLine.style.pointerEvents = 'none';
                rulerLine.style.zIndex = '9999';
                rulerLine.style.display = 'none';
                container.appendChild(rulerLine);

                container.addEventListener('mousedown', (e) => {
                  if (e.altKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    const rect = container.getBoundingClientRect();
                    measureStart = {
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top
                    };
                    rulerLine.style.left = measureStart.x + 'px';
                    rulerLine.style.top = measureStart.y + 'px';
                    rulerLine.style.width = '0px';
                    rulerLine.style.height = '0px';
                    rulerLine.style.display = 'block';
                  }
                });

                container.addEventListener('mousemove', (e) => {
                  if (measureStart && e.altKey) {
                    const rect = container.getBoundingClientRect();
                    const curX = e.clientX - rect.left;
                    const curY = e.clientY - rect.top;
                    
                    const width = Math.abs(curX - measureStart.x);
                    const height = Math.abs(curY - measureStart.y);
                    const left = Math.min(curX, measureStart.x);
                    const top = Math.min(curY, measureStart.y);
                    
                    rulerLine.style.left = left + 'px';
                    rulerLine.style.top = top + 'px';
                    rulerLine.style.width = width + 'px';
                    rulerLine.style.height = height + 'px';
                    
                    const wPct = (width / rect.width * 100).toFixed(1);
                    const hPct = (height / rect.height * 100).toFixed(1);
                    
                    coordDisplay.style.display = 'block';
                    coordDisplay.textContent = \`너비: \${Math.round(width)}px (\${wPct}%), 높이: \${Math.round(height)}px (\${hPct}%)\`;
                    coordDisplay.style.left = (e.clientX - rect.left + 15) + 'px';
                    coordDisplay.style.top = (e.clientY - rect.top + 15) + 'px';
                  }
                });

                container.addEventListener('mouseup', (e) => {
                  if (measureStart) {
                    const rect = container.getBoundingClientRect();
                    const curX = e.clientX - rect.left;
                    const curY = e.clientY - rect.top;
                    const width = Math.abs(curX - measureStart.x);
                    const height = Math.abs(curY - measureStart.y);
                    
                    if(width > 5 || height > 5) {
                      const wPct = (width / rect.width * 100).toFixed(1);
                      const hPct = (height / rect.height * 100).toFixed(1);
                      alert(\`측정 완료!\\n너비: \${Math.round(width)}px (\${wPct}%)\\n높이: \${Math.round(height)}px (\${hPct}%)\`);
                    }
                    
                    measureStart = null;
                    rulerLine.style.display = 'none';
                  }
                });
              });
            </script>
`;

const mainPageStart = c.indexOf('<section id="sec-mf-main-page"');
const searchStr = '</div>\n        </div>\n      </section>';
const insertIdx = c.indexOf(searchStr, mainPageStart);

if (insertIdx > -1) {
    c = c.substring(0, insertIdx) + batchHtml + devToolsJS + '\n          ' + c.substring(insertIdx);
    fs.writeFileSync('index.html', c);
    console.log('Re-injected 15.6% border and ruler with px + %.');
} else {
    console.log('Insert point not found.');
}
