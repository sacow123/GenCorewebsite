// Validate all published MillFix material records against resolved original profiles.
const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto');
const source=require('./mf-selected-260830-source.json');
const targets=[['Hybrid Ceramic','hybrid','MfHybrid260830Templates',18],['PMMA','pmma','MfPmma260830Templates',17],['PEEK','peek','MfPeek260830Templates',9],['Wax','wax','MfWax260830Templates',8],['Zirconia','zirconia','MfZirconia260830Templates',17]];
const ctx={window:{addEventListener:()=>{},GenCoreMaterialTemplateCard:{styles:()=>''}},document:{createElement:()=>({}),head:{append:()=>{}}}};
for(const [,slug]of targets)vm.runInNewContext(fs.readFileSync('src/data/mf-'+slug+'-260830-templates.js','utf8'),ctx);
vm.runInNewContext(fs.readFileSync('src/scripts/mf-hybrid-dbconfig.js','utf8'),ctx);
const enabled=j=>j.p.calculate==='1'||j.p.calculate_ovwren==='1';
const editable=p=>Object.keys(p).filter(k=>k.endsWith('_ovwren')&&p[k]==='1').map(k=>k.slice(0,-7));
for(const f of source.checks.sourceFiles)assert.equal(crypto.createHash('sha256').update(fs.readFileSync(source.source+f.name)).digest('hex'),f.sha256,'Original changed: '+f.name);
const page=fs.readFileSync('사용자 매뉴얼.html','utf8'),section=page.match(/<section id="sec-mf-hd-dbconfig"[\s\S]*?<\/section>/)[0];
const report=[];
for(const [material,slug,global,count]of targets){
  const records=JSON.parse(JSON.stringify(ctx.window[global]));assert.equal(records.length,count);
  const expected=source.records.filter(r=>material==='Wax'?source.materials.find(m=>m.id===r.material)?.name==='Wax Disc':r.materialGroup===(material==='Zirconia'?'Zirconia Group':material));
  assert.deepEqual(records.map(r=>r.sourceProfileId).sort(),expected.map(r=>r.id).sort());
  const chunk=section.match(new RegExp('<!-- '+material+' -->[\\s\\S]*?<\\/ul>'))[0];
  assert.deepEqual([...chunk.matchAll(/<li>([^<]+)<\/li>/g)].map(m=>m[1]),records.map(r=>r.title));
  let cards=0;
  for(const r of records){
    const original=expected.find(o=>o.id===r.sourceProfileId),excluded=new Set(original.tools.filter(t=>/wood.*ruff/i.test(t?.name||'')).map(t=>t.id));
    const jobs=original.jobs.filter(j=>!excluded.has(j.p.tool));
    assert.equal(r.title,original.name);assert.equal(r.material,material);assert.equal(original.unmatched.length,0);assert.deepEqual(r.partTypes,original.partTypes);
    assert.deepEqual(r.processes.filter(p=>p.sourceJobId).map(p=>p.sourceJobId),jobs.filter(j=>enabled(j)&&editable(j.p).length).map(j=>j.id));
    for(const j of jobs.filter(j=>enabled(j)&&editable(j.p).length)){
      const p=r.processes.find(p=>p.sourceJobId===j.id);assert.equal(p.title,j.p.jobname);
      assert(p.descriptions.some(v=>v.en==='Calculate default: '+(j.p.calculate==='1'?'On':'Off')));
      for(const field of editable(j.p).filter(f=>f!=='calculate'))assert(p.descriptions.some(v=>v.en.includes('Default: '+j.p[field])));
      if(j.p.tool)assert(p.descriptions.some(v=>v.en==='Linked tool: '+original.tools.find(t=>t.id===j.p.tool).name));
    }
    for(const field of editable(original.globals))assert(r.processes[0].descriptions.some(v=>v.en.includes('Default: '+original.globals[field])));
    assert.deepEqual(r.tools.map(t=>t.id+'_'+t.name).sort(),original.tools.filter(t=>jobs.some(j=>enabled(j)&&j.p.tool===t.id)).map(t=>'T'+Number(t.number)+'_'+t.name.replace(/^T\d+_/i,'')).sort());
    assert.deepEqual(r.uda.map(v=>v.en),jobs.filter(j=>/^uarea/.test(j.type)&&enabled(j)).map(j=>'Category '+j.p.categories+': '+original.tools.find(t=>t.id===j.p.tool).name));
    const walls=new Map();for(const j of jobs.filter(j=>j.type==='impintwallfin')){const t=original.tools.find(t=>t.id===j.p.tool),p=j.p,key=[p.category,t.name,p.calculate].join('|');const g=walls.get(key)||{cat:p.category,tool:t.name,calc:p.calculate,sides:[]};if(!g.sides.includes(p.sideid))g.sides.push(p.sideid);walls.set(key,g);}
    assert.deepEqual(r.interfaces.map(v=>v.en),[...walls.values()].map(g=>'Category '+g.cat+': '+g.tool+' / '+g.sides.map(s=>s==='outer'?'Outer wall':'Inner wall').join(' / ')+' (Default: '+(g.calc==='1'?'On':'Off')+')'));
    assert(!/wood.*ruff/i.test(JSON.stringify(r)));
    function check(v){if(v&&typeof v==='object'){if('ko'in v)for(const lang of ['ko','en','ja']){assert(v[lang]?.trim());if(lang!=='ko')assert(!/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(v[lang]),r.title+' '+lang);}Object.values(v).forEach(check);}}check(r);
    const html=ctx.window.MfHybridDbconfig.render(r.title,'ko').html,photos=[...html.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m=>m[1]);assert.equal(photos.length,r.tools.length,'Missing photo '+r.title);for(const photo of photos)assert(fs.existsSync(photo));cards+=photos.length;
  }
  report.push({material,templates:count,toolCards:cards});
}
const baseline=require('../output/verification/mf-peek-wax-zirconia-260830/baseline.json');
assert.equal(section.slice(0,section.indexOf('<!-- PEEK -->')).replace(/\r\n/g,'\n'),baseline.sectionPrefix);
for(const [path,hash]of Object.entries(baseline.data))assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path)).digest('hex'),hash);
for(const path of ['index.html','src/index.template.html'])assert(fs.readFileSync(path,'utf8').includes('src/scripts/local-entry.js'));
fs.writeFileSync('output/verification/mf-peek-wax-zirconia-260830/source-check.json',JSON.stringify({status:'passed',sourceHashes:true,previousMaterialsUnchanged:true,woodrruffExcluded:true,report},null,2));
console.log(report);
