// Source: supplied PEEK HTML exports. Generated with node tools/build-mai-peek.js.
window.MaiPeekTemplates = [
  {
    "title": "PEEK_Abutment Crown",
    "source": "PEEK_Abutment Crown a65cfb3e9058838da9fc81a27d0314ab.html",
    "material": "PEEK",
    "type": "Abutment Crown",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "PEEK 디스크에서 어버트먼트 크라운을 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown in the PEEK Disc.",
        "ja": "PEEKディスクでアバットメントクラウンを加工するテンプレートです。"
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
        "title": "Finishing inside abutment bases_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust the fit(Only X&Y axes) inside of abutment bases",
            "ja": "余裕量XY：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
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
        "title": "Finishing inside abutment bases_[M0.6Bx03]",
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
    "title": "PEEK_Abutment Crown Bridge_3+2x",
    "source": "PEEK_Abutment Crown Bridge_3+2x 089cfb3e9058834782140165b178065d.html",
    "material": "PEEK",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "PEEK 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the PEEK Disc.",
        "ja": "PEEKディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
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
        "title": "Finishing inside copings_[M1.0Bx10]_3+2x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "여유량: 코핑 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of copings",
            "ja": "余裕量：コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust the fit(Only X&Y axes) inside of abutment bases",
            "ja": "余裕量XY：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
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
        "title": "Finishing inside copings_[M0.6B_L03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でコーピング内部を仕上げます。"
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
        "title": "Finishing inside abutment bases_[M0.6B_L03]",
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
    "title": "PEEK_Abutment Crown Bridge_5x",
    "source": "PEEK_Abutment Crown Bridge_5x 9f5cfb3e905882c8bb28016a815fc0cc.html",
    "material": "PEEK",
    "type": "Abutment Crown Bridge",
    "family": "Abutment",
    "conditions": [
      {
        "ko": "PEEK 디스크에서 어버트먼트 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling an Abutment crown bridge in the PEEK Disc.",
        "ja": "PEEKディスクでアバットメントクラウンブリッジを加工するテンプレートです。"
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
        "title": "Finishing inside copings_[M1.0Bx10]_5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "여유량: 코핑 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit inside of copings",
            "ja": "余裕量：コーピング内部の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside abutment bases_[M1.0Bx10]",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 어버트먼트 베이스 내부를 정삭합니다.",
            "en": "Finishing process inside abutment bases with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でアバットメントベース内部を仕上げます。"
          },
          {
            "ko": "여유량 XY: X축과 Y축만 변경하여 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다.",
            "en": "Allowance XY : Available to adjust the fit(Only X&Y axes) inside of abutment bases",
            "ja": "余裕量XY：X軸とY軸のみを変更してアバットメントベース内部の適合を調整できます。"
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
        "title": "Finishing inside copings_[M0.6B_L03]",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 0.6mm diameter tool",
            "ja": "直径0.6mmの工具でコーピング内部を仕上げます。"
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
        "title": "Finishing inside abutment bases_[M0.6B_L03]",
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
    "title": "PEEK_Crown Bridge_SCRP_3+2x",
    "source": "PEEK_Crown Bridge_SCRP_3+2x 0c7cfb3e90588336bd1c816bf098e14c.html",
    "material": "PEEK",
    "type": "Crown Bridge",
    "family": "Bridge",
    "conditions": [
      {
        "ko": "PEEK 디스크에서 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown bridge in the PEEK Disc.",
        "ja": "PEEKディスクでクラウンブリッジを加工するテンプレートです。"
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
        "optional": false,
        "comments": []
      },
      {
        "id": "",
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
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
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
        "title": "Finishing inside copings_[M0.6B_L03]",
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
    "title": "PEEK_Crown Bridge_SCRP_5x",
    "source": "PEEK_Crown Bridge_SCRP_5x 815cfb3e905882299cb08109899e90c0.html",
    "material": "PEEK",
    "type": "Crown Bridge",
    "family": "Bridge",
    "conditions": [
      {
        "ko": "PEEK 디스크에서 크라운 브릿지를 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown bridge in the PEEK Disc.",
        "ja": "PEEKディスクでクラウンブリッジを加工するテンプレートです。"
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
        "title": "Finishing inside copings_[M1.0Bx10]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 동시 5축으로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings by simultaneous 5-axis movement with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、同時5軸でコーピング内部を仕上げます。"
          },
          {
            "ko": "여유량: 크라운 브릿지 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown bridge.",
            "ja": "余裕量：クラウンブリッジのキャビティ側の適合を調整できます。"
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
        "title": "Finishing inside copings_[M0.6B_L03]",
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
    "title": "PEEK_Crown/SCRP_3+2x_D0.6",
    "source": "PEEK_Crown SCRP_3+2x_D0 6 050cfb3e9058827395b981f9e57ae396.html",
    "material": "PEEK",
    "type": "Crown/SCRP",
    "family": "Crown",
    "conditions": [
      {
        "ko": "PEEK 디스크에서 크라운을 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown in the PEEK Disc.",
        "ja": "PEEKディスクでクラウンを加工するテンプレートです。"
      },
      {
        "ko": "단일 삽입 방향(3+2축)으로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with a single insertion direction (3+2-axis).",
        "ja": "単一の挿入方向（3+2軸）でコーピング内部を仕上げる工程が含まれます。"
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
        "title": "Finishing inside copings_[M1.0B_L10]_3+2X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "여유량: 크라운 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown.",
            "ja": "余裕量：クラウンのキャビティ側の適合を調整できます。"
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
        "title": "Finishing inside copings_[M0.6B_L03]",
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
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
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
    "title": "PEEK_Crown/SCRP_5x_D0.6",
    "source": "PEEK_Crown SCRP_5x_D0 6 e9fcfb3e905882f98735017d83bb569d.html",
    "material": "PEEK",
    "type": "Crown/SCRP",
    "family": "Crown",
    "conditions": [
      {
        "ko": "PEEK 디스크에서 크라운을 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown in the PEEK Disc.",
        "ja": "PEEKディスクでクラウンを加工するテンプレートです。"
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
        "title": "Finishing inside copings_[M1.0B_L10]_5X",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 코핑 내부를 정삭합니다.",
            "en": "Finishing process inside copings with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具でコーピング内部を仕上げます。"
          },
          {
            "ko": "여유량: 크라운 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side of crown.",
            "ja": "余裕量：クラウンのキャビティ側の適合を調整できます。"
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
        "title": "Finishing inside copings_[M0.6B_L03]",
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
            "ko": "여유량: 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance: Available to adjust the fit cavity side.",
            "ja": "余裕量：キャビティ側の適合を調整できます。"
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
    "title": "PEEK_Over Structure",
    "source": "PEEK_Over Structure d6ecfb3e9058822e911481ab56cfb6f5.html",
    "material": "PEEK",
    "type": "Over Structure",
    "family": "Over Structure",
    "conditions": [
      {
        "ko": "PEEK 디스크에서 iBar의 상부 구조물을 가공하는 템플릿입니다.",
        "en": "This is for milling a Supra-structure of iBar in the PEEK Disc.",
        "ja": "PEEKディスクでiBarの上部構造を加工するテンプレートです。"
      },
      {
        "ko": "보철물 종류를 Over structure로 설정해야 합니다.",
        "en": "The part should be set to Over structure",
        "ja": "補綴物の種類をOver structureに設定してください。"
      },
      {
        "ko": "8개의 서로 다른 각도로 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with 8 different angle.",
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
        "title": "Finishing inside copings_[M0.6B_L03]",
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
  }
];
