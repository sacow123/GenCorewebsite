// Compare the unfiltered profile inventory with every native-material/type cell.
// This does not claim validation of the live hyperDENT or browser screen.
const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const db=require('./mai-selected-260830-source.json');
const context={window:{}};vm.runInNewContext(fs.readFileSync('src/data/mai-original-260830-templates.js','utf8'),context);
const records=JSON.parse(JSON.stringify(context.window.MaiOriginal260830Templates));
assert.equal(db.coverage.length,284,'Original inventory count changed; review the extraction');
assert.equal(db.coverage.filter(p=>p.kind==='variant').length,174);
assert.equal(db.coverage.filter(p=>p.kind==='base').length,110);
assert.equal(db.materials.length,34);
const expected=db.coverage.filter(p=>p.material&&p.partTypes.length);
assert.deepEqual(records.map(r=>r.sourceProfileId).sort(),expected.map(p=>p.id).sort(),'Extra or missing selectable profiles');
const excluded=db.coverage.filter(p=>!expected.some(e=>e.id===p.id));
assert(excluded.every(p=>p.partTypes.length===0&&p.exclusion==='No prosthesis type assigned in original DB'));
const types=[...new Set([...expected.flatMap(p=>p.partTypes),...db.userPartTypes.map(t=>t.baseType+':'+t.name)])];
assert(db.disabledPartTypes.every(t=>t.valid==='0'));
assert(db.userPartTypes.every(t=>types.includes(t.baseType+':'+t.name)));
function inherits(materialId,filterId){const visited=new Set();while(materialId&&!visited.has(materialId)){if(materialId===filterId)return true;visited.add(materialId);materialId=db.materials.find(m=>m.id===materialId)?.parent;}return false;}
const matrix=[];
for(const material of db.materials){for(const type of types){
  const original=expected.filter(p=>p.partTypes.includes(type)&&inherits(material.id,p.material)).map(p=>({id:p.id,name:p.name})).sort((a,b)=>a.id.localeCompare(b.id));
  const website=records.filter(r=>r.applicableMaterialIds.includes(material.id)&&r.filterMemberships.some(m=>m.sourceType===type)).map(r=>({id:r.sourceProfileId,name:r.title})).sort((a,b)=>a.id.localeCompare(b.id));
  assert.deepEqual(website,original,material.name+' / '+type);
  matrix.push({materialId:material.id,material:material.name,type,count:original.length,templates:original.map(p=>p.name)});
}}
for(const group of [...new Set(expected.map(p=>p.materialGroup))])for(const type of types){
  const original=expected.filter(p=>p.materialGroup===group&&p.partTypes.includes(type)).map(p=>p.name).sort();
  const website=records.filter(r=>r.material===group&&r.filterMemberships.some(m=>m.sourceType===type)).map(r=>r.title).sort();
  assert.deepEqual(website,original,group+' / '+type);
}
const runtime=fs.readFileSync('src/scripts/mai-dbconfig.js','utf8');
assert(!runtime.includes('legacyRecords')&&!runtime.includes('tiBridgeTitles'),'Hand-maintained legacy fallback remains');
assert(runtime.includes('const records = canonicalRecords;'));
assert(runtime.includes('!selectedMaterial || r.material === selectedMaterial'));
assert(!runtime.includes('nativeMaterialSelect'));
assert(runtime.includes('memberships(r).some(m => (!family || m.family === family)'));
assert.equal(context.window.MaiOriginal260830Materials.length,db.materials.length);
const report={status:'source-matrix-passed',rawProfiles:284,selectableProfiles:records.length,materials:db.materials.length,prosthesisTypes:types.length,cells:matrix.length,missing:0,extra:0,nameMismatch:0,excluded,disabledPartTypes:db.disabledPartTypes,userPartTypes:db.userPartTypes,materialTypeMatrix:matrix,browserVerification:'Deferred by user; not performed'};
fs.writeFileSync('output/verification/mai-original-260830/full-coverage.json',JSON.stringify(report,null,2));
console.log(JSON.stringify({status:report.status,rawProfiles:284,selectableProfiles:records.length,materials:34,prosthesisTypes:types.length,cells:matrix.length,missing:0,extra:0,nameMismatch:0,unassignedProfiles:excluded.length}));
