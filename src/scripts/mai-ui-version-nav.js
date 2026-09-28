(function splitMaiNavigationByUiVersion() {
  const maiNavigation = document.getElementById('nav-mai');
  if (!maiNavigation || maiNavigation.querySelector('#nav-mai-ui-2')) return;

  const existingSubMenu = Array.from(maiNavigation.children)
    .find((child) => child.classList.contains('sub-menu'));
  if (!existingSubMenu) return;

  const createVersionMenu = (id, label, subMenu) => {
    const versionMenu = document.createElement('div');
    versionMenu.className = 'nav-parent mai-ui-version';
    versionMenu.id = id;

    const versionButton = document.createElement('div');
    versionButton.className = 'nav-item';
    versionButton.style.paddingLeft = '40px';
    versionButton.innerHTML = `<span data-i18n="${id === 'nav-mai-ui-2' ? 'nav-mai-ui-2' : 'nav-mai-ui-3'}">${label}</span><span class="nav-arrow"></span>`;
    versionMenu.append(versionButton, subMenu);
    return versionMenu;
  };

  const ui3SubMenu = existingSubMenu.cloneNode(true);
  ui3SubMenu.querySelectorAll('[id]').forEach((element) => {
    element.id = `${element.id}-ui3`;
  });

  const ui2Menu = createVersionMenu('nav-mai-ui-2', 'M AI°_UI_2.0(구버전)', existingSubMenu);
  const ui3Menu = createVersionMenu('nav-mai-ui-3', 'M AI°_UI_3.0(신버전)', ui3SubMenu);

  const addFolderSharingMenu = (versionMenu, sectionId, menuId) => {
    const setupMenu = versionMenu.querySelector('[id^="nav-mai-setup"]');
    const cableMenu = setupMenu?.querySelector('[id^="menu-sec-mai-cable"]');
    if (!cableMenu) return;

    const folderSharingMenu = document.createElement('div');
    folderSharingMenu.className = 'nav-item';
    folderSharingMenu.id = menuId;
    folderSharingMenu.dataset.section = sectionId;
    folderSharingMenu.innerHTML = '<span data-i18n="nav-mai-folder-sharing">📁 폴더 공유 설정</span>';
    cableMenu.insertAdjacentElement('afterend', folderSharingMenu);
  };

  addFolderSharingMenu(ui2Menu, 'sec-mai-ui2-folder-sharing', 'menu-sec-mai-ui2-folder-sharing');
  addFolderSharingMenu(ui3Menu, 'sec-mai-ui3-folder-sharing', 'menu-sec-mai-ui3-folder-sharing');

  const versionSubMenu = document.createElement('div');
  versionSubMenu.className = 'sub-menu';
  versionSubMenu.append(ui2Menu, ui3Menu);
  maiNavigation.append(versionSubMenu);
}());
