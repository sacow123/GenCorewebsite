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
  const mainContent = document.querySelector(".main-content");

  function resetMainScroll() {
    if (mainContent) {
      mainContent.scrollTop = 0;
    } else {
      window.scrollTo(0, 0);
    }
  }

  function showSection(id, pushHistory = true) {
    sections.forEach(s => s.classList.remove("active"));
    // Remove active from all leaf nav-items
    document.querySelectorAll(".nav-item").forEach(n => n.classList.remove("active"));
    
    const target = document.getElementById(id);
    if (target) {
      target.classList.add("active");
      renderSection(id);
      resetMainScroll();
      
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
        if (!el.hasAttribute("data-i18n-default")) {
          el.setAttribute("data-i18n-default", el.innerHTML);
        }
        const key = el.getAttribute("data-i18n");
        const fallbackText = el.getAttribute("data-i18n-default");
        const text = typeof getI18nText === "function" ? getI18nText(currentLang, key, fallbackText) : dict[key];
        if (text !== undefined) el.innerHTML = text;
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

    if (currentLang !== "ko" && typeof sanitizeMissingTranslationDom === "function") {
      sanitizeMissingTranslationDom(currentLang, target);
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
  window.addEventListener("popstate", function(e) {
    if (e.state && e.state.searchQuery) {
      // Restore search results page
      searchInput.value = e.state.searchQuery;
      runSearch(e.state.searchQuery);
    } else if (window.location.hash) {
      var hashId = window.location.hash.substring(1);
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

        const recommendedTimeLabel = typeof getI18nText === 'function'
          ? getI18nText(currentLang, 'tooltip-recommended-time', '권장 사용시간')
          : ((typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang]['tooltip-recommended-time']) || '권장 사용시간');

        toolTooltip.innerHTML = `
          <div class="tooltip-header">
            <span class="tooltip-icon">⏱️</span>
            <span class="tooltip-title">${data.name} ${recommendedTimeLabel}</span>
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

  // ===== SEARCH FEATURE =====
  var searchInput = document.getElementById("searchInput");
  var searchResultsGrid = document.getElementById("search-results-grid");
  var searchResultsTitle = document.getElementById("search-results-title");
  var searchResultsSubtitle = document.getElementById("search-results-subtitle");

  if (searchInput && searchResultsGrid) {
    var searchTimeout;

    // Add focus style
    searchInput.addEventListener("focus", function() {
      searchInput.style.borderColor = "var(--primary)";
      searchInput.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.15)";
    });
    searchInput.addEventListener("blur", function() {
      searchInput.style.borderColor = "var(--border)";
      searchInput.style.boxShadow = "none";
    });

    searchInput.addEventListener("input", function(e) {
      var query = e.target.value.trim();
      if (!query) {
        showSection("section-home");
      }
    });

    searchInput.addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        clearTimeout(searchTimeout);
        var query = searchInput.value.trim();
        if (query) runSearch(query);
      }
      if (e.key === "Escape") {
        searchInput.value = "";
        showSection("section-home");
        searchInput.blur();
      }
    });
  }

  function getBreadcrumb(navItem) {
    var parts = [];
    var el = navItem.parentElement; // start from the parent of the nav-item
    while (el) {
      if (el.classList && el.classList.contains('nav-parent')) {
        var label = el.querySelector(':scope > .nav-item');
        if (label) {
          var text = label.textContent.trim().replace(/\s*[›▶❯]\s*$/, '').trim();
          if (text) parts.unshift(text);
        }
      }
      el = el.parentElement;
    }
    return parts.join(' › ');
  }

  function runSearch(query) {
    var lowerQuery = query.toLowerCase();
    
    // Create a space-insensitive regex
    var noSpaceQuery = query.replace(/\s+/g, '');
    if (!noSpaceQuery) return; // Prevent empty search
    var regexStr = noSpaceQuery.split('').map(function(c) {
      return c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }).join('\\s*');
    var searchRegex = new RegExp(regexStr, 'i');
    var searchRegexGlobal = new RegExp('(' + regexStr + ')', 'gi');

    // Search in nav-items (sections)
    var navItems = Array.from(document.querySelectorAll('.nav-item[data-section]'));
    // Search in feature-cards (modals)
    var featureCards = Array.from(document.querySelectorAll('.feature-card[data-feature-key]'));
    
    var results = [];

    navItems.forEach(function(item) {
      var sectionId = item.dataset.section;
      var sectionEl = document.getElementById(sectionId);
      if (!sectionEl) return;

      // Skip if this sectionId is already in results (deduplication)
      if (results.some(function(r) { return r.type === 'section' && r.sectionId === sectionId; })) return;

      var titleText = item.textContent.trim();
      var contentText = sectionEl.textContent.replace(/\s+/g, ' ').trim();

      if (searchRegex.test(titleText) || searchRegex.test(contentText)) {
        var snippet = "";
        var matchObj = searchRegex.exec(contentText);
        var matchIndex = matchObj ? matchObj.index : -1;
        
        if (matchIndex !== -1) {
          var matchedLength = matchObj[0].length;
          var start = Math.max(0, matchIndex - 40);
          var end = Math.min(contentText.length, matchIndex + matchedLength + 80);
          snippet = (start > 0 ? "..." : "") + contentText.substring(start, end) + (end < contentText.length ? "..." : "");
          snippet = snippet.replace(searchRegexGlobal, '<mark style="background:rgba(124,58,237,0.15); color:var(--primary); border-radius:3px; padding:0 2px;">$1</mark>');
        } else {
          snippet = contentText.substring(0, 100) + "...";
        }
        var breadcrumb = getBreadcrumb(item);
        results.push({ type: 'section', sectionId: sectionId, titleText: titleText, snippet: snippet, breadcrumb: breadcrumb });
      }
    });

    featureCards.forEach(function(card) {
      var featureKey = card.dataset.featureKey;
      // Skip if already in results
      if (results.some(function(r) { return r.type === 'feature' && r.featureKey === featureKey; })) return;
      
      var titleText = card.textContent.trim().replace(/\s+/g, ' ');
      
      if (searchRegex.test(titleText)) {
        var snippet = titleText;
        snippet = snippet.replace(searchRegexGlobal, '<mark style="background:rgba(124,58,237,0.15); color:var(--primary); border-radius:3px; padding:0 2px;">$1</mark>');
        
        // Find breadcrumb from its parent section
        var parentSection = card.closest('section');
        var breadcrumb = "";
        if (parentSection) {
            var navItem = document.querySelector('.nav-item[data-section="' + parentSection.id + '"]');
            if (navItem) breadcrumb = getBreadcrumb(navItem);
        }

        results.push({ type: 'feature', featureKey: featureKey, parentSectionId: parentSection ? parentSection.id : 'sec-mf-hd-features', titleText: "✨ " + titleText.substring(0, 30) + (titleText.length > 30 ? "..." : ""), snippet: snippet, breadcrumb: breadcrumb });
      }
    });

    // Show the search section & push to history
    var sections = document.querySelectorAll(".content-section");
    sections.forEach(function(s) { s.classList.remove("active"); });
    document.querySelectorAll(".nav-item").forEach(function(n) { n.classList.remove("active"); });
    document.getElementById("section-search").classList.add("active");
    // Push search state to browser history
    history.pushState({ searchQuery: query }, null, '#search:' + encodeURIComponent(query));

    // Update title/subtitle
    searchResultsTitle.textContent = '🔍 검색 결과: "' + query + '"';
    searchResultsSubtitle.textContent = results.length > 0
      ? results.length + '개의 결과가 발견되었습니다.'
      : '검색 결과가 없습니다.';

    var searchTitleTemplate = typeof getI18nText === 'function'
      ? getI18nText(currentLang, 'search-results-title', '🔍 Search results: "{query}"')
      : '🔍 Search results: "{query}"';
    var searchFoundTemplate = typeof getI18nText === 'function'
      ? getI18nText(currentLang, 'search-results-found', '{count} results found.')
      : '{count} results found.';
    var searchEmptyText = typeof getI18nText === 'function'
      ? getI18nText(currentLang, 'search-results-empty', 'No results found.')
      : 'No results found.';
    var searchTryAgainText = typeof getI18nText === 'function'
      ? getI18nText(currentLang, 'search-results-try-again', 'Try another keyword.')
      : 'Try another keyword.';

    searchResultsTitle.textContent = searchTitleTemplate.replace('{query}', query);
    searchResultsSubtitle.textContent = results.length > 0
      ? searchFoundTemplate.replace('{count}', results.length)
      : searchEmptyText;

    if (results.length > 0) {
      searchResultsGrid.innerHTML = results.map(function(res) {
        var breadcrumbHtml = res.breadcrumb
          ? '<div style="font-size:11px; color:var(--primary); margin-bottom:6px; font-weight:500; opacity:0.8;">' + res.breadcrumb + '</div>'
          : '';
        return '<div class="search-card" data-type="' + res.type + '" data-target="' + (res.sectionId || res.featureKey) + '" data-parent="' + (res.parentSectionId || '') + '" style="' +
          'background: var(--bg-card);' +
          'border: 1px solid var(--border);' +
          'border-radius: 12px;' +
          'padding: 20px 22px;' +
          'cursor: pointer;' +
          'transition: box-shadow 0.2s, transform 0.2s, border-color 0.2s;' +
          '">' +
          breadcrumbHtml +
          '<div style="font-size: 15px; font-weight: 700; color: #222; margin-bottom: 8px;">' + res.titleText + '</div>' +
          '<div style="font-size: 13px; color: var(--text-muted); line-height: 1.6;">' + res.snippet + '</div>' +
          '</div>';
      }).join('');

      // Attach click + hover to cards
      Array.from(searchResultsGrid.querySelectorAll('.search-card')).forEach(function(card) {
        card.addEventListener('mouseenter', function() {
          card.style.boxShadow = '0 6px 20px rgba(124,58,237,0.15)';
          card.style.transform = 'translateY(-2px)';
          card.style.borderColor = 'var(--primary)';
        });
        card.addEventListener('mouseleave', function() {
          card.style.boxShadow = '';
          card.style.transform = '';
          card.style.borderColor = 'var(--border)';
        });
        card.addEventListener('click', function() {
          var type = card.dataset.type;
          var targetId = card.dataset.target;
          var sectionToOpen = type === 'feature' ? card.dataset.parent : targetId;
          
          // Show the section
          showSection(sectionToOpen);
          
          // Expand sidebar parents
          var navItem = document.querySelector('.nav-item[data-section="' + sectionToOpen + '"]');
          if (navItem) {
            var cur = navItem.closest('.sub-menu');
            while (cur) {
              cur.classList.add('open');
              if (cur.parentElement.classList.contains('nav-parent')) {
                cur.parentElement.classList.add('open');
              }
              cur = cur.parentElement.closest('.sub-menu');
            }
          }
          
          // Open the modal if it's a feature
          if (type === 'feature' && typeof window.openFeatureModal === 'function') {
            window.openFeatureModal(targetId, sectionToOpen);
          }
        });
      });
    } else {
      searchResultsGrid.innerHTML =
        '<div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:var(--text-muted);">' +
        '<div style="font-size:48px; margin-bottom:16px;">🔍</div>' +
        '<div style="font-size:16px; font-weight:600; color:#444; margin-bottom:8px;">검색 결과가 없습니다</div>' +
        '<div style="font-size:13px;">다른 키워드로 다시 시도해 보세요.</div>' +
        '</div>';
      searchResultsGrid.innerHTML =
        '<div style="grid-column:1/-1; text-align:center; padding:60px 20px; color:var(--text-muted);">' +
        '<div style="font-size:48px; margin-bottom:16px;">🔍</div>' +
        '<div style="font-size:16px; font-weight:600; color:#444; margin-bottom:8px;">' + searchEmptyText + '</div>' +
        '<div style="font-size:13px;">' + searchTryAgainText + '</div>' +
        '</div>';
    }
  }
});
