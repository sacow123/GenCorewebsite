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
console.log(strategy.slice(strategy.indexOf('restriction')-250,strategy.indexOf('restriction')+1500));