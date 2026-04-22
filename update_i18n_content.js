const fs = require('fs');

const i18nPath = 'c:/Users/USER/Desktop/2026-gencore- manual/i18n.js';
let i18nContent = fs.readFileSync(i18nPath, 'utf8');

const koContent = {
  "sec-mf-spec": `
          <div class="spec-images" style="display: flex; gap: 20px; margin-bottom: 30px; justify-content: center; align-items: flex-end;">
            <img data-img-key="mf-spec-front" alt="MillFix 정면 도면" style="height: 350px; border-radius: 8px; object-fit: contain;">
            <img data-img-key="mf-spec-side" alt="MillFix 측면 도면" style="height: 350px; border-radius: 8px; object-fit: contain;">
          </div>
          <table class="spec-table">
            <tbody>
              <tr>
                <th style="width: 20%; background-color: #f9f9f9; font-weight: 600;">MillFixº 사양</th>
                <td style="width: 40%;"></td>
                <td style="width: 40%;"></td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">가공 방식</th>
                <td>Dry</td>
                <td></td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">크기 (W x D x H)</th>
                <td>426 x 520 x 579.5mm</td>
                <td></td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">무게</th>
                <td>42kg</td>
                <td></td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">스핀들</th>
                <td>800w DC type<br>60,000 RPM</td>
                <td>Sycotec / Germany</td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">가공축</th>
                <td>동시 5 축</td>
                <td></td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">모터</th>
                <td>Stepping motor</td>
                <td></td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">운동 범위</th>
                <td style="line-height: 1.6;">
                  X-axis: 158mm<br>
                  Y-axis: 124mm<br>
                  Z-axis: 101mm<br>
                  A-axis: +25° to -25°<br>
                  B-axis: 360° (Free rotation)
                </td>
                <td></td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">툴 포켓</th>
                <td>15 ea</td>
                <td>공구 샹크 직경: 4mm</td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">전원 (Input)</th>
                <td>AC110, 220V, 3~5A, 50/60Hz</td>
                <td></td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">모니터</th>
                <td>13.3" LCD touch monitor</td>
                <td></td>
              </tr>
            </tbody>
          </table>
  `,
  "sec-mf-parts": `
          <div style="text-align: center; margin-bottom: 20px;">
            <img data-img-key="mf-part-left" alt="MillFix 부분 명칭 (좌측)" style="max-width: 100%; border-radius: 8px;">
            <p style="margin-top: 10px; color: #666;">MillFix 장비 내부 및 주요 부분 명칭 (좌측면)</p>
          </div>
          <div class="info-note" style="background: #f8f9fa; padding: 15px; border-left: 4px solid #6366f1; border-radius: 4px;">
            <p style="margin: 0; color: #444;">※ 추가 부분 명칭(정면, 우측 등) 이미지는 순차적으로 업데이트될 예정입니다.</p>
          </div>
  `,
  "sec-mai-spec": `
          <table class="spec-table">
            <tbody>
              <tr>
                <th style="width: 20%; background-color: #f9f9f9; font-weight: 600;">M AIº 사양</th>
                <td style="width: 80%;">프리미엄 5축 밀링 머신</td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">가공 방식</th>
                <td>Dry & Wet 통합 지원</td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">스핀들 성능</th>
                <td>Max 60,000 RPM / 고정밀 세라믹 베어링</td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">ATC (자동 공구 교환)</th>
                <td>15 포켓 (표준)</td>
              </tr>
              <tr>
                <th style="background-color: #f9f9f9;">정밀도</th>
                <td>±0.005mm 이내 반복 정밀도</td>
              </tr>
            </tbody>
          </table>
  `,
  "sec-mai-intro": `
          <div style="padding: 20px; line-height: 1.8;">
            <h3 style="color: #6366f1; margin-bottom: 15px;">AI 기술이 접목된 차세대 밀링 머신</h3>
            <p>M AIº는 GenCore의 최첨단 인공지능 보정 기술이 적용된 치과용 밀링 머신입니다.</p>
            <ul style="list-style: disc; padding-left: 20px; margin-top: 10px;">
              <li>실시간 가공 상태 모니터링 및 자동 보정</li>
              <li>고강도 소재부터 부드러운 소재까지 폭넓은 가공 범위</li>
              <li>사용자 편의성을 극대화한 터치 인터페이스</li>
            </ul>
          </div>
  `,
  "section-home": `
          <div class="welcome-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <div class="card" style="padding: 25px; background: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
              <h3 style="color: #4f46e5; margin-bottom: 10px;">환영합니다</h3>
              <p style="color: #4b5563;">GenCore 제품 매뉴얼 및 기술 지원 센터입니다. 최신 사양과 유지보수 가이드를 확인하세요.</p>
            </div>
            <div class="card" style="padding: 25px; background: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
              <h3 style="color: #4f46e5; margin-bottom: 10px;">다국어 지원</h3>
              <p style="color: #4b5563;">우측 상단의 지구본 아이콘을 통해 한국어, 영어, 일본어, 스페인어 중 선택하실 수 있습니다.</p>
            </div>
          </div>
  `
};

