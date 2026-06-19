const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

// Find the click listener in the injected script
const target = `                  el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if(selectedEl) selectedEl.style.outline = 'none';
                    selectedEl = el;
                    selectedEl.style.outline = '3px solid red'; // Highlight selected
                  });`;

const replacement = `                  el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if(selectedEl) {
                        selectedEl.style.outline = 'none';
                        if(selectedEl.dataset.origRadius !== undefined) {
                            selectedEl.style.borderRadius = selectedEl.dataset.origRadius;
                        }
                    }
                    selectedEl = el;
                    if(selectedEl.dataset.origRadius === undefined) {
                        selectedEl.dataset.origRadius = selectedEl.style.borderRadius || '';
                    }
                    selectedEl.style.outline = '3px solid red'; // Highlight selected
                    selectedEl.style.borderRadius = '0'; // 직각으로 만들어서 모서리 크기 조절 핸들(우측 하단) 노출
                  });
                  
                  // Deselect handler update
                  container.addEventListener('click', () => {
                    if(selectedEl) {
                        selectedEl.style.outline = 'none';
                        if(selectedEl.dataset.origRadius !== undefined) {
                            selectedEl.style.borderRadius = selectedEl.dataset.origRadius;
                        }
                    }
                    selectedEl = null;
                  });`;

if(c.includes('if(selectedEl) selectedEl.style.outline = \'none\';')) {
    // A bit of string manipulation to replace the handlers safely
    c = c.replace(/el\.addEventListener\('click', \(e\) => {[\s\S]*?}\);/, `el.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if(selectedEl) {
                        selectedEl.style.outline = 'none';
                        if(selectedEl.dataset.origRadius !== undefined) {
                            selectedEl.style.borderRadius = selectedEl.dataset.origRadius;
                        }
                    }
                    selectedEl = el;
                    if(selectedEl.dataset.origRadius === undefined) {
                        selectedEl.dataset.origRadius = selectedEl.style.borderRadius || '';
                    }
                    selectedEl.style.outline = '3px solid red';
                    selectedEl.style.borderRadius = '0'; 
                  });`);
                  
    c = c.replace(/container\.addEventListener\('click', \(\) => {[\s\S]*?}\);/, `container.addEventListener('click', () => {
                  if(selectedEl) {
                      selectedEl.style.outline = 'none';
                      if(selectedEl.dataset.origRadius !== undefined) {
                          selectedEl.style.borderRadius = selectedEl.dataset.origRadius;
                      }
                  }
                  selectedEl = null;
                });`);
                
    fs.writeFileSync('index.html', c);
    console.log('Fixed border radius issue for resize handle.');
} else {
    console.log('Target not found.');
}
