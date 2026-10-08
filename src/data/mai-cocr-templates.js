// Source: supplied CoCr HTML exports. Generated with node tools/build-mai-cocr.js.
window.MaiCoCrTemplates = [
  {
    "title": "CoCr_Abutment Crown Bridge_NCS (highnees)",
    "source": "CoCr_Abutment Crown Bridge_NCS (highnees) deecfb3e90588288b39801f7e6dbae76.html",
    "material": "CoCr",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "conditions": [
      {
        "en": "This is for milling an Abutment crown bridge in the Co.Cr. Disc.",
        "ko": "Co.Cr. 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "ja": "Co.Cr.ディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "en": "For the Abutment Interface of the Highness system",
        "ko": "Highness 시스템의 어버트먼트 인터페이스용입니다.",
        "ja": "Highnessシステムのアバットメントインターフェース用です。"
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
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
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
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
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
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
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
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
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
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
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
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside abutment bases_[M1.5RxL07]_highnees",
        "descriptions": [
          {
            "en": "Finishing process inside abutment bases by simultaneous 5-axis movement with 1.5mm diameter tool",
            "ko": "직경 1.5mm 공구를 사용하여 동시 5축으로 어버트먼트 베이스 내부를 정삭합니다.",
            "ja": "直径1.5mmの工具を使用し、同時5軸でアバットメントベース内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.0Bx10] 5X",
        "descriptions": [
          {
            "en": "finishing process inside copings by the path of insertion that was set with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of copings",
            "ko": "여유량: 코핑 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：コーピング内部の適合を調整できます。"
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
    "title": "CoCr_Abutment Crown Bridge_NCS (M-Fix)",
    "source": "CoCr_Abutment Crown Bridge_NCS (M-Fix) 606cfb3e9058823bade481d65a770976.html",
    "material": "CoCr",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "conditions": [
      {
        "en": "This is for milling an Abutment crown bridge in the Co.Cr. Disc.",
        "ko": "Co.Cr. 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "ja": "Co.Cr.ディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "en": "For the Abutment Interface of the M-Fix system",
        "ko": "M-Fix 시스템의 어버트먼트 인터페이스용입니다.",
        "ja": "M-Fixシステムのアバットメントインターフェース用です。"
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
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
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
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
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
            "en": "Optional, For the Thread process of 2.0mm screw hole only",
            "ko": "선택 사항: 2.0mm 스크류 홀의 나사 가공 전용입니다.",
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
            "en": "Optional, For the Thread process of 1.8mm screw hole only",
            "ko": "선택 사항: 1.8mm 스크류 홀의 나사 가공 전용입니다.",
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
            "en": "Optional, For the Thread process of 1.6mm screw hole only",
            "ko": "선택 사항: 1.6mm 스크류 홀의 나사 가공 전용입니다.",
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
            "en": "Optional, For the Thread process of 1.4mm screw hole only",
            "ko": "선택 사항: 1.4mm 스크류 홀의 나사 가공 전용입니다.",
            "ja": "任意：1.4mmスクリューホールのねじ加工専用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside abutment bases_[M1.5RxL07]_M-Fix",
        "descriptions": [
          {
            "en": "Finishing process inside abutment bases with 1.5mm diameter tool",
            "ko": "직경 1.5mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "ja": "直径1.5mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.0Bx10] 5X",
        "descriptions": [
          {
            "en": "finishing process inside copings by the path of insertion that was set with 1.0mm diameter tool",
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of copings",
            "ko": "여유량: 코핑 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：コーピング内部の適合を調整できます。"
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
    "title": "CoCr_Abutment Crown_NCS (highnees)",
    "source": "CoCr_Abutment Crown_NCS (highnees) a2ecfb3e905883a9bf54819629597b58.html",
    "material": "CoCr",
    "type": "Abutment Crown",
    "family": "Abutment",
    "conditions": [
      {
        "en": "This is for milling an Abutment crown in the Co.Cr. Disc.",
        "ko": "Co.Cr. 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.",
        "ja": "Co.Cr.ディスクでアバットメントクラウンを加工するテンプレートです。"
      },
      {
        "en": "For the Abutment Interface of the Highness system",
        "ko": "Highness 시스템의 어버트먼트 인터페이스용입니다.",
        "ja": "Highnessシステムのアバットメントインターフェース用です。"
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
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
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
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside abutment bases_[M1.5RxL07]_highnees",
        "descriptions": [
          {
            "en": "Finishing process inside abutment bases by simultaneous 5-axis movement with 1.5mm diameter tool",
            "ko": "직경 1.5mm 공구를 사용하여 동시 5축으로 어버트먼트 베이스 내부를 정삭합니다.",
            "ja": "直径1.5mmの工具を使用し、同時5軸でアバットメントベース内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
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
    "title": "CoCr_Abutment Crown_NCS (M-Fix)",
    "source": "CoCr_Abutment Crown_NCS (M-Fix) 2f0cfb3e905883279f1901dced9f35fa.html",
    "material": "CoCr",
    "type": "Abutment Crown",
    "family": "Abutment",
    "conditions": [
      {
        "en": "This is for milling an Abutment crown in the Co.Cr. Disc.",
        "ko": "Co.Cr. 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.",
        "ja": "Co.Cr.ディスクでアバットメントクラウンを加工するテンプレートです。"
      },
      {
        "en": "For the Abutment Interface of the M-Fix",
        "ko": "M-Fix의 어버트먼트 인터페이스용입니다.",
        "ja": "M-Fixのアバットメントインターフェース用です。"
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
            "en": "Optional, For the Angled Screw hole which has more than 1.5 mm diameter in cavity side",
            "ko": "선택 사항: 캐비티 측 직경이 1.5mm를 초과하는 앵글드 스크류 홀용입니다.",
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
            "en": "Optional, For the Angled Screw hole which has more than 2.0 mm diameter in cavity side",
            "ko": "선택 사항: 캐비티 측 직경이 2.0mm를 초과하는 앵글드 스크류 홀용입니다.",
            "ja": "任意：キャビティ側の直径が2.0mmを超えるアングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside abutment bases_[M1.5RxL07]_highnees",
        "descriptions": [
          {
            "en": "Finishing process inside abutment bases by simultaneous 5-axis movement with 1.5mm diameter tool",
            "ko": "직경 1.5mm 공구를 사용하여 동시 5축으로 어버트먼트 베이스 내부를 정삭합니다.",
            "ja": "直径1.5mmの工具を使用し、同時5軸でアバットメントベース内部を仕上げます。"
          },
          {
            "en": "Allowance : Available to adjust the fit inside of abutment bases",
            "ko": "여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "ja": "余裕量：アバットメントベース内部の適合を調整できます。"
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
  }
];
