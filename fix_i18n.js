const fs = require('fs');
let c = fs.readFileSync('c:/Users/USER/Desktop/2026-gencore- manual/i18n.js', 'utf8');

// Find the marker where the garbage starts (line 354: },\n    contents:)
// The applyLanguage function should end with } on line 354, not },
const searchStr = '  document.documentElement.lang = lang;\n\n  // Re-render the active section to update its dynamic content\n  const activeSection = document.querySelector(".content-section.active");\n  if (activeSection && typeof renderSection === "function") {\n    renderSection(activeSection.id);\n  }\n},';

const idx = c.indexOf(searchStr);
if (idx === -1) {
  console.log('Marker not found, trying alternate...');
  // Try finding just the broken part
  const altIdx = c.indexOf('},\n    contents: {');
  if (altIdx === -1) {
    console.log('Alt marker not found either');
    process.exit(1);
  }
  // Cut everything from the broken comma onwards and replace with proper closing
  c = c.substring(0, altIdx) + '}\n';
} else {
  // Replace the broken }, with proper }
  c = c.substring(0, idx) + '  document.documentElement.lang = lang;\n\n  // Re-render the active section to update its dynamic content\n  const activeSection = document.querySelector(".content-section.active");\n  if (activeSection && typeof renderSection === "function") {\n    renderSection(activeSection.id);\n  }\n}\n';
}

fs.writeFileSync('c:/Users/USER/Desktop/2026-gencore- manual/i18n.js', c, 'utf8');
console.log('Fixed! File now has', c.split('\n').length, 'lines');
