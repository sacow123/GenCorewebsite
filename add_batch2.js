const fs = require('fs');

const labels = [
  {title: "파일 불러오기", desc: ": 가공할 NC 파일을 불러옵니다"},
  {title: "파일명 표시 창", desc: ": 현재 불러온 파일의 이름을 표시합니다"},
  {title: "불러온 파일 삭제", desc: ": 불러온 파일을 삭제합니다"},
  {title: "호밍", desc: ": 기계를 원점 위치로 복귀시킵니다"},
  {title: "B축 30도 회전", desc: ": B축을 30도 회전시킵니다"},
  {title: "B축 180도 회전", desc: ": B축을 180도 회전시킵니다"}
];

let batchHtml = `\n            <!-- 배치 2: 파일/조작 관련 -->\n`;
for(let i=0; i<labels.length; i++) {
    // Default starting position in the center so the user can easily find and drag them.
    // Stagger them slightly so they aren't completely on top of each other.
    let left = 40 + (i * 2);
    let top = 40 + (i * 2);
    batchHtml += `            <div class="mf-hotspot" style="left: ${left}%; top: ${top}%; width: 5%; height: 5%; border-radius: 12px;"></div>\n`;
    batchHtml += `            <div class="mf-callout-custom center" style="left: ${left}%; top: ${top}%; min-width: 250px;"><span class="title">${labels[i].title}</span><span class="desc">${labels[i].desc}</span></div>\n\n`;
}

const cleanDevToolsJS = `
            <!-- Developer Drag & Drop UI (Clean Move Only) -->
            <div id="coord-display" style="position:absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.8); color: #0f0; padding: 5px 10px; border-radius: 4px; font-family: monospace; z-index: 1000; pointer-events: none; display: none;">X: 0.0%, Y: 0.0%</div>
            <button id="save-layout-btn" style="position:absolute; top: 10px; left: 50%; transform: translateX(-50%); background: #ffcc00; color: #000; font-weight: bold; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer; z-index: 1000;">테두리 배치 완료 (좌표 저장)</button>
            <style>.mf-callout-custom { display: none !important; }</style>
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

                // ONLY select the new batch hotspots (we can differentiate by looking at the parent or just selecting all hotspots, but we need to lock the first 5).
                // Wait, the first 5 are already perfectly placed. If we select ALL .mf-hotspot, the user might accidentally drag the first 5.
                // To prevent this, we only make draggables out of the ones in batch 2.
                // Actually, an easier way is to add a specific class 'batch2' to them temporarily, or just make ALL hotspots draggable but the user knows which ones to move.
                // It's safer to only make the newly added hotspots draggable. Let's filter by those that do NOT have 'right: auto' or we can just add a 'drag-target' class to them in the HTML generation above.
                // Wait, I will just select all .mf-hotspot and .mf-callout-custom but the user knows what to drag.
                // Better: Let's give the new ones a special class 'temp-drag' to only drag them.
                const draggables = container.querySelectorAll('.temp-drag');
                
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
                  console.log('BATCH2_COORDINATES:', JSON.stringify(data));
                  alert('테두리 좌표가 콘솔에 저장되었습니다. 복사해서 채팅창에 주시면 바로 적용합니다.');
                });
              });
            </script>
`;

let content = fs.readFileSync('index.html', 'utf8');

// I need to add ' temp-drag' to the batchHtml classes so the script only targets them
batchHtml = batchHtml.replace(/class="mf-hotspot"/g, 'class="mf-hotspot temp-drag"');
batchHtml = batchHtml.replace(/class="mf-callout-custom center"/g, 'class="mf-callout-custom center temp-drag"');

// The best place to insert batchHtml is right after the first 5 elements.
// Let's insert it before the closing </div> of the container.
const endOfContainer = content.lastIndexOf('</div>\n        </div>\n      </section>');

if (endOfContainer > -1) {
    content = content.substring(0, endOfContainer) + batchHtml + cleanDevToolsJS + '\n          ' + content.substring(endOfContainer);
    fs.writeFileSync('index.html', content);
    console.log('Injected batch 2 elements and clean dev tools.');
} else {
    console.log('Could not find injection point.');
}
