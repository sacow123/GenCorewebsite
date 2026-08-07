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
Materials: Hybrid Ceramic Disk / Block
The design should be included the interface of the Highness system
What it needs to Prepare for this strategy(template)
Margin lines
 A Abutment base line must be set each interfaces.
The Emergence line is not mandatory, but it is recommended for better texture quality near the interface area.
Implant interfaces
An interface that is set the Abutment base line should exist a Screw channel each.
Other holes except the screw channel on the interface must be set to Holes.
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!
Finishing inside abutment bases [M1.0F_L06]_highness
Finishing inside abutments with 1.0mm diameter Flat tool
Add. Allowance XY: Available to adjust the abutment inside fit.
The more negative the value, the looser the fit becomes; increasing the value in the positive direction makes the fit tighter.
Fissure machining [G0.6B] -0
Occlusal groove machining process with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Materials: Hybrid Ceramic Disk / Block
The design should be included the interface of the Highness system
What it needs to Prepare for this strategy(template)
Margin lines
 A Abutment base line must be set the interface.
The Emergence line is not mandatory, but it is recommended for better texture quality near the interface area.
Implant interfaces
A Screw channel should be exist on the interface that is set the Abutment base line.
Other holes except the screw channel on the interface must be set to Holes.
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!g calculation!
Finishing inside abutment bases [M1.0F_L06]_highness
Finishing inside abutments with 1.0mm diameter Flat tool
Add. Allowance XY: Available to adjust the abutment inside fit.
Fissure machining [G0.6B] -0
Occlusal groove machining process with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Inlay/Onlay crown bridge* or Crown bridge (* Inlay/Onlay crown bridge is the bridge that consists of both inlays and crowns together)
Materials: Hybrid Ceramic Disk/Block
Setting the Inlay/Onlay or Coping lines is mandatory.
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error dur
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Inlay/Onlay crown bridge* or Crown bridge (* Inlay/Onlay crown bridge is the bridge that consists of both inlays and crowns together)
Materials: Hybrid Ceramic Disk/Block
Setting the Inlay/Onlay or Coping lines is mandatory.
0.6mm diameter tool is optional
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle

User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Crown
Materials: Hybrid Ceramic Disk/Block
Setting the Coping lines is mandatory.
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!
Finishing inside copings G1 5x -180
Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)
Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)
Boundary offset / Bounda
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Crown
Materials: Hybrid Ceramic Disk/Block
Setting the Coping lines is mandatory.
0.6mm diameter tool is optional
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!
Finishing inside copings G1 5x -180
Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)
Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Inlay/Onlay
Materials: Hybrid Ceramic Disk/Block
Setting the Inlay/Onlay lines is mandatory.
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!
Overall finishing cavity side (cap) G1 -180
Finishing process on whole cavity side with 1.0mm diameter tool
Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings
Boundary offset / Boundary angle
Fissure machining [G1.0B] -0
Occlusal groove machining process with 1.0mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)
Fissure machining G0.6B -0
Occlusal groove machining process with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)
Overall restmachining cavity side G0.6B -180
Restmachining process on whole cavity side with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Inlay/Onlay
Materials: Hybrid Ceramic Disk/Block
Setting the Inlay/Onlay lines is mandatory.
This is for milling more slow than “Hybrid Ceramic_Inlay/Onlay_D0.6”
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!
Overall finishing cavity side (cap) G1 -180
Finishing process on whole cavity side with 1.0mm diameter tool
Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings
Boundary offset / Boundary angle
Fissure machining [G1.0B] -0
Occlusal groove machining process with 1.0mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)
Fissure machining G0.6B -0
Occlusal groove machining process with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)
Overall restmachining cavity side G0.6B -180
Restmachining process on whole cavity side with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Inlay/Onlay
Materials: Hybrid Ceramic Disk/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling cavity side only with the way of burial milling. It is available to set no conectors.
Please milling this cavity side one first.
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!
Overall finishing cavity side (cap) G1 -180
Finishing process on whole cavity side with 1.0mm diameter tool
Allowance : Available to adjust the fit inside of crowns/copings

Fissure machining [G1.0B] -0
Occlusal groove machining process with 1.0mm diameter tool
Calculate : Selectable operate this process or skip, (Default: Off)
💡 Please do not activate this when this template is selected!

Fissure machining G0.6B -0
Occlusal groove machining process with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: Off)
💡 Please do not activate this when this template is selected!

