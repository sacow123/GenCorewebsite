const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const input = 'C:/Users/USER/.codex/attachments/26b118fe-de2e-465a-adaf-253f91e3ec6f/붙여넣은 텍스트.txt';
const raw = fs.readFileSync(input, 'utf8').replace(/^\uFEFF/, '');
// Parse Excel TSV, retaining quoted cell line breaks and original spelling.
const rows=[]; let row=[], cell='', quoted=false;
for(let i=0;i<raw.length;i++) {
  const c=raw[i];
  if(c==='"') { if(quoted && raw[i+1]==='"'){cell+='"';i++;} else quoted=!quoted; }
  else if(!quoted && (c==='\t'||c==='\n')) {row.push(cell.replace(/\r$/, ''));cell='';if(c==='\n'){rows.push(row);row=[];}}
  else cell+=c;
}
if(cell||row.length){row.push(cell);rows.push(row);}
const groups=[];
for(const r of rows){
  if(/series/i.test(r[0]||'') && r[0]!=='Series') groups.push({name:r[0],rows:[]});
  if(groups.length && r.some(x=>x.trim())) groups.at(-1).rows.push(r);
}
const esc=s=>String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const widths=[180,240,430,180,80,220,820], xs=[40];
for(const w of widths)xs.push(xs.at(-1)+w);
const W=xs.at(-1)+40;
function wrap(s,w){return String(s||'').split('\n').flatMap(line=>{
  if(line.length<=w)return [line];
  const out=[];let rest=line;
  while(rest.length>w){let at=rest.lastIndexOf(' ',w);if(at<1)at=w;out.push(rest.slice(0,at));rest=rest.slice(at+(rest[at]===' '?1:0));}
  out.push(rest);return out;
});}
function txt(s,x,y,size=23,color='#172e50',weight=400){return `<text x="${x}" y="${y}" font-family="Arial, sans-serif" font-size="${size}" fill="${color}" font-weight="${weight}">${esc(s)}</text>`;}
async function render(batch,part){
 let y=250, body='';
 for(const g of batch){
  body+=`<rect x="40" y="${y}" width="${W-80}" height="48" fill="#e4effa"/>`+txt(g.name,56,y+33,26,'#074d82',700);y+=48;
  for(const r of g.rows){
   const vals=[r[0],r[2],r[3],r[4],r[5],r[7],r[8]];
   const lines=vals.map((v,i)=>wrap(v,Math.floor((widths[i]-26)/(i===6?12.4:12))));
   const h=Math.max(56, ...lines.map(l=>l.length*30+24));
   body+=`<rect x="40" y="${y}" width="${W-80}" height="${h}" fill="${g.rows.indexOf(r)%2?'#f5f8fc':'white'}"/>`;
   for(let i=0;i<7;i++){body+=`<path d="M${xs[i]} ${y}v${h}" stroke="#d0dce8"/>`;lines[i].forEach((l,k)=>body+=txt(l,xs[i]+13,y+34+k*30,i===6?22:23));}
   body+=`<path d="M40 ${y+h}H${W-40}" stroke="#d0dce8"/>`;y+=h;
  }y+=20;
 }
 const H=y+25;
 let head=txt('Medentika premilled blanks',40,67,44,'#10294a',700)+txt('for S ME Premill jig',40,110,27);
 head+=`<rect x="40" y="145" width="${W-80}" height="105" fill="#07558c"/>`;
 head+=txt('Series',56,210,25,'white',700)+txt('Compatibled Implant System by Catalog',xs[1]+13,182,25,'white',700)+txt('Titanium',xs[5]+13,182,25,'white',700)+txt('Medentika brochure',xs[5]+13,225,22,'white',700)+txt('GenCore',xs[6]+13,225,25,'white',700);
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}"><rect width="100%" height="100%" fill="white"/>${head}${body}</svg>`;
 const out=path.resolve('output/medentika-table');fs.mkdirSync(out,{recursive:true});
 const file=path.join(out,`medentika-table-${part}.png`);
 await sharp(Buffer.from(svg)).png().toFile(file);console.log(JSON.stringify({file,width:W,height:H,series:batch.map(g=>g.name)}));
}
(async()=>{for(let i=0;i<3;i++)await render(groups.slice(i*9,(i+1)*9),i+1);console.log('Series: '+groups.length);})();
