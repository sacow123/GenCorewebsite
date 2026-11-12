const fs=require('fs'),z=require('zlib');const root='C:/hyperDENT_Settings_MAI_25.08.19/DB/260830_원본/';
const base=z.inflateRawSync(fs.readFileSync(root+'hdNPmillstrategy.hddb').subarray(10));
const h=Array.from({length:320},()=>new Uint32Array(256));for(let i=0;i<base.length;i++)h[i%320][base[i]]++;
const score=Array.from({length:256},(_,v)=>v===32?3:v===10||v===13?1.4:/[a-zA-Z0-9]/.test(String.fromCharCode(v))?1.6:/[<>/="._:-]/.test(String.fromCharCode(v))?1.3:v>=32&&v<127?0:v>=128?-4:-10);
const key=Buffer.alloc(320);for(let i=0;i<320;i++){let best=-Infinity;for(let k=0;k<256;k++){let s=0;for(let v=0;v<256;v++)s+=h[i][v]*score[v^k];if(s>best){best=s;key[i]=k;}}}
const decode=n=>{const raw=fs.readFileSync(root+n);if(raw[0]!==31)return raw.toString('utf8');const b=z.inflateRawSync(raw.subarray(10));return Buffer.from(b.map((v,i)=>v^key[i%320])).toString('utf8');};

const out='tools';fs.mkdirSync(out,{recursive:true});
const ent=s=>s.replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&apos;/g,"'").replace(/&amp;/g,'&');
const get=(s,t)=>ent(s.match(new RegExp('<'+t+'(?: [^>]*)?>([\\s\\S]*?)</'+t+'>'))?.[1]||'');
const props=s=>Object.fromEntries([...s.matchAll(/<([^<>\s/]+)(?: [^>]*)?>([^<>]*)<\/\1>/g)].map(m=>[m[1],ent(m[2])]));
const strategy=decode('hdNPmillstrategy.hddb');
const bases=new Map([...strategy.matchAll(/<namedProfile_millstrategy id="([^"]+)">([\s\S]*?)<\/namedProfile_millstrategy>/g)].map(m=>[m[1],{id:m[1],name:get(m[2],'name'),globals:props(m[2].match(/<setparams[^>]*>([\s\S]*?)<\/setparams>/)?.[1]||''),jobs:[...m[2].matchAll(/<job type="millstrategyjob" id="([^"]+)">([\s\S]*?)<\/job>/g)].map(j=>({id:j[1],type:get(j[2],'jobtype'),objectid:get(j[2],'objectid'),p:props(j[2].match(/<parameters[^>]*>([\s\S]*?)<\/parameters>/)?.[1]||'')}))}]));
const tools=new Map([...decode('hdTool.hddb').matchAll(/<tool id="([^"]+)">([\s\S]*?)<\/tool>/g)].map(m=>[m[1],{id:m[1],...props(m[2])}]));
const variants=[...decode('hdNPmillstrategyvariantprofile.hddb').matchAll(/<namedProfile_millstrategyvariantprofile id="([^"]+)">([\s\S]*?)<\/namedProfile_millstrategyvariantprofile>/g)].map(m=>({partTypes:[...m[2].matchAll(/<vfilter[^>]*>\s*<name>type<\/name>\s*<value>([^<]*)<\/value>\s*<\/vfilter>/g)].map(x=>x[1]),material:get(m[2],'rfilter'),id:m[1],name:get(m[2],'name'),base:get(m[2],'baseprofile'),type:get(m[2].match(/<vfilter type="fvalue">\s*<name>type<\/name>([\s\S]*?)<\/vfilter>/)?.[1]||'','value'),overrides:[...m[2].matchAll(/<overridden(Prop|Restriction)_key>([\s\S]*?)<\/overridden\1_key>\s*<overridden\1_jobType>([\s\S]*?)<\/overridden\1_jobType>\s*<overridden\1_jobLabel>([\s\S]*?)<\/overridden\1_jobLabel>\s*<overridden\1_val>([\s\S]*?)<\/overridden\1_val>/g)].map(x=>({kind:x[1],key:ent(x[2]),type:ent(x[3]),label:ent(x[4]),value:ent(x[5])}))}));
const records=variants.map(v=>{const b=bases.get(v.base);if(!b)throw Error('Missing base '+v.name);const jobs=structuredClone(b.jobs),globals=structuredClone(b.globals);let applied=0;const unmatched=[];for(const o of v.overrides){if(o.kind!=='Prop')continue;const [id,field]=o.key.split('##');if(id==='globals'){globals[field]=o.value;applied++;continue;}let j=jobs.find(j=>j.id===id||j.objectid===id||j.p.joboid===id);if(!j){unmatched.push(o);continue;}j.p[field]=o.value;applied++;}return {...v,baseName:b.name,globals,jobs,applied,unmatched,tools:[...new Set(jobs.map(j=>j.p.tool).filter(Boolean))].map(id=>tools.get(id)||{id,name:'미확인 공구'})};});




const materialXml=decode('hdMaterial.hddb');
const materials=[...materialXml.matchAll(/<material id="([^"]+)">([\s\S]*?)<\/material>/g)].map(m=>({id:m[1],name:get(m[2],'name'),parent:get(m[2],'belongstogroup')}));
const roots={'Co.Cr. Disc':'CoCr','Glass Ceramic':'Glass Ceramic','Hybrid Ceramic':'Hybrid Ceramic','PEEK':'PEEK','PMMA':'PMMA','Pre-Mill Block':'Pre-Mill','Pre-Mill+Reverse':'Pre-Mil+Rev.','Zirconia':'Zirconia','Ti. Disc':'Ti','Ti. Block':'Ti','Wax':'Wax','DuraFlex':'DuraFlex','Amber_Dry':'Amber_Dry','Medentika Pre-mill':'Medentika Pre-mill'};
function group(id){const m=materials.find(m=>m.id===id);return m?(roots[m.name]||(m.parent?group(m.parent):m.name)):'';}
for(const m of strategy.matchAll(/<namedProfile_millstrategy id="([^"]+)">([\s\S]*?)<\/namedProfile_millstrategy>/g)){
 const b=bases.get(m[1]),material=get(m[2],'rfilter'),partTypes=[...m[2].matchAll(/<vfilter[^>]*>\s*<name>type<\/name>\s*<value>([^<]*)<\/value>\s*<\/vfilter>/g)].map(x=>x[1]);
 if(!group(material)||!partTypes.length)continue;
 records.push({...b,material,partTypes,baseName:b.name,overrides:[],unmatched:[],tools:[...new Set(b.jobs.map(j=>j.p.tool).filter(Boolean))].map(id=>tools.get(id))});
}
const selected=records.filter(r=>group(r.material)&&r.partTypes.length).map(r=>({...r,materialGroup:group(r.material)}));
if(selected.some(r=>r.unmatched.length))throw Error('Unmatched overrides');
const disabledPartTypes=[...decode('hdPartType.hddb').matchAll(/<parttype id="([^"]+)">([\s\S]*?)<\/parttype>/g)].map(m=>({id:m[1],name:get(m[2],'name'),valid:get(m[2],'valid')}));
const userPartTypes=[...decode('hdUserPartType.hddb').matchAll(/<userparttype id="([^"]+)">([\s\S]*?)<\/userparttype>/g)].map(m=>({id:m[1],baseType:get(m[2],'baseType'),name:get(m[2],'internname'),displayName:get(m[2],'localname')}));
const allProfiles=[...variants.map(v=>({id:v.id,name:v.name,material:v.material,partTypes:v.partTypes,kind:'variant'})),...[...strategy.matchAll(/<namedProfile_millstrategy id="([^"]+)">([\s\S]*?)<\/namedProfile_millstrategy>/g)].map(m=>({id:m[1],name:get(m[2],'name'),material:get(m[2],'rfilter'),partTypes:[...m[2].matchAll(/<vfilter[^>]*>\s*<name>type<\/name>\s*<value>([^<]*)<\/value>\s*<\/vfilter>/g)].map(x=>x[1]),kind:'base'}))];
const coverage=allProfiles.map(p=>({...p,materialGroup:group(p.material),included:selected.some(r=>r.id===p.id),exclusion:!p.partTypes.length?'No prosthesis type assigned in original DB':!group(p.material)?'Unresolved material':''}));
if(coverage.some(p=>!p.included&&p.exclusion!=='No prosthesis type assigned in original DB'))throw Error('Unaccounted profile');
const checks={sourceFiles:['hdNPmillstrategy.hddb','hdNPmillstrategyvariantprofile.hddb','hdTool.hddb','hdMaterial.hddb','hdPartType.hddb','hdUserPartType.hddb'].map(name=>({name,sha256:require('crypto').createHash('sha256').update(fs.readFileSync(root+name)).digest('hex')}))};
fs.writeFileSync('tools/mai-selected-260830-source.json',JSON.stringify({source:root,materials,records:selected,checks,coverage,disabledPartTypes,userPartTypes}));
console.log(selected.reduce((a,r)=>(a[r.materialGroup]=(a[r.materialGroup]||0)+1,a),{}));
console.log('Selectable base profiles',selected.filter(r=>!r.base).map(r=>r.name));