Overall restmachining cavity side G0.6B -180
Restmachining process on whole cavity side with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Inlay/Onlay
Materials: Hybrid Ceramic Disk/Block
Setting the Inlay/Onlay lines is mandatory.
This is for milling it 0.05mm bigger than the original design. You can stragically utilize this one.
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!
Overall finishing cavity side (cap) G1 -180
Finishing process on whole cavity side with 1.0mm diameter tool
Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings
Boundary offse
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Inlay/Onlay
Materials: Hybrid Ceramic Disk/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling cavity side only with the way of burial milling. It is available to set no conectors.
Please milling this cavity side one first.
This is for milling it 0.05mm bigger than the original design. You can stragically utilize this one.
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!
Overall finishing cavi
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Inlay/Onlay
Materials: Hybrid Ceramic Disk/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling occlusal side only with the way of burial milling. It is available to set no conectors.
Please milling this occlusal side one after cavity side.
This is for milling it 0.05mm bigger than the original design. You can stragically utilize this one.
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!
Fiss
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Inlay/Onlay
Materials: Hybrid Ceramic Disk/Block
Setting the Inlay/Onlay lines is mandatory.
This is for milling it 0.08mm bigger than the original design. You can stragically utilize this one.
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!
Overall finishing cavity side (cap) G1 -180
Finishing process on whole cavity side with 1.0mm diameter tool
Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Fissure machining [G1.0B] -0
Occlusal groove machining process with 1.0mm diameter tool
Calculate : Selectable operate this process or skip, (Default: Off)
💡 Please do not activate this when this template is selected!

Fissure machining G0.6B -0
Occlusal groove machining process with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: Off)
💡 Please do not activate this when this template is selected!

Overall restmachining cavity side G0.6B -180
Restmachining process on whole cavity side with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [G1.0B] -0
Occlusal groove machining process with 1.0mm diameter tool
Calculate : Selectable operate this process or skip, (Default: Off)
💡 Please do not activate this when this template is selected!

Fissure machining G0.6B -0
Occlusal groove machining process with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: Off)
💡 Please do not activate this when this template is selected!

Overall restmachining cavity side G0.6B -180
Restmachining process on whole cavity side with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)
Boundary offse
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Inlay/Onlay
Materials: Hybrid Ceramic Disk/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling cavity side only with the way of burial milling. It is available to set no conectors.
Please milling this cavity side one first.
This is for milling it 0.08mm bigger than the original design. You can stragically utilize this one.
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!
Overall finishing cavi
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Inlay/Onlay
Materials: Hybrid Ceramic Disk/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling occlusal side only with the way of burial milling. It is available to set no conectors.
Please milling this occlusal side one after cavity side.
This is for milling it 0.08mm bigger than the original design. You can stragically utilize this one.
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!
Fiss
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
Part (Prosthesis): Inlay/Onlay
Materials: Hybrid Ceramic Disk/Block
Setting the Inlay/Onlay lines is mandatory.
This template is for milling occlusal side only with the way of burial milling. It is available to set no conectors.
Please milling this occlusal side one after cavity side.
Overwritable processes
General settings
Incremental Boundary offset
Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!
Fiss
User-defined area(UDA) categories that is availble to use
Category 1 : T36G1.0B
Category 3 : T36G1.0B, T37G0.6B
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
"PMMA_Abutment crown": `
The conditions for selecting

Part (Prosthesis): Abutment crown

Materials: PMMA Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

0.6mm diameter tool is optional

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining

T43
M1.0F
Optional, Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside abutment bases [M1.0B_L15]_3+2

Finishing process inside abutments with 1.0mm diameter tool

Add. Allowance XY: Available to adjust the fit inside abutments

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.0F_L06]

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PMMA_Abutment Crown bridge": `
The conditions for selecting

Part (Prosthesis): Abutment crown bridge

Materials: PMMA Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

0.6mm diameter tool is optional

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining

T43
M1.0F
Optional, Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [G1.0B] -0
Occlusal groove machining process with 1.0mm diameter tool
Calculate : Selectable operate this process or skip, (Default: Off)
💡 Please do not activate this when this template is selected!

Fissure machining G0.6B -0
Occlusal groove machining process with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: Off)
💡 Please do not activate this when this template is selected!

