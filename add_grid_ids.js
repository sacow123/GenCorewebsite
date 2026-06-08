const fs = require('fs');

try {
  let text = fs.readFileSync('index.html', 'utf8');

  // Replace the first feature-grid-container (M AI features)
  // To be safe, we can just find them and replace.
  // The first one is around line 623.
  const firstIndex = text.indexOf('<div class="feature-grid-container">');
  if (firstIndex !== -1) {
    text = text.substring(0, firstIndex) + '<div class="feature-grid-container" id="mai-feature-grid">' + text.substring(firstIndex + 36);
  }

  // The second one is around line 4571.
  const secondIndex = text.indexOf('<div class="feature-grid-container">');
  if (secondIndex !== -1) {
    text = text.substring(0, secondIndex) + '<div class="feature-grid-container" id="mf-feature-grid">' + text.substring(secondIndex + 36);
  }

  fs.writeFileSync('index.html', text, 'utf8');
  console.log("Added IDs to features grids!");
} catch (err) {
  console.error(err);
}
