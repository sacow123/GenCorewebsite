(()=>{
if(window.maiSettingsPhotoAnchorsBound)return;
window.maiSettingsPhotoAnchorsBound=true;
document.addEventListener('click',event=>{
const link=event.target.closest('#sec-mai-settings .mai-settings-photo-nav a');
if(!link)return;
const target=document.getElementById(link.getAttribute('href').slice(1));
if(!target)return;
event.preventDefault();
target.scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth',block:'start'});
});
})();
