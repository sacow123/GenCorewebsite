const families = [
 ['zirconia','Zirconia 계열',[15,19,4,20,18,17]],
 ['glass','Glass 계열',[1,6,7,2,9]],
 ['metal','Metal 계열',[3,8,16,10,11,12,13,5]],
 ['premill','Premill blank 계열',[21,14,22,23]]
];
module.exports = function groupMaterials(html) {
 const blocks = new Map();
 for(const match of html.matchAll(/<details class="mai-blank-material" data-material="(\d+)">/g)) {
  const start=match.index;let depth=0,end;
  const tags=/<details\b[^>]*>|<\/details>/g;tags.lastIndex=start;
  for(let tag;tag=tags.exec(html);){depth+=tag[0].startsWith('</')?-1:1;if(!depth){end=tags.lastIndex;break;}}
  if(!end)throw Error('Unclosed material '+match[1]);
  blocks.set(Number(match[1]),html.slice(start,end));
 }
 if(blocks.size!==23)throw Error('Expected 23 materials, found '+blocks.size);
 const start=html.indexOf('<div class="mai-blank-materials">');
 const tags=/<div\b[^>]*>|<\/div>/g;tags.lastIndex=start;let depth=0,end;
 for(let tag;tag=tags.exec(html);){depth+=tag[0].startsWith('</')?-1:1;if(!depth){end=tags.lastIndex;break;}}
 const grouped='<div class="mai-blank-materials">\n'+families.map(([key,label,ids])=>'<details class="mai-blank-family" data-family="'+key+'"><summary data-i18n="mai-blank-family-'+key+'">'+label+'</summary><div class="mai-blank-family-content">\n'+ids.map(id=>blocks.get(id)).join('\n')+'\n</div></details>').join('\n')+'\n</div>';
 return html.slice(0,start)+grouped+html.slice(end);
};
if(require.main===module){
 const fs=require('fs'),file='src/components/sections/sec-mai-hd-blank.html';
 const html=module.exports(fs.readFileSync(file,'utf8'));fs.writeFileSync(file,html);
 const page='사용자 매뉴얼.html',before=fs.readFileSync(page,'utf8'),start=before.indexOf('<section id="sec-mai-hd-blank"'),end=before.indexOf('</section>',start)+10;
 fs.writeFileSync(page,before.slice(0,start)+html.trim()+before.slice(end));
 console.log('Grouped all 23 materials into 4 collapsed families.');
}
