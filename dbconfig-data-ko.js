const dbConfigDataKO = {
  "Hybrid Ceramic_Abutment Crown bridge_NCS (highnees)": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Abutment crown bridge
Add a property
댓글
템플릿을 사용하기 위한 조건
보철물 유형: Abutment crown bridge
소재: Hybrid Ceramic Disc / Block
하이니스 시스템의 인터페이스로 디자인 되어있어야 합니다. 
해당 템플릿으로 가공하기 위해 준비해야할 것들
마진 라인
 인터페이스당 하나의 어버트먼트 베이스 라인이 있어야합니다. 
경계(Emergence) 설정이 필수는 아닙니다. 하지만 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다. 
임플란트 인터페이스
어버트먼트 베이스라인이 설정된 인터페이스는 반드시 스크류 채널이 있어야합니다.
인터페이스에 설정된 스크류채널을 제외한 다른 홀들은 스크류 채널이 아닌 홀(Holes)로 설정되어야 합니다. .
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려보세요.
-Finishing inside abutment bases [M1.0F_L06]_highness
--어버트먼트 베이스 라인 안쪽을 1.0mm 플랫 공구(T42_M1.5FL_L15)을 이용해 정삭합니다.
---추가. XY 여유량: 어버트먼트 베이스 라인 안쪽의 적합을 조정할 수 있습니다. <br>(-로 설정할수록 적합이 헐거워집니다) <br>(+로 설정할수록 적합이 타이트해집니다)
-Fissure machining G0.6B -0
--교합면의 그루브를 0.6mm 공구(T37_G0.6B_L2)를 사용해 가공합니다. 
---계산: 해당 과정을 진행 여부를 선택하실 수 있습니다. (기본 설정값: 네)
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
Tools
Comment
T35
G2.0B

T36
G1.0B

T37
G0.6B

T42
M1.5FL
스크류 채널 가공을 위해 사용됩니다. 
T43
M1.0F
임플란트 인터페이스 인터페이스 가공을 위해 사용됩니다. 
T45
M1.6T
각진 스크류 채널 가공 시에만 선택적으로 사용됩니다. 
`,
  "Hybrid Ceramic_Abutment Crown_NCS (highnees)": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Abutment crown
Add a property
댓글
템플릿을 사용하기 위한 조건
보철물 유형: Abutment crown
소재: Hybrid Ceramic Disc / Block
하이니스 시스템의 인터페이스로 디자인 되어있어야 합니다. 
해당 템플릿으로 가공하기 위해 준비해야할 것들
마진 라인
 어버트먼트 베이스 라인은 인터페이스에 반드시 설정되어야만 합니다.
경계(Emergence) 설정이 필수는 아닙니다. 하지만 인터페이스 주변부의 텍스처 퀄리티를 위해 설정하시는 걸 권장합니다. 
임플란트 인터페이스
스크루 채널은 반드시 인터페이스에 설정되어야만 합니다.
인터페이스에 설정된 스크류채널을 제외한 다른 홀들은 스크류 채널이 아닌 홀(Holes)로 설정되어야 합니다. .
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
-Finishing inside abutment bases [M1.0F_L06]_highness
--어버트먼트 베이스 라인 안쪽을 1.0mm 플랫 공구(T42_M1.5FL_L15)을 이용해 정삭합니다.
---추가. XY 여유량: 어버트먼트 베이스 라인 안쪽의 적합을 조정할 수 있습니다. <br>(-로 설정할수록 적합이 헐거워집니다) <br>(+로 설정할수록 적합이 타이트해집니다)
-Fissure machining G0.6B -0
--교합면의 그루브를 0.6mm 공구(T37_G0.6B_L2)를 사용해 가공합니다. 
---계산: 해당 과정을 진행 여부를 선택하실 수 있습니다. (기본 설정값: 네)
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
Tools
Comment
T35
G2.0B

T36
G1.0B

T37
G0.6B

T42
M1.5FL
스크류 채널 가공을 위해 사용됩니다. 
T43
M1.0F
임플란트 인터페이스 인터페이스 가공을 위해 사용됩니다. 
T45
M1.6T
각진 스크류 채널 가공 시에만 선택적으로 사용됩니다. 
`,
  "Hybrid Ceramic_Inlay/Crown bridge_SCRP_5X_D0.6": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Inlay/Crown bridge
Crown bridge
Add a property
댓글
템플릿을 사용하기 위한 조건
보철물 유형: 인레이/ 온레이 크랑누 브릿지 혹은 크라운 브릿지( 인레이/ 온레이 크라운 브릿지는 인레이와 크라운이 같이 있는 브릿지의 형태를 말합니다)
인레이/ 온레이 혹은 코핑 라인은 필수입니다. 
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t

T42
\t
M1.5FL
\t
스크류 채널 가공을 위해 사용됩니다. 

T43
\t
M1.0F
\t
임플란트 인터페이스 인터페이스 가공을 위해 사용됩니다. 

T45
\t
M1.6T
\t
Optional, When it is applied Angled screw hole.`,
  "Hybrid Ceramic_Inlay/Crown bridge_SCRP_5X": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Inlay/Crown bridge
Crown bridge
Add a property
댓글
템플릿을 사용하기 위한 조건
보철물 유형: 인레이/ 온레이 크랑누 브릿지 혹은 크라운 브릿지( 인레이/ 온레이 크라운 브릿지는 인레이와 크라운이 같이 있는 브릿지의 형태를 말합니다)
인레이/ 온레이 혹은 코핑 라인은 필수입니다. 
0.6mm diameter tool is optional
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도

사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t
Optional (UDA, Fissure machining)

T42
\t
M1.5FL
\t
스크류 채널 가공을 위해 사용됩니다. 

T43
\t
M1.0F
\t
임플란트 인터페이스 인터페이스 가공을 위해 사용됩니다. 

T45
\t
M1.6T
\t
Optional, When it is applied Angled screw hole.`,
  "Hybrid Ceramic_Crown_SCRP_5X_D0.6": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Crown
Add a property
댓글
템플릿을 사용하기 위한 조건
The 보철물 유형 is the Crown
The materials is Hybrid Ceramic Disc/Block
Setting the Coping lines is mandatory.
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
-Finishing inside copings G1 5x -180
--Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool
---계산: 해당 과정을 진행 여부를 선택하실 수 있습니다. (기본 설정값: 네)
---Allowance : Available to adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)
---Boundary offset / Bounda
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t`,
  "Hybrid Ceramic_Crown_SCRP_5X": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Crown
Add a property
댓글
템플릿을 사용하기 위한 조건
The 보철물 유형 is the Crown
The materials is Hybrid Ceramic Disc/Block
Setting the Coping lines is mandatory.
0.6mm diameter tool is optional
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
-Finishing inside copings G1 5x -180
--Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool
---계산: 해당 과정을 진행 여부를 선택하실 수 있습니다. (기본 설정값: 네)
---Allowance : Available to adjust the fit inside of
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t
Optional (UDA, Fissure machining)`,
  "Hybrid Ceramic_Inlay/Onlay_D0.6": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Inlay/Onlay
