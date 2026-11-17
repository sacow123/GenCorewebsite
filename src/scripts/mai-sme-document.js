// Scope the embedded guide's language and isolated-frame image bridge to S ME.
(() => {
  const frame=document.querySelector('#sec-mai-cal-premill-s-me iframe[data-language-sync]');
  if(!frame)return;
  const titles={ko:'S ME 프리밀 지그 사용 방법 (Medentika 홀더)',en:'How to use the S ME premill jig (Medentika holder)',ja:'S MEプリミルジグの使用方法（Medentikaホルダー）',es:'Cómo utilizar el útil premill S ME (soporte Medentika)'};
  function sync(){
    const lang=typeof currentLang==='undefined'?'ko':currentLang;
    frame.title=titles[lang]||titles.en;
    frame.contentWindow?.postMessage({type:'gencore-language-change',lang},'*');
  }
  frame.addEventListener('load',sync);
  document.addEventListener('DOMContentLoaded',sync);
  window.addEventListener('gencore-language-changed',()=>{
    if(frame.closest('.content-section').classList.contains('active'))window.GenCoreArticleZoom?.close();
    sync();
  });
  window.addEventListener('message',event=>{
    if(event.source!==frame.contentWindow)return;
    if(event.data?.type==='gencore-sme-ready'){sync();return;}
    if(event.data?.type!=='gencore-sme-image')return;
    const url=new URL(event.data.src,frame.src);
    if(url.protocol!==location.protocol||url.host!==location.host||!url.pathname.includes('/assets/images/mai-sme-premill/'))return;
    const photo=document.createElement('img');photo.src=url.href;photo.alt=String(event.data.alt||'');
    window.GenCoreArticleZoom?.open(photo);
  });
})();
