const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const targetStr = `           <!-- 4. 공구 수명 입력창 -->
           <button class="mf-hotspot" style="position: absolute; left:84.6%; top:34.3%; width:9.0%; height:54.7%; border: 5px solid #ffcc00; border-radius: 28px; background: transparent; cursor: pointer;"></button>
           <div class="mf-callout-custom center right-arrow bottom-arrow" style="position: absolute; left: 92%; top: 37%; min-width: 340px; background: rgba(20, 15, 35, 0.45); backdrop-filter: blur(12px); border: 2px solid #ffcc00; pointer-events: none; z-index: 10;">
             <span class="title" style="color: #ffcc00;">공구 수명 입력창</span><span class="desc" style="color: white;">: 공구 수명을 수동으로 설정할 수 있습니다.</span>
           </div>
         </div>

         <div class="stage-container" style="position: relative; width: 100%; aspect-ratio: 1524 / 893; border-radius: 8px; background: #000; overflow: visible;">
           <img loading="lazy" src="./assets/images/sec-mf-toollifetimesetting/2.webp" alt="공구 사용시간 설정 2" class="base" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: contain; user-select: none; -webkit-user-drag: none;" />
           
           <button class="mf-hotspot" style="position: absolute; left:54.9%; top:14.8%; width:11.8%; height:8.0%; border: 5px solid #E59EDD; border-radius: 999px; background: transparent; cursor: pointer;"></button>
           <div class="mf-callout-custom no-arrow" style="position: absolute; left:79.2%; top:61.6%; width:18.4%; height:26.4%; border: 5px solid #E59EDD; border-radius: 28px; background: rgba(229, 158, 221, 0.2); backdrop-filter: none; padding: 0; box-shadow: none; min-width: 0; transform: none !important; pointer-events: none;"></div>
           
           <button class="mf-hotspot" style="position: absolute; left:67.8%; top:14.3%; width:14.4%; height:8.8%; border: 5px solid #8ED973; border-radius: 999px; background: transparent; cursor: pointer;"></button>
           <div class="mf-callout-custom no-arrow" style="position: absolute; left:79.2%; top:42.1%; width:18.7%; height:19.5%; border: 5px solid #8ED973; border-radius: 28px; background: rgba(142, 217, 115, 0.2); backdrop-filter: none; padding: 0; box-shadow: none; min-width: 0; transform: none !important; pointer-events: none;"></div>
         </div>
       </section>`;

const exactReplacement = `           <!-- 4. 공구 수명 입력창 -->
           <button class="mf-hotspot" style="position: absolute; left:84.6%; top:34.3%; width:9.0%; height:54.7%; border: 5px solid #ffcc00; border-radius: 28px; background: transparent; cursor: pointer;"></button>
           <div class="mf-callout-custom center right-arrow bottom-arrow" style="position: absolute; left: 92%; top: 37%; min-width: 340px; background: rgba(20, 15, 35, 0.45); backdrop-filter: blur(12px); border: 2px solid #ffcc00; pointer-events: none; z-index: 10;">
             <span class="title" style="color: #ffcc00;">공구 수명 입력창</span><span class="desc" style="color: white;">: 공구 수명을 수동으로 설정할 수 있습니다.</span>
           </div>
           
           <!-- 5. 핑크색 테두리 세트 -->
           <button class="mf-hotspot" style="position: absolute; left:54.9%; top:14.8%; width:11.8%; height:8.0%; border: 5px solid #E59EDD; border-radius: 999px; background: transparent; cursor: pointer;"></button>
           <div class="mf-callout-custom no-arrow" style="position: absolute; left:79.2%; top:61.6%; width:18.4%; height:26.4%; border: 5px solid #E59EDD; border-radius: 28px; background: rgba(229, 158, 221, 0.2); backdrop-filter: none; padding: 0; box-shadow: none; min-width: 0; transform: none !important; pointer-events: none; z-index: 10;"></div>
           
           <!-- 6. 초록색 테두리 세트 -->
           <button class="mf-hotspot" style="position: absolute; left:67.8%; top:14.3%; width:14.4%; height:8.8%; border: 5px solid #8ED973; border-radius: 999px; background: transparent; cursor: pointer;"></button>
           <div class="mf-callout-custom no-arrow" style="position: absolute; left:79.2%; top:42.1%; width:18.7%; height:19.5%; border: 5px solid #8ED973; border-radius: 28px; background: rgba(142, 217, 115, 0.2); backdrop-filter: none; padding: 0; box-shadow: none; min-width: 0; transform: none !important; pointer-events: none; z-index: 10;"></div>
         </div>
       </section>`;

// Replace carefully by matching lines
let lines = html.split('\n');
let startIdx = -1;
let endIdx = -1;

for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<!-- 4. 공구 수명 입력창 -->')) {
        // verify it's the right one
        if (lines[i-1] && !lines[i-1].includes('<!-- 3')) {
             startIdx = i;
        }
    }
}

if (startIdx !== -1) {
    // we want to replace from startIdx to startIdx + 16 (17 lines)
    lines.splice(startIdx, 17, ...exactReplacement.split('\n'));
    fs.writeFileSync('index.html', lines.join('\n'), 'utf8');
    console.log("Successfully replaced the second container.");
} else {
    console.log("Could not find start idx.");
}