Overall restmachining cavity side G0.6B -180
Restmachining process on whole cavity side with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [G1.0B] -0
Occlusal groove machining process with 1.0mm diameter tool
Calculate : Selectable operate this process or skip, (Default: Off)
💡 Please do not activate this when this template is selected!

Fissure machining G0.6B -0
Occlusal groove machining process with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: Off)
💡 Please do not activate this when this template is selected!

Overall restmachining cavity side G0.6B -180
Restmachining process on whole cavity side with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [G1.0B] -0
Occlusal groove machining process with 1.0mm diameter tool
Calculate : Selectable operate this process or skip, (Default: Off)
💡 Please do not activate this when this template is selected!

Fissure machining G0.6B -0
Occlusal groove machining process with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: Off)
💡 Please do not activate this when this template is selected!

Overall restmachining cavity side G0.6B -180
Restmachining process on whole cavity side with 0.6mm diameter tool
Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside abutment bases [M1.0B_L15] 3+2

Finishing process inside abutments by the path of insertion that was set with 1.0mm diameter tool

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.0F_L06]_highness

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [Z0.6X05]

Finishing process inside crowns/copings with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PMMA_Abutment Crown bridge_NCS (highnees)": `
The conditions for selecting

Part (Prosthesis): Abutment crown bridge that is applied the Highness system Interface

Materials: PMMA Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

0.6mm diameter tool is optional

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining

T43
M1.0F
Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

General settings

Boundary offset
Increase these parameters when you get the boundary error during calculation!

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Boundary offset / Boundary angle

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside abutment bases [M1.0F_L06]_highness

Finishing process inside abutments with 1.0mm diameter FLAT tool

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [Z0.6X05]

Finishing process inside crowns/copings with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PMMA_Abutment crown_NCS (highnees)": `
The conditions for selecting

Part (Prosthesis): Abutment crown that is applied the Highness system Interface

Materials: PMMA Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

0.6mm diameter tool is optional

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining

T43
M1.0F
Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

General settings

Boundary offset
Increase these parameters when you get the boundary error during calculation!

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside abutment bases [M1.0F_L06]_highness

Finishing process inside abutments with 1.0mm diameter FLAT tool

Add. Allowance XY: Available to adjust the fit inside abutments

Boundary offset / Boundary angle

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PMMA_Coping/Crown bridge_SCRP": `
The conditions for selecting

Part (Prosthesis): Crown bridge/Coping bridge

Materials: PMMA Disk/Block

Setting the Coping lines is mandatory

0.6mm diameter tool is optional

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [M1.0F_L06]

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments (Range: -0.06 ~ 0.06)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [Z0.6X05]

Finishing process inside crowns/copings with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PMMA_Coping/Crown_(Fast mill)": `
The conditions for selecting

Part (Prosthesis): Crown/Coping

Materials: PMMA Disk/Block

Setting the Coping lines is mandatory
This is fast milling version than “PMMA_Coping_Crown_SCRP”

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 2 : T39M1.0B

Overwritable processes

Finishing inside copings [M1.0B_L15] 3+2x

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [M1.0F_L06]

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments
`,
  "PMMA_Coping/Crown_Bridge_(Fast mill)": `
The conditions for selecting

Part (Prosthesis): Crown bridge/Coping bridge

Materials: PMMA Disk/Block

Setting the Coping lines is mandatory
This is fast milling version than “PMMA_Coping/Crown bridge_SCRP”

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 2 : T39M1.0B

Overwritable processes

Finishing inside copings [M1.0B_L15] 3+2x

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [M1.0F_L06]

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments
`,
  "PMMA_Coping_Crown_SCRP": `
The conditions for selecting

Part (Prosthesis): Crown/Coping

Materials: PMMA Disk/Block

Setting the Coping lines is mandatory

0.6mm diameter tool is optional

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [M1.0F_L06]

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments (Range: -0.06 ~ 0.06)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [Z0.6X05]

Finishing process inside crowns/copings with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PMMA_Crown bridge_SCRP_D0.6": `
The conditions for selecting

Part (Prosthesis): Crown bridge/Coping bridge

Materials: PMMA Disk/Block

Setting the Coping lines is mandatory

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside copings [M1.0F_L06]

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments (Range: -0.06 ~ 0.06)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside copings [Z0.6X05]

Finishing process inside crowns/copings with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PMMA_Crown_SCRP_D0.6": `
The conditions for selecting

