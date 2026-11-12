// Extract the existing feature content data without executing page UI code.
const fs=require('fs'),vm=require('vm');
const html=fs.readFileSync('사용자 매뉴얼.html','utf8');
const start=html.indexOf('const FEATURE_DATA =');
const end=html.indexOf('// ── Build modal HTML',start);
if(start<0||end<0)throw Error('Feature data boundaries not found');
const data=vm.runInNewContext(html.slice(start,end)+'\nFEATURE_DATA;',{}, {timeout:2000});
function content(value,key=''){
 if(typeof value==='string')return /^(title|introduction|label|heading|desc|content|note|text|bullets)$/.test(key)?[value]:[];
 if(Array.isArray(value))return value.flatMap(v=>content(v,key));
 if(value&&typeof value==='object')return Object.entries(value).flatMap(([k,v])=>content(v,k));
 return [];
}
function pages(value){
 if(!value||typeof value!=='object')return [];
 return Object.entries(value).flatMap(([k,v])=>k==='page'&&typeof v==='string'?[v]:pages(v));
}
const entries=Object.entries(data).map(([key,value])=>({key,title:value.title,html:content(value).join('\n'),pages:[...new Set(pages(value))]}));
entries.push({key:'screw-channel-category',title:'스크류 채널 CAT1 · CAT2 선택 가이드',html:'',pages:['assets/documents/screwchannel-cat-guide/screwchannel-cat1-cat2-guide.html']});
fs.writeFileSync('src/data/feature-search.json',JSON.stringify(entries));
console.log('Indexed feature bodies:',entries.length);
