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

  function showSection(id, pushHistory = true) {
    sections.forEach(s => s.classList.remove("active"));
    // Remove active from all leaf nav-items
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    
    const target = document.getElementById(id);
    if (target) {
      target.classList.add("active");
      renderSection(id);
      
      // Update URL hash without jumping/reloading
      if (pushHistory) {
        if(history.pushState) {
          history.pushState({ id: id }, null, '#' + id);
        } else {
          window.location.hash = '#' + id;
        }
      }
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

  // --- Check URL Hash for Direct Linking ---
  if (window.location.hash) {
    setTimeout(() => {
      let hashId = window.location.hash.substring(1);
      // Remove any query params or trailing slashes that might be added by messenger apps
      hashId = hashId.split('?')[0].split('/')[0];
      
      if (document.getElementById(hashId) && document.getElementById(hashId).classList.contains('content-section')) {
        showSection(hashId, false);
        // Expand parent menus in the sidebar
        const navItem = document.querySelector(`.nav-item[data-section="${hashId}"]`);
        if (navItem) {
          let currentParent = navItem.closest('.sub-menu');
          while (currentParent) {
            currentParent.classList.add('open');
            if (currentParent.parentElement.classList.contains('nav-parent')) {
              currentParent.parentElement.classList.add('open');
            }
            currentParent = currentParent.parentElement.closest('.sub-menu');
          }
        }
        // Scroll to top just in case
        window.scrollTo(0, 0);
      }
    }, 50); // slight delay to bypass native anchor jumping
  }

  // --- Handle Browser Back/Forward Buttons ---
  window.addEventListener("popstate", (e) => {
    if (window.location.hash) {
      const hashId = window.location.hash.substring(1);
      if (document.getElementById(hashId) && document.getElementById(hashId).classList.contains('content-section')) {
        showSection(hashId, false);
      }
    } else {
      showSection("section-home", false);
    }
  });

  // ===== TOOL USAGE TIME TOOLTIP SYSTEM =====
  const TOOL_USAGE_DATA = {
    T31: { name: 'T31-Z2.0B', times: [{ material: 'Zirconia', time: '3,000 min' }] },
    T32: { name: 'T32-Z1.0B', times: [{ material: 'Zirconia', time: '2,000 min' }] },
    T33: { name: 'T33-Z0.6B', times: [{ material: 'Zirconia', time: '1,000 min' }, { material: 'PMMA / PEEK', time: '300 min' }] },
    T34: { name: 'T34-Z0.3B', times: [{ material: 'Zirconia', time: '600 min' }, { material: 'PMMA / PEEK', time: '200 min' }] },
    T35: { name: 'T35-G2.0B', times: [{ material: 'Hybrid Ceramic', time: '400 min' }] },
    T36: { name: 'T36-G1.0B', times: [{ material: 'Hybrid Ceramic', time: '400 min' }] },
    T37: { name: 'T37-G0.6B', times: [{ material: 'Hybrid Ceramic', time: '300 min' }] },
    T38: { name: 'T38-M2.0B', times: [{ material: 'PMMA / PEEK', time: '2,000 min' }] },
    T39: { name: 'T39-M1.0B', times: [{ material: 'PMMA / PEEK', time: '1,500 min' }] },
    T42: { name: 'T42-M1.5FL', times: [{ material: 'Zirconia', time: '200 min' }, { material: 'PMMA / PEEK', time: '150 min' }] },
    T43: { name: 'T43-M1.0F', times: [{ material: 'Zirconia', time: '150 min' }, { material: 'PMMA / PEEK', time: '100 min' }] },
    T44: { name: 'T44-M1.5R', times: [{ material: 'Zirconia', time: '200 min' }, { material: 'PMMA / PEEK', time: '150 min' }] },
    T45: { name: 'T45-M1.6T', times: [{ material: 'Zirconia', time: '150 min' }, { material: 'PMMA / PEEK', time: '100 min' }] }
  };

  // Create a reusable tooltip element
  const toolTooltip = document.createElement('div');
  toolTooltip.className = 'tool-usage-tooltip';
  document.body.appendChild(toolTooltip);

  // Get the grid container
  const toolGrid = document.querySelector('#sec-mf-tools [style*="display:grid"]');
  if (toolGrid) {
    const toolCards = toolGrid.querySelectorAll('.parts-card[data-tool-id]');

    toolCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const toolId = card.dataset.toolId;
        const data = TOOL_USAGE_DATA[toolId];
        if (!data) return;

        // Dim other cards
        toolGrid.classList.add('tool-grid-hover');
        card.classList.add('tool-active');

        // Build tooltip HTML
        let rowsHtml = data.times.map(t =>
          `<div class="usage-row">
            <span class="usage-material">${t.material}</span>
            <span class="usage-time">${t.time}</span>
          </div>`
        ).join('');

        toolTooltip.innerHTML = `
          <div class="tooltip-header">
            <span class="tooltip-icon">⏱️</span>
            <span class="tooltip-title">${data.name} 권장 사용시간</span>
          </div>
          <div class="tooltip-body">${rowsHtml}</div>
        `;

        // Position the tooltip
        const cardRect = card.getBoundingClientRect();
        const gridRect = toolGrid.getBoundingClientRect();
        const tooltipWidth = 240;
        const gap = 12;

        // Check if there's enough space on the right within the grid
        const spaceRight = gridRect.right - cardRect.right;
        const spaceLeft = cardRect.left - gridRect.left;

        toolTooltip.classList.remove('tooltip-left', 'tooltip-right');

        let tooltipLeft, tooltipTop;
        tooltipTop = cardRect.top + window.scrollY;

        if (spaceRight >= tooltipWidth + gap) {
          // Position to the right
          tooltipLeft = cardRect.right + gap;
          toolTooltip.classList.add('tooltip-right');
        } else if (spaceLeft >= tooltipWidth + gap) {
          // Position to the left
          tooltipLeft = cardRect.left - tooltipWidth - gap;
          toolTooltip.classList.add('tooltip-left');
        } else {
          // Fallback: position to the right but constrain
          tooltipLeft = Math.min(cardRect.right + gap, gridRect.right - tooltipWidth);
          toolTooltip.classList.add('tooltip-right');
        }

        toolTooltip.style.left = tooltipLeft + 'px';
        toolTooltip.style.top = tooltipTop + 'px';
        toolTooltip.style.width = tooltipWidth + 'px';
        toolTooltip.style.position = 'absolute';

        // Show with slight delay for smoothness
        requestAnimationFrame(() => {
          toolTooltip.classList.add('visible');
        });
      });

      card.addEventListener('mouseleave', () => {
        toolGrid.classList.remove('tool-grid-hover');
        card.classList.remove('tool-active');
        toolTooltip.classList.remove('visible');
      });
    });
  }
});
