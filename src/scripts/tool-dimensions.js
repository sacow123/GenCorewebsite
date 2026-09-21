(function () {
  const labels = {
    ko: ['직경', '길이'],
    en: ['Diameter', 'Length'],
    ja: ['直径', '長さ'],
    es: ['Diámetro', 'Longitud']
  };

  function updateLabels() {
    const names = labels[document.documentElement.lang] || labels.ko;
    document.querySelectorAll('.tool-dimensions').forEach((details) => {
      const values = [details.dataset.diameter, details.dataset.length];
      Array.from(details.children).forEach((line, index) => {
        const text = `${names[index]} : ${values[index]}mm`;
        if (line.textContent !== text) line.textContent = text;
      });
    });
  }

  function init() {
    document.querySelectorAll('#mai-tools-list-time .parts-card[data-tool-id], #sec-mf-tools .parts-card[data-tool-id]').forEach((card) => {
      const body = card.querySelector('.parts-card-body');
      const badge = body?.querySelector(':scope > span');
      const spec = body?.textContent.match(/Ø\s*(\d+(?:\.\d+)?)_L\s*(\d+(?:\.\d+)?)/);
      if (!badge || !spec || body.querySelector('.tool-dimensions')) return;

      const row = document.createElement('div');
      row.className = 'tool-dimension-row';
      const details = document.createElement('div');
      details.className = 'tool-dimensions';
      details.dataset.diameter = spec[1];
      details.dataset.length = spec[2];
      details.append(document.createElement('div'), document.createElement('div'));
      badge.before(row);
      row.append(badge, details);
    });
    updateLabels();
    new MutationObserver(updateLabels).observe(document.documentElement, {
      attributes: true, attributeFilter: ['lang']
    });
  }

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', init)
    : init();
}());
