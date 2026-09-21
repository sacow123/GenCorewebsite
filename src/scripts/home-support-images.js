/* Keeps the home support posters aligned with the selected site language. */
(() => {
  const ASSET_ROOT = 'assets/images/section-home/support-inquiry/';
  const IMAGE_LANGUAGE = {
    ko: 'ko',
    en: 'en',
    ja: 'ja',
    // A Spanish poster was not supplied, so use the supplied English version.
    es: 'en'
  };
  const ALT_TEXT = {
    ko: {
      hyperdent: 'hyperDENT 고객 지원 문의 안내',
      machine: 'M AI 및 MillFix 고객 지원 문의 안내'
    },
    en: {
      hyperdent: 'hyperDENT support inquiry guidelines',
      machine: 'M AI and MillFix support inquiry guidelines'
    },
    ja: {
      hyperdent: 'hyperDENT サポートお問い合わせ案内',
      machine: 'M AI および MillFix サポートお問い合わせ案内'
    }
  };

  function updateSupportImages(lang = document.documentElement.lang || 'ko') {
    const imageLang = IMAGE_LANGUAGE[lang] || 'ko';
    const altLang = ALT_TEXT[imageLang] || ALT_TEXT.ko;
    document.querySelectorAll('[data-home-support-image]').forEach((image) => {
      const product = image.dataset.homeSupportImage;
      image.src = `${ASSET_ROOT}${product}-${imageLang}.webp`;
      image.alt = altLang[product] || '';
    });
  }

  window.addEventListener('gencore-language-changed', (event) => {
    updateSupportImages(event.detail?.lang);
  });
  document.addEventListener('DOMContentLoaded', () => updateSupportImages());
})();
