const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// The modal text logic is here:
// 1. For bullet points:
html = html.replace(
  /'<div style="margin-bottom: 8px; color: #4b5563; padding-left: 14px; position: relative;"><span style="position: absolute; left: 0; top: 0;">•<\/span>' \+ line \+ '<\/div>'/g,
  "'<div style=\"margin-bottom: 8px; font-weight: 700; color: #4b5563; padding-left: 14px; position: relative;\"><span style=\"position: absolute; left: 0; top: 0;\">•</span>' + line + '</div>'"
);

// 2. For the normal h5 lines that I replaced with div:
html = html.replace(
  /'<div style="margin: 16px 0 8px 0; font-size: 14px; font-weight: normal; color: #4b5563;">' \+ line \+ '<\/div>'/g,
  "'<div style=\"margin: 16px 0 8px 0; font-size: 14px; font-weight: 700; color: #4b5563;\">' + line + '</div>'"
);

// 3. For the parts with colon (:)
html = html.replace(
  /'<div style="margin-bottom: 8px; display: flex; gap: 8px;"><span style="width: 6px; height: 6px; background: #a855f7; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"><\/span><span><strong>' \+ parts\[0\] \+ ':<\/strong> <span style="color: #d946ef; font-style: italic;">' \+ parts\.slice\(1\)\.join\(':'\) \+ '<\/span><\/span><\/div>'/g,
  "'<div style=\"margin-bottom: 8px; font-weight: 700; display: flex; gap: 8px;\"><span style=\"width: 6px; height: 6px; background: #a855f7; border-radius: 50%; margin-top: 8px; flex-shrink: 0;\"></span><span>' + parts[0] + ': <span style=\"color: #d946ef; font-style: italic;\">' + parts.slice(1).join(':') + '</span></span></div>'"
);

// If the regex replacement for colon failed because I removed <strong> earlier, try the updated one:
html = html.replace(
  /'<div style="margin-bottom: 8px; display: flex; gap: 8px;"><span style="width: 6px; height: 6px; background: #a855f7; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"><\/span><span>' \+ parts\[0\] \+ ': <span style="color: #d946ef; font-style: italic;">' \+ parts\.slice\(1\)\.join\(':'\) \+ '<\/span><\/span><\/div>'/g,
  "'<div style=\"margin-bottom: 8px; font-weight: 700; display: flex; gap: 8px;\"><span style=\"width: 6px; height: 6px; background: #a855f7; border-radius: 50%; margin-top: 8px; flex-shrink: 0;\"></span><span>' + parts[0] + ': <span style=\"color: #d946ef; font-style: italic;\">' + parts.slice(1).join(':') + '</span></span></div>'"
);


fs.writeFileSync('index.html', html, 'utf8');
console.log('Fixed bolding to true for all');