Part (Prosthesis): Crown/Coping

Materials: PMMA Disk/Block

Setting the Coping lines is mandatory

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside copings [M1.0F_L06]

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments (Range: -0.06 ~ 0.06)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside copings [Z0.6X05]

Finishing process inside crowns/copings with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PMMA_denture Teeth": `
The conditions for selecting

Part (Prosthesis): denture Teeth

Materials: PMMA Disk/Block

Setting any lines is not mandatory

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Overwritable processes

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PMMA_Flexble denture": `
The conditions for selecting

Part (Prosthesis): Flexble denture

Materials: PMMA Disk/Block

Setting any lines is not mandatory →

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Overwritable processes

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PMMA_Full denture": `
The conditions for selecting

Part (Prosthesis): Full denture

Materials: PMMA Disk/Block

Setting Coping lines is mandatory →
This is for milling the full denture bases

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Optional (Screw channel machining, which has a screw fit area)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside long cavities_[M1.0Bx10]_8X

Finishing process inside long cavity by separating into 8 areas with different insertion directions each with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside long cavities_[M1.0Bx10] 3+2

Finishing process inside long cavity by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PMMA_Over Structure": `
The conditions for selecting

Part (Prosthesis): Over Structure

Materials: PMMA Disk/Block

Setting Coping lines is mandatory
This is for milling the supra structure of the implant bar such as iBar

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Optional (Screw channel machining, which has a screw fit area)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside long cavities_[M1.0Bx10]_8X

Finishing process inside long cavity by separating into 8 areas with different insertion directions each with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside long cavities_[M1.0Bx10] 3+2

Finishing process inside long cavity by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PMMA_Partial Frame": `
The conditions for selecting

Part (Prosthesis): Partial Frame

Materials: PMMA Disk/Block

Setting any lines is not mandatory →

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Overwritable processes

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PEEK_Abutment Crown": `
The conditions for selecting

Part (Prosthesis): Abutment crown

Materials: PEEK Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

0.6mm diameter tool is optional

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining

T43
M1.0F
Optional, Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside abutment bases [M1.0B_L15]_3+2

Finishing process inside abutments with 1.0mm diameter tool

Add. Allowance XY: Available to adjust the fit inside abutments

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.0F_L06]

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PEEK_Abutment Crown bridge": `
The conditions for selecting

Part (Prosthesis): Abutment crown bridge

Materials: PEEK Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

0.6mm diameter tool is optional

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining

T43
M1.0F
Optional, Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Finishing inside abutment bases [M1.0B_L15]_3+2

Finishing process inside abutments with 1.0mm diameter tool

Add. Allowance XY: Available to adjust the fit inside abutments

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.0F_L06]_highness

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [Z0.6X05]

Finishing process inside crowns/copings with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PEEK_Crown/SCRP Bridge_5x": `
The conditions for selecting

Part (Prosthesis): Crown bridge/Coping bridge

Materials: PEEK Disk/Block

Setting the Coping lines is mandatory

0.6mm diameter tool is optional

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [M1.0F_L06]

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments (Range: -0.06 ~ 0.06)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [Z0.6X05]

Finishing process inside crowns/copings with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PEEK_Crown/SCRP_5x": `
The conditions for selecting

Part (Prosthesis): Crown/Coping

Materials: PEEK Disk/Block

Setting the Coping lines is mandatory

0.6mm diameter tool is optional

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside copings [M1.0F_L06]

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments (Range: -0.06 ~ 0.06)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [Z0.6X05]

Finishing process inside crowns/copings with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside crowns/copings (Range: -0.06 ~ 0.06)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PEEK_denture Teeth": `
The conditions for selecting

Part (Prosthesis): denture Teeth

Materials: PEEK Disk/Block

Setting any lines is not mandatory

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Overwritable processes

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PEEK_Flexible denture": `
The conditions for selecting

Part (Prosthesis): Flexble denture

Materials: PEEK Disk/Block

Setting any lines is not mandatory →

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Overwritable processes

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PEEK_Full denture": `
The conditions for selecting

Part (Prosthesis): Full denture

Materials: PEEK Disk/Block

Setting Coping lines is mandatory →
This is for milling the full denture bases

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Optional (Screw channel machining, which has a screw fit area)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside long cavities_[M1.0Bx10]_8X

