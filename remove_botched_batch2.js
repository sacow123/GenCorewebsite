const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

const wrongStart = c.indexOf('<!-- 배치 2: 좌측 영역 (File / B축) -->');
if(wrongStart > -1) {
    const wrongEnd = c.indexOf('</script>', wrongStart) + 9;
    if(wrongEnd > -1) {
        c = c.substring(0, wrongStart) + c.substring(wrongEnd);
        fs.writeFileSync('index.html', c);
        console.log('Removed the botched batch 2 injection.');
    }
}
