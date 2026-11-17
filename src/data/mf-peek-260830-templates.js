// Generated from MillFix 260830_R1 original.
window.MfPeek260830Templates = [
  {
    "title": "PEEK_Crown/SCRP_5x",
    "subtitle": "Crown/SCRP_5x",
    "material": "PEEK",
    "type": "Crown",
    "family": "Crown",
    "partTypes": [
      "crown_single"
    ],
    "conditions": [
      {
        "ko": "PEEK 재료의 Crown 가공용 템플릿입니다.",
        "en": "Template for machining Crown in PEEK.",
        "ja": "PEEK素材のCrown加工用テンプレートです。"
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
        "ja": "材質：PEEKディスク/ブロック\nコーピングラインの設定は必須です\n直径0.6mmのツールはオプションです"
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
        "title": "Finishing inside copings_[M1.0B_L13]_5X",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
            "ko": "여유량 조정 범위: ≥ -0.06, ≤ 0.06",
            "en": "Allowance range: ≥ -0.06, ≤ 0.06",
            "ja": "余裕量の調整範囲：≥ -0.06, ≤ 0.06"
          }
        ],
        "sourceJobId": "c3aa9c67-b61c-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside copings_[M1.0B_L13]_3+2x",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "c3aa9c6a-b61c-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "c3aa9c70-b61c-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside copings_[M1.0F_L06]",
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
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "c3aa9c76-b61c-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.6BX05]",
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
        "sourceJobId": "3492d401-2efc-11f0-9f25-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings_[Z0.6BX05]_5X",
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
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "c3aa9c85-b61c-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.3BX03] (PMMA)",
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
        "sourceJobId": "c3aa9c91-b61c-11f0-a4a1-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
      },
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
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
      },
      {
        "id": "T38",
        "name": "M2.0B_L15",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T39",
        "name": "M1.0B_L15",
        "imageAvailable": false,
        "optional": false,
        "comments": []
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
    "sourceToolCount": 5,
    "sourceRevision": "260830",
    "sourceProfileId": "a9898490-cda3-11ef-9ee7-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "crown_single",
        "type": "Crown",
        "family": "Crown"
      }
    ],
    "sourceMaterialId": "f6636105-da3b-11ef-9eee-14857f7eaaee",
    "applicableMaterialIds": [
      "c7eafbfe-5df2-11ef-8bca-181deae7bdc2",
      "c7eafbff-5df2-11ef-8bca-181deae7bdc2",
      "f6636105-da3b-11ef-9eee-14857f7eaaee"
    ]
  },
  {
    "title": "PEEK_Abutment Crown Bridge",
    "subtitle": "Abutment Crown Bridge",
    "material": "PEEK",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_bridge"
    ],
    "conditions": [
      {
        "ko": "PEEK 재료의 Abutment Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown Bridge in PEEK.",
        "ja": "PEEK素材のAbutment Crown Bridge加工用テンプレートです。"
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
        "ko": "어버트먼트 베이스 라인 설정은 필수입니다.\n경계(Emergence) 라인 설정은 필수는 아니지만, 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.\n0.6mm 공구는 선택 사항입니다.",
        "en": "Setting the Abutment base lines is mandatory.\nThe Emergence lines are optional, but it is recommended for better texture quality around interfaces.\n0.6mm diameter tool is optional",
        "ja": "材質：PEEKディスク/ブロック\nアバットメントのベースラインの設定は必須です。\nEmergence ラインはオプションですが、インターフェイス周囲のテクスチャ品質を向上させるために推奨されます。\n直径0.6mmのツールはオプションです"
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
        "title": "Finishing inside copings_[M1.0B_L15] 5x",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
            "ko": "여유량 조정 범위: ≥ -0.06, ≤ 0.06",
            "en": "Allowance range: ≥ -0.06, ≤ 0.06",
            "ja": "余裕量の調整範囲：≥ -0.06, ≤ 0.06"
          }
        ],
        "sourceJobId": "8266a059-b61b-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside copings_[M1.0B_L15] 3+2",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "ee8ed796-b61b-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[M1.0B_L15]_3+2",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "8266a05f-b61b-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[M1.0B_L15]",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "8266a062-b61b-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5FR_L07]",
        "descriptions": [
          {
            "ko": "연결 공구: T44_M1.5R_L07",
            "en": "Linked tool: T44_M1.5R_L07",
            "ja": "割り当て工具：T44_M1.5R_L07"
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
        "sourceJobId": "8266a068-b61b-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06]",
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
        "sourceJobId": "8266a06b-b61b-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[Z0.6BX05]",
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
        "sourceJobId": "8266a06e-b61b-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside copings_[Z0.6BX05]",
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
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "26cc130c-3700-11f0-9f2a-14857f7eaaee"
      },
      {
        "title": "Fissure machining_[Z0.6BX05]",
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
        "sourceJobId": "26cc1318-3700-11f0-9f2a-14857f7eaaee"
      },
      {
        "title": "Fissure machining_[Z0.3BX03] (PMMA)",
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
        "sourceJobId": "8266a089-b61b-11f0-a4a1-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
      },
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
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
      },
      {
        "id": "T38",
        "name": "M2.0B_L15",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T39",
        "name": "M1.0B_L15",
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
        "id": "T44",
        "name": "M1.5R_L07",
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
    "sourceToolCount": 8,
    "sourceRevision": "260830",
    "sourceProfileId": "71d6e823-da0f-11ef-9eee-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_bridge",
        "type": "Abutment Crown Bridge",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "f6636105-da3b-11ef-9eee-14857f7eaaee",
    "applicableMaterialIds": [
      "c7eafbfe-5df2-11ef-8bca-181deae7bdc2",
      "c7eafbff-5df2-11ef-8bca-181deae7bdc2",
      "f6636105-da3b-11ef-9eee-14857f7eaaee"
    ]
  },
  {
    "title": "PEEK_Crown/SCRP Bridge_5x",
    "subtitle": "Crown/SCRP Bridge_5x",
    "material": "PEEK",
    "type": "Coping Bridge",
    "family": "Coping",
    "partTypes": [
      "cap_bridge",
      "crown_bridge"
    ],
    "conditions": [
      {
        "ko": "PEEK 재료의 Coping Bridge / Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Coping Bridge / Crown Bridge in PEEK.",
        "ja": "PEEK素材のCoping Bridge / Crown Bridge加工用テンプレートです。"
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
        "ja": "材質：PEEKディスク/ブロック\nコーピングラインの設定は必須です\n直径0.6mmのツールはオプションです"
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
        "title": "Finishing inside copings_[M1.0B_L13]_5X",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
            "ko": "여유량 조정 범위: ≥ -0.06, ≤ 0.06",
            "en": "Allowance range: ≥ -0.06, ≤ 0.06",
            "ja": "余裕量の調整範囲：≥ -0.06, ≤ 0.06"
          }
        ],
        "sourceJobId": "2dfc18f8-b61d-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside copings_[M1.0B_L13]_3+2x",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "2dfc18fb-b61d-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "2dfc1901-b61d-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside copings_[M1.0F_L06]",
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
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "2dfc1907-b61d-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.6BX05]",
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
        "sourceJobId": "5468359f-2ee1-11f0-9f25-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings_[Z0.6BX05]_5X",
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
          },
          {
            "ko": "여유량: 조정 가능 (기본값: 0)",
            "en": "Allowance: Adjustable (Default: 0)",
            "ja": "余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "2dfc1916-b61d-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.3BX03] (PMMA)",
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
        "sourceJobId": "2dfc1922-b61d-11f0-a4a1-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
      },
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
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
      },
      {
        "id": "T38",
        "name": "M2.0B_L15",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T39",
        "name": "M1.0B_L15",
        "imageAvailable": false,
        "optional": false,
        "comments": []
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
    "sourceToolCount": 5,
    "sourceRevision": "260830",
    "sourceProfileId": "97863267-da1e-11ef-9eee-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "cap_bridge",
        "type": "Coping Bridge",
        "family": "Coping"
      },
      {
        "sourceType": "crown_bridge",
        "type": "Crown Bridge",
        "family": "Bridge"
      }
    ],
    "sourceMaterialId": "f6636105-da3b-11ef-9eee-14857f7eaaee",
    "applicableMaterialIds": [
      "c7eafbfe-5df2-11ef-8bca-181deae7bdc2",
      "c7eafbff-5df2-11ef-8bca-181deae7bdc2",
      "f6636105-da3b-11ef-9eee-14857f7eaaee"
    ]
  },
  {
    "title": "PEEK_Abutment Crown",
    "subtitle": "Abutment Crown",
    "material": "PEEK",
    "type": "Abutment Crown",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_single"
    ],
    "conditions": [
      {
        "ko": "PEEK 재료의 Abutment Crown 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown in PEEK.",
        "ja": "PEEK素材のAbutment Crown加工用テンプレートです。"
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
        "ko": "어버트먼트 베이스 라인 설정은 필수입니다.\n경계(Emergence) 라인 설정은 필수는 아니지만, 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.\n0.6mm 공구는 선택 사항입니다.",
        "en": "Setting the Abutment base lines is mandatory.\nThe Emergence lines are optional, but it is recommended for better texture quality around interfaces.\n0.6mm diameter tool is optional",
        "ja": "材質：PEEKディスク/ブロック\nアバットメントのベースラインの設定は必須です。\nEmergence ラインはオプションですが、インターフェイス周囲のテクスチャ品質を向上させるために推奨されます。\n直径0.6mmのツールはオプションです"
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
        "title": "Finishing inside abutment bases_[M1.0B_L15]_3+2",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "49ad5777-b61c-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[M1.0B_L15]",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "49ad577a-b61c-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5FR_L07]",
        "descriptions": [
          {
            "ko": "연결 공구: T44_M1.5R_L07",
            "en": "Linked tool: T44_M1.5R_L07",
            "ja": "割り当て工具：T44_M1.5R_L07"
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
        "sourceJobId": "49ad5780-b61c-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06]",
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
        "sourceJobId": "49ad5783-b61c-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[Z0.6BX05]",
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
        "sourceJobId": "49ad5786-b61c-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.6BX05]",
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
        "sourceJobId": "3633d010-3701-11f0-9f2a-14857f7eaaee"
      },
      {
        "title": "Fissure machining_[Z0.3BX03] (PMMA)",
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
        "sourceJobId": "49ad57a1-b61c-11f0-a4a1-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
      },
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
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
      },
      {
        "id": "T38",
        "name": "M2.0B_L15",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T39",
        "name": "M1.0B_L15",
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
        "id": "T44",
        "name": "M1.5R_L07",
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
    "sourceToolCount": 8,
    "sourceRevision": "260830",
    "sourceProfileId": "a2d79caa-3701-11f0-9f2a-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_single",
        "type": "Abutment Crown",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "f6636105-da3b-11ef-9eee-14857f7eaaee",
    "applicableMaterialIds": [
      "c7eafbfe-5df2-11ef-8bca-181deae7bdc2",
      "c7eafbff-5df2-11ef-8bca-181deae7bdc2",
      "f6636105-da3b-11ef-9eee-14857f7eaaee"
    ]
  },
  {
    "title": "PEEK_Over Structure",
    "subtitle": "Over Structure",
    "material": "PEEK",
    "type": "Over Structure",
    "family": "Over Structure",
    "partTypes": [
      "bitesplint_single:Over Structure"
    ],
    "conditions": [
      {
        "ko": "PEEK 재료의 Over Structure 가공용 템플릿입니다.",
        "en": "Template for machining Over Structure in PEEK.",
        "ja": "PEEK素材のOver Structure加工用テンプレートです。"
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
        "ko": "코핑 라인 설정은 필수입니다\nIBar와 같은 임플란트 바의 상부 구조물을 가공하기 위한 템플릿입니다.",
        "en": "Setting Coping lines is mandatory\nThis is for milling the supra structure of the implant bar such as iBar",
        "ja": "材質：PEEKディスク/ブロック\nコーピングラインの設定は必須です\niBarなどのインプラントバーの上部構造のフライス加工に使用します。"
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
        "title": "Finishing inside long cavities_[M1.0Bx10]_8X",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "7801c3eb-b61d-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside long cavities_[M1.0Bx10] 3+2",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "7801c3ee-b61d-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "7801c3fd-b61d-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.6BX05]",
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
        "sourceJobId": "7801c409-b61d-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.3BX03] (PMMA)",
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
        "sourceJobId": "7801c415-b61d-11f0-a4a1-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
      },
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
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
      },
      {
        "id": "T38",
        "name": "M2.0B_L15",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T39",
        "name": "M1.0B_L15",
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
    "sourceToolCount": 5,
    "sourceRevision": "260830",
    "sourceProfileId": "b9fd7b92-b61d-11f0-a4a1-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "bitesplint_single:Over Structure",
        "type": "Over Structure",
        "family": "Over Structure"
      }
    ],
    "sourceMaterialId": "f6636105-da3b-11ef-9eee-14857f7eaaee",
    "applicableMaterialIds": [
      "c7eafbfe-5df2-11ef-8bca-181deae7bdc2",
      "c7eafbff-5df2-11ef-8bca-181deae7bdc2",
      "f6636105-da3b-11ef-9eee-14857f7eaaee"
    ]
  },
  {
    "title": "PEEK_Full denture",
    "subtitle": "Full denture",
    "material": "PEEK",
    "type": "Full Denture",
    "family": "Denture & Frame",
    "partTypes": [
      "bitesplint_single:Full denture"
    ],
    "conditions": [
      {
        "ko": "PEEK 재료의 Full Denture 가공용 템플릿입니다.",
        "en": "Template for machining Full Denture in PEEK.",
        "ja": "PEEK素材のFull Denture加工用テンプレートです。"
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
        "ko": "코핑 라인 설정은 필수입니다 →\n풀 덴쳐 베이스를 가공하기 위한 템플릿입니다.",
        "en": "Setting Coping lines is mandatory →\nThis is for milling the full denture bases",
        "ja": "材質：PEEKディスク/ブロック\nコーピングラインの設定は必須→\n総義歯床のフライス加工用です。"
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
        "title": "Finishing inside long cavities_[M1.0Bx10]_8X",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "7801c3eb-b61d-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside long cavities_[M1.0Bx10] 3+2",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "7801c3ee-b61d-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "7801c3fd-b61d-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.6BX05]",
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
        "sourceJobId": "7801c409-b61d-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.3BX03] (PMMA)",
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
        "sourceJobId": "7801c415-b61d-11f0-a4a1-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
      },
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
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
      },
      {
        "id": "T38",
        "name": "M2.0B_L15",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T39",
        "name": "M1.0B_L15",
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
    "sourceToolCount": 5,
    "sourceRevision": "260830",
    "sourceProfileId": "f9ce153d-b61d-11f0-a4a1-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "bitesplint_single:Full denture",
        "type": "Full Denture",
        "family": "Denture & Frame"
      }
    ],
    "sourceMaterialId": "f6636105-da3b-11ef-9eee-14857f7eaaee",
    "applicableMaterialIds": [
      "c7eafbfe-5df2-11ef-8bca-181deae7bdc2",
      "c7eafbff-5df2-11ef-8bca-181deae7bdc2",
      "f6636105-da3b-11ef-9eee-14857f7eaaee"
    ]
  },
  {
    "title": "PEEK_Flexble denture",
    "subtitle": "Flexble denture",
    "material": "PEEK",
    "type": "Flexible Denture",
    "family": "Denture & Frame",
    "partTypes": [
      "model_single:Flexible denture"
    ],
    "conditions": [
      {
        "ko": "PEEK 재료의 Flexible Denture 가공용 템플릿입니다.",
        "en": "Template for machining Flexible Denture in PEEK.",
        "ja": "PEEK素材のFlexible Denture加工用テンプレートです。"
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
        "en": "Setting any lines is not mandatory →",
        "ja": "材質：PEEKディスク/ブロック\n行の設定は必須ではありません →"
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
        "title": "Fissure machining_[M1.0B_L15]",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "190fc2be-b61e-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.6BX05]",
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
        "sourceJobId": "190fc2cd-b61e-11f0-a4a1-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
      },
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
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
        "ko": "유형 4/6: T33_Z0.6BX05",
        "en": "Category 4/6: T33_Z0.6BX05",
        "ja": "カテゴリー4/6：T33_Z0.6BX05"
      }
    ],
    "interfaces": [],
    "tools": [
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
        "id": "T38",
        "name": "M2.0B_L15",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T39",
        "name": "M1.0B_L15",
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
    "sourceProfileId": "cff9977b-b61e-11f0-a4a1-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "model_single:Flexible denture",
        "type": "Flexible Denture",
        "family": "Denture & Frame"
      }
    ],
    "sourceMaterialId": "f6636105-da3b-11ef-9eee-14857f7eaaee",
    "applicableMaterialIds": [
      "c7eafbfe-5df2-11ef-8bca-181deae7bdc2",
      "c7eafbff-5df2-11ef-8bca-181deae7bdc2",
      "f6636105-da3b-11ef-9eee-14857f7eaaee"
    ]
  },
  {
    "title": "PEEK_denture Teeth",
    "subtitle": "denture Teeth",
    "material": "PEEK",
    "type": "Denture Teeth",
    "family": "Denture & Frame",
    "partTypes": [
      "model_single:denture Teeth"
    ],
    "conditions": [
      {
        "ko": "PEEK 재료의 Denture Teeth 가공용 템플릿입니다.",
        "en": "Template for machining Denture Teeth in PEEK.",
        "ja": "PEEK素材のDenture Teeth加工用テンプレートです。"
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
        "en": "Setting any lines is not mandatory",
        "ja": "材質：PEEKディスク/ブロック\n行の設定は必須ではありません"
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
        "title": "Fissure machining_[M1.0B_L15]",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "190fc2be-b61e-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.6BX05]",
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
        "sourceJobId": "190fc2cd-b61e-11f0-a4a1-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
      },
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
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
        "ko": "유형 4/6: T33_Z0.6BX05",
        "en": "Category 4/6: T33_Z0.6BX05",
        "ja": "カテゴリー4/6：T33_Z0.6BX05"
      }
    ],
    "interfaces": [],
    "tools": [
      {
        "id": "T33",
        "name": "Z0.6BX05",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T38",
        "name": "M2.0B_L15",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T39",
        "name": "M1.0B_L15",
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
    "sourceProfileId": "59a2e14c-b61f-11f0-a4a1-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "model_single:denture Teeth",
        "type": "Denture Teeth",
        "family": "Denture & Frame"
      }
    ],
    "sourceMaterialId": "f6636105-da3b-11ef-9eee-14857f7eaaee",
    "applicableMaterialIds": [
      "c7eafbfe-5df2-11ef-8bca-181deae7bdc2",
      "c7eafbff-5df2-11ef-8bca-181deae7bdc2",
      "f6636105-da3b-11ef-9eee-14857f7eaaee"
    ]
  },
  {
    "title": "PEEK_Partial Frame",
    "subtitle": "Partial Frame",
    "material": "PEEK",
    "type": "Partial Frame",
    "family": "Denture & Frame",
    "partTypes": [
      "model_single:Partial Frame"
    ],
    "conditions": [
      {
        "ko": "PEEK 재료의 Partial Frame 가공용 템플릿입니다.",
        "en": "Template for machining Partial Frame in PEEK.",
        "ja": "PEEK素材のPartial Frame加工用テンプレートです。"
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
        "en": "Setting any lines is not mandatory →",
        "ja": "材質：PEEKディスク/ブロック\n行の設定は必須ではありません →"
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
        "title": "Fissure machining_[M1.0B_L15]",
        "descriptions": [
          {
            "ko": "연결 공구: T39_M1.0B_L15",
            "en": "Linked tool: T39_M1.0B_L15",
            "ja": "割り当て工具：T39_M1.0B_L15"
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
        "sourceJobId": "190fc2be-b61e-11f0-a4a1-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[Z0.6BX05]",
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
        "sourceJobId": "190fc2cd-b61e-11f0-a4a1-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
      },
      {
        "ko": "유형 1/3/5: T39_M1.0B_L15",
        "en": "Category 1/3/5: T39_M1.0B_L15",
        "ja": "カテゴリー1/3/5：T39_M1.0B_L15"
      },
      {
        "ko": "유형 2/4/6: T39_M1.0B_L15",
        "en": "Category 2/4/6: T39_M1.0B_L15",
        "ja": "カテゴリー2/4/6：T39_M1.0B_L15"
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
        "ko": "유형 4/6: T33_Z0.6BX05",
        "en": "Category 4/6: T33_Z0.6BX05",
        "ja": "カテゴリー4/6：T33_Z0.6BX05"
      }
    ],
    "interfaces": [],
    "tools": [
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
        "id": "T38",
        "name": "M2.0B_L15",
        "imageAvailable": false,
        "optional": false,
        "comments": []
      },
      {
        "id": "T39",
        "name": "M1.0B_L15",
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
    "sourceProfileId": "960d371b-b61f-11f0-a4a1-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "model_single:Partial Frame",
        "type": "Partial Frame",
        "family": "Denture & Frame"
      }
    ],
    "sourceMaterialId": "f6636105-da3b-11ef-9eee-14857f7eaaee",
    "applicableMaterialIds": [
      "c7eafbfe-5df2-11ef-8bca-181deae7bdc2",
      "c7eafbff-5df2-11ef-8bca-181deae7bdc2",
      "f6636105-da3b-11ef-9eee-14857f7eaaee"
    ]
  }
];
