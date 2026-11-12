// Update only the M AI material section from the 261030 DB snapshot.
const fs=require('fs'),path=require('path'),sharp=require('sharp');
const source=require('./mai-new-blank-261030-source.json');
const component='src/components/sections/sec-mai-hd-blank.html';
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function groupRange(html,id){const marker='<details class="mai-blank-material" data-material="'+id+'">',start=html.indexOf(marker);if(start<0)return null;const tags=/<details\b[^>]*>|<\/details>/g;tags.lastIndex=start;let depth=0,m;while(m=tags.exec(html)){depth+=m[0].startsWith('</')?-1:1;if(!depth)return {start,end:tags.lastIndex,html:html.slice(start,tags.lastIndex)};}throw Error('Unbalanced material '+id);}
function setGroup(html,id,value){const r=groupRange(html,id);if(!r)throw Error('Missing group '+id);return html.slice(0,r.start)+value+html.slice(r.end);}
function insertGroup(html,id,anchor,after,content){if(groupRange(html,id))return setGroup(html,id,content);const r=groupRange(html,anchor);if(!r)throw Error('Missing anchor');const at=after?r.end:r.start;return html.slice(0,at)+'\n'+content+'\n'+html.slice(at);}
const fields=[['name','mai-blank-field-name','Name'],['geometry','mai-blank-field-geometry','Blank geometry'],['material','mai-blank-field-material','Material'],['color','mai-blank-field-color','Color'],['height','mai-blank-field-height','Height']];
const product=p=>'<article class="mai-blank-product" data-source-blank-id="'+p.id+'"><img loading="lazy" src="'+p.image+'" alt="'+escape(p.name)+'" width="'+p.width+'" height="'+p.imageHeight+'"><dl>'+fields.map(([field,key,label])=>'<dt data-i18n="'+key+'">'+label+'</dt><dd>'+escape(p[field])+(field==='height'?' mm':'')+'</dd>').join('')+'</dl></article>';
const submaterial=(key,label,swatch,products)=>'<details class="mai-blank-submaterial"><summary><span class="mai-blank-swatch '+swatch+'" aria-hidden="true"></span><span data-i18n="'+key+'">'+label+'</span></summary><div class="mai-blank-submaterial-content"><div class="mai-blank-product-grid" style="--product-columns:3;">'+products.map(product).join('')+'</div></div></details>';
const material=(id,label,content)=>'<details class="mai-blank-material" data-material="'+id+'"><summary data-i18n="mai-blank-material-'+id+'">'+label+'</summary>'+(content?'<div class="mai-blank-material-content">'+content+'</div>':'')+'</details>';
(async()=>{
 const output='assets/images/mai-hyperdent-materials';fs.mkdirSync(output,{recursive:true});
 const products=[];
 for(const p of [...source.selected.filter(p=>!['Premill blank','Premill+Reverse'].includes(p.material)),...source.legacyPremill]){const slug=(p.material+'-'+p.name).toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');const image=output+'/'+(p.root?'260830':'261030')+'-'+slug+'.webp';const original=path.join(p.root||source.root,p.sourceImage);if(path.extname(original).toLowerCase()==='.webp')fs.copyFileSync(original,image);else await sharp(original).webp({quality:90}).toFile(image);const m=await sharp(image).metadata();products.push({...p,image,width:m.width,imageHeight:m.height});}
 const get=material=>products.filter(p=>p.material===material).sort((a,b)=>a.name.localeCompare(b.name,'en',{numeric:true}));
 let html=fs.readFileSync(component,'utf8');
 // Restore original D10/D12/D14 blanks to their correct separate menus.
 html=setGroup(html,14,material(14,'Pre-Mill+Reverse',submaterial('mai-blank-submaterial-14-1','Metal','metal',get('Pre-Mill+Reverse'))));
 html=insertGroup(html,21,14,false,material(21,'Premill blank',submaterial('mai-blank-submaterial-21-1','Metal','metal',get('Premill blank'))));
 let dry=groupRange(html,4).html;
 dry=dry.replace(/<article class="mai-blank-product"[^>]*>[\s\S]*?<\/article>/,product(get('Amber_Dry Block')[0]));
 html=setGroup(html,4,dry);
 html=insertGroup(html,20,4,true,material(20,'Amber_Dry Disk',submaterial('mai-blank-submaterial-20-1','Dry mill','dry',get('Amber_Dry Disk'))));
 html=insertGroup(html,22,14,true,material(22,'Medentika premilled blanks',''));
 html=insertGroup(html,23,22,true,material(23,'Straumann premilled blanks',''));
 html=require('./group-mai-blank-materials.cjs')(html);
 fs.writeFileSync(component,html);
 const page='사용자 매뉴얼.html',before=fs.readFileSync(page,'utf8'),start=before.indexOf('<section id="sec-mai-hd-blank"'),end=before.indexOf('</section>',start)+10;
 if(start<0||end<10)throw Error('Missing material section in user manual');
 fs.writeFileSync(page,before.slice(0,start)+html.trim()+before.slice(end));
 fs.mkdirSync('output/verification/mai-new-blank',{recursive:true});fs.writeFileSync('output/verification/mai-new-blank/products-added.json',JSON.stringify(products,null,2));
 console.log('Restored 3 plain premill and 3 reverse blanks to separate menus. Other material additions retained.');
})().catch(e=>{console.error(e);process.exitCode=1;});
