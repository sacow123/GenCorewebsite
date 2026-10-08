"""Extract supplied Notion HTML bodies without conflating nested table/list blocks."""
from pathlib import Path
from html.parser import HTMLParser
import json, re

class ExportParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.body = False
        self.depth = 0
        self.parts, self.images = [], []
        self.title, self.intitle = '', False
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('class') == 'page-title': self.intitle = True
        if attrs.get('class') == 'page-body':
            self.body, self.depth = True, 1
            return
        if self.body:
            if tag == 'div': self.depth += 1
            if tag in ['li','p','h1','h2','h3','h4','h5','th','td','table','ul','div']: self.parts.append('\n')
            if tag == 'br': self.parts.append(' ')
            if tag == 'img': self.images.append(attrs['src'])
    def handle_endtag(self, tag):
        if tag == 'h1': self.intitle = False
        if self.body:
            if tag in ['li','p','h1','h2','h3','h4','h5','th','td','table','ul','div']: self.parts.append('\n')
            if tag == 'div':
                self.depth -= 1
                if not self.depth: self.body = False
    def handle_data(self, text):
        if self.intitle: self.title += text
        if self.body: self.parts.append(text)

root = Path('C:/Users/USER/Desktop/48de89c7-5b47-4441-8843-4b6b288e7324_ExportBlock-ab20f8f3-bc89-4bf2-97ed-7dc311706f66')
records = []
for file in sorted(root.glob('*.html')):
    if not file.name.startswith(('Pre-Mil', 'Ti_', 'Wax_', 'WAX -', 'Zirconia_')): continue
    parser = ExportParser()
    parser.feed(file.read_text(encoding='utf-8'))
    lines = [re.sub(r'\s+', ' ', line).strip() for line in ''.join(parser.parts).split('\n')]
    records.append(dict(title=parser.title, source=file.name, lines=[line for line in lines if line], images=parser.images))
Path('tools/mai-batch-source.json').write_text(json.dumps(records, ensure_ascii=False, indent=2), encoding='utf-8')
print('Extracted', len(records), 'records.')