// Add generic placeholders for all other sections to make it look cleaner
const allSections = [
  "sec-mai-intro", "sec-mai-spec", "sec-mai-parts", "sec-mai-components",
  "sec-mai-precheck", "sec-mai-transport", "sec-mai-cable", "sec-mai-power",
  "sec-mai-tool-setup", "sec-mai-calibration", "sec-mai-main-page", "sec-mai-tool-list",
  "sec-mai-settings", "sec-mai-hd-install", "sec-mai-hd-blank", "sec-mai-hd-settings",
  "sec-mai-hd-features", "sec-mai-routine", "sec-mai-tool-care", "sec-mai-collet",
  "sec-mf-intro", "sec-mf-components", "sec-mf-precheck", "sec-mf-transport",
  "sec-mf-cable", "sec-mf-power", "sec-mf-tool-setup", "sec-mf-calibration",
  "sec-mf-main-page", "sec-mf-tool-list", "sec-mf-settings", "sec-mf-hd-install",
  "sec-mf-hd-blanks", "sec-mf-hd-settings", "sec-mf-hd-features", "sec-mf-routine",
  "sec-mf-tool-care", "sec-mf-collet", "sec-rep-mai-troubleshoot", "sec-rep-mai-errorcode",
  "sec-rep-mai-parts-guide", "sec-rep-mf-troubleshoot", "sec-rep-mf-parts-guide",
  "section-tutorial", "section-faq"
];

allSections.forEach(id => {
  if (!koContent[id]) {
    koContent[id] = `
      <div style="text-align: center; padding: 40px; color: #888;">
        <div style="font-size: 48px; margin-bottom: 20px;">🛠️</div>
        <p>해당 섹션의 상세 콘텐츠를 준비 중입니다.</p>
        <p style="font-size: 0.9em; color: #aaa;">매뉴얼 업데이트를 통해 곧 상세 내용을 확인하실 수 있습니다.</p>
      </div>
    `;
  }
});

// Update i18n.js
// We'll insert the 'contents' property into each language object.
// This is a bit hacky with regex but should work for this structure.

// Find where "ko": { ends (before "en": {)
const koEndIndex = i18nContent.indexOf('"en": {');
const koInsertIndex = i18nContent.lastIndexOf('}', koEndIndex) - 1;

// Prepare the string to insert
const koContentStr = `,\n    contents: ${JSON.stringify(koContent, null, 2).replace(/\n/g, '\n    ')}`;

// Insert for KO
let newI18n = i18nContent.slice(0, koInsertIndex + 1) + koContentStr + i18nContent.slice(koInsertIndex + 1);

// We should do it for other languages too, but let's start with KO.
// For others, we can use the same placeholder but translated.

fs.writeFileSync(i18nPath, newI18n, 'utf8');
console.log('i18n.js updated with dynamic content!');
