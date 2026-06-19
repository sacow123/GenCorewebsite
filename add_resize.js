const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const resizeJS = `
                // ADD CSS RESIZE
                draggables.forEach(el => {
                  el.style.resize = 'both';
                  el.style.overflow = 'hidden';
                });

                // ADD KEYBOARD RESIZE (Ctrl + Arrows)
                document.addEventListener('keydown', (e) => {
                  if(!selectedEl || !e.ctrlKey) return;
                  
                  let width = parseFloat(selectedEl.style.width) || 0;
                  let height = parseFloat(selectedEl.style.height) || 0;
                  
                  // if width/height is currently in px (due to mouse resize), convert to % first
                  const rect = container.getBoundingClientRect();
                  if(selectedEl.style.width.includes('px')) width = (parseFloat(selectedEl.style.width) / rect.width) * 100;
                  if(selectedEl.style.height.includes('px')) height = (parseFloat(selectedEl.style.height) / rect.height) * 100;

                  let step = 0.1;
                  if (e.shiftKey) step = 0.5;

                  let resized = false;
                  if (e.key === 'ArrowUp') { height -= step; resized = true; }
                  if (e.key === 'ArrowDown') { height += step; resized = true; }
                  if (e.key === 'ArrowLeft') { width -= step; resized = true; }
                  if (e.key === 'ArrowRight') { width += step; resized = true; }

                  if (resized) {
                    e.preventDefault();
                    width = Math.max(0.1, Math.round(width * 10) / 10);
                    height = Math.max(0.1, Math.round(height * 10) / 10);
                    selectedEl.style.width = width + '%';
                    selectedEl.style.height = height + '%';
                  }
                });

                // OVERRIDE SAVE FUNCTION TO CONVERT PX TO %
                const oldBtn = document.getElementById('save-layout-btn');
                const newBtn = oldBtn.cloneNode(true);
                oldBtn.parentNode.replaceChild(newBtn, oldBtn);

                newBtn.addEventListener('click', () => {
                  const rect = container.getBoundingClientRect();
                  const data = Array.from(draggables).map((el, i) => {
                    // Convert px to %
                    if (el.style.width.includes('px')) {
                      el.style.width = (parseFloat(el.style.width) / rect.width * 100).toFixed(1) + '%';
                    }
                    if (el.style.height.includes('px')) {
                      el.style.height = (parseFloat(el.style.height) / rect.height * 100).toFixed(1) + '%';
                    }
                    // Clean up temp resize properties
                    el.style.resize = '';
                    el.style.overflow = '';
                    el.style.outline = '';
                    return { index: i, class: el.className, style: el.getAttribute('style') };
                  });
                  console.log('FINAL_COORDINATES:', JSON.stringify(data));
                  alert('좌표와 크기 정보가 콘솔에 저장되었습니다. 텍스트를 복사해서 채팅창에 주시면 바로 적용합니다.');
                });
`;

const hook = "// Click outside to deselect";
if (c.includes(hook)) {
    c = c.replace(hook, resizeJS + '\n                ' + hook);
    fs.writeFileSync('index.html', c);
    console.log('Added resize support.');
} else {
    console.log('Hook not found.');
}
