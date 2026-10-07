(function addMaiFolderSharingNavigation() {
  const maiNavigation = document.getElementById('nav-mai');
  if (!maiNavigation || maiNavigation.querySelector('#menu-sec-mai-ui2-folder-sharing')) return;

  const setupMenu = maiNavigation.querySelector('#nav-mai-setup');
  const cableMenu = setupMenu?.querySelector('#menu-sec-mai-cable');
  if (!cableMenu) return;

  const folderSharingMenu = document.createElement('div');
  folderSharingMenu.className = 'nav-item';
  folderSharingMenu.id = 'menu-sec-mai-ui2-folder-sharing';
  folderSharingMenu.dataset.section = 'sec-mai-ui2-folder-sharing';
  folderSharingMenu.innerHTML = '<span data-i18n="nav-mai-folder-sharing">📁 폴더 공유 설정</span>';
  const lastSetupMenu = setupMenu.querySelector('#menu-sec-mai-jigs') || setupMenu.querySelector('#menu-sec-mai-cutting-oil-pump') || cableMenu;
  lastSetupMenu.insertAdjacentElement('afterend', folderSharingMenu);
}());
