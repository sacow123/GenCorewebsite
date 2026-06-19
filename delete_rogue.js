const fs = require('fs');
let c = fs.readFileSync('index.html', 'utf8');

const startMarker = '<!-- 배치 2: 파일/조작 관련 -->';
const startIdx = c.indexOf(startMarker);

if (startIdx > -1) {
    const endScriptIdx = c.indexOf('</script>', startIdx);
    if (endScriptIdx > -1) {
        // Find the next </div> or whatever closes the section if we need to.
        // Wait, the rogue block is just injected right inside <div class="content-card">.
        // Let's delete up to </script> + 9
        const endIdx = endScriptIdx + 9;
        const toDelete = c.substring(startIdx, endIdx);
        c = c.replace(toDelete, '');
        fs.writeFileSync('index.html', c);
        console.log('Successfully deleted the rogue block.');
    } else {
        console.log('Could not find end of script.');
    }
} else {
    console.log('Could not find start marker.');
}
