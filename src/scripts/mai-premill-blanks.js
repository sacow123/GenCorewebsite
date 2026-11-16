/* Search the text tables without changing other material or interface pages. */
(() => {
  const selector = '#sec-mai-hd-premill-brands';
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase().replace(/\s+/g, ' ').trim();

  function filter() {
    const section = document.querySelector(selector);
    if (!section) return;
    const query = normalize(section.querySelector('input[type="search"]').value);
    const terms = query.split(' ').filter(Boolean);
    let brands = 0, total = 0;
    section.querySelectorAll('[data-pm-brand]').forEach(brand => {
      let matches = 0;
      brand.querySelectorAll('[data-pm-row]').forEach(row => {
        const text = normalize(row.dataset.pmSearch);
        row.hidden = !terms.every(term => text.includes(term));
        if (!row.hidden) matches++;
      });
      brand.querySelectorAll('[data-pm-group]').forEach(group => {
        group.hidden = !Array.from(group.querySelectorAll('[data-pm-row]')).some(row => !row.hidden);
      });
      brand.hidden = matches === 0;
      brand.querySelector('[data-pm-count]').textContent = matches;
      brand.open = Boolean(query && matches);
      if (matches) brands++;
      total += matches;
    });
    section.querySelector('[data-pm-brands]').textContent = brands;
    section.querySelector('[data-pm-total]').textContent = total;
    section.querySelector('.pm-no-results').hidden = total > 0;
  }

  document.addEventListener('input', event => {
    if (event.target.matches(selector + ' input[type="search"]')) filter();
  });
  document.addEventListener('click', event => {
    if (!event.target.closest(selector + ' [data-pm-reset]')) return;
    const input = document.querySelector(selector + ' input[type="search"]');
    input.value = '';
    filter();
    input.focus();
  });
})();
