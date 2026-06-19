const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const keyboardJS = `
                // KEYBOARD SUPPORT
                let selectedEl = null;

                // Make draggables selectable
                draggables.forEach(el => {
                  el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if(selectedEl) selectedEl.style.outline = 'none';
                    selectedEl = el;
                    selectedEl.style.outline = '3px solid red'; // Highlight selected
                  });
                });

                // Click outside to deselect
                container.addEventListener('click', () => {
                  if(selectedEl) selectedEl.style.outline = 'none';
                  selectedEl = null;
                });

                // Keyboard listener
                document.addEventListener('keydown', (e) => {
                  if(!selectedEl) return;
                  
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
                    selectedEl.style.right = 'auto'; // Disable right anchoring
                  }
                });
`;

// Inject keyboardJS into the script block
const hook = "document.getElementById('save-layout-btn').addEventListener('click'";
if (c.includes(hook)) {
    c = c.replace(hook, keyboardJS + '\n                ' + hook);
    fs.writeFileSync('index.html', c);
    console.log('Added keyboard support.');
} else {
    console.log('Hook not found.');
}
