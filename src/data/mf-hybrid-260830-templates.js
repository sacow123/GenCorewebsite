// Generated from MillFix 260830_R1 original.
window.MfHybrid260830Templates = [
  {
    "title": "Hybrid Ceramic_Crown_SCRP_5X",
    "subtitle": "Crown_SCRP_5X",
    "material": "Hybrid Ceramic",
    "type": "Crown",
    "family": "Crown",
    "partTypes": [
      "crown_single",
      "crown_single:Veneer"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Crown / Veneer 가공용 템플릿입니다.",
        "en": "Template for machining Crown / Veneer in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のCrown / Veneer加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "코핑 라인 설정은 필수입니다.\n0.6mm 공구는 선택 사항입니다.",
        "en": "Setting the Coping lines is mandatory.\n0.6mm diameter tool is optional",
        "ja": "コーピングラインの設定は必須です。\n直径0.6mmのツールはオプションです"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside copings G1 5x -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          },
          {
            "ko": "여유량 조정 범위: ≥ -0.3, ≤ 0.1",
            "en": "Allowance range: ≥ -0.3, ≤ 0.1",
            "ja": "余裕量の調整範囲：≥ -0.3, ≤ 0.1"
          }
        ],
        "sourceJobId": "aeaeb785-e501-11ee-9e33-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings G1 3+2 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "aeaeb788-e501-11ee-9e33-14857f7eaaee"
      },
      {
        "title": "Fissure machining [G0.6B_L2] -0",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "c64d8915-1ea3-11f0-9f1c-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings [G0.6B_L2]",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "c64d8918-1ea3-11f0-9f1c-14857f7eaaee"
      },
      {
        "title": "Fissure machining [Z0.3BX03] -0",
        "descriptions": [
          {
            "ko": "연결 공구: T34_Z0.3BX03",
            "en": "Linked tool: T34_Z0.3BX03",
            "ja": "割り当て工具：T34_Z0.3BX03"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "c64d891b-1ea3-11f0-9f1c-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T34",
        "name": "Z0.3BX03",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T35",
        "name": "G2.0B_L16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 4,
    "sourceRevision": "260830",
    "sourceProfileId": "d1fb3e2c-64f7-11ef-9e7f-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "crown_single",
        "type": "Crown",
        "family": "Crown"
      },
      {
        "sourceType": "crown_single:Veneer",
        "type": "Veneer",
        "family": "Crown"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Crown_SCRP_5X_D0.6",
    "subtitle": "Crown_SCRP_5X_D0.6",
    "material": "Hybrid Ceramic",
    "type": "Crown",
    "family": "Crown",
    "partTypes": [
      "crown_single",
      "crown_single:Veneer"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Crown / Veneer 가공용 템플릿입니다.",
        "en": "Template for machining Crown / Veneer in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のCrown / Veneer加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "코핑 라인 설정은 필수입니다.",
        "en": "Setting the Coping lines is mandatory.",
        "ja": "コーピングラインの設定は必須です。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside copings G1 5x -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          },
          {
            "ko": "여유량 조정 범위: ≥ -0.3, ≤ 0.1",
            "en": "Allowance range: ≥ -0.3, ≤ 0.1",
            "ja": "余裕量の調整範囲：≥ -0.3, ≤ 0.1"
          }
        ],
        "sourceJobId": "aeaeb785-e501-11ee-9e33-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings G1 3+2 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "aeaeb788-e501-11ee-9e33-14857f7eaaee"
      },
      {
        "title": "Fissure machining [G0.6B_L2] -0",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "c64d8915-1ea3-11f0-9f1c-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings [G0.6B_L2]",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "c64d8918-1ea3-11f0-9f1c-14857f7eaaee"
      },
      {
        "title": "Fissure machining [Z0.3BX03] -0",
        "descriptions": [
          {
            "ko": "연결 공구: T34_Z0.3BX03",
            "en": "Linked tool: T34_Z0.3BX03",
            "ja": "割り当て工具：T34_Z0.3BX03"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "c64d891b-1ea3-11f0-9f1c-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T34",
        "name": "Z0.3BX03",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T35",
        "name": "G2.0B_L16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 4,
    "sourceRevision": "260830",
    "sourceProfileId": "dcff1fc3-e50b-11ee-9e33-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "crown_single",
        "type": "Crown",
        "family": "Crown"
      },
      {
        "sourceType": "crown_single:Veneer",
        "type": "Veneer",
        "family": "Crown"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Inlay/Crown bridge_SCRP_5X",
    "subtitle": "Inlay/Crown bridge_SCRP_5X",
    "material": "Hybrid Ceramic",
    "type": "Crown Bridge",
    "family": "Bridge",
    "partTypes": [
      "crown_bridge",
      "onlaycrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Crown Bridge / Inlay/Onlay Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Crown Bridge / Inlay/Onlay Crown Bridge in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のCrown Bridge / Inlay/Onlay Crown Bridge加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "인레이/ 온레이 혹은 코핑 라인은 필수입니다.\n0.6mm 공구는 선택 사항입니다.",
        "en": "Setting the Inlay/Onlay or Coping lines is mandatory.\n0.6mm diameter tool is optional",
        "ja": "インレー/オンレーまたはコーピングラインの設定は必須です。\n直径0.6mmのツールはオプションです"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside copings G1 5x -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          },
          {
            "ko": "여유량 조정 범위: ≥ -0.3, ≤ 0.1",
            "en": "Allowance range: ≥ -0.3, ≤ 0.1",
            "ja": "余裕量の調整範囲：≥ -0.3, ≤ 0.1"
          }
        ],
        "sourceJobId": "8054337b-6513-11ef-9e7f-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings G1 3+2 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "8054337e-6513-11ef-9e7f-14857f7eaaee"
      },
      {
        "title": "Finishing inside inlays/onlays G1 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "71f58dcc-b61a-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining [G0.6B_L2] -0",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "80543387-6513-11ef-9e7f-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings [G0.6B_L2]",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "b31605a8-c324-11ef-9ee0-14857f7eaaee"
      },
      {
        "title": "Fissure machining [Z0.3BX03] -0",
        "descriptions": [
          {
            "ko": "연결 공구: T34_Z0.3BX03",
            "en": "Linked tool: T34_Z0.3BX03",
            "ja": "割り当て工具：T34_Z0.3BX03"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "10fb5eb5-70e0-11ef-9e88-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T34",
        "name": "Z0.3BX03",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T35",
        "name": "G2.0B_L16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 4,
    "sourceRevision": "260830",
    "sourceProfileId": "31295893-6514-11ef-9e7f-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "crown_bridge",
        "type": "Crown Bridge",
        "family": "Bridge"
      },
      {
        "sourceType": "onlaycrown_bridge",
        "type": "Inlay/Onlay Crown Bridge",
        "family": "Inlay/Onlay"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Inlay/Crown bridge_SCRP_5X_D0.6",
    "subtitle": "Inlay/Crown bridge_SCRP_5X_D0.6",
    "material": "Hybrid Ceramic",
    "type": "Crown Bridge",
    "family": "Bridge",
    "partTypes": [
      "crown_bridge",
      "onlaycrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Crown Bridge / Inlay/Onlay Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Crown Bridge / Inlay/Onlay Crown Bridge in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のCrown Bridge / Inlay/Onlay Crown Bridge加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "인레이/ 온레이 혹은 코핑 라인은 필수입니다.",
        "en": "Setting the Inlay/Onlay or Coping lines is mandatory.",
        "ja": "インレー/オンレーまたはコーピングラインの設定は必須です。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside copings G1 5x -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          },
          {
            "ko": "여유량 조정 범위: ≥ -0.3, ≤ 0.1",
            "en": "Allowance range: ≥ -0.3, ≤ 0.1",
            "ja": "余裕量の調整範囲：≥ -0.3, ≤ 0.1"
          }
        ],
        "sourceJobId": "8054337b-6513-11ef-9e7f-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings G1 3+2 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "8054337e-6513-11ef-9e7f-14857f7eaaee"
      },
      {
        "title": "Finishing inside inlays/onlays G1 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "71f58dcc-b61a-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining [G0.6B_L2] -0",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "80543387-6513-11ef-9e7f-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings [G0.6B_L2]",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "b31605a8-c324-11ef-9ee0-14857f7eaaee"
      },
      {
        "title": "Fissure machining [Z0.3BX03] -0",
        "descriptions": [
          {
            "ko": "연결 공구: T34_Z0.3BX03",
            "en": "Linked tool: T34_Z0.3BX03",
            "ja": "割り当て工具：T34_Z0.3BX03"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "10fb5eb5-70e0-11ef-9e88-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T34",
        "name": "Z0.3BX03",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T35",
        "name": "G2.0B_L16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 4,
    "sourceRevision": "260830",
    "sourceProfileId": "ddae0237-6513-11ef-9e7f-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "crown_bridge",
        "type": "Crown Bridge",
        "family": "Bridge"
      },
      {
        "sourceType": "onlaycrown_bridge",
        "type": "Inlay/Onlay Crown Bridge",
        "family": "Inlay/Onlay"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Inlay/Onlay_D0.6",
    "subtitle": "Inlay/Onlay_D0.6",
    "material": "Hybrid Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "partTypes": [
      "onlay_single",
      "onlaycrown_single"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Inlay/Onlay / Inlay/Onlay Crown 가공용 템플릿입니다.",
        "en": "Template for machining Inlay/Onlay / Inlay/Onlay Crown in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のInlay/Onlay / Inlay/Onlay Crown加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "인레이/온레이 라인 설정은 필수입니다.",
        "en": "Setting the Inlay/Onlay lines is mandatory.",
        "ja": "インレー/オンレーラインの設定は必須です。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Overall finishing cavity side (cap)  G1 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "91b729a2-fe3d-11ef-9f0a-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 3,
    "sourceRevision": "260830",
    "sourceProfileId": "a7774b77-64f9-11ef-9e7f-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "onlay_single",
        "type": "Inlay/Onlay",
        "family": "Inlay/Onlay"
      },
      {
        "sourceType": "onlaycrown_single",
        "type": "Inlay/Onlay Crown",
        "family": "Inlay/Onlay"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Inlay/Onlay_1st -Cavity",
    "subtitle": "Inlay/Onlay_1st -Cavity",
    "material": "Hybrid Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "partTypes": [
      "onlay_single",
      "onlaycrown_single"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Inlay/Onlay / Inlay/Onlay Crown 가공용 템플릿입니다.",
        "en": "Template for machining Inlay/Onlay / Inlay/Onlay Crown in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のInlay/Onlay / Inlay/Onlay Crown加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "인레이/온레이 라인 설정은 필수입니다.\n이 템플릿은 매몰 가공 방식으로 캐비티 내면만 가공하기 위한 것입니다. 커넥터를 설정하지 않아도 됩니다.\n이 캐비티 내면을 먼저 가공해 주십시오.",
        "en": "Setting the Inlay/Onlay lines is mandatory.\nThis template is for milling cavity side only with the way of burial milling. It is available to set no conectors.\nPlease milling this cavity side one first.",
        "ja": "インレー/オンレーラインの設定は必須です。\nこのテンプレートはキャビティ側のみを埋め込み加工で加工するためのテンプレートです。コネクタを設けない設定も可能です。\nこのキャビティ側を最初にフライス加工してください。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Overall finishing cavity side (cap)  G1 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "91b729a2-fe3d-11ef-9f0a-14857f7eaaee"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 3,
    "sourceRevision": "260830",
    "sourceProfileId": "2d90ab9c-70df-11ef-9e88-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "onlay_single",
        "type": "Inlay/Onlay",
        "family": "Inlay/Onlay"
      },
      {
        "sourceType": "onlaycrown_single",
        "type": "Inlay/Onlay Crown",
        "family": "Inlay/Onlay"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Inlay/Onlay_2nd -Occlusal",
    "subtitle": "Inlay/Onlay_2nd -Occlusal",
    "material": "Hybrid Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "partTypes": [
      "onlay_single",
      "onlaycrown_single"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Inlay/Onlay / Inlay/Onlay Crown 가공용 템플릿입니다.",
        "en": "Template for machining Inlay/Onlay / Inlay/Onlay Crown in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のInlay/Onlay / Inlay/Onlay Crown加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "인레이/온레이 라인 설정은 필수입니다.\n이 템플릿은 매몰 가공 방식으로 교합면만 가공하기 위한 것입니다. 커넥터를 설정하지 않아도 됩니다.\n캐비티 내면을 가공한 후 이 교합면을 가공해 주십시오.",
        "en": "Setting the Inlay/Onlay lines is mandatory.\nThis template is for milling occlusal side only with the way of burial milling. It is available to set no conectors.\nPlease milling this occlusal side one after cavity side.",
        "ja": "インレー/オンレーラインの設定は必須です。\nこのテンプレートは、咬合面のみを埋没加工で加工するためのテンプレートです。コネクタを設けない設定も可能です。\n窩洞側の次にこの咬合側をフライス加工してください。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 3,
    "sourceRevision": "260830",
    "sourceProfileId": "6d3e817e-70df-11ef-9e88-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "onlay_single",
        "type": "Inlay/Onlay",
        "family": "Inlay/Onlay"
      },
      {
        "sourceType": "onlaycrown_single",
        "type": "Inlay/Onlay Crown",
        "family": "Inlay/Onlay"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Inlay/Onlay_D0.6 [+0.08]",
    "subtitle": "Inlay/Onlay_D0.6 [+0.08]",
    "material": "Hybrid Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "partTypes": [
      "onlay_single",
      "onlaycrown_single"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Inlay/Onlay / Inlay/Onlay Crown 가공용 템플릿입니다.",
        "en": "Template for machining Inlay/Onlay / Inlay/Onlay Crown in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のInlay/Onlay / Inlay/Onlay Crown加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "인레이/온레이 라인 설정은 필수입니다.\n이것은 원래 디자인보다 0.08mm 크게 가공하기 위한 것입니다. 전략적으로 활용할 수 있습니다.",
        "en": "Setting the Inlay/Onlay lines is mandatory.\nThis is for milling it 0.08mm bigger than the original design. You can stragically utilize this one.",
        "ja": "インレー/オンレーラインの設定は必須です。\n元の設計より0.08mm大きく加工するためです。これを戦略的に活用することができます。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T36_G1.0B_L10+08",
        "en": "Category 1/3: T36_G1.0B_L10+08",
        "ja": "カテゴリー1/3：T36_G1.0B_L10+08"
      },
      {
        "ko": "유형 1/3: T36_G1.0B_L10+08",
        "en": "Category 1/3: T36_G1.0B_L10+08",
        "ja": "カテゴリー1/3：T36_G1.0B_L10+08"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2+08",
        "en": "Category 3: T37_G0.6B_L2+08",
        "ja": "カテゴリー3：T37_G0.6B_L2+08"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2+08",
        "en": "Category 3: T37_G0.6B_L2+08",
        "ja": "カテゴリー3：T37_G0.6B_L2+08"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16+08",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10+08",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2+08",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 3,
    "sourceRevision": "260830",
    "sourceProfileId": "ae3d717e-1128-11f0-9f11-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "onlay_single",
        "type": "Inlay/Onlay",
        "family": "Inlay/Onlay"
      },
      {
        "sourceType": "onlaycrown_single",
        "type": "Inlay/Onlay Crown",
        "family": "Inlay/Onlay"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Inlay/Onlay_1st -Cavity [+0.08]",
    "subtitle": "Inlay/Onlay_1st -Cavity [+0.08]",
    "material": "Hybrid Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "partTypes": [
      "onlay_single",
      "onlaycrown_single"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Inlay/Onlay / Inlay/Onlay Crown 가공용 템플릿입니다.",
        "en": "Template for machining Inlay/Onlay / Inlay/Onlay Crown in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のInlay/Onlay / Inlay/Onlay Crown加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "인레이/온레이 라인 설정은 필수입니다.\n이 템플릿은 매몰 가공 방식으로 캐비티 내면만 가공하기 위한 것입니다. 커넥터를 설정하지 않아도 됩니다.\n이 캐비티 내면을 먼저 가공해 주십시오.\n이것은 원래 디자인보다 0.08mm 크게 가공하기 위한 것입니다. 전략적으로 활용할 수 있습니다.",
        "en": "Setting the Inlay/Onlay lines is mandatory.\nThis template is for milling cavity side only with the way of burial milling. It is available to set no conectors.\nPlease milling this cavity side one first.\nThis is for milling it 0.08mm bigger than the original design. You can stragically utilize this one.",
        "ja": "インレー/オンレーラインの設定は必須です。\nこのテンプレートはキャビティ側のみを埋め込み加工で加工するためのテンプレートです。コネクタを設けない設定も可能です。\nこのキャビティ側を最初にフライス加工してください。\n元の設計より0.08mm大きく加工するためです。これを戦略的に活用することができます。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16+08",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10+08",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2+08",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 3,
    "sourceRevision": "260830",
    "sourceProfileId": "fba1131d-1128-11f0-9f11-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "onlay_single",
        "type": "Inlay/Onlay",
        "family": "Inlay/Onlay"
      },
      {
        "sourceType": "onlaycrown_single",
        "type": "Inlay/Onlay Crown",
        "family": "Inlay/Onlay"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Inlay/Onlay_2st -Occlusal [+0.08]",
    "subtitle": "Inlay/Onlay_2st -Occlusal [+0.08]",
    "material": "Hybrid Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "partTypes": [
      "onlay_single",
      "onlaycrown_single"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Inlay/Onlay / Inlay/Onlay Crown 가공용 템플릿입니다.",
        "en": "Template for machining Inlay/Onlay / Inlay/Onlay Crown in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のInlay/Onlay / Inlay/Onlay Crown加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "인레이/온레이 라인 설정은 필수입니다.\n이 템플릿은 매몰 가공 방식으로 교합면만 가공하기 위한 것입니다. 커넥터를 설정하지 않아도 됩니다.\n캐비티 내면을 가공한 후 이 교합면을 가공해 주십시오.\n이것은 원래 디자인보다 0.08mm 크게 가공하기 위한 것입니다. 전략적으로 활용할 수 있습니다.",
        "en": "Setting the Inlay/Onlay lines is mandatory.\nThis template is for milling occlusal side only with the way of burial milling. It is available to set no conectors.\nPlease milling this occlusal side one after cavity side.\nThis is for milling it 0.08mm bigger than the original design. You can stragically utilize this one.",
        "ja": "インレー/オンレーラインの設定は必須です。\nこのテンプレートは、咬合面のみを埋没加工で加工するためのテンプレートです。コネクタを設けない設定も可能です。\n窩洞側の次にこの咬合側をフライス加工してください。\n元の設計より0.08mm大きく加工するためです。これを戦略的に活用することができます。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16+08",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10+08",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2+08",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 3,
    "sourceRevision": "260830",
    "sourceProfileId": "44c75828-1129-11f0-9f11-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "onlay_single",
        "type": "Inlay/Onlay",
        "family": "Inlay/Onlay"
      },
      {
        "sourceType": "onlaycrown_single",
        "type": "Inlay/Onlay Crown",
        "family": "Inlay/Onlay"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Inlay/Onlay_D0.6 [+0.05]",
    "subtitle": "Inlay/Onlay_D0.6 [+0.05]",
    "material": "Hybrid Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "partTypes": [
      "onlay_single",
      "onlaycrown_single"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Inlay/Onlay / Inlay/Onlay Crown 가공용 템플릿입니다.",
        "en": "Template for machining Inlay/Onlay / Inlay/Onlay Crown in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のInlay/Onlay / Inlay/Onlay Crown加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "인레이/온레이 라인 설정은 필수입니다.\n이것은 원래 디자인보다 0.05mm 크게 가공하기 위한 것입니다. 전략적으로 활용할 수 있습니다.",
        "en": "Setting the Inlay/Onlay lines is mandatory.\nThis is for milling it 0.05mm bigger than the original design. You can stragically utilize this one.",
        "ja": "インレー/オンレーラインの設定は必須です。\n本来の設計より0.05mm大きく加工するためです。これを戦略的に活用することができます。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Overall finishing cavity side (cap)  G1 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10+05",
            "en": "Linked tool: T36_G1.0B_L10+05",
            "ja": "割り当て工具：T36_G1.0B_L10+05"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "b1284b14-1129-11f0-9f11-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T36_G1.0B_L10+05",
        "en": "Category 1/3: T36_G1.0B_L10+05",
        "ja": "カテゴリー1/3：T36_G1.0B_L10+05"
      },
      {
        "ko": "유형 1/3: T36_G1.0B_L10+05",
        "en": "Category 1/3: T36_G1.0B_L10+05",
        "ja": "カテゴリー1/3：T36_G1.0B_L10+05"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2+05",
        "en": "Category 3: T37_G0.6B_L2+05",
        "ja": "カテゴリー3：T37_G0.6B_L2+05"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2+05",
        "en": "Category 3: T37_G0.6B_L2+05",
        "ja": "カテゴリー3：T37_G0.6B_L2+05"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16+05",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10+05",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2+05",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 3,
    "sourceRevision": "260830",
    "sourceProfileId": "ed6bdacc-112a-11f0-9f11-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "onlay_single",
        "type": "Inlay/Onlay",
        "family": "Inlay/Onlay"
      },
      {
        "sourceType": "onlaycrown_single",
        "type": "Inlay/Onlay Crown",
        "family": "Inlay/Onlay"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Inlay/Onlay_1st -Cavity [+0.05]",
    "subtitle": "Inlay/Onlay_1st -Cavity [+0.05]",
    "material": "Hybrid Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "partTypes": [
      "onlay_single",
      "onlaycrown_single"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Inlay/Onlay / Inlay/Onlay Crown 가공용 템플릿입니다.",
        "en": "Template for machining Inlay/Onlay / Inlay/Onlay Crown in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のInlay/Onlay / Inlay/Onlay Crown加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "인레이/온레이 라인 설정은 필수입니다.\n이 템플릿은 매몰 가공 방식으로 캐비티 내면만 가공하기 위한 것입니다. 커넥터를 설정하지 않아도 됩니다.\n이 캐비티 내면을 먼저 가공해 주십시오.\n이것은 원래 디자인보다 0.05mm 크게 가공하기 위한 것입니다. 전략적으로 활용할 수 있습니다.",
        "en": "Setting the Inlay/Onlay lines is mandatory.\nThis template is for milling cavity side only with the way of burial milling. It is available to set no conectors.\nPlease milling this cavity side one first.\nThis is for milling it 0.05mm bigger than the original design. You can stragically utilize this one.",
        "ja": "インレー/オンレーラインの設定は必須です。\nこのテンプレートはキャビティ側のみを埋め込み加工で加工するためのテンプレートです。コネクタを設けない設定も可能です。\nこのキャビティ側を最初にフライス加工してください。\n本来の設計より0.05mm大きく加工するためです。これを戦略的に活用することができます。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Overall finishing cavity side (cap)  G1 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10+05",
            "en": "Linked tool: T36_G1.0B_L10+05",
            "ja": "割り当て工具：T36_G1.0B_L10+05"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "b1284b14-1129-11f0-9f11-14857f7eaaee"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16+05",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10+05",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2+05",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 3,
    "sourceRevision": "260830",
    "sourceProfileId": "1705749a-112b-11f0-9f11-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "onlay_single",
        "type": "Inlay/Onlay",
        "family": "Inlay/Onlay"
      },
      {
        "sourceType": "onlaycrown_single",
        "type": "Inlay/Onlay Crown",
        "family": "Inlay/Onlay"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Inlay/Onlay_2st -Occlusal [+0.05]",
    "subtitle": "Inlay/Onlay_2st -Occlusal [+0.05]",
    "material": "Hybrid Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "partTypes": [
      "onlay_single",
      "onlaycrown_single"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Inlay/Onlay / Inlay/Onlay Crown 가공용 템플릿입니다.",
        "en": "Template for machining Inlay/Onlay / Inlay/Onlay Crown in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のInlay/Onlay / Inlay/Onlay Crown加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "인레이/온레이 라인 설정은 필수입니다.\n이 템플릿은 매몰 가공 방식으로 교합면만 가공하기 위한 것입니다. 커넥터를 설정하지 않아도 됩니다.\n캐비티 내면을 가공한 후 이 교합면을 가공해 주십시오.\n이것은 원래 디자인보다 0.05mm 크게 가공하기 위한 것입니다. 전략적으로 활용할 수 있습니다.",
        "en": "Setting the Inlay/Onlay lines is mandatory.\nThis template is for milling occlusal side only with the way of burial milling. It is available to set no conectors.\nPlease milling this occlusal side one after cavity side.\nThis is for milling it 0.05mm bigger than the original design. You can stragically utilize this one.",
        "ja": "インレー/オンレーラインの設定は必須です。\nこのテンプレートは、咬合面のみを埋没加工で加工するためのテンプレートです。コネクタを設けない設定も可能です。\n窩洞側の次にこの咬合側をフライス加工してください。\n本来の設計より0.05mm大きく加工するためです。これを戦略的に活用することができます。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16+05",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10+05",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2+05",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 3,
    "sourceRevision": "260830",
    "sourceProfileId": "5089ed0b-112b-11f0-9f11-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "onlay_single",
        "type": "Inlay/Onlay",
        "family": "Inlay/Onlay"
      },
      {
        "sourceType": "onlaycrown_single",
        "type": "Inlay/Onlay Crown",
        "family": "Inlay/Onlay"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Inlay/Onlay/ -Slow",
    "subtitle": "Inlay/Onlay/ -Slow",
    "material": "Hybrid Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "partTypes": [
      "onlay_single",
      "onlaycrown_single"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Inlay/Onlay / Inlay/Onlay Crown 가공용 템플릿입니다.",
        "en": "Template for machining Inlay/Onlay / Inlay/Onlay Crown in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のInlay/Onlay / Inlay/Onlay Crown加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "인레이/온레이 라인 설정은 필수입니다.\n이것은 “Hybrid Ceramic_인레이/온레이_D0.6” 보다 느리게 가공하기 위한 템플릿입니다.",
        "en": "Setting the Inlay/Onlay lines is mandatory.\nThis is for milling more slow than “Hybrid Ceramic_Inlay/Onlay_D0.6”",
        "ja": "インレー/オンレーラインの設定は必須です。\n「Hybrid Ceramic_Inlay/Onlay_D0.6」よりも遅いミーリング用です。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Overall finishing cavity side (cap)  G1 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "de716904-1371-11f0-9f13-14857f7eaaee"
      },
      {
        "title": "Fissure machining [G1.0B] -0",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "d3f3e241-b619-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining G0.6 -0",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "de71690a-1371-11f0-9f13-14857f7eaaee"
      },
      {
        "title": "Overall restmachining cavity side G0.6 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "de71690d-1371-11f0-9f13-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 3,
    "sourceRevision": "260830",
    "sourceProfileId": "938ff580-2efd-11f0-9f25-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "onlay_single",
        "type": "Inlay/Onlay",
        "family": "Inlay/Onlay"
      },
      {
        "sourceType": "onlaycrown_single",
        "type": "Inlay/Onlay Crown",
        "family": "Inlay/Onlay"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Abutment Crown_NCS (highnees)",
    "subtitle": "Abutment Crown_NCS (highnees)",
    "material": "Hybrid Ceramic",
    "type": "Abutment Crown",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_single"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Abutment Crown 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のAbutment Crown加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "하이니스 시스템의 인터페이스로 디자인 되어있어야 합니다.\n해당 템플릿으로 가공하기 위해 준비해야할 것들\n마진 라인\n어버트먼트 베이스 라인은 인터페이스에 반드시 설정되어야만 합니다.\n경계(Emergence) 설정이 필수는 아닙니다. 하지만 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.\n임플란트 인터페이스\n스크루 채널은 반드시 인터페이스에 설정되어야만 합니다.\n인터페이스에 설정된 스크류채널을 제외한 다른 홀들은 스크류 채널이 아닌 홀(Holes)로 설정되어야 합니다. .",
        "en": "The design should be included the interface of the Highness system\nWhat it needs to Prepare for this strategy(template)\nMargin lines\nA Abutment base line must be set the interface.\nThe Emergence line is not mandatory, but it is recommended for better texture quality near the interface area.\nImplant interfaces\nA Screw channel should be exist on the interface that is set the Abutment base line.\nOther holes except the screw channel on the interface must be set to Holes.",
        "ja": "材質：ハイブリッドセラミックディスク/ブロック\nデザインにはHighnessシステムのインターフェースを含める必要があります。\nこの戦略のために準備する必要があるもの（テンプレート）\nマージンライン\nアバットメントベースラインはインターフェースに設定する必要があります。\nEmergence ラインは必須ではありませんが、インターフェイス領域付近のテクスチャ品質を向上させるために推奨されます。\nインプラントインターフェース\nスクリューチャンネルはアバットメントベースラインを設定するインターフェース上に存在する必要があります。\nインターフェース上のネジ溝を除く他の穴は、「穴」に設定する必要があります。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06]_highnees",
        "descriptions": [
          {
            "ko": "연결 공구: T43_M1.0F_L06",
            "en": "Linked tool: T43_M1.0F_L06",
            "ja": "割り当て工具：T43_M1.0F_L06"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "e21162fd-3708-11f0-9f2a-14857f7eaaee"
      },
      {
        "title": "Fissure machining G0.6 -0",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "ff6a6612-8051-11ef-9e94-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T42",
        "name": "M1.5FL_L15",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T43",
        "name": "M1.0F_L06",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T45",
        "name": "T1.6_L08",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 6,
    "sourceRevision": "260830",
    "sourceProfileId": "1133d878-3709-11f0-9f2a-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_single",
        "type": "Abutment Crown",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Abutment Crown bridge_NCS (highnees)",
    "subtitle": "Abutment Crown bridge_NCS (highnees)",
    "material": "Hybrid Ceramic",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Abutment Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown Bridge in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のAbutment Crown Bridge加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
      },
      {
        "ko": "하이니스 시스템의 인터페이스로 디자인 되어있어야 합니다.\n해당 템플릿으로 가공하기 위해 준비해야할 것들\n마진 라인\n인터페이스당 하나의 어버트먼트 베이스 라인이 있어야합니다.\n경계(Emergence) 설정이 필수는 아닙니다. 하지만 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.\n임플란트 인터페이스\n어버트먼트 베이스라인이 설정된 인터페이스는 반드시 스크류 채널이 있어야합니다.\n인터페이스에 설정된 스크류채널을 제외한 다른 홀들은 스크류 채널이 아닌 홀(Holes)로 설정되어야 합니다. .",
        "en": "The design should be included the interface of the Highness system\nWhat it needs to Prepare for this strategy(template)\nMargin lines\nA Abutment base line must be set each interfaces.\nThe Emergence line is not mandatory, but it is recommended for better texture quality near the interface area.\nImplant interfaces\nAn interface that is set the Abutment base line should exist a Screw channel each.\nOther holes except the screw channel on the interface must be set to Holes.",
        "ja": "材質：ハイブリッドセラミックディスク/ブロック\nデザインにはHighnessシステムのインターフェースを含める必要があります。\nこの戦略のために準備する必要があるもの（テンプレート）\nマージンライン\nアバットメントベースラインはインターフェースごとに設定する必要があります。\nEmergence ラインは必須ではありませんが、インターフェイス領域付近のテクスチャ品質を向上させるために推奨されます。\nインプラントインターフェース\nアバットメントベースラインが設定されたインターフェースには、それぞれスクリューチャンネルが存在する必要があります。\nインターフェース上のネジ溝を除く他の穴は、「穴」に設定する必要があります。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06]_highnees",
        "descriptions": [
          {
            "ko": "연결 공구: T43_M1.0F_L06",
            "en": "Linked tool: T43_M1.0F_L06",
            "ja": "割り当て工具：T43_M1.0F_L06"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "d4257cdd-3709-11f0-9f2a-14857f7eaaee"
      },
      {
        "title": "Fissure machining G0.6 -0",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "d4257cf2-3709-11f0-9f2a-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T42",
        "name": "M1.5FL_L15",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T43",
        "name": "M1.0F_L06",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T45",
        "name": "T1.6_L08",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 6,
    "sourceRevision": "260830",
    "sourceProfileId": "e971916a-3709-11f0-9f2a-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_bridge",
        "type": "Abutment Crown Bridge",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Abutment Crown bridge",
    "subtitle": "Abutment Crown bridge",
    "material": "Hybrid Ceramic",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Abutment Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown Bridge in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のAbutment Crown Bridge加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases G1 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "d4257cd7-3709-11f0-9f2a-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06]_highnees",
        "descriptions": [
          {
            "ko": "연결 공구: T43_M1.0F_L06",
            "en": "Linked tool: T43_M1.0F_L06",
            "ja": "割り当て工具：T43_M1.0F_L06"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "d4257cdd-3709-11f0-9f2a-14857f7eaaee"
      },
      {
        "title": "Fissure machining G0.6 -0",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "d4257cf2-3709-11f0-9f2a-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T42",
        "name": "M1.5FL_L15",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T43",
        "name": "M1.0F_L06",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T45",
        "name": "T1.6_L08",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 6,
    "sourceRevision": "260830",
    "sourceProfileId": "54bf2627-a28a-11f1-a4df-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_bridge",
        "type": "Abutment Crown Bridge",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  },
  {
    "title": "Hybrid Ceramic_Abutment Crown",
    "subtitle": "Abutment Crown",
    "material": "Hybrid Ceramic",
    "type": "Abutment Crown",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_single"
    ],
    "conditions": [
      {
        "ko": "Hybrid Ceramic 재료의 Abutment Crown 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown in Hybrid Ceramic.",
        "ja": "Hybrid Ceramic素材のAbutment Crown加工用テンプレートです。"
      },
      {
        "ko": "기준 DB: 260830 원본",
        "en": "Source DB: 260830 original",
        "ja": "基準DB：260830オリジナル"
      },
      {
        "ko": "계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.",
        "en": "Enabled processes may still be skipped depending on geometry, category, or hole conditions.",
        "ja": "計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。"
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
            "ko": "증분식 경계 옵셋: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary offset: Adjustable (Default: 0)",
            "ja": "増分境界オフセット：調整可能（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases G1 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T36_G1.0B_L10",
            "en": "Linked tool: T36_G1.0B_L10",
            "ja": "割り当て工具：T36_G1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "c45e163f-a2ac-11f1-a4df-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06]_highnees",
        "descriptions": [
          {
            "ko": "연결 공구: T43_M1.0F_L06",
            "en": "Linked tool: T43_M1.0F_L06",
            "ja": "割り当て工具：T43_M1.0F_L06"
          },
          {
            "ko": "계산 기본값: 꺼짐",
            "en": "Calculate default: Off",
            "ja": "計算の初期値：OFF"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "e21162fd-3708-11f0-9f2a-14857f7eaaee"
      },
      {
        "title": "Fissure machining G0.6 -0",
        "descriptions": [
          {
            "ko": "연결 공구: T37_G0.6B_L2",
            "en": "Linked tool: T37_G0.6B_L2",
            "ja": "割り当て工具：T37_G0.6B_L2"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다.",
            "en": "Calculate: Choose whether to run this process.",
            "ja": "計算：この工程を実行するか選択できます。"
          }
        ],
        "sourceJobId": "ff6a6612-8051-11ef-9e94-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 1/3: T36_G1.0B_L10",
        "en": "Category 1/3: T36_G1.0B_L10",
        "ja": "カテゴリー1/3：T36_G1.0B_L10"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      },
      {
        "ko": "유형 3: T37_G0.6B_L2",
        "en": "Category 3: T37_G0.6B_L2",
        "ja": "カテゴリー3：T37_G0.6B_L2"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T35",
        "name": "G2.0B_L16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T36",
        "name": "G1.0B_L10",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T37",
        "name": "G0.6B_L2",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T42",
        "name": "M1.5FL_L15",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T43",
        "name": "M1.0F_L06",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T45",
        "name": "T1.6_L08",
        "imageAvailable": false,
        "optional": true,
        "comments": [
          {
            "ko": "해당 공정의 선택 및 형상 조건에 따라 사용합니다.",
            "en": "Used according to the selected processes and geometry conditions.",
            "ja": "選択した工程と形状条件に応じて使用します。"
          }
        ]
      }
    ],
    "toolHints": {
      "basic": {
        "ko": "공정·형상 조건에 따라 사용",
        "en": "Used according to process and geometry conditions",
        "ja": "工程・形状条件に応じて使用"
      },
      "optional": {
        "ko": "해당 조건에 따라 사용",
        "en": "Used when the corresponding conditions apply",
        "ja": "該当条件に応じて使用"
      }
    },
    "images": [],
    "sourceToolCount": 6,
    "sourceRevision": "260830",
    "sourceProfileId": "44ec5749-a2ac-11f1-a4df-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_single",
        "type": "Abutment Crown",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "fe4b491c-5858-11ef-8bc9-181deae7bdc2",
    "applicableMaterialIds": [
      "349f049a-be21-11eb-a186-9061aeceecac",
      "f87bfaf3-562a-11ef-8bc9-181deae7bdc2",
      "fe4b491c-5858-11ef-8bc9-181deae7bdc2"
    ]
  }
];
