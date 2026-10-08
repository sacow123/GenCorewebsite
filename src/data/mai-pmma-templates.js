// Source: supplied PMMA HTML exports. Generated with node tools/build-mai-pmma.js.
window.MaiPmmaTemplates = [
  {
    "title": "PMMA_Abutment crown bridge_3+2X",
    "source": "PMMA_Abutment crown bridge_3+2X e4fcfb3e90588246a8af0183e5292043.html",
    "material": "PMMA",
    "type": "Abutment crown bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "PMMA 디스크용 어버트먼트 크라운 브릿지 가공 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the PMMA Disc.",
        "ja": "PMMAディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "단일 삽입 방향(3+2축)으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a single insertion direction (3+2-axis).",
        "ja": "単一の挿入方向（3+2軸）でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6 : T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "id": "T16",
        "name": "M1.5FL",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 스크류 안착부용입니다.",
            "en": "Optional, For the screw seating area",
            "ja": "任意：スクリューの座面用です。"
          }
        ]
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the angled screw hole",
            "ja": "任意：アングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside abutment bases_[M1.5RxL07] 3+2X",
        "descriptions": [
          {
            "ko": "직경 1.5mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.5mm diameter tool",
            "ja": "直径1.5mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 X&Y: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance X&Y : Available to adjust(Only X&Y axes) the fit inside of abutment bases",
            "ja": "余裕量X&Y：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.0Bx10]_3+2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "finishing process inside copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "여유량: 코핑 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of copings",
            "ja": "余裕量：コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
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
      },
      {
        "title": "Finishing inside copings_[M0.6B_L03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "finishing process inside copings by the path of insertion that was set with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 코핑 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of copings",
            "ja": "余裕量：コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": []
  },
  {
    "title": "PMMA_Abutment crown bridge_5X",
    "source": "PMMA_Abutment crown bridge_5X 2ebcfb3e90588338aae78100b743532e.html",
    "material": "PMMA",
    "type": "Abutment crown bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "PMMA 디스크용 어버트먼트 크라운 브릿지 가공 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the PMMA Disc.",
        "ja": "PMMAディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
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
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6 : T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "id": "T16",
        "name": "M1.5FL",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 스크류 안착부용입니다.",
            "en": "Optional, For the screw seating area",
            "ja": "任意：スクリューの座面用です。"
          }
        ]
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the angled screw hole",
            "ja": "任意：アングルドスクリューホール用です。"
          }
        ]
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings_[M1.0Bx10] 5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "finishing process inside copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "여유량: 코핑 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of copings",
            "ja": "余裕量：コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
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
      },
      {
        "title": "Finishing inside copings_[M0.6B_L03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구를 사용하여 설정된 삽입 방향으로 코핑 내부를 정삭합니다.",
            "en": "finishing process inside copings by the path of insertion that was set with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具を使用し、設定された挿入方向でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 코핑 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of copings",
            "ja": "余裕量：コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": []
  },
  {
    "title": "PMMA_Abutment crown_NCS (highnees)",
    "source": "PMMA_Abutment crown_NCS (highnees) addcfb3e90588218a08381cf1e1db76c.html",
    "material": "PMMA",
    "type": "Abutment crown",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "PMMA 디스크용 어버트먼트 크라운 가공 템플릿입니다.",
        "en": "This is for milling an Abutment crown in the PMMA Disc.",
        "ja": "PMMAディスクでアバットメントクラウンを加工するテンプレートです。"
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
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6 : T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "id": "T16",
        "name": "M1.5FL",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 스크류 안착부용입니다.",
            "en": "Optional, For the screw seating area",
            "ja": "任意：スクリューの座面用です。"
          }
        ]
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the angled screw hole",
            "ja": "任意：アングルドスクリューホール用です。"
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
        "title": "Fissure machining_[M1.0Bx10]",
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
        "title": "Finishing inside abutment bases_[M1.0FxL06]_highness",
        "descriptions": [
          {
            "ko": "직경 1.0mm 플랫 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter flat tool",
            "ja": "直径1.0mmのフラット工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 X&Y: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance X&Y : Available to adjust(Only X&Y axes) the fit inside of abutment bases",
            "ja": "余裕量X&Y：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
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
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": []
  },
  {
    "title": "PMMA_Abutment crown_NCS (M-Fix)",
    "source": "PMMA_Abutment crown_NCS (M-Fix) ea6cfb3e905883869a26810e5d4d29f0.html",
    "material": "PMMA",
    "type": "Abutment crown",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "PMMA 디스크용 어버트먼트 크라운 가공 템플릿입니다.",
        "en": "This is for milling an Abutment crown in the PMMA Disc.",
        "ja": "PMMAディスクでアバットメントクラウンを加工するテンプレートです。"
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
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6 : T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "id": "T16",
        "name": "M1.5FL",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 스크류 안착부용입니다.",
            "en": "Optional, For the screw seating area",
            "ja": "任意：スクリューの座面用です。"
          }
        ]
      },
      {
        "id": "T23",
        "name": "M1.5T",
        "optional": true,
        "comments": [
          {
            "ko": "선택 사항: 앵글드 스크류 홀용입니다.",
            "en": "Optional, For the angled screw hole",
            "ja": "任意：アングルドスクリューホール用です。"
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
        "title": "Fissure machining_[M1.0Bx10]",
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
        "title": "Finishing inside abutment bases_[M1.5RxL07]_M-Fix",
        "descriptions": [
          {
            "ko": "직경 1.5mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.5mm diameter tool",
            "ja": "直径1.5mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 X&Y: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance X&Y : Available to adjust(Only X&Y axes) the fit inside of abutment bases",
            "ja": "余裕量X&Y：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
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
      },
      {
        "title": "Fissure machining_[Z0.3Bx03]",
        "descriptions": [
          {
            "ko": "직경 0.3mm 공구로 교합면의 그루브를 가공합니다.",
            "en": "Occlusal groove machining process with 0.3mm diameter tool",
            "ja": "直径0.3mmの工具で咬合面の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      }
    ],
    "images": []
  },
  {
    "title": "PMMA_Coping bridge_SCRP",
    "source": "PMMA_Coping bridge_SCRP 36bcfb3e90588375835c81d026047666.html",
    "material": "PMMA",
    "type": "Coping bridge",
    "family": "Coping",
    "conditions": [
      {
        "ko": "PMMA 디스크용 코핑 브릿지 가공 템플릿입니다.",
        "en": "This is for milling a Coping bridge in the PMMA Disc.",
        "ja": "PMMAディスクでコーピングブリッジを加工するテンプレートです。"
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
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6 : T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Finishing inside long cavities_[M1.0Bx10]_8x",
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
        "title": "Finishing inside inside copings_[M1.0Bx10]_5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 동시 5축으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by simultaneous 5-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、同時5軸で長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.0Bx10]_3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
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
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.5mm Flat diameter tool",
            "ja": "1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
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
    "images": []
  },
  {
    "title": "PMMA_Coping/Crown bridge_(Fast_mill)",
    "source": "PMMA_Coping Crown bridge_(Fast_mill) 870cfb3e905883d29b6081d674294ca0.html",
    "material": "PMMA",
    "type": "Coping/Crown bridge",
    "family": "Coping",
    "conditions": [
      {
        "ko": "PMMA 디스크용 코핑/크라운 브릿지 가공 템플릿입니다.",
        "en": "This is for milling a Coping/Crown bridge in the PMMA Disc.",
        "ja": "PMMAディスクでコーピング／クラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "단일 삽입 방향(3+2축)으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a single insertion direction (3+2-axis).",
        "ja": "単一の挿入方向（3+2軸）でコーピング内部を仕上げる工程が含まれます。"
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
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Finishing inside copings_[M1.0Bx10]_3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 분리된 8축 움직임으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by separated 8-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、分離した8軸の動きでコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0BX10]",
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
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.5mm Flat diameter tool",
            "ja": "1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
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
        "title": "Fissure machining_[Z0.3BX1.5]",
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
      }
    ],
    "images": []
  },
  {
    "title": "PMMA_Coping/Crown_(Fast mill)",
    "source": "PMMA_Coping Crown_(Fast mill) b44cfb3e90588212b2fc813fab342d24.html",
    "material": "PMMA",
    "type": "Coping/Crown",
    "family": "Coping",
    "conditions": [
      {
        "ko": "PMMA 디스크용 코핑/크라운 가공 템플릿입니다.",
        "en": "This is for milling a Coping /Crown in the PMMA Disc.",
        "ja": "PMMAディスクでコーピング／クラウンを加工するテンプレートです。"
      },
      {
        "ko": "단일 삽입 방향(3+2축)으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a single insertion direction (3+2-axis).",
        "ja": "単一の挿入方向（3+2軸）でコーピング内部を仕上げる工程が含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6 : T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Finishing inside inside copings_[M1.0Bx10]_3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process insidecopings with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
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
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.5mm Flat diameter tool",
            "ja": "1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
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
    "images": []
  },
  {
    "title": "PMMA_Coping",
    "source": "PMMA_Coping d90cfb3e9058827aba9e01c880ad5223.html",
    "material": "PMMA",
    "type": "Coping",
    "family": "Coping",
    "conditions": [
      {
        "ko": "PMMA 디스크용 코핑 가공 템플릿입니다.",
        "en": "This is for milling a Coping in the PMMA Disc.",
        "ja": "PMMAディスクでコーピングを加工するテンプレートです。"
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
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6 : T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Finishing inside inside copings_[M1.0Bx10]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Finishing inside inside copings_[M1.0Bx10]_3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
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
        "title": "Finishing inside copings_[M1.5F_L07]",
        "descriptions": [
          {
            "ko": "1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.5mm Flat diameter tool",
            "ja": "1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside inside copings_[M0.6_L03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
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
    "images": []
  },
  {
    "title": "PMMA_Crown bridge_SCRP",
    "source": "PMMA_Crown bridge_SCRP 8c9cfb3e9058826f908b81c14ca7722e.html",
    "material": "PMMA",
    "type": "Crown bridge",
    "family": "Bridge",
    "conditions": [
      {
        "ko": "PMMA 디스크용 크라운 브릿지 가공 템플릿입니다.",
        "en": "This is for milling a Crown bridge in the PMMA Disc.",
        "ja": "PMMAディスクでクラウンブリッジを加工するテンプレートです。"
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
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6 : T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Finishing inside inside copings_[M1.0Bx10]_5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 동시 5축으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by simultaneous 5-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、同時5軸で長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.0Bx10]_3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で咬合面（0°）の溝を加工します。"
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
            "ko": "1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.5mm Flat diameter tool",
            "ja": "1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
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
    "images": []
  },
  {
    "title": "PMMA_Crown bridge_SCRP_D0.6",
    "source": "PMMA_Crown bridge_SCRP_D0 6 40fcfb3e905883289b4a01b4e958d06f.html",
    "material": "PMMA",
    "type": "Crown bridge",
    "family": "Bridge",
    "conditions": [
      {
        "ko": "PMMA 디스크용 크라운 브릿지 가공 템플릿입니다.",
        "en": "This is for milling a Crown bridge in the PMMA Disc.",
        "ja": "PMMAディスクでクラウンブリッジを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      },
      {
        "ko": "M0.6B 공구를 사용하는 열구 가공이 기본으로 포함되어 있습니다.",
        "en": "The Fissure machining by M0.6B is included as default.",
        "ja": "M0.6B工具による裂溝加工が標準で含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6 : T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Finishing inside inside copings_[M1.0Bx10]_5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 동시 5축으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by simultaneous 5-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、同時5軸で長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.0Bx10]_3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で咬合面（0°）の溝を加工します。"
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
            "ko": "1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.5mm Flat diameter tool",
            "ja": "1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
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
    "images": []
  },
  {
    "title": "PMMA_Crown_SCRP",
    "source": "PMMA_Crown_SCRP bfdcfb3e905882af9cc8014ec2b515f1.html",
    "material": "PMMA",
    "type": "Crown",
    "family": "Crown",
    "conditions": [
      {
        "ko": "PMMA 디스크용 크라운 가공 템플릿입니다.",
        "en": "This is for milling a Crown in the PMMA Disc.",
        "ja": "PMMAディスクでクラウンを加工するテンプレートです。"
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
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6 : T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Finishing inside inside copings_[M1.0Bx10]_5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 동시 5축으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by simultaneous 5-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、同時5軸で長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.0Bx10]_3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で咬合面（0°）の溝を加工します。"
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
            "ko": "1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.5mm Flat diameter tool",
            "ja": "1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside inside copings_[M0.6B_L03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구를 사용하여 동시 5축으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by simultaneous 5-axis movement with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具を使用し、同時5軸で長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
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
    "images": []
  },
  {
    "title": "PMMA_Crown_SCRP_D0.6",
    "source": "PMMA_Crown_SCRP_D0 6 86acfb3e90588207a60a81cf273b4828.html",
    "material": "PMMA",
    "type": "Crown",
    "family": "Crown",
    "conditions": [
      {
        "ko": "PMMA 디스크용 크라운 가공 템플릿입니다.",
        "en": "This is for milling a Crown in the PMMA Disc.",
        "ja": "PMMAディスクでクラウンを加工するテンプレートです。"
      },
      {
        "ko": "동시 5축으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a simultaneous 5-axis.",
        "ja": "同時5軸でコーピング内部を仕上げる工程が含まれます。"
      },
      {
        "ko": "G0.6B 공구를 사용하는 열구 가공이 기본으로 포함되어 있습니다.",
        "en": "The Fissure machining by G0.6B is included as default.",
        "ja": "G0.6B工具による裂溝加工が標準で含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1/2 : T12_M1.0B_L10",
        "en": "Category 1/2 : T12_M1.0B_L10",
        "ja": "カテゴリ1/2 : T12_M1.0B_L10"
      },
      {
        "ko": "유형 3/4 : T13_M0.6B_L03",
        "en": "Category 3/4 : T13_M0.6B_L03",
        "ja": "カテゴリ3/4 : T13_M0.6B_L03"
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6 : T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Finishing inside inside copings_[M1.0Bx10]_5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 동시 5축으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by simultaneous 5-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、同時5軸で長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings_[M1.0Bx10]_3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で咬合面（0°）の溝を加工します。"
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
            "ko": "1.5mm 플랫 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.5mm Flat diameter tool",
            "ja": "1.5mmのフラット工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside inside copings_[M0.6B_L03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구를 사용하여 동시 5축으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by simultaneous 5-axis movement with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具を使用し、同時5軸で長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
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
    "images": []
  },
  {
    "title": "PMMA_MAI_Denture teeth",
    "source": "PMMA_MAI_Denture teeth 57ccfb3e9058823eb4d681596ff44479.html",
    "material": "PMMA",
    "type": "Denture teeth",
    "family": "Denture & Frame",
    "conditions": [
      {
        "ko": "PMMA 디스크에서 단순한 디자인의 부분 의치 프레임을 가공하는 템플릿입니다.",
        "en": "This is for milling a Partial denture frame that has simple design in the PMMA Disc.",
        "ja": "PMMAディスクでシンプルなデザインの部分義歯フレームを加工するテンプレートです。"
      },
      {
        "ko": "보철물 종류를 Denture Teeth로 설정해야 합니다.",
        "en": "The part should be set to Denture Teeth",
        "ja": "補綴物の種類をDenture Teethに設定してください。"
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
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Fissure machining_[M1.0B_L10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
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
        "title": "Fissure machining_[Z0.3B_L03]",
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
    "images": []
  },
  {
    "title": "PMMA_MAI_Flexible denture",
    "source": "PMMA_MAI_Flexible denture 92ecfb3e9058825fb0f001d1b80287ef.html",
    "material": "PMMA",
    "type": "Flexible denture",
    "family": "Denture & Frame",
    "conditions": [
      {
        "ko": "PMMA 디스크에서 단순한 디자인의 유연 의치 프레임을 가공하는 템플릿입니다.",
        "en": "This is for milling a Flexible denture frame that has simple design in the PMMA Disc.",
        "ja": "PMMAディスクでシンプルなデザインのフレキシブル義歯フレームを加工するテンプレートです。"
      },
      {
        "ko": "보철물 종류를 Flexible denture로 설정해야 합니다.",
        "en": "The part should be set to Flexible denture.",
        "ja": "補綴物の種類をFlexible dentureに設定してください。"
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
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Fissure machining_[M1.0B_L10]",
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
        "title": "Fissure machining_[M0.6B_L03]",
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
        "title": "Fissure machining_[Z0.3B_L03]",
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
    "images": []
  },
  {
    "title": "PMMA_MAI_Full denture_(Fine)",
    "source": "PMMA_MAI_Full denture_(Fine) 0f9cfb3e9058820aad8e01cbdfb09d37.html",
    "material": "PMMA",
    "type": "Full denture",
    "family": "Denture & Frame",
    "conditions": [
      {
        "ko": "PMMA 디스크에서 단순한 디자인의 전체 의치 프레임을 가공하는 템플릿입니다.",
        "en": "This is for milling a Full denture frame that has simple design in the PMMA Disc.",
        "ja": "PMMAディスクでシンプルなデザインの総義歯フレームを加工するテンプレートです。"
      },
      {
        "ko": "보철물 종류를 Full Denture로 설정해야 합니다.",
        "en": "The part should be set to Full Denture",
        "ja": "補綴物の種類をFull Dentureに設定してください。"
      },
      {
        "ko": "일반 버전보다 약 30분 더 걸리지만 보철물 표면이 훨씬 매끄럽습니다.",
        "en": "This template takes about half an hour longer, but the prosthesis surface is much smoother than normal version.",
        "ja": "通常版より約30分長くかかりますが、補綴物の表面がより滑らかになります。"
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
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Finishing inside long cavities_{M1.0Bx10}_8X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 분리된 8축 움직임으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by separated 8-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、分離した8軸の動きで長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Finishing inside long cavities_{M1.0Bx10}_3+2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 분리된 8축 움직임으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by separated 8-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、分離した8軸の動きで長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Finishing inside pockets_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 치아 포켓 내부를 정삭합니다.",
            "en": "Finishing process inside tooth pocket with 1.0mm diameter tool.",
            "ja": "直径1.0mmの工具で歯のポケット内部を仕上げます。"
          },
          {
            "ko": "여유량: 치아 포켓 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit inside of the tooth pockets",
            "ja": "余裕量：歯のポケット内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0B_L10]",
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
        "title": "Fissure machining_[M0.6B_L03]",
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
        "title": "Fissure machining_[Z0.3B_L03]",
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
    "images": []
  },
  {
    "title": "PMMA_MAI_Full denture_(Normal)",
    "source": "PMMA_MAI_Full denture_(Normal) a14cfb3e905883e2a64d01471acde7e9.html",
    "material": "PMMA",
    "type": "Full denture",
    "family": "Denture & Frame",
    "conditions": [
      {
        "ko": "PMMA 디스크에서 단순한 디자인의 전체 의치 프레임을 가공하는 템플릿입니다.",
        "en": "This is for milling a Full denture frame that has simple design in the PMMA Disc.",
        "ja": "PMMAディスクでシンプルなデザインの総義歯フレームを加工するテンプレートです。"
      },
      {
        "ko": "보철물 종류를 Full Denture로 설정해야 합니다.",
        "en": "The part should be set to Full Denture",
        "ja": "補綴物の種類をFull Dentureに設定してください。"
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
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Finishing inside long cavities_{M1.0Bx10}_8X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 분리된 8축 움직임으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by separated 8-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、分離した8軸の動きで長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Finishing inside long cavities_{M1.0Bx10}_3+2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 분리된 8축 움직임으로 긴 캐비티 내부를 정삭합니다.",
            "en": "Finishing process inside long cavity by separated 8-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、分離した8軸の動きで長いキャビティ内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Finishing inside pockets_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 치아 포켓 내부를 정삭합니다.",
            "en": "Finishing process inside tooth pocket with 1.0mm diameter tool.",
            "ja": "直径1.0mmの工具で歯のポケット内部を仕上げます。"
          },
          {
            "ko": "여유량: 치아 포켓 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit inside of the tooth pockets",
            "ja": "余裕量：歯のポケット内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining_[M1.0B_L10]",
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
        "title": "Fissure machining_[M0.6B_L03]",
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
        "title": "Fissure machining_[Z0.3B_L03]",
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
    "images": []
  },
  {
    "title": "PMMA_MAI_Partial Frame",
    "source": "PMMA_MAI_Partial Frame 920cfb3e905882efa5a5015c06fc0000.html",
    "material": "PMMA",
    "type": "Partial Frame",
    "family": "Denture & Frame",
    "conditions": [
      {
        "ko": "PMMA 디스크에서 단순한 디자인의 부분 의치 프레임을 가공하는 템플릿입니다.",
        "en": "This is for milling a Partial denture frame that has simple design in the PMMA Disc.",
        "ja": "PMMAディスクでシンプルなデザインの部分義歯フレームを加工するテンプレートです。"
      },
      {
        "ko": "보철물 종류를 Partial frame으로 설정해야 합니다.",
        "en": "The part should be set to Partial frame.",
        "ja": "補綴物の種類をPartial frameに設定してください。"
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
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Fissure machining_[M1.0B_L10]",
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
        "title": "Fissure machining_[M0.6B_L03]",
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
        "title": "Fissure machining_[Z0.3B_L03]",
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
    "images": []
  },
  {
    "title": "PMMA_Over Structure",
    "source": "PMMA_Over Structure dd9cfb3e90588335990c01d0ab588044.html",
    "material": "PMMA",
    "type": "Over Structure",
    "family": "Over Structure",
    "conditions": [
      {
        "ko": "PMMA 디스크에서 iBar의 상부 구조물을 가공하는 템플릿입니다.",
        "en": "This is for milling a Supra-structure of iBar in the PMMA Disc.",
        "ja": "PMMAディスクでiBarの上部構造を加工するテンプレートです。"
      },
      {
        "ko": "보철물 종류를 Over Structure로 설정해야 합니다.",
        "en": "The part should be set to Over Structure",
        "ja": "補綴物の種類をOver Structureに設定してください。"
      },
      {
        "ko": "8개의 서로 다른 각도로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with 8 different angles.",
        "ja": "8つの異なる角度でコーピング内部を仕上げる工程が含まれます。"
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
      },
      {
        "ko": "유형 5/6 : T04_Z0.3BX03",
        "en": "Category 5/6: T04_Z0.3BX03",
        "ja": "カテゴリ5/6 : T04_Z0.3BX03"
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
        "title": "Finishing inside long cavities_[M1.0Bx10]_8x",
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
        "title": "Fissure machining_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 교합면(0°)의 그루브를 가공합니다.",
            "en": "Occlusal(0º) groove machining process with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具で咬合面（0°）の溝を加工します。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining_[M0.6B_L03]",
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
        "title": "Fissure machining_[Z0.3BX1.5]",
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
    "images": []
  }
];
