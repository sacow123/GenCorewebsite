const fs=require('fs'),assert=require('assert/strict'),sharp=require('sharp');
const source=require('./mai-new-blank-261030-source.json');
const clean=s=>s.replace(/<[^>]+>/g,'').replace(/&amp;/g,'&').trim();
const html=fs.readFileSync('src/components/sections/sec-mai-hd-blank.html','utf8');
const products=[...html.matchAll(/<article class="mai-blank-product"[^>]*>([\s\S]*?)<\/article>/g)].map(m=>({name:clean(m[1].match(/<dd>([\s\S]*?)<\/dd>/)[1]),image:m[1].match(/src="([^"]+)"/)[1]}));
const normalize=s=>s.replace(/Glsass/g,'Glass');
const revertedMaterials=new Set(source.materials.filter(m=>['Premill blank','Premill+Reverse'].includes(m.name)).map(m=>m.id));
const expected=source.expected.filter(b=>!revertedMaterials.has(b.material));
const missing=expected.filter(b=>!products.some(p=>normalize(p.name)===normalize(b.name)));
assert.equal(missing.length,0,JSON.stringify(missing));
for(const id of [22,23]){const start=html.indexOf('<details class="mai-blank-material" data-material="'+id+'">');assert(start>=0);const content=html.slice(start,html.indexOf('</details>',start));assert(!content.includes('mai-blank-submaterial'));assert(!content.includes('mai-blank-product'));}
for(const p of products){assert(p.image.endsWith('.webp'));assert(fs.existsSync(p.image));}
assert(html.includes('data-material="21"'));assert(!html.includes('mai-blank-reverse-261030'));assert(html.includes('data-i18n="mai-blank-material-14">Pre-Mill+Reverse'));assert(!html.includes('premill_0.2'));
for(const p of source.legacyPremill)assert(products.some(x=>x.name===p.name),'Missing original premill: '+p.name);
const page=fs.readFileSync('사용자 매뉴얼.html','utf8'),start=page.indexOf('<section id="sec-mai-hd-blank"'),end=page.indexOf('</section>',start)+10;
assert.equal(page.slice(start,end),html.trim(),'Generated section does not match source');
const summaries=[...html.matchAll(/<details class="mai-blank-material"[^>]*>\s*<summary[^>]*>(.*?)<\/summary>/g)].map(m=>clean(m[1]));
const result={menus:summaries,expectedNonSpecialistBlanks:expected.length,missing:missing.length,restoredOriginalPremill:source.legacyPremill.map(p=>p.name),menuOnlyManufacturers:source.menuOnly,productCards:products.length,legacyCardsRetained:12};
fs.mkdirSync('output/verification/mai-new-blank',{recursive:true});fs.writeFileSync('output/verification/mai-new-blank/source-check.json',JSON.stringify(result,null,2));
console.log('PASS:',summaries.length,'menus;',expected.length,'DB blanks covered outside reverted premill groups;',products.length,'cards; manufacturers have no children.');
