import json, re, os, hashlib
from pathlib import Path
from xml.sax.saxutils import escape
from collections import OrderedDict
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, Image
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[3]
DATA = json.loads(Path(__file__).with_name('data.json').read_text(encoding='utf8'))
OUT = ROOT / 'output/pdf/MAI_Ti_Abutment_AbutmentBridge_260830.pdf'
OUT.parent.mkdir(parents=True, exist_ok=True)
pdfmetrics.registerFont(TTFont('Malgun', 'C:/Windows/Fonts/malgun.ttf'))
pdfmetrics.registerFont(TTFont('MalgunBold', 'C:/Windows/Fonts/malgunbd.ttf'))
pdfmetrics.registerFontFamily('Malgun',normal='Malgun',bold='MalgunBold',italic='Malgun',boldItalic='MalgunBold')
PURPLE=colors.HexColor('#7c3aed'); INK=colors.HexColor('#252235'); MUTED=colors.HexColor('#6b647a'); LINE=colors.HexColor('#ddd1f8'); PALE=colors.HexColor('#faf7ff')
W,H=A4; CW=W-84
styles={
 'body':ParagraphStyle('body',fontName='Malgun',fontSize=9.4,leading=14.8,textColor=INK,wordWrap='CJK',spaceAfter=4),
 'compact':ParagraphStyle('compact',fontName='Malgun',fontSize=9.2,leading=13.2,textColor=INK,wordWrap='CJK',spaceAfter=2),
 'small':ParagraphStyle('small',fontName='Malgun',fontSize=8,leading=12,textColor=MUTED,wordWrap='CJK'),
 'table':ParagraphStyle('table',fontName='Malgun',fontSize=8.1,leading=11.5,textColor=INK,wordWrap='CJK'),
 'heading':ParagraphStyle('heading',fontName='MalgunBold',fontSize=18,leading=25,textColor=PURPLE,wordWrap='CJK',spaceAfter=10),
 'section':ParagraphStyle('section',fontName='MalgunBold',fontSize=12,leading=17,textColor=PURPLE,spaceBefore=12,spaceAfter=9),
 'process':ParagraphStyle('process',fontName='MalgunBold',fontSize=9.6,leading=13.7,textColor=INK,wordWrap='CJK',spaceAfter=5),
 'cover':ParagraphStyle('cover',fontName='MalgunBold',fontSize=32,leading=43,textColor=PURPLE,spaceAfter=16),
}
def P(text,kind='body',raw=False):return Paragraph(text if raw else escape(str(text)),styles[kind])
def table(rows,widths,header=True):
    rows=[[P(x,'table') for x in row] for row in rows]
    t=Table(rows,colWidths=widths,repeatRows=1 if header else 0,hAlign='LEFT')
    rules=[('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),8),('RIGHTPADDING',(0,0),(-1,-1),8),('TOPPADDING',(0,0),(-1,-1),6),('BOTTOMPADDING',(0,0),(-1,-1),6),('LINEBELOW',(0,0),(-1,0),.7,LINE),('LINEBELOW',(0,1),(-1,-1),.3,LINE)]
    if header:rules += [('BACKGROUND',(0,0),(-1,0),PALE)]
    t.setStyle(TableStyle(rules));return t
def card(title,lines):
    content=[P(title,'process')]+[P('• '+line,'compact') for line in lines]
    t=Table([[content]],colWidths=[CW],hAlign='LEFT');t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),PALE),('BOX',(0,0),(-1,-1),.6,LINE),('LEFTPADDING',(0,0),(-1,-1),12),('RIGHTPADDING',(0,0),(-1,-1),12),('TOPPADDING',(0,0),(-1,-1),8),('BOTTOMPADDING',(0,0),(-1,-1),6)]))
    return [t,Spacer(1,7)]