Finishing process inside long cavity by separating into 8 areas with different insertion directions each with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside long cavities_[M1.0Bx10] 3+2

Finishing process inside long cavity by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PEEK_Over Structure": `
The conditions for selecting

Part (Prosthesis): Over Structure

Materials: PEEK Disk/Block

Setting Coping lines is mandatory
This is for milling the supra structure of the implant bar such as iBar

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T42
M1.5FL
Optional (Screw channel machining, which has a screw fit area)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside long cavities_[M1.0Bx10]_8X

Finishing process inside long cavity by separating into 8 areas with different insertion directions each with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside long cavities_[M1.0Bx10] 3+2

Finishing process inside long cavity by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "PEEK_Partial Frame": `
The conditions for selecting

Part (Prosthesis): Partial Frame

Materials: PEEK Disk/Block

Setting any lines is not mandatory →

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Overwritable processes

Fissure machining [M1.0B_L15]

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "WAX - Coping": `
The conditions for selecting

Part (Prosthesis): Coping

Materials: Wax Disk

Setting the Coping lines is mandatory

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Overwritable processes

General settings

Incremental Boundary offset

Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!

Finishing inside copings D1 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.1 ~ 0.1)

Boundary offset / Boundary angle

Finishing inside copings D1 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.1 ~ 0.1)

Fissure machining D1

Occlusal groove machining process with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside copings [M1.5FL_L15]

Finishing process inside abutments with 1.5mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments (Range: -0.1 ~ 0.1)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "WAX - Crown_D0.6": `
The conditions for selecting

Part (Prosthesis): Crown

Materials: Wax Disk

Setting the Coping lines is mandatory

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Overwritable processes

General settings

Incremental Boundary offset

Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!

Finishing inside copings D1 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.1 ~ 0.1)

Boundary offset / Boundary angle

Finishing inside copings D1 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.1 ~ 0.1)

Finishing inside copings FE1.5

Finishing process inside abutments with 1.5mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments (Range: -0.1 ~ 0.1)

Fissure machining D0.6

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)
`,
  "Wax_Coping bridge": `
The conditions for selecting

Part (Prosthesis): Coping bridge

Materials: Wax Disk

Setting the Coping lines is mandatory

0.6mm diameter tool is optional

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Overwritable processes

General settings

Incremental Boundary offset

Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.1 ~ 0.1)

Boundary offset / Boundary angle

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.1 ~ 0.1)

Finishing inside copings [M1.5FL_L15]

Finishing process inside abutments with 1.5mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments (Range: -0.1 ~ 0.1)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Wax_Crown bridge_D0.6": `
The conditions for selecting

Part (Prosthesis): Crown bridge / Inaly/Crown bridge

Materials: Wax Disk

Setting the Coping lines is mandatory

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Overwritable processes

General settings

Incremental Boundary offset

Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Boundary offset / Boundary angle

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings (Range: -0.06 ~ 0.06)

Finishing inside copings [M1.5FL_L15]

Finishing process inside abutments with 1.5mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments (Range: -0.06 ~ 0.06)

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)
`,
  "Wax_Inlay/Onlay -D0.6": `
The conditions for selecting

Part (Prosthesis): Inlay/Onlay

Materials: Wax Disk

Setting the Coping lines is mandatory

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Overwritable processes

General settings

Incremental Boundary offset

Incremental Boundary angle
Increase these parameters when you get the boundary error during calculation!

Finishing inside inlays/onlays D1 -180

Finishing process inside inlays/onlays with 1.0mm diameter tool

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of inlays/onlays (Range: -0.1 ~ 0.1)

Boundary offset / Boundary angle

Fissure machining D0.6

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Overall restmachining cavity side D0.6 -180

Finishing process whole cavity side including inside inlays/onlays with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)
`,
  "Zirconia_Abutment crown bridge": `
The conditions for selecting

Part (Prosthesis): Abutment crown bridge

Materials: Zirconia Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining

T43
M1.0F
Optional, Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [Z1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Finishing inside abutment bases [Z1.0B_L15]

Finishing process inside abutments with 1.0mm diameter tool

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.0F_L06]_highness

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Abutment Crown Bridge_NCS (B0.6)": `
The conditions for selecting

Part (Prosthesis): Abutment crown bridge that needs to 0.6mm diameter ball end mill tool machining for the interface.

Materials: Zirconia Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining

