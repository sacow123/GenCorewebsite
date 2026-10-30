const fs = require('fs');
const vm = require('vm');
const data = JSON.parse(fs.readFileSync(process.env.PDF_DATA || 'tmp/pdfs/ti-abutment/visible-data.json', 'utf8'));
const context = {window:{}};
vm.runInNewContext(fs.readFileSync('src/scripts/hybrid-template-card.js','utf8'), context);
const originalStyles = context.window.GenCoreMaterialTemplateCard.styles();
const e = s => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const state = s => s === '1' ? '켜짐' : s === '0' ? '꺼짐' : s;
const ul = lines => '<ul>'+lines.map(s=>'<li>'+e(s)+'</li>').join('')+'</ul>';
const processMarkup = (title,lines) => '<div class="hybrid-adjustment-group"><h5>'+e(title)+'</h5>'+ul(lines)+'</div>';
const templates = data.records.map(r=>{
  const tool = j=>r.tools.find(t=>t.id===j.p.tool);
  const sections=[];
  const conditions=[];
  if(r.name.includes('not mill'))conditions.push('어버트먼트 브릿지의 T-cut 공구 테스트용 템플릿입니다. 원본 명칭은 “not mill”로 표시되어 있습니다.');
  else if(r.name.includes('Screw Hole Finishing'))conditions.push('어버트먼트 브릿지의 스크류 홀 정삭·확장용 템플릿입니다.');
  else if(r.name.includes('Interface_Finishing'))conditions.push('어버트먼트 브릿지의 인터페이스 정삭·확장용 템플릿입니다.');
  else conditions.push('Ti 디스크에서 '+(r.name.includes(' bridge')?'어버트먼트 브릿지':'어버트먼트')+'를 가공하는 템플릿입니다.');
  if(r.partTypes)conditions.push('선택된 파트 타입: '+r.partTypes.map(t=>({abutment_bridge:'Abutment bridge',abutmentcrown_bridge:'Abutment crown bridge',abutment_single:'Abutment'}[t]||t)).join(' · '));
  if(r.name.includes('Conlog'))conditions.push('Conlog 시스템용 어버트먼트 템플릿입니다.');
  else if(r.name.includes('Angled-MUA'))conditions.push('Angled-MUA (Tap+F1.5)용 템플릿입니다. M1.5F 공구의 앵글 교합면 정삭 공정이 켜져 있습니다.');
  else conditions.push('인터페이스와 카테고리 설정에 따라 조건부 공정을 사용합니다.');
  sections.push({title:'사용 조건',chunks:[ul(conditions)]});
  const general=[];
  if(r.globals.millincoffset_ovwren==='1')general.push('증분식 경계 옵셋: 가공 경계의 추가 옵셋을 조정할 수 있습니다. (기본값: '+r.globals.millincoffset+')');
  if(r.globals.milloffset_incangle_ovwren==='1')general.push('증분식 경계 각도: 가공 경계의 추가 각도를 조정할 수 있습니다. (기본값: '+r.globals.milloffset_incangle+')');
  const chunks=[processMarkup('일반 설정 (General settings)',general)];
  for(const j of r.jobs){
    const p=j.p,t=tool(j);const fields=Object.keys(p).filter(k=>k.endsWith('_ovwren')&&p[k]==='1').map(k=>k.slice(0,-7));
    if(!fields.length)continue;
    let desc='직경 '+t.diameter+'mm 공구로 ';
    if(j.type==='abutbaseinnerfin')desc+='어버트먼트 베이스 내부를 정삭합니다.';
    else if(j.type==='abutbasermat')desc+='어버트먼트 베이스 내부의 잔여 영역을 가공합니다.';
    else if(j.type==='capcavouterfin')desc+='캐비티 측 외측 영역을 정삭합니다.';
    else if(p.jobname.includes('Finishing abutment outside'))desc+='어버트먼트 외측을 정삭합니다.';
    else if(p.jobname.includes('Fissure'))desc+='교합면의 피셔 영역을 가공합니다.';
    else if(j.type==='screwch')desc+='스크류 채널을 가공합니다.';
    else if(j.type==='cutconnectors')desc+='커넥터를 절단하거나 줄입니다.';
    else desc='연결 공구: '+t.name;
    const lines=[desc];
    for(const f of fields){
      if(f==='calculate')lines.push('계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: '+state(p[f])+')');
      else if(f==='allowance')lines.push('여유량: 어버트먼트 베이스 내부의 적합을 조정할 수 있습니다. (기본값: '+p[f]+')');
      else if(f==='addallowancexy')lines.push('XY 여유량: 어버트먼트 베이스 내부의 XY 방향 적합을 조정할 수 있습니다. (기본값: '+p[f]+')');
      else if(f==='stepdown')lines.push('스텝다운: 깊이 방향 가공 간격을 조정할 수 있습니다. (기본값: '+p[f]+', 계산: '+state(p.calculate)+')');
      else if(f==='addrad')lines.push('추가 반경: 스크류 채널의 추가 반경을 조정할 수 있습니다. (기본값: '+p[f]+')');
      else lines.push(f+': '+p[f]);
    }
    if(p.jobname.includes('M0.6Bx06')||p.jobname.includes('M0.6Bx10'))lines.push('실제 연결 공구: '+t.name);
    if(p.condcalcgeo==='geonex')lines.push('지정된 기준 형상이 없을 때 계산하도록 설정되어 있습니다.');
    chunks.push(processMarkup(p.jobname,lines));
  }
  sections.push({title:'조정 가능 항목',chunks});
  const uda=new Map();
  for(const j of r.jobs.filter(j=>/uarea/.test(j.type))){
    const t=tool(j),p=j.p,label=(j.type==='uarearm'?'잔여 가공':'정삭')+(p.jobname.includes('Clip')?' / Clip':'')+(p.jobname.includes('Retention')?' / Bar Retention Grove':'')+(p.jobname.includes('90deg')?' / 90deg':'');
    const k=(p.categories||'-')+'|'+t.name+'|'+p.calculate;const v=uda.get(k)||{cat:p.categories,tool:t.name,on:p.calculate,labels:[]};if(!v.labels.includes(label))v.labels.push(label);uda.set(k,v);
  }
  sections.push({title:'사용자 정의 영역 (UDA)',chunks:[...uda.values()].map(v=>ul(['유형 '+v.cat+' : '+v.tool+' / '+v.labels.join(' · ')+' (기본값: '+state(v.on)+')']))});
  const int=new Map();
  for(const j of r.jobs.filter(j=>j.type==='impintwallfin')){const p=j.p,t=tool(j),k=p.category+'|'+t.name+'|'+p.calculate,v=int.get(k)||{cat:p.category,tool:t.name,on:p.calculate,sides:[]};const side=p.sideid==='inner'?'내벽':'외벽';if(!v.sides.includes(side))v.sides.push(side);int.set(k,v);}
  sections.push({title:'Implant Interfaces wall',chunks:[...int.values()].map(v=>ul(['유형 '+v.cat+' : '+v.tool+' / '+v.sides.join('·')+' (기본값: '+state(v.on)+')']))});
  const toolcard=t=>{
    const num=Number(t.number),id='T'+num,short=t.name.split('_').slice(1).join('_');
    let note='';
    if(num>=25&&num<=28)note='나사산 가공 조건에 따라 사용';
    else if(num>=23)note='스크류 홀·헤드 조건에 따라 사용';
    else if(num===1)note='해당 스크류 채널 공정에서 사용';
    return '<div class="hybrid-tool'+(note?' is-conditional':'')+'"><button data-mai-image class="mai-template-tool-photo"><img src="assets/images/sec-mai-tools/tool-list/t'+String(num).padStart(2,'0')+'.webp" alt="'+e(t.name)+'"></button><strong>'+id+'</strong><em>'+e(short)+'</em>'+(note?'<small>'+note+'</small>':'')+'</div>';
  };
  const tools=r.tools.filter(t=>r.jobs.some(j=>j.p.tool===t.id&&(j.p.calculate==='1'||j.p.calculate_ovwren==='1'))).sort((a,b)=>Number(a.number)-Number(b.number));
  for(const [optional,label] of [[false,'기본 사용 공구'],[true,'조건부 사용 공구']]){
    const group=tools.filter(t=>(Number(t.number)>=23||Number(t.number)===1)===optional),rows=[];
    for(let i=0;i<group.length;i+=4)rows.push('<p class="hybrid-tool-group">'+label+(i?' (계속)':'')+'<small>공정·형상 조건에 따라 사용</small></p><div class="hybrid-tool-grid '+(optional?'conditional':'basic')+'">'+group.slice(i,i+4).map(toolcard).join('')+'</div>');
    if(rows.length)sections.push({title:'공구',tool:true,chunks:rows});
  }
  return {name:r.name,subtitle:r.name.slice(3).replace(/_/g,' · '),sections:sections.filter(s=>s.chunks.length)};
});
const script=`
const templates=${JSON.stringify(templates)};
async function build(){
 await document.fonts.ready;
 const main=document.getElementById('mai-template-modal');
 let count=0;const audit=[];
 for(const t of templates){
   let card,wrapper,section=null,sectionKey=null;
   function page(){wrapper=document.createElement('div');wrapper.className='pdf-page';wrapper.dataset.template=t.name;wrapper.innerHTML='<article class="hybrid-template-card" lang="ko"><span class="hybrid-template-card__tag">M AI TEMPLATE</span><h3>Ti</h3><p class="hybrid-template-card__subtitle"></p></article><footer>GenCore · M AI · 260830</footer>';wrapper.querySelector('.hybrid-template-card__subtitle').textContent=t.subtitle;main.append(wrapper);card=wrapper.querySelector('article');count++;section=null;sectionKey=null;}
   function container(s){let el=document.createElement('section');el.className=s.tool?'hybrid-tools':'hybrid-card-section';el.innerHTML='<h4><span aria-hidden="true"></span>'+s.title+'</h4>';card.append(el);return el;}
   page();
   for(let si=0;si<t.sections.length;si++){
    const s=t.sections[si];section=container(s);sectionKey=si;
    for(const html of s.chunks){
     const holder=document.createElement('div');holder.className='print-chunk';holder.innerHTML=html;section.append(holder);
     if(card.offsetHeight>1150){holder.remove();if(section.children.length===1)section.remove();page();section=container(s);section.append(holder);}
     audit.push({template:t.name,title:s.title,height:card.offsetHeight});
    }
   }
 }
 for(const [i,p] of [...main.children].entries())p.querySelector('footer').textContent+=' · '+(i+1)+' / '+count;
 await Promise.all([...document.images].map(img=>img.decode().catch(()=>{})));
 document.documentElement.dataset.ready='true';document.documentElement.dataset.pages=count;
 window.pdfAudit=audit;
}
build();`;
const html='<!doctype html><html lang="ko"><head><meta charset="utf-8"><base href="http://127.0.0.1:8080/"><title>M AI Ti Templates - 260830</title><link rel="preconnect" href="https://fonts.googleapis.com"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Noto+Sans+KR:wght@400;600;700&family=Noto+Sans+JP:wght@400;600;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="assets/css/styles.css"><link rel="stylesheet" href="assets/css/mai-dbconfig.css">'+originalStyles+`<style>
html,body{height:auto;overflow:visible;background:#fff}body{padding:0;margin:0}.pdf-page{width:830px;margin:0 auto 28px;break-after:page;page-break-after:always;position:relative}.pdf-page:last-child{break-after:auto;page-break-after:auto}.hybrid-template-card{width:830px;max-width:830px}.print-chunk{display:flow-root}.print-chunk+.print-chunk>.hybrid-adjustment-group{margin-top:13px}.hybrid-tool-grid.basic,.hybrid-tool-grid.conditional{grid-template-columns:repeat(4,minmax(0,1fr))}footer{font-size:11px;color:#71688a;text-align:right;padding:9px 4px 0}.pdf-page .hybrid-template-card{box-shadow:none}
@page{size:A4;margin:8mm} @media print{*{-webkit-print-color-adjust:exact;print-color-adjust:exact}.pdf-page{margin-bottom:0}.hybrid-template-card,.print-chunk{break-inside:avoid;page-break-inside:avoid}}
</style></head><body><main id="mai-template-modal"></main><script>`+script+'</script></body></html>';
fs.writeFileSync(process.env.PDF_HTML || 'tmp/pdfs/ti-abutment/site-style.html',html);
if(data.visibilityAudit)fs.writeFileSync('tmp/pdfs/ti-abutment/visibility-audit.json',JSON.stringify(data.visibilityAudit,null,2));
console.log(JSON.stringify({included:templates.map(t=>t.name),cssSource:'src/scripts/hybrid-template-card.js + assets/css/styles.css + assets/css/mai-dbconfig.css'}));
