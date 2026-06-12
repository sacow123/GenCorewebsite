const fs = require('fs');

function build() {
    console.log('Building index.html...');
    let content = fs.readFileSync('src/index.template.html', 'utf8');
    
    const regex = /<!-- INCLUDE: (.*?) -->/g;
    content = content.replace(regex, (match, filepath) => {
        if (fs.existsSync(filepath)) {
            return fs.readFileSync(filepath, 'utf8');
        }
        return match;
    });
    
    fs.writeFileSync('index.html', content);
    console.log('Build complete!');
}

build();
