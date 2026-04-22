const fs = require('fs');
const path = require('path');

const filePath = 'c:/Users/USER/Desktop/2026-gencore- manual/index.html';
let html = fs.readFileSync(filePath, 'utf8');

// 1. Fix garbled strings in the body
const garbledFixes = {
  "遺€遺꾨챸移?": "부분 명칭",
  "耳€?대툝 ?곌껐": "케이블 연결",
  "硫붿씤 ?섏씠吏€": "메인 페이지",
  "??由ъ뒪???섏씠吏€": "툴 리스트 페이지",
  "?ㅼ젙 ?섏씠吏€": "설정 페이지",
  "?섏떆 愿€由??ы빆": "수시 관리 사항",
  "怨듦뎄 愿€由?": "공구 관리",
  "肄쒕젢 愿€由?": "콜렛 관리",
  "?뼢截??쒖뒪??諛??ㅽ듃?뚰겕": "시스템 및 네트워크 주의사항",
  "?λ퉬 PC?먮뒗": "장비 PC에는",
  "而⑦듃濡??꾨줈洹몃옩怨쇱쓽": "컨트롤 프로그램과의",
  "諛붿씠?ъ뒪 諛깆떊": "바이러스 백신",
  "?썳截??몃? PC 蹂댁븞 ?좎?": "외부 PC 보안 유지",
  "?λ퉬 PC?€ 吏겶룰컙?묒쟻?쇰줈": "장비 PC와 직접/간접적으로",
  "?뙋 IP 異⑸룎 諛⑹?": "IP 충돌 방지",
  "?ㅽ듃?뚰겕 IP 異⑸룎": "네트워크 IP 충돌",
  "?ㅻⅨ ?μ튂??IP": "다른 장치의 IP",
  "?쭕 ?ъ슜???덉쟾 諛??묒뾽 ?섍꼍": "사용자 안전 및 작업 환경",
  "?? 蹂댄샇 ?λ퉬 李⑹슜": "보호 장비 착용",
  "?ъ슜?먯쓽 ?덉쟾???꾪빐": "사용자의 안전을 위해",
  "?룛截??ㅼ튂 ?섍꼍 ?좎?": "설치 환경 유지",
  "?λ퉬???섑룊???좎????덉젙?곸씤": "장비의 수평을 유지하고 안정적인",
  "?듯뭾???먰솢???섍꼍?먽꽌": "통풍이 원활한 환경에서",
  "?뵆 ?먭? ???꾩썝 李⑤떒": "점검 시 전원 차단",
  "?좎?蹂댁닔 諛??먭??€": "유지보수 및 점검은",
  "?곹깭?먽꽌 ?섑뻾?섏떗?쒖삤": "상태에서 수행하십시오"
};

for (const [bad, good] of Object.entries(garbledFixes)) {
  html = html.split(bad).join(good);
}

// 2. Update MillFix Parts section with the image key
const partsSectionOld = `<section id="sec-mf-parts" class="content-section">
        <h2 data-i18n="nav-mf-parts">부분 명칭</h2>
        <p class="subtitle">MillFix 소개</p>
        <div class="content-card" style="text-align: center;">
          <img src="https://thumbs2.imgbox.com/32/50/AqI21qHY_b.png" alt="MillFix 부분 명칭 1" style="max-width: 100%; border-radius: 8px;">
        </div>
        <div class="content-card" style="text-align: center;">
          <img src="https://thumbs2.imgbox.com/c9/60/1aVK7FeH_b.png" alt="MillFix 부분 명칭 2" style="max-width: 100%; border-radius: 8px;">
        </div>
        <div class="content-card" style="text-align: center;">
          <img src="https://thumbs2.imgbox.com/9c/9e/VXYisafH_b.png" alt="MillFix 부분 명칭 3" style="max-width: 100%; border-radius: 8px;">
        </div>
      </section>`;

const partsSectionNew = `<section id="sec-mf-parts" class="content-section">
        <h2 data-i18n="nav-mf-parts">부분 명칭</h2>
        <p class="subtitle">MillFix 소개</p>
        <div class="content-card" style="text-align: center;">
          <img data-img-key="mf-part-left" alt="MillFix 부분 명칭 (좌측)" style="max-width: 100%; border-radius: 8px;">
          <p style="margin-top: 10px; color: #666;">MillFix 장비 내부 및 주요 부분 명칭 (좌측면)</p>
        </div>
        <div class="content-card" style="text-align: center; background: #fdf2f2; border: 1px dashed #f87171;">
          <p style="color: #b91c1c;">추가 부분 명칭 이미지는 현재 준비 중입니다.</p>
        </div>
      </section>`;

html = html.replace(partsSectionOld, partsSectionNew);

// 3. Fix some generic section headers that were garbled
html = html.replace(/<h2 data-i18n="nav-mai-cable">.*?<\/h2>/, '<h2 data-i18n="nav-mai-cable">케이블 연결</h2>');
html = html.replace(/<h2 data-i18n="nav-mf-cable">.*?<\/h2>/, '<h2 data-i18n="nav-mf-cable">케이블 연결</h2>');
html = html.replace(/<h2 data-i18n="nav-mai-main-page">.*?<\/h2>/, '<h2 data-i18n="nav-mai-main-page">메인 페이지</h2>');
html = html.replace(/<h2 data-i18n="nav-mf-main-page">.*?<\/h2>/, '<h2 data-i18n="nav-mf-main-page">메인 페이지</h2>');

fs.writeFileSync(filePath, html, 'utf8');
console.log('Manual content fixed and images updated!');
