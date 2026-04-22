const fs = require('fs');
let html = fs.readFileSync('c:/Users/USER/Desktop/2026-gencore- manual/index.html', 'utf8');

const replacements = {
  "<span class=\"globe\">???/span>": "<span class=\"globe\">🌐</span>",
  "<span id=\"langBtnLabel\">???????뎅??/span>": "<span id=\"langBtnLabel\">🇰🇷 한국어</span>",
  "<button data-lang=\"ko\" class=\"active\">???????뎅??/button>": "<button data-lang=\"ko\" class=\"active\">🇰🇷 한국어</button>",
  "<button data-lang=\"en\">?????English</button>": "<button data-lang=\"en\">🇺🇸 English</button>",
  "<button data-lang=\"ja\">??????ζ?沃?/button>": "<button data-lang=\"ja\">🇯🇵 日本語</button>",
  "<button data-lang=\"es\">?????Espa챰ol</button>": "<button data-lang=\"es\">🇪🇸 Español</button>",
  "<span class=\"icon\">?좑툘</span>": "<span class=\"icon\">⚠️</span>",
  "<span class=\"icon\">?</span>": "<span class=\"icon\">📖</span>",
  "<span class=\"icon\">??/span>": "<span class=\"icon\">🔧</span>",
  "<span class=\"icon\">???/span>": "<span class=\"icon\">🎓</span>",
  "<span class=\"icon\">?</span>": "<span class=\"icon\">❓</span>",
  "<span class=\"nav-arrow\">?</span>": "<span class=\"nav-arrow\">▶</span>"
};

for (const [bad, good] of Object.entries(replacements)) {
  html = html.split(bad).join(good);
}

// Ensure the ▶ is fixed everywhere if it became `?` or `??`
html = html.replace(/<span class=\"nav-arrow\">.*?<\/span>/g, '<span class="nav-arrow">▶</span>');

fs.writeFileSync('c:/Users/USER/Desktop/2026-gencore- manual/index.html', html, 'utf8');
console.log('Fixed icons and emojis!');
