(() => {
  const originalText = new WeakMap();
  const ensureHighlightStyles = () => {
    if (document.getElementById('gencore-embedded-highlight-styles')) return;
    const style = document.createElement('style');
    style.id = 'gencore-embedded-highlight-styles';
    style.textContent = '.highlight-green, .highlight-green strong { color: #16a34a !important; }';
    document.head?.append(style);
  };

  const apply = (lang, translations = {}) => {
    if (!document.body) return;
    ensureHighlightStyles();

    document.documentElement.lang = lang;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement?.closest('script, style')
          ? NodeFilter.FILTER_REJECT
          : NodeFilter.FILTER_ACCEPT;
      }
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue || '');
      const source = originalText.get(node);
      const trimmed = source.trim();
      if (!trimmed) return;
      const translated = lang === 'ko' ? (translations[trimmed] || trimmed) : translations[trimmed];
      if (!translated) return;
      node.nodeValue = source.replace(trimmed, translated);
    });
  };

  window.addEventListener('message', (event) => {
    if (event.data?.type === 'gencore-language-change') {
      apply(event.data.lang, event.data.staticTranslations || event.data.translations || {});
    }
  });

  window.addEventListener('DOMContentLoaded', () => {
    // The parent sends the current language after every iframe load.
  });
})();
