(function createMaiComponentsSubmenu() {
  const componentMenus = document.querySelectorAll('[id^="menu-sec-mai-components"]');

  componentMenus.forEach((menu) => {
    if (menu.dataset.componentsSubmenuReady === 'true') return;

    const ui3Suffix = menu.id.endsWith('-ui3') ? '-ui3' : '';
    const parent = document.createElement('div');
    parent.className = 'nav-parent';
    parent.id = `nav-mai-components-parent${ui3Suffix}`;

    const trigger = document.createElement('div');
    trigger.className = 'nav-item';
    trigger.innerHTML = `${menu.innerHTML}<span class="nav-arrow"></span>`;

    const subMenu = document.createElement('div');
    subMenu.className = 'sub-menu';
    subMenu.innerHTML = `
      <div class="nav-item" data-section="sec-mai-components-basic" id="menu-sec-mai-components-basic${ui3Suffix}"><span data-i18n="nav-mai-components-basic">기본 구성품</span></div>
      <div class="nav-item" data-section="sec-mai-components-optional" id="menu-sec-mai-components-optional${ui3Suffix}"><span data-i18n="nav-mai-components-optional">선택 구성품</span></div>`;

    parent.append(trigger, subMenu);
    menu.replaceWith(parent);

    const toolsMenu = document.createElement('div');
    toolsMenu.className = 'nav-item';
    toolsMenu.id = `menu-sec-mai-tools${ui3Suffix}`;
    toolsMenu.dataset.section = 'sec-mai-tools';
    toolsMenu.innerHTML = '<span data-i18n="nav-mai-tools">🪛 공구</span>';
    parent.insertAdjacentElement('afterend', toolsMenu);
  });
})();
