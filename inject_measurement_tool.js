const fs = require('fs');

const measurementToolJS = `
            <!-- ===== DEVELOPER MEASUREMENT TOOL (1단계: 테두리 만들기) ===== -->
            <style id="dev-measurement-styles">
              /* 팝업 기능 일시 중단 */
              .mf-callout-custom {
                display: none !important;
              }
              /* 핫스팟이 눈에 보이도록 강제 스타일 지정 */
              .mf-hotspot {
                border: 2px solid #ffcc00 !important;
                background: rgba(255, 204, 0, 0.15) !important;
                opacity: 1 !important;
                animation: none !important;
              }
              /* 측정선 스타일 */
              #ruler-box {
                position: absolute;
                border: 2px dashed #00ff00;
                background: rgba(0, 255, 0, 0.15);
                pointer-events: none;
                z-index: 10000;
                display: none;
              }
            </style>

            <div id="coord-display" style="position:absolute; top: 10px; left: 10px; background: rgba(0,0,0,0.85); color: #00ff00; padding: 6px 12px; border-radius: 4px; font-family: monospace; font-size: 14px; z-index: 10001; pointer-events: none; border: 1px solid #00ff00;">
              X: 0.0%, Y: 0.0% (Alt + 드래그하여 크기 측정)
            </div>
            <div id="ruler-box"></div>

            <script>
              document.addEventListener('DOMContentLoaded', () => {
                // 배치 2 컨테이너 찾기
                const container = document.querySelector('#sec-mf-main-page .content-card > div');
                if (!container) return;

                const coordDisplay = document.getElementById('coord-display');
                const rulerBox = document.getElementById('ruler-box');

                // 마우스 실시간 좌표 표시 (%)
                container.addEventListener('mousemove', (e) => {
                  if (measureStart && e.altKey) return; // Alt 드래그 중에는 좌표 표시 대신 측정 표시
                  const rect = container.getBoundingClientRect();
                  const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
                  const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
                  coordDisplay.textContent = \`X: \${x}%, Y: \${y}% (Alt + 드래그하여 크기 측정)\`;
                });

                // Alt 드래그 측정 시작
                let measureStart = null;

                container.addEventListener('mousedown', (e) => {
                  if (e.altKey) {
                    e.preventDefault();
                    e.stopPropagation();
                    const rect = container.getBoundingClientRect();
                    measureStart = {
                      x: e.clientX - rect.left,
                      y: e.clientY - rect.top
                    };
                    rulerBox.style.left = measureStart.x + 'px';
                    rulerBox.style.top = measureStart.y + 'px';
                    rulerBox.style.width = '0px';
                    rulerBox.style.height = '0px';
                    rulerBox.style.display = 'block';
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

                    rulerBox.style.left = left + 'px';
                    rulerBox.style.top = top + 'px';
                    rulerBox.style.width = width + 'px';
                    rulerBox.style.height = height + 'px';

                    const wPct = (width / rect.width * 100).toFixed(1);
                    const hPct = (height / rect.height * 100).toFixed(1);

                    coordDisplay.textContent = \`W: \${Math.round(width)}px (\${wPct}%), H: \${Math.round(height)}px (\${hPct}%)\`;
                  }
                });

                document.addEventListener('mouseup', () => {
                  if (measureStart) {
                    const rect = container.getBoundingClientRect();
                    const width = parseFloat(rulerBox.style.width);
                    const height = parseFloat(rulerBox.style.height);
                    const left = parseFloat(rulerBox.style.left);
                    const top = parseFloat(rulerBox.style.top);

                    if (width > 5 || height > 5) {
                      const wPct = (width / rect.width * 100).toFixed(1);
                      const hPct = (height / rect.height * 100).toFixed(1);
                      const leftPct = (left / rect.width * 100).toFixed(1);
                      const topPct = (top / rect.height * 100).toFixed(1);

                      console.log('MEASURED_COORDINATES:', { left: leftPct, top: topPct, width: wPct, height: hPct });
                      alert(\`[측정 결과]\\nleft: \${leftPct}%\\ntop: \${topPct}%\\nwidth: \${wPct}%\\nheight: \${hPct}%\\n\\n(F12 콘솔에도 MEASURED_COORDINATES로 저장되었습니다)\`);
                    }

                    measureStart = null;
                    rulerBox.style.display = 'none';
                  }
                });
              });
            </script>
`;

let c = fs.readFileSync('index.html', 'utf8');

const marker = '<!-- 상단 -->';
const markerIndex = c.indexOf(marker);

if (markerIndex > -1) {
    c = c.substring(0, markerIndex) + measurementToolJS + '\n            ' + c.substring(markerIndex);
    fs.writeFileSync('index.html', c);
    console.log('Injected developer measurement tool successfully.');
} else {
    console.error('Error: <!-- 상단 --> marker not found in index.html');
}
