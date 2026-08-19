(function () {
  const times = {
    T1:[['Zirconia','3,000 min.']],T2:[['Zirconia','2,000 min.']],T3:[['Zirconia','1,000 min.']],T4:[['Zirconia','600 min.']],
    T5:[['Glass Ceramic','300 min.'],['Hybrid Ceramic','400 min.']],T6:[['Glass Ceramic','300 min.'],['Hybrid Ceramic','400 min.']],T7:[['Glass Ceramic','250 min.'],['Hybrid Ceramic','300 min.']],T8:[['Glass Ceramic','60 min.'],['Hybrid Ceramic','100 min.']],
    T9:[['PMMA / PEEK','3,000 min.'],['Ti. Pre-Mill / Titanium','2,000 min.'],['Co. Cr.','1,000 min.']],T10:[['PMMA / PEEK','2,000 min.'],['Ti. Pre-Mill / Titanium','1,500 min.'],['Co. Cr.','700 min.']],T11:[['PMMA / PEEK','1,500 min.'],['Ti. Pre-Mill / Titanium','1,000 min.'],['Co. Cr.','500 min.']],T12:[['PMMA / PEEK','700 min.'],['Ti. Pre-Mill / Titanium','500 min.'],['Co. Cr.','200 min.']],T13:[['PMMA / PEEK','300 min.'],['Ti. Pre-Mill / Titanium','60 min.'],['Co. Cr.','30 min.']],T14:[['PMMA / PEEK','1,500 min.'],['Ti. Pre-Mill / Titanium','1,000 min.'],['Co. Cr.','500 min.']],
    T15:[['Zirconia','200 min.'],['PMMA / PEEK','150 min.'],['Ti. Pre-Mill / Titanium','100 min.'],['Co. Cr.','60 min.']],T16:[['Zirconia','200 min.'],['PMMA / PEEK','150 min.'],['Ti. Pre-Mill / Titanium','100 min.'],['Co. Cr.','60 min.']],T17:[['Zirconia','200 min.'],['PMMA / PEEK','150 min.'],['Ti. Pre-Mill / Titanium','100 min.'],['Co. Cr.','60 min.']],T18:[['Zirconia','200 min.'],['PMMA / PEEK','150 min.'],['Ti. Pre-Mill / Titanium','100 min.'],['Co. Cr.','60 min.']],T19:[['Zirconia','150 min.'],['PMMA / PEEK','90 min.'],['Ti. Pre-Mill / Titanium','60 min.'],['Co. Cr.','30 min.']],T20:[['Zirconia','150 min.'],['PMMA / PEEK','90 min.'],['Ti. Pre-Mill / Titanium','60 min.'],['Co. Cr.','30 min.']],
    T23:[['Zirconia','150 min.'],['PMMA / PEEK','90 min.'],['Ti. Pre-Mill / Titanium','60 min.'],['Co. Cr.','30 min.']],T24:[['Zirconia','150 min.'],['PMMA / PEEK','90 min.'],['Ti. Pre-Mill / Titanium','60 min.'],['Co. Cr.','30 min.']],T25:[['Ti. Pre-Mill / Titanium','40 min.'],['Co. Cr.','20 min.']],T26:[['Ti. Pre-Mill / Titanium','40 min.'],['Co. Cr.','20 min.']],T27:[['Ti. Pre-Mill / Titanium','40 min.'],['Co. Cr.','20 min.']],T28:[['Ti. Pre-Mill / Titanium','40 min.'],['Co. Cr.','20 min.']]
  };
  const attach = () => {
    const root = document.getElementById('mai-tools-list-time');
    if (!root || root.dataset.tooltipFixed === 'true') return;
    root.dataset.tooltipFixed = 'true';
    document.head.insertAdjacentHTML('beforeend', '<style>.mai-tool-popup{display:block!important;position:fixed!important;z-index:2147483647!important;min-width:200px;max-width:280px;background:#fff;border:2px solid #7c3aed;border-radius:12px;box-shadow:0 8px 32px rgba(124,58,237,.28);opacity:0;transform:translateY(8px) scale(.96);transition:opacity .2s ease,transform .2s ease;pointer-events:none;overflow:hidden}.mai-tool-popup.visible{opacity:1;transform:translateY(0) scale(1)}.mai-tool-popup-head{background:linear-gradient(135deg,#7c3aed,#5b21b6);padding:10px 16px;font-size:13px;font-weight:700;color:#fff}.mai-tool-popup-body{padding:12px 16px}.mai-tool-popup-row{display:flex;justify-content:space-between;gap:14px;padding:6px 0;border-bottom:1px solid rgba(0,0,0,.06);font-size:12px;font-weight:600;color:#555}.mai-tool-popup-row:last-child{border:0}.mai-tool-popup-time{font-size:14px;font-weight:800;color:#7c3aed;white-space:nowrap}</style>');
    const popup=document.createElement('div'); popup.className='mai-tool-popup'; popup.setAttribute('role','tooltip'); document.body.append(popup);
    root.querySelectorAll('.parts-card[data-tool-id]').forEach((card) => {
      const show = () => { const id=card.dataset.toolId, rows=times[id]; if (!rows) return; const rect=card.getBoundingClientRect(), width=240, left=rect.left+rect.width/2>innerWidth/2?Math.max(12,rect.left-width-12):Math.min(rect.right+12,innerWidth-width-12); popup.innerHTML=`<div class="mai-tool-popup-head">⏱️ ${id} 권장 사용시간</div><div class="mai-tool-popup-body">${rows.map(([m,t])=>`<div class="mai-tool-popup-row"><span>${m}</span><span class="mai-tool-popup-time">${t}</span></div>`).join('')}</div>`; popup.style.left=`${left}px`; popup.style.top=`${Math.max(12,Math.min(rect.top,innerHeight-200))}px`; popup.classList.add('visible'); };
      const hide = () => popup.classList.remove('visible');
      card.addEventListener('pointerenter', show); card.addEventListener('pointerleave', hide); card.addEventListener('focus', show); card.addEventListener('blur', hide); card.addEventListener('click', show);
    });
  };
  document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', attach) : attach();
})();

(function () {
  const labels = {
    ko: '권장 사용시간',
    en: 'Recommended Usage Time',
    ja: '推奨使用時間',
    es: 'Tiempo de uso recomendado'
  };

  const syncPopupHeaders = () => {
    const label = labels[document.documentElement.lang] || labels.ko;
    document.querySelectorAll('.mai-tool-popup-head').forEach((header) => {
      const toolId = header.textContent.match(/T\d+/)?.[0];
      if (!toolId) return;
      const text = `⏱️ ${toolId} ${label}`;
      if (header.textContent !== text) header.textContent = text;
    });
  };

  const attach = () => {
    new MutationObserver(syncPopupHeaders).observe(document.body, { childList: true, subtree: true });
    new MutationObserver(syncPopupHeaders).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    syncPopupHeaders();
  };

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', attach)
    : attach();
}());
