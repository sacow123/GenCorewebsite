(() => {
  const documentId = 'millfix-folder-sharing';
  const steps = [
    ['우선 하이퍼덴트 PC의 바탕화면에서 시작합니다.', 'Start from the hyperDENT PC desktop.', 'まずhyperDENT PCのデスクトップから開始します。'],
    ['MillFix_NC - 바로 가기 폴더를 우클릭한 뒤 폴더 위치 열기를 선택해 주세요.', 'Right-click the MillFix_NC shortcut folder, then select Open file location.', 'MillFix_NCのショートカットフォルダーを右クリックし、「ファイルの場所を開く」を選択してください。'],
    ['MillFix_NC 폴더 위치에서 MillFix_NC 폴더를 우클릭한 뒤 속성을 선택해 주세요.', 'At the MillFix_NC folder location, right-click the MillFix_NC folder and select Properties.', 'MillFix_NCフォルダーの場所でMillFix_NCフォルダーを右クリックし、「プロパティ」を選択してください。'],
    ['속성에서 공유 탭을 클릭한 뒤 아래의 공유(S)...를 눌러주세요.', 'In Properties, click the Sharing tab, then select Share (S)... below.', 'プロパティで「共有」タブをクリックし、下部の「共有(S)...」を選択してください。'],
    ['사용자 추가에서 Everyone으로 설정한 뒤 추가하세요.', 'Set the user to Everyone, then select Add.', 'ユーザーの追加でEveryoneを選択し、「追加」を選択してください。'],
    ['Everyone의 권한을 읽기에서 읽기/쓰기로 설정해 주세요.', 'Change Everyone’s permission from Read to Read/Write.', 'Everyoneのアクセス許可を「読み取り」から「読み取り/書き込み」に変更してください。'],
    ['공유(H)를 클릭한 뒤 표시되는 공유 주소를 기억해 주세요. 사진을 찍어 두는 것을 권장합니다.', 'Click Share (H), then save the displayed shared address. Taking a photo is recommended.', '「共有(H)」をクリックした後、表示される共有アドレスを控えてください。写真を撮っておくことをお勧めします。'],
    ['이제 MillFix로 이동하고 키보드를 연결한 뒤 Windows + D를 눌러 바탕화면으로 이동합니다.', 'Move to MillFix, connect a keyboard, then press Windows + D to open the desktop.', '次にMillFixへ移動し、キーボードを接続してWindows + Dを押し、デスクトップを開きます。'],
    ['MillFix에서 Windows + D로 바탕화면을 연 뒤 파일 탐색기를 클릭하세요.', 'On MillFix, press Windows + D to open the desktop, then click File Explorer.', 'MillFixでWindows + Dを押してデスクトップを開き、エクスプローラーをクリックしてください。'],
    ['스크롤을 내려 Network를 클릭하세요.', 'Scroll down and click Network.', '下へスクロールして「Network」をクリックしてください。'],
    ['상단에 안내 창이 표시될 수 있습니다. 표시되면 클릭하세요.', 'A notification bar may appear at the top. Click it if it appears.', '上部に案内バーが表示される場合があります。表示されたらクリックしてください。'],
    ['클릭한 뒤 Turn on network discovery and file sharing을 선택하세요.', 'After clicking it, select Turn on network discovery and file sharing.', 'クリックした後、「Turn on network discovery and file sharing」を選択してください。'],
    ['Yes를 눌러주세요.', 'Select Yes.', '「Yes」を選択してください。'],
    ['대부분의 경우 같은 네트워크에 연결된 여러 장치가 표시됩니다. Computer만 확인하면 됩니다.', 'Usually several devices connected to the same network are shown. Check only Computer.', '通常、同じネットワークに接続された複数のデバイスが表示されます。Computerのみを確認してください。'],
    ['앞에서 확인한 주소의 PC 이름인 DESKTOP-FLG902M을 더블클릭하세요.', 'Double-click DESKTOP-FLG902M, the PC name shown in the address noted earlier.', '先ほど控えたアドレスのPC名であるDESKTOP-FLG902Mをダブルクリックしてください。'],
    ['해당 PC가 보이지 않으면 상단 주소 입력창에 주소를 직접 입력해 주세요.', 'If the PC is not shown, enter the address directly in the address bar at the top.', '該当PCが表示されない場合は、上部のアドレスバーにアドレスを直接入力してください。'],
    ['연결할 폴더는 MillFix_NC 폴더입니다.', 'The folder to connect is the MillFix_NC folder.', '接続するフォルダーはMillFix_NCフォルダーです。'],
    ['해당 폴더를 우클릭한 뒤 Create shortcut을 클릭하세요.', 'Right-click the folder, then click Create shortcut.', '該当フォルダーを右クリックし、「Create shortcut」をクリックしてください。'],
    ['이제 바탕화면에 해당 폴더가 생성됩니다.', 'The folder shortcut is now created on the desktop.', 'デスクトップに該当フォルダーのショートカットが作成されます。'],
    ['Alt + Tab을 눌러 MillFix 컨트롤 프로그램으로 돌아온 뒤 표시된 + 아이콘을 클릭하세요.', 'Press Alt + Tab to return to the MillFix control program, then click the displayed + icon.', 'Alt + Tabを押してMillFixコントロールプログラムに戻り、表示された+アイコンをクリックしてください。'],
    ['Desktop을 클릭한 뒤 바탕화면의 MillFix_NC 폴더를 선택하세요.', 'Click Desktop, then select the MillFix_NC folder on the desktop.', 'Desktopをクリックし、デスクトップ上のMillFix_NCフォルダーを選択してください。'],
    ['NC 파일이 있다면 해당 파일을 선택하세요.', 'If an NC file is present, select that file.', 'NCファイルがある場合は、そのファイルを選択してください。'],
    ['NC 파일 로딩이 끝날 때까지 기다리세요.', 'Wait until the NC file finishes loading.', 'NCファイルの読み込みが完了するまで待ってください。'],
    ['가공 시작 버튼을 누르면 다음부터는 바탕화면의 MillFix_NC 폴더에서 자동으로 열립니다.', 'After pressing Start Machining, files will open automatically from the MillFix_NC folder on the desktop next time.', '加工開始ボタンを押すと、次回からデスクトップのMillFix_NCフォルダーから自動的に開きます。']
  ];
  const languages = { ko: 0, en: 1, ja: 2, es: 1 };
  let language = 'ko';
  const folder = '../../images/sec-mf-folder-sharing/';
  const stepLabel = () => ({ ko: '스텝', en: 'STEP', ja: 'ステップ', es: 'STEP' }[language] || 'STEP');

  const updateHeight = () => {
    const height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    window.parent?.postMessage({ type: 'gencore-document-height', documentId, height }, '*');
  };
  const render = (nextLanguage) => {
    language = Object.prototype.hasOwnProperty.call(languages, nextLanguage) ? nextLanguage : 'ko';
    const index = languages[language];
    document.documentElement.lang = language;
    document.title = language === 'ja' ? 'MillFix フォルダー共有設定' : language === 'ko' ? 'MillFix 폴더 공유 설정' : 'MillFix Folder Sharing Settings';
    const list = document.getElementById('folder-sharing-steps');
    list.replaceChildren(...steps.map((step, stepIndex) => {
      const card = document.createElement('article');
      card.className = 'step-card';
      card.dataset.step = `${stepLabel()} ${stepIndex + 1}`;
      const image = document.createElement('img');
      image.loading = 'lazy';
      image.src = `${folder}${String(stepIndex + 1).padStart(2, '0')}.webp`;
      image.alt = step[index];
      const caption = document.createElement('p');
      caption.className = 'step-caption';
      caption.textContent = step[index];
      card.append(image, caption);
      return card;
    }));
    updateHeight();
  };
  window.addEventListener('message', (event) => {
    if (event.data?.type === 'gencore-language-change') render(event.data.lang);
    if (event.data?.type === 'gencore-request-document-height') updateHeight();
  });
  new ResizeObserver(updateHeight).observe(document.body);
  render(new URLSearchParams(window.location.search).get('lang') || 'ko');
})();