def state(value):return {'1':'켜짐','0':'꺼짐'}.get(value,value or '-')
def tool(r,j):return next((t for t in r['tools'] if t['id']==j['p'].get('tool')),{'name':'미확인','diameter':'-'})
def fields(j):return [k[:-7] for k,v in j['p'].items() if k.endswith('_ovwren') and v=='1']
def banner(r,idx,label):
    return [P(f'M AI TEMPLATE  /  Ti  /  {idx:02d}','small'),Spacer(1,7),P(r['name'],'heading'),P(label,'section')]
def purpose(r):
    n=r['name']; out=['Ti 디스크에서 '+('어버트먼트 브릿지' if ' bridge' in n else '어버트먼트')+'를 가공하는 템플릿입니다.']
    if 'Conlog' in n:out+=['Conlog 전용 변형입니다. 내부 베이스 정삭과 평면 정삭의 활성 상태가 일반 Abutment와 다릅니다.']
    elif 'Angled-MUA' in n:out+=['Angled-MUA (Tap+F1.5) 변형입니다. 앵글 교합면의 M1.5F 정삭 공정이 켜져 있습니다.']
    elif 'ICMC' in n:out+=['Cat.13_ICMC 변형입니다. 카테고리 13 내벽 정삭 및 ICMC 내부 정삭이 켜져 있습니다.']
    elif 'EXT/INT' in n:out+=['EXT/INT 변형입니다. 인터페이스 유무에 따른 조건부 내부 가공 공정이 포함됩니다.']
    else:out+=['일반 Abutment 변형입니다. 공정별 인터페이스·영역·홀 조건에 따라 가공이 선택됩니다.']
    if '(Fast)' in n:out+=['Fast 기본 전략에 연결됩니다. 이 PDF에서는 가공 시간이나 속도 향상률을 추정하지 않습니다.']
    return out
def process_description(j,t):
    typ=j['type'];d=t.get('diameter','-')
    if typ=='abutbaseinnerfin':return f'직경 {d}mm 공구로 어버트먼트 베이스 내부를 정삭합니다.'
    if typ=='abutbasermat':return f'직경 {d}mm 공구로 어버트먼트 베이스 내부의 잔여 영역을 가공합니다.'
    if typ=='capcavouterfin':return f'직경 {d}mm 공구로 캐비티 측 외측 영역(cap)을 정삭합니다.'
    if typ=='abutouterfin' or 'Finishing abutment outside' in j['p'].get('jobname',''):return f'직경 {d}mm 공구로 어버트먼트 외측을 정삭합니다.'
    if 'Fissure' in j['p'].get('jobname',''):return f'직경 {d}mm 공구로 피셔 영역을 가공합니다.'
    return f'연결 공구 {t["name"]}를 사용하는 정삭 공정입니다.'
def footer(c,doc):
    c.setStrokeColor(LINE);c.setLineWidth(.5);c.line(42,39,W-42,39)
    c.setFont('Malgun',8);c.setFillColor(MUTED);c.drawString(42,26,'GenCore  |  M AI Ti Templates  |  DB 260830');c.drawRightString(W-42,26,str(doc.page))
    c.setFont('MalgunBold',8);c.setFillColor(PURPLE);c.drawString(42,H-28,'GenCore Technical Support Center')
