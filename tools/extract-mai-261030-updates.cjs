// Select only user-requested documentation changes from the independently verified DB comparison.
const fs=require('fs'),vm=require('vm'),path=require('path');
const dir=process.argv[2]||'output/db-compare-260830-261030';
const e=JSON.parse(fs.readFileSync(path.join(dir,'effective.json')));
const diffs=JSON.parse(fs.readFileSync(path.join(dir,'effective-diff.json')));
const c={window:{}};vm.runInNewContext(fs.readFileSync('src/data/mai-original-260830-templates.js','utf8'),c);
const ids=new Set(c.window.MaiOriginal260830Templates.map(r=>r.sourceProfileId));
const existing=[];
for(const diff of diffs.filter(r=>ids.has(r.id)&&r.status==='changed')){
 const old=e[0].records.find(r=>r.id===diff.id),next=e[1].records.find(r=>r.id===diff.id),changes=[];
 for(const jd of diff.jobs){
  const a=old.jobs.find(j=>j.id===jd.id),b=next.jobs.find(j=>j.id===jd.id),j=b||a,n=j.p.jobname;
  const added=jd.status==='added',removed=jd.status==='removed';
  const thread=added&&(j.type==='threadmach'&&/Cat(23|26|30)\b/.test(n)||j.type==='screwch'&&/Cat23~30/.test(n));
  const rhein=added&&/Rhein/.test(n);
  const oldRhein=removed&&/^CoCr/.test(diff.name)&&j.type==='impintwallfin'&&/cat30/.test(n);
  const over=added&&/Over.?Structure/i.test(diff.name)&&/^(Ti|PMMA|Zirconia)_/.test(diff.name)&&j.type==='screwch';
  const inner=added&&/^PMMA_Abutment crown bridge$/.test(diff.name)&&/inside abutment bases/.test(n)&&/M1\.0F|M0\.6B/.test(n);
  const toggle=jd.changes.some(v=>v.field==='calculate'&&v.old!==v.new)&&((/^Pre-Mil/.test(diff.name)&&j.type==='abutoccallfin'&&/3\+2|90.*5x/i.test(n))||(/^PEEK_.*Bridge/i.test(diff.name)&&j.type==='capsinnerfin'&&/5x/i.test(n)));
  const dry=/^Dry-Mill_/.test(diff.name);
  const selectable=a&&b&&/^Pre-Mil/.test(diff.name)&&j.type==='abutoccallfin'&&/3\+2/.test(n)&&a.p.calculate_ovwren!=='1'&&b.p.calculate_ovwren==='1';
  if(thread||rhein||over||inner||(dry&&added&&/^T\d+_G/.test(j.toolName||'')))changes.push({kind:'added',job:j});
  else if(oldRhein||(dry&&removed&&/^T\d+_Z/.test(j.toolName||'')))changes.push({kind:'removed',job:j});
  else if(toggle)changes.push({kind:'calculate',old:a,job:b});
  else if(selectable)changes.push({kind:'selectable',old:a,job:b});
  else if(dry&&a&&b&&a.p.tool!==b.p.tool)changes.push({kind:'tool',old:a,job:b});
 }
 if(changes.length)existing.push({id:diff.id,name:diff.name,changes});
}
const names=['PMMA_Abutment crown','CoCr_Interface_Finishing (expansion)','CoCr_Screw Hole Finishing (expansion)','Dry_Inlay/Onlay Bridge','Dry_Inlay/Onlay','Dry_Crown_SCRP','Dry_Coping/Crown_SCRP Bridge','Dry_Coping/Veneer'];
const added=names.map(n=>{const r=e[1].records.find(r=>r.kind==='variant'&&r.name===n);if(!r)throw Error('Missing '+n);return r;});
const files=JSON.parse(fs.readFileSync(path.join(dir,'files.json')));
fs.writeFileSync('tools/mai-261030-update-source.json',JSON.stringify({source:files.dirs[1],baseline:files.dirs[0],checks:files.fileDiff.filter(f=>['hdNPmillstrategy.hddb','hdNPmillstrategyvariantprofile.hddb','hdTool.hddb'].includes(f.name)),existing,added},null,2));
console.log(existing.length,'existing',added.length,'new');
