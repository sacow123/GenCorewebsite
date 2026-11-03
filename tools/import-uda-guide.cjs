const fs=require('fs'),path=require('path'),sharp=require('sharp');
const source='C:/Users/USER/Desktop/b39bcc2e-dd12-44c9-a48e-771c2d5c89e4_ExportBlock-e677e84e-210a-4b14-a9d4-d711d0c0d905';
const groups=JSON.parse(fs.readFileSync('tmp/uda-groups.json','utf8'));
const ja=[
'1. ユーザー定義領域の目的\nユーザー定義領域（UDA）は、通常の荒加工・残材加工・仕上げ方向では加工できない領域に、個別の挿入方向を設定する機能です。',
'フルアーチのような補綴物では、どの方向に傾けても未加工領域が発生します。UDAを使うと、既存の加工方向を維持したまま、別の加工方向を追加できます。',
'2. UDAの挿入方向の設定と確認方法',
'「More」アイコンをクリックし、「User-def. area」アイコンをクリックします。',
'「Show undercut areas」をクリックすると、STL上に未加工領域（アンダーカット）が表示されます。',
'未加工領域を含むように3点を指定します。点の移動や追加でUDAを調整できます。',
'画像のようにUDAを設定すると、Cクランプが画面右上に表示された角度に傾き、現在の視点から加工します。\n※注意：MAIのZ軸は30度を超えないでください（画像の赤い丸）。\n※注意：MillFixのZ軸は22度を超えないでください（画像の赤い丸）。',
'紫色の領域（UDA）は、指定した傾斜角度で加工されます。',
'3. 各カテゴリー番号の役割\n90度加工には、カテゴリー1/3/5ではなく2/4/6を設定します。以下の例で確認します。',
'STLの前面には多くのアンダーカットがあります。',
'このアンダーカットを0度の視点から加工するには大きく傾ける必要があるため、素材の開放側から90度加工を行います。',
'スピンドルはこの視点から加工します。',
'例として前歯部の一部を選択します（Object Feature＝カテゴリー1）。',
'最終仕上げ工程の工具経路は、左右に動く水平な直線です。',
'一方、UDAの仕上げ工具経路は上下方向や曲線になります。このため、UDAを設定した部分だけ表面の筋の方向が変わり、滑らかな表面になりにくくなります。',
'カテゴリー2では、UDAと仕上げ工程の工具経路が同じ左右方向になるため、カテゴリー1より滑らかな表面が得られます。',
'カテゴリー別の使用工具一覧。\n4. UDAの推奨設定：上部構造（Over Structure）\n上部構造は未加工領域が特に多い補綴物です。STLを素材内に収める必要があるため、特に頬側に未加工領域が発生します。',
'前歯部の歯間部は90度加工が可能です。正中線から犬歯の近心面までUDAを設定することを推奨します（カテゴリー2/4/6から選択）。\nこの範囲外では90度加工は有効ではありません。他の補綴物も同様です。',
'その他の部分では、0度または180度から少しずつ角度を調整してUDAを設定します。Z軸の傾斜は30度以内にしてください（カテゴリー1/3/5から選択）。',
'UDA設定後',
'設定後のUDA工具経路。\n5. UDAの活用：Tooth pocketの設定',
'hyperDENTでTooth pocketを自動または手動で設定しても、うまく領域を指定できない場合があります。',
'まずUDAで領域を設定し、その後UDAの種類を「Tooth pocket」に変更することを推奨します。',
'UDA機能でTooth pocket領域を設定しているところです。',
'設定したUDAを選択し、右クリックして「Change type of margin line」を選び、種類を「Tooth pocket」に変更します。',
'Copingの設定',
'デンチャーでもマージンライン（hyperDENTではCoping）の自動・手動設定は難しく、画像で示された広い領域全体を設定する必要もありません。',
'画像で示した部分だけにマージンラインを設定します。',
'同じ方法でマージンラインの種類を変更します。今回はUDAを「Coping（＝マージンライン）」に変更します。\n※デンチャーの詳細は「Denture base/teeth in hyperDENT」の動画を参照してください。'
];
const heading={
  0:['1. 사용자 정의 영역의 목적','1. Purpose of User-defined Areas'],
  2:['2. 사용자 정의 영역 삽입 방향 설정 및 확인 방법','2. Setting and Checking the UDA Insertion Direction'],
  8:['3. 각 카테고리의 역할','3. The Role of Each Category'],
  16:['4. 사용자 정의 영역 권장 설정 방법 — 상부 구조물','4. Recommended UDA Settings — Over Structure'],
  20:['5. UDA의 활용 — Tooth pocket 설정','5. UDA Utilization — Setting Tooth Pocket'],
  25:['Coping 설정','Setting Coping']
};
const dict={ko:{},en:{},ja:{}};let count=0,image=0;
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const html=s=>s.split('\n').map(line=>/^※/.test(line)?'<strong style="color:#dc2626">'+esc(line)+'</strong>':esc(line)).join('<br>');
(async()=>{
  const dest='assets/images/hyperdent/user-defined-area';fs.mkdirSync(dest,{recursive:true});
  const items=[];
  for(const g of groups){
    if(g.image){const filename='step-'+String(++image).padStart(2,'0')+'.webp';const src=path.join(source,decodeURIComponent(g.image));await sharp(src).webp({quality:92}).toFile(path.join(dest,filename));items.push({img:dest+'/'+filename,label:''});continue;}
    const i=count++,key='uda-guide-text-'+i;
    const lines=g.text.filter(line=>!/^\d+\./.test(line));
    let ko=lines.filter(line=>/[가-힣]/.test(line)).join('\n');let en=lines.filter(line=>!/[가-힣]/.test(line)).join('\n');
    if(heading[i]){if(i===25){ko=heading[i][0];en=heading[i][1];}else if(i===16||i===20){ko+='\n'+heading[i][0];en+='\n'+heading[i][1];}else{ko=heading[i][0]+(ko?'\n'+ko:'');en=heading[i][1]+(en?'\n'+en:'');}}
    dict.ko[key]=html(ko);dict.en[key]=html(en);dict.ja[key]=html(ja[i]);
    let label='<span data-i18n="'+key+'">'+dict.ko[key]+'</span>';
    if(i===28)label+='<p><a href="https://app.notion.com/p/Denture-base-teeth-in-hyperDENT-2b2cfb3e905880cea5c8eecb654913c7?pvs=21" target="_blank" rel="noopener">Denture base/teeth in hyperDENT</a></p>';
    items.push({label});
  }
  for(const [lang,title] of Object.entries({ko:'사용자 정의 영역(UDA) 설정 방법',en:'How to Define User-defined Areas (UDA)',ja:'ユーザー定義領域（UDA）の設定方法'}))dict[lang]['uda-guide-title']=title;
  if(count!==ja.length)throw Error('Translation count mismatch');
  const data={title:'<span data-i18n="uda-guide-title">'+dict.ko['uda-guide-title']+'</span>',steps:[{items}]};
  const file='사용자 매뉴얼.html';let page=fs.readFileSync(file,'utf8');
  const marker="    FEATURE_DATA['interface-manual-category']";
  if(!page.includes("FEATURE_DATA['user-defined-area-guide']"))page=page.replace(marker,"    FEATURE_DATA['user-defined-area-guide'] = "+JSON.stringify(data)+";\n"+marker);
  const button='<button type="button" class="feature-card" data-feature-key="user-defined-area-guide" style="background:var(--bg-color,#fff);border:1px solid #e5e7eb;border-radius:12px;padding:20px;cursor:pointer;display:flex;align-items:center;gap:14px;text-align:left;font:inherit;"><span aria-hidden="true" style="font-size:32px">✏️</span><span data-i18n="uda-guide-title" style="font-size:16px;font-weight:700">'+dict.ko['uda-guide-title']+'</span></button>';
  if(!page.includes('data-feature-key="user-defined-area-guide"'))page=page.replace('<div class="feature-grid-container" id="mf-feature-grid">','<div class="feature-grid-container" id="mf-feature-grid">\n'+button);
  fs.writeFileSync(file,page);
  fs.appendFileSync('src/scripts/i18n.js','\n// Imported UDA guide (KO/EN source, JA translation).\n'+Object.entries(dict).map(([lang,values])=>'Object.assign(TRANSLATIONS.'+lang+', '+JSON.stringify(values)+');').join('\n')+'\n');
  fs.writeFileSync('tmp/uda-guide-import-report.json',JSON.stringify({images:image,textBlocks:count,dictionaries:dict},null,2));
  console.log({images:image,textBlocks:count});
})();