Add a property
댓글
템플릿을 사용하기 위한 조건
The 보철물 유형 is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
-Overall finishing cavity side (cap) G1 -180
--Finishing process on whole cavity side with 1.0mm diameter tool
---Allowance : Available to adjust the fit inside of crowns/copings
---Boundary offset / Boundary angle
-Fissure machining [G1.0B] -0
--Occlusal groove machining process with 1.0mm diameter tool
--Ca
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t`,
  "Hybrid Ceramic_Inlay/Onlay/ -Slow": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Inlay/Onlay
Add a property
댓글
템플릿을 사용하기 위한 조건
The 보철물 유형 is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This is for milling more slow than “Hybrid Ceramic_Inlay/Onlay_D0.6”
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
-Overall finishing cavity side (cap) G1 -180
--Finishing process on whole cavity side with 1.0mm diameter tool
---Allowance : Available to adjust the fit inside of crowns/copings
---Boundary offset / Boundary angle
-Fissure machining [
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t`,
  "Hybrid Ceramic_Inlay/Onlay_1st -Cavity": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Inlay/Onlay
Add a property
댓글
템플릿을 사용하기 위한 조건
The 보철물 유형 is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling cavity side only with the way of burial milling. It is available to set no conectors.
Please milling this cavity side one first.
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
-Overall finishing cavity side (cap) G1 -180
--Finishing process on whole cavity side with 1.0mm diameter tool
---Allowance : Available t
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t`,
  "5월 21일 편집": `
