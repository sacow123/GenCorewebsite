// Source: supplied Glass Ceramic HTML exports. Generated with node tools/build-mai-glass.js.
window.MaiGlassTemplates = [
  {
    "title": "Glass Ceramic_Crown / Veneer",
    "source": "Glass Ceramic_Crown Veneer d78cfb3e9058828da77a011af13cb229.html",
    "material": "Glass Ceramic",
    "type": "Crown / Veneer",
    "family": "Crown",
    "conditions": [
      {
        "ko": "글라스 세라믹 블록 또는 디스크에서 크라운과 비니어를 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown and Veneer in the Glass-ceramic block or disc.",
        "ja": "ガラスセラミックのブロックまたはディスクでクラウンとベニアを加工するテンプレートです。"
      },
      {
        "ko": "G1.0B 공구로 단일 삽입 방향(3+2축)에 따라 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with both a single insertion direction (3+2-axis) by G1.0B.",
        "ja": "G1.0B工具を使用し、単一の挿入方向（3+2軸）に沿ってコーピング内部を仕上げる工程が含まれます。"
      },
      {
        "ko": "커넥터를 2개 설정할 수 있으므로 더 얇게 설정할 수 있습니다. 모든 커넥터는 남아 있는 블랭크에 연결해야 합니다.",
        "en": "Two connectors are available to set. Therefore the connectors can be thiner. All connectors must be connected to the blank remained.",
        "ja": "コネクターを2本設定できるため、より薄く設定できます。すべてのコネクターを残存するブランクに接続してください。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1: T07_G1.0B_L9",
        "en": "Category 1: T07_G1.0B_L9",
        "ja": "カテゴリ1: T07_G1.0B_L9"
      },
      {
        "ko": "유형 3: T08_G0.6B_L9",
        "en": "Category 3: T08_G0.6B_L9",
        "ja": "カテゴリ3: T08_G0.6B_L9"
      }
    ],
    "tools": [
      {
        "id": "T5",
        "name": "G2.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T6",
        "name": "G1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T7",
        "name": "G1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T8",
        "name": "G0.6B",
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
        "title": "Finishing inside copings - G1 - 5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 인레이/온레이 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side of Inlay/Onlay.",
            "ja": "余裕量：インレー／オンレーのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings - G1 - 3+2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 인레이/온레이 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side of Inlay/Onlay.",
            "ja": "余裕量：インレー／オンレーのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining - G0.6 - 0",
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
        "title": "Fissure machining - G0.3 - 0",
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
    "images": [
      {
        "source": "image%204.png",
        "src": "assets/images/sec-mai-dbconfig/glass-ceramic/image-4.webp",
        "alt": {
          "ko": "원본 커넥터 설정 예시 1",
          "en": "Original connector setup example 1",
          "ja": "原資料のコネクター設定例 1"
        }
      },
      {
        "source": "image%205.png",
        "src": "assets/images/sec-mai-dbconfig/glass-ceramic/image-5.webp",
        "alt": {
          "ko": "원본 커넥터 설정 예시 2",
          "en": "Original connector setup example 2",
          "ja": "原資料のコネクター設定例 2"
        }
      },
      {
        "source": "image%206.png",
        "src": "assets/images/sec-mai-dbconfig/glass-ceramic/image-6.webp",
        "alt": {
          "ko": "원본 커넥터 설정 예시 3",
          "en": "Original connector setup example 3",
          "ja": "原資料のコネクター設定例 3"
        }
      }
    ]
  },
  {
    "title": "Glass Ceramic_Crown / Veneer_D0.6",
    "source": "Glass Ceramic_Crown Veneer_D0 6 7e2cfb3e9058824db14a8118e0fc5c36.html",
    "material": "Glass Ceramic",
    "type": "Crown / Veneer",
    "family": "Crown",
    "conditions": [
      {
        "ko": "글라스 세라믹 블록 또는 디스크에서 크라운과 비니어를 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown and Veneer in the Glass-ceramic block or disc.",
        "ja": "ガラスセラミックのブロックまたはディスクでクラウンとベニアを加工するテンプレートです。"
      },
      {
        "ko": "G1.0B 공구로 단일 삽입 방향(3+2축)에 따라 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with both a single insertion direction (3+2-axis) by G1.0B.",
        "ja": "G1.0B工具を使用し、単一の挿入方向（3+2軸）に沿ってコーピング内部を仕上げる工程が含まれます。"
      },
      {
        "ko": "커넥터를 2개 설정할 수 있으므로 더 얇게 설정할 수 있습니다. 모든 커넥터는 남아 있는 블랭크에 연결해야 합니다.",
        "en": "Two connectors are available to set. Therefore the connectors can be thiner. All connectors must be connected to the blank remained.",
        "ja": "コネクターを2本設定できるため、より薄く設定できます。すべてのコネクターを残存するブランクに接続してください。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1: T07_G1.0B_L9",
        "en": "Category 1: T07_G1.0B_L9",
        "ja": "カテゴリ1: T07_G1.0B_L9"
      },
      {
        "ko": "유형 3: T08_G0.6B_L9",
        "en": "Category 3: T08_G0.6B_L9",
        "ja": "カテゴリ3: T08_G0.6B_L9"
      }
    ],
    "tools": [
      {
        "id": "T5",
        "name": "G2.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T6",
        "name": "G1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T7",
        "name": "G1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T8",
        "name": "G0.6B",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings - G1 - 5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 인레이/온레이 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side of Inlay/Onlay.",
            "ja": "余裕量：インレー／オンレーのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings - G1 - 3+2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 인레이/온레이 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side of Inlay/Onlay.",
            "ja": "余裕量：インレー／オンレーのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining - G0.6 - 0",
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
        "title": "Fissure machining - G0.3 - 0",
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
    "images": [
      {
        "source": "image%204.png",
        "src": "assets/images/sec-mai-dbconfig/glass-ceramic/image-4.webp",
        "alt": {
          "ko": "원본 커넥터 설정 예시 1",
          "en": "Original connector setup example 1",
          "ja": "原資料のコネクター設定例 1"
        }
      },
      {
        "source": "image%205.png",
        "src": "assets/images/sec-mai-dbconfig/glass-ceramic/image-5.webp",
        "alt": {
          "ko": "원본 커넥터 설정 예시 2",
          "en": "Original connector setup example 2",
          "ja": "原資料のコネクター設定例 2"
        }
      },
      {
        "source": "image%206.png",
        "src": "assets/images/sec-mai-dbconfig/glass-ceramic/image-6.webp",
        "alt": {
          "ko": "원본 커넥터 설정 예시 3",
          "en": "Original connector setup example 3",
          "ja": "原資料のコネクター設定例 3"
        }
      }
    ]
  },
  {
    "title": "Glass Ceramic_Crown / Veneer_D0.6_Fast-II",
    "source": "Glass Ceramic_Crown Veneer_D0 6_Fast-II 387cfb3e9058801891f8ee5d033d815d.html",
    "material": "Glass Ceramic",
    "type": "Crown / Veneer",
    "family": "Crown",
    "conditions": [
      {
        "ko": "글라스 세라믹 블록 또는 디스크에서 크라운과 비니어를 가공하는 템플릿입니다.",
        "en": "This is for milling a Crown and Veneer in the Glass-ceramic block or disc.",
        "ja": "ガラスセラミックのブロックまたはディスクでクラウンとベニアを加工するテンプレートです。"
      },
      {
        "ko": "G1.0B 공구로 단일 삽입 방향(3+2축)에 따라 코핑 내부를 정삭하는 공정이 포함되어 있습니다.",
        "en": "This template includes a Finishing inside copings with both a single insertion direction (3+2-axis) by G1.0B.",
        "ja": "G1.0B工具を使用し、単一の挿入方向（3+2軸）に沿ってコーピング内部を仕上げる工程が含まれます。"
      },
      {
        "ko": "커넥터를 1개 설정할 수 있으므로 충분한 두께를 확보해야 합니다. 커넥터의 방향은 지그(픽스처)를 향해야 합니다.",
        "en": "One connector is available to set. Therefore the connector must have an enough thickness.The direction of the connector must be forward to the jig(fixture).",
        "ja": "コネクターを1本設定できるため、十分な厚さを確保してください。コネクターの方向はジグ（フィクスチャー）に向けてください。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1: T07_G1.0B_L9",
        "en": "Category 1: T07_G1.0B_L9",
        "ja": "カテゴリ1: T07_G1.0B_L9"
      },
      {
        "ko": "유형 3: T08_G0.6B_L9",
        "en": "Category 3: T08_G0.6B_L9",
        "ja": "カテゴリ3: T08_G0.6B_L9"
      }
    ],
    "tools": [
      {
        "id": "T5",
        "name": "G2.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T6",
        "name": "G1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T7",
        "name": "G1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T8",
        "name": "G0.6B",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "Finishing inside copings - G1 - 5x",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          },
          {
            "ko": "여유량: 인레이/온레이 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side of Inlay/Onlay.",
            "ja": "余裕量：インレー／オンレーのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Finishing inside copings - G1 - 3+2",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구를 사용하여 설정된 삽입 방향으로 크라운/코핑 내부를 정삭합니다.",
            "en": "Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool",
            "ja": "直径1.0mmの工具を使用し、設定された挿入方向でクラウン／コーピング内部を仕上げます。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate : Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          },
          {
            "ko": "여유량: 인레이/온레이 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Allowance : Available to adjust the fit cavity side of Inlay/Onlay.",
            "ja": "余裕量：インレー／オンレーのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining - G0.6 - 0",
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
        "title": "Fissure machining - G0.3 - 0",
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
    "images": [
      {
        "source": "image%201.png",
        "src": "assets/images/sec-mai-dbconfig/glass-ceramic/image-1.webp",
        "alt": {
          "ko": "원본 커넥터 설정 예시 1",
          "en": "Original connector setup example 1",
          "ja": "原資料のコネクター設定例 1"
        }
      },
      {
        "source": "image%202.png",
        "src": "assets/images/sec-mai-dbconfig/glass-ceramic/image-2.webp",
        "alt": {
          "ko": "원본 커넥터 설정 예시 2",
          "en": "Original connector setup example 2",
          "ja": "原資料のコネクター設定例 2"
        }
      },
      {
        "source": "image%203.png",
        "src": "assets/images/sec-mai-dbconfig/glass-ceramic/image-3.webp",
        "alt": {
          "ko": "원본 커넥터 설정 예시 3",
          "en": "Original connector setup example 3",
          "ja": "原資料のコネクター設定例 3"
        }
      }
    ]
  },
  {
    "title": "Glass Ceramic_Inlay/Onlay",
    "source": "Glass Ceramic_Inlay Onlay 288cfb3e905883cab3ab81a20e945a9b.html",
    "material": "Glass Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "conditions": [
      {
        "ko": "글라스 세라믹 블록 또는 디스크에서 인레이/온레이를 가공하는 템플릿입니다.",
        "en": "This is for milling a Inlay/Onlay in the Glass-ceramic block or disc.",
        "ja": "ガラスセラミックのブロックまたはディスクでインレー／オンレーを加工するテンプレートです。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1: T07_G1.0B_L9",
        "en": "Category 1: T07_G1.0B_L9",
        "ja": "カテゴリ1: T07_G1.0B_L9"
      },
      {
        "ko": "유형 3: T08_G0.6B_L9",
        "en": "Category 3: T08_G0.6B_L9",
        "ja": "カテゴリ3: T08_G0.6B_L9"
      }
    ],
    "tools": [
      {
        "id": "T5",
        "name": "G2.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T6",
        "name": "G1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T7",
        "name": "G1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T8",
        "name": "G0.6B",
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
        "title": "Overall finishing cavity side (cap) - D1 - 180",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측(180°)을 정삭합니다.",
            "en": "Finishing process cavity side(180º) with 1.0mm diameter tool.",
            "ja": "直径1.0mmの工具でキャビティ側（180°）を仕上げます。"
          },
          {
            "ko": "여유량: 인레이/온레이 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Alloance: Available to adjust the fit cavity side of Inlay/Onlay.",
            "ja": "余裕量：インレー／オンレーのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining - D0.6 - 0",
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
        "title": "Overall restmachining cavity side D0.6 - 180",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 캐비티 측(180°)의 잔삭을 가공합니다.",
            "en": "Restmachining process cavity side(180º) with 0.6mm diameter tool.",
            "ja": "直径0.6mmの工具でキャビティ側（180°）の残削加工を行います。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining - G0.3 - 0",
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
    "title": "Glass Ceramic_Inlay/Onlay_1st-Cavity",
    "source": "Glass Ceramic_Inlay Onlay_1st-Cavity c59cfb3e905883e3aa0a81ccd21d5ebd.html",
    "material": "Glass Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "conditions": [
      {
        "ko": "글라스 세라믹 디스크에서 인레이/온레이를 가공하는 템플릿입니다.",
        "en": "This is for milling a Inlay/Onlay in the Glass-ceramic disc.",
        "ja": "ガラスセラミックのディスクでインレー／オンレーを加工するテンプレートです。"
      },
      {
        "ko": "커넥터 없이 인레이/온레이를 가공하는 템플릿입니다. 캐비티 방향(180°)의 절반만 가공합니다.",
        "en": "This template for the Inlay/Onlay milling without connectors. Only mill half of the cavity direction(180º).",
        "ja": "コネクターなしでインレー／オンレーを加工するテンプレートです。キャビティ方向（180°）の半分のみを加工します。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1: T07_G1.0B_L9",
        "en": "Category 1: T07_G1.0B_L9",
        "ja": "カテゴリ1: T07_G1.0B_L9"
      },
      {
        "ko": "유형 3: T08_G0.6B_L9",
        "en": "Category 3: T08_G0.6B_L9",
        "ja": "カテゴリ3: T08_G0.6B_L9"
      }
    ],
    "tools": [
      {
        "id": "T5",
        "name": "G2.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T6",
        "name": "G1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T7",
        "name": "G1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T8",
        "name": "G0.6B",
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
        "title": "Overall finishing cavity side (cap) - D1 - 180",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측(180°)을 정삭합니다.",
            "en": "Finishing process cavity side(180º) with 1.0mm diameter tool.",
            "ja": "直径1.0mmの工具でキャビティ側（180°）を仕上げます。"
          },
          {
            "ko": "여유량: 인레이/온레이 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Alloance: Available to adjust the fit cavity side of Inlay/Onlay.",
            "ja": "余裕量：インレー／オンレーのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Overall restmachining cavity side D0.6 - 180",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 캐비티 측(180°)의 잔삭을 가공합니다.",
            "en": "Restmachining process cavity side(180º) with 0.6mm diameter tool.",
            "ja": "直径0.6mmの工具でキャビティ側（180°）の残削加工を行います。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining - G0.6 - 0",
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
        "title": "Fissure machining - G0.3 - 0",
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
    "title": "Glass Ceramic_Inlay/Onlay_2nd-Occlusal",
    "source": "Glass Ceramic_Inlay Onlay_2nd-Occlusal 0a0cfb3e905883ca85f9017f9990e84f.html",
    "material": "Glass Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "conditions": [
      {
        "ko": "글라스 세라믹 디스크에서 인레이/온레이를 가공하는 템플릿입니다.",
        "en": "This is for milling a Inlay/Onlay in the Glass-ceramic disc.",
        "ja": "ガラスセラミックのディスクでインレー／オンレーを加工するテンプレートです。"
      },
      {
        "ko": "커넥터 없이 인레이/온레이를 가공하는 템플릿입니다. 교합면 방향(0°)의 절반만 가공합니다.",
        "en": "This template for the Inlay/Onlay milling without connectors. Only mill half of the occlusal direction(0º).",
        "ja": "コネクターなしでインレー／オンレーを加工するテンプレートです。咬合面方向（0°）の半分のみを加工します。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1: T07_G1.0B_L9",
        "en": "Category 1: T07_G1.0B_L9",
        "ja": "カテゴリ1: T07_G1.0B_L9"
      },
      {
        "ko": "유형 3: T08_G0.6B_L9",
        "en": "Category 3: T08_G0.6B_L9",
        "ja": "カテゴリ3: T08_G0.6B_L9"
      }
    ],
    "tools": [
      {
        "id": "T5",
        "name": "G2.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T6",
        "name": "G1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T7",
        "name": "G1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T8",
        "name": "G0.6B",
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
        "title": "Fissure machining - D0.6 - 0",
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
        "title": "Overall restmachining cavity side D0.6 - 180",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 캐비티 측(180°)의 잔삭을 가공합니다.",
            "en": "Restmachining process cavity side(180º) with 0.6mm diameter tool.",
            "ja": "直径0.6mmの工具でキャビティ側（180°）の残削加工を行います。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 꺼짐)",
            "en": "Calculate: Selectable operate this process or skip, (Default: Off)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：OFF）"
          }
        ]
      },
      {
        "title": "Fissure machining - G0.3 - 0",
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
    "title": "Glass Ceramic_Inlay/Onlay_D0.6",
    "source": "Glass Ceramic_Inlay Onlay_D0 6 51ccfb3e9058821eb6158180978dd8a8.html",
    "material": "Glass Ceramic",
    "type": "Inlay/Onlay",
    "family": "Inlay/Onlay",
    "conditions": [
      {
        "ko": "글라스 세라믹 블록 또는 디스크에서 인레이/온레이를 가공하는 템플릿입니다.",
        "en": "This is for milling a Inlay/Onlay in the Glass-ceramic block or disc.",
        "ja": "ガラスセラミックのブロックまたはディスクでインレー／オンレーを加工するテンプレートです。"
      },
      {
        "ko": "G0.6B 공구를 사용하는 열구 가공이 기본으로 포함되어 있습니다.",
        "en": "The Fissure machining by G0.6B is included as default.",
        "ja": "G0.6B工具による裂溝加工が標準で含まれます。"
      }
    ],
    "uda": [
      {
        "ko": "유형 1: T07_G1.0B_L9",
        "en": "Category 1: T07_G1.0B_L9",
        "ja": "カテゴリ1: T07_G1.0B_L9"
      },
      {
        "ko": "유형 3: T08_G0.6B_L9",
        "en": "Category 3: T08_G0.6B_L9",
        "ja": "カテゴリ3: T08_G0.6B_L9"
      }
    ],
    "tools": [
      {
        "id": "T5",
        "name": "G2.5R",
        "optional": false,
        "comments": []
      },
      {
        "id": "T6",
        "name": "G1.5B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T7",
        "name": "G1.0B",
        "optional": false,
        "comments": []
      },
      {
        "id": "T8",
        "name": "G0.6B",
        "optional": false,
        "comments": []
      }
    ],
    "processes": [
      {
        "title": "Overall finishing cavity side (cap) - D1 - 180",
        "descriptions": [
          {
            "ko": "직경 1.0mm 공구로 캐비티 측(180°)을 정삭합니다.",
            "en": "Finishing process cavity side(180º) with 1.0mm diameter tool.",
            "ja": "直径1.0mmの工具でキャビティ側（180°）を仕上げます。"
          },
          {
            "ko": "여유량: 인레이/온레이 캐비티 측의 적합을 조정할 수 있습니다.",
            "en": "Alloance: Available to adjust the fit cavity side of Inlay/Onlay.",
            "ja": "余裕量：インレー／オンレーのキャビティ側の適合を調整できます。"
          }
        ]
      },
      {
        "title": "Fissure machining - D0.6 - 0",
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
        "title": "Overall restmachining cavity side D0.6 - 180",
        "descriptions": [
          {
            "ko": "직경 0.6mm 공구로 캐비티 측(180°)의 잔삭을 가공합니다.",
            "en": "Restmachining process cavity side(180º) with 0.6mm diameter tool.",
            "ja": "直径0.6mmの工具でキャビティ側（180°）の残削加工を行います。"
          },
          {
            "ko": "계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: 켜짐)",
            "en": "Selectable operate this process or skip, (Default: On)",
            "ja": "計算：この工程を実行するか選択できます。（初期値：ON）"
          }
        ]
      },
      {
        "title": "Fissure machining - G0.3 - 0",
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
