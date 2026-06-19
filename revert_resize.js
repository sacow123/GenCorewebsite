const fs = require('fs');

const cleanDevToolsJS = `
            <!-- Developer Drag & Drop UI -->
            <div id="coord-display" style="position:absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.8); color: #0f0; padding: 5px 10px; border-radius: 4px; font-family: monospace; z-index: 1000; pointer-events: none; display: none;">X: 0.0%, Y: 0.0%</div>
            <button id="save-layout-btn" style="position:absolute; top: 10px; left: 50%; transform: translateX(-50%); background: #ffcc00; color: #000; font-weight: bold; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; z-index: 1000;">배치 완료 (좌표 저장)</button>
            <style>.mf-callout-custom { display: none !important; }</style>
            <script>
              document.addEventListener('DOMContentLoaded', () => {
                const container = document.querySelector('#sec-mf-main-page .content-card > div');
                const coordDisplay = document.getElementById('coord-display');
                
                // Show coordinates on hover
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

                // Make hotspots and callouts draggable
                const draggables = container.querySelectorAll('.mf-hotspot, .mf-callout-custom');
                let activeEl = null;
                let startMouseX = 0;
                let startMouseY = 0;
                let startLeft = 0;
                let startTop = 0;

                // KEYBOARD SUPPORT (Move only, no resize)
                let selectedEl = null;

                draggables.forEach(el => {
                  el.style.cursor = 'move';
                  el.style.pointerEvents = 'auto'; 
                  
                  if(el.classList.contains('mf-callout-custom')) {
                    el.style.opacity = '1'; 
                  }

                  el.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    activeEl = el;
                    startMouseX = e.clientX;
                    startMouseY = e.clientY;
                    startLeft = parseFloat(el.style.left) || parseFloat(el.style.right) || 0;
                    startTop = parseFloat(el.style.top) || 0;
                    el.style.zIndex = '100'; 
                  });

                  // Select for keyboard moving
                  el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if(selectedEl) selectedEl.style.outline = 'none';
                    selectedEl = el;
                    selectedEl.style.outline = '3px solid red'; // Highlight selected
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
                  activeEl.style.right = 'auto'; // Disable right anchoring while dragging
                });

                document.addEventListener('mouseup', () => {
                  if (activeEl) {
                    activeEl.style.zIndex = '';
                    activeEl = null;
                  }
                });

                // Click outside to deselect
                container.addEventListener('click', () => {
                  if(selectedEl) selectedEl.style.outline = 'none';
                  selectedEl = null;
                });

                // Keyboard listener (Move only)
                document.addEventListener('keydown', (e) => {
                  if(!selectedEl || e.ctrlKey) return; // Ignore if ctrl is pressed (to avoid accidental resize attempts)
                  
                  let left = parseFloat(selectedEl.style.left) || parseFloat(selectedEl.style.right) || 0;
                  let top = parseFloat(selectedEl.style.top) || 0;
                  
                  let step = 0.1; // 0.1% increment
                  if (e.shiftKey) step = 0.5; // fast move with shift

                  let moved = false;
                  if (e.key === 'ArrowUp') { top -= step; moved = true; }
                  if (e.key === 'ArrowDown') { top += step; moved = true; }
                  if (e.key === 'ArrowLeft') { left -= step; moved = true; }
                  if (e.key === 'ArrowRight') { left += step; moved = true; }

                  if (moved) {
                    e.preventDefault(); // prevent page scroll
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
                    return { index: i, class: el.className, style: el.getAttribute('style') };
                  });
                  console.log('FINAL_COORDINATES:', JSON.stringify(data));
                  alert('좌표가 콘솔에 저장되었습니다. 텍스트를 복사해서 채팅창에 붙여넣어 주세요.');
                });
              });
            </script>
`;

let c = fs.readFileSync('index.html', 'utf8');

const startToken = '<!-- Developer Drag & Drop UI -->';
const endToken = '</script>';

const startIndex = c.indexOf(startToken);
const endIndex = c.indexOf(endToken, startIndex) + endToken.length;

if (startIndex > -1 && endIndex > -1) {
    let before = c.substring(0, startIndex);
    let after = c.substring(endIndex);
    
    // Change divs back to buttons for hotspots
    after = after.replace(/<div class="mf-hotspot([^>]*)>(.*?)<\/div>/g, '<button class="mf-hotspot$1>$2</button>');
    
    fs.writeFileSync('index.html', before + cleanDevToolsJS + after);
    console.log('Reverted to clean drag/move only code. Buttons restored.');
} else {
    console.log('Could not find injection boundaries.');
}
