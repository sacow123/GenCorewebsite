const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const calloutDragJS = `
            <!-- Developer Drag & Drop UI with Smart Guides (Callouts Only) -->
            <div id="coord-display" style="position:absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.8); color: #0f0; padding: 5px 10px; border-radius: 4px; font-family: monospace; z-index: 1000; pointer-events: none; display: none;">X: 0.0%, Y: 0.0%</div>
            <button id="save-layout-btn" style="position:absolute; top: 10px; left: 50%; transform: translateX(-50%); background: #ffcc00; color: #000; font-weight: bold; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; z-index: 1000;">메시지창 배치 완료 (저장)</button>
            
            <!-- Smart Guides Elements -->
            <div id="v-guide" style="position:absolute; top:0; bottom:0; width:0; border-left: 1px dashed red; z-index: 9998; pointer-events: none; display: none;"></div>
            <div id="h-guide" style="position:absolute; left:0; right:0; height:0; border-top: 1px dashed red; z-index: 9998; pointer-events: none; display: none;"></div>

            <script>
              document.addEventListener('DOMContentLoaded', () => {
                const container = document.querySelector('#sec-mf-main-page .content-card > div');
                const coordDisplay = document.getElementById('coord-display');
                const vGuide = document.getElementById('v-guide');
                const hGuide = document.getElementById('h-guide');
                
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

                // ALL elements are used for snapping targets
                const allElements = container.querySelectorAll('.mf-hotspot, .mf-callout-custom');
                // ONLY callouts are draggable
                const draggables = container.querySelectorAll('.mf-callout-custom');
                
                let activeEl = null;
                let startMouseX = 0;
                let startMouseY = 0;
                let startLeft = 0;
                let startTop = 0;
                let activeWidth = 0;
                let activeHeight = 0;

                let selectedEl = null;
                const SNAP_THRESHOLD = 1.0; 

                draggables.forEach(el => {
                  el.style.cursor = 'move';
                  el.style.pointerEvents = 'auto'; 
                  
                  // Disable hover effects temporarily so it stays visible while dragging
                  el.style.opacity = '1';

                  el.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    activeEl = el;
                    startMouseX = e.clientX;
                    startMouseY = e.clientY;
                    startLeft = parseFloat(el.style.left) || parseFloat(el.style.right) || 0;
                    startTop = parseFloat(el.style.top) || 0;
                    
                    const elRect = el.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    activeWidth = (elRect.width / containerRect.width) * 100;
                    activeHeight = (elRect.height / containerRect.height) * 100;

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
                  
                  let targetsX = [];
                  let targetsY = [];
                  allElements.forEach(target => {
                    if (target === activeEl) return;
                    
                    const tRect = target.getBoundingClientRect();
                    let tL = ((tRect.left - rect.left) / rect.width) * 100;
                    let tT = ((tRect.top - rect.top) / rect.height) * 100;
                    let tW = (tRect.width / rect.width) * 100;
                    let tH = (tRect.height / rect.height) * 100;
                    
                    if(tW === 0 || tH === 0) return; 
                    
                    targetsX.push(tL);                 
                    targetsX.push(tL + tW / 2);        
                    targetsX.push(tL + tW);            

                    targetsY.push(tT);                 
                    targetsY.push(tT + tH / 2);        
                    targetsY.push(tT + tH);            
                  });

                  let aL = newLeft;
                  let aCX = newLeft + activeWidth / 2;
                  let aR = newLeft + activeWidth;

                  let aT = newTop;
                  let aCY = newTop + activeHeight / 2;
                  let aB = newTop + activeHeight;

                  let snappedX = false;
                  let snappedY = false;

                  for (let tx of targetsX) {
                    if (Math.abs(aL - tx) < SNAP_THRESHOLD) { newLeft = tx; snappedX = tx; break; }
                    if (Math.abs(aCX - tx) < SNAP_THRESHOLD) { newLeft = tx - activeWidth / 2; snappedX = tx; break; }
                    if (Math.abs(aR - tx) < SNAP_THRESHOLD) { newLeft = tx - activeWidth; snappedX = tx; break; }
                  }

                  for (let ty of targetsY) {
                    if (Math.abs(aT - ty) < SNAP_THRESHOLD) { newTop = ty; snappedY = ty; break; }
                    if (Math.abs(aCY - ty) < SNAP_THRESHOLD) { newTop = ty - activeHeight / 2; snappedY = ty; break; }
                    if (Math.abs(aB - ty) < SNAP_THRESHOLD) { newTop = ty - activeHeight; snappedY = ty; break; }
                  }

                  if (snappedX !== false) {
                    vGuide.style.display = 'block';
                    vGuide.style.left = snappedX + '%';
                  } else {
                    vGuide.style.display = 'none';
                  }

                  if (snappedY !== false) {
                    hGuide.style.display = 'block';
                    hGuide.style.top = snappedY + '%';
                  } else {
                    hGuide.style.display = 'none';
                  }

                  activeEl.style.left = newLeft + '%';
                  activeEl.style.top = newTop + '%';
                  activeEl.style.right = 'auto'; 
                });

                document.addEventListener('mouseup', () => {
                  if (activeEl) {
                    activeEl.style.zIndex = '';
                    activeEl = null;
                    vGuide.style.display = 'none';
                    hGuide.style.display = 'none';
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
                  // We only save the callouts since the hotspots are locked
                  const data = Array.from(draggables).map((el, i) => {
                    if(el.style.outline) el.style.outline = '';
                    return { index: i, class: el.className, style: el.getAttribute('style') };
                  });
                  console.log('CALLOUT_COORDINATES:', JSON.stringify(data));
                  alert('팝업(메시지창) 좌표가 콘솔에 저장되었습니다. 복사해서 채팅창에 주시면 바로 적용합니다.');
                });
              });
            </script>
`;

const marker = '<!-- 상단 -->';
const markerIndex = c.indexOf(marker);

if (markerIndex > -1) {
    c = c.substring(0, markerIndex) + calloutDragJS + '\n            ' + c.substring(markerIndex);
    fs.writeFileSync('index.html', c);
    console.log('Injected callout-only dev tools successfully.');
} else {
    console.log('Marker not found.');
}
