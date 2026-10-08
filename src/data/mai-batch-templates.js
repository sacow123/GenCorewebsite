// Source: supplied Pre-Mill, Pre-Mil+Rev., Ti, Wax, Zirconia HTML exports.
// Generated with node tools/build-mai-batch.js.
window.MaiBatchTemplates = [
  {
    "title": "Pre-Mil+Rev._Abutment_90°_L_D1.0",
    "subtitle": "Abutment_90°_L_D1.0",
    "source": "Pre-Mil+Rev _Abutment_90°_L_D1 0 933cfb3e905882dd94e501c15be49af1.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 크게 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Large protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を大きく設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.0B 공구를 사용합니다.",
        "en": "The M1.0B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.0B工具を使用します。"
      },
      {
        "ko": "90도 가공이 포함되어 있습니다.",
        "en": "Includes the 90-degree machining.",
        "ja": "90度加工が含まれます。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 각인 및 스크류 가공용입니다.",
            "en": "Optional, for Engraving and Screw machining",
            "ja": "任意：刻印およびスクリュー加工用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR 90 5x (final)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR part-2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 14
  },
  {
    "title": "Pre-Mil+Rev._Abutment_90°_L_D1.0_s",
    "subtitle": "Abutment_90°_L_D1.0_s",
    "source": "Pre-Mil+Rev _Abutment_90°_L_D1 0_s 902cfb3e905883c2afbe0172780cc07c.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 크게 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Large protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を大きく設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.0B 공구를 사용합니다.",
        "en": "The M1.0B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.0B工具を使用します。"
      },
      {
        "ko": "90도 가공이 포함되어 있습니다.",
        "en": "Includes the 90-degree machining.",
        "ja": "90度加工が含まれます。"
      },
      {
        "ko": "상부 구조물(크라운)의 시멘트 갭을 0.02 추가합니다. 어버트먼트 이머전스 라인 위쪽을 설계보다 0.02mm 작게 가공합니다.",
        "en": "The cement gap for the supra structure(crown) is added 0.02. (The above part of the abutment emergence line is milled 0.02mm smaller than what it is designed)",
        "ja": "上部構造（クラウン）のセメントギャップを0.02追加します。アバットメントのエマージェンスラインより上部を設計より0.02mm小さく加工します。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 각인 및 스크류 가공용입니다.",
            "en": "Optional, for Engraving and Screw machining",
            "ja": "任意：刻印およびスクリュー加工用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR 90 5x (final)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR part-2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 7
  },
  {
    "title": "Pre-Mil+Rev._Abutment_90°_L_D1.0_ss",
    "subtitle": "Abutment_90°_L_D1.0_ss",
    "source": "Pre-Mil+Rev _Abutment_90°_L_D1 0_ss 109cfb3e90588315ab1101a117f1b1a5.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 크게 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Large protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を大きく設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.0B 공구를 사용합니다.",
        "en": "The M1.0B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.0B工具を使用します。"
      },
      {
        "ko": "90도 가공이 포함되어 있습니다.",
        "en": "Includes the 90-degree machining.",
        "ja": "90度加工が含まれます。"
      },
      {
        "ko": "상부 구조물(크라운)의 시멘트 갭을 0.04 추가합니다. 어버트먼트 이머전스 라인 위쪽을 설계보다 0.04mm 작게 가공합니다.",
        "en": "The cement gap for the supra structure(crown) is added 0.04. (The above part of the abutment emergence line is milled 0.04mm smaller than what it is designed)",
        "ja": "上部構造（クラウン）のセメントギャップを0.04追加します。アバットメントのエマージェンスラインより上部を設計より0.04mm小さく加工します。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 각인 및 스크류 가공용입니다.",
            "en": "Optional, for Engraving and Screw machining",
            "ja": "任意：刻印およびスクリュー加工用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR 90 5x (final)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR part-2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 7
  },
  {
    "title": "Pre-Mil+Rev._Abutment_90°_L_D1.5",
    "subtitle": "Abutment_90°_L_D1.5",
    "source": "Pre-Mil+Rev _Abutment_90°_L_D1 5 544cfb3e9058831f97ac017879b38858.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 크게 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Large protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を大きく設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.5B 공구를 사용합니다.",
        "en": "The M1.5B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.5B工具を使用します。"
      },
      {
        "ko": "90도 가공이 포함되어 있습니다.",
        "en": "Includes the 90-degree machining.",
        "ja": "90度加工が含まれます。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 각인 및 스크류 가공용입니다.",
            "en": "Optional, for Engraving and Screw machining",
            "ja": "任意：刻印およびスクリュー加工用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 7
  },
  {
    "title": "Pre-Mil+Rev._Abutment_90°_L_D1.5_s",
    "subtitle": "Abutment_90°_L_D1.5_s",
    "source": "Pre-Mil+Rev _Abutment_90°_L_D1 5_s 69ccfb3e905882ffb4d00163b6f03c6a.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 크게 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Large protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を大きく設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.5B 공구를 사용합니다.",
        "en": "The M1.5B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.5B工具を使用します。"
      },
      {
        "ko": "90도 가공이 포함되어 있습니다.",
        "en": "Includes the 90-degree machining.",
        "ja": "90度加工が含まれます。"
      },
      {
        "ko": "상부 구조물(크라운)의 시멘트 갭을 0.02 추가합니다. 어버트먼트 이머전스 라인 위쪽을 설계보다 0.02mm 작게 가공합니다.",
        "en": "The cement gap for the supra structure(crown) is added 0.02. (The above part of the abutment emergence line is milled 0.02mm smaller than what it is designed)",
        "ja": "上部構造（クラウン）のセメントギャップを0.02追加します。アバットメントのエマージェンスラインより上部を設計より0.02mm小さく加工します。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 각인 및 스크류 가공용입니다.",
            "en": "Optional, for Engraving and Screw machining",
            "ja": "任意：刻印およびスクリュー加工用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 7
  },
  {
    "title": "Pre-Mil+Rev._Abutment_90°_L_D1.5_ss",
    "subtitle": "Abutment_90°_L_D1.5_ss",
    "source": "Pre-Mil+Rev _Abutment_90°_L_D1 5_ss 0e0cfb3e905882ed9229816f64c2668c.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 크게 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Large protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を大きく設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.5B 공구를 사용합니다.",
        "en": "The M1.5B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.5B工具を使用します。"
      },
      {
        "ko": "90도 가공이 포함되어 있습니다.",
        "en": "Includes the 90-degree machining.",
        "ja": "90度加工が含まれます。"
      },
      {
        "ko": "상부 구조물(크라운)의 시멘트 갭을 0.04 추가합니다. 어버트먼트 이머전스 라인 위쪽을 설계보다 0.04mm 작게 가공합니다.",
        "en": "The cement gap for the supra structure(crown) is added 0.04. (The above part of the abutment emergence line is milled 0.04mm smaller than what it is designed)",
        "ja": "上部構造（クラウン）のセメントギャップを0.04追加します。アバットメントのエマージェンスラインより上部を設計より0.04mm小さく加工します。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 각인 및 스크류 가공용입니다.",
            "en": "Optional, for Engraving and Screw machining",
            "ja": "任意：刻印およびスクリュー加工用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 7
  },
  {
    "title": "Pre-Mil+Rev._Abutment_90°_M_D1.0",
    "subtitle": "Abutment_90°_M_D1.0",
    "source": "Pre-Mil+Rev _Abutment_90°_M_D1 0 422cfb3e9058828884f9011530e2bc89.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 중간 크기로 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Medium protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を中程度の大きさに設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.0B 공구를 사용합니다.",
        "en": "The M1.0B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.0B工具を使用します。"
      },
      {
        "ko": "90도 가공이 포함되어 있습니다.",
        "en": "Includes the 90-degree machining.",
        "ja": "90度加工が含まれます。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 각인 및 스크류 가공용입니다.",
            "en": "Optional, for Engraving and Screw machining",
            "ja": "任意：刻印およびスクリュー加工用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR 90 5x (final)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR part-2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 7
  },
  {
    "title": "Pre-Mil+Rev._Abutment_90°_M_D1.0_s",
    "subtitle": "Abutment_90°_M_D1.0_s",
    "source": "Pre-Mil+Rev _Abutment_90°_M_D1 0_s b53cfb3e9058830fb61081068520eeaa.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 중간 크기로 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Medium protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を中程度の大きさに設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.0B 공구를 사용합니다.",
        "en": "The M1.0B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.0B工具を使用します。"
      },
      {
        "ko": "90도 가공이 포함되어 있습니다.",
        "en": "Includes the 90-degree machining.",
        "ja": "90度加工が含まれます。"
      },
      {
        "ko": "상부 구조물(크라운)의 시멘트 갭을 0.02 추가합니다. 어버트먼트 이머전스 라인 위쪽을 설계보다 0.02mm 작게 가공합니다.",
        "en": "The cement gap for the supra structure(crown) is added 0.02. (The above part of the abutment emergence line is milled 0.02mm smaller than what it is designed)",
        "ja": "上部構造（クラウン）のセメントギャップを0.02追加します。アバットメントのエマージェンスラインより上部を設計より0.02mm小さく加工します。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 각인 및 스크류 가공용입니다.",
            "en": "Optional, for Engraving and Screw machining",
            "ja": "任意：刻印およびスクリュー加工用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR 90 5x (final)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR part-2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 7
  },
  {
    "title": "Pre-Mil+Rev._Abutment_90°_M_D1.0_ss",
    "subtitle": "Abutment_90°_M_D1.0_ss",
    "source": "Pre-Mil+Rev _Abutment_90°_M_D1 0_ss 8a5cfb3e90588211863901f437c47517.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 중간 크기로 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Medium protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を中程度の大きさに設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.0B 공구를 사용합니다.",
        "en": "The M1.0B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.0B工具を使用します。"
      },
      {
        "ko": "90도 가공이 포함되어 있습니다.",
        "en": "Includes the 90-degree machining.",
        "ja": "90度加工が含まれます。"
      },
      {
        "ko": "상부 구조물(크라운)의 시멘트 갭을 0.04 추가합니다. 어버트먼트 이머전스 라인 위쪽을 설계보다 0.04mm 작게 가공합니다.",
        "en": "The cement gap for the supra structure(crown) is added 0.04. (The above part of the abutment emergence line is milled 0.04mm smaller than what it is designed)",
        "ja": "上部構造（クラウン）のセメントギャップを0.04追加します。アバットメントのエマージェンスラインより上部を設計より0.04mm小さく加工します。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 각인 및 스크류 가공용입니다.",
            "en": "Optional, for Engraving and Screw machining",
            "ja": "任意：刻印およびスクリュー加工用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR 90 5x (final)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR part-2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 7
  },
  {
    "title": "Pre-Mil+Rev._Abutment_90º_M_D1.0_mini",
    "subtitle": "Abutment_90º_M_D1.0_mini",
    "source": "Pre-Mil+Rev _Abutment_90º_M_D1 0_mini 6b6cfb3e9058821691e301fd88c908cb.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 미니 크기 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment mini size in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでミニサイズのアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 중간 크기로 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Medium protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を中程度の大きさに設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.0B 공구를 사용합니다.",
        "en": "The M1.0B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.0B工具を使用します。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR 90 5x (final)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR part-2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Pre-Mil+Rev._Abutment_Angled_MUA_(Tap +F1.5)",
    "subtitle": "Abutment_Angled_MUA_(Tap +F1.5)",
    "source": "Pre-Mil+Rev _Abutment_Angled_MUA_(Tap +F1 5) 336cfb3e9058832e9e01818e7374cdac.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 앵글드 멀티 유닛 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Angled Multi Unit Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアングルドマルチユニットアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 중간 크기로 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Medium protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を中程度の大きさに設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.0B 공구를 사용합니다.",
        "en": "The M1.0B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.0B工具を使用します。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 5
  },
  {
    "title": "Pre-Mil+Rev._Abutment_L_D1.0",
    "subtitle": "Abutment_L_D1.0",
    "source": "Pre-Mil+Rev _Abutment_L_D1 0 f2acfb3e9058827b827a81d39295207d.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 크게 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Large protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を大きく設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.0B 공구를 사용합니다.",
        "en": "The M1.0B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.0B工具を使用します。"
      },
      {
        "ko": "90도 가공이 포함되어 있지 않습니다.",
        "en": "NOT Includes the 90-degree machining.",
        "ja": "90度加工は含まれません。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR 90 5x (final)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR part-2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Pre-Mil+Rev._Abutment_L_D1.5",
    "subtitle": "Abutment_L_D1.5",
    "source": "Pre-Mil+Rev _Abutment_L_D1 5 c5ecfb3e9058837989578169f78deccd.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 크게 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Large protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を大きく設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.5B 공구를 사용합니다.",
        "en": "The M1.5B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.5B工具を使用します。"
      },
      {
        "ko": "90도 가공이 포함되어 있지 않습니다.",
        "en": "NOT Includes the 90-degree machining.",
        "ja": "90度加工は含まれません。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항",
            "en": "Optional",
            "ja": "任意"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR 90 5x (final)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR part-2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Pre-Mil+Rev._Abutment_Locator",
    "subtitle": "Abutment_Locator",
    "source": "Pre-Mil+Rev _Abutment_Locator d93cfb3e905882aaad86816e53823bf0.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 로케이터 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment locator in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでロケーターアバットメントを加工するテンプレートです。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T24",
        "name": "",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [],
    "images": [],
    "sourceToolCount": 5
  },
  {
    "title": "Pre-Mil+Rev._Abutment_M_D1.0",
    "subtitle": "Abutment_M_D1.0",
    "source": "Pre-Mil+Rev _Abutment_M_D1 0 3c6cfb3e9058830f986d015427d8b84b.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 중간 크기로 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Medium protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を中程度の大きさに設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.0B 공구를 사용합니다.",
        "en": "The M1.0B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.0B工具を使用します。"
      },
      {
        "ko": "90도 가공이 포함되어 있지 않습니다.",
        "en": "NOT Includes the 90-degree machining.",
        "ja": "90度加工は含まれません。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR 90 5x (final)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR part-2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Pre-Mil+Rev._Abutment_M_D1.5",
    "subtitle": "Abutment_M_D1.5",
    "source": "Pre-Mil+Rev _Abutment_M_D1 5 b59cfb3e90588252b4ed017d1bc7210f.html",
    "material": "Pre-Mil+Rev.",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 중간 크기로 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Medium protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を中程度の大きさに設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.5B 공구를 사용합니다.",
        "en": "The M1.5B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.5B工具を使用します。"
      },
      {
        "ko": "90도 가공이 포함되어 있지 않습니다.",
        "en": "NOT Includes the 90-degree machining.",
        "ja": "90度加工は含まれません。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항",
            "en": "Optional",
            "ja": "任意"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR 90 5x (final)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "(An) Finishing occlusal side (abutments) 1.0BR part-2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 삽입 방향에 따라 교합면 측을 정삭합니다.",
            "en": "Finishing process occlusal side by the path of insertion direction with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、挿入方向に沿って咬合面側を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "(An) Curve milling 0.6B / 90 5x",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면 측 어버트먼트 숄더를 정삭합니다.",
            "en": "Finishing process abutment’s shoulder at occlusal side with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面側のアバットメントショルダーを仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Bottom 1.0B Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Pre-Mill_Abutment_L_D1.0",
    "subtitle": "Abutment_L_D1.0",
    "source": "Pre-Mill_Abutment_L_D1 0 9bbcfb3e905882d4b2aa0139232a9c55.html",
    "material": "Pre-Mill",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 크게 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Large protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を大きく設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.0B 공구를 사용합니다.",
        "en": "The M1.0B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.0B工具を使用します。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "Botton 1d Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1d Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Pre-Mill_Abutment_L_D1.5",
    "subtitle": "Abutment_L_D1.5",
    "source": "Pre-Mill_Abutment_L_D1 5 43acfb3e905883b7a6500125a12718b2.html",
    "material": "Pre-Mill",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 크게 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Large protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を大きく設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.5B 공구를 사용합니다.",
        "en": "The M1.5B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.5B工具を使用します。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항",
            "en": "Optional",
            "ja": "任意"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Botton 1d Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1d Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Pre-Mill_Abutment_M_D1.0",
    "subtitle": "Abutment_M_D1.0",
    "source": "Pre-Mill_Abutment_M_D1 0 19dcfb3e905883b18fe081de68c18782.html",
    "material": "Pre-Mill",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 중간 크기로 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Medium protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を中程度の大きさに設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.0B 공구를 사용합니다.",
        "en": "The M1.0B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.0B工具を使用します。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "Botton 1d Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1d Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Pre-Mill_Abutment_M_D1.5",
    "subtitle": "Abutment_M_D1.5",
    "source": "Pre-Mill_Abutment_M_D1 5 0bbcfb3e9058831db9550150dc164271.html",
    "material": "Pre-Mill",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 프리밀 블록에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Pre-Mill block.",
        "ja": "Tiプレミルブロックでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "어버트먼트 베이스의 보호 영역을 크게 설정하여 가공합니다.",
        "en": "Milling the Abutment with a Large protection area of the abutment base.",
        "ja": "アバットメントベースの保護領域を大きく設定して加工します。"
      },
      {
        "ko": "최종 정삭에 M1.5B 공구를 사용합니다.",
        "en": "The M1.5B tool is carried out at the last finishing.",
        "ja": "最終仕上げにM1.5B工具を使用します。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항",
            "en": "Optional",
            "ja": "任意"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Botton 1d Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 180° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 180º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で180°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Top 1d Retention groove",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 0° 측의 유지 그루브를 가공합니다.",
            "en": "Retention groove milling on 0º side with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で0°側の維持溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Engraving D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 준비 공정에서 설정한 문자를 각인합니다.",
            "en": "Engrave letter you set in prepare process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で準備工程で設定した文字を刻印します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Ti_Abutment (Con-log)",
    "subtitle": "Abutment (Con-log)",
    "source": "Ti_Abutment (Con-log) a01cfb3e90588225924f81ddf2c3ade3.html",
    "material": "Ti",
    "type": "Abutment (Con-log)",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 디스크에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "Con-log 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment interface of Con-log system.",
        "ja": "Con-logシステムのアバットメントインターフェース用です。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ],
        "imageId": "T28"
      }
    ],
    "processes": [
      {
        "title": "Fissure machining D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining [M0.6BXL03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment",
    "subtitle": "Abutment",
    "source": "Ti_Abutment 4dbcfb3e90588315bd5d0117239b1f4c.html",
    "material": "Ti",
    "type": "Abutment",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 디스크에서 어버트먼트를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントを加工するテンプレートです。"
      },
      {
        "ko": "유형이 적용된 어버트먼트 인터페이스와 적용되지 않은 인터페이스 모두에 사용합니다.",
        "en": "For both the Abutment interface that has categories applied and not applied.",
        "ja": "カテゴリが適用されたアバットメントインターフェースと適用されていないものの両方に使用します。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽(내벽/외벽)에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available(Inner/Outer walls)",
        "ja": "インプラントインターフェースの壁（内壁／外壁）に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5FR_L07",
        "en": "Category1: T18_M1.5FR_L07",
        "ja": "カテゴリ1 : T18_M1.5FR_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Fissure machining D1",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining [M0.6BXL03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 14
  },
  {
    "title": "Ti_Abutment bridge_Cat.10_B0.6 finish",
    "subtitle": "Abutment bridge_Cat.10_B0.6 finish",
    "source": "Ti_Abutment bridge_Cat 10_B0 6 finish 253cfb3e9058825dbca0016426124005.html",
    "material": "Ti",
    "type": "Abutment bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "250410 버전부터 …_EXT/INT 템플릿에 통합됨",
        "en": "Merged into the …_EXT/INT template from version 250410.",
        "ja": "バージョン250410以降、…_EXT/INTテンプレートに統合されています。",
        "sourceText": "250410 버전부터 …_EXT/INT 템플릿에 통합됨"
      },
      {
        "ko": "Ti 디스크에서 어버트먼트 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment bridge in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントブリッジを加工するテンプレートです。"
      },
      {
        "ko": "형상이 좁은 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface has a narrow shape.",
        "ja": "形状が狭いアバットメントインターフェース用です。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment bridge_Cat.10_F0.5 finish",
    "subtitle": "Abutment bridge_Cat.10_F0.5 finish",
    "source": "Ti_Abutment bridge_Cat 10_F0 5 finish 274cfb3e90588374a10601a98d6c2808.html",
    "material": "Ti",
    "type": "Abutment bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "250410 버전부터 …_EXT/INT 템플릿에 통합됨",
        "en": "Merged into the …_EXT/INT template from version 250410.",
        "ja": "バージョン250410以降、…_EXT/INTテンプレートに統合されています。",
        "sourceText": "250410 버전부터 …_EXT/INT 템플릿에 통합됨"
      },
      {
        "ko": "Ti 디스크에서 어버트먼트 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment bridge in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントブリッジを加工するテンプレートです。"
      },
      {
        "ko": "형상이 좁은 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface that has a narrow shape.",
        "ja": "形状が狭いアバットメントインターフェース用です。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment bridge_EXT/INT (Fast mode)",
    "subtitle": "Abutment bridge_EXT/INT (Fast mode)",
    "source": "Ti_Abutment bridge_EXT INT (Fast mode) fb7cfb3e905883eb9299819ad527be2e.html",
    "material": "Ti",
    "type": "Abutment bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 디스크에서 어버트먼트 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment bridge in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントブリッジを加工するテンプレートです。"
      },
      {
        "ko": "유형이 적용된 어버트먼트 인터페이스와 적용되지 않은 인터페이스에 사용합니다.",
        "en": "For the Abutment interface that has categories applied and not applied.",
        "ja": "カテゴリが適用されたアバットメントインターフェースと適用されていないものに使用します。"
      },
      {
        "ko": "단순한 디자인에만 사용합니다.",
        "en": "For the simple design only.",
        "ja": "シンプルなデザインにのみ使用します。"
      },
      {
        "ko": "공구 소모가 빨라질 수 있습니다.",
        "en": "It may facilitate tool consumption.",
        "ja": "工具の消耗が早まる場合があります。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "증분식 경계 옵셋",
            "en": "Incremental Boundary offset",
            "ja": "増分境界オフセット"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0BxL10] 3x (strauman no Cat)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M0.6BxL06] (strauman no Cat)",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Restmachining inside abutment bases_[M0.6Bx10] (strauman no Cat)",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 어버트먼트 베이스 내부의 잔삭을 가공합니다.",
            "en": "Restmachining process inside abutment bases with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でアバットメントベース内部の残削加工を行います。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip,(Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment bridge_EXT/INT",
    "subtitle": "Abutment bridge_EXT/INT",
    "source": "Ti_Abutment bridge_EXT INT 561cfb3e9058834da50e819732148f48.html",
    "material": "Ti",
    "type": "Abutment bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 디스크에서 어버트먼트 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment bridge in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントブリッジを加工するテンプレートです。"
      },
      {
        "ko": "유형이 적용된 어버트먼트 인터페이스와 적용되지 않은 인터페이스에 사용합니다.",
        "en": "For the Abutment interface that has categories applied and not applied.",
        "ja": "カテゴリが適用されたアバットメントインターフェースと適用されていないものに使用します。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "증분식 경계 옵셋",
            "en": "Incremental Boundary offset",
            "ja": "増分境界オフセット"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0BxL10] 3x (strauman no Cat)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M0.6BxL06] (strauman no Cat)",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment bridge_No Interface_B0.6_Hole Cat.1_Strauman",
    "subtitle": "Abutment bridge_No Interface_B0.6_Hole Cat.1_Strauman",
    "source": "Ti_Abutment bridge_No Interface_B0 6_Hole Cat 1_St c80cfb3e90588272a7268170fcc1ef8e.html",
    "material": "Ti",
    "type": "Abutment bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "250410 버전부터 …_EXT/INT 템플릿에 통합됨",
        "en": "Merged into the …_EXT/INT template from version 250410.",
        "ja": "バージョン250410以降、…_EXT/INTテンプレートに統合されています。",
        "sourceText": "250410 버전부터 …_EXT/INT 템플릿에 통합됨"
      },
      {
        "ko": "Ti 디스크에서 어버트먼트 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment bridge in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントブリッジを加工するテンプレートです。"
      },
      {
        "ko": "Staumann 시스템에서 형상이 좁은 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment interface that has a narrow shape in Staumann system.",
        "ja": "Staumannシステムの形状が狭いアバットメントインターフェース用です。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment crown",
    "subtitle": "Abutment crown",
    "source": "Ti_Abutment crown bf9cfb3e9058827d8e9a014b8d254459.html",
    "material": "Ti",
    "type": "Abutment crown",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントクラウンを加工するテンプレートです。"
      },
      {
        "ko": "유형이 적용된 어버트먼트 인터페이스와 적용되지 않은 인터페이스 모두에 사용합니다.",
        "en": "For both the Abutment interface that has categories applied and not applied.",
        "ja": "カテゴリが適用されたアバットメントインターフェースと適用されていないものの両方に使用します。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ],
        "imageId": "T28"
      }
    ],
    "processes": [
      {
        "title": "Fissure machining D1",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment Crown bridge_Cat.10_B0.6 finish",
    "subtitle": "Abutment Crown bridge_Cat.10_B0.6 finish",
    "source": "Ti_Abutment Crown bridge_Cat 10_B0 6 finish e6ccfb3e905882d0a7ec01382dab5f53.html",
    "material": "Ti",
    "type": "Abutment Crown bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "250410 버전부터 …_EXT/INT 템플릿에 통합됨",
        "en": "Merged into the …_EXT/INT template from version 250410.",
        "ja": "バージョン250410以降、…_EXT/INTテンプレートに統合されています。",
        "sourceText": "250410 버전부터 …_EXT/INT 템플릿에 통합됨"
      },
      {
        "ko": "Ti 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "형상이 좁은 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface has a narrow shape.",
        "ja": "形状が狭いアバットメントインターフェース用です。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment Crown bridge_Cat.10_F0.5 finish",
    "subtitle": "Abutment Crown bridge_Cat.10_F0.5 finish",
    "source": "Ti_Abutment Crown bridge_Cat 10_F0 5 finish 500cfb3e90588219ac7681bcdc91e629.html",
    "material": "Ti",
    "type": "Abutment Crown bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "250410 버전부터 …_EXT/INT 템플릿에 통합됨",
        "en": "Merged into the …_EXT/INT template from version 250410.",
        "ja": "バージョン250410以降、…_EXT/INTテンプレートに統合されています。",
        "sourceText": "250410 버전부터 …_EXT/INT 템플릿에 통합됨"
      },
      {
        "ko": "Ti 디스크에서 어버트먼트 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment bridge in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントブリッジを加工するテンプレートです。"
      },
      {
        "ko": "형상이 좁은 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface that has a narrow shape.",
        "ja": "形状が狭いアバットメントインターフェース用です。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment Crown bridge_EXT/INT (Fast mode)",
    "subtitle": "Abutment Crown bridge_EXT/INT (Fast mode)",
    "source": "Ti_Abutment Crown bridge_EXT INT (Fast mode) 2f4cfb3e9058838fa3c90140bbfb52a5.html",
    "material": "Ti",
    "type": "Abutment Crown bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "유형이 적용된 어버트먼트 인터페이스와 적용되지 않은 인터페이스에 사용합니다.",
        "en": "For the Abutment interface that has categories applied and not applied.",
        "ja": "カテゴリが適用されたアバットメントインターフェースと適用されていないものに使用します。"
      },
      {
        "ko": "단순한 디자인에만 사용합니다.",
        "en": "For the simple design only.",
        "ja": "シンプルなデザインにのみ使用します。"
      },
      {
        "ko": "공구 소모가 빨라질 수 있습니다.",
        "en": "It may facilitate tool consumption.",
        "ja": "工具の消耗が早まる場合があります。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "증분식 경계 옵셋",
            "en": "Incremental Boundary offset",
            "ja": "増分境界オフセット"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0BxL10] 3x (strauman no Cat)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Restmachining inside abutment bases_[M0.6Bx10] (strauman no Cat)",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 어버트먼트 베이스 내부의 잔삭을 가공합니다.",
            "en": "Restmachining process inside abutment bases with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でアバットメントベース内部の残削加工を行います。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip,(Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M0.6BxL06] (strauman no Cat)",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment Crown bridge_EXT/INT",
    "subtitle": "Abutment Crown bridge_EXT/INT",
    "source": "Ti_Abutment Crown bridge_EXT INT 1c6cfb3e905882098e5b819b578f113e.html",
    "material": "Ti",
    "type": "Abutment Crown bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "유형이 적용된 어버트먼트 인터페이스와 적용되지 않은 인터페이스에 사용합니다.",
        "en": "For the Abutment interface that has categories applied and not applied.",
        "ja": "カテゴリが適用されたアバットメントインターフェースと適用されていないものに使用します。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "증분식 경계 옵셋",
            "en": "Incremental Boundary offset",
            "ja": "増分境界オフセット"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0BxL10] 3x (strauman no Cat)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M0.6BxL06] (strauman no Cat)",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment Crown bridge_NCS -(highness)",
    "subtitle": "Abutment Crown bridge_NCS -(highness)",
    "source": "Ti_Abutment Crown bridge_NCS -(highness) f50cfb3e9058820684e2817fdfa46eb7.html",
    "material": "Ti",
    "type": "Abutment Crown bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "Highness 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface of the Highness system",
        "ja": "Highnessシステムのアバットメントインターフェース用です。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "증분식 경계 옵셋",
            "en": "Incremental Boundary offset",
            "ja": "増分境界オフセット"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0BxL10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust (only X&Y axes) the fit inside of abutment bases",
            "ja": "余裕量XY：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06]_(highness)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust (only X&Y axes) the fit inside of abutment bases",
            "ja": "余裕量XY：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment Crown bridge_NCS -(M-Fix)",
    "subtitle": "Abutment Crown bridge_NCS -(M-Fix)",
    "source": "Ti_Abutment Crown bridge_NCS -(M-Fix) 90dcfb3e90588346b40981a1cad07e36.html",
    "material": "Ti",
    "type": "Abutment Crown bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "Highness 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface of the Highness system",
        "ja": "Highnessシステムのアバットメントインターフェース用です。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "증분식 경계 옵셋",
            "en": "Incremental Boundary offset",
            "ja": "増分境界オフセット"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0BxL10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust (only X&Y axes) the fit inside of abutment bases",
            "ja": "余裕量XY：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.5RxL07]_M-Fix",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust (only X&Y axes) the fit inside of abutment bases",
            "ja": "余裕量XY：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment Crown bridge_No Interface_B0.6_Hole Cat.1_Strauman",
    "subtitle": "Abutment Crown bridge_No Interface_B0.6_Hole Cat.1_Strauman",
    "source": "Ti_Abutment Crown bridge_No Interface_B0 6_Hole Ca 6e8cfb3e905882c084e601199ea0fc05.html",
    "material": "Ti",
    "type": "Abutment Crown bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "250410 버전부터 …_EXT/INT 템플릿에 통합됨",
        "en": "Merged into the …_EXT/INT template from version 250410.",
        "ja": "バージョン250410以降、…_EXT/INTテンプレートに統合されています。",
        "sourceText": "250410 버전부터 …_EXT/INT 템플릿에 통합됨"
      },
      {
        "ko": "Ti 디스크에서 어버트먼트 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment bridge in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントブリッジを加工するテンプレートです。"
      },
      {
        "ko": "Staumann 시스템에서 형상이 좁은 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment interface that has a narrow shape in Staumann system.",
        "ja": "Staumannシステムの形状が狭いアバットメントインターフェース用です。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Abutment Crown_NCS -(highness)",
    "subtitle": "Abutment Crown_NCS -(highness)",
    "source": "Ti_Abutment Crown_NCS -(highness) 385cfb3e9058821aa117019e68099100.html",
    "material": "Ti",
    "type": "Abutment Crown",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントクラウンを加工するテンプレートです。"
      },
      {
        "ko": "Highness 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface of the Highness system",
        "ja": "Highnessシステムのアバットメントインターフェース用です。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "증분식 경계 옵셋",
            "en": "Incremental Boundary offset",
            "ja": "増分境界オフセット"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0BxL10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust (only X&Y axes) the fit inside of abutment bases",
            "ja": "余裕量XY：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06]_(highness)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust (only X&Y axes) the fit inside of abutment bases",
            "ja": "余裕量XY：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 15
  },
  {
    "title": "Ti_Abutment Crown_NCS -(M-Fix)",
    "subtitle": "Abutment Crown_NCS -(M-Fix)",
    "source": "Ti_Abutment Crown_NCS -(M-Fix) 456cfb3e905882a79122016071e16734.html",
    "material": "Ti",
    "type": "Abutment Crown",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Ti 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントクラウンを加工するテンプレートです。"
      },
      {
        "ko": "M-Fix 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface of the M-Fix system",
        "ja": "M-Fixシステムのアバットメントインターフェース用です。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "증분식 경계 옵셋",
            "en": "Incremental Boundary offset",
            "ja": "増分境界オフセット"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0BxL10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust (only X&Y axes) the fit inside of abutment bases",
            "ja": "余裕量XY：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.5RxL07]_M-Fix",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust (only X&Y axes) the fit inside of abutment bases",
            "ja": "余裕量XY：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 15
  },
  {
    "title": "Ti_Connector_cut",
    "subtitle": "Connector_cut",
    "source": "Ti_Connector_cut acacfb3e905882608cb601b86f022742.html",
    "material": "Ti",
    "type": "Connector",
    "family": "Other",
    "conditions": [
      {
        "ko": "Ti 디스크에서 커넥터만 가공하는 템플릿입니다.",
        "en": "This is for milling connectors in the Ti. Disc only.",
        "ja": "Tiディスクでコネクターのみを加工するテンプレートです。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "증분식 경계 옵셋",
            "en": "Incremental Boundary offset",
            "ja": "増分境界オフセット"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 1
  },
  {
    "title": "Ti_Coping Bridge_5X",
    "subtitle": "Coping Bridge_5X",
    "source": "Ti_Coping Bridge_5X e5acfb3e90588394b7f001f39971f9a5.html",
    "material": "Ti",
    "type": "Coping Bridge",
    "family": "Coping",
    "conditions": [
      {
        "ko": "Ti 디스크에서 코핑 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling a Coping bridge in the Ti. Disc.",
        "ja": "Tiディスクでコーピングブリッジを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 3·4 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 3 and 4, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ3・4および裂溝加工用です。"
          }
        ]
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 직경이 2.25mm를 초과하고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "en": "Optional, For the screw hole which has a wide diameter (bigger than 2.25 mm) and longer length (more than 11 mm).",
            "ja": "任意：直径が2.25mmを超え、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 직경이 2.25mm 미만이고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "en": "Optional, For the screw hole which has a narrow diameter (smaller than 2.25 mm) and longer length (more than 11 mm).",
            "ja": "任意：直径が2.25mm未満で、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[M1.0BxL10] 5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.0BxL10] 3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside long cavities_[M1.0Bx10]_8x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 분리된 8축 움직임으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by separated 8-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、分離した8軸の動きで長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Finishing inside long cavities_[M1.0Bx10]_3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0B_L10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Rest machining outer areas cavity side_[M1.0BBx10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측 외부 영역의 잔삭을 가공합니다.",
            "en": "Rest machining process outer areas at cavity side with 1.0 mm diameter tool.",
            "ja": "直径1.0mmの工具でキャビティ側の外側領域の残削加工を行います。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by the path of insertion that was set with 1.0mm diameter flat tool",
            "ja": "直径1.0mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 7
  },
  {
    "title": "Ti_Coping_5X",
    "subtitle": "Coping_5X",
    "source": "Ti_Coping_5X 472cfb3e90588217972481358d688a32.html",
    "material": "Ti",
    "type": "Coping",
    "family": "Coping",
    "conditions": [
      {
        "ko": "Ti 디스크에서 코핑을 가공하는 템플릿입니다.",
        "en": "This is for milling a Coping in the Ti. Disc.",
        "ja": "Tiディスクでコーピングを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 3·4 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 3 and 4, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ3・4および裂溝加工用です。"
          }
        ]
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 직경이 2.25mm를 초과하고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "en": "Optional, For the screw hole which has a wide diameter (bigger than 2.25 mm) and longer length (more than 11 mm).",
            "ja": "任意：直径が2.25mmを超え、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 직경이 2.25mm 미만이고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "en": "Optional, For the screw hole which has a narrow diameter (smaller than 2.25 mm) and longer length (more than 11 mm).",
            "ja": "任意：直径が2.25mm未満で、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[M1.0BxL10] 5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.0BxL10] 3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0B_L10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by the path of insertion that was set with 1.0mm diameter flat tool",
            "ja": "直径1.0mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 7
  },
  {
    "title": "Ti_Crown Bridge_5X",
    "subtitle": "Crown Bridge_5X",
    "source": "Ti_Crown Bridge_5X acbcfb3e90588346abf701e72d2dbb61.html",
    "material": "Ti",
    "type": "Crown Bridge",
    "family": "Bridge",
    "conditions": [
      {
        "ko": "Ti 디스크에서 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown bridge in the Ti. Disc.",
        "ja": "Tiディスクでクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 3·4 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 3 and 4, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ3・4および裂溝加工用です。"
          }
        ]
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 직경이 2.25mm를 초과하고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "en": "Optional, For the screw hole which has a wide diameter (bigger than 2.25 mm) and longer length (more than 11 mm).",
            "ja": "任意：直径が2.25mmを超え、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 직경이 2.25mm 미만이고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "en": "Optional, For the screw hole which has a narrow diameter (smaller than 2.25 mm) and longer length (more than 11 mm).",
            "ja": "任意：直径が2.25mm未満で、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[M1.0BxL10] 5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.0BxL10] 3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside long cavities_[M1.0Bx10]_8x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 분리된 8축 움직임으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by separated 8-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、分離した8軸の動きで長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Finishing inside long cavities_[M1.0Bx10]_3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0B_L10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Rest machining outer areas cavity side_[M1.0BBx10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측 외부 영역의 잔삭을 가공합니다.",
            "en": "Rest machining process outer areas at cavity side with 1.0 mm diameter tool.",
            "ja": "直径1.0mmの工具でキャビティ側の外側領域の残削加工を行います。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by the path of insertion that was set with 1.0mm diameter flat tool",
            "ja": "直径1.0mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 7
  },
  {
    "title": "Ti_Crown_5X",
    "subtitle": "Crown_5X",
    "source": "Ti_Crown_5X 484cfb3e9058821ebd5e010e9b7a3901.html",
    "material": "Ti",
    "type": "Crown",
    "family": "Crown",
    "conditions": [
      {
        "ko": "Ti 디스크에서 크라운을 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown in the Ti. Disc.",
        "ja": "Tiディスクでクラウンを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 3·4 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 3 and 4, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ3・4および裂溝加工用です。"
          }
        ]
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 직경이 2.25mm를 초과하고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "en": "Optional, For the screw hole which has a wide diameter (bigger than 2.25 mm) and longer length (more than 11 mm).",
            "ja": "任意：直径が2.25mmを超え、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 직경이 2.25mm 미만이고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "en": "Optional, For the screw hole which has a narrow diameter (smaller than 2.25 mm) and longer length (more than 11 mm).",
            "ja": "任意：直径が2.25mm未満で、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 코핑 내부의 평면용입니다.",
            "en": "Optional, For the flat plane inside of copings",
            "ja": "任意：コーピング内部の平面用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[M1.0BxL10] 5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.0BxL10] 3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0B_L10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by the path of insertion that was set with 1.0mm diameter flat tool",
            "ja": "直径1.0mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 8
  },
  {
    "title": "Ti_Interface_Finishing (expansion)",
    "subtitle": "Interface_Finishing (expansion)",
    "source": "Ti_Interface_Finishing (expansion) a3dcfb3e905883dd8f5081af3344801b.html",
    "material": "Ti",
    "type": "Interface",
    "family": "Other",
    "conditions": [
      {
        "ko": "Ti 디스크에서 인터페이스 벽을 확장 가공하는 전용 템플릿입니다.",
        "en": "This is only for expansion milling wall of interface in the Ti. Disc.",
        "ja": "Tiディスクでインターフェースの壁を拡張加工する専用テンプレートです。"
      },
      {
        "ko": "유형이 적용된 어버트먼트 인터페이스와 적용되지 않은 인터페이스에 사용합니다.",
        "en": "For the Abutment interface that has categories applied and not applied.",
        "ja": "カテゴリが適用されたアバットメントインターフェースと適用されていないものに使用します。"
      }
    ],
    "uda": [],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Screw channel machining_occlusal_[M1.5FRx15]",
        "descriptions": [
          {
            "ko": "직경 1.5mm 플랫 라운드 공구로 교합면 측(0°)의 스크류 채널을 가공합니다.",
            "en": "Occlusal(0º) side, screw channel machining process with flat round 1.5mm diameter tool",
            "ja": "直径1.5mmのフラットラウンド工具で咬合面側（0°）のスクリューチャンネルを加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "스크류 채널 반경 오프셋: 교합면 측 스크류 채널의 반경을 조정할 수 있습니다.",
            "en": "screw channel radius offset : Available to adjust the radius occlusal side of screw channel.",
            "ja": "スクリューチャンネルの半径オフセット：咬合面側のスクリューチャンネルの半径を調整できます。"
          }
        ]
      },
      {
        "title": "Screw channel machining_occlusal(Angled)_[M1.5FRx15]",
        "descriptions": [
          {
            "ko": "직경 1.5mm 플랫 라운드 공구로 교합면 측(0°)의 앵글드 스크류 채널을 가공합니다.",
            "en": "Occlusal(0º) side, angled screw channel machining process with flat round 1.5mm diameter tool",
            "ja": "直径1.5mmのフラットラウンド工具で咬合面側（0°）のアングルドスクリューチャンネルを加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "스크류 채널 반경 오프셋: 교합면 측 스크류 채널의 반경을 조정할 수 있습니다.",
            "en": "screw channel radius offset : Available to adjust the radius occlusal side of screw channel.",
            "ja": "スクリューチャンネルの半径オフセット：咬合面側のスクリューチャンネルの半径を調整できます。"
          }
        ]
      },
      {
        "title": "Screw channel machining_cavity_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "직경 1.5mm 플랫 라운드 공구로 캐비티 측(180°)의 스크류 채널을 가공합니다.",
            "en": "Cavity(180º) side, screw channel machining process with flat round 1.5mm diameter tool",
            "ja": "直径1.5mmのフラットラウンド工具でキャビティ側（180°）のスクリューチャンネルを加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "스크류 채널 반경 오프셋: 캐비티 측 스크류 채널의 반경을 조정할 수 있습니다.",
            "en": "screw channel radius offset : Available to adjust the radius cavity side of screw channel",
            "ja": "スクリューチャンネルの半径オフセット：キャビティ側のスクリューチャンネルの半径を調整できます。"
          }
        ]
      },
      {
        "title": "Cut/Reduce connector_[M2.0B_L12] -CAV",
        "descriptions": [
          {
            "ko": "직경 2.0mm 공구로 캐비티 측(180°)의 커넥터를 가공합니다.",
            "en": "Cavity side(180º), connector milling process with 2.0mm diameter tool",
            "ja": "直径2.0mmの工具でキャビティ側（180°）のコネクターを加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Screw Head (T-cut)",
    "subtitle": "Screw Head (T-cut)",
    "source": "Ti_Screw Head (T-cut) f98cfb3e9058832f8435011eb2a70391.html",
    "material": "Ti",
    "type": "Screw Head (T-cut)",
    "family": "Other",
    "conditions": [
      {
        "ko": "Ti 디스크에서 스크류 헤드를 가공하는 전용 템플릿입니다.",
        "en": "This is only for milling screw head in the Ti. Disc.",
        "ja": "Tiディスクでスクリューヘッドを加工する専用テンプレートです。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": false,
        "comments": [
          {
            "ko": "캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Cut/Reduce connector_[M2.0B_L12] -CAV",
        "descriptions": [
          {
            "ko": "직경 2.0mm 공구로 캐비티 측(180°)의 커넥터를 가공합니다.",
            "en": "Cavity side(180º), connector milling process with 2.0mm diameter tool",
            "ja": "直径2.0mmの工具でキャビティ側（180°）のコネクターを加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 1
  },
  {
    "title": "Ti_Screw Hole Finishing (expansion)",
    "subtitle": "Screw Hole Finishing (expansion)",
    "source": "Ti_Screw Hole Finishing (expansion) fa1cfb3e9058827ba0bf01ad1ef4af7c.html",
    "material": "Ti",
    "type": "Screw Hole Finishing (expansion)",
    "family": "Other",
    "conditions": [
      {
        "ko": "Ti 디스크에서 어버트먼트 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment bridge in the Ti. Disc.",
        "ja": "Tiディスクでアバットメントブリッジを加工するテンプレートです。"
      },
      {
        "ko": "유형이 적용된 어버트먼트 인터페이스와 적용되지 않은 인터페이스에 사용합니다.",
        "en": "For the Abutment interface that has categories applied and not applied.",
        "ja": "カテゴリが適用されたアバットメントインターフェースと適用されていないものに使用します。"
      },
      {
        "ko": "단순한 디자인에만 사용합니다.",
        "en": "For the simple design only.",
        "ja": "シンプルなデザインにのみ使用します。"
      },
      {
        "ko": "공구 소모가 빨라질 수 있습니다.",
        "en": "It may facilitate tool consumption.",
        "ja": "工具の消耗が早まる場合があります。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2: T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4:T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ja": "任意：2.0mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ja": "任意：1.8mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ja": "任意：1.6mmスクリューホールのねじ加工専用です。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "증분식 경계 옵셋",
            "en": "Incremental Boundary offset",
            "ja": "増分境界オフセット"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0BxL10] 3x (strauman no Cat)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M0.6BxL06] (strauman no Cat)",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Restmachining inside abutment bases_[M0.6Bx10] (strauman no Cat)",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 어버트먼트 베이스 내부의 잔삭을 가공합니다.",
            "en": "Restmachining process inside abutment bases with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でアバットメントベース内部の残削加工を行います。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip,(Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 18
  },
  {
    "title": "Ti_Userdefined areas_Check (not mill)",
    "subtitle": "Userdefined areas_Check (not mill)",
    "source": "Ti_Userdefined areas_Check (not mill) 998cfb3e9058837ab8c18187bf72871d.html",
    "material": "Ti",
    "type": "Userdefined areas",
    "family": "Other",
    "conditions": [
      {
        "ko": "Ti 디스크에서 실제 가공 없이 사용자 정의 영역의 계산 가능 여부만 확인하는 템플릿입니다.",
        "en": "This is not for milling just to check whether the user defined area can be calculated in the Ti. Disc.",
        "ja": "Tiディスクで実際の加工を行わず、ユーザー定義領域を計算できるかのみを確認するテンプレートです。"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "증분식 경계 옵셋",
            "en": "Incremental Boundary offset",
            "ja": "増分境界オフセット"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 0
  },
  {
    "title": "WAX - Coping_5X",
    "subtitle": "Coping_5X",
    "source": "WAX - Coping_5X 277cfb3e905883b4aa00014fe42e014b.html",
    "material": "Wax",
    "type": "Coping",
    "family": "Coping",
    "conditions": [
      {
        "ko": "Wax 디스크에서 코핑을 가공하는 템플릿입니다.",
        "en": "This is for milling a Coping in the Wax Disc.",
        "ja": "Waxディスクでコーピングを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 열구 가공 및 코핑 내부 정삭용입니다.",
            "en": "Optional, Fissure machining and Finishing inside copings",
            "ja": "任意：裂溝加工およびコーピング内部の仕上げ用です。"
          }
        ]
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 열구 가공용입니다.",
            "en": "Optional, Fissure machining",
            "ja": "任意：裂溝加工用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "Incremental Boundary offset (가공 경계 오프셋).",
            "en": "Incremental Boundary offset.",
            "ja": "Incremental Boundary offset（加工境界のオフセット）。"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          },
          {
            "ko": "Incremental Boundary angle (가공 경계 각도).",
            "en": "Incremental Boundary angle.",
            "ja": "Incremental Boundary angle（加工境界の角度）。"
          },
          {
            "ko": "가공 경계의 각도를 조정할 수 있습니다.",
            "en": "You can adjust milling boundary angle.",
            "ja": "加工境界の角度を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside coping D1 5x - 180",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でキャビティ側（180°）のコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside coping D1 3+2 - 180",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でキャビティ側（180°）のコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings FE1.5 -180",
        "descriptions": [
          {
            "ko": "직경 1.5mm 플랫 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside coping with 1.5mm diameter flat tool",
            "ja": "直径1.5mmのフラット工具でキャビティ側（180°）のコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining D0.6 - 0",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining D0.3 - 0",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "WAX - Crown_5X_D0.6",
    "subtitle": "Crown_5X_D0.6",
    "source": "WAX - Crown_5X_D0 6 c10cfb3e9058823197338196814fbf6d.html",
    "material": "Wax",
    "type": "Crown",
    "family": "Crown",
    "conditions": [
      {
        "ko": "Wax 디스크에서 크라운을 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown in the Wax Disc.",
        "ja": "Waxディスクでクラウンを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      },
      {
        "ko": "최종 정삭에 Z0.6B 공구를 사용합니다.",
        "en": "The Z0.6B tool is carried out at the last finishing.",
        "ja": "最終仕上げにZ0.6B工具を使用します。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "Incremental Boundary offset (가공 경계 오프셋).",
            "en": "Incremental Boundary offset.",
            "ja": "Incremental Boundary offset（加工境界のオフセット）。"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          },
          {
            "ko": "Incremental Boundary angle (가공 경계 각도).",
            "en": "Incremental Boundary angle.",
            "ja": "Incremental Boundary angle（加工境界の角度）。"
          },
          {
            "ko": "가공 경계의 각도를 조정할 수 있습니다.",
            "en": "You can adjust milling boundary angle.",
            "ja": "加工境界の角度を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside coping D1 5x - 180",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でキャビティ側（180°）のコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside coping D1 3+2 - 180",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でキャビティ側（180°）のコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings FE1.5 -180",
        "descriptions": [
          {
            "ko": "직경 1.5mm 플랫 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside coping with 1.5mm diameter flat tool",
            "ja": "直径1.5mmのフラット工具でキャビティ側（180°）のコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining D0.6 - 0",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining D0.3 - 0",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Wax_Coping bridge_5X",
    "subtitle": "Coping bridge_5X",
    "source": "Wax_Coping bridge_5X b04cfb3e9058833ea7fb818551f66b95.html",
    "material": "Wax",
    "type": "Coping bridge",
    "family": "Coping",
    "conditions": [
      {
        "ko": "Wax 디스크에서 코핑 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling a Coping bridge in the Wax Disc.",
        "ja": "Waxディスクでコーピングブリッジを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 열구 가공 및 코핑 내부 정삭용입니다.",
            "en": "Optional, Fissure machining and Finishing inside copings",
            "ja": "任意：裂溝加工およびコーピング内部の仕上げ用です。"
          }
        ]
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 열구 가공용입니다.",
            "en": "Optional, Fissure machining",
            "ja": "任意：裂溝加工用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "Incremental Boundary offset (가공 경계 오프셋).",
            "en": "Incremental Boundary offset.",
            "ja": "Incremental Boundary offset（加工境界のオフセット）。"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          },
          {
            "ko": "Incremental Boundary angle (가공 경계 각도).",
            "en": "Incremental Boundary angle.",
            "ja": "Incremental Boundary angle（加工境界の角度）。"
          },
          {
            "ko": "가공 경계의 각도를 조정할 수 있습니다.",
            "en": "You can adjust milling boundary angle.",
            "ja": "加工境界の角度を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside coping D1 5x - 180",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でキャビティ側（180°）のコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings FE1.5 -180",
        "descriptions": [
          {
            "ko": "직경 1.5mm 플랫 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside coping with 1.5mm diameter flat tool",
            "ja": "直径1.5mmのフラット工具でキャビティ側（180°）のコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside coping D1 3+2 - 180",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でキャビティ側（180°）のコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining D0.6 - 0",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining D0.3 - 0",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Wax_Crown bridge_5X_D0.6",
    "subtitle": "Crown bridge_5X_D0.6",
    "source": "Wax_Crown bridge_5X_D0 6 a58cfb3e9058836495bf8142d8a54d89.html",
    "material": "Wax",
    "type": "Crown bridge",
    "family": "Bridge",
    "conditions": [
      {
        "ko": "Wax 디스크에서 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown bridge in the Wax Disc.",
        "ja": "Waxディスクでクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "Incremental Boundary offset (가공 경계 오프셋).",
            "en": "Incremental Boundary offset.",
            "ja": "Incremental Boundary offset（加工境界のオフセット）。"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          },
          {
            "ko": "Incremental Boundary angle (가공 경계 각도).",
            "en": "Incremental Boundary angle.",
            "ja": "Incremental Boundary angle（加工境界の角度）。"
          },
          {
            "ko": "가공 경계의 각도를 조정할 수 있습니다.",
            "en": "You can adjust milling boundary angle.",
            "ja": "加工境界の角度を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside coping D1 5x - 180",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でキャビティ側（180°）のコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside coping D1 3+2 - 180",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でキャビティ側（180°）のコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings FE1.5 -180",
        "descriptions": [
          {
            "ko": "직경 1.5mm 플랫 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside coping with 1.5mm diameter flat tool",
            "ja": "直径1.5mmのフラット工具でキャビティ側（180°）のコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside inlays/ onlays D1 - 180",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측(180°) 인레이/온레이 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside inlay/ onlay with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でキャビティ側（180°）のインレー／オンレー内部を仕上げます。"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining D0.6 - 0",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining D0.3 - 0",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Wax_Inlay/Onlay -D0.6",
    "subtitle": "Inlay/Onlay -D0.6",
    "source": "Wax_Inlay Onlay -D0 6 410cfb3e905883adbc5d8143f04eabf5.html",
    "material": "Wax",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "conditions": [
      {
        "ko": "Wax 디스크에서 인레이/온레이를 가공하는 템플릿입니다.",
        "en": "This is for milling an Inlay/Onlay in the Wax Disc.",
        "ja": "Waxディスクでインレー／オンレーを加工するテンプレートです。"
      },
      {
        "ko": "최종 정삭에 Z0.6B 공구를 사용합니다.",
        "en": "The Z0.6B tool is carried out at the last finishing.",
        "ja": "最終仕上げにZ0.6B工具を使用します。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 열구 가공용입니다.",
            "en": "Optional, For the Fissure machining",
            "ja": "任意：裂溝加工用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "Incremental Boundary offset (가공 경계 오프셋).",
            "en": "Incremental Boundary offset.",
            "ja": "Incremental Boundary offset（加工境界のオフセット）。"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          },
          {
            "ko": "Incremental Boundary angle (가공 경계 각도).",
            "en": "Incremental Boundary angle.",
            "ja": "Incremental Boundary angle（加工境界の角度）。"
          },
          {
            "ko": "가공 경계의 각도를 조정할 수 있습니다.",
            "en": "You can adjust milling boundary angle.",
            "ja": "加工境界の角度を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside coping D1 - 180",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측(180°) 코핑 내부를 정삭합니다.",
            "en": "Finishing process at cavity side(180º) inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でキャビティ側（180°）のコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining D0.6 - 0",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Overall rest machining cavity side D0.6 - 180",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 캐비티 측(180°)의 잔삭을 가공합니다.",
            "en": "Rest machining process cavity side(180º) with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でキャビティ側（180°）の残削加工を行います。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining D0.3 - 0",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Zirconia_Abutment crown bridge_3+2X",
    "subtitle": "Abutment crown bridge_3+2X",
    "source": "Zirconia_Abutment crown bridge_3+2X cd0cfb3e905883a399b3019c52cc4495.html",
    "material": "Zirconia",
    "type": "Abutment crown bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the Zirconia Disc.",
        "ja": "Zirconiaディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "단일 삽입 방향(3+2축)으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a single insertion direction (3+2-axis).",
        "ja": "単一の挿入方向（3+2軸）でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。"
          }
        ]
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07] normal",
        "descriptions": [
          {
            "ko": "직경 1.5mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.5mm diameter tool",
            "ja": "直径1.5mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust(only X&Y axes) the fit cavity side.",
            "ja": "余裕量XY：X軸とY軸のみを変更してキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 13
  },
  {
    "title": "Zirconia_Abutment crown bridge_5X",
    "subtitle": "Abutment crown bridge_5X",
    "source": "Zirconia_Abutment crown bridge_5X 625cfb3e9058833bbd590174503adf42.html",
    "material": "Zirconia",
    "type": "Abutment crown bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the Zirconia Disc.",
        "ja": "Zirconiaディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。"
          }
        ]
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07] normal",
        "descriptions": [
          {
            "ko": "직경 1.5mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.5mm diameter tool",
            "ja": "直径1.5mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust(only X&Y axes) the fit cavity side.",
            "ja": "余裕量XY：X軸とY軸のみを変更してキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 13
  },
  {
    "title": "Zirconia_Abutment Crown Bridge_NCS (highnees)",
    "subtitle": "Abutment Crown Bridge_NCS (highnees)",
    "source": "Zirconia_Abutment Crown Bridge_NCS (highnees) 2f5cfb3e9058835298ef816bdae3a863.html",
    "material": "Zirconia",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the Zirconia Disc.",
        "ja": "Zirconiaディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      },
      {
        "ko": "Highness 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface of the Highness system",
        "ja": "Highnessシステムのアバットメントインターフェース用です。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。"
          }
        ]
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[Z1.0Bx15]_3+2x (highness)",
        "descriptions": [
          {
            "ko": "직경 1.5mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.5mm diameter tool",
            "ja": "直径1.5mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust(only X&Y axes) the fit cavity side.",
            "ja": "余裕量XY：X軸とY軸のみを変更してキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06]_3+2x (highness)",
        "descriptions": [
          {
            "ko": "직경 1.5mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.5mm diameter tool",
            "ja": "直径1.5mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust(only X&Y axes) the fit cavity side.",
            "ja": "余裕量XY：X軸とY軸のみを変更してキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z0.6Bx08]-Long time",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Restmachining inside copings_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 10
  },
  {
    "title": "Zirconia_Abutment Crown Bridge_NCS (M-Fix)",
    "subtitle": "Abutment Crown Bridge_NCS (M-Fix)",
    "source": "Zirconia_Abutment Crown Bridge_NCS (M-Fix) f54cfb3e90588299b68881b822a11886.html",
    "material": "Zirconia",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the Zirconia Disc.",
        "ja": "Zirconiaディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      },
      {
        "ko": "M-Fix 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface of the M-Fix system",
        "ja": "M-Fixシステムのアバットメントインターフェース用です。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。"
          }
        ]
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[Z1.0Bx15]_3+2x (M-Fix)",
        "descriptions": [
          {
            "ko": "직경 1.5mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.5mm diameter tool",
            "ja": "直径1.5mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust(only X&Y axes) the fit cavity side.",
            "ja": "余裕量XY：X軸とY軸のみを変更してキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z0.6Bx08]-Long time",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 10
  },
  {
    "title": "Zirconia_Abutment Crown Bridge_NCS (Megalink)",
    "subtitle": "Abutment Crown Bridge_NCS (Megalink)",
    "source": "Zirconia_Abutment Crown Bridge_NCS (Megalink) 97bcfb3e905883f492f401711a910dcd.html",
    "material": "Zirconia",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the Zirconia Disc.",
        "ja": "Zirconiaディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      },
      {
        "ko": "Megalink 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface of the Megalink system",
        "ja": "Megalinkシステムのアバットメントインターフェース用です。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。"
          }
        ]
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[Z1.0Bx15]_3+2x (highness)",
        "descriptions": [
          {
            "ko": "직경 1.5mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.5mm diameter tool",
            "ja": "直径1.5mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust(only X&Y axes) the fit cavity side.",
            "ja": "余裕量XY：X軸とY軸のみを変更してキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z0.6Bx08]-Long time",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Restmachining inside copings_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 10
  },
  {
    "title": "Zirconia_Abutment Crown_NCS (highnees)",
    "subtitle": "Abutment Crown_NCS (highnees)",
    "source": "Zirconia_Abutment Crown_NCS (highnees) 36ecfb3e90588381acfb81659b5b6565.html",
    "material": "Zirconia",
    "type": "Abutment Crown",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the Zirconia Disc.",
        "ja": "Zirconiaディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "Highness 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface of the Highness system",
        "ja": "Highnessシステムのアバットメントインターフェース用です。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。"
          }
        ]
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside abutment bases_[Z1.0Bx15]_3+2x (highness)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust(only X&Y axes) the fit cavity side.",
            "ja": "余裕量XY：X軸とY軸のみを変更してキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06]_3+2x (highness)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 플랫 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter flat tool",
            "ja": "直径1.0mmのフラット工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust(only X&Y axes) the fit cavity side.",
            "ja": "余裕量XY：X軸とY軸のみを変更してキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 10
  },
  {
    "title": "Zirconia_Abutment Crown_NCS (M-Fix)",
    "subtitle": "Abutment Crown_NCS (M-Fix)",
    "source": "Zirconia_Abutment Crown_NCS (M-Fix) 999cfb3e905883998b9b01b5b4388d18.html",
    "material": "Zirconia",
    "type": "Abutment Crown",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the Zirconia Disc.",
        "ja": "Zirconiaディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "M-Fix 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface of the M-Fix system",
        "ja": "M-Fixシステムのアバットメントインターフェース用です。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。"
          }
        ]
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside abutment bases_[Z1.0Bx15]_3+2x (M-Fix)",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust(only X&Y axes) the fit cavity side.",
            "ja": "余裕量XY：X軸とY軸のみを変更してキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 10
  },
  {
    "title": "Zirconia_Abutment Crown_NCS (Megalink)",
    "subtitle": "Abutment Crown_NCS (Megalink)",
    "source": "Zirconia_Abutment Crown_NCS (Megalink) 07bcfb3e90588252b17801267ea80609.html",
    "material": "Zirconia",
    "type": "Abutment Crown",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the Zirconia Disc.",
        "ja": "Zirconiaディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "Highness 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For the Abutment Interface of the Highness system",
        "ja": "Highnessシステムのアバットメントインターフェース用です。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
      }
    ],
    "interfaces": [
      {
        "ko": "임플란트 인터페이스 벽에 사용할 수 있습니다.",
        "en": "Walls of implant interfaces available",
        "ja": "インプラントインターフェースの壁に使用できます。"
      },
      {
        "ko": "유형 1 : T18_M1.5R_L07",
        "en": "Category1: T18_M1.5R_L07",
        "ja": "カテゴリ1 : T18_M1.5R_L07"
      },
      {
        "ko": "유형 2 : T17_M1.5F_L07",
        "en": "Category2: T17_M1.5F_L07",
        "ja": "カテゴリ2 : T17_M1.5F_L07"
      },
      {
        "ko": "유형 3 : T11_M1.5B_L10",
        "en": "Category3: T11_M1.5B_L10",
        "ja": "カテゴリ3 : T11_M1.5B_L10"
      },
      {
        "ko": "유형 4 : T12_M1.0B_L10",
        "en": "Category4: T12_M1.0B_L10",
        "ja": "カテゴリ4 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 5 : T19_M1.0F_L06",
        "en": "Category5: T19_M1.0F_L06",
        "ja": "カテゴリ5 : T19_M1.0F_L06"
      },
      {
        "ko": "유형 6 : T13_M0.6B_L03",
        "en": "Category6: T13_M0.6B_L03",
        "ja": "カテゴリ6 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 7 : T20_M0.5F_L06",
        "en": "Category7: T20_M0.5F_L06",
        "ja": "カテゴリ7 : T20_M0.5F_L06"
      }
    ],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。"
          }
        ]
      },
      {
        "id": "T13",
        "name": "M0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が1.5mmを超えるアングルドスクリューホール用です。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside abutment bases_[Z1.0Bx15]_3+2x (highness)",
        "descriptions": [
          {
            "ko": "직경 1.5mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.5mm diameter tool",
            "ja": "直径1.5mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust(only X&Y axes) the fit cavity side.",
            "ja": "余裕量XY：X軸とY軸のみを変更してキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 10
  },
  {
    "title": "Zirconia_Coping bridge_5X",
    "subtitle": "Coping bridge_5X",
    "source": "Zirconia_Coping bridge_5X c3dcfb3e90588324b9d301183bfe1df7.html",
    "material": "Zirconia",
    "type": "Coping bridge",
    "family": "Coping",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 코핑 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling a Coping bridge in the Zirconia Disc.",
        "ja": "Zirconiaディスクでコーピングブリッジを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 열구 가공 및 코핑 내부 정삭용입니다.",
            "en": "Optional, Fissure machining and Finishing inside copings",
            "ja": "任意：裂溝加工およびコーピング内部の仕上げ用です。"
          }
        ]
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 열구 가공용입니다.",
            "en": "Optional, Fissure machining",
            "ja": "任意：裂溝加工用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "직경 1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.5mm diameter flat tool",
            "ja": "直径1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Zirconia_Coping_5X",
    "subtitle": "Coping_5X",
    "source": "Zirconia_Coping_5X 1e9cfb3e9058822f912381841b3d1659.html",
    "material": "Zirconia",
    "type": "Coping",
    "family": "Coping",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 코핑을 가공하는 템플릿입니다.",
        "en": "This is for milling a Coping in the Zirconia Disc.",
        "ja": "Zirconiaディスクでコーピングを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 열구 가공 및 코핑 내부 정삭용입니다.",
            "en": "Optional, Fissure machining and Finishing inside copings",
            "ja": "任意：裂溝加工およびコーピング内部の仕上げ用です。"
          }
        ]
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 열구 가공용입니다.",
            "en": "Optional, Fissure machining",
            "ja": "任意：裂溝加工用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "직경 1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.5mm diameter flat tool",
            "ja": "直径1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Zirconia_Crown bridge_5X_D0.3",
    "subtitle": "Crown bridge_5X_D0.3",
    "source": "Zirconia_Crown bridge_5X_D0 3 15ecfb3e905882faa3f601f276f81246.html",
    "material": "Zirconia",
    "type": "Crown bridge",
    "family": "Bridge",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown bridge in the Zirconia Disc.",
        "ja": "Zirconiaディスクでクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      },
      {
        "ko": "Z0.3B 공구를 사용하는 열구 가공이 기본으로 포함되어 있습니다.",
        "en": "The Fissure machining by Z0.3B is included as default.",
        "ja": "Z0.3B工具による裂溝加工が標準で含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "직경 1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.5mm diameter flat tool",
            "ja": "直径1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Zirconia_Crown bridge_5X_D0.6",
    "subtitle": "Crown bridge_5X_D0.6",
    "source": "Zirconia_Crown bridge_5X_D0 6 3ffcfb3e90588391a27f01a6d7a90182.html",
    "material": "Zirconia",
    "type": "Crown bridge",
    "family": "Bridge",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown bridge in the Zirconia Disc.",
        "ja": "Zirconiaディスクでクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "직경 1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.5mm diameter flat tool",
            "ja": "直径1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Zirconia_Crown_5X_D0.3",
    "subtitle": "Crown_5X_D0.3",
    "source": "Zirconia_Crown_5X_D0 3 a19cfb3e9058827ca42781ee9c49ca72.html",
    "material": "Zirconia",
    "type": "Crown",
    "family": "Crown",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 크라운을 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown in the Zirconia Disc.",
        "ja": "Zirconiaディスクでクラウンを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      },
      {
        "ko": "Z0.3B 공구를 사용하는 열구 가공이 기본으로 포함되어 있습니다.",
        "en": "The Fissure machining by Z0.3B is included as default.",
        "ja": "Z0.3B工具による裂溝加工が標準で含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "직경 1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.5mm diameter flat tool",
            "ja": "直径1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Zirconia_Crown_5X_D0.6",
    "subtitle": "Crown_5X_D0.6",
    "source": "Zirconia_Crown_5X_D0 6 d59cfb3e9058838bb72f81d855ec70ac.html",
    "material": "Zirconia",
    "type": "Crown",
    "family": "Crown",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 크라운을 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown in the Zirconia Disc.",
        "ja": "Zirconiaディスクでクラウンを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "직경 1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.5mm diameter flat tool",
            "ja": "直径1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Zirconia_Inlay/Onlay bridge_D0.3",
    "subtitle": "Inlay/Onlay bridge_D0.3",
    "source": "Zirconia_Inlay Onlay bridge_D0 3 8f2cfb3e905882a1a23a0116fd5c0a26.html",
    "material": "Zirconia",
    "type": "Inlay/Onlay bridge",
    "family": "Inlay/Onlay",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 인레이/온레이 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Inlay/Onlay bridge in the Zirconia Disc.",
        "ja": "Zirconiaディスクでインレー／オンレーブリッジを加工するテンプレートです。"
      },
      {
        "ko": "인레이와 크라운이 혼합된 브릿지에도 사용할 수 있습니다.",
        "en": "This template can cover the bridge that is mixed inlays and crowns.",
        "ja": "インレーとクラウンが混在したブリッジにも使用できます。"
      },
      {
        "ko": "크라운의 코핑 내부 정삭에는 동시 5축이 적용됩니다.",
        "en": "The Finishing inside copings for a crown is applied to a simultaneous 5-axis.",
        "ja": "クラウンのコーピング内部の仕上げには同時5軸が適用されます。"
      },
      {
        "ko": "Z0.3B 공구를 사용하는 열구 가공과 캐비티 측 가공이 기본으로 포함되어 있습니다.",
        "en": "The Fissure machining and machining cavity side by Z0.3B are included as default.",
        "ja": "Z0.3B工具による裂溝加工とキャビティ側の加工が標準で含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Zirconia_Inlay/Onlay bridge_D0.6",
    "subtitle": "Inlay/Onlay bridge_D0.6",
    "source": "Zirconia_Inlay Onlay bridge_D0 6 3cbcfb3e905883ad918b0134723c42b3.html",
    "material": "Zirconia",
    "type": "Inlay/Onlay bridge",
    "family": "Inlay/Onlay",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 인레이/온레이 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Inlay/Onlay bridge in the Zirconia Disc.",
        "ja": "Zirconiaディスクでインレー／オンレーブリッジを加工するテンプレートです。"
      },
      {
        "ko": "인레이와 크라운이 혼합된 브릿지에도 사용할 수 있습니다.",
        "en": "This template can cover the bridge that is mixed inlays and crowns.",
        "ja": "インレーとクラウンが混在したブリッジにも使用できます。"
      },
      {
        "ko": "크라운의 코핑 내부 정삭에는 동시 5축이 적용됩니다.",
        "en": "The Finishing inside copings for a crown is applied to a simultaneous 5-axis.",
        "ja": "クラウンのコーピング内部の仕上げには同時5軸が適用されます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6, 열구 가공 및 캐비티 측 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining and Cavity side",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6、裂溝加工およびキャビティ側の加工用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside coping with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Zirconia_Inlay/Onlay_D0.3",
    "subtitle": "Inlay/Onlay_D0.3",
    "source": "Zirconia_Inlay Onlay_D0 3 910cfb3e905883f6a77c81db8caa5aec.html",
    "material": "Zirconia",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 인레이/온레이를 가공하는 템플릿입니다.",
        "en": "This is for milling an Inlay/Onlay in the Zirconia Disc.",
        "ja": "Zirconiaディスクでインレー／オンレーを加工するテンプレートです。"
      },
      {
        "ko": "Z0.3B 공구를 사용하는 열구 가공과 캐비티 측 가공이 기본으로 포함되어 있습니다.",
        "en": "The Fissure machining and machining cavity side by Z0.3B are included as default.",
        "ja": "Z0.3B工具による裂溝加工とキャビティ側の加工が標準で含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Zirconia_Inlay/Onlay_D0.6",
    "subtitle": "Inlay/Onlay_D0.6",
    "source": "Zirconia_Inlay Onlay_D0 6 04ecfb3e905882cdb07801611837c54e.html",
    "material": "Zirconia",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 인레이/온레이를 가공하는 템플릿입니다.",
        "en": "This is for milling an Inlay/Onlay in the Zirconia Disc.",
        "ja": "Zirconiaディスクでインレー／オンレーを加工するテンプレートです。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 열구 가공용입니다.",
            "en": "Optional, For the Fissure machining",
            "ja": "任意：裂溝加工用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Fissure machining_[Z0.6Bx08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  },
  {
    "title": "Zirconia_Over Structure",
    "subtitle": "Over Structure",
    "source": "Zirconia_Over Structure 2d5cfb3e9058823e825d812176dc9dd4.html",
    "material": "Zirconia",
    "type": "Over Structure",
    "family": "Over Structure",
    "conditions": [
      {
        "ko": "Zirconia 디스크에서 iBar의 상부 구조물을 가공하는 템플릿입니다.",
        "en": "This is for milling a Supra-structure of iBar in the Zirconia Disc.",
        "ja": "ZirconiaディスクでiBarの上部構造を加工するテンプレートです。"
      },
      {
        "ko": "보철물 종류를 Over Sturcture로 설정해야 합니다.",
        "en": "The part should be set to Over Sturcture",
        "ja": "補綴物の種類をOver Sturctureに設定してください。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T02_Z1.0BX15",
        "en": "Category 1/2: T02_Z1.0BX15",
        "ja": "カテゴリ1/2 : T02_Z1.0BX15"
      },
      {
        "ko": "유형 3/4 : T03_Z0.6BX08",
        "en": "Category 3/4: T03_Z0.6BX08",
        "ja": "カテゴリ3/4 : T03_Z0.6BX08"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T1",
        "name": "Z2.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T2",
        "name": "Z1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T3",
        "name": "Z0.6B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T4",
        "name": "Z0.3B",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 사용자 정의 영역 유형 5·6 및 열구 가공용입니다.",
            "en": "Optional, For the User-defined area Category 5 and 6, Fissure machining",
            "ja": "任意：ユーザー定義領域のカテゴリ5・6および裂溝加工用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "General settings",
        "titleText": {
          "ko": "일반 설정",
          "en": "General settings",
          "ja": "一般設定"
        },
        "descriptions": [
          {
            "ko": "Incremental Boundary offset (가공 경계 오프셋).",
            "en": "Incremental Boundary offset.",
            "ja": "Incremental Boundary offset（加工境界のオフセット）。"
          },
          {
            "ko": "가공 경계의 오프셋을 조정할 수 있습니다.",
            "en": "You can adjust milling boundary offset.",
            "ja": "加工境界のオフセットを調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside long cavities_[Z1.0Bx15] -8X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 분리된 8축 움직임으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by separated 8-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、分離した8軸の動きで長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Finishing inside long cavities_[Z1.0Bx15]_3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.6BX08]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3BX03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": [],
    "sourceToolCount": 4
  }
];
