// Source: supplied CoCr HTML exports. Generated with node tools/build-mai-cocr.js.
window.MaiCoCrTemplates = [
  {
    "title": "CoCr_Abutment Crown Bridge_NCS (highnees)",
    "subtitle": "Abutment Crown Bridge_NCS (highnees)",
    "source": "hdNPmillstrategy.hddb + hdNPmillstrategyvariantprofile.hddb + hdTool.hddb",
    "material": "CoCr",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Co.Cr. 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "Template for milling abutment crown bridges from Co.Cr. discs.",
        "ja": "Co.Cr.ディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "Highness 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For abutment interfaces of the Highness system.",
        "ja": "Highnessシステムのアバットメントインターフェース用です。"
      },
      {
        "ko": "적용 보철물: Abutment Crown Bridge",
        "en": "Applicable prosthesis: Abutment Crown Bridge",
        "ja": "適用補綴物：Abutment Crown Bridge"
      },
      {
        "ko": "기준 DB: 260830 원본 / 기본 전략: MAI_CoCr_Abutment Crown Bridge_NCS -260630",
        "en": "Source DB: 260830 original / Base strategy: MAI_CoCr_Abutment Crown Bridge_NCS -260630",
        "ja": "基準DB：260830オリジナル / 基本ストラテジー：MAI_CoCr_Abutment Crown Bridge_NCS -260630"
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
            "ko": "증분식 경계 옵셋: 가공 경계의 추가 옵셋을 조정할 수 있습니다. (기본값: 0)",
            "en": "Incremental boundary offset: Adjusts the additional milling boundary offset. (Default: 0)",
            "ja": "増分境界オフセット：加工境界の追加オフセットを調整できます。（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 가공 경계의 추가 각도를 조정할 수 있습니다. (기본값: 0)",
            "en": "Incremental boundary angle: Adjusts the additional milling boundary angle. (Default: 0)",
            "ja": "増分境界角度：加工境界の追加角度を調整できます。（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing abutment outside_[M1.5Bx10]",
        "descriptions": [
          {
            "ko": "연결 공구: T11_M1.5B_L10",
            "en": "Linked tool: T11_M1.5B_L10",
            "ja": "割り当て工具：T11_M1.5B_L10"
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
        "sourceJobId": "6aac51c0-742c-11f1-a4d4-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5RxL07]_highnees",
        "descriptions": [
          {
            "ko": "연결 공구: T18_M1.5R_L07",
            "en": "Linked tool: T18_M1.5R_L07",
            "ja": "割り当て工具：T18_M1.5R_L07"
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
        "sourceJobId": "37909d7c-8475-11ef-9e95-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings_[M1.0Bx10] 5X",
        "descriptions": [
          {
            "ko": "연결 공구: T12_M1.0B_L10",
            "en": "Linked tool: T12_M1.0B_L10",
            "ja": "割り当て工具：T12_M1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: -0.015)",
            "en": "Allowance: Adjustable (Default: -0.015)",
            "ja": "余裕量：調整可能（初期値：-0.015）"
          }
        ],
        "sourceJobId": "5ce79b7b-c41d-11ef-9ee0-14857f7eaaee"
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 피셔 영역을 가공합니다.",
            "en": "Machines occlusal fissures with a 0.6 mm diameter tool.",
            "ja": "直径0.6mmの工具で咬合面の裂溝を加工します。"
          },
          {
            "ko": "연결 공구: T13_M0.6B_L03",
            "en": "Linked tool: T13_M0.6B_L03",
            "ja": "割り当て工具：T13_M0.6B_L03"
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
        "sourceJobId": "abb9f962-d241-11ef-9eea-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T10_M2.0B_L12 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 1/3: T10_M2.0B_L12 / Restmachining (Default: On)",
        "ja": "カテゴリー1/3：T10_M2.0B_L12 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T10_M2.0B_L12 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 2/4: T10_M2.0B_L12 / Restmachining (Default: On)",
        "ja": "カテゴリー2/4：T10_M2.0B_L12 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T11_M1.5B_L10 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 1/3: T11_M1.5B_L10 / Restmachining (Default: On)",
        "ja": "カテゴリー1/3：T11_M1.5B_L10 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T11_M1.5B_L10 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 2/4: T11_M1.5B_L10 / Restmachining (Default: On)",
        "ja": "カテゴリー2/4：T11_M1.5B_L10 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T11_M1.5B_L10 / 정삭 (기본값: 켜짐)",
        "en": "Category 1/3: T11_M1.5B_L10 / Finishing (Default: On)",
        "ja": "カテゴリー1/3：T11_M1.5B_L10 / 仕上げ（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T11_M1.5B_L10 / 정삭 (기본값: 켜짐)",
        "en": "Category 2/4: T11_M1.5B_L10 / Finishing (Default: On)",
        "ja": "カテゴリー2/4：T11_M1.5B_L10 / 仕上げ（初期値：ON）"
      },
      {
        "ko": "유형 1/2/3/4: T12_M1.0B_L10 / 잔여 가공 / Clip (기본값: 켜짐)",
        "en": "Category 1/2/3/4: T12_M1.0B_L10 / Restmachining / Clip (Default: On)",
        "ja": "カテゴリー1/2/3/4：T12_M1.0B_L10 / 削り残し加工 / Clip（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T12_M1.0B_L10 / 정삭 / Clip (기본값: 켜짐)",
        "en": "Category 1/3: T12_M1.0B_L10 / Finishing / Clip (Default: On)",
        "ja": "カテゴリー1/3：T12_M1.0B_L10 / 仕上げ / Clip（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T12_M1.0B_L10 / 정삭 / Clip (기본값: 꺼짐)",
        "en": "Category 2/4: T12_M1.0B_L10 / Finishing / Clip (Default: Off)",
        "ja": "カテゴリー2/4：T12_M1.0B_L10 / 仕上げ / Clip（初期値：OFF）"
      },
      {
        "ko": "유형 3/4: T13_M0.6B_L03 / 잔여 가공 / Clip (기본값: 켜짐)",
        "en": "Category 3/4: T13_M0.6B_L03 / Restmachining / Clip (Default: On)",
        "ja": "カテゴリー3/4：T13_M0.6B_L03 / 削り残し加工 / Clip（初期値：ON）"
      },
      {
        "ko": "유형 3: T13_M0.6B_L03 / 정삭 / Clip (기본값: 켜짐)",
        "en": "Category 3: T13_M0.6B_L03 / Finishing / Clip (Default: On)",
        "ja": "カテゴリー3：T13_M0.6B_L03 / 仕上げ / Clip（初期値：ON）"
      },
      {
        "ko": "유형 4: T13_M0.6B_L03 / 정삭 / Clip (기본값: 꺼짐)",
        "en": "Category 4: T13_M0.6B_L03 / Finishing / Clip (Default: Off)",
        "ja": "カテゴリー4：T13_M0.6B_L03 / 仕上げ / Clip（初期値：OFF）"
      }
    ],
    "interfaces": [
      {
        "ko": "유형 1: T18_M1.5R_L07 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 1: T18_M1.5R_L07 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー1：T18_M1.5R_L07 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 2: T18_M1.5R_L07 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 2: T18_M1.5R_L07 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー2：T18_M1.5R_L07 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 2: T17_M1.5F_L07 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 2: T17_M1.5F_L07 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー2：T17_M1.5F_L07 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 3: T11_M1.5B_L10 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 3: T11_M1.5B_L10 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー3：T11_M1.5B_L10 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 4: T12_M1.0B_L10 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 4: T12_M1.0B_L10 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー4：T12_M1.0B_L10 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 5: T19_M1.0F_L06 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 5: T19_M1.0F_L06 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー5：T19_M1.0F_L06 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 6: T13_M0.6B_L03 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 6: T13_M0.6B_L03 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー6：T13_M0.6B_L03 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 7: T20_M0.5F_L06 / 외벽 (기본값: 켜짐)",
        "en": "Category 7: T20_M0.5F_L06 / Outer wall (Default: On)",
        "ja": "カテゴリー7：T20_M0.5F_L06 / 外壁（初期値：ON）"
      },
      {
        "ko": "유형 30: T24_M2.0T_L06 / 내벽 (기본값: 켜짐)",
        "en": "Category 30: T24_M2.0T_L06 / Inner wall (Default: On)",
        "ja": "カテゴリー30：T24_M2.0T_L06 / 内壁（初期値：ON）"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B_L12",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B_L12",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B_L10",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B_L10",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B_L03",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F_L07",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R_L07",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F_L06",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F_L06",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T_L08",
        "optional": true,
        "comments": [
          {
            "ko": "앵글드 스크류 채널의 T-cut 공정에서 사용합니다.",
            "en": "Used in T-cut processes for angled screw channels.",
            "ja": "アングルドスクリューチャンネルのT-cut工程で使用します。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T_L06",
        "optional": true,
        "comments": [
          {
            "ko": "앵글드 스크류 채널의 T-cut 및 인터페이스 유형 30 공정에서 사용합니다.",
            "en": "Used in T-cut processes for angled screw channels and interface category 30 processes.",
            "ja": "アングルドスクリューチャンネルのT-cutおよびインターフェースカテゴリー30の工程で使用します。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH_L06(P0.4)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH_L06(P0.35)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH_L06(P0.35)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH_L06(P0.3)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
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
    "sourceToolCount": 18,
    "sourceRevision": "260830",
    "sourceProfileId": "73150228-c41d-11ef-9ee0-14857f7eaaee"
  },
  {
    "title": "CoCr_Abutment Crown Bridge_NCS (M-Fix)",
    "subtitle": "Abutment Crown Bridge_NCS (M-Fix)",
    "source": "hdNPmillstrategy.hddb + hdNPmillstrategyvariantprofile.hddb + hdTool.hddb",
    "material": "CoCr",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Co.Cr. 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "Template for milling abutment crown bridges from Co.Cr. discs.",
        "ja": "Co.Cr.ディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "M-Fix 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For abutment interfaces of the M-Fix system.",
        "ja": "M-Fixシステムのアバットメントインターフェース用です。"
      },
      {
        "ko": "적용 보철물: Abutment Crown Bridge",
        "en": "Applicable prosthesis: Abutment Crown Bridge",
        "ja": "適用補綴物：Abutment Crown Bridge"
      },
      {
        "ko": "기준 DB: 260830 원본 / 기본 전략: MAI_CoCr_Abutment Crown Bridge_NCS -260630",
        "en": "Source DB: 260830 original / Base strategy: MAI_CoCr_Abutment Crown Bridge_NCS -260630",
        "ja": "基準DB：260830オリジナル / 基本ストラテジー：MAI_CoCr_Abutment Crown Bridge_NCS -260630"
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
            "ko": "증분식 경계 옵셋: 가공 경계의 추가 옵셋을 조정할 수 있습니다. (기본값: 0)",
            "en": "Incremental boundary offset: Adjusts the additional milling boundary offset. (Default: 0)",
            "ja": "増分境界オフセット：加工境界の追加オフセットを調整できます。（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 가공 경계의 추가 각도를 조정할 수 있습니다. (기본값: 0)",
            "en": "Incremental boundary angle: Adjusts the additional milling boundary angle. (Default: 0)",
            "ja": "増分境界角度：加工境界の追加角度を調整できます。（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing abutment outside_[M1.5Bx10]",
        "descriptions": [
          {
            "ko": "연결 공구: T11_M1.5B_L10",
            "en": "Linked tool: T11_M1.5B_L10",
            "ja": "割り当て工具：T11_M1.5B_L10"
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
        "sourceJobId": "6aac51c0-742c-11f1-a4d4-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5RxL07]_M-Fix",
        "descriptions": [
          {
            "ko": "연결 공구: T18_M1.5R_L07",
            "en": "Linked tool: T18_M1.5R_L07",
            "ja": "割り当て工具：T18_M1.5R_L07"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0.015)",
            "en": "XY allowance: Adjustable (Default: 0.015)",
            "ja": "XY余裕量：調整可能（初期値：0.015）"
          }
        ],
        "sourceJobId": "022f4016-d950-11ef-9eee-14857f7eaaee"
      },
      {
        "title": "Finishing inside copings_[M1.0Bx10] 5X",
        "descriptions": [
          {
            "ko": "연결 공구: T12_M1.0B_L10",
            "en": "Linked tool: T12_M1.0B_L10",
            "ja": "割り当て工具：T12_M1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: -0.015)",
            "en": "Allowance: Adjustable (Default: -0.015)",
            "ja": "余裕量：調整可能（初期値：-0.015）"
          }
        ],
        "sourceJobId": "5ce79b7b-c41d-11ef-9ee0-14857f7eaaee"
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 피셔 영역을 가공합니다.",
            "en": "Machines occlusal fissures with a 0.6 mm diameter tool.",
            "ja": "直径0.6mmの工具で咬合面の裂溝を加工します。"
          },
          {
            "ko": "연결 공구: T13_M0.6B_L03",
            "en": "Linked tool: T13_M0.6B_L03",
            "ja": "割り当て工具：T13_M0.6B_L03"
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
        "sourceJobId": "abb9f962-d241-11ef-9eea-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T10_M2.0B_L12 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 1/3: T10_M2.0B_L12 / Restmachining (Default: On)",
        "ja": "カテゴリー1/3：T10_M2.0B_L12 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T10_M2.0B_L12 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 2/4: T10_M2.0B_L12 / Restmachining (Default: On)",
        "ja": "カテゴリー2/4：T10_M2.0B_L12 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T11_M1.5B_L10 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 1/3: T11_M1.5B_L10 / Restmachining (Default: On)",
        "ja": "カテゴリー1/3：T11_M1.5B_L10 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T11_M1.5B_L10 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 2/4: T11_M1.5B_L10 / Restmachining (Default: On)",
        "ja": "カテゴリー2/4：T11_M1.5B_L10 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T11_M1.5B_L10 / 정삭 (기본값: 켜짐)",
        "en": "Category 1/3: T11_M1.5B_L10 / Finishing (Default: On)",
        "ja": "カテゴリー1/3：T11_M1.5B_L10 / 仕上げ（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T11_M1.5B_L10 / 정삭 (기본값: 켜짐)",
        "en": "Category 2/4: T11_M1.5B_L10 / Finishing (Default: On)",
        "ja": "カテゴリー2/4：T11_M1.5B_L10 / 仕上げ（初期値：ON）"
      },
      {
        "ko": "유형 1/2/3/4: T12_M1.0B_L10 / 잔여 가공 / Clip (기본값: 켜짐)",
        "en": "Category 1/2/3/4: T12_M1.0B_L10 / Restmachining / Clip (Default: On)",
        "ja": "カテゴリー1/2/3/4：T12_M1.0B_L10 / 削り残し加工 / Clip（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T12_M1.0B_L10 / 정삭 / Clip (기본값: 켜짐)",
        "en": "Category 1/3: T12_M1.0B_L10 / Finishing / Clip (Default: On)",
        "ja": "カテゴリー1/3：T12_M1.0B_L10 / 仕上げ / Clip（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T12_M1.0B_L10 / 정삭 / Clip (기본값: 꺼짐)",
        "en": "Category 2/4: T12_M1.0B_L10 / Finishing / Clip (Default: Off)",
        "ja": "カテゴリー2/4：T12_M1.0B_L10 / 仕上げ / Clip（初期値：OFF）"
      },
      {
        "ko": "유형 3/4: T13_M0.6B_L03 / 잔여 가공 / Clip (기본값: 켜짐)",
        "en": "Category 3/4: T13_M0.6B_L03 / Restmachining / Clip (Default: On)",
        "ja": "カテゴリー3/4：T13_M0.6B_L03 / 削り残し加工 / Clip（初期値：ON）"
      },
      {
        "ko": "유형 3: T13_M0.6B_L03 / 정삭 / Clip (기본값: 켜짐)",
        "en": "Category 3: T13_M0.6B_L03 / Finishing / Clip (Default: On)",
        "ja": "カテゴリー3：T13_M0.6B_L03 / 仕上げ / Clip（初期値：ON）"
      },
      {
        "ko": "유형 4: T13_M0.6B_L03 / 정삭 / Clip (기본값: 꺼짐)",
        "en": "Category 4: T13_M0.6B_L03 / Finishing / Clip (Default: Off)",
        "ja": "カテゴリー4：T13_M0.6B_L03 / 仕上げ / Clip（初期値：OFF）"
      }
    ],
    "interfaces": [
      {
        "ko": "유형 1: T18_M1.5R_L07 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 1: T18_M1.5R_L07 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー1：T18_M1.5R_L07 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 2: T18_M1.5R_L07 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 2: T18_M1.5R_L07 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー2：T18_M1.5R_L07 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 2: T17_M1.5F_L07 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 2: T17_M1.5F_L07 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー2：T17_M1.5F_L07 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 3: T11_M1.5B_L10 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 3: T11_M1.5B_L10 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー3：T11_M1.5B_L10 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 4: T12_M1.0B_L10 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 4: T12_M1.0B_L10 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー4：T12_M1.0B_L10 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 5: T19_M1.0F_L06 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 5: T19_M1.0F_L06 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー5：T19_M1.0F_L06 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 6: T13_M0.6B_L03 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 6: T13_M0.6B_L03 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー6：T13_M0.6B_L03 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 7: T20_M0.5F_L06 / 외벽 (기본값: 켜짐)",
        "en": "Category 7: T20_M0.5F_L06 / Outer wall (Default: On)",
        "ja": "カテゴリー7：T20_M0.5F_L06 / 外壁（初期値：ON）"
      },
      {
        "ko": "유형 2: T17_M1.5F_L07 / 내벽 (기본값: 꺼짐)",
        "en": "Category 2: T17_M1.5F_L07 / Inner wall (Default: Off)",
        "ja": "カテゴリー2：T17_M1.5F_L07 / 内壁（初期値：OFF）"
      },
      {
        "ko": "유형 30: T24_M2.0T_L06 / 내벽 (기본값: 켜짐)",
        "en": "Category 30: T24_M2.0T_L06 / Inner wall (Default: On)",
        "ja": "カテゴリー30：T24_M2.0T_L06 / 内壁（初期値：ON）"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B_L12",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B_L12",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B_L10",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B_L10",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B_L03",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F_L07",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R_L07",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F_L06",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F_L06",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T_L08",
        "optional": true,
        "comments": [
          {
            "ko": "앵글드 스크류 채널의 T-cut 공정에서 사용합니다.",
            "en": "Used in T-cut processes for angled screw channels.",
            "ja": "アングルドスクリューチャンネルのT-cut工程で使用します。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T_L06",
        "optional": true,
        "comments": [
          {
            "ko": "앵글드 스크류 채널의 T-cut 및 인터페이스 유형 30 공정에서 사용합니다.",
            "en": "Used in T-cut processes for angled screw channels and interface category 30 processes.",
            "ja": "アングルドスクリューチャンネルのT-cutおよびインターフェースカテゴリー30の工程で使用します。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH_L06(P0.4)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH_L06(P0.35)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH_L06(P0.35)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH_L06(P0.3)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
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
    "sourceToolCount": 18,
    "sourceRevision": "260830",
    "sourceProfileId": "33649da8-d950-11ef-9eee-14857f7eaaee"
  },
  {
    "title": "CoCr_Abutment Crown_NCS (highnees)",
    "subtitle": "Abutment Crown_NCS (highnees)",
    "source": "hdNPmillstrategy.hddb + hdNPmillstrategyvariantprofile.hddb + hdTool.hddb",
    "material": "CoCr",
    "type": "Abutment Crown",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_single"
    ],
    "conditions": [
      {
        "ko": "Co.Cr. 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.",
        "en": "Template for milling abutment crowns from Co.Cr. discs.",
        "ja": "Co.Cr.ディスクでアバットメントクラウンを加工するテンプレートです。"
      },
      {
        "ko": "Highness 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For abutment interfaces of the Highness system.",
        "ja": "Highnessシステムのアバットメントインターフェース用です。"
      },
      {
        "ko": "적용 보철물: Abutment Crown",
        "en": "Applicable prosthesis: Abutment Crown",
        "ja": "適用補綴物：Abutment Crown"
      },
      {
        "ko": "기준 DB: 260830 원본 / 기본 전략: MAI_CoCr_Abutment Crown_NCS -260625",
        "en": "Source DB: 260830 original / Base strategy: MAI_CoCr_Abutment Crown_NCS -260625",
        "ja": "基準DB：260830オリジナル / 基本ストラテジー：MAI_CoCr_Abutment Crown_NCS -260625"
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
            "ko": "증분식 경계 옵셋: 가공 경계의 추가 옵셋을 조정할 수 있습니다. (기본값: 0)",
            "en": "Incremental boundary offset: Adjusts the additional milling boundary offset. (Default: 0)",
            "ja": "増分境界オフセット：加工境界の追加オフセットを調整できます。（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 가공 경계의 추가 각도를 조정할 수 있습니다. (기본값: 0)",
            "en": "Incremental boundary angle: Adjusts the additional milling boundary angle. (Default: 0)",
            "ja": "増分境界角度：加工境界の追加角度を調整できます。（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.5RxL07]_highnees",
        "descriptions": [
          {
            "ko": "연결 공구: T18_M1.5R_L07",
            "en": "Linked tool: T18_M1.5R_L07",
            "ja": "割り当て工具：T18_M1.5R_L07"
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
        "sourceJobId": "b12545ed-c41d-11ef-9ee0-14857f7eaaee"
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 피셔 영역을 가공합니다.",
            "en": "Machines occlusal fissures with a 0.6 mm diameter tool.",
            "ja": "直径0.6mmの工具で咬合面の裂溝を加工します。"
          },
          {
            "ko": "연결 공구: T13_M0.6B_L03",
            "en": "Linked tool: T13_M0.6B_L03",
            "ja": "割り当て工具：T13_M0.6B_L03"
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
        "sourceJobId": "ba35e06f-d240-11ef-9eea-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T10_M2.0B_L12 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 1/3: T10_M2.0B_L12 / Restmachining (Default: On)",
        "ja": "カテゴリー1/3：T10_M2.0B_L12 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T10_M2.0B_L12 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 2/4: T10_M2.0B_L12 / Restmachining (Default: On)",
        "ja": "カテゴリー2/4：T10_M2.0B_L12 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T11_M1.5B_L10 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 1/3: T11_M1.5B_L10 / Restmachining (Default: On)",
        "ja": "カテゴリー1/3：T11_M1.5B_L10 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T11_M1.5B_L10 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 2/4: T11_M1.5B_L10 / Restmachining (Default: On)",
        "ja": "カテゴリー2/4：T11_M1.5B_L10 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T11_M1.5B_L10 / 정삭 (기본값: 켜짐)",
        "en": "Category 1/3: T11_M1.5B_L10 / Finishing (Default: On)",
        "ja": "カテゴリー1/3：T11_M1.5B_L10 / 仕上げ（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T11_M1.5B_L10 / 정삭 (기본값: 켜짐)",
        "en": "Category 2/4: T11_M1.5B_L10 / Finishing (Default: On)",
        "ja": "カテゴリー2/4：T11_M1.5B_L10 / 仕上げ（初期値：ON）"
      },
      {
        "ko": "유형 1/2/3/4: T12_M1.0B_L10 / 잔여 가공 / Clip (기본값: 켜짐)",
        "en": "Category 1/2/3/4: T12_M1.0B_L10 / Restmachining / Clip (Default: On)",
        "ja": "カテゴリー1/2/3/4：T12_M1.0B_L10 / 削り残し加工 / Clip（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T12_M1.0B_L10 / 정삭 / Clip (기본값: 켜짐)",
        "en": "Category 1/3: T12_M1.0B_L10 / Finishing / Clip (Default: On)",
        "ja": "カテゴリー1/3：T12_M1.0B_L10 / 仕上げ / Clip（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T12_M1.0B_L10 / 정삭 / Clip (기본값: 꺼짐)",
        "en": "Category 2/4: T12_M1.0B_L10 / Finishing / Clip (Default: Off)",
        "ja": "カテゴリー2/4：T12_M1.0B_L10 / 仕上げ / Clip（初期値：OFF）"
      },
      {
        "ko": "유형 3/4: T13_M0.6B_L03 / 잔여 가공 / Clip (기본값: 켜짐)",
        "en": "Category 3/4: T13_M0.6B_L03 / Restmachining / Clip (Default: On)",
        "ja": "カテゴリー3/4：T13_M0.6B_L03 / 削り残し加工 / Clip（初期値：ON）"
      },
      {
        "ko": "유형 3: T13_M0.6B_L03 / 정삭 / Clip (기본값: 켜짐)",
        "en": "Category 3: T13_M0.6B_L03 / Finishing / Clip (Default: On)",
        "ja": "カテゴリー3：T13_M0.6B_L03 / 仕上げ / Clip（初期値：ON）"
      },
      {
        "ko": "유형 4: T13_M0.6B_L03 / 정삭 / Clip (기본값: 꺼짐)",
        "en": "Category 4: T13_M0.6B_L03 / Finishing / Clip (Default: Off)",
        "ja": "カテゴリー4：T13_M0.6B_L03 / 仕上げ / Clip（初期値：OFF）"
      }
    ],
    "interfaces": [
      {
        "ko": "유형 2: T17_M1.5F_L07 / 내벽 (기본값: 켜짐)",
        "en": "Category 2: T17_M1.5F_L07 / Inner wall (Default: On)",
        "ja": "カテゴリー2：T17_M1.5F_L07 / 内壁（初期値：ON）"
      },
      {
        "ko": "유형 30: T24_M2.0T_L06 / 내벽 (기본값: 켜짐)",
        "en": "Category 30: T24_M2.0T_L06 / Inner wall (Default: On)",
        "ja": "カテゴリー30：T24_M2.0T_L06 / 内壁（初期値：ON）"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B_L12",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B_L12",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B_L10",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B_L10",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B_L03",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F_L07",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R_L07",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T_L08",
        "optional": true,
        "comments": [
          {
            "ko": "앵글드 스크류 채널의 T-cut 공정에서 사용합니다.",
            "en": "Used in T-cut processes for angled screw channels.",
            "ja": "アングルドスクリューチャンネルのT-cut工程で使用します。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T_L06",
        "optional": true,
        "comments": [
          {
            "ko": "앵글드 스크류 채널의 T-cut 및 인터페이스 유형 30 공정에서 사용합니다.",
            "en": "Used in T-cut processes for angled screw channels and interface category 30 processes.",
            "ja": "アングルドスクリューチャンネルのT-cutおよびインターフェースカテゴリー30の工程で使用します。"
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
    "sourceToolCount": 12,
    "sourceRevision": "260830",
    "sourceProfileId": "5f6d0dab-c41e-11ef-9ee0-14857f7eaaee"
  },
  {
    "title": "CoCr_Abutment Crown_NCS (M-Fix)",
    "subtitle": "Abutment Crown_NCS (M-Fix)",
    "source": "hdNPmillstrategy.hddb + hdNPmillstrategyvariantprofile.hddb + hdTool.hddb",
    "material": "CoCr",
    "type": "Abutment Crown",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_single"
    ],
    "conditions": [
      {
        "ko": "Co.Cr. 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.",
        "en": "Template for milling abutment crowns from Co.Cr. discs.",
        "ja": "Co.Cr.ディスクでアバットメントクラウンを加工するテンプレートです。"
      },
      {
        "ko": "M-Fix 시스템의 어버트먼트 인터페이스용입니다.",
        "en": "For abutment interfaces of the M-Fix system.",
        "ja": "M-Fixシステムのアバットメントインターフェース用です。"
      },
      {
        "ko": "적용 보철물: Abutment Crown",
        "en": "Applicable prosthesis: Abutment Crown",
        "ja": "適用補綴物：Abutment Crown"
      },
      {
        "ko": "기준 DB: 260830 원본 / 기본 전략: MAI_CoCr_Abutment Crown_NCS -260625",
        "en": "Source DB: 260830 original / Base strategy: MAI_CoCr_Abutment Crown_NCS -260625",
        "ja": "基準DB：260830オリジナル / 基本ストラテジー：MAI_CoCr_Abutment Crown_NCS -260625"
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
            "ko": "증분식 경계 옵셋: 가공 경계의 추가 옵셋을 조정할 수 있습니다. (기본값: 0)",
            "en": "Incremental boundary offset: Adjusts the additional milling boundary offset. (Default: 0)",
            "ja": "増分境界オフセット：加工境界の追加オフセットを調整できます。（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 가공 경계의 추가 각도를 조정할 수 있습니다. (기본값: 0)",
            "en": "Incremental boundary angle: Adjusts the additional milling boundary angle. (Default: 0)",
            "ja": "増分境界角度：加工境界の追加角度を調整できます。（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.5RxL07]_M-Fix",
        "descriptions": [
          {
            "ko": "연결 공구: T18_M1.5R_L07",
            "en": "Linked tool: T18_M1.5R_L07",
            "ja": "割り当て工具：T18_M1.5R_L07"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "XY 여유량: 조정 가능 (기본값: 0.015)",
            "en": "XY allowance: Adjustable (Default: 0.015)",
            "ja": "XY余裕量：調整可能（初期値：0.015）"
          }
        ],
        "sourceJobId": "3436f96e-d951-11ef-9eee-14857f7eaaee"
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 피셔 영역을 가공합니다.",
            "en": "Machines occlusal fissures with a 0.6 mm diameter tool.",
            "ja": "直径0.6mmの工具で咬合面の裂溝を加工します。"
          },
          {
            "ko": "연결 공구: T13_M0.6B_L03",
            "en": "Linked tool: T13_M0.6B_L03",
            "ja": "割り当て工具：T13_M0.6B_L03"
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
        "sourceJobId": "ba35e06f-d240-11ef-9eea-14857f7eaaee"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T10_M2.0B_L12 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 1/3: T10_M2.0B_L12 / Restmachining (Default: On)",
        "ja": "カテゴリー1/3：T10_M2.0B_L12 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T10_M2.0B_L12 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 2/4: T10_M2.0B_L12 / Restmachining (Default: On)",
        "ja": "カテゴリー2/4：T10_M2.0B_L12 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T11_M1.5B_L10 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 1/3: T11_M1.5B_L10 / Restmachining (Default: On)",
        "ja": "カテゴリー1/3：T11_M1.5B_L10 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T11_M1.5B_L10 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 2/4: T11_M1.5B_L10 / Restmachining (Default: On)",
        "ja": "カテゴリー2/4：T11_M1.5B_L10 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T11_M1.5B_L10 / 정삭 (기본값: 켜짐)",
        "en": "Category 1/3: T11_M1.5B_L10 / Finishing (Default: On)",
        "ja": "カテゴリー1/3：T11_M1.5B_L10 / 仕上げ（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T11_M1.5B_L10 / 정삭 (기본값: 켜짐)",
        "en": "Category 2/4: T11_M1.5B_L10 / Finishing (Default: On)",
        "ja": "カテゴリー2/4：T11_M1.5B_L10 / 仕上げ（初期値：ON）"
      },
      {
        "ko": "유형 1/2/3/4: T12_M1.0B_L10 / 잔여 가공 / Clip (기본값: 켜짐)",
        "en": "Category 1/2/3/4: T12_M1.0B_L10 / Restmachining / Clip (Default: On)",
        "ja": "カテゴリー1/2/3/4：T12_M1.0B_L10 / 削り残し加工 / Clip（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T12_M1.0B_L10 / 정삭 / Clip (기본값: 켜짐)",
        "en": "Category 1/3: T12_M1.0B_L10 / Finishing / Clip (Default: On)",
        "ja": "カテゴリー1/3：T12_M1.0B_L10 / 仕上げ / Clip（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T12_M1.0B_L10 / 정삭 / Clip (기본값: 꺼짐)",
        "en": "Category 2/4: T12_M1.0B_L10 / Finishing / Clip (Default: Off)",
        "ja": "カテゴリー2/4：T12_M1.0B_L10 / 仕上げ / Clip（初期値：OFF）"
      },
      {
        "ko": "유형 3/4: T13_M0.6B_L03 / 잔여 가공 / Clip (기본값: 켜짐)",
        "en": "Category 3/4: T13_M0.6B_L03 / Restmachining / Clip (Default: On)",
        "ja": "カテゴリー3/4：T13_M0.6B_L03 / 削り残し加工 / Clip（初期値：ON）"
      },
      {
        "ko": "유형 3: T13_M0.6B_L03 / 정삭 / Clip (기본값: 켜짐)",
        "en": "Category 3: T13_M0.6B_L03 / Finishing / Clip (Default: On)",
        "ja": "カテゴリー3：T13_M0.6B_L03 / 仕上げ / Clip（初期値：ON）"
      },
      {
        "ko": "유형 4: T13_M0.6B_L03 / 정삭 / Clip (기본값: 꺼짐)",
        "en": "Category 4: T13_M0.6B_L03 / Finishing / Clip (Default: Off)",
        "ja": "カテゴリー4：T13_M0.6B_L03 / 仕上げ / Clip（初期値：OFF）"
      }
    ],
    "interfaces": [
      {
        "ko": "유형 2: T17_M1.5F_L07 / 내벽 (기본값: 꺼짐)",
        "en": "Category 2: T17_M1.5F_L07 / Inner wall (Default: Off)",
        "ja": "カテゴリー2：T17_M1.5F_L07 / 内壁（初期値：OFF）"
      },
      {
        "ko": "유형 30: T24_M2.0T_L06 / 내벽 (기본값: 켜짐)",
        "en": "Category 30: T24_M2.0T_L06 / Inner wall (Default: On)",
        "ja": "カテゴリー30：T24_M2.0T_L06 / 内壁（初期値：ON）"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B_L12",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B_L12",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B_L10",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B_L10",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B_L03",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R_L07",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T_L08",
        "optional": true,
        "comments": [
          {
            "ko": "앵글드 스크류 채널의 T-cut 공정에서 사용합니다.",
            "en": "Used in T-cut processes for angled screw channels.",
            "ja": "アングルドスクリューチャンネルのT-cut工程で使用します。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T_L06",
        "optional": true,
        "comments": [
          {
            "ko": "앵글드 스크류 채널의 T-cut 및 인터페이스 유형 30 공정에서 사용합니다.",
            "en": "Used in T-cut processes for angled screw channels and interface category 30 processes.",
            "ja": "アングルドスクリューチャンネルのT-cutおよびインターフェースカテゴリー30の工程で使用します。"
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
    "sourceToolCount": 11,
    "sourceRevision": "260830",
    "sourceProfileId": "5a8ca05b-d951-11ef-9eee-14857f7eaaee"
  },
  {
    "title": "CoCr_Coping Bridge_3+2X",
    "source": "CoCr_Coping Bridge_3+2X 547cfb3e90588202b61e01ccdfa26e7c.html",
    "material": "CoCr",
    "type": "Coping Bridge",
    "family": "Coping",
    "conditions": [
      {
        "en": "This is for milling a Coping bridge in the Co.Cr. Disc.",
        "ko": "Co.Cr. 디스크에서 코핑 브릿지를 가공하는 템플릿입니다.",
        "ja": "Co.Cr.ディスクでコーピングブリッジを加工するテンプレートです。"
      },
      {
        "en": "This template includes a Finishing inside copings with a single insertion direction (3+2-axis).",
        "ko": "단일 삽입 방향(3+2축)으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "ja": "単一の挿入方向（3+2軸）でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
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
            "en": "Optional, For the User-defined area Category 3 and 4, Fissure machining",
            "ko": "선택 사항: 사용자 정의 영역 유형 3·4 및 열구 가공용입니다.",
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
            "en": "Optional, For the screw hole which has a wide diameter (bigger than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm를 초과하고 길이가 11mm를 초과하는 스크류 홀용입니다.",
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
            "en": "Optional, For the screw hole which has a narrow diameter (smaller than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm 미만이고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "ja": "任意：直径が2.25mm未満で、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings [M1.0B_L10] 3+2x",
        "descriptions": [
          {
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of crowns/copings",
            "ko": "여유량: 크라운/코핑 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：クラウン／コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径1.0mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5Fx07]",
        "descriptions": [
          {
            "en": "finishing process inside copings by the path of insertion that was set with 1.5mm Flat tool",
            "ko": "1.5mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "ja": "1.5mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ]
  },
  {
    "title": "CoCr_Coping Bridge_5X",
    "source": "CoCr_Coping Bridge_5X e27cfb3e905882dcb5d5012717213b0b.html",
    "material": "CoCr",
    "type": "Coping Bridge",
    "family": "Coping",
    "conditions": [
      {
        "en": "This is for milling a Coping bridge in the Co.Cr. Disc.",
        "ko": "Co.Cr. 디스크에서 코핑 브릿지를 가공하는 템플릿입니다.",
        "ja": "Co.Cr.ディスクでコーピングブリッジを加工するテンプレートです。"
      },
      {
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
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
            "en": "Optional, For the User-defined area Category 3 and 4, Fissure machining",
            "ko": "선택 사항: 사용자 정의 영역 유형 3·4 및 열구 가공용입니다.",
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
            "en": "Optional, For the screw hole which has a wide diameter (bigger than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm를 초과하고 길이가 11mm를 초과하는 스크류 홀용입니다.",
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
            "en": "Optional, For the screw hole which has a narrow diameter (smaller than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm 미만이고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "ja": "任意：直径が2.25mm未満で、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings [M1.0B_L10] 5x",
        "descriptions": [
          {
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of crowns/copings",
            "ko": "여유량: 크라운/코핑 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：クラウン／コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径1.0mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5Fx07]",
        "descriptions": [
          {
            "en": "finishing process inside copings by the path of insertion that was set with 1.5mm Flat tool",
            "ko": "1.5mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "ja": "1.5mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ]
  },
  {
    "title": "CoCr_Coping_3+2X",
    "source": "CoCr_Coping_3+2X 921cfb3e905882f793b6813d21378bb8.html",
    "material": "CoCr",
    "type": "Coping",
    "family": "Coping",
    "conditions": [
      {
        "en": "This is for milling a Coping in the Co.Cr. Disc.",
        "ko": "Co.Cr. 디스크에서 코핑을 가공하는 템플릿입니다.",
        "ja": "Co.Cr.ディスクでコーピングを加工するテンプレートです。"
      },
      {
        "en": "This template includes a Finishing inside copings with a single insertion direction (3+2-axis).",
        "ko": "단일 삽입 방향(3+2축)으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "ja": "単一の挿入方向（3+2軸）でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
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
            "en": "Optional, For the User-defined area Category 3 and 4, Fissure machining",
            "ko": "선택 사항: 사용자 정의 영역 유형 3·4 및 열구 가공용입니다.",
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
            "en": "Optional, For the screw hole which has a wide diameter (bigger than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm를 초과하고 길이가 11mm를 초과하는 스크류 홀용입니다.",
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
            "en": "Optional, For the screw hole which has a narrow diameter (smaller than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm 미만이고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "ja": "任意：直径が2.25mm未満で、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings [M1.0B_L10] 3+2x",
        "descriptions": [
          {
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of crowns/copings",
            "ko": "여유량: 크라운/코핑 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：クラウン／コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径1.0mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5Fx07]",
        "descriptions": [
          {
            "en": "finishing process inside copings by the path of insertion that was set with 1.5mm Flat tool",
            "ko": "1.5mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "ja": "1.5mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ]
  },
  {
    "title": "CoCr_Coping_5X",
    "source": "CoCr_Coping_5X 5cecfb3e905883ba91a181c3f40baad4.html",
    "material": "CoCr",
    "type": "Coping",
    "family": "Coping",
    "conditions": [
      {
        "en": "This is for milling a Coping in the Co.Cr. Disc.",
        "ko": "Co.Cr. 디스크에서 코핑을 가공하는 템플릿입니다.",
        "ja": "Co.Cr.ディスクでコーピングを加工するテンプレートです。"
      },
      {
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
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
            "en": "Optional, For the User-defined area Category 3 and 4, Fissure machining",
            "ko": "선택 사항: 사용자 정의 영역 유형 3·4 및 열구 가공용입니다.",
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
            "en": "Optional, For the screw hole which has a wide diameter (bigger than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm를 초과하고 길이가 11mm를 초과하는 스크류 홀용입니다.",
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
            "en": "Optional, For the screw hole which has a narrow diameter (smaller than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm 미만이고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "ja": "任意：直径が2.25mm未満で、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings [M1.0B_L10] 5x",
        "descriptions": [
          {
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of crowns/copings",
            "ko": "여유량: 크라운/코핑 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：クラウン／コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径1.0mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5Fx07]",
        "descriptions": [
          {
            "en": "finishing process inside copings by the path of insertion that was set with 1.5mm Flat tool",
            "ko": "1.5mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "ja": "1.5mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ]
  },
  {
    "title": "CoCr_Crown Bridge_3+2X",
    "source": "CoCr_Crown Bridge_3+2X 03ccfb3e905883f3b81481752f8ca6ec.html",
    "material": "CoCr",
    "type": "Crown Bridge",
    "family": "Bridge",
    "conditions": [
      {
        "en": "This is for milling a Crown bridge in the Co.Cr. Disc.",
        "ko": "Co.Cr. 디스크에서 크라운 브릿지를 가공하는 템플릿입니다.",
        "ja": "Co.Cr.ディスクでクラウンブリッジを加工するテンプレートです。"
      },
      {
        "en": "This template includes a Finishing inside copings with a single insertion direction (3+2-axis).",
        "ko": "단일 삽입 방향(3+2축)으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "ja": "単一の挿入方向（3+2軸）でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
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
            "en": "Optional, For the User-defined area Category 3 and 4, Fissure machining",
            "ko": "선택 사항: 사용자 정의 영역 유형 3·4 및 열구 가공용입니다.",
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
            "en": "Optional, For the screw hole which has a wide diameter (bigger than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm를 초과하고 길이가 11mm를 초과하는 스크류 홀용입니다.",
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
            "en": "Optional, For the screw hole which has a narrow diameter (smaller than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm 미만이고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "ja": "任意：直径が2.25mm未満で、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings [M1.0B_L10] 3+2x",
        "descriptions": [
          {
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of crowns/copings",
            "ko": "여유량: 크라운/코핑 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：クラウン／コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径1.0mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5Fx07]",
        "descriptions": [
          {
            "en": "finishing process inside copings by the path of insertion that was set with 1.5mm Flat tool",
            "ko": "1.5mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "ja": "1.5mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ]
  },
  {
    "title": "CoCr_Crown Bridge_5X",
    "source": "CoCr_Crown Bridge_5X 99bcfb3e9058830582bb811dee719d71.html",
    "material": "CoCr",
    "type": "Crown Bridge",
    "family": "Bridge",
    "conditions": [
      {
        "en": "This is for milling a Crown bridge in the Co.Cr. Disc.",
        "ko": "Co.Cr. 디스크에서 크라운 브릿지를 가공하는 템플릿입니다.",
        "ja": "Co.Cr.ディスクでクラウンブリッジを加工するテンプレートです。"
      },
      {
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
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
            "en": "Optional, For the User-defined area Category 3 and 4, Fissure machining",
            "ko": "선택 사항: 사용자 정의 영역 유형 3·4 및 열구 가공용입니다.",
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
            "en": "Optional, For the screw hole which has a wide diameter (bigger than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm를 초과하고 길이가 11mm를 초과하는 스크류 홀용입니다.",
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
            "en": "Optional, For the screw hole which has a narrow diameter (smaller than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm 미만이고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "ja": "任意：直径が2.25mm未満で、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings [M1.0B_L10] 5x",
        "descriptions": [
          {
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of crowns/copings",
            "ko": "여유량: 크라운/코핑 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：クラウン／コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径1.0mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5Fx07]",
        "descriptions": [
          {
            "en": "finishing process inside copings by the path of insertion that was set with 1.5mm Flat tool",
            "ko": "1.5mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "ja": "1.5mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ]
  },
  {
    "title": "CoCr_Crown_3+2X",
    "source": "CoCr_Crown_3+2X 7fbcfb3e905882ad93ce81cab9e09efe.html",
    "material": "CoCr",
    "type": "Crown",
    "family": "Crown",
    "conditions": [
      {
        "en": "This is for milling a Crown in the Co.Cr. Disc.",
        "ko": "Co.Cr. 디스크에서 크라운을 가공하는 템플릿입니다.",
        "ja": "Co.Cr.ディスクでクラウンを加工するテンプレートです。"
      },
      {
        "en": "This template includes a Finishing inside copings with a single insertion direction (3+2-axis).",
        "ko": "단일 삽입 방향(3+2축)으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "ja": "単一の挿入方向（3+2軸）でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
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
            "en": "Optional, For the User-defined area Category 3 and 4, Fissure machining",
            "ko": "선택 사항: 사용자 정의 영역 유형 3·4 및 열구 가공용입니다.",
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
            "en": "Optional, For the screw hole which has a wide diameter (bigger than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm를 초과하고 길이가 11mm를 초과하는 스크류 홀용입니다.",
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
            "en": "Optional, For the screw hole which has a narrow diameter (smaller than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm 미만이고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "ja": "任意：直径が2.25mm未満で、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings [M1.0B_L10] 3+2x",
        "descriptions": [
          {
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of crowns/copings",
            "ko": "여유량: 크라운/코핑 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：クラウン／コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径1.0mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5Fx07]",
        "descriptions": [
          {
            "en": "finishing process inside copings by the path of insertion that was set with 1.5mm Flat tool",
            "ko": "1.5mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "ja": "1.5mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ]
  },
  {
    "title": "CoCr_Crown_5X",
    "source": "CoCr_Crown_5X 423cfb3e905882969afd81de9295d95b.html",
    "material": "CoCr",
    "type": "Crown",
    "family": "Crown",
    "conditions": [
      {
        "en": "This is for milling a Crown in the Co.Cr. Disc.",
        "ko": "Co.Cr. 디스크에서 크라운을 가공하는 템플릿입니다.",
        "ja": "Co.Cr.ディスクでクラウンを加工するテンプレートです。"
      },
      {
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
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
            "en": "Optional, For the User-defined area Category 3 and 4, Fissure machining",
            "ko": "선택 사항: 사용자 정의 영역 유형 3·4 및 열구 가공용입니다.",
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
            "en": "Optional, For the screw hole which has a wide diameter (bigger than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm를 초과하고 길이가 11mm를 초과하는 스크류 홀용입니다.",
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
            "en": "Optional, For the screw hole which has a narrow diameter (smaller than 2.25 mm) and longer length (more than 11 mm).",
            "ko": "선택 사항: 직경이 2.25mm 미만이고 길이가 11mm를 초과하는 스크류 홀용입니다.",
            "ja": "任意：直径が2.25mm未満で、長さが11mmを超えるスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings [M1.0B_L10] 5x",
        "descriptions": [
          {
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of crowns/copings",
            "ko": "여유량: 크라운/코핑 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：クラウン／コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径1.0mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.5Fx07]",
        "descriptions": [
          {
            "en": "finishing process inside copings by the path of insertion that was set with 1.5mm Flat tool",
            "ko": "1.5mm 플랫 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "ja": "1.5mmのフラット工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "en": "Occlusal groove machining process with 0.6mm diameter tool",
            "ko": "직경 0.6mm 공구로 교합면의 그루브를 가공합니다.",
            "ja": "直径0.6mmの工具で咬合面の溝を加工します。"
          },
          {
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ]
  },
  {
    "title": "CoCr_Abutment Crown Bridge",
    "subtitle": "Abutment Crown Bridge",
    "source": "hdNPmillstrategy.hddb + hdNPmillstrategyvariantprofile.hddb + hdTool.hddb",
    "material": "CoCr",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_bridge"
    ],
    "conditions": [
      {
        "ko": "Co.Cr. 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "Template for milling abutment crown bridges from Co.Cr. discs.",
        "ja": "Co.Cr.ディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "적용 보철물: Abutment Crown Bridge",
        "en": "Applicable prosthesis: Abutment Crown Bridge",
        "ja": "適用補綴物：Abutment Crown Bridge"
      },
      {
        "ko": "기준 DB: 260830 원본 / 기본 전략: MAI_CoCr_Abutment Crown Bridge_260630",
        "en": "Source DB: 260830 original / Base strategy: MAI_CoCr_Abutment Crown Bridge_260630",
        "ja": "基準DB：260830オリジナル / 基本ストラテジー：MAI_CoCr_Abutment Crown Bridge_260630"
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
            "ko": "증분식 경계 옵셋: 가공 경계의 추가 옵셋을 조정할 수 있습니다. (기본값: 0)",
            "en": "Incremental boundary offset: Adjusts the additional milling boundary offset. (Default: 0)",
            "ja": "増分境界オフセット：加工境界の追加オフセットを調整できます。（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 가공 경계의 추가 각도를 조정할 수 있습니다. (기본값: 0)",
            "en": "Incremental boundary angle: Adjusts the additional milling boundary angle. (Default: 0)",
            "ja": "増分境界角度：加工境界の追加角度を調整できます。（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing abutment outside_[M1.5Bx10]",
        "descriptions": [
          {
            "ko": "연결 공구: T11_M1.5B_L10",
            "en": "Linked tool: T11_M1.5B_L10",
            "ja": "割り当て工具：T11_M1.5B_L10"
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
        "sourceJobId": "3b498a79-742c-11f1-a4d4-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07] (2)",
        "descriptions": [
          {
            "ko": "연결 공구: T18_M1.5R_L07",
            "en": "Linked tool: T18_M1.5R_L07",
            "ja": "割り当て工具：T18_M1.5R_L07"
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
        "sourceJobId": "6ccee9b8-5b6a-11f1-a4cf-ec4c8c8ee783"
      },
      {
        "title": "Finishing inside copings_[M1.0Bx10] 5X",
        "descriptions": [
          {
            "ko": "연결 공구: T12_M1.0B_L10",
            "en": "Linked tool: T12_M1.0B_L10",
            "ja": "割り当て工具：T12_M1.0B_L10"
          },
          {
            "ko": "계산 기본값: 켜짐",
            "en": "Calculate default: On",
            "ja": "計算の初期値：ON"
          },
          {
            "ko": "여유량: 조정 가능 (기본값: -0.015)",
            "en": "Allowance: Adjustable (Default: -0.015)",
            "ja": "余裕量：調整可能（初期値：-0.015）"
          }
        ],
        "sourceJobId": "37e7991e-5b65-11f1-a4cf-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 피셔 영역을 가공합니다.",
            "en": "Machines occlusal fissures with a 0.6 mm diameter tool.",
            "ja": "直径0.6mmの工具で咬合面の裂溝を加工します。"
          },
          {
            "ko": "연결 공구: T13_M0.6B_L03",
            "en": "Linked tool: T13_M0.6B_L03",
            "ja": "割り当て工具：T13_M0.6B_L03"
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
        "sourceJobId": "37e7993f-5b65-11f1-a4cf-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T10_M2.0B_L12 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 1/3: T10_M2.0B_L12 / Restmachining (Default: On)",
        "ja": "カテゴリー1/3：T10_M2.0B_L12 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T10_M2.0B_L12 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 2/4: T10_M2.0B_L12 / Restmachining (Default: On)",
        "ja": "カテゴリー2/4：T10_M2.0B_L12 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T11_M1.5B_L10 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 1/3: T11_M1.5B_L10 / Restmachining (Default: On)",
        "ja": "カテゴリー1/3：T11_M1.5B_L10 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T11_M1.5B_L10 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 2/4: T11_M1.5B_L10 / Restmachining (Default: On)",
        "ja": "カテゴリー2/4：T11_M1.5B_L10 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T11_M1.5B_L10 / 정삭 (기본값: 켜짐)",
        "en": "Category 1/3: T11_M1.5B_L10 / Finishing (Default: On)",
        "ja": "カテゴリー1/3：T11_M1.5B_L10 / 仕上げ（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T11_M1.5B_L10 / 정삭 (기본값: 켜짐)",
        "en": "Category 2/4: T11_M1.5B_L10 / Finishing (Default: On)",
        "ja": "カテゴリー2/4：T11_M1.5B_L10 / 仕上げ（初期値：ON）"
      },
      {
        "ko": "유형 1/2/3/4: T12_M1.0B_L10 / 잔여 가공 / Clip (기본값: 켜짐)",
        "en": "Category 1/2/3/4: T12_M1.0B_L10 / Restmachining / Clip (Default: On)",
        "ja": "カテゴリー1/2/3/4：T12_M1.0B_L10 / 削り残し加工 / Clip（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T12_M1.0B_L10 / 정삭 / Clip (기본값: 켜짐)",
        "en": "Category 1/3: T12_M1.0B_L10 / Finishing / Clip (Default: On)",
        "ja": "カテゴリー1/3：T12_M1.0B_L10 / 仕上げ / Clip（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T12_M1.0B_L10 / 정삭 / Clip (기본값: 꺼짐)",
        "en": "Category 2/4: T12_M1.0B_L10 / Finishing / Clip (Default: Off)",
        "ja": "カテゴリー2/4：T12_M1.0B_L10 / 仕上げ / Clip（初期値：OFF）"
      },
      {
        "ko": "유형 3/4: T13_M0.6B_L03 / 잔여 가공 / Clip (기본값: 켜짐)",
        "en": "Category 3/4: T13_M0.6B_L03 / Restmachining / Clip (Default: On)",
        "ja": "カテゴリー3/4：T13_M0.6B_L03 / 削り残し加工 / Clip（初期値：ON）"
      },
      {
        "ko": "유형 3: T13_M0.6B_L03 / 정삭 / Clip (기본값: 켜짐)",
        "en": "Category 3: T13_M0.6B_L03 / Finishing / Clip (Default: On)",
        "ja": "カテゴリー3：T13_M0.6B_L03 / 仕上げ / Clip（初期値：ON）"
      },
      {
        "ko": "유형 4: T13_M0.6B_L03 / 정삭 / Clip (기본값: 꺼짐)",
        "en": "Category 4: T13_M0.6B_L03 / Finishing / Clip (Default: Off)",
        "ja": "カテゴリー4：T13_M0.6B_L03 / 仕上げ / Clip（初期値：OFF）"
      }
    ],
    "interfaces": [
      {
        "ko": "유형 1: T18_M1.5R_L07 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 1: T18_M1.5R_L07 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー1：T18_M1.5R_L07 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 2: T18_M1.5R_L07 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 2: T18_M1.5R_L07 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー2：T18_M1.5R_L07 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 2: T17_M1.5F_L07 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 2: T17_M1.5F_L07 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー2：T17_M1.5F_L07 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 3: T11_M1.5B_L10 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 3: T11_M1.5B_L10 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー3：T11_M1.5B_L10 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 4: T12_M1.0B_L10 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 4: T12_M1.0B_L10 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー4：T12_M1.0B_L10 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 5: T19_M1.0F_L06 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 5: T19_M1.0F_L06 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー5：T19_M1.0F_L06 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 6: T13_M0.6B_L03 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 6: T13_M0.6B_L03 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー6：T13_M0.6B_L03 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 7: T20_M0.5F_L06 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 7: T20_M0.5F_L06 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー7：T20_M0.5F_L06 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 30: T24_M2.0T_L06 / 내벽 (기본값: 켜짐)",
        "en": "Category 30: T24_M2.0T_L06 / Inner wall (Default: On)",
        "ja": "カテゴリー30：T24_M2.0T_L06 / 内壁（初期値：ON）"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B_L12",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B_L12",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B_L10",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B_L10",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B_L03",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F_L07",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R_L07",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F_L06",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F_L06",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T_L08",
        "optional": true,
        "comments": [
          {
            "ko": "앵글드 스크류 채널의 T-cut 공정에서 사용합니다.",
            "en": "Used in T-cut processes for angled screw channels.",
            "ja": "アングルドスクリューチャンネルのT-cut工程で使用します。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T_L06",
        "optional": true,
        "comments": [
          {
            "ko": "앵글드 스크류 채널의 T-cut 및 인터페이스 유형 30 공정에서 사용합니다.",
            "en": "Used in T-cut processes for angled screw channels and interface category 30 processes.",
            "ja": "アングルドスクリューチャンネルのT-cutおよびインターフェースカテゴリー30の工程で使用します。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH_L06(P0.4)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH_L06(P0.35)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH_L06(P0.35)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH_L06(P0.3)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
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
    "sourceToolCount": 18,
    "sourceRevision": "260830",
    "sourceProfileId": "c5cdc271-5b6b-11f1-a4cf-ec4c8c8ee783"
  },
  {
    "title": "CoCr_Abutment Crown",
    "subtitle": "Abutment Crown",
    "source": "hdNPmillstrategy.hddb + hdNPmillstrategyvariantprofile.hddb + hdTool.hddb",
    "material": "CoCr",
    "type": "Abutment Crown",
    "family": "Abutment",
    "partTypes": [
      "abutmentcrown_single"
    ],
    "conditions": [
      {
        "ko": "Co.Cr. 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.",
        "en": "Template for milling abutment crowns from Co.Cr. discs.",
        "ja": "Co.Cr.ディスクでアバットメントクラウンを加工するテンプレートです。"
      },
      {
        "ko": "적용 보철물: Abutment Crown",
        "en": "Applicable prosthesis: Abutment Crown",
        "ja": "適用補綴物：Abutment Crown"
      },
      {
        "ko": "기준 DB: 260830 원본 / 기본 전략: MAI_CoCr_Abutment Crown_260625",
        "en": "Source DB: 260830 original / Base strategy: MAI_CoCr_Abutment Crown_260625",
        "ja": "基準DB：260830オリジナル / 基本ストラテジー：MAI_CoCr_Abutment Crown_260625"
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
            "ko": "증분식 경계 옵셋: 가공 경계의 추가 옵셋을 조정할 수 있습니다. (기본값: 0)",
            "en": "Incremental boundary offset: Adjusts the additional milling boundary offset. (Default: 0)",
            "ja": "増分境界オフセット：加工境界の追加オフセットを調整できます。（初期値：0）"
          },
          {
            "ko": "증분식 경계 각도: 가공 경계의 추가 각도를 조정할 수 있습니다. (기본값: 0)",
            "en": "Incremental boundary angle: Adjusts the additional milling boundary angle. (Default: 0)",
            "ja": "増分境界角度：加工境界の追加角度を調整できます。（初期値：0）"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.5R_L07] (2)",
        "descriptions": [
          {
            "ko": "연결 공구: T18_M1.5R_L07",
            "en": "Linked tool: T18_M1.5R_L07",
            "ja": "割り当て工具：T18_M1.5R_L07"
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
        "sourceJobId": "909c5a38-5b6a-11f1-a4cf-ec4c8c8ee783"
      },
      {
        "title": "Fissure machining_[M0.6Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 교합면의 피셔 영역을 가공합니다.",
            "en": "Machines occlusal fissures with a 0.6 mm diameter tool.",
            "ja": "直径0.6mmの工具で咬合面の裂溝を加工します。"
          },
          {
            "ko": "연결 공구: T13_M0.6B_L03",
            "en": "Linked tool: T13_M0.6B_L03",
            "ja": "割り当て工具：T13_M0.6B_L03"
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
        "sourceJobId": "909c5a9b-5b6a-11f1-a4cf-ec4c8c8ee783"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/3: T10_M2.0B_L12 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 1/3: T10_M2.0B_L12 / Restmachining (Default: On)",
        "ja": "カテゴリー1/3：T10_M2.0B_L12 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T10_M2.0B_L12 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 2/4: T10_M2.0B_L12 / Restmachining (Default: On)",
        "ja": "カテゴリー2/4：T10_M2.0B_L12 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T11_M1.5B_L10 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 1/3: T11_M1.5B_L10 / Restmachining (Default: On)",
        "ja": "カテゴリー1/3：T11_M1.5B_L10 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T11_M1.5B_L10 / 잔여 가공 (기본값: 켜짐)",
        "en": "Category 2/4: T11_M1.5B_L10 / Restmachining (Default: On)",
        "ja": "カテゴリー2/4：T11_M1.5B_L10 / 削り残し加工（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T11_M1.5B_L10 / 정삭 (기본값: 켜짐)",
        "en": "Category 1/3: T11_M1.5B_L10 / Finishing (Default: On)",
        "ja": "カテゴリー1/3：T11_M1.5B_L10 / 仕上げ（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T11_M1.5B_L10 / 정삭 (기본값: 켜짐)",
        "en": "Category 2/4: T11_M1.5B_L10 / Finishing (Default: On)",
        "ja": "カテゴリー2/4：T11_M1.5B_L10 / 仕上げ（初期値：ON）"
      },
      {
        "ko": "유형 1/2/3/4: T12_M1.0B_L10 / 잔여 가공 / Clip (기본값: 켜짐)",
        "en": "Category 1/2/3/4: T12_M1.0B_L10 / Restmachining / Clip (Default: On)",
        "ja": "カテゴリー1/2/3/4：T12_M1.0B_L10 / 削り残し加工 / Clip（初期値：ON）"
      },
      {
        "ko": "유형 1/3: T12_M1.0B_L10 / 정삭 / Clip (기본값: 켜짐)",
        "en": "Category 1/3: T12_M1.0B_L10 / Finishing / Clip (Default: On)",
        "ja": "カテゴリー1/3：T12_M1.0B_L10 / 仕上げ / Clip（初期値：ON）"
      },
      {
        "ko": "유형 2/4: T12_M1.0B_L10 / 정삭 / Clip (기본값: 꺼짐)",
        "en": "Category 2/4: T12_M1.0B_L10 / Finishing / Clip (Default: Off)",
        "ja": "カテゴリー2/4：T12_M1.0B_L10 / 仕上げ / Clip（初期値：OFF）"
      },
      {
        "ko": "유형 3/4: T13_M0.6B_L03 / 잔여 가공 / Clip (기본값: 켜짐)",
        "en": "Category 3/4: T13_M0.6B_L03 / Restmachining / Clip (Default: On)",
        "ja": "カテゴリー3/4：T13_M0.6B_L03 / 削り残し加工 / Clip（初期値：ON）"
      },
      {
        "ko": "유형 3: T13_M0.6B_L03 / 정삭 / Clip (기본값: 켜짐)",
        "en": "Category 3: T13_M0.6B_L03 / Finishing / Clip (Default: On)",
        "ja": "カテゴリー3：T13_M0.6B_L03 / 仕上げ / Clip（初期値：ON）"
      },
      {
        "ko": "유형 4: T13_M0.6B_L03 / 정삭 / Clip (기본값: 꺼짐)",
        "en": "Category 4: T13_M0.6B_L03 / Finishing / Clip (Default: Off)",
        "ja": "カテゴリー4：T13_M0.6B_L03 / 仕上げ / Clip（初期値：OFF）"
      }
    ],
    "interfaces": [
      {
        "ko": "유형 1: T18_M1.5R_L07 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 1: T18_M1.5R_L07 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー1：T18_M1.5R_L07 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 2: T18_M1.5R_L07 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 2: T18_M1.5R_L07 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー2：T18_M1.5R_L07 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 2: T17_M1.5F_L07 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 2: T17_M1.5F_L07 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー2：T17_M1.5F_L07 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 3: T11_M1.5B_L10 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 3: T11_M1.5B_L10 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー3：T11_M1.5B_L10 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 4: T12_M1.0B_L10 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 4: T12_M1.0B_L10 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー4：T12_M1.0B_L10 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 5: T19_M1.0F_L06 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 5: T19_M1.0F_L06 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー5：T19_M1.0F_L06 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 6: T13_M0.6B_L03 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 6: T13_M0.6B_L03 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー6：T13_M0.6B_L03 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 7: T20_M0.5F_L06 / 외벽·내벽 (기본값: 켜짐)",
        "en": "Category 7: T20_M0.5F_L06 / Outer wall / Inner wall (Default: On)",
        "ja": "カテゴリー7：T20_M0.5F_L06 / 外壁・内壁（初期値：ON）"
      },
      {
        "ko": "유형 30: T24_M2.0T_L06 / 내벽 (기본값: 켜짐)",
        "en": "Category 30: T24_M2.0T_L06 / Inner wall (Default: On)",
        "ja": "カテゴリー30：T24_M2.0T_L06 / 内壁（初期値：ON）"
      }
    ],
    "tools": [
      {
        "id": "T9",
        "name": "M3.0B_L12",
        "optional": false,
        "comments": []
      },
      {
        "id": "T10",
        "name": "M2.0B_L12",
        "optional": false,
        "comments": []
      },
      {
        "id": "T11",
        "name": "M1.5B_L10",
        "optional": false,
        "comments": []
      },
      {
        "id": "T12",
        "name": "M1.0B_L10",
        "optional": false,
        "comments": []
      },
      {
        "id": "T13",
        "name": "M0.6B_L03",
        "optional": false,
        "comments": []
      },
      {
        "id": "T14",
        "name": "M2.0BL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T15",
        "name": "M1.5RL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T16",
        "name": "M1.5FL_L15",
        "optional": false,
        "comments": []
      },
      {
        "id": "T17",
        "name": "M1.5F_L07",
        "optional": false,
        "comments": []
      },
      {
        "id": "T18",
        "name": "M1.5R_L07",
        "optional": false,
        "comments": []
      },
      {
        "id": "T19",
        "name": "M1.0F_L06",
        "optional": false,
        "comments": []
      },
      {
        "id": "T20",
        "name": "M0.5F_L06",
        "optional": false,
        "comments": []
      },
      {
        "id": "T23",
        "name": "M1.5T_L08",
        "optional": true,
        "comments": [
          {
            "ko": "앵글드 스크류 채널의 T-cut 공정에서 사용합니다.",
            "en": "Used in T-cut processes for angled screw channels.",
            "ja": "アングルドスクリューチャンネルのT-cut工程で使用します。"
          }
        ]
      },
      {
        "id": "T24",
        "name": "M2.0T_L06",
        "optional": true,
        "comments": [
          {
            "ko": "앵글드 스크류 채널의 T-cut 및 인터페이스 유형 30 공정에서 사용합니다.",
            "en": "Used in T-cut processes for angled screw channels and interface category 30 processes.",
            "ja": "アングルドスクリューチャンネルのT-cutおよびインターフェースカテゴリー30の工程で使用します。"
          }
        ]
      },
      {
        "id": "T25",
        "name": "M2.0TH_L06(P0.4)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T26",
        "name": "M1.8TH_L06(P0.35)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T27",
        "name": "M1.6TH_L06(P0.35)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
          }
        ]
      },
      {
        "id": "T28",
        "name": "M1.4TH_L06(P0.3)",
        "optional": true,
        "comments": [
          {
            "ko": "해당 나사산 조건에 따라 사용합니다.",
            "en": "Used when the corresponding thread condition applies.",
            "ja": "該当するねじ条件に応じて使用します。"
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
    "sourceToolCount": 18,
    "sourceRevision": "260830",
    "sourceProfileId": "bd6b2b28-5b6b-11f1-a4cf-ec4c8c8ee783"
  }
];
