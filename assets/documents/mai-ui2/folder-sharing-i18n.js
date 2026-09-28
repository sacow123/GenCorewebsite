(() => {
  const normalize = (value) => String(value || '').replace(/\s+/g, ' ').trim();
  const translations = [
    ['CAM PC와 M AI°는 동일한 네트워크에 연결되어 있어야 하며, “고급 공유 설정”에서 파일 공유에 필요한 네트워크 설정이 되어 있어야 합니다.', 'The CAM PC and M AI° must be connected to the same network, and the network settings required for file sharing must be configured in “Advanced sharing settings”.', 'CAM PCとM AI°は同じネットワークに接続し、「詳細な共有設定」でファイル共有に必要なネットワーク設定を行う必要があります。'],
    ['CAM PC와', 'The CAM PC and ', 'CAM PCと'],
    ['는 동일한 네트워크에 연결되어 있어야 하며, “고급 공유 설정”에서 파일 공유에 필요한 네트워크 설정이 되어 있어야 합니다.', ' must be connected to the same network, and the network settings required for file sharing must be configured in “Advanced sharing settings”.', 'は同じネットワークに接続し、「詳細な共有設定」でファイル共有に必要なネットワーク設定を行う必要があります。'],
    ['동일한 네트워크에 연결', 'Connect to the same network', '同じネットワークに接続'],
    ['ex) If the CAM PC is connected to the network named “GenCore-5.0G”, the M AI also should be connected to the “GenCore-5.0G” network.', 'Example: If the CAM PC is connected to the network named “GenCore-5.0G”, M AI° must also be connected to “GenCore-5.0G”.', '例：CAM PCが「GenCore-5.0G」というネットワークに接続されている場合、M AI°も「GenCore-5.0G」に接続する必要があります。'],
    ['고급 공유 설정', 'Advanced sharing settings', '詳細な共有設定'],
    ['설정(Win + I)에서 “네트워크 및 인터넷” 페이지를 엽니다.', 'Open the “Network & internet” page in Settings (Win + I).', '設定（Win + I）で「ネットワークとインターネット」ページを開きます。'],
    ['“고급 네트워크 설정”에서 “고급 공유 설정”을 열어 아래와 같이 설정합니다.', 'Open “Advanced network settings” → “Advanced sharing settings” and configure them as shown below.', '「ネットワークの詳細設定」→「詳細な共有設定」を開き、下記のように設定します。'],
    ['4.10.a. NC Output 폴더', '4.10.a. NC Output folder', '4.10.a. NC Outputフォルダー'],
    ['설정한 NC Output 폴더에서 “Properties(속성)”을 선택합니다.', 'Select “Properties” for the configured NC Output folder.', '設定したNC Outputフォルダーで「プロパティ」を選択します。'],
    ['“Sharing(공유)” 페이지에서 “Share..(공유..)” 버튼을 클릭하여 “네트워크 액서스” 창을 엽니다.', 'On the “Sharing” tab, click “Share...” to open the “Network access” window.', '「共有」タブで「共有...」をクリックし、「ネットワーク アクセス」ウィンドウを開きます。'],
    ['“Everyone”을 추가하고, 사용 권한 수준을 “Read/Write(읽기/쓰기)”로 설정합니다.', 'Add “Everyone” and set the permission level to “Read/Write”.', '「Everyone」を追加し、アクセス許可レベルを「読み取り/書き込み」に設定します。'],
    ['마지막 페이지에 표시되는 네트워크 경로를 확인하여 두십시오.', 'Note the network path shown on the last page.', '最後の画面に表示されるネットワークパスを控えておきます。'],
    ['M AI° PC에서 해당 경로의 폴더를 찾습니다.', 'Locate the folder at that path on the M AI° PC.', 'M AI° PCでそのパスのフォルダーを探します。'],
    ['PC에서 해당 경로의 폴더를 찾습니다.', 'PC: Locate the folder at that path.', 'PCでそのパスのフォルダーを探します。'],
    ['바탕화면에 바로가기를 생성하면, 편리하게 사용할 수 있습니다.', 'Creating a desktop shortcut makes the folder easier to use.', 'デスクトップにショートカットを作成すると、便利に使用できます。'],
    ['4.10.b. Fixture 폴더', '4.10.b. Fixture folder', '4.10.b. Fixtureフォルダー'],
    ['Fixture 폴더를 공유해두면, AI 프리밀 캘리브레이션에서 생성되는 Fixture 파일을 자동으로 CAM PC의 해당 위치에 복사되어 편리하게 사용할 수 있습니다.', 'Sharing the Fixture folder automatically copies Fixture files created during AI Premill Calibration to the specified CAM PC location.', 'Fixtureフォルダーを共有すると、AIプレミルキャリブレーションで作成されるFixtureファイルがCAM PCの指定場所へ自動的にコピーされます。'],
    ['설정한 Fixtures… 폴더에서 “Properties(속성)”을 선택합니다.', 'Select “Properties” for the configured Fixtures… folder.', '設定したFixtures…フォルダーで「プロパティ」を選択します。'],
    ['마지막 페이지에 표시되는 네트워크 경로를 염두하여 두십시오.', 'Note the network path shown on the last page.', '最後の画面に表示されるネットワークパスを控えておきます。'],
    ['“AI Premill calibration”을 실행합니다.', 'Run “AI Premill calibration”.', '「AI Premill calibration」を実行します。'],
    ['“Setting up a network folder” 버튼이 화면 좌상단에 있습니다.', 'The “Setting up a network folder” button is at the upper-left of the screen.', '画面左上に「Setting up a network folder」ボタンがあります。'],
    ['공유한 폴더의 경로를 입력하고, [OK]를 클릭합니다.', 'Enter the path to the shared folder and click [OK].', '共有フォルダーのパスを入力し、［OK］をクリックします。'],
    ['폴더를 직접 찾아, 경로를 복사하고 붙여넣기 하면 더 편리합니다. (Ctrl+C, Ctrl+V)', 'It is often easier to locate the folder, then copy and paste its path. (Ctrl+C, Ctrl+V)', 'フォルダーを直接開き、パスをコピー＆ペーストすると便利です。（Ctrl+C、Ctrl+V）'],
    ['[Check network] 버튼을 클릭하면, 정상적으로 연결되었는지 확인할 수 있습니다.', 'Click [Check network] to confirm that the connection is working correctly.', '［Check network］をクリックすると、正常に接続されているか確認できます。'],
    ['If the connection is good', 'If the connection is good', '接続が正常な場合'],
    ['“Use Save AI Calibration Result File to Network Folder” 체크 박스를 체크하여 자동 저장 기능을 활성화 합니다.', 'Select the “Use Save AI Calibration Result File to Network Folder” checkbox to enable automatic saving.', '「Use Save AI Calibration Result File to Network Folder」チェックボックスを選択し、自動保存を有効にします。'],
    ['FYI! In the Premill V2.0 screen!!', 'FYI! In the Premill V2.0 screen!!', '参考：Premill V2.0画面では'],
    ['2대 이상 M AI°를 사용하는 경우, 서로 상이한 “Machine nunber”를 입력하면, 생성되는 Fixture 파일을 구분해서 사용할 수 있습니다.', 'When using two or more M AI° machines, enter a different “Machine number” for each machine to distinguish the generated Fixture files.', '2台以上のM AI°を使用する場合は、それぞれ異なる「Machine number」を入力すると、作成されるFixtureファイルを区別できます。'],
    ['2대 이상', 'When using two or more ', '2台以上の'],
    ['를 사용하는 경우, 서로 상이한 “Machine nunber”를 입력하면, 생성되는 Fixture 파일을 구분해서 사용할 수 있습니다.', ' machines, enter a different “Machine number” for each machine to distinguish the generated Fixture files.', 'を使用する場合は、それぞれ異なる「Machine number」を入力すると、作成されるFixtureファイルを区別できます。'],
    ['네트워크에서 공유 폴더를 검색할 수 없는 경우', 'Cannot search the shared folder on the network', 'ネットワーク上で共有フォルダーを検索できない場合'],
    ['CAM PC와 M AI° 사이에서 NC Output 또는 Fixture 폴더 공유 준비를 완료했다고 가정합니다.', 'Let’s say that you are done to ready sharing the NC output or Fixture folder between CAM PC and M AI°.', 'CAM PCとM AI°の間でNC OutputまたはFixtureフォルダーを共有する準備が完了したとします。'],
    ['CAM PC와 M AI°는 동일한 네트워크에 연결되어 있고, “고급 공유 설정”과 폴더 공유 설정도 정상적으로 완료되었습니다.', 'CAM PC and M AI° are connected to same network. All settings in “Advanced sharing settings” are completed being set. In addition, the folders are set sharing normally.', 'CAM PCとM AI°は同じネットワークに接続され、「詳細な共有設定」も完了しており、フォルダーも正常に共有されています。'],
    ['그러나 다른 PC의 네트워크에서는 PC와 폴더를 찾을 수 없습니다.', 'However, the PC and folders cannot be found on the network of the other PC.', 'しかし、もう一方のPCのネットワークではPCやフォルダーを見つけることができません。'],
    ['추가로 무엇을 확인할 수 있을까요?', 'What can we do more?', '追加で何を確認できますか？'],
    ['Windows 기능 켜기 또는 끄기에서 “SMB 1.0/CIFS File Sharing Support”를 확인합니다.', 'Check the “SMB 1.0/CIFS File Sharing Support” in Turn Windows features on or off', '「Windowsの機能の有効化または無効化」で「SMB 1.0/CIFS File Sharing Support」を確認します。'],
    ['서비스에서 “Function Discovery Resource Publication”을 시작합니다.', 'Start running the “Function Discovery Resource Publication” in Service', 'サービスで「Function Discovery Resource Publication」を開始します。']
  ];

  const languages = { ko: 0, en: 1, ja: 2 };
  const sourceOnlyTranslations = new Map([
    [normalize('Open “고급 네트워크 설정” \\ “고급 공유 설정” 을 열어서 아래와 같이 설정합니다.'), ['“고급 네트워크 설정”에서 “고급 공유 설정”을 열어 아래와 같이 설정합니다.', 'Open “Advanced network settings” → “Advanced sharing settings” and configure them as shown below.', '「ネットワークの詳細設定」→「詳細な共有設定」を開き、下記のように設定します。']],
    [normalize('CAM PC와 M AI° 는 동일한 네트워크에 연결되어 있어야 하며, “고급 공유 설정”에서 파일 공유에 필요한 네트워크 설정이 되어 있어야 합니다.'), ['CAM PC와 M AI°는 동일한 네트워크에 연결되어 있어야 하며, “고급 공유 설정”에서 파일 공유에 필요한 네트워크 설정이 되어 있어야 합니다.', 'The CAM PC and M AI° must be connected to the same network, and the network settings required for file sharing must be configured in “Advanced sharing settings”.', 'CAM PCとM AI°は同じネットワークに接続し、「詳細な共有設定」でファイル共有に必要なネットワーク設定を行う必要があります。']],
    [normalize('M AI° PC에서 해당 경로의 폴더를 찾습니다.'), ['M AI° PC에서 해당 경로의 폴더를 찾습니다.', 'Locate the folder at that path on the M AI° PC.', 'M AI° PCでそのパスのフォルダーを探します。']],
    [normalize('2대 이상 M AI°를 사용하는 경우, 서로 상이한 “Machine nunber”를 입력하면, 생성되는 Fixture 파일을 구분해서 사용할 수 있습니다.'), ['2대 이상 M AI°를 사용하는 경우, 서로 상이한 “Machine number”를 입력하면, 생성되는 Fixture 파일을 구분해서 사용할 수 있습니다.', 'When using two or more M AI° machines, enter a different “Machine number” for each machine to distinguish the generated Fixture files.', '2台以上のM AI°を使用する場合は、それぞれ異なる「Machine number」を入力すると、作成されるFixtureファイルを区別できます。']]
  ]);
  const originals = new WeakMap();
  const paragraphOriginals = new WeakMap();
  let currentLang = 'ko';

  const addStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
      header { display:none !important; }
      body { margin:0; background:#fff; color:#1f2937; }
      .page { width:auto; max-width:none; padding:0; }
      .page-body { max-width:none; padding:0 4px; }
      .page-body > p:empty, .page-body > hr:first-of-type { display:none; }
      .folder-sharing-external-link { display:flex; align-items:center; gap:9px; margin:24px 0; padding:15px 18px; border:1px solid #c4b5fd; border-radius:12px; background:#faf5ff; color:#581c87; font-weight:700; text-decoration:none; }
      .folder-sharing-external-link:hover, .folder-sharing-external-link:focus-visible { border-color:#7e22ce; background:#f3e8ff; color:#4c1d95; }
      figure img { max-width:100% !important; height:auto; }
      .column-list { gap:20px; }
      @media (max-width:700px) { .column-list { display:block !important; } .column { width:100% !important; margin-bottom:18px; } }
    `;
    document.head.append(style);
  };

  const translate = (lang) => {
    currentLang = languages[lang] === undefined ? 'ko' : lang;
    document.documentElement.lang = currentLang;
    const index = languages[currentLang];
    const lookup = new Map();
    translations.forEach((row) => row.forEach((value) => lookup.set(normalize(value), row[index])));
    sourceOnlyTranslations.forEach((row, source) => lookup.set(source, row[index]));
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (!originals.has(node)) originals.set(node, node.nodeValue);
      const original = originals.get(node);
      const replacement = lookup.get(normalize(original));
      node.nodeValue = replacement || original;
    });
    translateTroubleshootingParagraphs(index);
    updateTroubleshootingLink();
    updateHeight();
  };

  const translateTroubleshootingParagraphs = (index) => {
    if (document.body.dataset.folderSharingDocument !== 'troubleshooting') return;
    const sentences = [
      ['CAM PC와 M AI° 사이에서 NC Output 또는 Fixture 폴더 공유 준비를 완료했다고 가정합니다.', 'Let’s say that you are done to ready sharing the NC output or Fixture folder between CAM PC and M AI°.', 'CAM PCとM AI°の間でNC OutputまたはFixtureフォルダーを共有する準備が完了したとします。'],
      ['CAM PC와 M AI°는 동일한 네트워크에 연결되어 있고, “고급 공유 설정”과 폴더 공유 설정도 정상적으로 완료되었습니다.', 'CAM PC and M AI° are connected to same network. All settings in “Advanced sharing settings” are completed being set. In addition, the folders are set sharing normally.', 'CAM PCとM AI°は同じネットワークに接続され、「詳細な共有設定」も完了しており、フォルダーも正常に共有されています。']
    ];
    document.querySelectorAll('.page-body p').forEach((paragraph) => {
      if (!paragraphOriginals.has(paragraph)) paragraphOriginals.set(paragraph, normalize(paragraph.textContent));
      const original = paragraphOriginals.get(paragraph);
      const sentence = sentences.find((row) => original.includes(normalize(row[1])) || original.includes(normalize(row[0])) || original.includes(normalize(row[2])));
      if (sentence) paragraph.textContent = sentence[index];
    });
  };

  const updateHeight = () => {
    const height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    window.parent?.postMessage({ type:'gencore-document-height', documentId:'mai-ui2-folder-sharing', height }, '*');
  };

  const replaceTroubleshootingLink = () => {
    if (document.body.dataset.folderSharingDocument !== 'main') return;
    const link = [...document.querySelectorAll('a')].find((element) => element.textContent.includes('Cannot search the shared folder on the network'));
    if (!link) return;
    const callout = link.closest('aside');
    if (!callout) return;
    const guideLink = document.createElement('a');
    guideLink.className = 'folder-sharing-external-link';
    guideLink.target = '_blank';
    guideLink.rel = 'noopener';
    guideLink.innerHTML = '<span aria-hidden="true">📶</span><span></span>';
    callout.replaceWith(guideLink);
  };

  const updateTroubleshootingLink = () => {
    const link = document.querySelector('.folder-sharing-external-link');
    if (!link) return;
    const labels = {
      ko: '네트워크에서 공유 폴더를 검색할 수 없는 경우 (클릭)',
      en: 'Cannot search the shared folder on the network (Click)',
      ja: 'ネットワーク上で共有フォルダーを検索できない場合（クリック）'
    };
    const label = labels[currentLang] || labels.ko;
    link.href = `folder-sharing-network-troubleshooting.html?lang=${encodeURIComponent(currentLang)}`;
    link.title = label;
    link.querySelector('span:last-child').textContent = label;
  };

  const removeNonBodyNavigation = () => {
    [...document.querySelectorAll('a[href*="User-Manual-of-M-AI"]')].forEach((link) => link.closest('div[dir="auto"]')?.remove());
  };

  addStyles();
  removeNonBodyNavigation();
  replaceTroubleshootingLink();
  translate(new URLSearchParams(window.location.search).get('lang') || 'ko');
  new ResizeObserver(updateHeight).observe(document.body);
  window.addEventListener('message', (event) => {
    if (event.data?.type === 'gencore-language-change') {
      [0, 150, 650].forEach((delay) => window.setTimeout(() => translate(event.data.lang), delay));
    }
    if (event.data?.type === 'gencore-request-document-height') updateHeight();
  });
})();
