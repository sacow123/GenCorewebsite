// Additive documentation overlay. Never rewrites the 260830 catalog.
const fs=require('fs');
const source=require('./mai-261030-update-source.json');
const loc=(ko,en,ja)=>({ko,en,ja});
const state=v=>v==='1'?loc('켜짐','On','ON'):loc('꺼짐','Off','OFF');
const added=loc('261030 추가','Added in 261030','261030追加');
const changed=loc('261030 변경','Changed in 261030','261030変更');
const line=(label,value)=>loc(`${label.ko}: ${value.ko}`,`${label.en}: ${value.en}`,`${label.ja}：${value.ja}`);
const plain=v=>loc(v,v,v);
const toolLine=name=>loc('연결 공구: '+name,'Linked tool: '+name,'割り当て工具：'+name);
const calcLine=v=>{const s=state(v);return loc('계산 기본값: '+s.ko,'Calculate default: '+s.en,'計算の初期値：'+s.ja);};
const originalThreads={};
for(const raw of require('./mai-selected-260830-source.json').records){
 const jobs=raw.jobs.filter(j=>j.type==='threadmach'||/(?:^|[\s_])thread(?:[\s_]|$)/i.test(j.p.jobname));
 if(!jobs.length)continue;
 originalThreads[raw.id]=jobs.map(j=>{
  const tool=raw.tools.find(t=>t?.id===j.p.tool);
  if(j.p.tool&&!tool)throw Error('Missing original thread tool: '+raw.name+' / '+j.p.jobname);
  const c=calcLine(j.p.calculate);
  return {sourceJobId:j.id,title:j.p.jobname,descriptions:[...(tool?[toolLine(tool.name)]:[]),loc(c.ko+' (260830 기준)',c.en+' (260830)',c.ja+'（260830基準）')]};
 });
}
const baseline=loc('260830 기준','260830 default','260830基準');
const updates={};
for(const r of source.existing){
 const jobs=[];
 for(const change of r.changes){
  const j=change.job,old=change.old;
  const descriptions=[];
  if(change.kind==='calculate'){
   const s=state(j.p.calculate);
   descriptions.push(line(changed,loc('계산 기본값이 '+s.ko+'으로 변경되었습니다.','Calculate default changed to '+s.en+'.','計算の初期値が'+s.ja+'に変更されました。')));
  }else if(change.kind==='selectable'){
   const s=state(j.p.calculate);
   descriptions.push(line(changed,loc('계산 기본값은 '+s.ko+'이며, 실행 여부를 선택할 수 있는 옵션으로 변경되었습니다.','Calculate default remains '+s.en+'; this process is now a selectable option.','計算の初期値は'+s.ja+'のままで、実行の有無を選択できるオプションに変更されました。')));
  }else if(change.kind==='tool')descriptions.push(line(changed,loc('사용 공구: '+old.toolName+' → '+j.toolName,'Tool: '+old.toolName+' → '+j.toolName,'使用工具：'+old.toolName+' → '+j.toolName)));
  else if(change.kind==='removed')descriptions.push(line(changed,loc('이 공정은 제거되었습니다.','This process was removed.','この工程は削除されました。')));
  else descriptions.push(line(added,toolLine(j.toolName||'—')),line(added,calcLine(j.p.calculate)));
  const prior=old||j;
  const baselineDescriptions=change.kind==='added'?[]:[...(prior.toolName?[toolLine(prior.toolName)]:[]),(()=>{const c=calcLine(prior.p.calculate);return loc(c.ko+' (260830 기준)',c.en+' (260830)',c.ja+'（260830基準）');})()];
  jobs.push({sourceJobId:j.id,title:j.p.jobname,kind:change.kind,descriptions,baselineDescriptions});
 }
 if(jobs.length)updates[r.id]={jobs};
}
const types={crown_single:['Crown','Crown'],cap_single:['Coping','Coping'],crown_bridge:['Crown Bridge','Bridge'],cap_bridge:['Coping Bridge','Coping'],'crown_single:Veneer':['Veneer','Crown'],onlay_single:['Inlay/Onlay','Inlay/Onlay'],onlay_bridge:['Inlay/Onlay Bridge','Inlay/Onlay'],onlaycrown_bridge:['Inlay/Onlay Crown Bridge','Inlay/Onlay'],abutment_single:['Abutment','Abutment'],abutment_bridge:['Abutment Bridge','Abutment'],abutmentcrown_single:['Abutment Crown','Abutment'],abutmentcrown_bridge:['Abutment Crown Bridge','Abutment']};
const additions=source.added.map(r=>{
 const memberships=r.types.map(t=>{if(!types[t])throw Error('Unknown type '+t);return {sourceType:t,type:types[t][0],family:types[t][1]};});
 const material=r.name.startsWith('Dry_')?'Amber_Dry':r.name.startsWith('CoCr')?'CoCr':'PMMA';
 const exposed=j=>j.p.calculate==='1'||j.p.calculate_ovwren==='1';
 const processes=r.jobs.filter(j=>exposed(j)&&(j.p.calculate_ovwren==='1'||r.name.includes('(expansion)')&&j.p.calculate==='1')).map(j=>({title:j.p.jobname,sourceJobId:j.id,descriptions:[...(j.toolName?[toolLine(j.toolName)]:[]),calcLine(j.p.calculate),...(j.p.addrad!==undefined?[loc('추가 반경: '+j.p.addrad,'Additional radius: '+j.p.addrad,'追加半径：'+j.p.addrad)]:[]),...(j.p.calculate_ovwren==='1'?[loc('계산: 이 공정의 실행 여부를 선택할 수 있습니다.','Calculate: Choose whether to run this process.','計算：この工程を実行するか選択できます。')]:[])]}));
 const uda=r.jobs.filter(j=>/^uarea/.test(j.type)&&exposed(j)).map(j=>loc('유형 '+j.p.categories+': '+j.toolName,'Category '+j.p.categories+': '+j.toolName,'カテゴリー'+j.p.categories+'：'+j.toolName));
 const toolNames=[...new Set(r.jobs.filter(exposed).map(j=>j.toolName).filter(Boolean))];
 const tools=toolNames.map(n=>{const m=n.match(/^T(\d+)_(.*)$/);if(!m)throw Error('Invalid tool '+n);const jobs=r.jobs.filter(j=>j.toolName===n&&exposed(j));return {id:'T'+Number(m[1]),name:m[2],imageAvailable:false,optional:jobs.every(j=>j.p.calculate!=='1')||jobs.every(j=>['screwch','impintwallfin','threadmach','engraving'].includes(j.type)),comments:[]};});
 return {title:r.name,subtitle:r.name.replace(/^[^_]+_/,''),material,type:memberships[0].type,family:memberships[0].family,partTypes:r.types,filterMemberships:memberships,sourceCatalog:'261030-additions',sourceRevision:'261030',sourceProfileId:r.id,conditions:[added,loc(material+' 재료의 '+memberships.map(m=>m.type).join(' / ')+' 가공용 템플릿입니다.','Template for machining '+memberships.map(m=>m.type).join(' / ')+' in '+material+'.',material+'素材の'+memberships.map(m=>m.type).join(' / ')+'加工用テンプレートです。'),loc('기준 DB: 261030 / 260830에는 없는 신규 템플릿입니다.','Source DB: 261030. This template is not included in 260830.','基準DB：261030。260830には含まれない新規テンプレートです。'),loc('계산이 켜진 공정도 형상·카테고리·홀 조건에 따라 생략될 수 있습니다.','Enabled processes may still be skipped depending on geometry, category, or hole conditions.','計算がONの工程でも、形状・カテゴリー・ホール条件により省略される場合があります。')],processes,uda,interfaces:[],tools,images:[]};
});
for (const record of additions) record.conditions = record.conditions.filter(item => item !== added).map(item => item.en.startsWith('Source DB:') ? loc('기준 DB: 261030','Source DB: 261030','基準DB：261030') : item);
fs.writeFileSync('src/data/mai-261030-updates.js','// Generated by tools/build-mai-261030-updates.cjs. Additive; 260830 data stays unchanged.\nwindow.Mai261030Updates = '+JSON.stringify({updates,additions,originalThreads,labels:{added,changed,baseline}},null,2)+';\n');
console.log({annotatedTemplates:Object.keys(updates).length,newTemplates:additions.map(r=>r.title)});
