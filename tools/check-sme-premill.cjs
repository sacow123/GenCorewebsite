const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert/strict'),crypto=require('crypto'),sharp=require('sharp');
const base='assets/documents/mai-sme-premill',manifest=require('../'+base+'/source-manifest.json'),translations=require('./sme-premill-translations.json');
const hash=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const ctx={window:{}};vm.runInNewContext(fs.readFileSync(base+'/content.js','utf8'),ctx);
const data=ctx.window.SmePremillContent;
const text=html=>html.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim();
(async()=>{
  assert.equal(hash(manifest.source),manifest.sha256,'Original HTML changed');
  for(const pdf of manifest.pdfs)assert.equal(hash(pdf.source),hash(pdf.destination),'Original PDF changed');
  for(const image of manifest.images){const meta=await sharp(image.destination).metadata();assert.equal(meta.format,'webp');assert.equal(meta.width,image.width);assert.equal(meta.height,image.height);}
  for(const [index,lang]of ['ko','en','ja','es'].entries()){
    const html=data.contents[lang],visible=text(html);
    assert.equal((html.match(/<img\b/g)||[]).length,7);
    assert.equal((html.match(/data-sme-material-link=/g)||[]).length,2);
    assert(!/href="[^"]+\.pdf"/.test(html),'PDF link must navigate to material catalog');
    assert(!/@@SME_|undefined|NaN/.test(html));
    if(lang!=='ko')assert(!/[가-힣ㄱ-ㅎㅏ-ㅣ]/.test(visible),'Korean residual '+lang);
    for(const row of translations.rows)assert(visible.includes(text(row[index+1])),'Missing translated source paragraph: '+lang+' '+row[0]);
    for(const alt of translations.imageAlt)assert(html.includes('alt="'+alt[lang]+'"'),'Missing translated image alt '+lang);
    for(const reference of html.matchAll(/(?:src|href)="([^"]+)"/g)){
      assert(!/^https?:|^file:/i.test(reference[1]),'Unexpected remote or desktop asset');
      assert(fs.existsSync(path.resolve(base,decodeURIComponent(reference[1].split('#')[0]))),'Missing local asset '+reference[1]);
    }
    for(const phrase of ['26.11.##','DB_M.Ai_V10.1.X_2601030_R2','112','12','11.5','16','19'])assert(visible.includes(phrase),'Source requirement lost '+lang+' '+phrase);
  }
  for(const file of [base+'/document.js','src/scripts/mai-sme-document.js','tools/import-sme-premill.cjs'])new vm.Script(fs.readFileSync(file,'utf8'));
  for(const file of ['사용자 매뉴얼.html','src/components/sections/sec-mai-cal-premill-s-me.html']){const html=fs.readFileSync(file,'utf8');assert(html.includes('data-document-id="mai-sme-premill"'));assert(html.includes('data-language-sync'));assert(html.includes('src/scripts/mai-sme-document.js'));}
  const http=[];
  for(const pdf of manifest.pdfs){const response=await fetch('http://127.0.0.1:8080/'+pdf.destination.replaceAll('\\','/'));assert.equal(response.status,200);const bytes=Buffer.from(await response.arrayBuffer());assert.equal(bytes.subarray(0,5).toString(),'%PDF-');assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),hash(pdf.source));http.push({file:path.basename(pdf.destination),status:response.status,bytes:bytes.length});}
  fs.mkdirSync('output/verification/mai-sme-premill',{recursive:true});
  fs.writeFileSync('output/verification/mai-sme-premill/source-check.json',JSON.stringify({status:'passed',languages:['ko','en','ja','es'],images:7,materialLinks:2,archivedOriginalPdfs:http,sourceUnchanged:true},null,2));
  console.log('PASS: all source paragraphs, KO/EN/JA/ES, seven WebP images, two material-catalog links and isolated-frame language bridge.');
})().catch(e=>{console.error(e);process.exitCode=1;});
