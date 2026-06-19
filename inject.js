const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

const cssToAdd = `
              .mf-rounded-rect {
                position: absolute;
                border: 5px solid #ffcc00;
                border-radius: 12px;
                cursor: pointer;
                z-index: 5;
              }
              .mf-rect {
                position: absolute;
                border: 5px solid #ffcc00;
                cursor: pointer;
                z-index: 5;
              }
              .mf-callout-custom {
                position: absolute;
                min-width: 170px;
                max-width: 400px;
                padding: 12px 16px;
                background: rgba(20, 15, 35, 0.45);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                color: #fff;
                border: 2px solid #ffcc00;
                border-radius: 8px;
                box-shadow: 0 10px 28px rgba(0, 0, 0, 0.32);
                opacity: 0;
                transform: translateY(6px);
                transition: .15s ease;
                pointer-events: none;
                z-index: 10;
              }
              .mf-callout-custom .title {
                display: block;
                font-size: 22px;
                line-height: 1.15;
                font-weight: 800;
                color: #ffcc00;
                margin-bottom: 4px;
              }
              .mf-callout-custom .desc {
                display: block;
                font-size: 21px;
                line-height: 1.35;
                color: #fff;
              }
              .mf-hotspot:hover+.mf-callout-custom, .mf-rounded-rect:hover+.mf-callout-custom, .mf-rect:hover+.mf-callout-custom {
                opacity: 1;
                transform: translateY(0);
              }
              .mf-callout-custom::before, .mf-callout-custom::after {
                content: ''; position: absolute; width: 0; height: 0; border-style: solid;
              }
              .mf-callout-custom::before { border-width: 0 10px 10px 10px; border-color: transparent transparent #ffcc00 transparent; top: -10px; left: 20px; }
              .mf-callout-custom::after { border-width: 0 8px 8px 8px; border-color: transparent transparent rgba(20, 15, 35, 0.45) transparent; top: -8px; left: 22px; }
              .mf-callout-custom.right-arrow::before { left: auto; right: 20px; }
              .mf-callout-custom.right-arrow::after { left: auto; right: 22px; }
              .mf-callout-custom.bottom-arrow::before { border-width: 10px 10px 0 10px; border-color: #ffcc00 transparent transparent transparent; top: auto; bottom: -10px; }
              .mf-callout-custom.bottom-arrow::after { border-width: 8px 8px 0 8px; border-color: rgba(20, 15, 35, 0.45) transparent transparent transparent; top: auto; bottom: -8px; }
`;

c = c.replace('</style>', cssToAdd + '\n            </style>');

// Add M code popup next to Ready button (line 4004 approx)
const mCodePopup = `
            <div class="mf-rounded-rect" style="left:88.2%; top:94.575%; width:6.5%; height:9.35%;"></div>
            <div class="mf-callout-custom right-arrow bottom-arrow" style="left:88.2%; top:93.7%;">
              <span class="title" data-i18n="popup-m-code-title">M code:</span>
              <span class="desc" data-i18n="popup-m-code-desc" style="text-align: left;">
                M 코드 동작 중일 때 표시됩니다.<br>
                해당 아이콘이 활성화 된 상태에서는 기계를 조작할 수 없습니다.
              </span>
            </div>`;

// Insert after the last mf-hotspot in sec-mf-main-page
const insertIndex = c.lastIndexOf('<div class="mf-callout center" style="left:0.9%;top:82.0%;min-width:220px;">');
if(insertIndex > 0) {
  const insertEnd = c.indexOf('</div>', insertIndex) + 6;
  c = c.substring(0, insertEnd) + mCodePopup + c.substring(insertEnd);
}

fs.writeFileSync('index.html', c);
