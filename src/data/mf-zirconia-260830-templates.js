// Generated from MillFix 260830_R1 original.
window.MfZirconia260830Templates = [
  {
    "title": "Zirconia_Abutment crown bridge",
    "subtitle": "Abutment crown bridge",
    "material": "Zirconia",
    "type": "Abutment Bridge",
    "family": "Abutment",
    "partTypes": [
      "abutment_bridge",
      "abutmentcrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Abutment Bridge / Abutment Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Bridge / Abutment Crown Bridge in Zirconia.",
        "ja": "Zirconia素材のAbutment Bridge / Abutment Crown Bridge加工用テンプレートです。"
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
        "ko": "어버트먼트 베이스 라인 설정은 필수입니다.\n경계(Emergence) 라인 설정은 필수는 아니지만, 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.",
        "en": "Setting the Abutment base lines is mandatory.\nThe Emergence lines are optional, but it is recommended for better texture quality around interfaces.",
        "ja": "材質：ジルコニアディスク/ブロック\nアバットメントのベースラインの設定は必須です。\nEmergence ラインはオプションですが、インターフェイス周囲のテクスチャ品質を向上させるために推奨されます。"
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
        "title": "Finishing inside copings_[Z1.0Bx15]_5x",
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
          }
        ],
        "sourceJobId": "0cb8c425-b224-11ef-9ec8-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[Z1.0BX16]",
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
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          },
          {
            "ko": "스텝다운: 조정 가능 (기본값: 0.07)",
            "en": "Stepdown: Adjustable (Default: 0.07)",
            "ja": "ステップダウン：調整可能（初期値：0.07）"
          }
        ],
        "sourceJobId": "5fc76e68-5dee-11f0-8416-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07] FR1.5",
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
          },
          {
            "ko": "스텝다운: 조정 가능 (기본값: 0.07)",
            "en": "Stepdown: Adjustable (Default: 0.07)",
            "ja": "ステップダウン：調整可能（初期値：0.07）"
          }
        ],
        "sourceJobId": "60f111fc-3cc2-11ef-8e54-d85ed3abfe3c"
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
          },
          {
            "ko": "스텝다운: 조정 가능 (기본값: 0.07)",
            "en": "Stepdown: Adjustable (Default: 0.07)",
            "ja": "ステップダウン：調整可能（初期値：0.07）"
          }
        ],
        "sourceJobId": "80941a65-1ea6-11f0-9f1c-14857f7eaaee"
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
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          },
          {
            "ko": "스텝다운: 조정 가능 (기본값: 0.07)",
            "en": "Stepdown: Adjustable (Default: 0.07)",
            "ja": "ステップダウン：調整可能（初期値：0.07）"
          }
        ],
        "sourceJobId": "50541ea2-5ade-11f0-8412-ec4c8c8ee783"
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
        "sourceJobId": "c270c5f9-3908-11ef-8e54-d85ed3abfe3c"
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
        "sourceJobId": "c270c5fc-3908-11ef-8e54-d85ed3abfe3c"
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
    "sourceProfileId": "649f265a-3a95-11ef-8e54-d85ed3abfe3c",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutment_bridge",
        "type": "Abutment Bridge",
        "family": "Abutment"
      },
      {
        "sourceType": "abutmentcrown_bridge",
        "type": "Abutment Crown Bridge",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Coping bridge",
    "subtitle": "Coping bridge",
    "material": "Zirconia",
    "type": "Coping Bridge",
    "family": "Coping",
    "partTypes": [
      "cap_bridge"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Coping Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Coping Bridge in Zirconia.",
        "ja": "Zirconia素材のCoping Bridge加工用テンプレートです。"
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
        "ja": "材質：ジルコニアディスク/ブロック\nコーピングラインの設定は必須です"
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
            "ko": "증분식 경계 옵셋 조정 범위: > 0",
            "en": "Incremental boundary offset range: > 0",
            "ja": "増分境界オフセットの調整範囲：> 0"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
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
          }
        ],
        "sourceJobId": "b934540a-a359-11ec-a8ed-18c04db240d8"
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
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
        "sourceJobId": "04da39c4-7d4e-11ee-b5c6-d85ed3abfe3c"
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
        "sourceJobId": "cae0972f-1517-11f0-9f15-14857f7eaaee"
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
        "sourceJobId": "b9345419-a359-11ec-a8ed-18c04db240d8"
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
        "sourceJobId": "b934541c-a359-11ec-a8ed-18c04db240d8"
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
        "sourceJobId": "7b000b59-6370-11ef-9e7e-14857f7eaaee"
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
    "sourceProfileId": "f72238fb-7dfa-11ee-b5c7-d85ed3abfe3c",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "cap_bridge",
        "type": "Coping Bridge",
        "family": "Coping"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Crown bridge_D0.6",
    "subtitle": "Crown bridge_D0.6",
    "material": "Zirconia",
    "type": "Crown Bridge",
    "family": "Bridge",
    "partTypes": [
      "crown_bridge"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Crown Bridge in Zirconia.",
        "ja": "Zirconia素材のCrown Bridge加工用テンプレートです。"
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
        "ja": "材質：ジルコニアディスク/ブロック\nコーピングラインの設定は必須です"
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
            "ko": "증분식 경계 옵셋 조정 범위: > 0",
            "en": "Incremental boundary offset range: > 0",
            "ja": "増分境界オフセットの調整範囲：> 0"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
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
          }
        ],
        "sourceJobId": "b934540a-a359-11ec-a8ed-18c04db240d8"
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
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
        "sourceJobId": "04da39c4-7d4e-11ee-b5c6-d85ed3abfe3c"
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
        "sourceJobId": "cae0972f-1517-11f0-9f15-14857f7eaaee"
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
        "sourceJobId": "b9345419-a359-11ec-a8ed-18c04db240d8"
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
        "sourceJobId": "b934541c-a359-11ec-a8ed-18c04db240d8"
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
        "sourceJobId": "7b000b59-6370-11ef-9e7e-14857f7eaaee"
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
    "sourceProfileId": "0c5f0168-7d4e-11ee-b5c6-d85ed3abfe3c",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "crown_bridge",
        "type": "Crown Bridge",
        "family": "Bridge"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Coping",
    "subtitle": "Coping",
    "material": "Zirconia",
    "type": "Coping",
    "family": "Coping",
    "partTypes": [
      "cap_single"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Coping 가공용 템플릿입니다.",
        "en": "Template for machining Coping in Zirconia.",
        "ja": "Zirconia素材のCoping加工用テンプレートです。"
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
        "ja": "材質：ジルコニアディスク/ブロック\nコーピングラインの設定は必須です"
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
        "title": "Finishing inside copings_[Z1.0Bx15]_5x",
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
          }
        ],
        "sourceJobId": "000090ee-7d2f-11ee-b5c5-d85ed3abfe3c"
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
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
        "sourceJobId": "29c434bd-7d2f-11ee-b5c5-d85ed3abfe3c"
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
        "sourceJobId": "b949f09f-1517-11f0-9f15-14857f7eaaee"
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
        "sourceJobId": "000090fd-7d2f-11ee-b5c5-d85ed3abfe3c"
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
        "sourceJobId": "00009100-7d2f-11ee-b5c5-d85ed3abfe3c"
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
        "sourceJobId": "6b93f1ad-d0b6-11ef-9ee8-14857f7eaaee"
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
    "sourceProfileId": "88573996-7df7-11ee-b5c7-d85ed3abfe3c",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "cap_single",
        "type": "Coping",
        "family": "Coping"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Crown_D0.6",
    "subtitle": "Crown_D0.6",
    "material": "Zirconia",
    "type": "Crown",
    "family": "Crown",
    "partTypes": [
      "crown_single",
      "crown_single:Veneer"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Crown / Veneer 가공용 템플릿입니다.",
        "en": "Template for machining Crown / Veneer in Zirconia.",
        "ja": "Zirconia素材のCrown / Veneer加工用テンプレートです。"
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
        "ja": "材質：ジルコニアディスク/ブロック\nコーピングラインの設定は必須です"
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
        "title": "Finishing inside copings_[Z1.0Bx15]_5x",
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
          }
        ],
        "sourceJobId": "000090ee-7d2f-11ee-b5c5-d85ed3abfe3c"
      },
      {
        "title": "Finishing inside copings_[Z1.0Bx15]_3+2X",
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
        "sourceJobId": "29c434bd-7d2f-11ee-b5c5-d85ed3abfe3c"
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
        "sourceJobId": "b949f09f-1517-11f0-9f15-14857f7eaaee"
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
        "sourceJobId": "000090fd-7d2f-11ee-b5c5-d85ed3abfe3c"
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
        "sourceJobId": "00009100-7d2f-11ee-b5c5-d85ed3abfe3c"
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
        "sourceJobId": "6b93f1ad-d0b6-11ef-9ee8-14857f7eaaee"
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
    "sourceProfileId": "8f68ccc2-7df7-11ee-b5c7-d85ed3abfe3c",
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
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Inlay/Onlay bridge_D0.6",
    "subtitle": "Inlay/Onlay bridge_D0.6",
    "material": "Zirconia",
    "type": "Inlay/Onlay Bridge",
    "family": "Inlay/Onlay",
    "partTypes": [
      "onlay_bridge",
      "onlaycrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Inlay/Onlay Bridge / Inlay/Onlay Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Inlay/Onlay Bridge / Inlay/Onlay Crown Bridge in Zirconia.",
        "ja": "Zirconia素材のInlay/Onlay Bridge / Inlay/Onlay Crown Bridge加工用テンプレートです。"
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
        "ko": "Setting the 인레이/온레이 or Coping lines is mandatory",
        "en": "Setting the Inlay/Onlay or Coping lines is mandatory",
        "ja": "材質：ジルコニアディスク/ブロック\nインレー/オンレーまたはコーピングラインの設定は必須です"
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
        "title": "Finishing inside copings_[Z1.0Bx15]_5X",
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
          }
        ],
        "sourceJobId": "912a7b14-9291-11ef-9ea4-14857f7eaaee"
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
        "sourceJobId": "912a7b2f-9291-11ef-9ea4-14857f7eaaee"
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
        "sourceJobId": "62be675f-d0b8-11ef-9ee8-14857f7eaaee"
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
    "sourceProfileId": "14bc5a6f-9295-11ef-9ea4-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "onlay_bridge",
        "type": "Inlay/Onlay Bridge",
        "family": "Inlay/Onlay"
      },
      {
        "sourceType": "onlaycrown_bridge",
        "type": "Inlay/Onlay Crown Bridge",
        "family": "Inlay/Onlay"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Inlay/Onlay_D0.6",
    "subtitle": "Inlay/Onlay_D0.6",
    "material": "Zirconia",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "partTypes": [
      "onlay_single",
      "onlaycrown_single"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Inlay/Onlay / Inlay/Onlay Crown 가공용 템플릿입니다.",
        "en": "Template for machining Inlay/Onlay / Inlay/Onlay Crown in Zirconia.",
        "ja": "Zirconia素材のInlay/Onlay / Inlay/Onlay Crown加工用テンプレートです。"
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
        "ko": "Setting the 인레이/온레이 lines is mandatory",
        "en": "Setting the Inlay/Onlay lines is mandatory",
        "ja": "材質：ジルコニアディスク/ブロック\nインレー/オンレーラインの設定は必須です"
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
        "title": "Fissure machining_[Z0.6BX05]",
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
        "sourceJobId": "5554fbc3-929c-11ef-9ea4-14857f7eaaee"
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
        "sourceJobId": "be975941-d0b8-11ef-9ee8-14857f7eaaee"
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
    "sourceProfileId": "33f00f3a-929d-11ef-9ea4-14857f7eaaee",
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
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Abutment Crown_NCS (highnees)",
    "subtitle": "Abutment Crown_NCS (highnees)",
    "material": "Zirconia",
    "type": "Abutment Crown",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_single"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Abutment Crown 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown in Zirconia.",
        "ja": "Zirconia素材のAbutment Crown加工用テンプレートです。"
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
        "ko": "하이니스 시스템의 인터페이스로 디자인 되어있어야 합니다.\n어버트먼트 베이스 라인 설정은 필수입니다.\n경계(Emergence) 라인 설정은 필수는 아니지만, 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.",
        "en": "Setting the Abutment base lines is mandatory.\nThe Emergence lines are optional, but it is recommended for better texture quality around interfaces.",
        "ja": "材質：ジルコニアディスク/ブロック\nアバットメントのベースラインの設定は必須です。\nEmergence ラインはオプションですが、インターフェイス周囲のテクスチャ品質を向上させるために推奨されます。"
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
        "title": "Finishing inside abutment bases_[Z1.0Bx15] (highnees)",
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
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "50eb93d9-abdd-11ef-9ec0-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06] (highnees)",
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
        "sourceJobId": "50eb93f4-abdd-11ef-9ec0-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07]_Flat R",
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
        "sourceJobId": "3bece077-4518-11f0-acdd-ec4c8c8ee783"
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
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "3a2abb92-4c31-11f0-8410-ec4c8c8ee783"
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
        "sourceJobId": "5fb0f39c-89d2-11ef-9e99-14857f7eaaee"
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
        "sourceJobId": "e4b493f7-d0b4-11ef-9ee8-14857f7eaaee"
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
    "sourceToolCount": 7,
    "sourceRevision": "260830",
    "sourceProfileId": "7a02a11e-abdd-11ef-9ec0-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_single",
        "type": "Abutment Crown",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Abutment Crown Bridge_NCS (highnees)",
    "subtitle": "Abutment Crown Bridge_NCS (highnees)",
    "material": "Zirconia",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Abutment Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown Bridge in Zirconia.",
        "ja": "Zirconia素材のAbutment Crown Bridge加工用テンプレートです。"
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
        "ko": "하이니스 시스템의 인터페이스로 디자인 되어있어야합니다.\n어버트먼트 베이스 라인 설정은 필수입니다.\n경계(Emergence) 라인 설정은 필수는 아니지만, 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.",
        "en": "Setting the Abutment base lines is mandatory.\nThe Emergence lines are optional, but it is recommended for better texture quality around interfaces.",
        "ja": "材質：ジルコニアディスク/ブロック\nアバットメントのベースラインの設定は必須です。\nEmergence ラインはオプションですが、インターフェイス周囲のテクスチャ品質を向上させるために推奨されます。"
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
        "title": "Finishing inside copings_[Z1.0Bx15]_5x",
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
          }
        ],
        "sourceJobId": "3aa77fc0-89d0-11ef-9e99-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[Z1.0Bx15] (highnees)",
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
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "15ab2a6b-b206-11ef-9ec7-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06] (highnees)",
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
        "sourceJobId": "ac9f86be-b205-11ef-9ec7-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07]_Flat R",
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
        "sourceJobId": "ebd25d1c-4519-11f0-acdd-ec4c8c8ee783"
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
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "6c940134-4c30-11f0-8410-ec4c8c8ee783"
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
        "sourceJobId": "3aa77fdb-89d0-11ef-9e99-14857f7eaaee"
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
        "sourceJobId": "d18a0cec-d0b3-11ef-9ee8-14857f7eaaee"
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
    "sourceProfileId": "52be39d0-b209-11ef-9ec7-14857f7eaaee",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_bridge",
        "type": "Abutment Crown Bridge",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Abutment Crown_NCS (Megalink)",
    "subtitle": "Abutment Crown_NCS (Megalink)",
    "material": "Zirconia",
    "type": "Abutment Crown",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_single"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Abutment Crown 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown in Zirconia.",
        "ja": "Zirconia素材のAbutment Crown加工用テンプレートです。"
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
        "ko": "메가링크 시스템의 인터페이스로 디자인 되어있어야 합니다.\n어버트먼트 베이스 라인 설정은 필수입니다.\n경계(Emergence) 라인 설정은 필수는 아니지만, 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.",
        "en": "Setting the Abutment base lines is mandatory.\nThe Emergence lines are optional, but it is recommended for better texture quality around interfaces.",
        "ja": "材質：ジルコニアディスク/ブロック\nアバットメントのベースラインの設定は必須です。\nEmergence ラインはオプションですが、インターフェイス周囲のテクスチャ品質を向上させるために推奨されます。"
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
        "title": "Finishing inside abutment bases_[Z1.0Bx15] (highnees)",
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
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          },
          {
            "ko": "XY 여유량 조정 범위: ≥ -0.06, ≤ 0.06",
            "en": "XY allowance range: ≥ -0.06, ≤ 0.06",
            "ja": "XY余裕量の調整範囲：≥ -0.06, ≤ 0.06"
          }
        ],
        "sourceJobId": "50eb93d9-abdd-11ef-9ec0-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06] (highnees)",
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
        "sourceJobId": "50eb93f4-abdd-11ef-9ec0-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07]_Flat R",
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
        "sourceJobId": "3bece077-4518-11f0-acdd-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5FL_L15] (Megalink)",
        "descriptions": [
          {
            "ko": "연결 공구: T42_M1.5FL_L15",
            "en": "Linked tool: T42_M1.5FL_L15",
            "ja": "割り当て工具：T42_M1.5FL_L15"
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
          },
          {
            "ko": "XY 여유량 조정 범위: ≥ -0.06, ≤ 0.06",
            "en": "XY allowance range: ≥ -0.06, ≤ 0.06",
            "ja": "XY余裕量の調整範囲：≥ -0.06, ≤ 0.06"
          }
        ],
        "sourceJobId": "803822d1-4805-11f0-840d-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[Z0.6BX05] (Megalink)",
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
        "sourceJobId": "50c023c3-4dad-11f0-8411-ec4c8c8ee783"
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
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "3a2abb92-4c31-11f0-8410-ec4c8c8ee783"
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
        "sourceJobId": "5fb0f39c-89d2-11ef-9e99-14857f7eaaee"
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
        "sourceJobId": "e4b493f7-d0b4-11ef-9ee8-14857f7eaaee"
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
      },
      {
        "id": "T42",
        "name": "M1.5FL_L15",
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
    "sourceToolCount": 7,
    "sourceRevision": "260830",
    "sourceProfileId": "53823438-47fd-11f0-840d-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_single",
        "type": "Abutment Crown",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Abutment crown",
    "subtitle": "Abutment crown",
    "material": "Zirconia",
    "type": "Abutment Crown",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_single"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Abutment Crown 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown in Zirconia.",
        "ja": "Zirconia素材のAbutment Crown加工用テンプレートです。"
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
        "ko": "어버트먼트 베이스 라인 설정은 필수입니다.\n경계(Emergence) 라인 설정은 필수는 아니지만, 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.",
        "en": "Setting the Abutment base lines is mandatory.\nThe Emergence lines are optional, but it is recommended for better texture quality around interfaces.",
        "ja": "材質：ジルコニアディスク/ブロック\nアバットメントのベースラインの設定は必須です。\nEmergence ラインはオプションですが、インターフェイス周囲のテクスチャ品質を向上させるために推奨されます。"
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
        "title": "Finishing inside abutment bases_[Z1.0Bx15]",
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
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "89b29467-5dec-11f0-8416-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07]_FR 1.5",
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
        "sourceJobId": "05affd60-8883-11f0-bc59-ec4c8c8ee783"
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
          },
          {
            "ko": "스텝다운: 조정 가능 (기본값: 0.07)",
            "en": "Stepdown: Adjustable (Default: 0.07)",
            "ja": "ステップダウン：調整可能（初期値：0.07）"
          }
        ],
        "sourceJobId": "10ea4e35-4831-11f0-840e-ec4c8c8ee783"
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
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          },
          {
            "ko": "스텝다운: 조정 가능 (기본값: 0.07)",
            "en": "Stepdown: Adjustable (Default: 0.07)",
            "ja": "ステップダウン：調整可能（初期値：0.07）"
          }
        ],
        "sourceJobId": "94698212-4832-11f0-840e-ec4c8c8ee783"
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
        "sourceJobId": "10ea4e44-4831-11f0-840e-ec4c8c8ee783"
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
        "sourceJobId": "10ea4e50-4831-11f0-840e-ec4c8c8ee783"
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
    "sourceProfileId": "9469823a-4832-11f0-840e-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_single",
        "type": "Abutment Crown",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Abutment Crown Bridge_NCS (B0.6)",
    "subtitle": "Abutment Crown Bridge_NCS (B0.6)",
    "material": "Zirconia",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Abutment Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown Bridge in Zirconia.",
        "ja": "Zirconia素材のAbutment Crown Bridge加工用テンプレートです。"
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
        "ko": "어버트먼트 베이스 라인 설정은 필수입니다.\n경계(Emergence) 라인 설정은 필수는 아니지만, 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.",
        "en": "Setting the Abutment base lines is mandatory.\nThe Emergence lines are optional, but it is recommended for better texture quality around interfaces.",
        "ja": "材質：ジルコニアディスク/ブロック\nアバットメントのベースラインの設定は必須です。\nEmergence ラインはオプションですが、インターフェイス周囲のテクスチャ品質を向上させるために推奨されます。"
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
        "title": "Finishing inside copings_[Z1.0Bx15]_5x",
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
          }
        ],
        "sourceJobId": "3aa77fc0-89d0-11ef-9e99-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[Z1.0Bx15] (highnees)",
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
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "15ab2a6b-b206-11ef-9ec7-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06] (highnees)",
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
        "sourceJobId": "ac9f86be-b205-11ef-9ec7-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07]_Flat R",
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
        "sourceJobId": "ebd25d1c-4519-11f0-acdd-ec4c8c8ee783"
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
        "sourceJobId": "6c940134-4c30-11f0-8410-ec4c8c8ee783"
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
        "sourceJobId": "3aa77fdb-89d0-11ef-9e99-14857f7eaaee"
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
        "sourceJobId": "d18a0cec-d0b3-11ef-9ee8-14857f7eaaee"
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
    "sourceProfileId": "b75df899-4c30-11f0-8410-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_bridge",
        "type": "Abutment Crown Bridge",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Abutment Crown_NCS (B0.6)",
    "subtitle": "Abutment Crown_NCS (B0.6)",
    "material": "Zirconia",
    "type": "Abutment Crown",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_single"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Abutment Crown 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown in Zirconia.",
        "ja": "Zirconia素材のAbutment Crown加工用テンプレートです。"
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
        "ko": "어버트먼트 베이스 라인 설정은 필수입니다.\n경계(Emergence) 라인 설정은 필수는 아니지만, 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.",
        "en": "Setting the Abutment base lines is mandatory.\nThe Emergence lines are optional, but it is recommended for better texture quality around interfaces.",
        "ja": "材質：ジルコニアディスク/ブロック\nアバットメントのベースラインの設定は必須です。\nEmergence ラインはオプションですが、インターフェイス周囲のテクスチャ品質を向上させるために推奨されます。"
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
        "title": "Finishing inside abutment bases_[Z1.0Bx15] (highnees)",
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
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          },
          {
            "ko": "XY 여유량 조정 범위: ≥ -0.06, ≤ 0.06",
            "en": "XY allowance range: ≥ -0.06, ≤ 0.06",
            "ja": "XY余裕量の調整範囲：≥ -0.06, ≤ 0.06"
          }
        ],
        "sourceJobId": "50eb93d9-abdd-11ef-9ec0-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06] (highnees)",
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
        "sourceJobId": "50eb93f4-abdd-11ef-9ec0-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07]_Flat R",
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
        "sourceJobId": "3bece077-4518-11f0-acdd-ec4c8c8ee783"
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
        "sourceJobId": "3a2abb92-4c31-11f0-8410-ec4c8c8ee783"
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
        "sourceJobId": "5fb0f39c-89d2-11ef-9e99-14857f7eaaee"
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
        "sourceJobId": "e4b493f7-d0b4-11ef-9ee8-14857f7eaaee"
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
    "sourceToolCount": 7,
    "sourceRevision": "260830",
    "sourceProfileId": "46591a10-4c31-11f0-8410-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_single",
        "type": "Abutment Crown",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Abutment Crown Bridge_NCS (Megalink)",
    "subtitle": "Abutment Crown Bridge_NCS (Megalink)",
    "material": "Zirconia",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Abutment Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown Bridge in Zirconia.",
        "ja": "Zirconia素材のAbutment Crown Bridge加工用テンプレートです。"
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
        "ko": "메가링크 시스템의 인터페이스로 디자인 되어있어야 합니다.\n어버트먼트 베이스 라인 설정은 필수입니다.\n경계(Emergence) 라인 설정은 필수는 아니지만, 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.",
        "en": "Setting the Abutment base lines is mandatory.\nThe Emergence lines are optional, but it is recommended for better texture quality around interfaces.",
        "ja": "材質：ジルコニアディスク/ブロック\nアバットメントのベースラインの設定は必須です。\nEmergence ラインはオプションですが、インターフェイス周囲のテクスチャ品質を向上させるために推奨されます。"
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
        "title": "Finishing inside copings_[Z1.0Bx15]_5x",
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
          }
        ],
        "sourceJobId": "3aa77fc0-89d0-11ef-9e99-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[Z1.0Bx15] (highnees)",
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
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "15ab2a6b-b206-11ef-9ec7-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06] (highnees)",
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
        "sourceJobId": "ac9f86be-b205-11ef-9ec7-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07]_Flat R",
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
        "sourceJobId": "ebd25d1c-4519-11f0-acdd-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5FL_L15] (Megalink)",
        "descriptions": [
          {
            "ko": "연결 공구: T42_M1.5FL_L15",
            "en": "Linked tool: T42_M1.5FL_L15",
            "ja": "割り当て工具：T42_M1.5FL_L15"
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
          },
          {
            "ko": "XY 여유량 조정 범위: ≥ -0.06, ≤ 0.06",
            "en": "XY allowance range: ≥ -0.06, ≤ 0.06",
            "ja": "XY余裕量の調整範囲：≥ -0.06, ≤ 0.06"
          }
        ],
        "sourceJobId": "26c54ed2-4da7-11f0-8411-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[Z0.6BX05] (Megalink)",
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
        "sourceJobId": "5e9bc509-4dad-11f0-8411-ec4c8c8ee783"
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
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "6c940134-4c30-11f0-8410-ec4c8c8ee783"
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
        "sourceJobId": "3aa77fdb-89d0-11ef-9e99-14857f7eaaee"
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
        "sourceJobId": "d18a0cec-d0b3-11ef-9ee8-14857f7eaaee"
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
      },
      {
        "id": "T42",
        "name": "M1.5FL_L15",
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
    "sourceProfileId": "399e9c1d-4da7-11f0-8411-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_bridge",
        "type": "Abutment Crown Bridge",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Abutment Crown_NCS (Urdent)",
    "subtitle": "Abutment Crown_NCS (Urdent)",
    "material": "Zirconia",
    "type": "Abutment Crown",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_single"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Abutment Crown 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown in Zirconia.",
        "ja": "Zirconia素材のAbutment Crown加工用テンプレートです。"
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
        "title": "Finishing inside abutment bases_[Z1.0Bx15] (highnees)",
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
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          },
          {
            "ko": "XY 여유량 조정 범위: ≥ -0.06, ≤ 0.06",
            "en": "XY allowance range: ≥ -0.06, ≤ 0.06",
            "ja": "XY余裕量の調整範囲：≥ -0.06, ≤ 0.06"
          }
        ],
        "sourceJobId": "50eb93d9-abdd-11ef-9ec0-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06] (highnees)",
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
          },
          {
            "ko": "XY 여유량 조정 범위: ≥ -0.06, ≤ 0.06",
            "en": "XY allowance range: ≥ -0.06, ≤ 0.06",
            "ja": "XY余裕量の調整範囲：≥ -0.06, ≤ 0.06"
          }
        ],
        "sourceJobId": "50eb93f4-abdd-11ef-9ec0-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07]_Flat R",
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
        "sourceJobId": "3bece077-4518-11f0-acdd-ec4c8c8ee783"
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
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "3a2abb92-4c31-11f0-8410-ec4c8c8ee783"
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
        "sourceJobId": "5fb0f39c-89d2-11ef-9e99-14857f7eaaee"
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
        "sourceJobId": "e4b493f7-d0b4-11ef-9ee8-14857f7eaaee"
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
        "optional": false,
        "comments": []
      },
      {
        "id": "T43",
        "name": "M1.0F_L06",
        "imageAvailable": false,
        "optional": false,
        "comments": []
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
    "sourceToolCount": 7,
    "sourceRevision": "260830",
    "sourceProfileId": "71e3b82a-cf28-11f0-a4a5-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_single",
        "type": "Abutment Crown",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Abutment Crown Bridge_NCS (Urdent)",
    "subtitle": "Abutment Crown Bridge_NCS (Urdent)",
    "material": "Zirconia",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Abutment Crown Bridge 가공용 템플릿입니다.",
        "en": "Template for machining Abutment Crown Bridge in Zirconia.",
        "ja": "Zirconia素材のAbutment Crown Bridge加工用テンプレートです。"
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
        "title": "Finishing inside copings_[Z1.0Bx15]_5x",
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
          }
        ],
        "sourceJobId": "3aa77fc0-89d0-11ef-9e99-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[Z1.0Bx15] (highnees)",
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
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "15ab2a6b-b206-11ef-9ec7-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.0F_L06] (highnees)",
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
        "sourceJobId": "ac9f86be-b205-11ef-9ec7-14857f7eaaee"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07]_Flat R",
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
        "sourceJobId": "ebd25d1c-4519-11f0-acdd-ec4c8c8ee783"
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
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0)",
            "en": "XY allowance: Adjustable (Default: 0)",
            "ja": "XY余裕量：調整可能（初期値：0）"
          }
        ],
        "sourceJobId": "6c940134-4c30-11f0-8410-ec4c8c8ee783"
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
        "sourceJobId": "3aa77fdb-89d0-11ef-9e99-14857f7eaaee"
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
        "sourceJobId": "d18a0cec-d0b3-11ef-9ee8-14857f7eaaee"
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
        "optional": false,
        "comments": []
      },
      {
        "id": "T43",
        "name": "M1.0F_L06",
        "imageAvailable": false,
        "optional": false,
        "comments": []
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
    "sourceToolCount": 7,
    "sourceRevision": "260830",
    "sourceProfileId": "0081aa66-d010-11f0-a4a5-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "abutmentcrown_bridge",
        "type": "Abutment Crown Bridge",
        "family": "Abutment"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  },
  {
    "title": "Zirconia_Over Structure",
    "subtitle": "Over Structure",
    "material": "Zirconia",
    "type": "Over Structure",
    "family": "Over Structure",
    "partTypes": [
      "bitesplint_single:Over Structure"
    ],
    "conditions": [
      {
        "ko": "Zirconia 재료의 Over Structure 가공용 템플릿입니다.",
        "en": "Template for machining Over Structure in Zirconia.",
        "ja": "Zirconia素材のOver Structure加工用テンプレートです。"
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
        "ko": "어버트먼트 베이스 라인 설정은 필수입니다.\n경계(Emergence) 라인 설정은 필수는 아니지만, 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다.",
        "en": "Setting the Abutment base lines is mandatory.\nThe Emergence lines are optional, but it is recommended for better texture quality around interfaces.",
        "ja": "材質：ジルコニアディスク/ブロック\nアバットメントのベースラインの設定は必須です。\nEmergence ラインはオプションですが、インターフェイス周囲のテクスチャ品質を向上させるために推奨されます。"
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
            "ko": "증분식 경계 옵셋 조정 범위: > 0",
            "en": "Incremental boundary offset range: > 0",
            "ja": "増分境界オフセットの調整範囲：> 0"
          },
          {
            "ko": "증분식 경계 각도: 조정 가능 (기본값: 0)",
            "en": "Incremental boundary angle: Adjustable (Default: 0)",
            "ja": "増分境界角度：調整可能（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside long cavities_[Z1.0Bx15]_3+2x",
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
        "sourceJobId": "e1015dab-f065-11f0-a4ab-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside long cavities_[Z1.0Bx15] -8X",
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
        "sourceJobId": "e1015da8-f065-11f0-a4ab-ec4c8c8ee783"
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
        "sourceJobId": "e1015dd2-f065-11f0-a4ab-ec4c8c8ee783"
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
        "sourceJobId": "e1015dde-f065-11f0-a4ab-ec4c8c8ee783"
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
    "sourceProfileId": "f2eb69c4-f069-11f0-a4ab-ec4c8c8ee783",
    "sourceCatalog": "260830-original",
    "catalogScope": null,
    "filterMemberships": [
      {
        "sourceType": "bitesplint_single:Over Structure",
        "type": "Over Structure",
        "family": "Over Structure"
      }
    ],
    "sourceMaterialId": "8de032e3-d612-11ea-b84c-c8f750809c07",
    "applicableMaterialIds": [
      "b5a796e5-028b-11de-a0e2-002186a4af5a",
      "eb876623-5629-11ef-8bc9-181deae7bdc2",
      "8de032e3-d612-11ea-b84c-c8f750809c07"
    ]
  }
];
