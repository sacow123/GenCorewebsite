(()=>{
if(window.maiBlankDimensionsZoomBound)return;window.maiBlankDimensionsZoomBound=true;
const selector='#sec-mai-hd-blank .mai-blank-dimensions-images img, #sec-mf-hd-blanks .mai-blank-dimensions-images img';
function open(photo){const box=document.getElementById('hyperdent-image-lightbox');if(!box)return;const image=box.querySelector('.hyperdent-image-lightbox__image');image.src=photo.currentSrc||photo.src;image.alt=photo.alt;box.hidden=false;document.body.classList.add('hyperdent-image-lightbox-open');box.querySelector('button').focus();}
document.addEventListener('click',event=>{const photo=event.target.closest(selector);if(photo)open(photo);});
document.addEventListener('keydown',event=>{if(event.key!=='Enter'&&event.key!==' ')return;const photo=event.target.closest(selector);if(photo){event.preventDefault();open(photo);}});
})();
