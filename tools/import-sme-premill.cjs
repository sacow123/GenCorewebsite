// Import the supplied S ME export without changing the original files.
const fs=require('fs'),path=require('path'),sharp=require('sharp'),crypto=require('crypto');
const translations=require('./sme-premill-translations.json');
const directory=process.argv[2]||'C:/Users/USER/Desktop/ea54433e-351d-4a87-9010-75418932bbf9_ExportBlock-3903f74a-434c-4edb-bfcf-4e2bba139b4f';
const sourceName=fs.readdirSync(directory).find(n=>n.startsWith('How to use the S ME premill jig')&&n.endsWith('.html'));
if(!sourceName)throw Error('Missing S ME source HTML');
const original=fs.readFileSync(path.join(directory,sourceName),'utf8');
const docDir='assets/documents/mai-sme-premill',imageDir='assets/images/mai-sme-premill';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const norm=s=>s.trim().replace(/\s+/g,' ');
(async()=>{
  fs.mkdirSync(docDir,{recursive:true});fs.mkdirSync(imageDir,{recursive:true});
  const start=original.indexOf('<div class="page-body">'),end=original.lastIndexOf('</div></article>');
  if(start<0||end<0)throw Error('Missing source body');
  let body=original.slice(start,end+6).replace(/<img([^>]*?)\/>/g,'<img$1>');
  const images=[...new Set([...body.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m=>m[1]))];
  if(images.length!==7)throw Error('Expected seven images');
  const manifest={source:path.join(directory,sourceName),sha256:crypto.createHash('sha256').update(original).digest('hex'),images:[],pdfs:[]};
  for(const [i,reference]of images.entries()){
    const source=path.join(directory,decodeURIComponent(reference)),destination=imageDir+'/step-'+String(i+1).padStart(2,'0')+'.webp';
    const metadata=await sharp(source).metadata();
    await sharp(source).webp({quality:94}).toFile(destination);
    body=body.split('"'+reference+'"').join('"../../images/mai-sme-premill/'+path.basename(destination)+'"');
    const src='../../images/mai-sme-premill/'+path.basename(destination);
    body=body.replace(new RegExp('<img([^>]*src="'+src.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'"[^>]*)>'),'<img$1 width="'+metadata.width+'" height="'+metadata.height+'" loading="lazy" decoding="async" data-sme-image="'+i+'" alt="@@SME_ALT_'+i+'@@">');
    manifest.images.push({source,destination,width:metadata.width,height:metadata.height});
  }
  for(const m of [...body.matchAll(/href="([^"]+\.pdf)"/gi)]){
    const name=decodeURIComponent(m[1]),destination=path.join(docDir,path.basename(name));
    fs.copyFileSync(path.join(directory,name),destination);
    const linkIndex=manifest.pdfs.length;
    body=body.replace('href="'+m[1]+'"','href="../../../%EC%82%AC%EC%9A%A9%EC%9E%90%20%EB%A7%A4%EB%89%B4%EC%96%BC.html#sec-mai-hd-premill-brands" target="_parent" data-sme-material-link="'+linkIndex+'"');
    body=body.replace(new RegExp('(<a[^>]+data-sme-material-link="'+linkIndex+'"[^>]*>)[^<]*</a>'),'$1@@SME_MATERIAL_'+linkIndex+'@@</a>');
    manifest.pdfs.push({source:path.join(directory,name),destination});
  }
  if(manifest.pdfs.length!==2)throw Error('Expected two PDF attachments');
  const jig='Operate the V1.2 Premill calibration with selecting the <em><strong>Jig No. 10. </strong></em>';
  if(!body.includes(jig))throw Error('Missing jig-number instruction');
  body=body.replace(jig,'@@SME_JIG_STEP@@').replace(/<span class="icon" data-emoji="([^"]+)"><\/span>/g,'<span class="icon" aria-hidden="true">$1</span>');
  const contents={};
  for(const [index,lang]of ['ko','en','ja','es'].entries()){
    const lookup=new Map(translations.rows.map(row=>[norm(row[0]),row[index+1]]));
    let localized=body.replace(/>([^<>]+)</g,(all,text)=>{
      const source=norm(text);
      if(!source||/^@@SME_/.test(source)||/\.pdf$/.test(source)||/^[🔔💡]+$/u.test(source))return all;
      const value=lookup.get(source);if(!value)throw Error('Untranslated source text: '+source);
      return '>'+esc(value)+'<';
    });
    localized=localized.replace('@@SME_JIG_STEP@@',translations.jigStep[lang]);
    const versionRow=/(<ul[^>]*>\s*<li[^>]*>[^<]*DB_M\.Ai_V10\.1\.X_2601030_R2[^<]*<\/li>\s*<\/ul>)/;
    if(!versionRow.test(localized))throw Error('Missing Dbconfig requirement row');
    localized=localized.replace(versionRow, '$1<ul class="bulleted-list"><li style="list-style-type:disc">'+esc(translations.fixtureRequirement[lang])+'</li></ul>');
    for(const i of translations.materialLinks.keys())localized=localized.replace('@@SME_MATERIAL_'+i+'@@',esc(translations.materialLinks[i][lang]));
    if(lang!=='ko')localized=localized.replaceAll('step-03.webp','step-03-international.webp');
    for(const i of images.keys())localized=localized.replace('@@SME_ALT_'+i+'@@',esc(translations.imageAlt[i][lang]));
    if(/@@SME_/.test(localized))throw Error('Unresolved content marker');
    contents[lang]='<h3>'+esc(translations.title[lang])+'</h3>'+localized;
  }
  fs.writeFileSync(docDir+'/content.js','// Generated with tools/import-sme-premill.cjs.\nwindow.SmePremillContent = '+JSON.stringify({title:translations.title,contents},null,2)+';\n');
  let head=original.match(/<head>[\s\S]*?<\/head>/)[0].replace(/<title>[\s\S]*?<\/title>/,'<title>'+esc(translations.title.ko)+'</title>').replace(/<style>@import[^<]*<\/style>/g,'');
  head=head.replace('<head>','<head>'+"<script data-sme-document-base>if(!location.pathname.endsWith('/')&&!/\\.html$/i.test(location.pathname)){const base=document.createElement('base');base.href=location.pathname+'/';document.head.appendChild(base);}</script>");
  head=head.replace('</head>',`<meta name="viewport" content="width=device-width,initial-scale=1"><link rel="stylesheet" href="document.css"><script src="content.js" defer></script><script src="document.js" defer></script></head>`);
  fs.writeFileSync(docDir+'/index.html','<!DOCTYPE html><html lang="ko">'+head+'<body><article id="sme-content" class="page sans mai-ui2-import">'+contents.ko+'</article></body></html>');
  fs.writeFileSync(docDir+'/source-manifest.json',JSON.stringify(manifest,null,2));
  console.log('Imported seven WebP images, two original PDFs and KO/EN/JA/ES content.');
})().catch(e=>{console.error(e);process.exitCode=1;});
