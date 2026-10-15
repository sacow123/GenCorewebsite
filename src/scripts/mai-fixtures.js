/* Delegate events so language-driven section restoration keeps filters working. */
document.addEventListener('click', (event) => {
  const button = event.target.closest('#sec-mai-hd-settings-fixture [data-fixture-filter]');
  if (!button) return;
  const section = button.closest('section');
  section.querySelectorAll('[data-fixture-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  section.querySelectorAll('[data-fixture-group]').forEach(card => {
    card.hidden = button.dataset.fixtureFilter !== 'all' && card.dataset.fixtureGroup !== button.dataset.fixtureFilter;
  });
});
