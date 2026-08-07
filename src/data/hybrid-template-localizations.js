/* Korean is the canonical source for Hybrid Ceramic template documentation. */
(function () {
  'use strict';

  const en = {
    '소재': 'Materials',
    '보철물 유형': 'Prosthesis type',
    '어버트먼트 크라운 브릿지': 'Abutment crown bridge',
    '어버트먼트 크라운': 'Abutment crown',
    '크라운 브릿지': 'Crown bridge',
    '크라운': 'Crown',
    '인레이/온레이': 'Inlay / Onlay',
    'Inlay/크라운 브릿지': 'Inlay / Crown bridge',
    '속성 추가': 'Add a property',
    '댓글': 'Comments',
    '템플릿을 사용하기 위한 조건': 'Conditions for using this template',
    '보철물 유형: 어버트먼트 크라운 브릿지': 'Prosthesis type: Abutment crown bridge',
    '보철물 유형: 어버트먼트 크라운': 'Prosthesis type: Abutment crown',
    '보철물 유형: 크라운': 'Prosthesis type: Crown',
    '보철물 유형: 인레이/온레이': 'Prosthesis type: Inlay / Onlay',
    '보철물 유형: 인레이/ 온레이 크라운 브릿지 혹은 크라운 브릿지( 인레이/ 온레이 크라운 브릿지는 인레이와 크라운이 같이 있는 브릿지의 형태를 말합니다)': 'Prosthesis type: Inlay/Onlay crown bridge or crown bridge (an Inlay/Onlay crown bridge contains both an inlay and a crown).',
    '소재: Hybrid Ceramic Disk / Block': 'Material: Hybrid Ceramic Disk / Block',
    '소재: Hybrid Ceramic Disk/Block': 'Material: Hybrid Ceramic Disk / Block',
    '하이니스 시스템의 인터페이스로 디자인 되어있어야 합니다.': 'The restoration must be designed for the Highness system interface.',
    '해당 템플릿으로 가공하기 위해 준비해야할 것들': 'Preparation required for this template',
    '마진 라인': 'Margin line',
    '인터페이스당 하나의 어버트먼트 베이스 라인이 있어야합니다.': 'Each interface must have one abutment-base line.',
    '경계(Emergence) 설정이 필수는 아닙니다. 하지만 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.': 'An emergence setting is not required, but is recommended for better surface texture around the interface.',
    '임플란트 인터페이스': 'Implant interface',
    '어버트먼트 베이스라인이 설정된 인터페이스는 반드시 스크류 채널이 있어야합니다.': 'An interface with an abutment-base line must have a screw channel.',
    '인터페이스에 설정된 스크류채널을 제외한 다른 홀들은 스크류 채널이 아닌 홀(Holes)로 설정되어야 합니다. .': 'Any holes other than the screw channel assigned to the interface must be set as Holes, not screw channels.',
    '조정 가능한 항목들': 'Adjustable items',
    '일반 설정': 'General settings',
    '증분식 경계 옵셋': 'Incremental boundary offset',
    '증분식 경계 각도': 'Incremental boundary angle',
    '만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려 다시 시도해보세요.': 'If an error occurs during calculation, increase these values slightly and try again.',
    '만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려보세요.': 'If an error occurs during calculation, increase these values slightly.',
    '어버트먼트 베이스 라인 안쪽을 1.0mm 플랫 공구(T43_M1.0F_L06)을 이용해 정삭합니다.': 'Finishes the inside of the abutment-base line using a 1.0 mm flat tool (T43_M1.0F_L06).',
    '추가. XY 여유량: 어버트먼트 베이스 라인 안쪽의 적합을 조정할 수 있습니다. <br>(-로 설정할수록 적합이 헐거워집니다) <br>(+로 설정할수록 적합이 타이트해집니다)': 'Add. XY allowance: Adjusts the fit inside the abutment-base line. <br>(A more negative value makes the fit looser.) <br>(A more positive value makes the fit tighter.)',
    '교합면의 그루브를 0.6mm 공구(T37_G0.6B_L2)를 사용해 가공합니다.': 'Machines occlusal grooves using a 0.6 mm tool (T37_G0.6B_L2).',
    '계산: 해당 과정을 진행 여부를 선택하실 수 있습니다. (기본 설정값: 네)': 'Calculate: You can choose whether to run this process. (Default: Yes)',
    '계산 : 해당 과정을 진행 여부를 선택하실 수 있습니다. (기본 설정값: 네)': 'Calculate: You can choose whether to run this process. (Default: Yes)',
    '계산 : 해당 과정을 진행 여부를 선택하실 수 있습니다. (기본 설정값: 아니요)': 'Calculate: You can choose whether to run this process. (Default: No)',
    '여유량 : 크라운/코핑 내면의 적합을 조정할 수 있습니다. (Range: -0.06 ~ 0.06)': 'Allowance: Adjusts the fit inside crowns/copings. (Range: -0.06 to 0.06)',
    '여유량 : 인레이/온레이 내면의 적합을 조정할 수 있습니다. (Range: -0.06 ~ 0.06)': 'Allowance: Adjusts the fit inside inlays/onlays. (Range: -0.06 to 0.06)',
    '여유량 : 크라운/코핑 내면의 적합을 조정할 수 있습니다.': 'Allowance: Adjusts the fit inside crowns/copings.',
    '5축 동시 가공으로 크라운/코핑 내면을 1.0mm 공구를 사용해 가공합니다.': 'Machines the inside of crowns/copings with a 1.0 mm tool using simultaneous 5-axis machining.',
    '설정된 삽입 경로에 따라 크라운/코핑 내면을 1.0mm 공구를 사용해 가공합니다.': 'Machines the inside of crowns/copings with a 1.0 mm tool along the defined insertion path.',
    '인레이/온레이 내면을 1.0mm 공구를 사용해 가공합니다.': 'Machines the inside of inlays/onlays using a 1.0 mm tool.',
    '교합면의 그루브를 0.6mm 공구를 사용해 가공합니다.': 'Machines occlusal grooves using a 0.6 mm tool.',
    '0.3mm 공구를 사용해 교합면 그루브를 가공합니다.': 'Machines occlusal grooves using a 0.3 mm tool.',
    '사용자 정의 영역을 사용하실 수 있습니다.': 'User-defined areas (UDA) are available.',
    '유형 1 : T36-G1.0B': 'Category 1: T36-G1.0B',
    '유형 3 : T36-G1.0B→T37-G0.6B': 'Category 3: T36-G1.0B → T37-G0.6B',
    '해당 템플릿에서 사용되는 공구 목록': 'Tools used in this template',
    '공구': 'Tools',
    '스크류 채널 가공을 위해 사용됩니다.': 'Used for screw-channel machining.',
    '임플란트 인터페이스 인터페이스 가공을 위해 사용됩니다.': 'Used for implant-interface machining.',
    '각진 스크류 채널 가공 시에만 선택적으로 사용됩니다.': 'Optional; used only for angled screw-channel machining.',
    '어버트먼트 베이스 라인은 인터페이스에 반드시 설정되어야만 합니다.': 'An abutment-base line must be set on the interface.',
    '스크루 채널은 반드시 인터페이스에 설정되어야만 합니다.': 'A screw channel must be set on the interface.',
    '인레이/ 온레이 혹은 코핑 라인은 필수입니다.': 'An inlay/onlay or coping line is required.',
    '선택 사항, 각진 스크류 채널이 적용된 경우.': 'Optional, when an angled screw channel is applied.',
    '0.6mm 공구는 선택 사항입니다.': 'A 0.6 mm tool is optional.',
    '코핑 라인 설정은 필수입니다.': 'A coping line must be set.',
    '선택 사항 (사용자 정의 영역, 교합면 그루브 가공)': 'Optional (UDA and occlusal-groove machining).',
    '인레이/온레이 라인 설정은 필수입니다.': 'An inlay/onlay line must be set.',
    '캐비티 전체 내면을 1.0mm 공구를 사용해 가공합니다.': 'Machines the entire cavity interior using a 1.0 mm tool.',
    '교합면의 그루브를 1.0mm 공구를 사용해 가공합니다.': 'Machines occlusal grooves using a 1.0 mm tool.',
    '0.6mm 공구를 사용해 캐비티 전체 내면을 잔삭 가공합니다.': 'Rest-machines the entire cavity interior using a 0.6 mm tool.',
    '이것은 “Hybrid Ceramic_인레이/온레이_D0.6” 보다 느리게 가공하기 위한 템플릿입니다.': 'This template machines more slowly than “Hybrid Ceramic_Inlay/Onlay_D0.6”.',
    '이 템플릿은 매몰 가공 방식으로 캐비티 내면만 가공하기 위한 것입니다. 커넥터를 설정하지 않아도 됩니다.': 'This template is for embedded machining of the cavity interior only. A connector is not required.',
    '이 캐비티 내면을 먼저 가공해 주십시오.': 'Machine this cavity interior first.',
    '이것은 원래 디자인보다 0.05mm 크게 가공하기 위한 것입니다. 전략적으로 활용할 수 있습니다.': 'This machines 0.05 mm larger than the original design and can be used strategically.',
    '이 템플릿은 매몰 가공 방식으로 교합면만 가공하기 위한 것입니다. 커넥터를 설정하지 않아도 됩니다.': 'This template is for embedded machining of the occlusal surface only. A connector is not required.',
    '캐비티 내면을 가공한 후 이 교합면을 가공해 주십시오.': 'Machine this occlusal surface after machining the cavity interior.',
    '이것은 원래 디자인보다 0.08mm 크게 가공하기 위한 것입니다. 전략적으로 활용할 수 있습니다.': 'This machines 0.08 mm larger than the original design and can be used strategically.'
  };

  const ja = {
    '소재': '材料', '보철물 유형': '補綴物の種類', '어버트먼트 크라운 브릿지': 'アバットメント・クラウンブリッジ', '어버트먼트 크라운': 'アバットメント・クラウン', '크라운 브릿지': 'クラウンブリッジ', '크라운': 'クラウン', '인레이/온레이': 'インレー／オンレー', 'Inlay/크라운 브릿지': 'インレー／クラウンブリッジ', '속성 추가': 'プロパティを追加', '댓글': 'コメント',
    '템플릿을 사용하기 위한 조건': 'このテンプレートを使用する条件', '보철물 유형: 어버트먼트 크라운 브릿지': '補綴物の種類：アバットメント・クラウンブリッジ', '보철물 유형: 어버트먼트 크라운': '補綴物の種類：アバットメント・クラウン', '보철물 유형: 크라운': '補綴物の種類：クラウン', '보철물 유형: 인레이/온레이': '補綴物の種類：インレー／オンレー',
    '보철물 유형: 인레이/ 온레이 크라운 브릿지 혹은 크라운 브릿지( 인레이/ 온레이 크라운 브릿지는 인레이와 크라운이 같이 있는 브릿지의 형태를 말합니다)': '補綴物の種類：インレー／オンレー・クラウンブリッジまたはクラウンブリッジ（インレー／オンレー・クラウンブリッジはインレーとクラウンを含むブリッジです）。',
    '소재: Hybrid Ceramic Disk / Block': '材料：ハイブリッドセラミックディスク／ブロック', '소재: Hybrid Ceramic Disk/Block': '材料：ハイブリッドセラミックディスク／ブロック', '하이니스 시스템의 인터페이스로 디자인 되어있어야 합니다.': 'Highnessシステムのインターフェース用に設計されている必要があります。',
    '해당 템플릿으로 가공하기 위해 준비해야할 것들': 'このテンプレートで加工するための準備', '마진 라인': 'マージンライン', '인터페이스당 하나의 어버트먼트 베이스 라인이 있어야합니다.': '各インターフェースに1本のアバットメントベースラインが必要です。', '경계(Emergence) 설정이 필수는 아닙니다. 하지만 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.': 'エマージェンス設定は必須ではありませんが、インターフェース周辺の表面品質のために設定を推奨します。', '임플란트 인터페이스': 'インプラントインターフェース', '어버트먼트 베이스라인이 설정된 인터페이스는 반드시 스크류 채널이 있어야합니다.': 'アバットメントベースラインが設定されたインターフェースには、必ずスクリューチャンネルが必要です。', '인터페이스에 설정된 스크류채널을 제외한 다른 홀들은 스크류 채널이 아닌 홀(Holes)로 설정되어야 합니다. .': 'インターフェースに設定されたスクリューチャンネル以外の穴は、スクリューチャンネルではなくHolesとして設定してください。',
    '조정 가능한 항목들': '調整可能な項目', '일반 설정': '一般設定', '증분식 경계 옵셋': '増分境界オフセット', '증분식 경계 각도': '増分境界角度', '만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려 다시 시도해보세요.': '計算中にエラーが発生した場合は、これらの値を少し上げて再試行してください。', '만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려보세요.': '計算中にエラーが発生した場合は、これらの値を少し上げてください。',
    '어버트먼트 베이스 라인 안쪽을 1.0mm 플랫 공구(T43_M1.0F_L06)을 이용해 정삭합니다.': '1.0 mmフラットツール（T43_M1.0F_L06）でアバットメントベースライン内側を仕上げ加工します。', '추가. XY 여유량: 어버트먼트 베이스 라인 안쪽의 적합을 조정할 수 있습니다. <br>(-로 설정할수록 적합이 헐거워집니다) <br>(+로 설정할수록 적합이 타이트해집니다)': '追加XY許容値：アバットメントベースライン内側の適合を調整できます。<br>（値をマイナスにするほど適合は緩くなります。）<br>（値をプラスにするほど適合はタイトになります。）',
    '교합면의 그루브를 0.6mm 공구(T37_G0.6B_L2)를 사용해 가공합니다.': '0.6 mmツール（T37_G0.6B_L2）で咬合面のグルーブを加工します。', '계산: 해당 과정을 진행 여부를 선택하실 수 있습니다. (기본 설정값: 네)': '計算：この工程を実行するか選択できます。（初期設定：はい）', '계산 : 해당 과정을 진행 여부를 선택하실 수 있습니다. (기본 설정값: 네)': '計算：この工程を実行するか選択できます。（初期設定：はい）', '계산 : 해당 과정을 진행 여부를 선택하실 수 있습니다. (기본 설정값: 아니요)': '計算：この工程を実行するか選択できます。（初期設定：いいえ）', '여유량 : 크라운/코핑 내면의 적합을 조정할 수 있습니다. (Range: -0.06 ~ 0.06)': '許容値：クラウン／コーピング内面の適合を調整できます。（範囲：-0.06～0.06）', '여유량 : 인레이/온레이 내면의 적합을 조정할 수 있습니다. (Range: -0.06 ~ 0.06)': '許容値：インレー／オンレー内面の適合を調整できます。（範囲：-0.06～0.06）', '여유량 : 크라운/코핑 내면의 적합을 조정할 수 있습니다.': '許容値：クラウン／コーピング内面の適合を調整できます。',
    '5축 동시 가공으로 크라운/코핑 내면을 1.0mm 공구를 사용해 가공합니다.': '同時5軸加工で、1.0 mmツールを使用してクラウン／コーピング内面を加工します。', '설정된 삽입 경로에 따라 크라운/코핑 내면을 1.0mm 공구를 사용해 가공합니다.': '設定された挿入パスに沿って、1.0 mmツールでクラウン／コーピング内面を加工します。', '인레이/온레이 내면을 1.0mm 공구를 사용해 가공합니다.': '1.0 mmツールでインレー／オンレー内面を加工します。', '교합면의 그루브를 0.6mm 공구를 사용해 가공합니다.': '0.6 mmツールで咬合面のグルーブを加工します。', '0.3mm 공구를 사용해 교합면 그루브를 가공합니다.': '0.3 mmツールで咬合面のグルーブを加工します。',
    '사용자 정의 영역을 사용하실 수 있습니다.': 'ユーザー定義領域（UDA）を使用できます。', '유형 1 : T36-G1.0B': 'カテゴリ1：T36-G1.0B', '유형 3 : T36-G1.0B→T37-G0.6B': 'カテゴリ3：T36-G1.0B → T37-G0.6B', '해당 템플릿에서 사용되는 공구 목록': 'このテンプレートで使用するツール', '공구': 'ツール', '스크류 채널 가공을 위해 사용됩니다.': 'スクリューチャンネル加工に使用します。', '임플란트 인터페이스 인터페이스 가공을 위해 사용됩니다.': 'インプラントインターフェース加工に使用します。', '각진 스크류 채널 가공 시에만 선택적으로 사용됩니다.': '角度付きスクリューチャンネル加工時のみ任意で使用します。',
    '어버트먼트 베이스 라인은 인터페이스에 반드시 설정되어야만 합니다.': 'アバットメントベースラインはインターフェースに必ず設定してください。', '스크루 채널은 반드시 인터페이스에 설정되어야만 합니다.': 'スクリューチャンネルはインターフェースに必ず設定してください。', '인레이/ 온레이 혹은 코핑 라인은 필수입니다.': 'インレー／オンレーまたはコーピングラインの設定が必須です。', '선택 사항, 각진 스크류 채널이 적용된 경우.': '任意：角度付きスクリューチャンネルを適用する場合。', '0.6mm 공구는 선택 사항입니다.': '0.6 mmツールは任意です。', '코핑 라인 설정은 필수입니다.': 'コーピングラインの設定が必須です。', '선택 사항 (사용자 정의 영역, 교합면 그루브 가공)': '任意（UDA、咬合面グルーブ加工）。', '인레이/온레이 라인 설정은 필수입니다.': 'インレー／オンレーラインの設定が必須です。', '캐비티 전체 내면을 1.0mm 공구를 사용해 가공합니다.': '1.0 mmツールでキャビティ内面全体を加工します。', '교합면의 그루브를 1.0mm 공구를 사용해 가공합니다.': '1.0 mmツールで咬合面のグルーブを加工します。', '0.6mm 공구를 사용해 캐비티 전체 내면을 잔삭 가공합니다.': '0.6 mmツールでキャビティ内面全体を残材加工します。', '이것은 “Hybrid Ceramic_인레이/온레이_D0.6” 보다 느리게 가공하기 위한 템플릿입니다.': 'これは「Hybrid Ceramic_Inlay/Onlay_D0.6」より低速で加工するためのテンプレートです。', '이 템플릿은 매몰 가공 방식으로 캐비티 내면만 가공하기 위한 것입니다. 커넥터를 설정하지 않아도 됩니다.': 'このテンプレートは埋没加工方式でキャビティ内面のみを加工するためのものです。コネクターの設定は不要です。', '이 캐비티 내면을 먼저 가공해 주십시오.': 'このキャビティ内面を先に加工してください。', '이것은 원래 디자인보다 0.05mm 크게 가공하기 위한 것입니다. 전략적으로 활용할 수 있습니다.': 'これは元のデザインより0.05 mm大きく加工するためのテンプレートです。用途に応じて使用できます。', '이 템플릿은 매몰 가공 방식으로 교합면만 가공하기 위한 것입니다. 커넥터를 설정하지 않아도 됩니다.': 'このテンプレートは埋没加工方式で咬合面のみを加工するためのものです。コネクターの設定は不要です。', '캐비티 내면을 가공한 후 이 교합면을 가공해 주십시오.': 'キャビティ内面を加工した後、この咬合面を加工してください。', '이것은 원래 디자인보다 0.08mm 크게 가공하기 위한 것입니다. 전략적으로 활용할 수 있습니다.': 'これは元のデザインより0.08 mm大きく加工するためのテンプレートです。用途に応じて使用できます。'
  };

  Object.assign(en, {
    '보철물 유형: 어버트먼트 크라운': 'Prosthesis type: Abutment crown', '소재: PMMA Disk/Block': 'Material: PMMA Disk / Block', '소재: PMMA Disk / Block': 'Material: PMMA Disk / Block', '어버트먼트 베이스 라인 설정은 필수입니다.': 'An abutment-base line must be set.', '경계(Emergence) 라인 설정은 필수는 아니지만, 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.': 'An emergence line is not required, but is recommended for better surface texture around the interface.', '스크류 채널 가공': 'Screw-channel machining', '선택 사항, 인터페이스 가공': 'Optional, for interface machining.', '어버트먼트 베이스 라인 안쪽을 1.0mm 공구를 이용해 정삭합니다.': 'Finishes the inside of the abutment-base line using a 1.0 mm tool.', '추가. XY 여유량: 어버트먼트 베이스 라인 안쪽의 적합을 조정할 수 있습니다.': 'Add. XY allowance: Adjusts the fit inside the abutment-base line.', '교합면의 그루브를 1.0mm 공구를 사용해 가공합니다.': 'Machines occlusal grooves using a 1.0 mm tool.', '1.5mm 코너 라운드 공구를 사용하여 어버트먼트 내면을 정삭합니다.': 'Finishes the abutment interior using a 1.5 mm corner-round tool.', '1.0mm 플랫 공구를 사용하여 어버트먼트 내면을 정삭합니다.': 'Finishes the abutment interior using a 1.0 mm flat tool.', '0.6mm 공구를 사용하여 어버트먼트 내면을 정삭합니다.': 'Finishes the abutment interior using a 0.6 mm tool.', '보철물 유형: 어버트먼트 크라운 브릿지': 'Prosthesis type: Abutment crown bridge', '설정된 삽입 경로를 따라 1.0mm 공구를 사용해 어버트먼트 내면을 정삭합니다.': 'Finishes the abutment interior using a 1.0 mm tool along the defined insertion path.', '인터페이스 가공': 'Interface machining', '보철물 유형: 크라운 브릿지/Coping bridge': 'Prosthesis type: Crown bridge / Coping bridge', '선택 사항 (내면 정삭)': 'Optional (internal finishing).', '추가. XY 여유량: 어버트먼트 베이스 라인 안쪽의 적합을 조정할 수 있습니다. (Range: -0.06 ~ 0.06)': 'Add. XY allowance: Adjusts the fit inside the abutment-base line. (Range: -0.06 to 0.06)', '추가. XY 여유량: 크라운/코핑 내면의 적합을 조정할 수 있습니다. (Range: -0.06 ~ 0.06)': 'Add. XY allowance: Adjusts the fit inside crowns/copings. (Range: -0.06 to 0.06)', '보철물 유형: 크라운/코핑': 'Prosthesis type: Crown / Coping', '“PMMA_Coping_Crown_SCRP” 보다 빠른 버전입니다.': 'A faster version than “PMMA_Coping_Crown_SCRP”.', '“PMMA_Coping/Crown Bridge_SCRP” 보다 빠른 버전입니다.': 'A faster version than “PMMA_Coping/Crown Bridge_SCRP”.', '보철물 유형: 크라운 브릿지': 'Prosthesis type: Crown bridge', '보철물 유형: denture Teeth': 'Prosthesis type: Denture teeth', '별도의 필수 마진 설정은 없습니다.': 'No separate mandatory margin setting is required.', '보철물 유형: Flexble denture': 'Prosthesis type: Flexible denture', '보철물 유형: Full denture': 'Prosthesis type: Full denture', '코핑 라인을 설정해야만 합니다.': 'A coping line must be set.', '풀 덴쳐 베이스를 가공하기 위한 템플릿입니다.': 'This template is for machining a full-denture base.', '선택 사항 (스크류 핏 영역이 있는 스크류 채널 가공)': 'Optional (screw-channel machining with a screw-fit area).', '각기 다른 삽입 방향을 가진 8개의 영역으로 나누어 1.0mm 공구로 긴 캐비티 내면을 정삭합니다.': 'Finishes the long cavity interior using a 1.0 mm tool in eight areas with different insertion directions.', '설정된 삽입 경로를 따라 1.0mm 공구로 긴 캐비티 내면을 정삭합니다.': 'Finishes the long cavity interior using a 1.0 mm tool along the defined insertion path.', '보철물 유형: Over Structure': 'Prosthesis type: Over Structure', 'IBar와 같은 임플란트 바의 상부 구조물을 가공하기 위한 템플릿입니다.': 'This template is for machining the superstructure of an implant bar such as an I-Bar.', '보철물 유형: Partial Frame': 'Prosthesis type: Partial Frame'
  });
  Object.assign(ja, {
    '보철물 유형: 어버트먼트 크라운': '補綴物の種類：アバットメント・クラウン', '소재: PMMA Disk/Block': '材料：PMMAディスク／ブロック', '소재: PMMA Disk / Block': '材料：PMMAディスク／ブロック', '어버트먼트 베이스 라인 설정은 필수입니다.': 'アバットメントベースラインの設定が必須です。', '경계(Emergence) 라인 설정은 필수는 아니지만, 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.': 'エマージェンスラインは必須ではありませんが、インターフェース周辺の表面品質のために設定を推奨します。', '스크류 채널 가공': 'スクリューチャンネル加工', '선택 사항, 인터페이스 가공': '任意：インターフェース加工。', '어버트먼트 베이스 라인 안쪽을 1.0mm 공구를 이용해 정삭합니다.': '1.0 mmツールでアバットメントベースライン内側を仕上げ加工します。', '추가. XY 여유량: 어버트먼트 베이스 라인 안쪽의 적합을 조정할 수 있습니다.': '追加XY許容値：アバットメントベースライン内側の適合を調整できます。', '교합면의 그루브를 1.0mm 공구를 사용해 가공합니다.': '1.0 mmツールで咬合面のグルーブを加工します。', '1.5mm 코너 라운드 공구를 사용하여 어버트먼트 내면을 정삭합니다.': '1.5 mmコーナーラウンドツールでアバットメント内面を仕上げ加工します。', '1.0mm 플랫 공구를 사용하여 어버트먼트 내면을 정삭합니다.': '1.0 mmフラットツールでアバットメント内面を仕上げ加工します。', '0.6mm 공구를 사용하여 어버트먼트 내면을 정삭합니다.': '0.6 mmツールでアバットメント内面を仕上げ加工します。', '보철물 유형: 어버트먼트 크라운 브릿지': '補綴物の種類：アバットメント・クラウンブリッジ', '설정된 삽입 경로를 따라 1.0mm 공구를 사용해 어버트먼트 내면을 정삭합니다.': '設定された挿入パスに沿って、1.0 mmツールでアバットメント内面を仕上げ加工します。', '인터페이스 가공': 'インターフェース加工', '보철물 유형: 크라운 브릿지/Coping bridge': '補綴物の種類：クラウンブリッジ／コーピングブリッジ', '선택 사항 (내면 정삭)': '任意（内面仕上げ）。', '추가. XY 여유량: 어버트먼트 베이스 라인 안쪽의 적합을 조정할 수 있습니다. (Range: -0.06 ~ 0.06)': '追加XY許容値：アバットメントベースライン内側の適合を調整できます。（範囲：-0.06～0.06）', '추가. XY 여유량: 크라운/코핑 내면의 적합을 조정할 수 있습니다. (Range: -0.06 ~ 0.06)': '追加XY許容値：クラウン／コーピング内面の適合を調整できます。（範囲：-0.06～0.06）', '보철물 유형: 크라운/코핑': '補綴物の種類：クラウン／コーピング', '“PMMA_Coping_Crown_SCRP” 보다 빠른 버전입니다.': '「PMMA_Coping_Crown_SCRP」より高速なバージョンです。', '“PMMA_Coping/Crown Bridge_SCRP” 보다 빠른 버전입니다.': '「PMMA_Coping/Crown Bridge_SCRP」より高速なバージョンです。', '보철물 유형: 크라운 브릿지': '補綴物の種類：クラウンブリッジ', '보철물 유형: denture Teeth': '補綴物の種類：デンチャーティース', '별도의 필수 마진 설정은 없습니다.': '別途必須のマージン設定はありません。', '보철물 유형: Flexble denture': '補綴物の種類：フレキシブルデンチャー', '보철물 유형: Full denture': '補綴物の種類：フルデンチャー', '코핑 라인을 설정해야만 합니다.': 'コーピングラインの設定が必要です。', '풀 덴쳐 베이스를 가공하기 위한 템플릿입니다.': 'フルデンチャーベースを加工するためのテンプレートです。', '선택 사항 (스크류 핏 영역이 있는 스크류 채널 가공)': '任意（スクリューフィット領域を持つスクリューチャンネル加工）。', '각기 다른 삽입 방향을 가진 8개의 영역으로 나누어 1.0mm 공구로 긴 캐비티 내면을 정삭합니다.': '異なる挿入方向を持つ8つの領域に分け、1.0 mmツールで長いキャビティ内面を仕上げ加工します。', '설정된 삽입 경로를 따라 1.0mm 공구로 긴 캐비티 내면을 정삭합니다.': '設定された挿入パスに沿って、1.0 mmツールで長いキャビティ内面を仕上げ加工します。', '보철물 유형: Over Structure': '補綴物の種類：オーバーストラクチャー', 'IBar와 같은 임플란트 바의 상부 구조물을 가공하기 위한 템플릿입니다.': 'I-Barなどのインプラントバーの上部構造を加工するためのテンプレートです。', '보철물 유형: Partial Frame': '補綴物の種類：パーシャルフレーム'
  });
  Object.assign(en, {
    '소재: Zirconia Disk/Block': 'Material: Zirconia Disk / Block', '계산 : 해당 과정을 진행 여부를 선택하실 수 있습니다. (기본 설정값: 아니오)': 'Calculate: You can choose whether to run this process. (Default: No)', '💡 이 템플릿이 선택되었을 때는 이 공정을 활성화하지 마십시오!': '💡 Do not enable this process when this template is selected!', '보철물 유형: 어버트먼트 크라운 브릿지 that needs to 0.6mm diameter ball end mill tool machining for the interface.': 'Prosthesis type: Abutment crown bridge requiring a 0.6 mm ball-end mill for interface machining.', '하이니스 시스템의 인터페이스로 디자인 되어있어야합니다.': 'The restoration must be designed for the Highness system interface.', '메가링크 시스템의 인터페이스로 디자인 되어있어야 합니다.': 'The restoration must be designed for the MegaLink system interface.', '스크류 채널 가공, 인터페이스 가공': 'Screw-channel and interface machining', '여유량: 어버트먼트 내면의 적합을 조정할 수 있습니다.': 'Allowance: Adjusts the fit inside the abutment.', '보철물 유형: 어버트먼트 크라운 that needs to 0.6mm diameter ball end mill tool machining for the interface.': 'Prosthesis type: Abutment crown requiring a 0.6 mm ball-end mill for interface machining.', '보철물 유형: Coping': 'Prosthesis type: Coping', '1.0mm 플랫 공구를 사용해 코핑/크라운 내면을 정삭합니다.': 'Finishes the coping/crown interior using a 1.0 mm flat tool.', '추가. XY 여유량: 코핑/크라운 내면의 적합을 조정할 수 있습니다.': 'Add. XY allowance: Adjusts the fit inside copings/crowns.', '0.6mm 공구를 사용해 코핑/크라운 내면을 정삭합니다.': 'Finishes the coping/crown interior using a 0.6 mm tool.', '각기 다른 삽입 경로를 가진 약 8개의 영역으로 나누어 긴 캐비티 내면을 정삭합니다.': 'Finishes the long cavity interior in approximately eight areas with different insertion paths.', '보철물 유형: 인레이/온레이 bridge or Inlay/크라운 브릿지 (* 인레이/온레이 crown bridge is the bridge that consists of both inlays and crowns together)': 'Prosthesis type: Inlay/Onlay bridge or Inlay/Crown bridge (an Inlay/Onlay crown bridge contains both inlays and crowns).', 'Setting the 인레이/온레이 or Coping lines is mandatory': 'Setting the Inlay/Onlay or coping line is mandatory.', 'Setting the 인레이/온레이 lines is mandatory': 'Setting the Inlay/Onlay line is mandatory.', '선택 사항, 내면 가공': 'Optional, internal machining.'
  });
  Object.assign(ja, {
    '소재: Zirconia Disk/Block': '材料：ジルコニアディスク／ブロック', '계산 : 해당 과정을 진행 여부를 선택하실 수 있습니다. (기본 설정값: 아니오)': '計算：この工程を実行するか選択できます。（初期設定：いいえ）', '💡 이 템플릿이 선택되었을 때는 이 공정을 활성화하지 마십시오!': '💡 このテンプレートを選択している場合、この工程を有効にしないでください。', '보철물 유형: 어버트먼트 크라운 브릿지 that needs to 0.6mm diameter ball end mill tool machining for the interface.': '補綴物の種類：インターフェース加工に直径0.6 mmボールエンドミルを必要とするアバットメント・クラウンブリッジ。', '하이니스 시스템의 인터페이스로 디자인 되어있어야합니다.': 'Highnessシステムのインターフェース用に設計されている必要があります。', '메가링크 시스템의 인터페이스로 디자인 되어있어야 합니다.': 'MegaLinkシステムのインターフェース用に設計されている必要があります。', '스크류 채널 가공, 인터페이스 가공': 'スクリューチャンネル加工、インターフェース加工', '여유량: 어버트먼트 내면의 적합을 조정할 수 있습니다.': '許容値：アバットメント内面の適合を調整できます。', '보철물 유형: 어버트먼트 크라운 that needs to 0.6mm diameter ball end mill tool machining for the interface.': '補綴物の種類：インターフェース加工に直径0.6 mmボールエンドミルを必要とするアバットメント・クラウン。', '보철물 유형: Coping': '補綴物の種類：コーピング', '1.0mm 플랫 공구를 사용해 코핑/크라운 내면을 정삭합니다.': '1.0 mmフラットツールでコーピング／クラウン内面を仕上げ加工します。', '추가. XY 여유량: 코핑/크라운 내면의 적합을 조정할 수 있습니다.': '追加XY許容値：コーピング／クラウン内面の適合を調整できます。', '0.6mm 공구를 사용해 코핑/크라운 내면을 정삭합니다.': '0.6 mmツールでコーピング／クラウン内面を仕上げ加工します。', '각기 다른 삽입 경로를 가진 약 8개의 영역으로 나누어 긴 캐비티 내면을 정삭합니다.': '異なる挿入パスを持つ約8つの領域に分け、長いキャビティ内面を仕上げ加工します。', '보철물 유형: 인레이/온레이 bridge or Inlay/크라운 브릿지 (* 인레이/온레이 crown bridge is the bridge that consists of both inlays and crowns together)': '補綴物の種類：インレー／オンレーブリッジまたはインレー／クラウンブリッジ（インレー／オンレー・クラウンブリッジはインレーとクラウンを含むブリッジです）。', 'Setting the 인레이/온레이 or Coping lines is mandatory': 'インレー／オンレーまたはコーピングラインの設定が必須です。', 'Setting the 인레이/온레이 lines is mandatory': 'インレー／オンレーラインの設定が必須です。', '선택 사항, 내면 가공': '任意：内面加工。'
  });

  en['코핑 라인 설정은 필수입니다'] = 'A coping line must be set.';
  ja['코핑 라인 설정은 필수입니다'] = 'コーピングラインの設定が必須です。';
  Object.assign(en, {
    '소재: PEEK Disk/Block': 'Material: PEEK Disk / Block', '소재: Wax Disk': 'Material: Wax Disk', '코핑 라인 설정은 필수입니다 →': 'A coping line must be set.', '보철물 유형: Coping bridge': 'Prosthesis type: Coping bridge', '여유량 : 크라운/코핑 내면의 적합을 조정할 수 있습니다. (Range: -0.1 ~ 0.1)': 'Allowance: Adjusts the fit inside crowns/copings. (Range: -0.1 to 0.1)', '1.5mm 플랫 공구를 사용해 어버트먼트 내면을 정삭합니다.': 'Finishes the abutment interior using a 1.5 mm flat tool.', '추가. XY 여유량: 어버트먼트 베이스 라인 안쪽의 적합을 조정할 수 있습니다. (Range: -0.1 ~ 0.1)': 'Add. XY allowance: Adjusts the fit inside the abutment-base line. (Range: -0.1 to 0.1)', '보철물 유형: 크라운 브릿지 / Inaly/크라운 브릿지': 'Prosthesis type: Crown bridge / Inlay crown bridge', '보철물 유형: 인레이/온레이': 'Prosthesis type: Inlay / Onlay', '여유량 : 인레이/온레이 내면의 적합을 조정할 수 있습니다. (Range: -0.1 ~ 0.1)': 'Allowance: Adjusts the fit inside inlays/onlays. (Range: -0.1 to 0.1)', '0.6mm 공구를 사용해 인레이/온레이 내면을 포함한 캐비티 전체를 정삭합니다.': 'Finishes the entire cavity, including the inlay/onlay interior, using a 0.6 mm tool.'
  });
  Object.assign(ja, {
    '소재: PEEK Disk/Block': '材料：PEEKディスク／ブロック', '소재: Wax Disk': '材料：ワックスディスク', '코핑 라인 설정은 필수입니다 →': 'コーピングラインの設定が必須です。', '보철물 유형: Coping bridge': '補綴物の種類：コーピングブリッジ', '여유량 : 크라운/코핑 내면의 적합을 조정할 수 있습니다. (Range: -0.1 ~ 0.1)': '許容値：クラウン／コーピング内面の適合を調整できます。（範囲：-0.1～0.1）', '1.5mm 플랫 공구를 사용해 어버트먼트 내면을 정삭합니다.': '1.5 mmフラットツールでアバットメント内面を仕上げ加工します。', '추가. XY 여유량: 어버트먼트 베이스 라인 안쪽의 적합을 조정할 수 있습니다. (Range: -0.1 ~ 0.1)': '追加XY許容値：アバットメントベースライン内側の適合を調整できます。（範囲：-0.1～0.1）', '보철물 유형: 크라운 브릿지 / Inaly/크라운 브릿지': '補綴物の種類：クラウンブリッジ／インレー・クラウンブリッジ', '보철물 유형: 인레이/온레이': '補綴物の種類：インレー／オンレー', '여유량 : 인레이/온레이 내면의 적합을 조정할 수 있습니다. (Range: -0.1 ~ 0.1)': '許容値：インレー／オンレー内面の適合を調整できます。（範囲：-0.1～0.1）', '0.6mm 공구를 사용해 인레이/온레이 내면을 포함한 캐비티 전체를 정삭합니다.': '0.6 mmツールでインレー／オンレー内面を含むキャビティ全体を仕上げ加工します。'
  });

  function localizeTemplate(source, dictionary) {
    return String(source).split(/(\r?\n)/).map((part) => {
      if (/\r?\n/.test(part)) return part;
      const key = part.trim();
      if (!key || !dictionary[key]) return part;
      return part.replace(key, dictionary[key]);
    }).join('');
  }

  Object.keys(dbConfigDataKO)
    .filter((title) => /^(Hybrid Ceramic|PMMA|PEEK|Wax|Zirconia)_/.test(title))
    .forEach((title) => {
      dbConfigDataEN[title] = localizeTemplate(dbConfigDataKO[title], en);
      dbConfigDataJA[title] = localizeTemplate(dbConfigDataKO[title], ja);
    });
}());
