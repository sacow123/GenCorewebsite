const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

const mCodePopup = `
            <div class="mf-callout-custom right-arrow bottom-arrow" style="left:88.2%; top:93.7%;">
              <span class="title" data-i18n="popup-m-code-title">M code:</span>
              <span class="desc" data-i18n="popup-m-code-desc" style="text-align: left;">
                M 코드 동작 중일 때 표시됩니다.<br>
                해당 아이콘이 활성화 된 상태에서는 기계를 조작할 수 없습니다.
              </span>
            </div>`;

const readyPopup = `
            <div class="mf-callout-custom right-arrow bottom-arrow" style="left:95.0%; top:94.0%;">
              <span class="title" data-i18n="popup-ready-title">레디(Ready) 버튼:</span>
              <span class="desc" data-i18n="popup-popup-ready-desc" style="text-align: left;">
                장비 조작의 on/off 버튼.<br>
                만약 장비가 현재 조작 불가능한 형태라면 빨간색 아이콘이 점멸합니다.
              </span>
            </div>`;

c = c.replace(
    '<button class="mf-hotspot" style="left:88.2%; top:94.575%; width:6.5%; height:9.35%; border-radius:12px;"></button>',
    '<button class="mf-hotspot" style="left:88.2%; top:94.575%; width:6.5%; height:9.35%; border-radius:12px;"></button>' + mCodePopup
);

c = c.replace(
    '<button class="mf-hotspot" style="left:95.0%; top:94.375%; width:5.5%; height:8.35%; border-radius:12px;"></button>',
    '<button class="mf-hotspot" style="left:95.0%; top:94.375%; width:5.5%; height:8.35%; border-radius:12px;"></button>' + readyPopup
);

fs.writeFileSync('index.html', c);
console.log('Fixed popups on main page');
