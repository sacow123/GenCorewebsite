/* Tool touch sensor: symptoms from the original Notion manual. */
(function () {
  const modal = document.getElementById('video-modal');
  if (!modal || typeof window.openVideoModal !== 'function') return;
  const copy = {
    ko: ['툴터치센서 교체 방법', '1. 증상 확인', '아래 영상은 툴터치센서의 오작동 증상을 보여줍니다. 장비에서 같은 증상이 나타나는지 확인한 뒤, 아래 교체 방법 영상을 참고해 센서를 교체하세요.', '2. 교체 방법', '원본 매뉴얼 보기'],
    en: ['Replace Tool Touch Sensor', '1. Check the symptoms', 'The video below shows a malfunctioning tool touch sensor. Check whether your machine shows the same symptoms, then follow the replacement video below to replace the sensor.', '2. Replacement instructions', 'View the original manual'],
    ja: ['ツールタッチセンサーの交換方法', '1. 症状の確認', '下の動画はツールタッチセンサーの動作不良を示しています。装置で同じ症状が発生しているか確認し、下の交換手順の動画を参考にセンサーを交換してください。', '2. 交換手順', '元のマニュアルを見る'],
    es: ['Reemplazar el sensor de contacto de herramienta', '1. Comprobar los síntomas', 'El vídeo siguiente muestra un fallo del sensor de contacto de herramienta. Compruebe si su máquina presenta los mismos síntomas y siga el vídeo de sustitución para reemplazar el sensor.', '2. Instrucciones de sustitución', 'Ver el manual original']
  };
  const keys = ['touch-sensor-title', 'touch-sensor-symptoms', 'touch-sensor-description', 'touch-sensor-replacement', 'touch-sensor-source'];
  if (typeof TRANSLATIONS !== 'undefined') Object.entries(copy).forEach(([lang, values]) => {
    if (TRANSLATIONS[lang]) keys.forEach((key, i) => { TRANSLATIONS[lang][key] = values[i]; });
  });
  const frame = document.getElementById('video-modal-iframe');
  const player = frame.parentElement;
  const details = document.createElement('section');
  details.id = 'tool-touch-sensor-symptoms';
  details.hidden = true;
  details.innerHTML = '<h4 data-i18n="touch-sensor-symptoms" style="margin:0 0 10px;font-size:18px"></h4><p data-i18n="touch-sensor-description" style="margin:0 0 16px"></p><video id="tool-touch-sensor-symptom-video" controls playsinline preload="metadata" style="display:block;width:100%;max-height:360px;background:#111;border-radius:12px"></video><p style="margin:10px 0 24px"><a data-i18n="touch-sensor-source" href="https://gencoretech.notion.site/M-AI-_-Replace-Tool-touch-sensor-211cfb3e905880af844ac6aa7ab5d4af" target="_blank" rel="noopener noreferrer" style="color:#a855f7"></a></p>';
  player.before(details);
  const replacement = document.createElement('h4');
  replacement.dataset.i18n = 'touch-sensor-replacement';
  replacement.style.cssText = 'margin:0 0 12px;font-size:18px';
  replacement.hidden = true;
  player.before(replacement);
  const video = details.querySelector('video');
  const title = document.getElementById('video-modal-title');
  let active = false;
  function translate() {
    if (!active) return;
    const values = copy[document.documentElement.lang] || copy.ko;
    details.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = values[keys.indexOf(el.dataset.i18n)]; });
    replacement.textContent = values[3];
    title.textContent = values[0];
  }
  function update(url) {
    active = /(?:embed\/|youtu\.be\/|v=)UUYd7q-JbM0(?:[?&#]|$)/.test(url || '');
    details.hidden = replacement.hidden = !active;
    if (active) {
      title.dataset.i18n = keys[0];
      video.src = 'assets/videos/mai-parts/tool-touch-sensor-symptom.mp4';
      // Let the reader inspect symptoms before starting the replacement tutorial.
      const currentFrame = document.getElementById('video-modal-iframe');
      if (currentFrame) currentFrame.src = currentFrame.src.replace(/([?&])autoplay=1/g, '$1autoplay=0');
      translate();
      details.parentElement.scrollTop = 0;
    } else {
      title.removeAttribute('data-i18n');
      video.pause(); video.removeAttribute('src'); video.load();
    }
  }
  const originalOpen = window.openVideoModal;
  window.openVideoModal = function (name, url) { originalOpen.apply(this, arguments); update(url); };
  new MutationObserver(() => {
    if (modal.style.display === 'none') { video.pause(); video.removeAttribute('src'); video.load(); }
  }).observe(modal, { attributes: true, attributeFilter: ['style'] });
  new MutationObserver(translate).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  function openLinkedSensor() {
    const hash = location.hash;
    if (!hash.startsWith('#modal-video?')) return;
    const params = new URLSearchParams(hash.slice('#modal-video?'.length));
    const url = params.get('src') || '';
    if (/^https:\/\/(www\.)?youtube(?:-nocookie)?\.com\/embed\/UUYd7q-JbM0(?:[?&#]|$)/.test(url)) {
      if (modal.style.display !== 'none') update(url);
      else window.openVideoModal(params.get('title') || copy.ko[0], url);
    }
  }
  if (modal.style.display !== 'none') update(document.getElementById('video-modal-iframe')?.src);
  window.addEventListener('hashchange', openLinkedSensor);
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', openLinkedSensor);
  else openLinkedSensor();
})();
