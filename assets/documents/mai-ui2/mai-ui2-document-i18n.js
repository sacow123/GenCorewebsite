(() => {
  const originals = new WeakMap();
  const blockOriginals = new WeakMap();
  const normalize = (value) => String(value || '').replace(/\s+/g, ' ').trim();

  // Body-only translations for the ten M AI UI 2.0 legacy manuals. The export
  // keeps its source formatting; this table changes only visible text nodes.
  const rows = [
    ['의', "'s", 'の'],
    ['컨트롤 프로그램은 직관적으로 디자인 되어, 이해하기 쉬운 사용자 인터페이스가 적용되어 있습니다. 화면에 나오는 지시대로 진행하십시오.', 'The control program has an intuitive, easy-to-understand user interface. Follow the on-screen instructions.', 'コントロールプログラムには、直感的で理解しやすいユーザーインターフェースが採用されています。画面の指示に従って進めてください。'],
    ['조그 모드 버튼 클릭 후 화면에 뜨는 [경고] 페이지를 충분히 숙지한 뒤에 조그 모드를 시작하세요.', 'After clicking the Jog Mode button, carefully read the [Warning] page that appears before starting Jog Mode.', 'ジョグモードボタンをクリックした後、表示される［警告］ページを十分に確認してからジョグモードを開始してください。'],
    ['화면에 표시된 화살표를 조작해 원하는 방향, 축으로 이동할 수 있습니다.', 'Use the arrows shown on the screen to move in the desired direction and along the desired axis.', '画面に表示される矢印を操作して、任意の方向・軸へ移動できます。'],
    ['조그 모드는 충돌이나 장애물을 고려하지 않고 조작하는 대로 이동합니다. 충돌 혹은 부상에 주의하며 조작하세요.', 'Jog Mode moves exactly as commanded without accounting for collisions or obstacles. Operate carefully to avoid collisions or injury.', 'ジョグモードは衝突や障害物を考慮せず、操作したとおりに移動します。衝突やけがに注意して操作してください。'],
    ['조그 모드는 키보드로도 조작이 가능합니다.', 'Jog Mode can also be operated with the keyboard.', 'ジョグモードはキーボードでも操作できます。'],
    ['축 이동속도를 조절할 수 있습니다.', 'You can adjust the axis travel speed.', '軸の移動速度を調整できます。'],
    ['목차 페이지로', 'Back to the table of contents', '目次ページへ'],

    ['“Milling room cleaning” 기능은 기계 내부 청소 시 편의성을 위한 기능입니다.', 'The “Milling room cleaning” function makes it easier to clean the inside of the machine.', '「Milling room cleaning」機能は、機械内部を清掃しやすくするための機能です。'],
    ['화면에 나온 각 그림들을 누르면, 각 축이 그림과 같은 위치로 이동 및 회전합니다.', 'Press each image shown on the screen to move and rotate the axes to the corresponding position.', '画面に表示された各図を押すと、各軸が図と同じ位置へ移動・回転します。'],
    ['Tool pocket 열림', 'Tool pocket open', 'ツールポケット開放'],
    ['Spindle 최하단', 'Spindle at lowest position', 'スピンドル最下端'],
    ['열림', 'open', '開放'],
    ['최하단', 'lowest position', '最下端'],
    ['또한 키보드로도 각 축의 위치를 조절할 수 있습니다.', 'You can also adjust the position of each axis with the keyboard.', 'キーボードでも各軸の位置を調整できます。'],
    ['🔔 축이 움직이는 동안, 안전을 위해 절대로 기계 내부에 손을 넣거나 청소도구 등을 넣지 마세요.', '🔔 For safety, never put your hands or cleaning tools inside the machine while the axes are moving.', '🔔 軸が動いている間は、安全のため絶対に機械内部に手や清掃用具などを入れないでください。'],
    ['🔔 건식 지르코니아 가공후 청소를 할 때, 콜렛에 지르코니아 분진 침투를 막기위한 안전핀(마개핀)을 삽입하세요.', '🔔 When cleaning after dry zirconia machining, insert the safety pin (plug pin) into the collet to prevent zirconia dust from entering.', '🔔 乾式ジルコニア加工後に清掃する際は、ジルコニア粉じんの侵入を防ぐため、コレットに安全ピン（栓ピン）を挿入してください。'],

    ['5.1.b.1. 공구 수명 설정 창', '5.1.b.1. Tool life settings window', '5.1.b.1. 工具寿命設定ウィンドウ'],
    ['5.1.a. 버튼', '5.1.a. Buttons', '5.1.a. ボタン'],
    ['NC파일의 이름과 저장된 경로를 보여주는 창.', 'Window showing the NC file name and saved path.', 'NCファイル名と保存先を表示するウィンドウ。'],
    ['파일 불러오기', 'Load file', 'ファイルを読み込む'],
    ['가공할 파일을 불러옵니다.', 'Loads the file to machine.', '加工するファイルを読み込みます。'],
    ['지원하는 파일 형식은 *.nc 혹은 *.txt. 입니다.', 'Supported file formats are *.nc and *.txt.', '対応ファイル形式は *.nc または *.txt です。'],
    ['가공할 파일을 불러옵니다. 지원하는 파일 형식은 *.nc 혹은 *.txt. 입니다.', 'Loads the file to machine. Supported file formats are *.nc and *.txt.', '加工するファイルを読み込みます。対応ファイル形式は *.nc または *.txt です。'],
    ['불러온 *.nc 파일을 취소합니다.', 'Cancels the loaded *.nc file.', '読み込んだ *.nc ファイルを取り消します。'],
    ['가공 시작', 'Start machining', '加工開始'],
    ['불러온 NC파일의 가공을 시작합니다.', 'Starts machining the loaded NC file.', '読み込んだNCファイルの加工を開始します。'],
    ['가공 정지', 'Stop machining', '加工停止'],
    ['가공을 정지합니다.', 'Stops machining.', '加工を停止します。'],
    ['파일은 반드시 M AI° 전용 포스트 프로세서를 이용한 G-코드로 생성되어야 합니다.', 'Files must be generated as G-code using the dedicated M AI° post processor.', 'ファイルは必ずM AI°専用ポストプロセッサーを使用したGコードとして作成してください。'],
    ['청소 알람', 'Cleaning alarm', '清掃アラーム'],
    ['청소가 필요할 때 점멸합니다.', 'Flashes when cleaning is required.', '清掃が必要なときに点滅します。'],
    ['아이콘을 누르면', 'Press the icon to open the', 'アイコンを押すと、'],
    ['5.3.g. 관리 정보', '5.3.g. Maintenance information', '5.3.g. 管理情報'],
    ['페이지로 진입합니다.', 'page.', 'ページに移動します。'],
    ['Warm-up을 위한 NC파일을 불러옵니다.', 'Loads an NC file for warm-up.', 'ウォームアップ用のNCファイルを読み込みます。'],
    ['공구 정보', 'Tool information', '工具情報'],
    ['“공구 정보” 창을 띄웁니다.', 'Opens the “Tool Information” window.', '「工具情報」ウィンドウを開きます。'],
    ['공구 리턴', 'Tool return', '工具リターン'],
    ['콜렛에 있는 공구를 툴 포켓에 집어넣습니다.', 'Returns the tool in the collet to the tool pocket.', 'コレット内の工具をツールポケットに戻します。'],
    ['ATC 개봉/폐쇄', 'ATC open/close', 'ATC 開閉'],
    ['툴 포켓을 개봉/ 폐쇄합니다.', 'Opens/closes the tool pocket.', 'ツールポケットを開閉します。'],
    ['툴 포켓이 열리면 “공구 정보” 페이지가 자동으로 열립니다.', 'When the tool pocket opens, the “Tool Information” page opens automatically.', 'ツールポケットを開くと、「工具情報」ページが自動的に開きます。'],
    ['툴 포켓을 개봉/ 폐쇄합니다. 툴 포켓이 열리면 “공구 정보” 페이지가 자동으로 열립니다.', 'Opens/closes the tool pocket. When the tool pocket opens, the “Tool Information” page opens automatically.', 'ツールポケットを開閉します。ツールポケットを開くと、「工具情報」ページが自動的に開きます。'],
    ['A축 회전 25°/0°', 'A-axis rotation 25°/0°', 'A軸回転 25°/0°'],
    ['A축 +25°로 회전합니다.. 한 번 더 누르면, 0°로 회전합니다.', 'Rotates the A-axis to +25°. Press again to rotate it to 0°.', 'A軸を+25°に回転します。もう一度押すと0°に回転します。'],
    ['B축 회전 90°/-90°', 'B-axis rotation 90°/-90°', 'B軸回転 90°/-90°'],
    ['B축 +90°로 회전합니다. 한 번 더 누르면, -90° 로 회전합니다.', 'Rotates the B-axis to +90°. Press again to rotate it to -90°.', 'B軸を+90°に回転します。もう一度押すと-90°に回転します。'],
    ['B축 회전 45°/-45°', 'B-axis rotation 45°/-45°', 'B軸回転 45°/-45°'],
    ['B축 +45°로 회전합니다. 한 번 더 누르면, -45° 로 회전합니다.', 'Rotates the B-axis to +45°. Press again to rotate it to -45°.', 'B軸を+45°に回転します。もう一度押すと-45°に回転します。'],
    ['B축 회전 0°/180°', 'B-axis rotation 0°/180°', 'B軸回転 0°/180°'],
    ['B축 0°로 회전합니다. 한 번 더 누르면 180°로 회전합니다.', 'Rotates the B-axis to 0°. Press again to rotate it to 180°.', 'B軸を0°に回転します。もう一度押すと180°に回転します。'],
    ['가공 방식 선택', 'Machining mode selection', '加工方式の選択'],
    ['가공 방식을 변경하는 버튼입니다. 습식과 건식이 있으며 G-코드가 자동으로 변경, 적용됩니다. (습식 : M3001, 건식: M3002)', 'Changes the machining mode. Wet and dry modes are available, and the G-code is changed and applied automatically. (Wet: M3001, Dry: M3002)', '加工方式を変更するボタンです。湿式と乾式があり、Gコードが自動的に変更・適用されます。（湿式：M3001、乾式：M3002）'],
    ['건식→ 습식', 'Dry → Wet', '乾式 → 湿式'],
    ['습식 → 건식', 'Wet → Dry', '湿式 → 乾式'],
    ['자동 종료 활성화/ 비활성화', 'Enable/disable automatic shutdown', '自動終了の有効化／無効化'],
    ['자동 종료 활성화시, 기계는 가공 과정이 끝나고 자동적으로 종료됩니다. 가공 과정 중에도 활성화 시킬 수 있습니다.', 'When automatic shutdown is enabled, the machine turns off automatically after machining is complete. It can also be enabled during machining.', '自動終了を有効にすると、加工完了後に機械が自動的に終了します。加工中でも有効にできます。'],
    ['5.2. 코드뷰 페이지', '5.2. Code View page', '5.2. コードビュー ページ'],
    ['로 이동.', 'Go to.', 'へ移動。'],
    ['5.3. 셋업 페이지', '5.3. Setup page', '5.3. セットアップ ページ'],
    ['추가적인 설정이 가능합니다.', 'Additional settings are available.', '追加設定ができます。'],
    ['5.1.b. 공구 정보', '5.1.b. Tool information', '5.1.b. 工具情報'],
    ['페이지를 엽니다.', 'Opens the page.', 'ページを開きます。'],
    ['모든 공구의 사용 시간 리셋', 'Reset usage time for all tools', 'すべての工具の使用時間をリセット'],
    ['총 스핀들 회전 시간', 'Total spindle rotation time', '総スピンドル回転時間'],
    ['공구 이미지 상단에 각각의 공구 사용 시간이 표기되어 있습니다. 사용 시간을 참고해 공구를 교체하세요', 'Each tool’s usage time is shown above its image. Use it as a reference when replacing tools.', '各工具の使用時間が工具画像の上部に表示されます。使用時間を参考に工具を交換してください。'],
    ['Tip. 공구 이미지 상단의 공구 사용 시간은 키보드로 숫자를 입력하여 변경할 수 있습니다.', 'Tip. You can change the tool usage time shown above a tool image by entering a number with the keyboard.', 'ヒント：工具画像上部の工具使用時間は、キーボードで数字を入力して変更できます。'],
    ['공구 이미지 상단의 공구 사용 시간은 키보드로 숫자를 입력하여 변경할 수 있습니다.', 'You can change the tool usage time shown above a tool image by entering a number with the keyboard.', '工具画像上部の工具使用時間は、キーボードで数字を入力して変更できます。'],
    ['공구 이미지의 상단부를 누르면, 사용 시간 초기화를 묻는 창이 나타납니다. (OK: 초기화, Cancel: 초기화 취소)', 'Press the upper part of a tool image to show the reset-usage-time dialog. (OK: reset, Cancel: cancel reset)', '工具画像の上部を押すと、使用時間の初期化を確認するウィンドウが表示されます。（OK：初期化、Cancel：初期化を取り消し）'],
    ['“Manual tool change mode” 가 활성화 된 상태에서 공구 이미지의 하단부를 누르면, 콜렛(스핀들)이 선택한 공구를 잡아 도어쪽으로 가져옵니다.', 'When “Manual tool change mode” is enabled, pressing the lower part of a tool image makes the collet (spindle) bring the selected tool toward the door.', '「Manual tool change mode」が有効な状態で工具画像の下部を押すと、コレット（スピンドル）が選択した工具をつかみ、ドア側へ運びます。'],
    ['“Manual tool change mode” 활성화/비활성화', 'Enable/disable “Manual tool change mode”', '「Manual tool change mode」の有効化／無効化'],
    ['참고', 'Reference', '参考'],
    ['콜렛(스핀들) 개봉/ 폐쇄', 'Collet (spindle) open/close', 'コレット（スピンドル）開閉'],
    ['콜렛 개봉/폐쇄', 'Collet open/close', 'コレット開閉'],
    ['툴 포켓 개봉/폐쇄', 'Tool pocket open/close', 'ツールポケット開閉'],
    ['스핀들에 장착되어 있는 공구를 툴 포켓으로 되돌림.', 'Returns the tool mounted in the spindle to the tool pocket.', 'スピンドルに装着されている工具をツールポケットへ戻します。'],
    ['공구 사용 시간 설정', 'Tool usage time settings', '工具使用時間設定'],
    ['각 공구의 수명을 키보드로 입력할 수 있습니다.', 'You can enter the lifetime of each tool with the keyboard.', '各工具の寿命をキーボードで入力できます。'],
    ['“Enable tool life notification” - 해당 공구가 설정한 수명에 도달하면 이미지 우측의 빨간 LED가 깜박거리도록 설정합니다.', '“Enable tool life notification” — sets the red LED to the right of the image to flash when the tool reaches its specified lifetime.', '「Enable tool life notification」— 対象工具が設定寿命に達すると、画像右側の赤色LEDが点滅するように設定します。'],
    ['“Do you want to reset all red LEDs?” - 현재 깜박거리고 있는 모든 빨간 LED를 끕니다.', '“Do you want to reset all red LEDs?” — turns off all red LEDs that are currently flashing.', '「Do you want to reset all red LEDs?」— 現在点滅しているすべての赤色LEDを消灯します。'],
    ['5.1.c. 아이콘/ 알람', '5.1.c. Icons/alarms', '5.1.c. アイコン／アラーム'],
    ['모든 축을 원점으로 이동.', 'Moves all axes to the home position.', 'すべての軸を原点へ移動。'],
    ['기계 전원이 켜진 직후 또는 의도치 않게 정지한 경우에는 반드시 실행해야 합니다.', 'Run this immediately after the machine is powered on or if it stops unexpectedly.', '機械の電源を入れた直後、または意図せず停止した場合は必ず実行してください。'],
    ['현재 각 축의 위치 좌표', 'Current position coordinates of each axis', '各軸の現在位置座標'],
    ['G##: 좌표 종류', 'G##: coordinate type', 'G##：座標の種類'],
    ['G-코드 라인 수', 'G-code line number', 'Gコードの行数'],
    ['Feedrate: *.nc파일 상의 이동 속도', 'Feedrate: travel speed in the *.nc file', 'Feedrate：*.ncファイル上の移動速度'],
    ['Unit/min.: 가공 중 실제 이동 속도', 'Unit/min.: actual travel speed during machining', 'Unit/min.：加工中の実際の移動速度'],
    ['Unit/Rev.: 가공 과정 중 실제 회전 속도', 'Unit/Rev.: actual rotation speed during machining', 'Unit/Rev.：加工中の実際の回転速度'],
    ['RPM: 스핀들의 분당 회전 수', 'RPM: spindle revolutions per minute', 'RPM：スピンドルの毎分回転数'],
    ['Tool #: 현재 스핀들에 장착되어 있는 공구 번호', 'Tool #: number of the tool currently mounted in the spindle', 'Tool #：現在スピンドルに装着されている工具番号'],
    ['가공 경과 시간', 'Machining elapsed time', '加工経過時間'],
    ['E- stop: 긴급 정지 버튼', 'E-stop: emergency stop button', 'E-stop：非常停止ボタン'],
    ['에러 메시지, 가공 진행 상황 관련 메시지 등 여러 종류의 메시지가 뜹니다.', 'Various messages appear here, including error messages and machining-progress messages.', 'エラーメッセージや加工進行状況に関するメッセージなど、さまざまなメッセージが表示されます。'],
    ['메시지 창', 'Message window', 'メッセージウィンドウ'],
    ['경고', 'Warning', '警告'],
    ['기계에 문제 발생 시 경고 아이콘이 점멸합니다.', 'The warning icon flashes if a machine issue occurs.', '機械に問題が発生すると、警告アイコンが点滅します。'],
    ['서보 모터', 'Servo motor', 'サーボモーター'],
    ['서보 모터에 문제 발생 시 아이콘이 점멸합니다.', 'The icon flashes if a servo motor issue occurs.', 'サーボモーターに問題が発生すると、アイコンが点滅します。'],
    ['스핀들', 'Spindle', 'スピンドル'],
    ['스핀들에 문제 발생 시 아이콘이 점멸합니다.', 'The icon flashes if a spindle issue occurs.', 'スピンドルに問題が発生すると、アイコンが点滅します。'],
    ['공기압', 'Air pressure', '空気圧'],
    ['공기압이 0.5 Mph 보다 낮을 때 나타납니다. (에어 컴프레서를 확인하세요)', 'Appears when air pressure is below 0.5 Mph. (Check the air compressor.)', '空気圧が0.5 Mph未満のときに表示されます。（エアコンプレッサーを確認してください）'],
    ['집진기 끔/켬', 'Dust collector off/on', '集じん機 オフ／オン'],
    ['집진기가 작동 중', 'Dust collector operating', '集じん機作動中'],
    ['AI 캘리브레이션', 'AI calibration', 'AIキャリブレーション'],
    ['AI 캘리브레이션 진행 중', 'AI calibration in progress', 'AIキャリブレーション進行中'],
    ['M-코드 모드.', 'M-code mode.', 'Mコードモード。'],
    ['M-코드 과정 중에 표시됩니다. 이 사인이 보인다면 아무것도 클릭하지 마세요.', 'Displayed during an M-code operation. Do not click anything when this sign is shown.', 'Mコード処理中に表示されます。この表示が出ている場合は何もクリックしないでください。'],
    ['공기 분사 끔/켬', 'Air blow off/on', 'エアブロー オフ／オン'],
    ['공기 분사 중', 'Air blow operating', 'エアブロー中'],
    ['안전 모드', 'Safety mode', '安全モード'],
    ['안전 모드 활성화 중', 'Safety mode enabled', '安全モード有効中'],
    ['문 열림', 'Door open', 'ドア開放'],
    ['문이 열려있는 동안 표시됩니다.', 'Displayed while the door is open.', 'ドアが開いている間に表示されます。'],
    ['오일 펌프 끔/켬', 'Oil pump off/on', 'オイルポンプ オフ／オン'],
    ['펌프가 작동 중', 'Pump operating', 'ポンプ作動中'],
    ['가공 모드', 'Machining mode', '加工モード'],
    ['가공 과정 중. 가공 중에는 정지 버튼 외에는 작동하지 않습니다.', 'Machining in progress. During machining, only the Stop button operates.', '加工中。加工中は停止ボタン以外は操作できません。'],
    ['전원 끄기', 'Power off', '電源オフ'],
    ['종료 버튼입니다.', 'This is the shutdown button.', '終了ボタンです。'],
    ['공구 터치센서 접촉', 'Tool touch sensor contact', '工具タッチセンサー接触'],
    ['터치 센서가 인식된 경우', 'When the touch sensor is detected', 'タッチセンサーが検出された場合'],
    ['스핀들 작동중', 'Spindle operating', 'スピンドル作動中'],
    ['스핀들 작동 중', 'Spindle operating', 'スピンドル作動中'],

    ['5.3.a. AI 디스크 캘리브레이션', '5.3.a. AI Disk Calibration', '5.3.a. AIディスクキャリブレーション'],
    ['5.3.d. AI 툴포켓 캘리브레이션', '5.3.d. AI Tool Pocket Calibration', '5.3.d. AIツールポケットキャリブレーション'],
    ['5.3.b.1. AI 프리밀 캘리브레이션 V1.2', '5.3.b.1. AI Premill Calibration V1.2', '5.3.b.1. AIプリミルキャリブレーション V1.2'],
    ['5.3.c. 매뉴얼 디스크 캘리브레이션', '5.3.c. Manual Disk Calibration', '5.3.c. マニュアルディスクキャリブレーション'],
    ['5.3.e. 매뉴얼 툴포켓 캘리브레이션', '5.3.e. Manual Tool Pocket Calibration', '5.3.e. マニュアルツールポケットキャリブレーション'],
    ['가공실 청소', 'Machining room cleaning', '加工室清掃'],
    ['5.3.f. 가공룸 청소', '5.3.f. Machining Room Cleaning', '5.3.f. 加工室清掃'],
    ['가공룸을 청소하기 편하게 내부 기구의 위치를 이동시킵니다.', 'Moves internal mechanisms to positions that make the machining room easier to clean.', '加工室を清掃しやすい位置へ内部機構を移動します。'],
    ['원격 지원 프로그램', 'Remote support program', 'リモートサポートプログラム'],
    ['원격 지원이 필요한 경우, 팀뷰어를 실행합니다. ID를 알려주십시오.', 'Runs TeamViewer when remote support is needed. Provide your ID.', 'リモートサポートが必要な場合は、TeamViewerを実行します。IDをお知らせください。'],
    ['청소 가이드', 'Cleaning guide', '清掃ガイド'],
    ['유지 관리가 필요한 부품의 청소 주기와 관리 방법 가이드 및 주의 사항 확인합니다.', 'Shows cleaning intervals, maintenance guidance, and precautions for parts that require maintenance.', 'メンテナンスが必要な部品の清掃周期、管理方法のガイド、および注意事項を確認します。'],
    ['종료', 'Exit', '終了'],
    ['컨트롤 프로그램 종료', 'Exit the control program', 'コントロールプログラムを終了'],
    ['5.3.h. 조그 모드', '5.3.h. Jog Mode', '5.3.h. ジョグモード'],
    ['페이지를 열니다.', 'Opens the page.', 'ページを開きます。'],
    ['각 축의 위치를 조정해 볼 수 있습니다.', 'You can adjust the position of each axis.', '各軸の位置を調整できます。'],
    ['5.3.i. 환경 설정', '5.3.i. Environment Settings', '5.3.i. 環境設定'],
    ['스핀들이 문 방향, 앞으로, 옵니다.', 'Moves the spindle forward toward the door.', 'スピンドルをドア方向の前方へ移動します。'],
    ['스핀들 회전 활성화/끄기', 'Enable/disable spindle rotation', 'スピンドル回転の有効化／無効化'],
    ['건식 가공 시 진공 상태 활성화/ 끄기', 'Enable/disable vacuum during dry machining', '乾式加工時の真空状態を有効化／無効化'],
    ['습식 가공 시 펌프 전원 키기/끄기', 'Turn the pump power on/off during wet machining', '湿式加工時のポンプ電源をオン／オフ'],

    ['AI 디스크 캘리브레이션 영상 가이드', 'AI Disk Calibration Video Guide', 'AIディスクキャリブレーション動画ガイド'],
    ['화면에 나오는 대로, 3번과 8번 슬롯에 Ti.Pre-mill이 장착된 프리밀 지그를 기계에 체결합니다. “Next”를 눌러 다음 단계로 넘어갑니다.', 'As shown on the screen, secure the premill jig with Ti.Pre-mill installed in slots 3 and 8 to the machine. Press “Next” to continue.', '画面の案内に従い、3番と8番スロットにTi.Pre-millを装着したプリミルジグを機械に固定します。「Next」を押して次の手順へ進みます。'],
    ['A축과 B축을 사용자에 맞게 회전시키면 편하게 장착하실 수 있습니다.', 'Rotate the A- and B-axes to a convenient position for installation.', 'A軸とB軸を作業しやすい位置に回転させると、取り付けが容易になります。'],
    ['AI 캘리브레이션은 약한 전류를 흘려보내 진행됩니다. 따라서 캘리브레이션 핀이 닿는(초록 부분)에 물, 먼지 등의 이물질이 없도록 깨끗이 유지하세요.', 'AI calibration is performed using a weak electric current. Keep the contact area of the calibration pin (green area) clean and free of water, dust, and other debris.', 'AIキャリブレーションは弱い電流を流して実行します。キャリブレーションピンが接触する箇所（緑色の部分）に水、ほこりなどの異物がないよう清潔に保ってください。'],
    ['화면 속 지시사항을 따라, 캘리브레이션 핀(A4.0C)을 콜렛에 삽입하세요. 삽입 후 “Next” 버튼을 눌러 다음 과정으로 넘어가세요.', 'Following the on-screen instructions, insert the calibration pin (A4.0C) into the collet. Then press “Next” to continue.', '画面の指示に従い、キャリブレーションピン（A4.0C）をコレットに挿入してください。挿入後、「Next」ボタンを押して次の工程へ進みます。'],
    ['캘리브레이션 핀은 안전하게 보관되어야합니다. 캘리브레이션의 정확도 유지를 위해 구부러지거나 충격을 받지 않게 보관하세요.', 'Store the calibration pin safely. Keep it from bending or impact to maintain calibration accuracy.', 'キャリブレーションピンは安全に保管してください。キャリブレーション精度を維持するため、曲がりや衝撃を受けないように保管してください。'],
    ['습식 가공 직후라면 호스에 남아있던 절삭유가 떨어질 수 있습니다. 커버를 반드시 착용해 주십시오.', 'Immediately after wet machining, residual cutting fluid may drip from the hose. Be sure to install the cover.', '湿式加工直後はホースに残っていた切削油が落ちることがあります。必ずカバーを装着してください。'],
    ['“Checking for cleaning” 버튼을 누른 후, 캘리브레이션 핀과 초록 부분에 전류가 잘 흐르는지 확인하세요.', 'After pressing “Checking for cleaning,” make sure current flows properly between the calibration pin and the green area.', '「Checking for cleaning」ボタンを押した後、キャリブレーションピンと緑色の部分に電流が正しく流れるか確認してください。'],
    ['“Start” 버튼을 눌러 캘리브레이션을 진행하세요.', 'Press “Start” to run calibration.', '「Start」ボタンを押してキャリブレーションを実行してください。'],
    ['캘리브레이션이 끝나면 “Save work offset” 을 눌러 “work offset” 창을 띄웁니다. 그 후 수치를 저장하세요', 'When calibration finishes, press “Save work offset” to open the “work offset” window, then save the values.', 'キャリブレーションが完了したら「Save work offset」を押して「work offset」ウィンドウを開き、数値を保存してください。'],
    ['“Save” 버튼을 눌러 캘리브레이션으로 나온 좌표값을 저장한 뒤 적용합니다. 저장 후 “Close” 버튼을 눌러 창을 닫아주세요.', 'Press “Save” to save and apply the coordinates obtained through calibration. Then press “Close” to close the window.', '「Save」ボタンを押してキャリブレーションで得られた座標値を保存・適用します。保存後、「Close」ボタンを押してウィンドウを閉じてください。'],
    ['“Next” 버튼을 눌러 다음 단계로 진행합니다.', 'Press “Next” to proceed to the next step.', '「Next」ボタンを押して次の手順へ進みます。'],
    ['캘리브레이션 핀을 화면에 나오는 안내에 따라 제거한 후 “Next” 버튼을 눌러 다음 단계로 진행합니다.', 'Remove the calibration pin following the on-screen guidance, then press “Next” to proceed.', '画面の案内に従ってキャリブレーションピンを取り外した後、「Next」ボタンを押して次の手順へ進みます。'],
    ['모든 과정이 끝나면 “Setup screen” 버튼을 눌러 캘리브레이션을 종료할 수 있습니다.', 'When all steps are complete, press “Setup screen” to finish calibration.', 'すべての工程が完了したら、「Setup screen」ボタンを押してキャリブレーションを終了できます。'],
    ['”Save work offset” 버튼을 눌러 좌표값을 다시 확인하거나 저장할 수 있습니다.', 'Press the ”Save work offset” button to review or save the coordinates again.', '「Save work offset」ボタンを押して、座標値を再確認または保存できます。'],

    ['매뉴얼 디스크 캘리브레이션 영상 가이드.', 'Manual Disk Calibration Video Guide.', 'マニュアルディスクキャリブレーション動画ガイド。'],
    ['10-12mm 두께의 왁스 디스크, 디지털 버니어 캘리퍼스, T10-M2.0B 툴을 준비하세요.', 'Prepare a 10–12 mm thick wax disk, a digital vernier caliper, and a T10-M2.0B tool.', '厚さ10～12mmのワックスディスク、デジタルノギス、T10-M2.0B工具を用意してください。'],
    ['C-클램프 지그에 왁스 디스크를 장착하세요.', 'Mount the wax disk on the C-clamp jig.', 'Cクランプジグにワックスディスクを装着してください。'],
    ['장착 후 “Next” 버튼을 눌러 다음 단계로 진행하세요.', 'After mounting, press “Next” to proceed.', '装着後、「Next」ボタンを押して次の手順へ進んでください。'],
    ['NC파일을 불러오면 “A cube milling start” 버튼을 눌러 A-큐브 가공을 시작하세요. 가공 후 “Next” 버튼을 눌러 다음 단계로 진행하세요.', 'After loading the NC file, press “A cube milling start” to machine the A-cube. When machining is complete, press “Next” to continue.', 'NCファイルを読み込んだら「A cube milling start」ボタンを押してAキューブの加工を開始してください。加工後、「Next」ボタンを押して次の手順へ進んでください。'],
    ['만약 왁스 디스크가 이미 사용된 것이라면 A-큐브의 모양이 잘 나오도록 방향을 조절해서 장착하세요.', 'If the wax disk has already been used, adjust its orientation so the A-cube is formed properly.', 'ワックスディスクが使用済みの場合は、Aキューブの形状が正しく出るよう向きを調整して装着してください。'],
    ['가공이 끝난 A-큐브는 12시 방향 윗부분에 특정 표시가 있습니다. 양 옆의 커넥터를 커터로 절단해 디스크에서 떼어내세요', 'The machined A-cube has a mark at its upper 12 o’clock position. Cut the connectors on both sides with a cutter to remove it from the disk.', '加工後のAキューブには12時方向の上部に印があります。両側のコネクターをカッターで切断し、ディスクから取り外してください。'],
    ['화면을 따라 A 큐브의 단차를 디지털 버니어 캘리퍼스로 측정하세요.', 'Following the screen, measure the A-cube step height with a digital vernier caliper.', '画面に従って、デジタルノギスでAキューブの段差を測定してください。'],
    ['측정한 단차값을 화면에 입력하고, “Apply correction value” 버튼을 눌러 적용하세요, 그 후 “Next”를 눌러 다음 단계로 진행하세요.', 'Enter the measured step value, press “Apply correction value” to apply it, then press “Next” to proceed.', '測定した段差値を画面に入力し、「Apply correction value」ボタンを押して適用します。その後、「Next」を押して次の手順へ進んでください。'],
    ['측정 전 디지털 버니어 캘리퍼스의 정밀도를 확인하세요.', 'Check the accuracy of the digital vernier caliper before measuring.', '測定前にデジタルノギスの精度を確認してください。'],
    ['측정된 단차값을 입력하기 전에 화면을 참고하여 단차가 발생한 방향이 “+” 방향인지 “-” 방향 인지 확인한 후 입력하십시오.', 'Before entering the measured step value, use the screen to verify whether the step is in the “+” or “-” direction.', '測定した段差値を入力する前に、画面を参照して段差が「+」方向か「-」方向かを確認してから入力してください。'],
    ['"Apply correction value" 버튼을 두 번 누르면, 입력된 값이 두 번 적용됩니다. 주의하여 한 번만 누르십시오.', 'Pressing the "Apply correction value" button twice applies the entered value twice. Press it only once.', '「Apply correction value」ボタンを2回押すと、入力値が2回適用されます。注意して1回だけ押してください。'],
    ['디지털 버니어 캘리퍼스를 이용해 화면을 따라 A-큐브의 높이를 측정합니다.', 'Use a digital vernier caliper to measure the A-cube height as shown on the screen.', 'デジタルノギスを使用し、画面に従ってAキューブの高さを測定します。'],
    ['측정한 A-큐브의 높이를 입력하고 “Apply correction value” 버튼을 눌러 적용하세요. 그 후 “Next” 버튼을 눌러 다음 단계로 진행하세요.', 'Enter the measured A-cube height and press “Apply correction value” to apply it. Then press “Next” to continue.', '測定したAキューブの高さを入力し、「Apply correction value」ボタンを押して適用してください。その後、「Next」ボタンを押して次の手順へ進んでください。'],
    ['측정한 높이가 정확히 8mm라면 입력 단계를 생략하고 다음 단계로 진행하세요.', 'If the measured height is exactly 8 mm, skip the input step and proceed.', '測定した高さが正確に8mmの場合は、入力手順を省略して次の手順へ進んでください。'],
    ['NC파일을 불러오면 “B cube milling start” 버튼을 눌러 B-큐브 가공을 시작하세요. 가공 후 “Next” 버튼을 눌러 다음 단계로 진행하세요.', 'After loading the NC file, press “B cube milling start” to machine the B-cube. When machining is complete, press “Next” to continue.', 'NCファイルを読み込んだら「B cube milling start」ボタンを押してBキューブの加工を開始してください。加工後、「Next」ボタンを押して次の手順へ進んでください。'],
    ['가공이 끝난 B-큐브는 12시 방향 윗부분에 특정 표시가 있습니다. 양 옆의 커넥터를 커터로 절단해 디스크에서 떼어내세요', 'The machined B-cube has a mark at its upper 12 o’clock position. Cut the connectors on both sides with a cutter to remove it from the disk.', '加工後のBキューブには12時方向の上部に印があります。両側のコネクターをカッターで切断し、ディスクから取り外してください。'],
    ['화면dmf 따라 B-큐브의 단차를 전자 버니어 캘리퍼스로 측정하세요.', 'Following the screen, measure the B-cube step height with a digital vernier caliper.', '画面に従って、デジタルノギスでBキューブの段差を測定してください。'],
    ['측정한 단차값을 화면에 입력하고, “Apply correction value” 버튼을 눌러 적용하세요,', 'Enter the measured step value and press “Apply correction value” to apply it,', '測定した段差値を画面に入力し、「Apply correction value」ボタンを押して適用してください。'],
    ['그 후 “Next”를 눌러 다음 단계로 진행하세요.', 'then press “Next” to proceed.', 'その後、「Next」を押して次の手順へ進んでください。'],
    ['디지털 버니어 캘리퍼스를 이용해 화면에 따라 B-큐브의 높이를 측정합니다.', 'Use a digital vernier caliper to measure the B-cube height as shown on the screen.', 'デジタルノギスを使用し、画面に従ってBキューブの高さを測定します。'],
    ['측정한 B-큐브의 높이를 입력하고 “Apply correction value” 버튼을 눌러 적용하세요. 그 후 “Next” 버튼을 눌러 다음 단계로 진행하세요.', 'Enter the measured B-cube height and press “Apply correction value” to apply it. Then press “Next” to continue.', '測定したBキューブの高さを入力し、「Apply correction value」ボタンを押して適用してください。その後、「Next」ボタンを押して次の手順へ進んでください。'],
    ['캘리브레이션 과정이 완료되면 “Save work offset”을 클릭하여 “Work offset” 페이지를 열고 측정된 결과를 저장합니다.', 'When calibration is complete, click “Save work offset” to open the “Work offset” page and save the measured result.', 'キャリブレーションが完了したら、「Save work offset」をクリックして「Work offset」ページを開き、測定結果を保存します。'],
    ['“Save work offset” 화면에서 “Save” 버튼을 클릭하여 저장한 후, “Close” 버튼을 클릭하여 창을 닫습니다.', 'On the “Save work offset” screen, click “Save” to save, then click “Close” to close the window.', '「Save work offset」画面で「Save」ボタンをクリックして保存後、「Close」ボタンをクリックしてウィンドウを閉じます。'],
    ['모든 단계를 완료하였다면 “Setup screen”을 클릭하여 캘리브레이션을 종료하십시오.', 'After completing all steps, click “Setup screen” to finish calibration.', 'すべての手順を完了したら、「Setup screen」をクリックしてキャリブレーションを終了してください。'],

    ['현재 사용중인 CAM 소프트웨어를 선택하세요', 'Select the CAM software currently in use.', '現在使用しているCAMソフトウェアを選択してください。'],
    ['캘리브레이션 하고싶은 프리밀 지그를 선택하세요.', 'Select the premill jig you want to calibrate.', 'キャリブレーションしたいプリミルジグを選択してください。'],
    ['1대의 M AI° 기계로 5개의 프리밀 지그를 등록할 수 있습니다.', 'Up to five premill jigs can be registered on one M AI° machine.', '1台のM AI°機械に5つのプリミルジグを登録できます。'],
    ['습식 가공 직후라면 호스에 남아있던 절삭유가 떨어질 수 있습니다. 캘리브레이션 커버를 반드시 착용해 주십시오.', 'Immediately after wet machining, residual cutting fluid may drip from the hose. Be sure to install the calibration cover.', '湿式加工直後はホースに残っていた切削油が落ちることがあります。必ずキャリブレーションカバーを装着してください。'],

    ['AI V2.0 Ti. Premill milling page(①', 'AI V2.0 Ti. Premill milling page (①', 'AI V2.0 Ti. Premill milling page（①'],
    [')를 선택한 후, 우측 화살표 버튼(', ') and click the right-arrow button (', '）を選択した後、右矢印ボタン（'],
    [')을 클릭하여 페이지로 진입합니다.', ') to open the page.', '）をクリックしてページを開きます。'],
    ['hyperDENT의 Fixture 폴더가 네트워크 공유로 연결되어 있는 경우, 네트워크 연결 상태를 확인합니다. (', 'If the hyperDENT Fixture folder is connected through a network share, check the network connection status. (', 'hyperDENTのFixtureフォルダがネットワーク共有で接続されている場合は、ネットワーク接続状態を確認します。（'],
    ['네트워크 공유는', 'For network sharing,', 'ネットワーク共有については、'],
    ['페이지를 참고', 'refer to the page', 'ページを参照'],
    ['하십시오.', 'for details.', 'してください。'],
    ['가공할 Ti. 프리밀 블럭의 길이를 측정합니다.', 'Measure the length of the Ti. premill block to machine.', '加工するTi.プリミルブロックの長さを測定します。'],
    ['블럭은 인터페이스 형상을 제외한 나머지 부분의 길이를 측정합니다.', 'Measure the block length excluding the interface shape.', 'ブロックはインターフェース形状を除いた部分の長さを測定します。'],
    ['측정한 길이를 입력합니다. (', 'Enter the measured length. (', '測定した長さを入力します。（'],
    ['복수의 Ti. 프리밀 블럭을 가공하는 경우, 동일한 길이의 프리밀 블럭만 사용하십시오.', 'When machining multiple Ti. premill blocks, use only premill blocks of the same length.', '複数のTi.プリミルブロックを加工する場合は、同じ長さのプリミルブロックのみを使用してください。'],
    ['상이한 길이의 블럭을 장착하면 캘리브레이션 중 충돌을 야기할 수 있습니다.', 'Mounting blocks of different lengths can cause a collision during calibration.', '異なる長さのブロックを装着すると、キャリブレーション中に衝突を引き起こすおそれがあります。'],
    ['#1 ~ #10 슬롯 중, Ti. 프리밀 블럭을 장착할 슬롯을 클릭하여 선택합니다.', 'From slots #1–#10, click the slot where the Ti. premill block will be installed.', '#1～#10スロットの中から、Ti.プリミルブロックを装着するスロットをクリックして選択します。'],
    ['이 매뉴얼에서는 #2, #3번 슬롯에 장착하였습니다.', 'This manual uses slots #2 and #3.', 'このマニュアルでは#2、#3スロットに装着しています。'],
    ['리버스 지그에 적절한 토크(0.3~0.4N•m) 체결된 Ti. 프리밀 블럭을 선택한 슬롯에 맞춰 장착합니다.', 'Mount the Ti. premill block, fastened to the reverse jig at the proper torque (0.3–0.4 N•m), in the selected slot.', 'リバースジグに適正トルク（0.3～0.4N•m）で固定したTi.プリミルブロックを、選択したスロットに合わせて装着します。'],
    ['손가락으로 Ti. 프리밀 블럭을 밀면서 2.0 N•m 토크 어답터를 사용하여 고정 나사를 조입니다.', 'While pushing the Ti. premill block with your finger, tighten the set screw using a 2.0 N•m torque adapter.', '指でTi.プリミルブロックを押しながら、2.0N•mトルクアダプターを使用して固定ねじを締めます。'],
    ['A축을 25° 기울인 위치에서 장착하기 편리할 수 있습니다.', 'It may be easier to install with the A-axis tilted to 25°.', 'A軸を25°傾けた位置で取り付けると作業しやすい場合があります。'],
    ['“AI Calibration” 버튼을 클릭하여 AI Premill calibration V2.0을 시작합니다.', 'Click “AI Calibration” to start AI Premill calibration V2.0.', '「AI Calibration」ボタンをクリックしてAI Premill calibration V2.0を開始します。'],
    ['입력한 Ti. 프리밀 블럭의 길이를 다시 확인합니다.', 'Check the entered Ti. premill block length again.', '入力したTi.プリミルブロックの長さを再確認します。'],
    ['맞으면 “OK”버튼을 클릭하여 Calibration 측정을 시작합니다.', 'If it is correct, click “OK” to start calibration measurement.', '正しければ「OK」ボタンをクリックしてCalibration測定を開始します。'],
    ['화면의 지시에 따라, 캘리브레이션 핀(A4.0C)을 콜렛에 장착합니다.', 'Following the on-screen instructions, mount the calibration pin (A4.0C) in the collet.', '画面の指示に従い、キャリブレーションピン（A4.0C）をコレットに装着します。'],
    ['“Next” 버튼을 클릭하여, 다음 과정으로 진행합니다.', 'Click “Next” to proceed to the next step.', '「Next」ボタンをクリックして、次の工程へ進みます。'],
    ['캘리브레이션 핀은 캘리브레이션의 정확도 유지를 위해 안전하게 보관되어야 합니다.', 'Store the calibration pin safely to maintain calibration accuracy.', 'キャリブレーションピンは、キャリブレーション精度を維持するため安全に保管してください。'],
    ['습식 가공 직후인 경우라면 호스에 남아있던 절삭유가 떨어질 수 있습니다. 캘리브레이션 커버를 반드시 착용해 주십시오.', 'Immediately after wet machining, residual cutting fluid may drip from the hose. Be sure to install the calibration cover.', '湿式加工直後はホースに残っていた切削油が落ちることがあります。必ずキャリブレーションカバーを装着してください。'],
    ['프리밀 지그, Ti. 프리밀 블럭, 캘리브레이션 핀 및 주변에 액체, 이물질 등이 없도록 청소합니다.', 'Clean the premill jig, Ti. premill block, calibration pin, and surrounding area so that no liquid or debris remains.', 'プリミルジグ、Ti.プリミルブロック、キャリブレーションピン、および周辺に液体や異物が残らないよう清掃します。'],
    ['통전 상태를 확인하기 위하여, “Checking for cleaning” 버튼 1회 클릭합니다.', 'To check electrical continuity, click “Checking for cleaning” once.', '通電状態を確認するため、「Checking for cleaning」ボタンを1回クリックします。'],
    ['통전선으로 캘리브레이션 핀과 프리밀 지그 및 Ti. 프리밀 블럭을 연결하여 전류가 흐르는지 확인합니다.', 'Connect the calibration pin, premill jig, and Ti. premill block with the continuity wire to check whether current flows.', '通電線でキャリブレーションピン、プリミルジグ、Ti.プリミルブロックを接続し、電流が流れるか確認します。'],
    ['정상적으로 전류가 통전되면 접촉 시 “Touch On “ 버튼에 노란LED가 켜집니다.', 'When current flows correctly, the yellow LED on the “Touch On” button lights upon contact.', '正常に通電すると、接触時に「Touch On」ボタンの黄色LEDが点灯します。'],
    ['정상적으로 통전되는 것을 확인했다면, “Start Calibration” 버튼을 클릭하여 캘리브레이션을 시작합니다.', 'After confirming normal continuity, click “Start Calibration” to begin calibration.', '正常に通電することを確認したら、「Start Calibration」ボタンをクリックしてキャリブレーションを開始します。'],
    ['프리밀 환봉의 길이를 한번 더 확인 하고, “OK” 버튼을 클릭하면 캘리브레이션 측정을 시작합니다.', 'Check the premill round-bar length once more, then click “OK” to start calibration measurement.', 'プリミル丸棒の長さをもう一度確認し、「OK」ボタンをクリックするとキャリブレーション測定を開始します。'],
    ['캘리브레이션 측정 중', 'Calibration measurement in progress', 'キャリブレーション測定中'],
    ['정상적으로 캘리브레이션 측정이 완료되었습니다.', 'Calibration measurement completed successfully.', 'キャリブレーション測定が正常に完了しました。'],
    ['Fixture 파일(*.fmdf) 이 [', 'The Fixture file (*.fmdf) is saved in [', 'Fixtureファイル（*.fmdf）は［'],
    ['] 에 저장됩니다.', '].', '］に保存されます。'],
    ['hyperDENT Fixture 폴더가 네트워크로 공유되고 있는 경우, 결과 파일(픽스처 파일)은', 'If the hyperDENT Fixture folder is shared over the network, the result file (Fixture file) is automatically saved in the', 'hyperDENT Fixtureフォルダがネットワーク共有されている場合、結果ファイル（Fixtureファイル）は'],
    ['해당 폴더', 'shared folder', '該当フォルダ'],
    ['에 자동으로 저장됩니다.', ' automatically.', 'に自動保存されます。'],
    ['“OK” 버튼을 클릭합니다.', 'Click “OK”.', '「OK」ボタンをクリックします。'],
    ['“Save work offset”을 클릭하여 “Work Offsets” 창을 엽니다.', 'Click “Save work offset” to open the “Work Offsets” window.', '「Save work offset」をクリックして「Work Offsets」ウィンドウを開きます。'],
    ['“Save” 버튼을 클릭하여 결과값을 저장합니다.', 'Click “Save” to save the result.', '「Save」ボタンをクリックして結果値を保存します。'],
    ['“Close” 버튼을 클릭하여 “Work Offsets” 창을 닫습니다.', 'Click “Close” to close the “Work Offsets” window.', '「Close」ボタンをクリックして「Work Offsets」ウィンドウを閉じます。'],
    ['“Next page” 버튼을 클릭하여 다음 단계로 진행합니다.', 'Click “Next page” to proceed to the next step.', '「Next page」ボタンをクリックして次の手順へ進みます。'],
    ['화면의 지시에 따라, 캘리브레이션 핀(A4.0C)을 콜렛에서 제거합니다.', 'Following the on-screen instructions, remove the calibration pin (A4.0C) from the collet.', '画面の指示に従い、キャリブレーションピン（A4.0C）をコレットから取り外します。'],
    ['(hyperDENT Fixture 폴더가 네트워크 공유로 연결되어 있지 않은 경우)', '(If the hyperDENT Fixture folder is not connected through a network share)', '（hyperDENT Fixtureフォルダがネットワーク共有で接続されていない場合）'],
    ['USB 저장 장치를 장착한고, 장비의 PC에서 아래 경로로 이동합니다.', 'Connect a USB storage device and navigate to the following path on the equipment PC.', 'USBストレージを接続し、装置PCで次のパスに移動します。'],
    ['캘리브레이션의 결과로 생성된 Fixture 파일을 USB에 복사 하십시오.', 'Copy the Fixture file generated by calibration to the USB device.', 'キャリブレーションの結果として生成されたFixtureファイルをUSBにコピーしてください。'],
    ['파일명의 장비번호, 버전, 픽스처 유형, 그리고 생성된 날짜와 시간을 잘 확인하십시오.', 'Carefully check the equipment number, version, fixture type, and creation date and time in the file name.', 'ファイル名にある装置番号、バージョン、Fixtureタイプ、作成日時をよく確認してください。'],
    ['USB로 복사한 fmdf 파일을 하이퍼덴트 Fixture 폴더로 붙여넣기 합니다.', 'Paste the fmdf file copied to the USB device into the hyperDENT Fixture folder.', 'USBにコピーしたfmdfファイルをhyperDENT Fixtureフォルダに貼り付けます。'],
    ['Fixture 폴더가 네트워크 공유로 연결되어 있는 경우, 자동으로 복사됩니다.', 'If the Fixture folder is connected through a network share, it is copied automatically.', 'Fixtureフォルダがネットワーク共有で接続されている場合は、自動的にコピーされます。'],
    ['hyperDENT를 실행하고, 복사된 Fixture를 선택합니다.', 'Run hyperDENT and select the copied Fixture.', 'hyperDENTを起動し、コピーしたFixtureを選択します。'],
    ['Fixture 명에 표기된 장비번호, 버전, 생성된 날짜 및 시간 등을 확인하십시오.', 'Check the equipment number, version, creation date, time, and other details shown in the Fixture name.', 'Fixture名に表示される装置番号、バージョン、作成日時などを確認してください。'],
    ['hyperDENT가 실행되고 있었다면, 모든 hyperDENT 창을 닫고, 재시작해야 적용됩니다.', 'If hyperDENT was already running, close every hyperDENT window and restart it for the changes to apply.', 'hyperDENTが起動中だった場合は、すべてのhyperDENTウィンドウを閉じて再起動すると適用されます。'],
    ['#2, #3번 슬롯만 캘리브레이션을 진행했기 때문에, 이미지와 같이 해당 슬롯만 활성화 되어 있습니다.', 'Because calibration was performed only for slots #2 and #3, only those slots are enabled as shown in the image.', '#2、#3スロットのみキャリブレーションを実行したため、画像のように該当スロットのみ有効になっています。'],

    ['화면의 순서대로 캘리브레이션 핀(A4.0C)을 스핀들에 장착하고, “Next” 버튼을 클릭하여 다음 단계로 진행하십시오', 'Following the on-screen order, mount the calibration pin (A4.0C) in the spindle and click “Next” to proceed.', '画面の順序に従ってキャリブレーションピン（A4.0C）をスピンドルに装着し、「Next」ボタンをクリックして次の手順へ進んでください。'],
    ['캘리브레이션 핀을 잘 보관하여 주십시오. 휘거나 손상이 된 캘리브레이션 핀은 사용하지 마십시오.', 'Store the calibration pin carefully. Do not use a bent or damaged calibration pin.', 'キャリブレーションピンは大切に保管してください。曲がったり損傷したキャリブレーションピンは使用しないでください。'],
    ['화면과 같이 툴 포켓 내부에 있는 모든 공구들을 제거한 뒤, 캘리브레이션 핀이 접촉하는 부분(초록 부분)에 물, 절삭유 등의 모든 이물질을 제거하세요.', 'As shown on screen, remove every tool from the tool pocket, then remove all water, cutting fluid, and other debris from the calibration-pin contact area (green area).', '画面のようにツールポケット内のすべての工具を取り外し、キャリブレーションピンが接触する箇所（緑色の部分）から水、切削油などすべての異物を除去してください。'],
    ['청소가 끝나면 “Checking for cleaning” 버튼을 누르고, 캘리브레이션 핀과 초록 부분 사이에 전류가 잘 흐르는지 확인하세요. 전류가 잘 통한다면 “Start Calibration” 버튼을 눌러 캘리브레이션을 진행하세요.', 'After cleaning, press “Checking for cleaning” and confirm that current flows properly between the calibration pin and the green area. If current flows correctly, press “Start Calibration” to run calibration.', '清掃後、「Checking for cleaning」ボタンを押し、キャリブレーションピンと緑色の部分の間に電流が正しく流れるか確認してください。正しく通電する場合は「Start Calibration」ボタンを押してキャリブレーションを実行してください。'],
    ['캘리브레이션 과정이 끝나면 “Next” 버튼을 눌러 다음 단계로 진행하세요.', 'When the calibration process is complete, press “Next” to proceed.', 'キャリブレーション工程が完了したら、「Next」ボタンを押して次の手順へ進んでください。'],
    ['캘리브레이션 핀을 화면속 지시사항에 따라 제거한 뒤, “Next” 버튼을 눌러 다음 단계로 진행하세요.', 'Remove the calibration pin following the on-screen instructions, then press “Next” to proceed.', '画面の指示に従ってキャリブレーションピンを取り外した後、「Next」ボタンを押して次の手順へ進んでください。'],
    ['“Save work offset”을 클릭하여 “Work offset” 페이지를 열고 측정된 결과를 저장합니다.', 'Click “Save work offset” to open the “Work offset” page and save the measured result.', '「Save work offset」をクリックして「Work offset」ページを開き、測定結果を保存します。'],
    ['“Work offset” 화면에서 “Save” 버튼을 클릭하여 저장한 후, “Close” 버튼을 클릭하여 창을 닫습니다.', 'On the “Work offset” screen, click “Save” to save, then click “Close” to close the window.', '「Work offset」画面で「Save」ボタンをクリックして保存後、「Close」ボタンをクリックしてウィンドウを閉じます。'],
    ['모든 단계를 완료하였다면 “Setup screen”을 클릭하여 캘리브레이션 과정을 종료하십시오.', 'After completing all steps, click “Setup screen” to finish the calibration process.', 'すべての手順を完了したら、「Setup screen」をクリックしてキャリブレーション工程を終了してください。']
  ];

  const dictionary = Object.fromEntries(['en', 'ja'].map((lang, index) => [lang,
    new Map(rows.map(([source, en, ja]) => [source, index === 0 ? en : ja]))
  ]));

  function translate(lang) {
    document.documentElement.lang = lang;
    const entries = dictionary[lang];
    const blocks = Array.from(document.body.querySelectorAll('p, li, h1, h2, h3, h4, h5, h6, figcaption, summary, td, th'));
    blocks.forEach((block) => {
      if (!blockOriginals.has(block)) blockOriginals.set(block, block.innerHTML);
      const originalHtml = blockOriginals.get(block);
      if (lang === 'ko') {
        block.innerHTML = originalHtml;
        return;
      }
      // Always start from Korean source. This is necessary when the visitor
      // switches directly between English and Japanese without returning to
      // Korean first.
      block.innerHTML = originalHtml;
      const source = normalize(block.innerText);
      const translated = entries?.get(source);
      // Some Notion exports split a sentence into marked spans. Replacing only
      // the matching block keeps its layout while allowing the sentence to be
      // translated as one coherent unit.
      if (translated) block.textContent = translated;
    });
    if (!entries) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        return node.parentElement?.closest('script, style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (!originals.has(node)) originals.set(node, node.nodeValue || '');
      const source = originals.get(node);
      const key = normalize(source);
      if (!key) return;
      const value = lang === 'ko' ? source : entries.get(key);
      if (!value) return;
      node.nodeValue = lang === 'ko' ? source : value;
    });
  }

  function reportHeight() {
    const documentId = location.pathname.split('/').pop()?.replace('.html', '') || '';
    parent.postMessage({ type: 'gencore-document-height', documentId, height: document.documentElement.scrollHeight }, '*');
  }

  function installImageLightbox() {
    if (document.getElementById('mai-ui2-image-lightbox')) return;

    const style = document.createElement('style');
    style.textContent = `
      .mai-ui2-import figure.image > a, .mai-ui2-import figure.image > img { cursor: zoom-in; }
      .mai-ui2-image-lightbox { position: fixed; inset: 0; z-index: 9999; background: rgba(15, 23, 42, .72); }
      .mai-ui2-image-lightbox[hidden] { display: none; }
      .mai-ui2-image-dialog { position: fixed; display: grid; place-items: center; width: min(1100px, 90vw); max-height: 84vh; transform: translate(-50%, -50%); }
      .mai-ui2-image-dialog img { display: block; width: auto; max-width: 100%; height: auto; max-height: 84vh; object-fit: contain; border-radius: 10px; box-shadow: 0 18px 50px rgba(0,0,0,.38); }
      .mai-ui2-image-close { position: absolute; top: -14px; right: -14px; z-index: 1; display: grid; place-items: center; width: 36px; height: 36px; border: 0; border-radius: 50%; background: #fff; color: #0f172a; font-size: 26px; line-height: 1; cursor: pointer; box-shadow: 0 3px 12px rgba(0,0,0,.28); }
      @media (max-width: 640px) { .mai-ui2-image-dialog, .mai-ui2-image-dialog img { max-height: 72vh; } .mai-ui2-image-dialog { width: 92vw; } .mai-ui2-image-close { top: -10px; right: -8px; } }
    `;
    document.head.append(style);

    const modal = document.createElement('div');
    modal.id = 'mai-ui2-image-lightbox';
    modal.className = 'mai-ui2-image-lightbox';
    modal.hidden = true;
    modal.innerHTML = '<div class="mai-ui2-image-dialog" role="dialog" aria-modal="true"><button type="button" class="mai-ui2-image-close">×</button><img alt=""></div>';
    document.body.append(modal);
    const image = modal.querySelector('img');
    const dialog = modal.querySelector('.mai-ui2-image-dialog');
    const closeButton = modal.querySelector('button');
    const close = () => { modal.hidden = true; image.src = ''; };
    const positionAtSource = (sourceRect) => {
      const dialogRect = dialog.getBoundingClientRect();
      const padding = 18;
      const centerX = sourceRect.left + sourceRect.width / 2;
      const centerY = sourceRect.top + sourceRect.height / 2;
      const minX = padding + dialogRect.width / 2;
      const maxX = window.innerWidth - padding - dialogRect.width / 2;
      const minY = padding + dialogRect.height / 2;
      const maxY = window.innerHeight - padding - dialogRect.height / 2;
      dialog.style.left = `${Math.max(minX, Math.min(centerX, maxX))}px`;
      dialog.style.top = `${Math.max(minY, Math.min(centerY, maxY))}px`;
    };
    const open = (source, alt, sourceRect) => {
      image.onload = () => positionAtSource(sourceRect);
      image.src = source;
      image.alt = alt || '';
      closeButton.setAttribute('aria-label', document.documentElement.lang === 'ja' ? '拡大画像を閉じる' : document.documentElement.lang === 'en' ? 'Close enlarged image' : '확대 사진 닫기');
      modal.hidden = false;
      positionAtSource(sourceRect);
    };
    document.querySelectorAll('.mai-ui2-import figure.image img').forEach((thumbnail) => {
      thumbnail.addEventListener('click', (event) => {
        event.preventDefault(); event.stopPropagation();
        open(thumbnail.closest('a')?.href || thumbnail.currentSrc || thumbnail.src, thumbnail.alt, thumbnail.getBoundingClientRect());
      });
    });
    closeButton.addEventListener('click', close);
    modal.addEventListener('click', (event) => { if (event.target === modal) close(); });
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !modal.hidden) close(); });
  }

  function installJogModeLayout() {
    if (!location.pathname.endsWith('/jog-mode.html') || document.querySelector('.mai-ui2-jog-layout')) return;
    const body = document.querySelector('.page-body');
    const imageFigure = (number) => body?.querySelector(`img[src*="image-${number}-"]`)?.closest('figure');
    const figure1 = imageFigure(97);
    const figure2 = imageFigure(98);
    const figure3 = imageFigure(99);
    const figure4 = imageFigure(100);
    const figure5 = imageFigure(101);
    const firstStep = body?.querySelector('ol[start="1"] li');
    const secondStep = body?.querySelector('ol[start="2"] li');
    const thirdStep = body?.querySelector('ol[start="3"] li');
    const fourthStep = body?.querySelector('ol[start="4"] li');
    const safetyNotice = body?.querySelector('aside.callout');
    if (![figure1, figure2, figure3, figure4, figure5, firstStep, secondStep, thirdStep, fourthStep, safetyNotice].every(Boolean)) return;

    const style = document.createElement('style');
    style.textContent = `
      .mai-ui2-jog-layout { display: grid; gap: 28px; width: min(100%, 900px); margin: 0 auto; }
      .mai-ui2-jog-card { align-self: start; overflow: hidden; border: 1px solid rgba(55,53,47,.14); border-radius: 16px; background: #fff; box-shadow: 0 6px 18px rgba(15,23,42,.08); }
      .mai-ui2-jog-card figure { margin: 0; padding: 16px; text-align: center; background: #f8fafc; }
      .mai-ui2-jog-card figure img { display: block; width: 100% !important; height: auto; max-width: 100%; margin: 0 auto; }
      .mai-ui2-jog-card li { margin: 0; padding: 16px 20px; list-style-position: inside; background: #fff; }
      .mai-ui2-jog-card li p { display: none; }
      .mai-ui2-jog-second-row { display: grid; grid-template-columns: minmax(0, 1fr) minmax(220px, .44fr); align-items: start; gap: 24px; }
      .mai-ui2-jog-second-row .callout { align-self: start; margin: 0; border: 1px solid rgba(55,53,47,.12); border-radius: 16px; box-shadow: 0 6px 18px rgba(15,23,42,.08); }
      .mai-ui2-jog-card--wide, .mai-ui2-jog-final-row { width: calc((100% - 24px) / 1.44); }
      .mai-ui2-jog-final-row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); align-items: start; gap: 24px; }
      @media (max-width: 700px) { .mai-ui2-jog-second-row, .mai-ui2-jog-final-row { grid-template-columns: 1fr; } .mai-ui2-jog-card--wide, .mai-ui2-jog-final-row { width: 100%; } }
    `;
    document.head.append(style);

    const makeCard = (className, figure, step) => {
      const card = document.createElement('article');
      card.className = `mai-ui2-jog-card ${className}`;
      card.append(figure, step);
      return card;
    };
    const layout = document.createElement('section');
    layout.className = 'mai-ui2-jog-layout';
    const card1 = makeCard('mai-ui2-jog-card--wide', figure1, firstStep);
    const card2 = makeCard('', figure2, secondStep);
    const card3 = makeCard('mai-ui2-jog-card--wide', figure3, document.createElement('div'));
    const card4 = makeCard('', figure4, thirdStep);
    const card5 = makeCard('', figure5, fourthStep);
    const secondRow = document.createElement('div');
    secondRow.className = 'mai-ui2-jog-second-row';
    secondRow.append(card2, safetyNotice);
    const finalRow = document.createElement('div');
    finalRow.className = 'mai-ui2-jog-final-row';
    finalRow.append(card4, card5);
    layout.append(card1, secondRow, card3, finalRow);
    body.querySelectorAll('.column-list').forEach((columnList) => columnList.remove());
    body.prepend(layout);
    reportHeight();
  }

  addEventListener('message', (event) => {
    if (event.data?.type === 'gencore-language-change') {
      translate(event.data.lang || 'ko');
      requestAnimationFrame(reportHeight);
    }
  });
  addEventListener('DOMContentLoaded', () => {
    installImageLightbox();
    installJogModeLayout();
    reportHeight();
    new ResizeObserver(reportHeight).observe(document.body);
  });
})();
