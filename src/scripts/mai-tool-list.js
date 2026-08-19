(function () {
  const D = [
    ['T1-Z2.0B','White','Ball End Mill Ø2_L20','Zirconia / Wax / Sintering Metal',[['Zirconia','3,000 min.']]],['T2-Z1.0B','White','Ball End Mill Ø1.0_L15','Zirconia / Wax / Sintering Metal',[['Zirconia','2,000 min.']]],['T3-Z0.6B','White','Ball End Mill Ø0.6_L8','Zirconia / Wax / Sintering Metal',[['Zirconia','1,000 min.']]],['T4-Z0.3B','White','Ball End Mill Ø0.3_L6.5','Zirconia / Wax / Sintering Metal',[['Zirconia','600 min.']]],
    ['T5-G2.5R','Blue','Diamond bur Ø2.5_L12','Glass Ceramic / Hybrid Ceramic',[['Glass Ceramic','300 min.'],['Hybrid Ceramic','400 min.']]],['T6-G1.5B','Blue','Diamond bur Ø1.5_L10','Glass Ceramic / Hybrid Ceramic',[['Glass Ceramic','300 min.'],['Hybrid Ceramic','400 min.']]],['T7-G1.0B','Blue','Diamond bur Ø1_L9','Glass Ceramic / Hybrid Ceramic',[['Glass Ceramic','250 min.'],['Hybrid Ceramic','300 min.']]],['T8-G0.6B','Blue','Diamond bur Ø0.6_L9','Glass Ceramic / Hybrid Ceramic',[['Glass Ceramic','60 min.'],['Hybrid Ceramic','100 min.']]],
    ['T9-M3.0B','Red','Ball End Mill Ø3_L12','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['PMMA / PEEK','3,000 min.'],['Ti. Pre-Mill / Titanium','2,000 min.'],['Co. Cr.','1,000 min.']],'Three-flute'],['T10-M2.0B','Red','Ball End Mill Ø2_L12','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['PMMA / PEEK','2,000 min.'],['Ti. Pre-Mill / Titanium','1,500 min.'],['Co. Cr.','700 min.']],'Three-flute'],['T11-M1.5B','Red','Ball End Mill Ø1.5_L10','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['PMMA / PEEK','1,500 min.'],['Ti. Pre-Mill / Titanium','1,000 min.'],['Co. Cr.','500 min.']],'Three-flute'],['T12-M1.0B','Red','Ball End Mill Ø1_L10','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['PMMA / PEEK','700 min.'],['Ti. Pre-Mill / Titanium','500 min.'],['Co. Cr.','200 min.']],'Three-flute'],['T13-M0.6B','Red','Ball End Mill Ø0.6_L3','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['PMMA / PEEK','300 min.'],['Ti. Pre-Mill / Titanium','60 min.'],['Co. Cr.','30 min.']],'Three-flute'],['T14-M2.0BL','Red','Ball End Mill Ø2_L15','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['PMMA / PEEK','1,500 min.'],['Ti. Pre-Mill / Titanium','1,000 min.'],['Co. Cr.','500 min.']],'Three-flute, Long'],
    ['T15-M1.5RL','Red','Corner Radius End Mill Ø1.5_L15','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['Zirconia','200 min.'],['PMMA / PEEK','150 min.'],['Ti. Pre-Mill / Titanium','100 min.'],['Co. Cr.','60 min.']],'Four-flute'],['T16-M1.5FL','Red','Flat End Mill Ø1.5_L15','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['Zirconia','200 min.'],['PMMA / PEEK','150 min.'],['Ti. Pre-Mill / Titanium','100 min.'],['Co. Cr.','60 min.']],'Four-flute, Long'],['T17-M1.5F','Red','Flat End Mill Ø1.5_L7','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['Zirconia','200 min.'],['PMMA / PEEK','150 min.'],['Ti. Pre-Mill / Titanium','100 min.'],['Co. Cr.','60 min.']],'Four-flute'],['T18-M1.5R','Red','Corner Radius End Mill Ø1.5_L7','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['Zirconia','200 min.'],['PMMA / PEEK','150 min.'],['Ti. Pre-Mill / Titanium','100 min.'],['Co. Cr.','60 min.']],'Four-flute'],['T19-M1.0F','Red','Flat End Mill Ø1_L6','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['Zirconia','150 min.'],['PMMA / PEEK','90 min.'],['Ti. Pre-Mill / Titanium','60 min.'],['Co. Cr.','30 min.']],'Two-flute'],['T20-M0.5F','Red','Flat End Mill Ø0.5_L6','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['Zirconia','150 min.'],['PMMA / PEEK','90 min.'],['Ti. Pre-Mill / Titanium','60 min.'],['Co. Cr.','30 min.']],'Two-flute'],
    ['T21'],['T22'],
    ['T23-M1.5T','Yellow','T cutter Ø1.5_L8','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['Zirconia','150 min.'],['PMMA / PEEK','90 min.'],['Ti. Pre-Mill / Titanium','60 min.'],['Co. Cr.','30 min.']]],['T24-M2.0T','Yellow','T cutter Ø2.0_L8','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['Zirconia','150 min.'],['PMMA / PEEK','90 min.'],['Ti. Pre-Mill / Titanium','60 min.'],['Co. Cr.','30 min.']]],['T25-M2.0TH','Yellow','Screw Thread Ø2.0_L5 (P0.4)','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['Ti. Pre-Mill / Titanium','40 min.'],['Co. Cr.','20 min.']]],['T26-M1.8TH','Yellow','Screw Thread Ø1.8_L5 (P0.35)','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['Ti. Pre-Mill / Titanium','40 min.'],['Co. Cr.','20 min.']]],['T27-M1.6TH','Yellow','Screw Thread Ø1.6_L5 (P0.35)','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['Ti. Pre-Mill / Titanium','40 min.'],['Co. Cr.','20 min.']]],['T28-M1.4TH','Yellow','Screw Thread Ø1.4_L5.6 (P0.3)','Ti. Pre-Mill Block / Titanium / Co. Cr. / PMMA / PEEK',[['Ti. Pre-Mill / Titanium','40 min.'],['Co. Cr.','20 min.']]]
  ];
  const C={White:'background:#f3f4f6;color:#6b7280;border:1px solid #d1d5db;',Blue:'background:#dbeafe;color:#2563eb;border:1px solid #93c5fd;',Red:'background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;',Yellow:'background:#fef9c3;color:#a16207;border:1px solid #fde68a;'};
  const draw=()=>{const root=document.getElementById('mai-tools-list-time');if(!root||root.dataset.ready)return;root.dataset.ready='1';root.insertAdjacentHTML('beforeend',`<style>
#mai-tools-list-time .mai-tool-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;align-items:stretch}#mai-tools-list-time .parts-card[data-tool-id]{position:relative;cursor:pointer;transition:opacity .3s ease,transform .25s ease,box-shadow .25s ease}#mai-tools-list-time .tool-grid-hover .parts-card[data-tool-id],#mai-tools-list-time .tool-grid-hover .mai-tool-empty{opacity:.35;filter:grayscale(30%)}#mai-tools-list-time .tool-grid-hover .parts-card[data-tool-id].tool-active{opacity:1;filter:none;transform:translateY(-4px);box-shadow:0 8px 24px rgba(124,58,237,.18),0 2px 8px rgba(0,0,0,.08);z-index:20}#mai-tools-list-time .mai-tool-empty{min-height:230px;width:100%;border-radius:10px;border:2px dashed #d1d5db;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#f9fafb;color:#9ca3af;font-size:14px;font-weight:700;transition:opacity .3s ease,filter .3s ease}#mai-tools-list-time .mai-tool-empty span{font-size:24px;margin-bottom:4px}#mai-tools-list-time .mai-tool-tip{position:fixed;z-index:100;min-width:200px;max-width:280px;background:#fff;border:2px solid var(--primary);border-radius:12px;box-shadow:0 8px 32px rgba(124,58,237,.28);opacity:0;transform:translateY(8px) scale(.96);transition:opacity .2s ease,transform .2s ease;pointer-events:none;overflow:hidden}#mai-tools-list-time .mai-tool-tip.visible{opacity:1;transform:translateY(0) scale(1)}#mai-tools-list-time .tip-head{background:linear-gradient(135deg,var(--primary),var(--primary-dark));padding:10px 16px;display:flex;align-items:center;gap:8px;font-size:13px;font-weight:700;color:#fff}#mai-tools-list-time .tip-body{padding:12px 16px}#mai-tools-list-time .tip-row{display:flex;align-items:center;justify-content:space-between;padding:6px 0;border-bottom:1px solid rgba(0,0,0,.06);gap:14px;font-size:12px;font-weight:600;color:#555}#mai-tools-list-time .tip-row:last-child{border:0}#mai-tools-list-time .tip-time{font-size:14px;font-weight:800;color:var(--primary);white-space:nowrap}@media(max-width:760px){#mai-tools-list-time .mai-tool-grid{grid-template-columns:repeat(2,1fr)}#mai-tools-list-time .mai-tool-empty{min-height:190px}}</style><div class="mai-tool-grid"></div><div class="mai-tool-tip" role="tooltip"></div>`);const grid=root.querySelector('.mai-tool-grid'),tip=root.querySelector('.mai-tool-tip');D.forEach((d,i)=>{const [model,color,spec,material,times,note]=d;if(!color){const e=document.createElement('div');e.className='mai-tool-empty';e.innerHTML=`<span>${model}</span>Empty`;grid.append(e);return}const id=model.split('-')[0],img=String(i+1).padStart(2,'0'),card=document.createElement('div');card.className='parts-card';card.dataset.toolId=id;card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label',`${model} 권장 사용시간 보기`);card.innerHTML=`<img loading="lazy" src="assets/images/sec-mai-tools/tool-list/t${img}.webp" alt="${model}" class="parts-card-img"><div class="parts-card-body"><div style="font-weight:800;font-size:15px;color:#1f2937;margin-bottom:6px;">${model}</div><span style="display:inline-block;padding:2px 10px;border-radius:4px;font-size:12px;font-weight:600;${C[color]}margin-bottom:8px;">${color}</span><div style="font-size:12px;color:#374151;line-height:1.6;font-weight:600;">${spec}</div>${note?`<div style="font-size:11px;color:#6b7280;line-height:1.5;margin-top:4px;font-weight:700;">${note}</div>`:''}<div style="font-size:11px;color:#6b7280;line-height:1.5;margin-top:4px;font-weight:700;">${material}</div></div>`;const show=()=>{const r=card.getBoundingClientRect(),g=grid.getBoundingClientRect(),w=240,right=r.left+r.width/2>g.left+g.width/2;tip.innerHTML=`<div class="tip-head">⏱️ ${id} 권장 사용시간</div><div class="tip-body">${times.map(([m,t])=>`<div class="tip-row"><span>${m}</span><span class="tip-time">${t}</span></div>`).join('')}</div>`;tip.style.left=`${right?Math.max(12,r.left-w-12):Math.min(r.right+12,innerWidth-w-12)}px`;tip.style.top=`${Math.max(12,r.top)}px`;tip.classList.add('visible');grid.classList.add('tool-grid-hover');card.classList.add('tool-active')},hide=()=>{tip.classList.remove('visible');grid.classList.remove('tool-grid-hover');card.classList.remove('tool-active')};card.addEventListener('mouseenter',show);card.addEventListener('mouseleave',hide);card.addEventListener('focus',show);card.addEventListener('blur',hide);card.addEventListener('click',show);grid.append(card)})};document.readyState==='loading'?document.addEventListener('DOMContentLoaded',draw):draw();
})();

(function () {
  const labels = {
    ko: '권장 사용시간',
    en: 'Recommended Usage Time',
    ja: '推奨使用時間',
    es: 'Tiempo de uso recomendado'
  };

  const getLabel = () => labels[document.documentElement.lang] || labels.ko;

  const syncLabels = (root) => {
    const label = getLabel();
    root.querySelectorAll('.parts-card[data-tool-id]').forEach((card) => {
      const model = card.querySelector('.parts-card-body > div')?.textContent?.trim() || card.dataset.toolId;
      card.setAttribute('aria-label', `${model} ${label}`);
    });

    const activeCard = root.querySelector('.parts-card[data-tool-id].tool-active');
    const tooltipHeader = root.querySelector('.tip-head');
    if (activeCard && tooltipHeader) {
      const headerText = `⏱️ ${activeCard.dataset.toolId} ${label}`;
      if (tooltipHeader.textContent !== headerText) tooltipHeader.textContent = headerText;
    }
  };

  const attach = () => {
    const root = document.getElementById('mai-tools-list-time');
    if (!root || root.dataset.toolLanguageSyncReady === 'true') return;
    root.dataset.toolLanguageSyncReady = 'true';

    const rootObserver = new MutationObserver(() => syncLabels(root));
    rootObserver.observe(root, { childList: true, subtree: true });

    const languageObserver = new MutationObserver(() => syncLabels(root));
    languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

    syncLabels(root);
  };

  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', attach)
    : attach();
}());
