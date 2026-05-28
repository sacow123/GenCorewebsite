const dbConfigDataEN = {
  "Hybrid Ceramic_Abutment Crown bridge_NCS (highnees)": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Abutment crown bridge
Add a property
댓글
The conditions for selecting this strategy(template)
Part type: Abutment crown bridge
Materials: Hybrid Ceramic Disc / Block
The design should be included the interface of the Highness system
What it needs to Prepare for this strategy(template)
Margin lines
 A Abutment base line must be set each interfaces.
The Emergence line is not mandatory, but it is recommended for better texture quality near the interface area.
Implant interfaces
An interface that is set the Abutment base line should exist a Screw channel each.
Other holes except the screw channel on the interface must be set to Holes.
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!
-Finishing inside abutment bases [M1.0F_L06]_highness
--Finishing inside abutments with 1.0mm diameter Flat tool
---Add. Allowance XY: Available to adjust the abutment inside fit.
-Fissure machining G0.6B -0
--Occlusal groove machining process with 0.6mm diameter tool
---Calculate : Selectable operate this process or skip, (Default: On)
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
Screw Channel (SC) machining
T43
M1.0F
Interface machining
T45
M1.6T
Optional, for the angled screw channel
`,
  "Hybrid Ceramic_Abutment Crown_NCS (highnees)": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Abutment crown
Add a property
댓글
The conditions for selecting this strategy(template)
Part type: Abutment crown
Materials: Hybrid Ceramic Disc / Block
The design should be included the interface of the Highness system
What it needs to Prepare for this strategy(template)
Margin lines
 A Abutment base line must be set the interface.
The Emergence line is not mandatory, but it is recommended for better texture quality near the interface area.
Implant interfaces
A Screw channel should be exist on the interface that is set the Abutment base line.
Other holes except the screw channel on the interface must be set to Holes.
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!g calculation!
-Finishing inside abutment bases [M1.0F_L06]_highness
--Finishing inside abutments with 1.0mm diameter Flat tool
---Add. Allowance XY: Available to adjust the abutment inside fit.
-Fissure machining G0.6B -0
--Occlusal groove machining process with 0.6mm diameter tool
---Calculate : Selectable operate this process or skip, (Default: On)
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
Screw Channel (SC) machining
T43
M1.0F
Interface machining
T45
M1.6T
Optional, for the angled screw channel
`,
  "Hybrid Ceramic_Inlay/Crown bridge_SCRP_5X_D0.6": `
Materials
Hybrid Ceramic
Part (Prosthesis)
Inlay/Crown bridge
Crown bridge
Add a property
댓글
The conditions for selecting this strategy(template)
The part type is the Inlay/Onlay crown bridge* or Crown bridge (* Inlay/Onlay crown bridge is the bridge that consists of both inlays and crowns together)
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay or Coping lines is mandatory.
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error dur
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
Screw Channel (SC) machining

T43
\t
M1.0F
\t
Interface machining

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
The conditions for selecting this strategy(template)
The part type is the Inlay/Onlay crown bridge* or Crown bridge (* Inlay/Onlay crown bridge is the bridge that consists of both inlays and crowns together)
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay or Coping lines is mandatory.
0.6mm diameter tool is optional
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle

User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
Screw Channel (SC) machining

T43
\t
M1.0F
\t
Interface machining

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
The conditions for selecting this strategy(template)
The part type is the Crown
The materials is Hybrid Ceramic Disc/Block
Setting the Coping lines is mandatory.
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!
-Finishing inside copings G1 5x -180
--Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool
---Calculate : Selectable operate this process or skip, (Default: On)
---Allowance : Available to adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)
---Boundary offset / Bounda
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
The conditions for selecting this strategy(template)
The part type is the Crown
The materials is Hybrid Ceramic Disc/Block
Setting the Coping lines is mandatory.
0.6mm diameter tool is optional
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!
-Finishing inside copings G1 5x -180
--Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool
---Calculate : Selectable operate this process or skip, (Default: On)
---Allowance : Available to adjust the fit inside of
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
The conditions for selecting this strategy(template)
The part type is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!
-Overall finishing cavity side (cap) G1 -180
--Finishing process on whole cavity side with 1.0mm diameter tool
---Allowance : Available to adjust the fit inside of crowns/copings
---Boundary offset / Boundary angle
-Fissure machining [G1.0B] -0
--Occlusal groove machining process with 1.0mm diameter tool
--Ca
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
The conditions for selecting this strategy(template)
The part type is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This is for milling more slow than “Hybrid Ceramic_Inlay/Onlay_D0.6”
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!
-Overall finishing cavity side (cap) G1 -180
--Finishing process on whole cavity side with 1.0mm diameter tool
---Allowance : Available to adjust the fit inside of crowns/copings
---Boundary offset / Boundary angle
-Fissure machining [
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
The conditions for selecting this strategy(template)
The part type is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling cavity side only with the way of burial milling. It is available to set no conectors.
Please milling this cavity side one first.
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!
-Overall finishing cavity side (cap) G1 -180
--Finishing process on whole cavity side with 1.0mm diameter tool
---Allowance : Available t
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
The conditions for selecting this strategy(template)
The part type is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This is for milling it 0.05mm bigger than the original design. You can stragically utilize this one.
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!
-Overall finishing cavity side (cap) G1 -180
--Finishing process on whole cavity side with 1.0mm diameter tool
---Allowance : Available to adjust the fit inside of crowns/copings
--Boundary offse
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
The conditions for selecting this strategy(template)
The part type is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling cavity side only with the way of burial milling. It is available to set no conectors.
Please milling this cavity side one first.
This is for milling it 0.05mm bigger than the original design. You can stragically utilize this one.
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!
-Overall finishing cavi
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
The conditions for selecting this strategy(template)
The part type is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling occlusal side only with the way of burial milling. It is available to set no conectors.
Please milling this occlusal side one after cavity side.
This is for milling it 0.05mm bigger than the original design. You can stragically utilize this one.
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!
-Fiss
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
The conditions for selecting this strategy(template)
The part type is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This is for milling it 0.08mm bigger than the original design. You can stragically utilize this one.
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!
-Overall finishing cavity side (cap) G1 -180
--Finishing process on whole cavity side with 1.0mm diameter tool
---Allowance : Available to adjust the fit inside of crowns/copings
--Boundary offse
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
The conditions for selecting this strategy(template)
The part type is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling cavity side only with the way of burial milling. It is available to set no conectors.
Please milling this cavity side one first.
This is for milling it 0.08mm bigger than the original design. You can stragically utilize this one.
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!
-Overall finishing cavi
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
The conditions for selecting this strategy(template)
The part type is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling occlusal side only with the way of burial milling. It is available to set no conectors.
Please milling this occlusal side one after cavity side.
This is for milling it 0.08mm bigger than the original design. You can stragically utilize this one.
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!
-Fiss
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
The conditions for selecting this strategy(template)
The part type is the Inlay/Onlay
The materials is Hybrid Ceramic Disc/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling occlusal side only with the way of burial milling. It is available to set no conectors.
Please milling this occlusal side one after cavity side.
Overwritable processes
-General settings
--Incremental Boundary offset
--Incremental Boundary angle
---Increase these parameters when you get the boundary error during calculation!
-Fiss
User-defined area(UDA) categories that is availble to use
Category 1 : T36-G1.0B
Category 3 : T36-G1.0B, T37-G0.6B
Tools used in this strategy(template)
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
