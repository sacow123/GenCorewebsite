// Canonical MillFix material details, excluding Woodrruff processes.
(() => {
  const filterStyle = document.createElement('style');
  filterStyle.textContent = '#sec-mf-hd-dbconfig .dbconfig-prosthesis-icon img{pointer-events:none}';
  document.head.append(filterStyle);
  const records = [...(window.MfHybrid260830Templates || []), ...(window.MfPmma260830Templates || []), ...(window.MfPeek260830Templates || []), ...(window.MfWax260830Templates || []), ...(window.MfZirconia260830Templates || [])];
  const normalize = value => value.toLowerCase().replace(/flexble/g,'flexible').replace(/2nd/g,'2st').replace(/[^a-z0-9]/g,'');
  const text = value => String(value).replace(/(\b(?:T\d+_)?[A-Z]\d+(?:\.\d+)?[A-Z]+_L\d+)\(-?\d+\)/gi, '$1');
  const esc = value => text(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
  const labels = {
    ko: ['사용 조건','조정 가능 항목','사용자 정의 영역 (UDA)','공구','기본 사용 공구','조건부 사용 공구','유형 ', ' 사용 가능','기준 DB: MillFix 260830_R1 원본'],
    en: ['When to use','Adjustable items','User-defined area (UDA)','Tools','Basic tools','Conditional tools','Categories ', ' available','Source DB: MillFix 260830_R1 original'],
    ja: ['使用条件','調整可能な項目','ユーザー定義領域 (UDA)','工具','基本使用工具','条件付き使用工具','タイプ ', ' 使用可能','基準DB：MillFix 260830_R1オリジナル']
  };
  // Only show photographs that match the original tool specification.
  const photos = {T32:'t32-z10b.webp',T31:'t31-z20b.webp',T44:'t44-m15r.webp',T33:'t33-z06b.webp',T34:'t34-z03b.webp',T38:'t38-m20b.webp',T39:'t39-m10b.webp',T35:'t35-g20b.webp',T36:'t36-g10b.webp',T37:'t37-g06b.webp',T42:'t42-m15fl.webp',T43:'t43-m10f.webp',T45:'t45-m16t.webp'};
  function render(title, language) {
    const record = records.find(r => normalize(r.title) === normalize(title));
    if (!record) return null;
    const lang = labels[language] ? language : 'en', c = labels[lang];
    const list = items => '<ul>' + items.flatMap(item => item[lang].split('\n').map(line => '<li>' + esc(line) + '</li>')).join('') + '</ul>';
    const section = (name, body, disclosure = false) => disclosure
      ? '<details class="hybrid-card-section hybrid-adjustable-toggle"><summary><h4>' + esc(name) + '</h4></summary>' + body + '</details>'
      : '<section class="hybrid-card-section"><h4>' + esc(name) + '</h4>' + body + '</section>';
    const categories = [...new Set(record.uda.flatMap(item => [...item.en.matchAll(/Category ([\d/]+)/g)].flatMap(m => m[1].split('/').map(Number))))];
    const uda = [1,0].map(parity => categories.filter(n => n % 2 === parity).sort((a,b) => a-b)).filter(a => a.length).map(a => ({[lang]:c[6] + a.join('/') + c[7]}));
    const tools = optional => {
      const group = record.tools.filter(t => t.optional === optional);
      return group.length ? '<p class="hybrid-tool-group">' + c[optional ? 5 : 4] + '</p><div class="hybrid-tool-grid ' + (optional ? 'conditional' : 'basic') + '">' + group.map(t => '<article class="hybrid-tool' + (optional ? ' is-conditional' : '') + '">' + (photos[t.id] ? '<div class="hybrid-tool-crop"><img loading="lazy" src="assets/images/sec-mf-tools/' + photos[t.id] + '" alt="' + esc(t.id + ' ' + t.name) + '"></div>' : '') + '<strong>' + esc(t.id) + '</strong><em>' + esc(t.name) + '</em>' + t.comments.map(v => '<small>' + esc(v[lang]) + '</small>').join('') + '</article>').join('') + '</div>' : '';
    };
    const processes = record.processes.map(p => '<div class="hybrid-adjustment-group"><h5>' + esc(p.titleText?.[lang] || p.title) + '</h5>' + list(p.descriptions) + '</div>').join('');
    return {title:record.title, html:window.GenCoreMaterialTemplateCard.styles() + '<article class="hybrid-template-card" lang="' + lang + '"><span class="hybrid-template-card__tag">MILLFIX TEMPLATE</span><h3>' + esc(record.material) + '</h3><p class="hybrid-template-card__subtitle">' + esc(record.title.slice(record.material.length + 1).replace(/_/g,' · ')) + '</p>' + section(c[0],list(record.conditions)) + section(c[1],processes,true) + (uda.length ? section(c[2],list(uda),true) : '') + (record.interfaces.length ? section('Implant Interfaces wall',list(record.interfaces),true) : '') + '<section class="hybrid-tools"><h4>' + c[3] + '</h4>' + tools(false) + tools(true) + '</section></article>'};
  }
  window.MfHybridDbconfig = {render, records, titles:records.map(r => r.title), labels};
  window.addEventListener('gencore-language-changed', () => {
    const lang = typeof currentLang === 'undefined' ? 'ko' : currentLang;
    document.querySelectorAll('[data-mf-hybrid-source]').forEach(el => {el.textContent=(labels[lang] || labels.en)[8];});
  });
})();
