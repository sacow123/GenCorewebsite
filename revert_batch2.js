const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

// The 5 popups to revert to temp-drag
// Play
c = c.replace(
  '<div class="mf-callout-custom center bottom-arrow" style="left: 34.9%; top: 56.8%; min-width: 250px;">',
  '<div class="mf-callout-custom center bottom-arrow temp-drag" style="left: 34.9%; top: 56.8%; min-width: 250px;">'
);
// Stop
c = c.replace(
  '<div class="mf-callout-custom center right-arrow bottom-arrow" style="left: 51.9%; top: 56.9%; min-width: 250px;">',
  '<div class="mf-callout-custom center right-arrow bottom-arrow temp-drag" style="left: 51.9%; top: 56.9%; min-width: 250px;">'
);
// Tool Return
c = c.replace(
  '<div class="mf-callout-custom center right-arrow" style="left: 66.4%; top: 40.6%; min-width: 250px;">',
  '<div class="mf-callout-custom center right-arrow temp-drag" style="left: 66.4%; top: 40.6%; min-width: 250px;">'
);
// Auto Off
c = c.replace(
  '<div class="mf-callout-custom center right-arrow bottom-arrow" style="left: 66.3%; top: 52.6%; min-width: 250px;">',
  '<div class="mf-callout-custom center right-arrow bottom-arrow temp-drag" style="left: 66.3%; top: 52.6%; min-width: 250px;">'
);
// Vacuum
c = c.replace(
  '<div class="mf-callout-custom center right-arrow bottom-arrow" style="left: 66.4%; top: 65.4%; min-width: 250px;">',
  '<div class="mf-callout-custom center right-arrow bottom-arrow temp-drag" style="left: 66.4%; top: 65.4%; min-width: 250px;">'
);

const devToolsJS = `
            <!-- Developer Drag & Drop UI (Callouts Only) -->
            <style>
              .mf-callout-custom.temp-drag { display: block !important; opacity: 1 !important; z-index: 999 !important; pointer-events: auto !important; }
            </style>
            <div id="coord-display" style="position:absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.8); color: #0f0; padding: 5px 10px; border-radius: 4px; font-family: monospace; z-index: 1000; pointer-events: none; display: none;">X: 0.0%, Y: 0.0%</div>
            <button id="save-layout-btn" style="position:absolute; top: 10px; left: 50%; transform: translateX(-50%); background: #ffcc00; color: #000; font-weight: bold; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; z-index: 1000;">메시지창 5개 배치 완료 (저장)</button>
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
                  console.log('FINAL_CALLOUT_COORDINATES:', JSON.stringify(data));
                  alert('최종 팝업 좌표가 콘솔에 저장되었습니다.');
                });
              });
            </script>
`;

const targetStr = '</div>\n        </div>\n      </section>\n      <section id="sec-mf-code-view" class="content-section">';
const insertIdx = c.indexOf(targetStr);
if (insertIdx > -1) {
    c = c.substring(0, insertIdx) + devToolsJS + c.substring(insertIdx);
    fs.writeFileSync('index.html', c);
    console.log('Reverted batch 2 popups back to drag mode with arrows pre-applied.');
} else {
    console.log('Could not find insert position.');
}
