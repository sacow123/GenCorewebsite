const fs = require('fs');
const htmlPath = 'c:/Users/USER/Desktop/2026-gencore- manual/index.html';
let lines = fs.readFileSync(htmlPath, 'utf8').split('\n');

// Line-by-line replacement (0-indexed in array, 1-indexed in file)
const replacements = {
  249: '        <p class="subtitle" data-i18n="section-home-desc">제품 매뉴얼 및 기술 지원 센터에 오신 것을 환영합니다. 좌측 메뉴에서 원하는 항목을 선택해 주세요.</p>',
  252: '          <p data-i18n="card-welcome-body">GenCore 제품의 설치, 사용, 유지보수에 관한 모든 정보를 이곳에서 확인할 수 있습니다.</p>',
  255: '          <h3 data-i18n="card-lang-title">다국어 지원</h3>',
  269: '            <li><strong>임의 분해 금지</strong><br>임의로 장비를 분해하거나 재조립하지 마십시오.<br>제조사와 사전 협의 없이 분해한 경우, 보증 기간 내라도 기술 지원이 제한될 수 있습니다.</li>',
  274: '          <h3>전기 및 안전 관리</h3>',
  276: '            <li><strong>젖은 손 사용 금지</strong><br>물기가 있는 손으로 장비, 케이블, 스위치 및 주변 장치를 만지지 마십시오.<br>본 장비는 전기 제품이므로 반드시 건조한 상태에서 조작하십시오.</li>',
  284: '            <li><strong>가공 중 접촉 금지</strong><br>장비가 동작하는 동안 도어를 열거나, 스핀들/공구/가공 중인 소재에 접촉하지 마십시오.</li>',
  285: '            <li><strong>비상 상황 대응</strong><br>이상 진동, 소음 또는 탄 냄새 발생 시 즉시 비상 정지 버튼을 누르고 전원을 차단하십시오.</li>',
  291: '          <h3>가공 전 작업 점검</h3>',
  293: '            <li><strong>가공물 내부 확인</strong><br>가공을 시작하기 전에 불필요한 공구나 부스러기가 가공물 내부에 남아 있지 않은지 반드시 확인하십시오.</li>',
  294: '            <li><strong>지그 위치 확인</strong><br>CAM 소프트웨어에서 설정한 지그와 동일한 지그를 장비에 정확히 장착한 후 가공을 진행하십시오.</li>',
  302: '            <li><strong>프로그램 설치 금지</strong><br>장비 PC에는 별도의 프로그램을 설치하지 마십시오.<br>컨트롤 프로그램과의 충돌 및 오작동을 유발할 수 있으며, 바이러스 백신 소프트웨어에 의한 가공 과정의 지연이 발생할 수 있으므로 설치를 금지합니다.</li>',
  303: '            <li><strong>외부 PC 보안 유지</strong><br>장비 PC와 직/간접적으로 연결되는 CAD/CAM PC에 반드시 백신 소프트웨어를 사용하여 바이러스 감염을 예방하십시오.</li>',
  304: '            <li><strong>IP 충돌 방지</strong><br>네트워크 IP 충돌 여부를 반드시 확인하십시오.<br>다른 장치의 IP 주소를 10.1.1.1 또는 10.1.1.2로 설정하지 마십시오.</li>',
  311: '            <li><strong>보호 장비 착용</strong><br>사용자의 안전을 위해 반드시 보호 장비(장갑, 보호안경 등)를 착용하십시오.</li>',
  313: '            <li><strong>점검 시 전원 차단</strong><br>유지보수 및 점검은 반드시 전원을 차단한 상태에서 실행하십시오.</li>',
  325: '        <h2 data-i18n="nav-mai-parts">부분 명칭</h2>'
};

let count = 0;
for (const [lineIdx, newContent] of Object.entries(replacements)) {
  const idx = parseInt(lineIdx);
  if (idx < lines.length) {
    lines[idx] = newContent;
    count++;
  }
}

fs.writeFileSync(htmlPath, lines.join('\n'), 'utf8');
console.log(`Replaced ${count} lines in index.html`);
