(()=>{
if(window.maiToolCareLinksBound)return;window.maiToolCareLinksBound=true;
document.addEventListener('click',event=>{
const link=event.target.closest('#sec-mai-tool-care a[href^="#sec-"]');if(!link)return;
const section=link.getAttribute('href').slice(1);const nav=document.querySelector('.nav-item[data-section="'+section+'"]');if(!nav)return;
event.preventDefault();nav.click();
const target=link.dataset.careScroll;if(target){const sectionElement=document.getElementById(section);const images=[...sectionElement.querySelectorAll('img')];images.forEach(img=>img.loading='eager');Promise.allSettled(images.map(img=>img.decode())).then(()=>requestAnimationFrame(()=>document.getElementById(target)?.scrollIntoView({block:'start'})));}
});
})();
