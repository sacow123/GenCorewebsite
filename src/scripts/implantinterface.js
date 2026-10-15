/* Search existing file rows; retain folder names and relative source paths. */
(function () {
  const selector = '#sec-mai-hd-settings-implantinterface';
  function filter() {
    const section = document.querySelector(selector);
    if (!section) return;
    const input = section.querySelector('input[type="search"]');
    const query = input.value.trim().toLocaleLowerCase();
    let folders = 0, files = 0;
    section.querySelectorAll('[data-ii-folder]').forEach(folder => {
      const folderMatches = folder.dataset.iiFolder.toLocaleLowerCase().includes(query);
      let matches = 0;
      folder.querySelectorAll('[data-ii-filename]').forEach(row => {
        const show = !query || folderMatches || row.dataset.iiFilename.toLocaleLowerCase().includes(query);
        row.hidden = !show;
        if (show) matches++;
      });
      folder.querySelectorAll('[data-ii-series]').forEach(series => {
        series.hidden = !Array.from(series.querySelectorAll('[data-ii-filename]')).some(row => !row.hidden);
      });
      folder.hidden = matches === 0;
      folder.querySelector('.ii-file-count').textContent = matches;
      if (query) folder.open = matches > 0;
      else folder.open = false;
      if (matches) folders++;
      files += matches;
    });
    section.querySelector('[data-ii-folders]').textContent = folders;
    section.querySelector('[data-ii-files]').textContent = files;
    section.querySelector('.ii-no-results').hidden = folders > 0;
  }
  document.addEventListener('input', event => {
    if (event.target.matches(selector + ' input[type="search"]')) filter();
  });
  document.addEventListener('click', event => {
    if (!event.target.closest(selector + ' [data-ii-reset]')) return;
    const input = document.querySelector(selector + ' input[type="search"]');
    input.value = '';
    filter();
    input.focus();
  });
  window.addEventListener('gencore-language-changed', filter);
})();