story=[]
story += [Spacer(1,30),P('M AI TEMPLATE','section'),P('Ti 재료\nAbutment · Abutment Bridge'.replace('\n','<br/>'),'cover',True),P('260830 원본 DB 기반 정리본','section'),P('사용 조건 · 조정 가능 항목 · UDA · 인터페이스 · 공구'),Spacer(1,14)]
story += card('정리 기준',['최신 원본의 기본 전략과 템플릿별 덮어쓰기 값을 결합했습니다.','조정 가능 항목은 사용자 조정 허용 값이 켜진 설정만 수록했습니다.','켜짐·꺼짐은 DB 저장값입니다. 켜짐이어도 형상·카테고리·홀 조건에 따라 실제 계산은 생략될 수 있습니다.','공정명과 연결 공구명은 원본을 유지합니다. 이름이 다른 경우 실제 연결 공구를 별도로 표시합니다.'])
story += [P('수록 템플릿','section')]
for i,r in enumerate(DATA['records'],1):story.append(P(f'{i:02d}  '+r['name']))
story += [Spacer(1,12),P('Abutment Crown 계열, Pre-Mill 계열은 제외했습니다. 업데이트 기록이나 기존 사이트의 가공 기본값은 비교 기준으로 사용하지 않았습니다.','small'),Spacer(1,8),P('출처: 260830_원본 / hdNPmillstrategy.hddb, hdNPmillstrategyvariantprofile.hddb, hdTool.hddb','small')]
for idx,r in enumerate(DATA['records'],1):
    story.append(PageBreak());story+=banner(r,idx,'사용 조건')
    story += card('Ti / '+('Abutment Bridge' if ' bridge' in r['name'] else 'Abutment'),purpose(r))
    story += [P('연결 기본 전략: '+r['baseName'],'small'),P('일반 설정 (General settings)','section')]
    gl=r['globals'];rows=[['조정 항목','저장된 기본값','설명']]
    for k,label,desc in [('millincoffset','증분식 경계 옵셋','가공 경계의 추가 옵셋을 조정합니다.'),('milloffset_incangle','증분식 경계 각도','가공 경계의 추가 각도를 조정합니다.')]:
        if gl.get(k+'_ovwren')=='1':rows.append([label,gl.get(k,'-'),desc])
    story += [table(rows,[145,85,CW-230]),P('템플릿별 적용 설정','section')]
    rows=[['공정','항목','저장값']]
    for o in r['overrides']:
        if o['kind']=='Prop':rows.append([o['label'],'계산' if o['key'].endswith('##calculate') else o['key'].split('##')[-1],state(o['value']) if o['key'].endswith('##calculate') else o['value']])
    story.append(table(rows,[CW-110,55,55]));story += [Spacer(1,9),P('위 표는 공통 기본 전략에 적용된 이 템플릿의 개별 설정입니다. 사용자에게 직접 조정 가능한 항목은 다음 페이지에 따로 정리했습니다.','small')]
    story.append(PageBreak());story+=banner(r,idx,'조정 가능 항목')
    for j in r['jobs']:
        fs=fields(j)
        if not fs:continue
        p=j['p'];t=tool(r,j);lines=[process_description(j,t)]
        lines.append('연결 공구: '+t['name']+('' if 'calculate' in fs else ' / 저장된 계산 상태: '+state(p.get('calculate'))))
        for f in fs:
            val=p.get(f,'-')
            if f=='calculate':lines.append('계산: 이 공정의 실행 여부를 선택할 수 있습니다. (기본값: '+state(val)+')')
            elif f=='allowance':lines.append('여유량: 베이스 내부의 적합을 조정할 수 있습니다. (기본값: '+val+')')
            elif f=='addallowancexy':lines.append('XY 여유량: 베이스 내부의 XY 방향 적합을 조정할 수 있습니다. (기본값: '+val+')')
            elif f=='stepdown':lines.append('스텝다운: 깊이 방향 가공 간격을 조정할 수 있습니다. (기본값: '+val+')')
            else:lines.append(f+' 조정 가능 / 기본값: '+val)
        if p.get('condcalcgeo')=='geonex':lines.append('형상 조건: 해당 기준 형상이 없을 때 적용하는 조건이 저장되어 있습니다. (geonex)')
        elif p.get('condcalcgeo')=='geoex':lines.append('형상 조건: 해당 기준 형상이 있을 때 적용하는 조건이 저장되어 있습니다. (geoex)')
        story+=card(p['jobname'],lines)
    story.append(PageBreak());story+=banner(r,idx,'사용자 정의 영역 (UDA)')
    rows=[['가공 구분','카테고리','연결 공구','계산']]
    for j in r['jobs']:
        if 'uarea' not in j['type']:continue
        p=j['p'];label='잔여 가공' if j['type']=='uarearm' else '정삭'
        if 'Clip' in p.get('jobname',''):label+=' / Clip'
        if 'Retention' in p.get('jobname',''):label='Bar Retention Grove'
        if '90deg' in p.get('jobname',''):label+=' / 90deg'
        rows.append([label,p.get('categories','-'),tool(r,j)['name'],state(p.get('calculate'))])
    story.append(table(rows,[145,62,CW-257,50]));story.append(P('Implant Interfaces wall','section'))
    groups=OrderedDict()
    for j in r['jobs']:
        if j['type']!='impintwallfin':continue
        p=j['p'];key=(p.get('category','-'),tool(r,j)['name'],state(p.get('calculate')));groups.setdefault(key,[])
        side={'inner':'내벽','outer':'외벽'}.get(p.get('sideid'),p.get('sideid','-'))
        if side not in groups[key]:groups[key].append(side)
    rows=[['카테고리','벽 방향','연결 공구','계산']]+[[cat,' / '.join(sides),tn,on] for (cat,tn,on),sides in groups.items()]
    story.append(table(rows,[65,100,CW-215,50]));story+=[Spacer(1,8),P('카테고리별로 원본 공정을 묶었습니다. 같은 카테고리에 공구가 두 개 이상이면 각각 별도 공정으로 존재합니다.','small')]
    story.append(PageBreak());story+=banner(r,idx,'공구')
    story += [P('기본 사용 공구 / 조건부 사용 공구','section'),P('표시는 DB 저장 계산값을 기준으로 합니다. “활성 공정” 표시는 항상 사용한다는 뜻이 아니며, 해당 공정의 형상·영역·홀 조건을 만족해야 합니다.','small'),Spacer(1,12)]
    cells=[]
    for t in sorted(r['tools'],key=lambda t:int(t.get('number','999'))):
        jobs=[j for j in r['jobs'] if j['p'].get('tool')==t['id']];active=[j for j in jobs if j['p'].get('calculate')=='1']
        num=int(t.get('number','0'));path=ROOT/f'assets/images/sec-mai-tools/tool-list/t{num:02d}.webp'
        cell=[]
        if path.exists():
            from PIL import Image as PILImage
            with PILImage.open(path) as im:iw,ih=im.size
            cell.append(Image(str(path),width=min(80,60*iw/ih),height=min(60,80*ih/iw)))
        cell += [P(t['name'],'table'),P('직경 '+t.get('diameter','-')+'mm','small'),P('활성 공정에서 참조' if active else '비활성 공정에서만 참조','small')]
        cells.append(cell)
    grid=[cells[i:i+4]+['']*(4-len(cells[i:i+4])) for i in range(0,len(cells),4)]
    t=Table(grid,colWidths=[CW/4]*4,hAlign='LEFT');t.setStyle(TableStyle([('VALIGN',(0,0),(-1,-1),'TOP'),('BACKGROUND',(0,0),(-1,-1),PALE),('BOX',(0,0),(-1,-1),.6,LINE),('INNERGRID',(0,0),(-1,-1),.4,LINE),('LEFTPADDING',(0,0),(-1,-1),9),('RIGHTPADDING',(0,0),(-1,-1),9),('TOPPADDING',(0,0),(-1,-1),10),('BOTTOMPADDING',(0,0),(-1,-1),10)]));story.append(t)
    story += [Spacer(1,10),P('공구명 확인','section')]
    if ' bridge' in r['name']:story.append(P('M0.6Bx06 / M0.6Bx10으로 표기된 내부 공정에도 실제 연결 공구는 T13_M0.6B_L03입니다. 공정명만으로 공구 길이를 판단하지 않도록 원본 연결값을 함께 표시했습니다.'))
    else:story.append(P('공구 목록은 이 템플릿의 전체 공정에서 참조하는 공구입니다. 꺼진 공정의 공구도 포함하며, 이미지보다 DB 공구명과 직경을 기준으로 확인하세요.'))
doc=SimpleDocTemplate(str(OUT),pagesize=A4,rightMargin=42,leftMargin=42,topMargin=52,bottomMargin=52,title='M AI Ti Abutment / Abutment Bridge - DB 260830',author='GenCore',pageCompression=1)
doc.build(story,onFirstPage=footer,onLaterPages=footer)
print(OUT)
