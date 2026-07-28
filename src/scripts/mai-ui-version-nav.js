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
  const versionSubMenu = document.createElement('div');
  versionSubMenu.className = 'sub-menu';
  versionSubMenu.append(ui2Menu, ui3Menu);
  maiNavigation.append(versionSubMenu);
}());
