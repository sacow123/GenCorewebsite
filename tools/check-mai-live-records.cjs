// Check saved observations from the actual 8080 browser session.
const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const c={window:{}};vm.runInNewContext(fs.readFileSync('src/data/mai-original-260830-templates.js','utf8'),c);
const expected=c.window.MaiOriginal260830Templates;
const path='output/verification/mai-original-260830/live/';
const log=JSON.parse(fs.readFileSync(path+(fs.existsSync(path+'latest.json')?'latest.json':'progress.json'),'utf8'));
assert.equal(log.failures.length,0,JSON.stringify(log.failures));
const counts={};
for(const check of log.details){
  const r=expected.find(r=>r.title===check.title);assert(r);
  const cats=new Set(r.uda.flatMap(x=>(x.en.match(/^\s*Category\s*(\d+(?:\s*\/\s*\d+)*)\s*:/i)?.[1]||'').split('/').filter(Boolean).map(Number)));
  for(const parity of [1,0]){const group=[...cats].filter(n=>n%2===parity).sort((a,b)=>a-b);if(group.length){const text={ko:'유형 '+group.join('/')+' 사용 가능',en:'Categories '+group.join('/')+' available',ja:'タイプ '+group.join('/')+' 使用可能'}[check.lang];assert(check.text.includes(text),'Missing UDA '+r.title+' '+text);}}
  const renderedTools=[...r.tools.filter(t=>!t.optional),...r.tools.filter(t=>t.optional)].filter(t=>t.imageAvailable!==false);
  assert.equal(check.photoButtons,renderedTools.length,'Image buttons '+r.title);
  if(check.popup){assert.equal(check.popup.alt,renderedTools[0].id+' '+renderedTools[0].name,'Wrong enlarged tool '+r.title);assert(check.popup.image.endsWith('/t'+renderedTools[0].id.slice(1).padStart(2,'0')+'.webp'));}
  if(check.lang!=='ko')assert(!/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(check.text+check.attrs.join('')+JSON.stringify(check.popup)));
  counts[check.lang]=(counts[check.lang]||0)+1;
}
if(process.argv.includes('--require-complete'))for(const lang of ['ko','en','ja'])assert.equal(new Set(log.details.filter(r=>r.lang===lang).map(r=>r.title)).size,expected.length,'Incomplete '+lang);
fs.writeFileSync(path+'record-check.json',JSON.stringify({counts,matrixObservations:log.matrix.length,failures:log.failures.length,complete:['ko','en','ja'].every(lang=>new Set(log.details.filter(r=>r.lang===lang).map(r=>r.title)).size===expected.length)},null,2));
console.log('Saved screen observations checked:',counts,'matrix observations:',log.matrix.length);
