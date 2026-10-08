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
    <div class="nav-item" data-section="sec-mai-hd-settings-fixture" id="menu-sec-mai-hd-settings-fixture"><span data-i18n="nav-mai-hd-settings-fixture">Fixture(픽스처)</span></div>`;
  menu.removeAttribute('data-section');
  parent.append(menu, submenu);
})();