T43
M1.0F
Optional, Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [Z1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Finishing inside abutment bases [Z1.0B_L15]

Finishing process inside abutments with 1.0mm diameter tool

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.0F_L06]_highness

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Add. Allowance XY: Available to adjust the fit inside abutments

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Abutment Crown Bridge_NCS (highnees)": `
The conditions for selecting

Part (Prosthesis): Abutment crown bridge that is applied the Highness system Interface

Materials: Zirconia Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining

T43
M1.0F
Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [Z1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Finishing inside abutment bases [Z1.0B_L15]

Finishing process inside abutments with 1.0mm diameter tool

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.0F_L06]_highness

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: On)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Abutment Crown Bridge_NCS (Megalink)": `
The conditions for selecting

Part (Prosthesis): Abutment crown bridge that is applied the Megalink system Interface

Materials: Zirconia Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining, Interface machining

T43
M1.0F
Optional, Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [Z1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Finishing inside abutment bases [Z1.0B_L15]

Finishing process inside abutments with 1.0mm diameter tool

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.0F_L06]_highness

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: On)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.5FL_L15]_Megalink

Finishing process inside abutments with 1.5mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: On)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]_Megalink

Finishing process inside abutments with 0.6mm diameter tool

Allowance: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Add. Allowance XY: Available to adjust the fit inside abutments

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Abutment crown": `
The conditions for selecting

Part (Prosthesis): Abutment crown

Materials: Zirconia Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining

T43
M1.0F
Optional, Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside abutment bases [Z1.0B_L15]

Finishing process inside abutments with 1.0mm diameter tool

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.0F_L06]_highness

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Abutment Crown_NCS (B0.6)": `
The conditions for selecting

Part (Prosthesis): Abutment crown that needs to 0.6mm diameter ball end mill tool machining for the interface.

Materials: Zirconia Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining

T43
M1.0F
Optional, Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside abutment bases [Z1.0B_L15]

Finishing process inside abutments with 1.0mm diameter tool

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.0F_L06]_highness

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Add. Allowance XY: Available to adjust the fit inside abutments

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Abutment Crown_NCS (highnees)": `
The conditions for selecting

Part (Prosthesis): Abutment crown that is applied the Highness system Interface

Materials: Zirconia Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining

T43
M1.0F
Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside abutment bases [Z1.0B_L15]

Finishing process inside abutments with 1.0mm diameter tool

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.0F_L06]_highness

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: On)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Abutment Crown_NCS (Megalink)": `
The conditions for selecting

Part (Prosthesis): Abutment crown that is applied the Megalink system Interface

Materials: Zirconia Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T42
M1.5FL
Screw Channel (SC) machining, Interface machining

T43
M1.0F
Optional, Interface machining

T44
M1.5R
Optional, Interface machining

T45
M1.6T
Optional, When it is applied Angled screw hole.

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside abutment bases [Z1.0B_L15]

Finishing process inside abutments with 1.0mm diameter tool

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.5R_L07]

Finishing process inside abutments with 1.5mm diameter CORNERS ROUND tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.0F_L06]_highness

Finishing process inside abutments with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: On)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [M1.5FL_L15]_Megalink

Finishing process inside abutments with 1.5mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: On)

Add. Allowance XY: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]_Megalink

Finishing process inside abutments with 0.6mm diameter tool

Allowance: Available to adjust the fit inside abutments

Finishing inside abutment bases [Z0.6BX05]

Finishing process inside abutments with 0.6mm diameter tool

Add. Allowance XY: Available to adjust the fit inside abutments

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Coping": `
The conditions for selecting

Part (Prosthesis): Coping

Materials: Zirconia Disk/Block

Setting the Coping lines is mandatory

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Finishing inside copings [M1.0F_L06]

Finishing process inside copings/crowns with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside copings/crowns

Finishing inside copings [M0.6BX05]

Finishing process inside copings/crowns with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside copings/crowns

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Coping bridge": `
The conditions for selecting

Part (Prosthesis): Coping bridge

Materials: Zirconia Disk/Block

Setting the Coping lines is mandatory

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B
Optional (UDA, Fissure machining)

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

General settings

Incremental Boundary offset
Increase these parameters when you get the boundary error during calculation!

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Boundary offset / Boundary angle

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Finishing inside long cavities [Z1.0B_L15] 8X

Finishing process inside long cavities by separating to around 8 areas that which have a path of insertion each

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside long cavities [Z1.0B_L15] 3+2X

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [M1.0F_L06]

