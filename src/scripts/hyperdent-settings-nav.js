(function createHyperdentSettingsSubmenu() {
  const menu = document.getElementById('menu-sec-mai-hd-settings');
  if (!menu || document.getElementById('nav-mai-hd-settings-parent')) return;
  const parent = document.createElement('div');
  parent.className = 'nav-parent';
  parent.id = 'nav-mai-hd-settings-parent';
  menu.insertAdjacentElement('beforebegin', parent);
  menu.insertAdjacentHTML('beforeend', '<span class="nav-arrow"></span>');
  const submenu = document.createElement('div');
  submenu.className = 'sub-menu';
  submenu.innerHTML = `
    <div class="nav-item" data-section="sec-mai-hd-settings-db" id="menu-sec-mai-hd-settings-db"><span data-i18n="nav-mai-hd-settings-db">DB(데이터 베이스_템플릿)</span></div>
    <div class="nav-item" data-section="sec-mai-hd-settings-fixture" id="menu-sec-mai-hd-settings-fixture"><span data-i18n="nav-mai-hd-settings-fixture">Fixture(픽스처, 지그)</span></div>
    <div class="nav-item" data-section="sec-mai-hd-settings-implantinterface" id="menu-sec-mai-hd-settings-implantinterface"><span data-i18n="nav-mai-hd-settings-implantinterface">ImplantInterface(인터페이스 라이브러리)</span></div>`;
  menu.removeAttribute('data-section');
  parent.append(menu, submenu);
})();

(function createMaiBlankSubmenu() {
  const menu = document.getElementById('menu-sec-mai-hd-blank');
  if (!menu || document.getElementById('nav-mai-hd-blank-parent')) return;
  const parent = document.createElement('div');
  parent.className = 'nav-parent';
  parent.id = 'nav-mai-hd-blank-parent';
  menu.insertAdjacentElement('beforebegin', parent);
  menu.insertAdjacentHTML('beforeend', '<span class="nav-arrow"></span>');
  const submenu = document.createElement('div');
  submenu.className = 'sub-menu';
  submenu.innerHTML = '<div class="nav-item" data-section="sec-mai-hd-premill-brands" id="menu-sec-mai-hd-premill-brands"><span>Medentika/ Straumann Pre-mill Blanks</span></div>';
  parent.append(menu, submenu);
})();

(function createPremillSMeSubmenu() {
  const menu = document.getElementById('menu-sec-mai-cal-premill-v1');
  if (!menu || document.getElementById('nav-mai-cal-premill-v1-parent')) return;
  const parent = document.createElement('div');
  parent.className = 'nav-parent';
  parent.id = 'nav-mai-cal-premill-v1-parent';
  menu.insertAdjacentElement('beforebegin', parent);
  menu.insertAdjacentHTML('beforeend', '<span class="nav-arrow"></span>');
  const submenu = document.createElement('div');
  submenu.className = 'sub-menu';
  submenu.innerHTML = '<div class="nav-item" data-section="sec-mai-cal-premill-s-me" id="menu-sec-mai-cal-premill-s-me"><span class="icon-premill" aria-hidden="true"></span><span data-i18n="nav-mai-cal-premill-s-me">AI 프리밀 캘리브레이션 - S ME</span></div>';
  parent.append(menu, submenu);
})();
