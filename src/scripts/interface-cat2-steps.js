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
      ['Click the "Type of geometry determination" menu shown in the image.'],
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
      ['Check whether the wall you defined is correctly recognized as "Outer" (or Inner). Check the type number of the interface category to be machined (the default type is 1).\n\n※The example in the image is an outward-protruding Interface that fits into an Internal-type Fixture.\nTherefore, "External" is the correct setting.']
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
  const nextStep = {
  "ko": "벽면을 가공할 공구(방법)을 정해줘야 합니다. 빨간색으로 표시된 유형 부분을 통해 조절할 수 있습니다. 노란색으로 표시된 바닥부분을 보면 평면인 것을 확인할 수 있습니다. 평면을 살리기 위해 Flat 공구를 사용하는 CAT(유형)을 2로 바꿔주세요.",
  "en": "You need to choose the tool (method) for machining the wall. You can adjust it using the Type field marked in red. The floor marked in yellow is flat. To preserve the flat surface, change CAT (Type) to 2, which uses a Flat tool.",
  "ja": "壁面を加工する工具（方法）を決める必要があります。赤色で示されたタイプ欄で調整できます。黄色で示された底面が平面であることを確認できます。平面を維持するため、Flat工具を使用するCAT（タイプ）を2に変更してください。",
  "es": "Debe elegir la herramienta (método) para mecanizar la pared. Puede ajustarla en el campo Tipo marcado en rojo. La base marcada en amarillo es plana. Para conservar la superficie plana, cambie CAT (Tipo) a 2, que utiliza una herramienta Flat."
};
  Object.keys(nextStep).forEach(lang => steps[lang].push([nextStep[lang]]));
  const comparisonStep = {
  "ko": "그러면 이제, 카테고리 설정을 안 한 왼쪽과 한 오른쪽의 결과를 비교해보겠습니다.",
  "en": "Now, let us compare the result on the left, without category settings, with the result on the right, with category settings.",
  "ja": "それでは、カテゴリーを設定していない左側と、設定した右側の結果を比較してみましょう。",
  "es": "Ahora compararemos el resultado de la izquierda, sin configurar la categoría, con el de la derecha, con la categoría configurada."
};
  Object.keys(comparisonStep).forEach(lang => steps[lang].push([comparisonStep[lang]]));
  const simulationStep = {"ko":"가공 시뮬레이션 결과입니다.","en":"These are the machining simulation results.","ja":"加工シミュレーションの結果です。","es":"Estos son los resultados de la simulación de mecanizado."};
  Object.keys(simulationStep).forEach(lang => steps[lang].push([simulationStep[lang]]));
  const remainingStep = {"ko":"카테고리 설정을 안 한 왼쪽의 경우 Interface 바닥부분에서 평면으로 가공되지 않고 남는 걸 확인하실 수 있습니다.","en":"On the left, where the category was not configured, you can see that material remains at the Interface floor instead of being machined flat.","ja":"カテゴリーを設定していない左側では、Interfaceの底面が平面に加工されず、削り残しがあることを確認できます。","es":"En el lado izquierdo, donde no se configuró la categoría, se puede observar que queda material en la base de la Interface en lugar de mecanizarse plana."};
  Object.keys(remainingStep).forEach(lang => steps[lang].push([remainingStep[lang]]));
  const flatResultStep = {"ko":"카테고리 설정을 한 오른쪽의 경우 바닥부분의 평면이 잘 구현된 걸 확인할 수 있습니다.","en":"On the right, where the category was configured, you can see that the flat floor has been reproduced correctly.","ja":"カテゴリーを設定した右側では、底面の平面が正しく再現されていることを確認できます。","es":"En el lado derecho, donde se configuró la categoría, se puede observar que la superficie plana de la base se ha reproducido correctamente."};
  Object.keys(flatResultStep).forEach(lang => steps[lang].push([flatResultStep[lang]]));
  // Korean instructions: keep each sentence on its own reading line.
  steps.ko.forEach(step => {
    step[0] = step[0].replace(/([.]) +(?=[가-힣※(])/g, '$1\n');
  });
  const container = document.querySelector('[data-interface-case="1"] + .internal-images');
  if (!container) return;
  const walkthrough = document.createElement('details');
  walkthrough.className = 'cat2-walkthrough';
  const walkthroughSummary = document.createElement('summary');
  const video = document.createElement('iframe');
  video.src = 'https://www.youtube.com/embed/Q4yNPLb5Ac8';
  video.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  video.allowFullscreen = true;
  video.referrerPolicy = 'strict-origin-when-cross-origin';
  video.style.cssText = 'display:block;width:100%;aspect-ratio:16/9;border:0;border-radius:10px';
  container.before(video, walkthrough);
  walkthrough.append(walkthroughSummary, container);
  const style = document.createElement('style');
  style.textContent = `.cat2-walkthrough{margin:0 24px 24px}.cat2-walkthrough>summary{padding:16px;color:#6d28d9;font-weight:700;cursor:pointer;border:1px solid #ddd6fe;border-radius:8px;background:#f5f3ff}.cat2-walkthrough>.internal-images{margin-top:20px}.internal-case>iframe{margin:24px;width:calc(100% - 48px)!important}@media(max-width:600px){.cat2-walkthrough{margin:0 12px 12px}.internal-case>iframe{margin:12px;width:calc(100% - 24px)!important}}.cat2-step figcaption{word-break:keep-all;overflow-wrap:break-word;text-wrap:pretty}.cat2-image-open{display:block;width:100%;padding:0;border:0;background:transparent;cursor:zoom-in}.cat2-image-open:focus-visible{outline:3px solid #7c3aed;outline-offset:-3px}.cat2-lightbox{padding:52px 12px 12px;border:0;border-radius:12px;background:#111827;width:98vw;max-width:2040px;max-height:96dvh;overflow:auto}.cat2-lightbox::backdrop{background:rgba(0,0,0,.85)}.cat2-lightbox img{display:block;width:100%;height:auto}.cat2-lightbox-close{position:absolute;top:8px;right:12px;padding:8px 16px;border:1px solid #ddd6fe;border-radius:8px;background:white;color:#4c1d95;font-weight:700;cursor:pointer}html:has(.cat2-lightbox[open]){overflow:hidden}`;
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
    image.width = index === 6 || index === 7 || index === 10 || index === 12 ? 2000 : 1916;
    image.height = index === 6 ? 1125 : index === 7 || index === 10 ? 1073 : index === 12 ? 1075 : 1028;
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
    let secondImage, secondOpen;
    if (index === 13 || index === 14) {
      image.width = 2000;
      image.height = 1075;
      const pair = document.createElement('div');
      pair.style.cssText = 'display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:8px;align-items:start';
      secondImage = document.createElement('img');
      secondImage.src = 'assets/images/interface-internal/cat2-step-' + (index + 1) + '-detail.webp';
      secondImage.width = 2000;
      secondImage.height = 1075;
      secondImage.loading = 'lazy';
      secondOpen = document.createElement('button');
      secondOpen.type = 'button';
      secondOpen.className = 'cat2-image-open';
      secondOpen.append(secondImage);
      secondOpen.addEventListener('click', () => {
        enlarged.src = secondImage.src;
        enlarged.alt = secondImage.alt;
        dialog.showModal();
      });
      card.prepend(pair);
      pair.append(open, secondOpen);
    }
    container.append(card);
    return { image, caption, open, secondImage, secondOpen };
  });
  const toolNote = document.createElement('figure');
  toolNote.className = 'internal-image-card cat2-tool-note';
  toolNote.style.cssText = 'margin:0 16px 16px';
  const toolImage = document.createElement('img');
  toolImage.src = 'assets/images/interface-internal/cat2-flat-tools.webp';
  toolImage.style.cssText = 'width:100%;max-width:555px;height:auto;margin:auto';
  const toolCaption = document.createElement('figcaption');
  toolNote.append(toolImage, toolCaption);
  cards[10].caption.parentElement.append(toolNote);
  const toolNotes = {
    ko: '※CAT2의 경우 바로 Flat 툴로 가공 시 공구 소모량이 크기때문에, Flat round 툴로 먼저 다듬은 후 Flat 툴을 사용합니다.',
    en: '※For CAT2, machining directly with a Flat tool causes significant tool wear, so a Flat round tool is used first to refine the surface before using a Flat tool.',
    ja: '※CAT2では、最初からFlat工具で加工すると工具の消耗が大きいため、Flat round工具で先に整えた後、Flat工具を使用します。',
    es: '※En CAT2, mecanizar directamente con una herramienta Flat provoca un desgaste considerable, por lo que primero se repasa con una herramienta Flat round y después se utiliza una herramienta Flat.'
  };
  function render() {
    const lang = document.documentElement.lang;
    toolCaption.textContent = toolNotes[lang] || toolNotes.ko;
    toolImage.alt = {ko:'CAT2 Flat 공구 가공 목록',en:'CAT2 Flat tool machining list',ja:'CAT2 Flat工具の加工一覧',es:'Lista de mecanizado con herramientas Flat para CAT2'}[lang] || 'CAT2 Flat tools';
    walkthroughSummary.textContent = {ko:'자세히 확인하기(클릭)',en:'View details (click)',ja:'詳しく確認する（クリック）',es:'Ver detalles (clic)'}[lang] || 'View details (click)';
    video.title = {ko:'CAT2 카테고리 설정 영상',en:'CAT2 category setup video',ja:'CAT2カテゴリー設定動画',es:'Vídeo de configuración de la categoría CAT2'}[lang] || 'CAT2 video';
    const localized = steps[lang] || steps.ko;
    const labels = {ko:'CAT2 설정 단계', en:'CAT2 setup step', ja:'CAT2設定手順', es:'Paso de configuración CAT2'};
    const controls = {ko:['사진 확대','닫기','확대 사진'],en:['Enlarge image','Close','Enlarged image'],ja:['画像を拡大','閉じる','拡大画像'],es:['Ampliar imagen','Cerrar','Imagen ampliada']}[lang] || ['Enlarge image','Close','Enlarged image'];
    close.textContent = controls[1] + ' ×';
    dialog.setAttribute('aria-label', controls[2]);
    cards.forEach(({image, caption, open, secondImage, secondOpen}, index) => {
      image.alt = `${labels[lang] || labels.ko} ${index + 1}`;
      open.setAttribute('aria-label', `${controls[0]}: ${image.alt}`);
      if (secondImage) {
        secondImage.alt = image.alt + ' (2)';
        secondOpen.setAttribute('aria-label', controls[0] + ': ' + secondImage.alt);
        if (enlarged.src === secondImage.src) enlarged.alt = secondImage.alt;
      }
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
