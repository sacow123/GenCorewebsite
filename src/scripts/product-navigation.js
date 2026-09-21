(function organizeProductNavigation() {
  const userManual = document.getElementById('nav-user-manual');
  const productMenu = userManual?.querySelector(':scope > .sub-menu');
  const maiMenu = document.getElementById('nav-mai');
  const millFixMenu = document.getElementById('nav-millfix');
  if (!productMenu || !maiMenu || !millFixMenu) return;

  const addProductLogo = (menu, logoPath) => {
    const button = menu.querySelector(':scope > .nav-item');
    const label = button?.querySelector(':scope > [data-i18n]');
    if (!button || !label || button.querySelector('.nav-product-name')) return;

    const name = document.createElement('span');
    name.className = 'nav-product-name';
    const logo = document.createElement('img');
    logo.className = 'nav-product-logo';
    logo.src = logoPath;
    logo.alt = '';
    logo.setAttribute('aria-hidden', 'true');
    label.before(name);
    name.append(logo, label);
  };

  addProductLogo(maiMenu, 'assets/images/brand/mai-logo-black.webp');
  addProductLogo(millFixMenu, 'assets/images/brand/millfix-logo-purple.webp');

  const hyperdentMenu = document.createElement('div');
  hyperdentMenu.className = 'nav-parent';
  hyperdentMenu.id = 'nav-hyperdent';
  hyperdentMenu.innerHTML = `
    <div class="nav-item">
      <span class="nav-product-name"><img class="nav-product-logo" src="assets/images/brand/hyperdent-logo.webp" alt="" aria-hidden="true"><span>hyperDENT</span></span>
      <span class="nav-arrow"></span>
    </div>
    <div class="sub-menu">
      <div class="nav-item" data-section="sec-hyperdent-basic" id="menu-sec-hyperdent-basic"><span data-i18n="nav-hyperdent-basic">기본 조작</span></div>
    </div>`;

  productMenu.append(hyperdentMenu);
}());
