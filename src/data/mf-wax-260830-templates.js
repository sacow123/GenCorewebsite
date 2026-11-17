// Generated from MillFix 260830_R1 original.
window.MfWax260830Templates = [
  {
    "title": "Wax_Coping bridge",
    "subtitle": "Coping bridge",
    "material": "Wax",
    "type": "Coping Bridge",
    "family": "Coping",
    "partTypes": [
      "cap_bridge"
    ],
    "conditions": [
      {
        "ko": "Wax 재료의 Coping Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Coping Bridge in Wax.",
        "ja": "Wax素材のCoping Bridge加工用テンプレートです。"
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
        "ko": "코핑 라인 설정은 필수입니다\n0.6mm 공구는 선택 사항입니다.",
        "en": "Setting the Coping lines is mandatory\n0.6mm diameter tool is optional",
        "ja": "コーピングラインの設定は必須です\n直径0.6mmのツールはオプションです"
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
        "title": "Finishing inside copings D1 5x -180",
        "descriptions": [
          {
            "ko": "연결 공구: T32_Z1.0BX16",
            "en": "Linked tool: T32_Z1.0BX16",
            "ja": "割り当て工具：T32_Z1.0BX16"
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
        "sourceJobId": "5249d378-ceca-11ee-9e26-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings D1 3+2 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T32_Z1.0BX16",
            "en": "Linked tool: T32_Z1.0BX16",
            "ja": "割り当て工具：T32_Z1.0BX16"
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
        "sourceJobId": "5249d37b-ceca-11ee-9e26-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings FE1.5 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T42_M1.5FL_L15",
            "en": "Linked tool: T42_M1.5FL_L15",
            "ja": "割り当て工具：T42_M1.5FL_L15"
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
        "sourceJobId": "5249d37e-ceca-11ee-9e26-14857f7eaaee"
      },
      {
        "title": "Fissure machining D0.6 -0",
        "descriptions": [
          {
            "ko": "연결 공구: T33_Z0.6BX05",
            "en": "Linked tool: T33_Z0.6BX05",
            "ja": "割り当て工具：T33_Z0.6BX05"
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
        "sourceJobId": "5249d393-ceca-11ee-9e26-14857f7eaaee"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T31",
        "name": "Z2.0BX20",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T32",
        "name": "Z1.0BX16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T33",
        "name": "Z0.6BX05",
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
    "sourceProfileId": "643ecc56-702b-11ef-9e88-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "cap_bridge",
        "type": "Coping Bridge",
        "family": "Coping"
      }
    ],
    "sourceMaterialId": "c0155e6b-c2c7-11e2-a2c6-74e54352c191",
    "applicableMaterialIds": [
      "c0155e6b-c2c7-11e2-a2c6-74e54352c191"
    ]
  },
  {
    "title": "Wax_Crown bridge_D0.6",
    "subtitle": "Crown bridge_D0.6",
    "material": "Wax",
    "type": "Crown Bridge",
    "family": "Bridge",
    "partTypes": [
      "crown_bridge",
      "onlaycrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Wax 재료의 Crown Bridge / Inlay/Onlay Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Crown Bridge / Inlay/Onlay Crown Bridge in Wax.",
        "ja": "Wax素材のCrown Bridge / Inlay/Onlay Crown Bridge加工用テンプレートです。"
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
        "ko": "코핑 라인 설정은 필수입니다",
        "en": "Setting the Coping lines is mandatory",
        "ja": "部位（プロテーゼ）：クラウンブリッジ/イナリー/クラウンブリッジ\nコーピングラインの設定は必須です"
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
        "title": "Finishing inside copings D1 5x -180",
        "descriptions": [
          {
            "ko": "연결 공구: T32_Z1.0BX16",
            "en": "Linked tool: T32_Z1.0BX16",
            "ja": "割り当て工具：T32_Z1.0BX16"
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
        "sourceJobId": "5249d378-ceca-11ee-9e26-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings D1 3+2 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T32_Z1.0BX16",
            "en": "Linked tool: T32_Z1.0BX16",
            "ja": "割り当て工具：T32_Z1.0BX16"
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
        "sourceJobId": "5249d37b-ceca-11ee-9e26-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings FE1.5 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T42_M1.5FL_L15",
            "en": "Linked tool: T42_M1.5FL_L15",
            "ja": "割り当て工具：T42_M1.5FL_L15"
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
        "sourceJobId": "5249d37e-ceca-11ee-9e26-14857f7eaaee"
      },
      {
        "title": "Fissure machining D0.6 -0",
        "descriptions": [
          {
            "ko": "연결 공구: T33_Z0.6BX05",
            "en": "Linked tool: T33_Z0.6BX05",
            "ja": "割り当て工具：T33_Z0.6BX05"
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
        "sourceJobId": "5249d393-ceca-11ee-9e26-14857f7eaaee"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T31",
        "name": "Z2.0BX20",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T32",
        "name": "Z1.0BX16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T33",
        "name": "Z0.6BX05",
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
    "sourceProfileId": "a47a2c55-702b-11ef-9e88-14857f7eaaee",
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
    "sourceMaterialId": "c0155e6b-c2c7-11e2-a2c6-74e54352c191",
    "applicableMaterialIds": [
      "c0155e6b-c2c7-11e2-a2c6-74e54352c191"
    ]
  },
  {
    "title": "WAX - Coping",
    "subtitle": "WAX - Coping",
    "material": "Wax",
    "type": "Coping",
    "family": "Coping",
    "partTypes": [
      "cap_single"
    ],
    "conditions": [
      {
        "ko": "Wax 재료의 Coping 가공용 템플릿입니다.",
        "en": "Template for machining Coping in Wax.",
        "ja": "Wax素材のCoping加工用テンプレートです。"
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
        "ko": "코핑 라인 설정은 필수입니다",
        "en": "Setting the Coping lines is mandatory",
        "ja": "コーピングラインの設定は必須です"
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
        "title": "Finishing inside copings D1 5x -180",
        "descriptions": [
          {
            "ko": "연결 공구: T32_Z1.0BX16",
            "en": "Linked tool: T32_Z1.0BX16",
            "ja": "割り当て工具：T32_Z1.0BX16"
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
        "sourceJobId": "84492a05-df6f-11ee-9e2f-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings D1 3+2 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T32_Z1.0BX16",
            "en": "Linked tool: T32_Z1.0BX16",
            "ja": "割り当て工具：T32_Z1.0BX16"
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
        "sourceJobId": "84492a08-df6f-11ee-9e2f-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings FE1.5 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T42_M1.5FL_L15",
            "en": "Linked tool: T42_M1.5FL_L15",
            "ja": "割り当て工具：T42_M1.5FL_L15"
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
        "sourceJobId": "84492a0b-df6f-11ee-9e2f-14857f7eaaee"
      },
      {
        "title": "Fissure machining D0.6 -0",
        "descriptions": [
          {
            "ko": "연결 공구: T33_Z0.6BX05",
            "en": "Linked tool: T33_Z0.6BX05",
            "ja": "割り当て工具：T33_Z0.6BX05"
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
        "sourceJobId": "84492a20-df6f-11ee-9e2f-14857f7eaaee"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T31",
        "name": "Z2.0BX20",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T32",
        "name": "Z1.0BX16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T33",
        "name": "Z0.6BX05",
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
    "sourceProfileId": "fb9e29ef-df6f-11ee-9e2f-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "cap_single",
        "type": "Coping",
        "family": "Coping"
      }
    ],
    "sourceMaterialId": "c0155e6b-c2c7-11e2-a2c6-74e54352c191",
    "applicableMaterialIds": [
      "c0155e6b-c2c7-11e2-a2c6-74e54352c191"
    ]
  },
  {
    "title": "WAX - Crown_D0.6",
    "subtitle": "D0.6",
    "material": "Wax",
    "type": "Crown",
    "family": "Crown",
    "partTypes": [
      "crown_single"
    ],
    "conditions": [
      {
        "ko": "Wax 재료의 Crown 가공용 템플릿입니다.",
        "en": "Template for machining Crown in Wax.",
        "ja": "Wax素材のCrown加工用テンプレートです。"
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
        "ko": "코핑 라인 설정은 필수입니다",
        "en": "Setting the Coping lines is mandatory",
        "ja": "コーピングラインの設定は必須です"
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
        "title": "Finishing inside copings D1 5x -180",
        "descriptions": [
          {
            "ko": "연결 공구: T32_Z1.0BX16",
            "en": "Linked tool: T32_Z1.0BX16",
            "ja": "割り当て工具：T32_Z1.0BX16"
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
        "sourceJobId": "84492a05-df6f-11ee-9e2f-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings D1 3+2 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T32_Z1.0BX16",
            "en": "Linked tool: T32_Z1.0BX16",
            "ja": "割り当て工具：T32_Z1.0BX16"
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
        "sourceJobId": "84492a08-df6f-11ee-9e2f-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings FE1.5 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T42_M1.5FL_L15",
            "en": "Linked tool: T42_M1.5FL_L15",
            "ja": "割り当て工具：T42_M1.5FL_L15"
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
        "sourceJobId": "84492a0b-df6f-11ee-9e2f-14857f7eaaee"
      },
      {
        "title": "Fissure machining D0.6 -0",
        "descriptions": [
          {
            "ko": "연결 공구: T33_Z0.6BX05",
            "en": "Linked tool: T33_Z0.6BX05",
            "ja": "割り当て工具：T33_Z0.6BX05"
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
        "sourceJobId": "84492a20-df6f-11ee-9e2f-14857f7eaaee"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T31",
        "name": "Z2.0BX20",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T32",
        "name": "Z1.0BX16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T33",
        "name": "Z0.6BX05",
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
    "sourceProfileId": "e4a7784d-df6f-11ee-9e2f-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "crown_single",
        "type": "Crown",
        "family": "Crown"
      }
    ],
    "sourceMaterialId": "c0155e6b-c2c7-11e2-a2c6-74e54352c191",
    "applicableMaterialIds": [
      "c0155e6b-c2c7-11e2-a2c6-74e54352c191"
    ]
  },
  {
    "title": "Wax_Inlay/Onlay -D0.6",
    "subtitle": "Inlay/Onlay -D0.6",
    "material": "Wax",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "partTypes": [
      "onlay_single",
      "onlaycrown_single"
    ],
    "conditions": [
      {
        "ko": "Wax 재료의 Inlay/Onlay / Inlay/Onlay Crown 가공용 템플릿입니다.",
        "en": "Template for machining Inlay/Onlay / Inlay/Onlay Crown in Wax.",
        "ja": "Wax素材のInlay/Onlay / Inlay/Onlay Crown加工用テンプレートです。"
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
        "ko": "코핑 라인 설정은 필수입니다",
        "en": "Setting the Coping lines is mandatory",
        "ja": "コーピングラインの設定は必須です"
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
        "title": "Finishing inside inlays/onlays D1 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T32_Z1.0BX16",
            "en": "Linked tool: T32_Z1.0BX16",
            "ja": "割り当て工具：T32_Z1.0BX16"
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
          },
          {
            "ko": "여유량 조정 범위: ≥ -0.3, ≤ 0.1",
            "en": "Allowance range: ≥ -0.3, ≤ 0.1",
            "ja": "余裕量の調整範囲：≥ -0.3, ≤ 0.1"
          }
        ],
        "sourceJobId": "25f489eb-df70-11ee-9e2f-14857f7eaaee"
      },
      {
        "title": "Fissure machining D0.6 -0",
        "descriptions": [
          {
            "ko": "연결 공구: T33_Z0.6BX05",
            "en": "Linked tool: T33_Z0.6BX05",
            "ja": "割り当て工具：T33_Z0.6BX05"
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
        "sourceJobId": "25f489f1-df70-11ee-9e2f-14857f7eaaee"
      },
      {
        "title": "Overall restmachining cavity side D0.6 -180",
        "descriptions": [
          {
            "ko": "연결 공구: T33_Z0.6BX05",
            "en": "Linked tool: T33_Z0.6BX05",
            "ja": "割り当て工具：T33_Z0.6BX05"
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
        "sourceJobId": "3adab0be-70ce-11ef-9e88-14857f7eaaee"
      }
    ],
    "uda": [],
    "interfaces": [],
    "tools": [
      {
        "id": "T31",
        "name": "Z2.0BX20",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T32",
        "name": "Z1.0BX16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T33",
        "name": "Z0.6BX05",
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
    "sourceProfileId": "3adab0c8-70ce-11ef-9e88-14857f7eaaee",
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
    "sourceMaterialId": "c0155e6b-c2c7-11e2-a2c6-74e54352c191",
    "applicableMaterialIds": [
      "c0155e6b-c2c7-11e2-a2c6-74e54352c191"
    ]
  },
  {
    "title": "Wax_Partial framework",
    "subtitle": "Partial framework",
    "material": "Wax",
    "type": "Partial Frame",
    "family": "Denture & Frame",
    "partTypes": [
      "model_single:Partial Frame"
    ],
    "conditions": [
      {
        "ko": "Wax 재료의 Partial Frame 가공용 템플릿입니다.",
        "en": "Template for machining Partial Frame in Wax.",
        "ja": "Wax素材のPartial Frame加工用テンプレートです。"
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
        "title": "Fissure machining_[Z1.0BX15]",
        "descriptions": [
          {
            "ko": "연결 공구: T32_Z1.0BX16",
            "en": "Linked tool: T32_Z1.0BX16",
            "ja": "割り当て工具：T32_Z1.0BX16"
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
        "sourceJobId": "1a505ee4-d5bb-11f0-a4a7-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
        "descriptions": [
          {
            "ko": "연결 공구: T33_Z0.6BX05",
            "en": "Linked tool: T33_Z0.6BX05",
            "ja": "割り当て工具：T33_Z0.6BX05"
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
        "sourceJobId": "1a505ef3-d5bb-11f0-a4a7-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.3BX03]",
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
        "sourceJobId": "1a505eff-d5bb-11f0-a4a7-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3/5: T32_Z1.0BX16",
        "en": "Category 1/3/5: T32_Z1.0BX16",
        "ja": "カテゴリー1/3/5：T32_Z1.0BX16"
      },
      {
        "ko": "유형 2/4/6: T32_Z1.0BX16",
        "en": "Category 2/4/6: T32_Z1.0BX16",
        "ja": "カテゴリー2/4/6：T32_Z1.0BX16"
      },
      {
        "ko": "유형 1/3/5: T32_Z1.0BX16",
        "en": "Category 1/3/5: T32_Z1.0BX16",
        "ja": "カテゴリー1/3/5：T32_Z1.0BX16"
      },
      {
        "ko": "유형 2/4/6: T32_Z1.0BX16",
        "en": "Category 2/4/6: T32_Z1.0BX16",
        "ja": "カテゴリー2/4/6：T32_Z1.0BX16"
      },
      {
        "ko": "유형 3/4/5/6: T33_Z0.6BX05",
        "en": "Category 3/4/5/6: T33_Z0.6BX05",
        "ja": "カテゴリー3/4/5/6：T33_Z0.6BX05"
      },
      {
        "ko": "유형 3/5: T33_Z0.6BX05",
        "en": "Category 3/5: T33_Z0.6BX05",
        "ja": "カテゴリー3/5：T33_Z0.6BX05"
      },
      {
        "ko": "유형 5/6: T34_Z0.3BX03",
        "en": "Category 5/6: T34_Z0.3BX03",
        "ja": "カテゴリー5/6：T34_Z0.3BX03"
      },
      {
        "ko": "유형 5: T34_Z0.3BX03",
        "en": "Category 5: T34_Z0.3BX03",
        "ja": "カテゴリー5：T34_Z0.3BX03"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T31",
        "name": "Z2.0BX20",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T32",
        "name": "Z1.0BX16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T33",
        "name": "Z0.6BX05",
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
    "sourceProfileId": "dcff1c56-d5bd-11f0-a4a7-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "model_single:Partial Frame",
        "type": "Partial Frame",
        "family": "Denture & Frame"
      }
    ],
    "sourceMaterialId": "c0155e6b-c2c7-11e2-a2c6-74e54352c191",
    "applicableMaterialIds": [
      "c0155e6b-c2c7-11e2-a2c6-74e54352c191"
    ]
  },
  {
    "title": "Wax_Flexible denture",
    "subtitle": "Flexible denture",
    "material": "Wax",
    "type": "Flexible Denture",
    "family": "Denture & Frame",
    "partTypes": [
      "model_single:Flexible denture"
    ],
    "conditions": [
      {
        "ko": "Wax 재료의 Flexible Denture 가공용 템플릿입니다.",
        "en": "Template for machining Flexible Denture in Wax.",
        "ja": "Wax素材のFlexible Denture加工用テンプレートです。"
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
        "ko": "별도의 필수 마진 설정은 없습니다.",
        "en": "No mandatory margin-line setting is required.",
        "ja": "必須のマージンライン設定はありません。"
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
        "title": "Fissure machining_[Z1.0BX15]",
        "descriptions": [
          {
            "ko": "연결 공구: T32_Z1.0BX16",
            "en": "Linked tool: T32_Z1.0BX16",
            "ja": "割り当て工具：T32_Z1.0BX16"
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
        "sourceJobId": "1a505ee4-d5bb-11f0-a4a7-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
        "descriptions": [
          {
            "ko": "연결 공구: T33_Z0.6BX05",
            "en": "Linked tool: T33_Z0.6BX05",
            "ja": "割り当て工具：T33_Z0.6BX05"
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
        "sourceJobId": "1a505ef3-d5bb-11f0-a4a7-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.3BX03]",
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
        "sourceJobId": "1a505eff-d5bb-11f0-a4a7-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3/5: T32_Z1.0BX16",
        "en": "Category 1/3/5: T32_Z1.0BX16",
        "ja": "カテゴリー1/3/5：T32_Z1.0BX16"
      },
      {
        "ko": "유형 2/4/6: T32_Z1.0BX16",
        "en": "Category 2/4/6: T32_Z1.0BX16",
        "ja": "カテゴリー2/4/6：T32_Z1.0BX16"
      },
      {
        "ko": "유형 1/3/5: T32_Z1.0BX16",
        "en": "Category 1/3/5: T32_Z1.0BX16",
        "ja": "カテゴリー1/3/5：T32_Z1.0BX16"
      },
      {
        "ko": "유형 2/4/6: T32_Z1.0BX16",
        "en": "Category 2/4/6: T32_Z1.0BX16",
        "ja": "カテゴリー2/4/6：T32_Z1.0BX16"
      },
      {
        "ko": "유형 3/4/5/6: T33_Z0.6BX05",
        "en": "Category 3/4/5/6: T33_Z0.6BX05",
        "ja": "カテゴリー3/4/5/6：T33_Z0.6BX05"
      },
      {
        "ko": "유형 3/5: T33_Z0.6BX05",
        "en": "Category 3/5: T33_Z0.6BX05",
        "ja": "カテゴリー3/5：T33_Z0.6BX05"
      },
      {
        "ko": "유형 5/6: T34_Z0.3BX03",
        "en": "Category 5/6: T34_Z0.3BX03",
        "ja": "カテゴリー5/6：T34_Z0.3BX03"
      },
      {
        "ko": "유형 5: T34_Z0.3BX03",
        "en": "Category 5: T34_Z0.3BX03",
        "ja": "カテゴリー5：T34_Z0.3BX03"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T31",
        "name": "Z2.0BX20",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T32",
        "name": "Z1.0BX16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T33",
        "name": "Z0.6BX05",
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
    "sourceProfileId": "551b32bf-a289-11f1-a4df-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "model_single:Flexible denture",
        "type": "Flexible Denture",
        "family": "Denture & Frame"
      }
    ],
    "sourceMaterialId": "c0155e6b-c2c7-11e2-a2c6-74e54352c191",
    "applicableMaterialIds": [
      "c0155e6b-c2c7-11e2-a2c6-74e54352c191"
    ]
  },
  {
    "title": "Wax_denture Teeth",
    "subtitle": "denture Teeth",
    "material": "Wax",
    "type": "Denture Teeth",
    "family": "Denture & Frame",
    "partTypes": [
      "model_single:denture Teeth"
    ],
    "conditions": [
      {
        "ko": "Wax 재료의 Denture Teeth 가공용 템플릿입니다.",
        "en": "Template for machining Denture Teeth in Wax.",
        "ja": "Wax素材のDenture Teeth加工用テンプレートです。"
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
        "ko": "별도의 필수 마진 설정은 없습니다.",
        "en": "No mandatory margin-line setting is required.",
        "ja": "必須のマージンライン設定はありません。"
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
        "title": "Fissure machining_[Z1.0BX15]",
        "descriptions": [
          {
            "ko": "연결 공구: T32_Z1.0BX16",
            "en": "Linked tool: T32_Z1.0BX16",
            "ja": "割り当て工具：T32_Z1.0BX16"
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
        "sourceJobId": "1a505ee4-d5bb-11f0-a4a7-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
        "descriptions": [
          {
            "ko": "연결 공구: T33_Z0.6BX05",
            "en": "Linked tool: T33_Z0.6BX05",
            "ja": "割り当て工具：T33_Z0.6BX05"
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
        "sourceJobId": "1a505ef3-d5bb-11f0-a4a7-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.3BX03]",
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
        "sourceJobId": "1a505eff-d5bb-11f0-a4a7-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3/5: T32_Z1.0BX16",
        "en": "Category 1/3/5: T32_Z1.0BX16",
        "ja": "カテゴリー1/3/5：T32_Z1.0BX16"
      },
      {
        "ko": "유형 2/4/6: T32_Z1.0BX16",
        "en": "Category 2/4/6: T32_Z1.0BX16",
        "ja": "カテゴリー2/4/6：T32_Z1.0BX16"
      },
      {
        "ko": "유형 1/3/5: T32_Z1.0BX16",
        "en": "Category 1/3/5: T32_Z1.0BX16",
        "ja": "カテゴリー1/3/5：T32_Z1.0BX16"
      },
      {
        "ko": "유형 2/4/6: T32_Z1.0BX16",
        "en": "Category 2/4/6: T32_Z1.0BX16",
        "ja": "カテゴリー2/4/6：T32_Z1.0BX16"
      },
      {
        "ko": "유형 3/4/5/6: T33_Z0.6BX05",
        "en": "Category 3/4/5/6: T33_Z0.6BX05",
        "ja": "カテゴリー3/4/5/6：T33_Z0.6BX05"
      },
      {
        "ko": "유형 3/5: T33_Z0.6BX05",
        "en": "Category 3/5: T33_Z0.6BX05",
        "ja": "カテゴリー3/5：T33_Z0.6BX05"
      },
      {
        "ko": "유형 5/6: T34_Z0.3BX03",
        "en": "Category 5/6: T34_Z0.3BX03",
        "ja": "カテゴリー5/6：T34_Z0.3BX03"
      },
      {
        "ko": "유형 5: T34_Z0.3BX03",
        "en": "Category 5: T34_Z0.3BX03",
        "ja": "カテゴリー5：T34_Z0.3BX03"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T31",
        "name": "Z2.0BX20",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T32",
        "name": "Z1.0BX16",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T33",
        "name": "Z0.6BX05",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
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
    "sourceProfileId": "7024a9b5-a289-11f1-a4df-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "model_single:denture Teeth",
        "type": "Denture Teeth",
        "family": "Denture & Frame"
      }
    ],
    "sourceMaterialId": "c0155e6b-c2c7-11e2-a2c6-74e54352c191",
    "applicableMaterialIds": [
      "c0155e6b-c2c7-11e2-a2c6-74e54352c191"
    ]
  }
];
