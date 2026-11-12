const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto'),path=require('path');
const dir=__dirname,e=JSON.parse(fs.readFileSync(dir+'/effective.json')),files=JSON.parse(fs.readFileSync(dir+'/files.json'));
const source=fs.readFileSync('tools/extract-mai-selected-original.cjs','utf8');
const checks=[];
for(let i=0;i<2;i++){
 let code=source.slice(0,source.indexOf("const out='tools'"))+source.slice(source.indexOf('const ent='),source.indexOf('const materialXml='));
 code=code.replace("const root='C:/hyperDENT_Settings_MAI_25.08.19/DB/260830_원본/';",'const root='+JSON.stringify(files.dirs[i]+'/')+';');
 code+='\n globalThis.result=records;';const ctx={require,Buffer,structuredClone};vm.runInNewContext(code,ctx);
 const clean=o=>Object.fromEntries(Object.entries(o).filter(([k,v])=>v!==''));let count=0;
 for(const r of ctx.result){const expected=e[i].records.find(x=>x.kind==='variant'&&x.id===r.id);assert(expected);assert.deepEqual(clean(JSON.parse(JSON.stringify(r.globals))),clean(expected.globals));assert.deepEqual(JSON.parse(JSON.stringify(r.jobs.map(j=>({id:j.id,type:j.type,p:clean(j.p)})))),expected.jobs.map(j=>({id:j.id,type:j.type,p:clean(j.p)})));assert.equal(r.unmatched.length,0);count++;}
 checks.push({side:i,independentVariantComparisons:count});
}
for(const f of files.fileDiff)for(const [i,k]of [[0,'old'],[1,'new']])if(f[k])assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(files.dirs[i],f.name))).digest('hex'),f[k].sha256);
const result={checks,sourceHashesUnchanged:true,unmatchedOverrides:e.map(x=>x.unmatched.length)};fs.writeFileSync(dir+'/verification.json',JSON.stringify(result,null,2));console.log(result);
