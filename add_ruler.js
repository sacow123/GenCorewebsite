const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const rulerJS = `
                // --- RULER TOOL (Point 1 to Point 2) ---
                let measureStart = null;
                const rulerLine = document.createElement('div');
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
                      y: e.clientY - rect.top,
                      cx: e.clientX,
                      cy: e.clientY
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
                    
                    coordDisplay.textContent = \`W: \${Math.round(width)}px (\${wPct}%), H: \${Math.round(height)}px (\${hPct}%)\`;
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
                      alert(\`측정 결과:\\n너비: \${Math.round(width)}px (\${wPct}%)\\n높이: \${Math.round(height)}px (\${hPct}%)\`);
                    }
                    
                    measureStart = null;
                    rulerLine.style.display = 'none';
                  }
                });
`;

// Inject into the dev tools script
const hook = "const draggables = container.querySelectorAll('.temp-drag.mf-hotspot');";
if (c.includes(hook)) {
    c = c.replace(hook, hook + '\n' + rulerJS);
    fs.writeFileSync('index.html', c);
    console.log('Added ruler tool.');
} else {
    console.log('Hook not found.');
}
