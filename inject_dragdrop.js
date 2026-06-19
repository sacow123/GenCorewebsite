const fs = require('fs');

const recHtml = fs.readFileSync('recovered_html.txt', 'utf8');

// Extract the hotspots part (between "<!-- 상단 -->" and end of the M-code block)
const hsStart = recHtml.indexOf('<!-- 상단 -->');
const hsEnd = recHtml.indexOf('해당 아이콘이 활성화 된 상태에서는 기계를 조작할 수 없습니다.', hsStart) + 40;
let hotspotsBlock = recHtml.substring(hsStart, hsEnd) + '\n              </span>\n            </div>';

// Replace line numbers if any
hotspotsBlock = hotspotsBlock.replace(/^[ \t]*\d{4}: /gm, '');

// Convert to glassmorphism
hotspotsBlock = hotspotsBlock.replace(/class="mf-callout small center"/g, 'class="mf-callout-custom center"');
hotspotsBlock = hotspotsBlock.replace(/class="mf-callout center"/g, 'class="mf-callout-custom center"');
hotspotsBlock = hotspotsBlock.replace(/class="mf-callout"/g, 'class="mf-callout-custom"');
hotspotsBlock = hotspotsBlock.replace(/class="mf-callout small"/g, 'class="mf-callout-custom"');

// Prepare the Drag and Drop JS
const devToolsJS = `
            <!-- Developer Drag & Drop UI -->
            <div id="coord-display" style="position:absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.8); color: #0f0; padding: 5px 10px; border-radius: 4px; font-family: monospace; z-index: 1000; pointer-events: none; display: none;">X: 0.0%, Y: 0.0%</div>
            <button id="save-layout-btn" style="position:absolute; top: 10px; right: 10px; background: #ffcc00; color: #000; font-weight: bold; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; z-index: 1000;">배치 완료 (좌표 저장)</button>

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
                const draggables = container.querySelectorAll('.mf-hotspot, .mf-callout-custom, .mf-rounded-rect');
                let activeEl = null;
                let startMouseX = 0;
                let startMouseY = 0;
                let startLeft = 0;
                let startTop = 0;

                draggables.forEach(el => {
                  el.style.cursor = 'move';
                  el.style.pointerEvents = 'auto'; // allow dragging callouts directly
                  
                  // Keep callouts visible for editing
                  if(el.classList.contains('mf-callout-custom')) {
                    el.style.opacity = '1';
                  }

                  el.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    activeEl = el;
                    startMouseX = e.clientX;
                    startMouseY = e.clientY;
                    startLeft = parseFloat(el.style.left) || 0;
                    startTop = parseFloat(el.style.top) || 0;
                    el.style.zIndex = '100'; // bring to front
                  });
                });

                document.addEventListener('mousemove', (e) => {
                  if (!activeEl) return;
                  const rect = container.getBoundingClientRect();
                  
                  // Calculate dx/dy in percentages
                  const dx = ((e.clientX - startMouseX) / rect.width) * 100;
                  const dy = ((e.clientY - startMouseY) / rect.height) * 100;
                  
                  // Apply with 0.1% precision
                  let newLeft = Math.round((startLeft + dx) * 10) / 10;
                  let newTop = Math.round((startTop + dy) * 10) / 10;
                  
                  // Constrain to 0-100%
                  newLeft = Math.max(0, Math.min(100, newLeft));
                  newTop = Math.max(0, Math.min(100, newTop));

                  activeEl.style.left = newLeft + '%';
                  activeEl.style.top = newTop + '%';
                });

                document.addEventListener('mouseup', () => {
                  if (activeEl) {
                    activeEl.style.zIndex = '';
                    activeEl = null;
                  }
                });

                // Save layout
                document.getElementById('save-layout-btn').addEventListener('click', () => {
                  // Collect all draggables and their inline styles
                  const data = Array.from(draggables).map((el, i) => {
                    return { index: i, class: el.className, style: el.getAttribute('style') };
                  });
                  console.log('FINAL_COORDINATES:', JSON.stringify(data));
                  alert('좌표가 콘솔에 저장되었습니다. 개발자 모드(F12) 콘솔에서 확인하거나, AI에게 완료되었다고 알려주세요.');
                });
              });
            </script>
`;

let c = fs.readFileSync('index.html', 'utf8');

// Insert hotspots and dev tools into index.html
const mainSecStart = c.indexOf('<section id="sec-mf-main-page"');
const styleEnd = c.indexOf('</style>', mainSecStart) + 8;

const before = c.substring(0, styleEnd);
const after = c.substring(styleEnd);

// Find the closing divs for the container
const closeDivsIdx = after.indexOf('</div>\n        </div>\n      </section>');

const finalHTML = before + '\n' + devToolsJS + '\n' + hotspotsBlock + '\n' + after.substring(closeDivsIdx);

fs.writeFileSync('index.html', finalHTML);
console.log('Rebuilt main page with Drag & Drop tools and hotspots');
