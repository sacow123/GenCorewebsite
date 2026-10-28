(() => {
  const entries = [
    ['glass-ceramic', 'glass-ceramic-faq-modal', 'openGlassCeramicFaqModal', 'closeGlassCeramicFaqModal'],
    ['mai-dry-wet', 'mai-dry-wet-faq-modal', 'openMaiDryWetFaqModal', 'closeMaiDryWetFaqModal'],
    ['hyperdent-projectz-hvz', 'hyperdent-projectz-hvz-faq-modal', 'openHyperdentProjectzHvzFaqModal', 'closeHyperdentProjectzHvzFaqModal']
  ];
  function writeUrl(key) {
    const url = new URL(location.href);
    if (key) { url.searchParams.set('faq', key); url.hash = 'section-faq'; }
    else url.searchParams.delete('faq');
    if (url.href !== location.href) history.pushState(null, '', url);
  }
  function sync() {
    const key = new URL(location.href).searchParams.get('faq');
    entries.forEach(([value, id]) => {
      const modal = document.getElementById(id);
      if (modal) modal.style.display = key === value ? 'flex' : 'none';
    });
  }
  entries.forEach(([key, id, open, close]) => {
    if (!document.getElementById(id)) return;
    window[open] = () => { writeUrl(key); sync(); };
    window[close] = () => { writeUrl(null); sync(); };
    document.querySelectorAll('[onclick="' + open + '()"]') .forEach(button => {
      const link = document.createElement('a');
      [...button.attributes].forEach(attribute => { if (!['type', 'onclick'].includes(attribute.name)) link.setAttribute(attribute.name, attribute.value); });
      link.href = '?faq=' + key + '#section-faq';
      link.style.textDecoration = 'none';
      link.innerHTML = button.innerHTML;
      link.addEventListener('click', event => {
        if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
        event.preventDefault(); window[open]();
      });
      button.replaceWith(link);
    });
  });
  window.addEventListener('popstate', sync);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', sync, { once: true });
  else sync();
})();
