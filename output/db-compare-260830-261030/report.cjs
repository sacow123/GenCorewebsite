const fs=require('fs'),p=__dirname,d=JSON.parse(fs.readFileSync(p+'/effective-diff.json')),e=JSON.parse(fs.readFileSync(p+'/effective.json')),defs=JSON.parse(fs.readFileSync(p+'/defaults-diff.json'));
const text=`260830 원본 → DB_M.Ai_V10.1.X_2601030_R1 템플릿 비교 보고서
작성일: 2026-11-12

비교 범위와 방법
원본: C:/hyperDENT_Settings_MAI_25.08.19/DB/260830_원본
대상: C:/hyperDENT_Settings_MAI_25.08.19/DB/DB_M.Ai_V10.1.X_2601030_R1
이미지 교체, 소재 목록 자체, 공구 형상 DB 자체의 변경은 보고 범위에서 제외했습니다.
템플릿이 사용하는 공구, 소재/파트 필터, 공정, 조건값, 기본 계산 상태와 기본 템플릿 연결은 포함했습니다.
hdNPmillstrategy 및 variantprofile의 내부 데이터를 해석하고, 변형 템플릿의 overriddenProp 값을 기본 공정에 반영해 비교했습니다.
이 보고서는 저장된 설정값의 비교입니다.
hyperDENT 실행, 툴패스 재계산, 충돌 검사, 실제 가공 품질이나 시간 검증은 수행하지 않았습니다.
calculate=1은 해당 공정의 계산 플래그이며, 형상 조건이나 Category가 맞지 않아도 항상 가공된다는 뜻은 아닙니다.
0|18000 같은 값은 DB 원문이며 아래 요약에서는 뒤쪽 수치를 사용했습니다.
날짜는 폴더명으로 추정하지 않았습니다.
대상에는 이름에 261103·261108·261110이 들어간 템플릿도 실제 포함되어 있습니다.

수량
기본 전략: 110 → 116개. 추가 7, 삭제 1, 기존 ID 변경 58, 동일 51.
변형 템플릿: 174 → 180개. 추가 10, 삭제 4, 기존 ID 변경 101, 동일 69.
기본 전략의 변경이 변형 템플릿에 상속되므로 두 변경 개수는 합산하지 않습니다.
변경 개수에는 이름·적용 파트·소재 연결·옵션 제한·공정 ID 및 순서 변화도 포함합니다.
별도 default 레코드를 템플릿 개수에 섞지 않았습니다.

1. 새로 추가된 변형 템플릿 10개
Dry_Inlay/Onlay Bridge
Dry_Inlay/Onlay
Dry_Crown_SCRP
Dry_Coping/Crown_SCRP Bridge
Dry_Coping/Veneer
PMMA_Abutment crown
CoCr_Interface_Finishing (expansion)
CoCr_Screw Hole Finishing (expansion)
Pre-Mil_Abutment_M_90" -Medentika
Ti_Retainer

2. 삭제된 변형 템플릿 4개
PMMA_Abutment crown bridge_5X
PEEK_Abutment Crown Bridge_5x
PEEK_Crown Bridge_SCRP_5x
PMMA_Abutment bridge
PMMA_Abutment bridge의 기본 전략 MAI_PMMA_Abutment bridge -260630도 삭제됐습니다.
남은 PMMA_Abutment crown bridge는 적용 파트가 abutment_bridge까지 확장되었습니다.
이는 이름만 바뀐 경우와 구별하여 기록했습니다.

3. Ti / CoCr / 프리밀: 나사 가공 확장
해당 Ti·CoCr 브릿지 및 Pre-Mil+Rev 전략에 Cat23 M2.3, Cat26 M2.6, Cat30 M3.0 공정이 추가됐습니다.
M2.3: T25_M2.0TH_L06(P0.4) 사용.
M2.6: T26_M2.6TH_L06(P0.45) 사용.
M3.0: T27_M3.0TH_L06(P0.5) 사용.
새 나사 공정의 spindlespeed=18000, feedratez=30입니다.
기존 M2.0/M1.8 공정에서는 16000 → 18000, M1.6/M1.4에서는 16000 → 20000 변경이 반복 확인됩니다.
M1.4의 ncutshor는 3 → 4입니다.
Cat23~30 대응 홀 가공 공정도 함께 추가됐습니다.
모든 소재·모든 템플릿에 일괄 추가된 것은 아니며, 적용 목록은 상세 대조표에 있습니다.

4. Rhein Category 40 공정
Ti, CoCr, PMMA, PEEK, Hybrid Ceramic, Zirconia의 해당 어버트먼트/브릿지 전략에 추가됐습니다.
공정명: Finishing walls of implant interfaces_cat40_[M2.0T_Rhein]
사용 공구: T24_M2.0T_Rhein.
Ti 예시: spindle 28000, feed 250, stepdown 0.01.
Zirconia 예시: spindle 22000, feed 400, stepdown 0.02.
공구 번호 24라도 기존 T-cut과 별도 ID를 가진 Rhein 공구를 참조합니다.
CoCr 일반 Abutment Crown/Bridge에서는 기존 cat30 T-cut 공정 3개가 제거되고 cat40 Rhein 공정 4개가 추가됐습니다.
동일한 T-cut 공정을 단순히 이름만 바꾼 것으로 처리하면 안 됩니다.

5. CoCr 홀 가공 및 확장 전용 템플릿
Coping/Crown 계열의 홀 공정 addrad: 0 → 0.08.
Abutment Crown/Bridge 및 NCS 계열의 해당 홀 공정 addrad: 0.05 → 0.08.
이는 DB의 반경 추가 필드 값이며, 0.08을 직경 증가량이라고 해석하지 않았습니다.
CoCr_Interface_Finishing (expansion), CoCr_Screw Hole Finishing (expansion)이 새로 추가됐습니다.
두 템플릿은 같은 새 기본 전략을 쓰되 overriddenProp의 calculate 값으로 실행 공정을 다르게 선택합니다.
CoCr 2차 스크류 헤드 공정의 대표 stepdown 변경은 Cat1 0.005 → 0.01, Cat2 0.02 → 0.01입니다.
Ti의 대응 공정에서는 Cat1 0.005 → 0.012, Cat2 0.02 → 0.012입니다.
깊이 절입값의 증감이 서로 다르므로 일괄적인 '모든 공정 속도 증가'라고 단정하지 않았습니다.

6. 지르코니아
기존 크라운·브릿지·Fast·edge 기본 전략 6개에 Z1.0 내면 레스트 공정이 추가됐습니다.
공정명: Restmachining inside copings_[Z1.0BX15]
tool=T02_Z1.0BX15, spindle=23000, feed=1500, feedratez=1500, allowance=-0.02, stepdown=0.06.
기존에 있던 다른 Z1.0 레스트 공정과 별도 ID를 가진 추가 공정입니다.
edge 크라운 계열의 2mm 외면 정삭 공정은 원본에도 있습니다.
대상에서는 해당 공정의 feedratered가 1400 → 1000으로 변경됐습니다.
edge 계열의 '-아르떼' 변형 템플릿은 이름에서 해당 접미사가 없어지고, 비어 있던 파트 필터가 크라운/브릿지/코핑/비니어 타입으로 지정됐습니다.
edge 크라운의 해당 UDA 공정 6개는 closecaps=1 → 0입니다.
Zirconia_Inlay/Onlay의 1mm 짝수 Category 수직 정삭 등에서도 세부 조건 변경이 있습니다.
Zirconia_Over Structure에는 2mm OCC 및 1mm CAV 앵글홀 공정이 추가됐습니다.

7. Over Structure
Ti: OCC 앵글홀 4개, CAV 앵글홀 2개 공정 추가.
PMMA: 앵글홀 공정 2개 추가.
Zirconia: 앵글홀 공정 2개 추가.
Hybrid Ceramic: CAV 측 angulated G1.5 -180 공정 추가, 기존 홀 공정 holecat 1 → 1/2/3.
공정 추가 사실과 실제 디자인의 스크류 헤드 보존 가능성은 별개입니다.

8. Pre-Mil / Pre-Mil+Reverse / MUA
다수 90도 역가공 전략에서 3+2 공정 calculate 0 → 1, 대응 5X 공정 1 → 0.
여러 전략의 minspace: 3.2 → 2.3. 일반 프리밀은 2.6 → 2.3인 경우가 있습니다.
fixtureallowance: 0 → 0.5.
Pre-Mil+Rev Abutment crown의 2mm 레스트 공정 feed/feedratez: 800 → 1200.
일반 프리밀 0.04 전략의 커넥터 절단: rectstock 0 → 1, addheight 0.5 → 0.3, stepfactor 0.1 → 0.25.
MUA용 Flat 1.5 공정은 Cat7 UDA 공정이 추가되고 기존 Angle 공정의 계산 상태가 바뀐 경로가 있습니다.
일반 Ti MUA와 Pre-Mil+Rev MUA는 별도 전략이므로 동일한 상태라고 묶지 않았습니다.
새 Medentika 90도 변형 템플릿이 추가됐습니다.
기존 Medentika용 기본 전략에서는 Top 황삭 feed 1800 → 1600, feedratez 1800 → 1200, stepdown 0.15 → 0.2.
Top/Bottom 황삭 precision 0.01 → 0.02, stocktol 0.02 → 0.1.
Retention groove allowance 0 → -0.03, stepover 1 → 0.7.

9. PMMA / PEEK / Hybrid Ceramic
PMMA_Abutment crown 신규 추가.
PMMA_Abutment crown bridge의 내면에 M1.0F, M0.6B 레스트/정삭 공정 추가.
새 M0.6B 레스트/정삭 공정은 기본 calculate=0인 옵션입니다.
원래부터 있던 Category용 M0.6B 공정과 구분해야 합니다.
PMMA 및 Hybrid의 비니어 적용이 Coping/Veneer 템플릿 쪽으로 정리됐습니다.
PMMA_Crown_SCRP 계열과 Hybrid Ceramic_Crown_SCRP_D0.6 계열의 crown_single:Veneer 필터가 제거됐습니다.
PMMA_Coping / Veneer에는 해당 비니어 필터가 추가됐습니다.
PEEK Crown Bridge/Abutment Crown Bridge의 1mm 5X 내면 공정은 calculate=1 → 0, 3+2 공정은 유지됩니다.
PEEK Crown Bridge CAV 앵글홀 큰 홀 공구: M1.5B_L10 → M1.5RL_L15.
PEEK 앵글홀 분기 condval: 1.7 → 1.6.
PEEK 2차 홀 Cat2 stepdown: Bridge 0.03 → 0.012, Single 0.03 → 0.015.
Hybrid Abutment Crown Bridge의 2차 홀 Cat1/Cat2도 세부 stepdown이 변경됐습니다.

10. Dry / Dry-Mill Fast
신규 Dry 일반 템플릿 5개는 지르코니아 계열 Z 공구 중심의 가공 경로입니다.
기존 Dry-Mill Fast는 G1.0/G0.6/G0.3 공구를 사용하는 방향으로 다수 공정이 교체됐습니다.
예시: 1mm 공정의 T02_Z1.0BX15 → T07_G1.0B_L09, spindle 25000 또는 20000 → 30000.
0.6mm 공정은 G0.6B_L09, 0.3mm 공정은 G0.3B_L03 참조로 변경됩니다.
Fast Crown/Inlay의 minspace 2.2 → 1.9, prepthickness 0.15 또는 0.12 → 0.1.
CAV G1.5 황삭 feed 1500 → 1800, feedratez 1300 → 1500, allowance 0.1 → 0.08.
Fast Inlay의 OCC 황삭은 feedratez 1300 → 1000, stepover 0.1 → 0.07, hordepth/vertdepth 0.08 → 0.05.
따라서 전체 공정을 단순히 '더 빠른 조건'이라고 요약할 수 없습니다.
Fast의 UDA closecaps, 정삭 방식, 여유량, 마진 폭, 공정 순서 및 추가/삭제도 함께 변경됐습니다.
Fast 변형의 적용 소재 필터도 Amber_Dry 그룹 → Amber_Dry Block으로 좁아졌습니다.

11. 그 외 템플릿 설정과 기본 연결
Glass Ceramic Crown/Angled/Veneer와 Fast-II 일부 전략: fixtureallowance 0 → 0.5.
Ti_bridge_T_cut Tool test (not mill): 상속되는 변경 외에도 OCC 2차 황삭, Plane Finishing calculate 1 → 0.
Ti_Retainer는 새 기본/변형 전략으로, Clip UDA 공정과 커넥터 절단 공정을 포함합니다.
PMMA 기본 선택 연결 중 Crown/Bridge → D0.6, Abutment crown bridge_5X → 일반 bridge, NCS single → 새 PMMA_Abutment crown으로 바뀐 연결이 있습니다.
기본 연결은 두 파일의 default_table을 합쳐 비교했습니다.
동일 소재/파트/기계 키가 대상에서 중복되는 경우가 있어 마지막 레코드가 UI에서 반드시 이긴다고 단정하지 않았습니다.
세부 연결 변경은 defaults-diff.json에 보존했습니다.

검증
원본 174개, 대상 180개 변형 템플릿을 기존 정규식 해석 경로와 새 트리 해석 경로로 각각 재구성했습니다.
전역값 및 공정별 최종 파라미터가 일치했습니다.
기본 전략 참조 미해결 0건, Prop 덮어쓰기 대상 미해결 0건입니다.
분석 전후 원본과 대상 파일의 SHA-256을 재검사해 변경되지 않았음을 확인했습니다.
제공된 업데이트 메모를 그대로 보고서로 옮기지 않고 실제 데이터 변경을 기준으로 했습니다.

읽는 방법
template-details.txt: 변형 템플릿별 및 기본 전략별 모든 변경 필드의 이전값/이후값.
effective-diff.json: 같은 대조 결과의 구조화 데이터.
effective.json: 양쪽 템플릿의 덮어쓰기를 반영한 전체 공정값.
verification.json: 독립 재구성 대조 및 원본 무변경 검사 결과.
`;
fs.writeFileSync(p+'/template-report.txt','\uFEFF'+text);
const lines=['260830 원본 → 대상: 템플릿별 필드 대조','<없음>은 필드/공정이 존재하지 않음을 뜻합니다. 빈 문자열과 다릅니다.','calculate=1도 형상·Category 조건을 충족해야 실제 계산에 적용됩니다.','기본 전략과 변형 템플릿은 상속 관계이므로 건수를 합산하지 않습니다.',''];
const fmt=v=>v===undefined?'<없음>':v===''?'<빈 문자열>':v;
const fmtchanges=(cs,prefix='')=>cs.forEach(c=>lines.push(prefix+c.field+': '+fmt(c.old)+' → '+fmt(c.new)));
for(const kind of ['variant','base'])for(const r of d.filter(r=>r.kind===kind)){
 lines.push('='.repeat(85),`${r.kind} / ${r.status} / ${r.name}`,`ID: ${r.id}`,`원본 이름: ${r.oldName||'<없음>'}`,`기본 전략: ${r.baseName}`,`대상 또는 삭제 전 소재 필터: ${r.materialName}`);
 fmtchanges(r.meta,'메타 ');fmtchanges(r.globals,'전역 ');fmtchanges(r.restrictions,'입력 제한 ');
 for(const j of r.jobs){lines.push(`  공정 ${j.status}: ${j.name} (${j.type})`,`    ID: ${j.id}`,`    공구: ${j.oldTool||'<없음/공구명 미지정>'} → ${j.newTool||'<없음/공구명 미지정>'}`);fmtchanges(j.changes,'    ');}
 if(r.orderChanged)lines.push('  공정 ID 배열 변경(공정 추가/삭제에 따른 변화 포함).');lines.push('');
}
fs.writeFileSync(p+'/template-details.txt','\uFEFF'+lines.join('\r\n'));
const idx=e[1].records.filter(r=>r.kind==='variant').map(r=>({id:r.id,name:r.name,base:r.baseName,material:r.materialName,partTypes:r.types,status:d.find(x=>x.id===r.id)?.status||'unchanged'}));
fs.writeFileSync(p+'/template-index.json',JSON.stringify(idx,null,2));
console.log({reportBytes:Buffer.byteLength(text),detailLines:lines.length,templateIndex:idx.length});
