import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

def add_menu_id(match):
    full_match = match.group(0)
    section_id = match.group(1)
    if 'id="menu-' in full_match:
        return full_match
    return full_match.replace('data-section="' + section_id + '"', 'data-section="' + section_id + '" id="menu-' + section_id + '"')

content = re.sub(r'<div class="nav-item"\s+data-section="([^"]+)">', add_menu_id, content)

new_content = re.sub(
    r'(<section id="([^"]+)"[^>]*>)\s*(<h2[^>]*>.*?</h2>)',
    r'\1\n        \3\n        <div class="section-anchor" style="font-size:12px; color:#a855f7; margin-bottom:16px; font-family:monospace;">🔗 Anchor: <a href="#\2" style="color:#a855f7; text-decoration:none;">#\2</a></div>',
    content,
    flags=re.DOTALL
)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
print("Done")
