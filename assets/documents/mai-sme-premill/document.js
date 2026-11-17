// This document owns its translations, including when its parent is inaccessible.
(() => {
  const data=window.SmePremillContent,article=document.getElementById('sme-content');
  let language='ko';
  function reportHeight(){
    parent.postMessage({type:'gencore-document-height',documentId:'mai-sme-premill',height:Math.ceil(article.getBoundingClientRect().height+16)},'*');
  }
  function render(lang){
    language=data.contents[lang]?lang:'en';
    document.documentElement.lang=language;document.title=data.title[language];
    article.innerHTML=data.contents[language];
    article.querySelectorAll('img').forEach(image=>image.addEventListener('load',reportHeight,{once:true}));
    requestAnimationFrame(reportHeight);
  }
  addEventListener('message',event=>{
    if(event.source!==parent)return;
    if(event.data?.type==='gencore-language-change')render(event.data.lang);
    if(event.data?.type==='gencore-request-document-height')reportHeight();
  });
  // Same-origin frames use the shared image viewer; this bridge also supports
  // isolated file:// frames without reading the parent's DOM.
  article.addEventListener('click',event=>{
    const image=event.target.closest('figure.image img,figure.image a')?.closest('figure.image')?.querySelector('img');
    if(!image)return;
    event.preventDefault();
    parent.postMessage({type:'gencore-sme-image',src:image.src,alt:image.alt},'*');
  });
  new ResizeObserver(reportHeight).observe(article);
  render(new URLSearchParams(location.search).get('lang')||'ko');
  parent.postMessage({type:'gencore-sme-ready'},'*');
})();
