const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const restoredButtons = `            <!-- 상단 -->
            <button class="mf-hotspot pill" style="left: 26.4%; top: 5.4%; width: 13.2%; height: 5%; border-radius: 999px;"></button>
            <div class="mf-callout-custom center" style="left: 26.5%; top: 8.9%; min-width: 315px;"><span class="title">코드뷰 페이지</span><span class="desc">: 코드뷰 페이지로 이동합니다</span></div>

            <button class="mf-hotspot pill" style="left: 60.3%; top: 5.4%; width: 13.3%; height: 5%; border-radius: 999px;"></button>
            <div class="mf-callout-custom center right-arrow" style="left: 67.9%; top: 8.7%; min-width: 295px;"><span class="title">툴 리스트 페이지</span><span class="desc">: 툴리스트 페이지를 엽니다</span></div>
`;

if (html.includes('<span class="title">코드뷰 페이지</span>')) {
    console.log('Buttons are already there');
} else {
    // Find <!-- 상단 --> and replace it with the restored buttons
    if (html.includes('<!-- 상단 -->')) {
        html = html.replace('<!-- 상단 -->', restoredButtons);
        fs.writeFileSync('index.html', html, 'utf8');
        console.log('Restored buttons successfully');
    } else {
        console.log('Could not find <!-- 상단 --> marker');
    }
}
