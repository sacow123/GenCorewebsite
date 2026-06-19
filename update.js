const fs = require('fs');
const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf8');

const regexStr = "<div\\s+style=\\"position:relative; width:100%; aspect-ratio:1586\\\\/930; background:#000; overflow:visible; border-radius: inherit;\\">[\\\\s\\\\S]*?<\\\\/div>\\\\s*<\\\\/div>\\\\s*<\\\\/section>\\\\s*<section id=\\"sec-mf-code-view\\" class=\\"content-section\\">";
const regex = new RegExp(regexStr);

const replacement = \<div style="position:relative; width:100%; aspect-ratio:1586/930; background:#000; overflow:visible; border-radius: inherit;">
            <img loading="lazy" style="position:absolute;inset:0;width:100%;height:100%;display:block;object-fit:contain;user-select:none;-webkit-user-drag:none;border-radius:inherit;" src="./assets/images/sec-mf-main-page/millfix-main-screen-new.png" alt="MillFix 메인 화면" />
            <div style="position: absolute; bottom: -40px; width: 100%; text-align: center; color: #000000; font-size: 18px; font-weight: bold;">
              💡 각 조작 버튼에 마우스를 올리거나 터치하면 상세 설명을 확인할 수 있습니다.
            </div>

            <style>
              .mf-hotspot {
                position: absolute;
                width: 16px;
                height: 16px;
                background-color: #ffcc00;
                border-radius: 50%;
                border: none;
                transform: translate(-50%, -50%);
                cursor: pointer;
                z-index: 5;
                transition: .15s ease;
                outline: none;
                animation: pulse-dot 2s infinite;
              }

              @keyframes pulse-dot {
                0% { box-shadow: 0 0 0 0 rgba(255, 204, 0, 0.7); }
                70% { box-shadow: 0 0 0 15px rgba(255, 204, 0, 0); }
                100% { box-shadow: 0 0 0 0 rgba(255, 204, 0, 0); }
              }

              :has(>.mf-hotspot:hover) .mf-hotspot {
                opacity: 0.3;
                animation: none;
              }

              :has(>.mf-hotspot:hover) .mf-hotspot:hover {
                opacity: 1;
                background-color: #ffdd33;
                box-shadow: 0 0 0 4px rgba(255, 204, 0, 0.4);
              }

              .mf-callout {
                position: absolute;
                min-width: 170px;
                width: max-content;
                max-width: 90vw;
                padding: 12px 16px;
                background: rgba(144, 106, 0, .88);
                color: #fff8dc;
                border: 3px solid #ffcc00;
                border-radius: 8px;
                box-shadow: 0 10px 28px rgba(0, 0, 0, .32);
                opacity: 0;
                transform: translate(-50%, 6px);
                transition: .15s ease;
                pointer-events: none;
                z-index: 10;
                text-align: center;
              }

              .mf-callout .title {
                display: block;
                font-size: 22px;
                line-height: 1.15;
                font-weight: 800;
                color: #fff;
                margin-bottom: 2px;
              }

              .mf-callout .desc {
                display: block;
                font-size: 21px;
                line-height: 1.35;
                color: #fff4cf;
              }

              .mf-callout.small .title { font-size: 18px; }
              .mf-callout.small .desc { font-size: 13px; }

              .mf-hotspot:hover+.mf-callout,
              .mf-hotspot:focus-visible+.mf-callout {
                opacity: 1;
                transform: translate(-50%, 0);
              }
            </style>

            <button class="mf-hotspot" style="left:33.3%; top:6.8%;"></button>
            <div class="mf-callout center small" style="left:33.3%; top:10%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:67.0%; top:6.8%;"></button>
            <div class="mf-callout center small" style="left:67.0%; top:10%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:95.8%; top:5.5%;"></button>
            <div class="mf-callout center small" style="left:95.8%; top:10%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:4.8%; top:19.8%;"></button>
            <div class="mf-callout center small" style="left:4.8%; top:23%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:18.0%; top:19.8%;"></button>
            <div class="mf-callout center small" style="left:18.0%; top:23%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:78.5%; top:19.8%;"></button>
            <div class="mf-callout center small" style="left:78.5%; top:23%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:91.5%; top:20.0%;"></button>
            <div class="mf-callout center small" style="left:91.5%; top:23%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:37.1%; top:52.8%;"></button>
            <div class="mf-callout center small" style="left:37.1%; top:56%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:54.8%; top:52.8%;"></button>
            <div class="mf-callout center small" style="left:54.8%; top:56%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:73.5%; top:39.0%;"></button>
            <div class="mf-callout center small" style="left:73.5%; top:42%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:73.5%; top:52.5%;"></button>
            <div class="mf-callout center small" style="left:73.5%; top:55%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:73.5%; top:66.0%;"></button>
            <div class="mf-callout center small" style="left:73.5%; top:69%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:6.0%; top:84.5%;"></button>
            <div class="mf-callout center small" style="left:6.0%; top:88%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:92.0%; top:60.5%;"></button>
            <div class="mf-callout center small" style="left:92.0%; top:64%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:88.2%; top:81.0%;"></button>
            <div class="mf-callout center small" style="left:88.2%; top:84%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:95.0%; top:81.0%;"></button>
            <div class="mf-callout center small" style="left:95.0%; top:84%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:95.0%; top:94.0%;"></button>
            <div class="mf-callout center small" style="left:95.0%; top:97%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>
            
            <button class="mf-hotspot" style="left:87.5%; top:94.0%;"></button>
            <div class="mf-callout center small" style="left:87.5%; top:97%;">
              <span class="title">메시지 대기 중</span><span class="desc"></span>
            </div>

          </div>
        </div>
      </section>
      <section id="sec-mf-code-view" class="content-section">\;

if (regex.test(content)) {
    content = content.replace(regex, replacement);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Update complete.');
} else {
    console.log('Regex did not match!');
}
