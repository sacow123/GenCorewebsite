const fs = require('fs');
let html = fs.readFileSync('c:/Users/USER/Desktop/2026-gencore- manual/index.html', 'utf8');

const replacements = {
  "MillFix ?뚭컻": "MillFix 소개",
  "MillFix 而⑦듃濡??꾨줈洹몃옩": "MillFix 컨트롤 프로그램",
  "MillFix ?좎? 蹂댁닔": "MillFix 유지 보수",
  "?섎━ 硫붾돱??- MillFix": "수리 메뉴얼 - MillFix",
  "M AI쨘 ?좎? 蹂댁닔": "M AIº 유지 보수",
  "M AI쨘 hyperDENT": "M AIº hyperDENT",
  "M AI쨘 而⑦듃濡??꾨줈洹몃옩": "M AIº 컨트롤 프로그램",
  "?ъ뼇": "사양",
  "遺€遺?紐낆묶": "부분 명칭",
  "援ъ꽦??": "구성품",
  "媛€怨?諛⑹떇": "가공 방식",
  "?ш린 (W x D x H)": "크기 (W x D x H)",
  "臾닿쾶": "무게",
  "?ㅽ???/th>": "스핀들</th>",
  "媛€怨듭텞": "가공축",
  "?숈떆 5 異?/td>": "동시 5 축</td>",
  "紐⑦꽣": "모터",
  "?대룞 踰붿쐞": "운동 범위",
  "A-axis: +25째 to -25째<br>": "A-axis: +25° to -25°<br>",
  "B-axis: 360째 (Free rotation)": "B-axis: 360° (Free rotation)",
  "???ъ폆": "툴 포켓",
  "?꾩썝 (Input)": "전원 (Input)",
  "紐⑤땲??/th>": "모니터</th>",
  "耳€?대툝 ?곌껐": "케이블 연결",
  "?꾩썝 耳쒓린/ ?꾧린, ?뚮컢??/h2>": "전원 켜기/ 끄기, 워밍업</h2>",
  "硫붿씤 ?섏씠吏€": "메인 페이지",
  "??由ъ뒪???섏씠吏€": "툴 리스트 페이지",
  "?ㅼ젙 ?섏씠吏€": "설정 페이지",
  "?섏떆 愿€由??ы빆": "수시 관리 사항",
  "怨듦뎄 愿€由?/h2>": "공구 관리</h2>",
  "肄쒕젢 愿€由?/h2>": "콜렛 관리</h2>",
  "臾몄젣 ?닿껐": "문제 해결",
  "?ㅻ쪟 肄붾뱶 由ъ뒪??/h2>": "오류 코드 리스트</h2>",
  "?뚮え?? 遺€??援먯껜 媛€?대뱶": "소모품/ 부품 교체 가이드",
  "?④퀎蹂??ъ슜 媛€?대뱶 諛??곸긽 튜토리얼?낅땲??": "단계별 사용 가이드 및 영상 튜토리얼입니다.",
  "?대?吏€ URL ?€湲?以?/div>": "이미지 URL 대기 중</div>",
  "怨좉컼遺꾨뱾???먯＜ 臾몄쓽?섏떆??吏덈Ц怨??듬??낅땲??": "고객분들이 자주 문의하시는 질문과 답변입니다.",
  "짤 2026 GenCore. All rights reserved.": "© 2026 GenCore. All rights reserved."
};

for (const [bad, good] of Object.entries(replacements)) {
  html = html.split(bad).join(good);
}

fs.writeFileSync('c:/Users/USER/Desktop/2026-gencore- manual/index.html', html, 'utf8');
console.log('Fixed additional encoding issues!');