5월 21일 편집
공유`,
  "Hybrid Ceramic_Inlay/Onlay_D0.6 [+0.05]": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Inlay/Onlay
Add a property
댓글
템플릿을 사용하기 위한 조건
The 보철물 유형 is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This is for milling it 0.05mm bigger than the original design. You can stragically utilize this one.
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
-Overall finishing cavity side (cap) G1 -180
--Finishing process on whole cavity side with 1.0mm diameter tool
---Allowance : Available to adjust the fit inside of crowns/copings
--Boundary offse
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t`,
  "Hybrid Ceramic_Inlay/Onlay_1st -Cavity [+0.05]": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Inlay/Onlay
Add a property
댓글
템플릿을 사용하기 위한 조건
The 보철물 유형 is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling cavity side only with the way of burial milling. It is available to set no conectors.
Please milling this cavity side one first.
This is for milling it 0.05mm bigger than the original design. You can stragically utilize this one.
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
-Overall finishing cavi
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t`,
  "Hybrid Ceramic_Inlay/Onlay_2nd -Occlusal [+0.05]": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Inlay/Onlay
Add a property
댓글
템플릿을 사용하기 위한 조건
The 보철물 유형 is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling occlusal side only with the way of burial milling. It is available to set no conectors.
Please milling this occlusal side one after cavity side.
This is for milling it 0.05mm bigger than the original design. You can stragically utilize this one.
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
-Fiss
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t`,
  "Hybrid Ceramic_Inlay/Onlay_D0.6 [+0.08]": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Inlay/Onlay
Add a property
댓글
템플릿을 사용하기 위한 조건
The 보철물 유형 is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This is for milling it 0.08mm bigger than the original design. You can stragically utilize this one.
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
-Overall finishing cavity side (cap) G1 -180
--Finishing process on whole cavity side with 1.0mm diameter tool
---Allowance : Available to adjust the fit inside of crowns/copings
--Boundary offse
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t`,
  "Hybrid Ceramic_Inlay/Onlay_1st -Cavity [+0.08]": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Inlay/Onlay
Add a property
댓글
템플릿을 사용하기 위한 조건
The 보철물 유형 is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling cavity side only with the way of burial milling. It is available to set no conectors.
Please milling this cavity side one first.
This is for milling it 0.08mm bigger than the original design. You can stragically utilize this one.
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
-Overall finishing cavi
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t`,
  "Hybrid Ceramic_Inlay/Onlay_2nd -Occlusal [+0.08]": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Inlay/Onlay
Add a property
댓글
템플릿을 사용하기 위한 조건
The 보철물 유형 is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling occlusal side only with the way of burial milling. It is available to set no conectors.
Please milling this occlusal side one after cavity side.
This is for milling it 0.08mm bigger than the original design. You can stragically utilize this one.
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
-Fiss
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t`,
  "Hybrid Ceramic_Inlay/Onlay_2nd -Occlusal": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Inlay/Onlay
Add a property
댓글
템플릿을 사용하기 위한 조건
The 보철물 유형 is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling occlusal side only with the way of burial milling. It is available to set no conectors.
Please milling this occlusal side one after cavity side.
조정 가능한 항목들
-일반 설정
--증분식 경계 옵셋
--증분식 경계 각도
---만약 계산중에 에러가 발생한다면 해당 수치들을 조금 늘려세요.
-Fiss
사용자 정의 영역을 사용하실 수 있습니다. 
유형 1 : T36-G1.0B
유형 3 : T36-G1.0B, T37-G0.6B
해당 템플릿에서 사용되는 공구 목록
Tool pocket #
\t
Tools
\t
Comment

T35
\t
G2.0B
\t

T36
\t
G1.0B
\t

T37
\t
G0.6B
\t`
};
