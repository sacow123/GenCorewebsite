const fs = require('fs');

const hsData = {"index":1,"class":"mf-hotspot","style":"left: 50.8%; top: 45.8%; width: 8%; aspect-ratio: 1 / 1; height: auto; border-radius: 50%; cursor: move; pointer-events: auto; right: auto;"};

let hsStyle = hsData.style
    .replace(/cursor: move;\s*/g, '')
    .replace(/pointer-events: auto;\s*/g, '')
    .replace(/right: auto;\s*/g, '')
    .trim();

let c = fs.readFileSync('index.html', 'utf8');

// Replace the 8% border HTML to lock it (remove temp-drag)
// The HTML I injected previously was:
// <button class="mf-hotspot temp-drag" style="left: 30%; top: 40%; width: 8%; aspect-ratio: 1 / 1; height: auto; border-radius: 50%;"></button>
// I need to find it and replace it.
const searchBlock = '<!-- 배치 2: 8% 원형 테두리 -->\n            <button class="mf-hotspot temp-drag"';
const markerStart = c.indexOf(searchBlock);

if (markerStart > -1) {
    // Find the end of the button tag
    const markerEnd = c.indexOf('</button>', markerStart) + 9;
    
    let newHsHtml = `<!-- 배치 2: 8% 원형 테두리 (정지 버튼) -->\n            <button class="mf-hotspot" style="${hsStyle}"></button>`;
    
    c = c.substring(0, markerStart) + newHsHtml + c.substring(markerEnd);
}

// Now replace the Dev Tools Script to allow dragging the callouts
const devToolsStart = c.indexOf('<!-- Developer Drag & Drop UI (Clean Move Only) -->');
const devToolsEnd = c.indexOf('</script>', devToolsStart) + 9;

const calloutDragJS = `
            <!-- Developer Drag & Drop UI (Callouts Only) -->
            <div id="coord-display" style="position:absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.8); color: #0f0; padding: 5px 10px; border-radius: 4px; font-family: monospace; z-index: 1000; pointer-events: none; display: none;">X: 0.0%, Y: 0.0%</div>
            <button id="save-layout-btn" style="position:absolute; top: 10px; left: 50%; transform: translateX(-50%); background: #ffcc00; color: #000; font-weight: bold; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; z-index: 1000;">메시지창 배치 완료 (저장)</button>
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

                // Only target the specific temp-drag callout(s)
                const draggables = container.querySelectorAll('.mf-callout-custom.temp-drag');
                
                let activeEl = null;
                let startMouseX = 0;
                let startMouseY = 0;
                let startLeft = 0;
                let startTop = 0;

                let selectedEl = null;

                draggables.forEach(el => {
                  el.style.cursor = 'move';
                  el.style.pointerEvents = 'auto'; 
                  el.style.opacity = '1';

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
                  const data = Array.from(draggables).map((el, i) => {
                    if(el.style.outline) el.style.outline = '';
                    return { index: i, class: el.className.replace(' temp-drag', ''), style: el.getAttribute('style') };
                  });
                  console.log('CALLOUT_COORDINATES:', JSON.stringify(data));
                  alert('팝업 좌표가 콘솔에 저장되었습니다.');
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

if (devToolsStart > -1 && devToolsEnd > -1) {
    c = c.substring(0, devToolsStart) + calloutDragJS + c.substring(devToolsEnd);
    fs.writeFileSync('index.html', c);
    console.log('Locked 8% border and enabled callout dragging.');
} else {
    console.log('Dev tools block not found.');
}
