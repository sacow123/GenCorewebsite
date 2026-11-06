(() => {
  const steps = {
    ko: [
      ['인터페이스의 카테고리를 수동으로 설정하기 위해 하이퍼덴트의 "준비 → 임플란트 인터페이스 메뉴"로 진입하세요.\n디스크 내에서 어버트먼트 종류의 보철물을 가공할 때 스크류 채널 설정에 대해 알아보려면 ', '스크류 채널 설정 (클릭)'],
      ['먼저 카테고리를 설정할 스크류 채널을 선택하세요. 스크류 채널이 잘 잡혔는지 확인하세요. (직경, 유형 등등)'],
      ["사진에 표시된 '지오메트리 타입 결정' 메뉴를 클릭하세요."],
      ["메뉴를 클릭하면 '명시적', '외부' 선택지가 있고 그 밑에는 사진과 같은 옵션들이 펼쳐지는데 '평면(-)'을 선택하세요. (자동으로 선택되어 있을 겁니다.)"],
      ['카테고리를 설정할 부분으로 확대하세요.'],
      ['우리가 카테고리를 설정해 가공할 부분은 사진에서 표시된 부분입니다.\n가공할 벽의 바닥이 평면인 것을 확인할 수 있습니다.'],
      ['카테고리의 설정은 인터페이스의 벽면과 바닥을 설정하는 것과 같습니다. 먼저 가공할 벽면의 높이를 측정해주셔야 합니다.\n바닥면을 찍고 (①) → 천장면을 찍으세요 (②)']
    ],
    en: [
      ['To set the interface category manually, open "Preparation → Implant Interface" in hyperDENT.\nFor screw channel settings when machining abutment restorations in a disc, see ', 'Screw channel settings (click)'],
      ['First, select the screw channel whose category you want to set. Check that the screw channel has been detected correctly (diameter, type, etc.).'],
      ['Click the "Determine geometry type" menu shown in the image.'],
      ['The menu offers "Explicit" and "External", with the options shown in the image below. Select "Plane (-)". (It should already be selected automatically.)'],
      ['Zoom in on the area whose category you want to set.'],
      ['The area marked in the image is where we will set the category for machining.\nYou can see that the floor of the wall to be machined is flat.'],
      ['Setting the category means defining the interface wall and floor. First, measure the height of the wall to be machined.\nClick the floor (①) → then click the ceiling (②).']
    ],
    ja: [
      ['インターフェースのカテゴリーを手動で設定するには、hyperDENTの「準備 → インプラントインターフェース」メニューを開いてください。\nディスク内でアバットメントの補綴物を加工する際のスクリューチャンネル設定については、', 'スクリューチャンネル設定（クリック）'],
      ['まず、カテゴリーを設定するスクリューチャンネルを選択してください。正しく検出されているか確認してください。（直径、タイプなど）'],
      ['画像に示された「ジオメトリータイプの決定」メニューをクリックしてください。'],
      ['メニューには「明示的」「外部」の選択肢があり、その下に画像のようなオプションが表示されます。「平面(-)」を選択してください。（自動的に選択されているはずです。）'],
      ['カテゴリーを設定する部分を拡大してください。'],
      ['カテゴリーを設定して加工するのは、画像で示された部分です。\n加工する壁の底面が平面であることが確認できます。'],
      ['カテゴリーの設定は、インターフェースの壁面と底面を設定することです。まず、加工する壁面の高さを測定してください。\n底面をクリックし（①）→ 天井面をクリックしてください（②）。']
    ],
    es: [
      ['Para configurar manualmente la categoría de la interfaz, abra "Preparación → Interfaz de implante" en hyperDENT.\nPara conocer la configuración del canal de tornillo al mecanizar restauraciones de tipo pilar en un disco, consulte ', 'Configuración del canal de tornillo (clic)'],
      ['Primero, seleccione el canal de tornillo cuya categoría desea configurar. Compruebe que se haya detectado correctamente (diámetro, tipo, etc.).'],
      ['Haga clic en el menú "Determinar el tipo de geometría" indicado en la imagen.'],
      ['El menú ofrece "Explícito" y "Externo", con las opciones de la imagen debajo. Seleccione "Plano (-)". (Debería estar seleccionado automáticamente.)'],
      ['Amplíe la zona cuya categoría desea configurar.'],
      ['La zona indicada en la imagen es donde configuraremos la categoría para el mecanizado.\nPuede comprobar que la base de la pared que se mecanizará es plana.'],
      ['Configurar la categoría equivale a definir la pared y la base de la interfaz. Primero, mida la altura de la pared que se mecanizará.\nHaga clic en la base (①) → y después en el techo (②).']
    ]
  };
  const continuation = {
    ko: [
      ['높이를 잘 설정했다면 사진과 같이 화살표 모양과 테두리가 생겼을 겁니다.\n설정한 높이 만큼의 벽을, 화살표 방향으로 가공한다는 표시입니다.'],
      ["'다음' 화살표를 눌러, 혹은 생성된 테두리 내지 화살표를 눌러 여러분이 설정한 카테고리를 선택하세요."],
      ["우리가 설정한 벽이 '외부'(혹은 내부)로 잘 인식 되었는지. 가공할 인터페이스 카테고리의 유형이 몇번인지(기본 유형은 1입니다) 확인하세요.\n\n※사진 속 예시는 Internal 타입의 Fixture에 들어가기 위해 외부로 돌출된 Interface입니다.\n따라서 '외부' 로 설정되는 것이 정상입니다."]
    ],
    en: [
      ['If the height is set correctly, arrows and an outline will appear as shown in the image.\nThey indicate that the wall will be machined to the specified height in the direction of the arrows.'],
      ['Click the "Next" arrow, or click the generated outline or arrows, to select the category you have defined.'],
      ['Check whether the wall you defined is correctly recognized as "External" (or Internal). Check the type number of the interface category to be machined (the default type is 1).\n\n※The example in the image is an outward-protruding Interface that fits into an Internal-type Fixture.\nTherefore, "External" is the correct setting.']
    ],
    ja: [
      ['高さが正しく設定されていれば、画像のように矢印と輪郭が表示されます。\n設定した高さの壁を、矢印の方向に加工することを示しています。'],
      ['「次へ」の矢印、または生成された輪郭や矢印をクリックして、設定したカテゴリーを選択してください。'],
      ['設定した壁が「外部」（または内部）として正しく認識されているか、加工するインターフェースカテゴリーのタイプ番号は何番かを確認してください（デフォルトのタイプは1です）。\n\n※画像の例は、InternalタイプのFixtureに入るように外側へ突出したInterfaceです。\nしたがって、「外部」に設定されるのが正常です。']
    ],
    es: [
      ['Si la altura está bien configurada, aparecerán flechas y un contorno como en la imagen.\nIndican que la pared se mecanizará hasta la altura definida en la dirección de las flechas.'],
      ['Haga clic en la flecha "Siguiente", o en el contorno o las flechas generadas, para seleccionar la categoría que ha definido.'],
      ['Compruebe si la pared definida se reconoce correctamente como "Externa" (o Interna). Compruebe el número de tipo de la categoría de interfaz que se mecanizará (el tipo predeterminado es 1).\n\n※El ejemplo de la imagen es una Interface que sobresale hacia fuera para encajar en un Fixture de tipo Internal.\nPor lo tanto, "Externa" es la configuración correcta.']
    ]
  };
  Object.keys(continuation).forEach(lang => steps[lang].push(...continuation[lang]));
  const container = document.querySelector('[data-interface-case="1"] + .internal-images');
  if (!container) return;
  const style = document.createElement('style');
  style.textContent = `.cat2-image-open{display:block;width:100%;padding:0;border:0;background:transparent;cursor:zoom-in}.cat2-image-open:focus-visible{outline:3px solid #7c3aed;outline-offset:-3px}.cat2-lightbox{padding:52px 12px 12px;border:0;border-radius:12px;background:#111827;width:98vw;max-width:2040px;max-height:96dvh;overflow:auto}.cat2-lightbox::backdrop{background:rgba(0,0,0,.85)}.cat2-lightbox img{display:block;width:100%;height:auto}.cat2-lightbox-close{position:absolute;top:8px;right:12px;padding:8px 16px;border:1px solid #ddd6fe;border-radius:8px;background:white;color:#4c1d95;font-weight:700;cursor:pointer}html:has(.cat2-lightbox[open]){overflow:hidden}`;
  document.head.append(style);
  const dialog = document.createElement('dialog');
  dialog.className = 'cat2-lightbox';
  const close = document.createElement('button');
  close.type = 'button';
  close.className = 'cat2-lightbox-close';
  const enlarged = document.createElement('img');
  dialog.append(close, enlarged);
  document.body.append(dialog);
  close.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
  const cards = steps.ko.map((_, index) => {
    const card = document.createElement('figure');
    card.className = 'internal-image-card cat2-step';
    const image = document.createElement('img');
    image.src = `assets/images/interface-internal/cat2-step-${index + 1}.webp`;
    image.loading = 'lazy';
    image.width = index === 6 || index === 7 ? 2000 : 1916;
    image.height = index === 6 ? 1125 : index === 7 ? 1073 : 1028;
    const open = document.createElement('button');
    open.type = 'button';
    open.className = 'cat2-image-open';
    open.append(image);
    open.addEventListener('click', () => {
      enlarged.src = image.src;
      enlarged.alt = image.alt;
      dialog.showModal();
    });
    const caption = document.createElement('figcaption');
    card.append(open, caption);
    container.append(card);
    return { image, caption, open };
  });
  function render() {
    const lang = document.documentElement.lang;
    const localized = steps[lang] || steps.ko;
    const labels = {ko:'CAT2 설정 단계', en:'CAT2 setup step', ja:'CAT2設定手順', es:'Paso de configuración CAT2'};
    const controls = {ko:['사진 확대','닫기','확대 사진'],en:['Enlarge image','Close','Enlarged image'],ja:['画像を拡大','閉じる','拡大画像'],es:['Ampliar imagen','Cerrar','Imagen ampliada']}[lang] || ['Enlarge image','Close','Enlarged image'];
    close.textContent = controls[1] + ' ×';
    dialog.setAttribute('aria-label', controls[2]);
    cards.forEach(({image, caption, open}, index) => {
      image.alt = `${labels[lang] || labels.ko} ${index + 1}`;
      open.setAttribute('aria-label', `${controls[0]}: ${image.alt}`);
      if (enlarged.src === image.src) enlarged.alt = image.alt;
      caption.textContent = `${index + 1}. ${localized[index][0]}`;
      if (localized[index][1]) {
        const link = document.createElement('a');
        link.href = `사용자%20매뉴얼.html?lang=${encodeURIComponent(lang)}#feature-screw-channel-category`;
        link.textContent = localized[index][1];
        caption.append(link);
      }
    });
  }
  new MutationObserver(render).observe(document.documentElement, {attributes:true, attributeFilter:['lang']});
  render();
})();
