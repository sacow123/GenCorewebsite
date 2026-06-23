const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// Fix 1: Restore the deleted buttons
const deletedButtons = `
            <!-- 상단 -->
            <button class="mf-hotspot pill" style="left: 26.4%; top: 5.4%; width: 13.2%; height: 5%; border-radius: 999px;"></button>
            <div class="mf-callout-custom center" style="left: 26.5%; top: 8.9%; min-width: 315px;"><span class="title">코드뷰 페이지</span><span class="desc">: 코드뷰 페이지로 이동합니다</span></div>

            <button class="mf-hotspot pill" style="left: 60.3%; top: 5.4%; width: 13.3%; height: 5%; border-radius: 999px;"></button>
            <div class="mf-callout-custom center right-arrow" style="left: 67.9%; top: 8.7%; min-width: 295px;"><span class="title">툴 리스트 페이지</span><span class="desc">: 툴리스트 페이지를 엽니다</span></div>
`;
const targetStylesEnd = `            </style>

            <button class="mf-hotspot" style="left: 83.4%; top: 2%; width: 4.3%; height: 6.8%; border-radius: 50%;"></button>`;
if (html.includes(targetStylesEnd)) {
    html = html.replace(targetStylesEnd, `            </style>\n${deletedButtons}\n            <button class="mf-hotspot" style="left: 83.4%; top: 2%; width: 4.3%; height: 6.8%; border-radius: 50%;"></button>`);
    console.log("Successfully restored deleted buttons.");
} else {
    console.log("Could not find the target styles end block to insert deleted buttons!");
}

// Fix 2: Merge the second container into the first container in sec-mf-toollifetimesetting
const targetToReplace = `           <!-- 4. 공구 수명 입력창 -->
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

if (html.includes(targetToReplace)) {
    html = html.replace(targetToReplace, exactReplacement);
    console.log("Successfully replaced the container html");
} else {
    console.log("Could not find the target container HTML block!");
}

fs.writeFileSync('index.html', html, 'utf8');
console.log("Fix completed");