Finishing process inside copings/crowns with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside copings/crowns

Finishing inside copings [M0.6BX05]

Finishing process inside copings/crowns with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside copings/crowns

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Crown bridge_D0.6": `
The conditions for selecting

Part (Prosthesis): Crown bridge

Materials: Zirconia Disk/Block

Setting the Coping lines is mandatory

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

General settings

Incremental Boundary offset
Increase these parameters when you get the boundary error during calculation!

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Boundary offset / Boundary angle

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Finishing inside long cavities [Z1.0B_L15] 8X

Finishing process inside long cavities by separating to around 8 areas that which have a path of insertion each

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside long cavities [Z1.0B_L15] 3+2X

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [M1.0F_L06]

Finishing process inside copings/crowns with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside copings/crowns

Finishing inside copings [M0.6BX05]

Finishing process inside copings/crowns with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside copings/crowns

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Crown_D0.6": `
The conditions for selecting

Part (Prosthesis): Crown

Materials: Zirconia Disk/Block

Setting the Coping lines is mandatory

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Finishing inside copings [M1.0F_L06]

Finishing process inside copings/crowns with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside copings/crowns

Finishing inside copings [M0.6BX05]

Finishing process inside copings/crowns with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside copings/crowns

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Inlay/Onlay bridge_D0.6": `
The conditions for selecting

Part (Prosthesis): Inlay/Onlay bridge or Inlay/Crown bridge (* Inlay/Onlay crown bridge is the bridge that consists of both inlays and crowns together)

Materials: Zirconia Disk/Block

Setting the Inlay/Onlay or Coping lines is mandatory

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Overwritable processes

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Inlay/Onlay_D0.6": `
The conditions for selecting

Part (Prosthesis): Inlay/Onlay

Materials: Zirconia Disk/Block

Setting the Inlay/Onlay lines is mandatory

Tools list used

Tool pocket #
Tools
Comment

T38
M2.0B

T39
M1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional (Inside finishing)

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

Finishing inside copings [M1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`,
  "Zirconia_Over Structure": `
The conditions for selecting

Part (Prosthesis): Over Structure

Materials: Zirconia Disk/Block

Setting the Abutment base lines is mandatory.

The Emergence lines are optional, but it is recommended for better texture quality around interfaces.

Tools list used

Tool pocket #
Tools
Comment

T31
Z2.0B

T32
Z1.0B

T33
Z0.6B

T34
Z0.3B
Optional (UDA, Fissure machining)

T43
M1.0F
Optional, Inside machining

User-defined area(UDA) availble

Category 1 : T39M1.0B

Category 3 : T39M1.0B, T33-Z0.6B

Category 5 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Category 2 : T39M1.0B

Category 4 : T39M1.0B, T33-Z0.6B

Category 6 : T39M1.0B, T33-Z0.6B, T34-Z0.3B

Overwritable processes

General settings

Incremental Boundary offset
Increase these parameters when you get the boundary error during calculation!

Finishing inside copings [Z1.0B_L15] 5x

Finishing process inside crowns/copings by simultaneous 5-axis movement with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Boundary offset / Boundary angle

Finishing inside copings [M1.0B_L15] 3+2

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Allowance : Available to adjust the fit inside of crowns/copingso adjust the fit inside of crowns/copings

Finishing inside long cavities [Z1.0B_L15] 8X

Finishing process inside long cavities by separating to around 8 areas that which have a path of insertion each

Calculate : Selectable operate this process or skip, (Default: On)

Finishing inside long cavities [Z1.0B_L15] 3+2X

Finishing process inside crowns/copings by the path of insertion that was set with 1.0mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Finishing inside copings [M1.0F_L06]

Finishing process inside copings/crowns with 1.0mm diameter FLAT tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside copings/crowns

Finishing inside copings [Z0.6BX05]

Finishing process inside copings/crowns with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)

Add. Allowance XY: Available to adjust the fit inside copings/crowns

Fissure machining [Z0.6BX05]

Occlusal groove machining process with 0.6mm diameter tool

Calculate : Selectable operate this process or skip, (Default: On)

Fissure machining [Z0.3BX03] (PMMA)

Occlusal groove machining process with 0.3mm diameter tool

Calculate : Selectable operate this process or skip, (Default: Off)
`
};
