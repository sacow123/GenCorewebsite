const fs = require('fs');

try {
  let text = fs.readFileSync('index.html', 'utf8');

  // Look for if (step.youtube) { and replace with logic for youtubes
  // Let's use a regex that is insensitive to whitespace
  const pattern = /if\s*\(\s*step\.youtube\s*\)\s*\{\s*let\s+embedUrl\s*=\s*step\.youtube;/;

  if (pattern.test(text)) {
    const replacement = `if (step.youtubes && step.youtubes.length > 0) {
          html += \`<div style="display:grid; grid-template-columns: repeat(\${step.youtubes.length > 1 ? 2 : 1}, 1fr); gap:16px; margin-bottom:24px;">\`;
          for (let url of step.youtubes) {
            let embedUrl = url;
            if (embedUrl.includes('youtu.be/')) {
              embedUrl = embedUrl.replace('youtu.be/', 'www.youtube.com/embed/');
            } else if (embedUrl.includes('watch?v=')) {
              embedUrl = embedUrl.replace('watch?v=', 'embed/').replace('youtube.com', 'www.youtube.com').split('&')[0];
            }
            html += \`<div style="position:relative; padding-bottom:56.25%; height:0; overflow:hidden; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.1);">
              <iframe src="\${embedUrl}" style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>\`;
          }
          html += \`</div>\`;
        } else if (step.youtube) {
          let embedUrl = step.youtube;`;

    text = text.replace(pattern, replacement);
    fs.writeFileSync('index.html', text, 'utf8');
    console.log("SUCCESS");
  } else {
    console.log("PATTERN NOT FOUND!");
  }
} catch (err) {
  console.error(err);
}
