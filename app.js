/* ===== Navigation & UI Logic ===== */
document.addEventListener("DOMContentLoaded", () => {
  // --- Language Selector ---
  const langBtn = document.getElementById("langBtn");
  const langDropdown = document.getElementById("langDropdown");

  langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    langDropdown.classList.toggle("open");
  });
  document.addEventListener("click", () => langDropdown.classList.remove("open"));

  langDropdown.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
      applyLanguage(btn.dataset.lang);
      langDropdown.classList.remove("open");
    });
  });

  // --- Section Switching ---
  const sections = document.querySelectorAll(".content-section");

  function showSection(id) {
    sections.forEach(s => s.classList.remove("active"));
    // Remove active from all leaf nav-items
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    
    const target = document.getElementById(id);
    if (target) {
      target.classList.add("active");
      renderSection(id);
    }
    
    // Highlight the clicked leaf nav-item
    const navTarget = document.querySelector(`.nav-item[data-section="${id}"]`);
    if (navTarget) navTarget.classList.add("active");
    // Close mobile sidebar
    document.getElementById("sidebar").classList.remove("open");
  }

  function renderSection(id) {
    const target = document.getElementById(id);
    if (!target) return;

    // Apply i18n text to elements within this section
    if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang]) {
      const dict = TRANSLATIONS[currentLang];
      target.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (dict[key]) el.textContent = dict[key];
      });
    }

    // Load Dynamic Base64 Images for this section
    if (typeof IMAGES !== 'undefined') {
      target.querySelectorAll("img[data-img-key]").forEach(img => {
        const key = img.getAttribute("data-img-key");
        if (IMAGES[key]) {
          img.src = IMAGES[key];
        }
      });
    }
  }

  // --- Tree Menu: expand/collapse ---
  document.querySelectorAll(".nav-parent").forEach(parent => {
    const toggle = parent.querySelector(":scope > .nav-item");
    const subMenu = parent.querySelector(":scope > .sub-menu");
    if (!toggle || !subMenu) return;

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      // If this nav-item also has data-section, show that section
      if (toggle.dataset.section) {
        showSection(toggle.dataset.section);
      }
      parent.classList.toggle("open");
      subMenu.classList.toggle("open");
    });
  });

  // --- Leaf nav-item clicks (items with data-section) ---
  document.querySelectorAll(".nav-item[data-section]").forEach(item => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      showSection(item.dataset.section);
    });
  });

  // --- Home button (logo) ---
  document.getElementById("homeBtn").addEventListener("click", () => {
    showSection("section-home");
    // Collapse all tree menus
    document.querySelectorAll(".nav-parent.open").forEach(p => p.classList.remove("open"));
    document.querySelectorAll(".sub-menu.open").forEach(s => s.classList.remove("open"));
  });

  // --- Mobile menu toggle ---
  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("open");
  });

  // --- Apply saved language ---
  applyLanguage(currentLang);

  // --- Load Dynamic Base64 Images ---
  if (typeof IMAGES !== 'undefined') {
    document.querySelectorAll("img[data-img-key]").forEach(img => {
      const key = img.getAttribute("data-img-key");
      if (IMAGES[key]) {
        img.src = IMAGES[key];
      }
    });
  }
});
