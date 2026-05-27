const fs = require('fs');

let html = fs.readFileSync('index_recovered_utf8.html', 'utf-8');

// 1. Replace the sec-mf-hd-settings nav item with the new nav-parent and sub-menu
const oldNav = `<div class="nav-item" data-section="sec-mf-hd-settings" id="menu-sec-mf-hd-settings"><span
                      data-i18n="nav-mf-hd-settings">📝 세팅 파일(settings)</span></div>`;
                      
const newNav = `<div class="nav-parent" id="nav-mf-hd-settings-parent">
                    <div class="nav-item">
                      <span data-i18n="nav-mf-hd-settings">📝 세팅 파일(settings)</span>
                      <span class="nav-arrow"></span>
                    </div>
                    <div class="sub-menu">
                      <div class="nav-item" data-section="sec-mf-hd-dbconfig" id="menu-sec-mf-hd-dbconfig"><span data-i18n="nav-mf-hd-dbconfig">데이터베이스(Dbconfig)</span></div>
                      <div class="nav-item" data-section="sec-mf-hd-fixture" id="menu-sec-mf-hd-fixture"><span data-i18n="nav-mf-hd-fixture">픽스처(Fixture)</span></div>
                      <div class="nav-item" data-section="sec-mf-hd-postprocessor" id="menu-sec-mf-hd-postprocessor"><span data-i18n="nav-mf-hd-postprocessor">포스트프로세서(Postprocessor)</span></div>
                    </div>
                  </div>`;
                  
html = html.replace(oldNav, newNav);

// 2. Replace the sec-mf-hd-settings section with the three new sections + the DB download buttons
const oldSection = `<section id="sec-mf-hd-settings" class="content-section">
        <h2 data-i18n="nav-mf-hd-settings">📝 세팅 파일(settings)</h2>
        <div class="section-anchor" style="font-size:12px; color:#a855f7; margin-bottom:16px; font-family:monospace;">🔗
          Anchor: <a href="#sec-mf-hd-settings" style="color:#a855f7; text-decoration:none;">#sec-mf-hd-settings</a>
        </div>
        <p class="subtitle">MillFix hyperDENT</p>
        <div class="content-card">
          <p>콘텐츠가 추가될 예정입니다.</p>
        </div>
      </section>`;

const newSections = `<section id="sec-mf-hd-dbconfig" class="content-section">
        <h2 data-i18n="nav-mf-hd-dbconfig">데이터베이스(Dbconfig)</h2>
        <div class="section-anchor" style="font-size:12px; color:#a855f7; margin-bottom:16px; font-family:monospace;">🔗
          Anchor: <a href="#sec-mf-hd-dbconfig" style="color:#a855f7; text-decoration:none;">#sec-mf-hd-dbconfig</a>
        </div>
        <p class="subtitle">MillFix hyperDENT</p>
        <div class="content-card">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #e5e7eb; padding-bottom: 16px; margin-bottom: 24px; flex-wrap: wrap; gap: 16px;">
            <div>
              <h3 style="margin: 0; font-size: 20px; color: var(--text-color, #1f2937);">DB_MillFix_V10.1.X_260110_R1</h3>
              <p style="margin: 4px 0 0 0; font-size: 14px; color: var(--text-muted, #6b7280);">업데이트 날짜: 2026/05/21</p>
            </div>
            <a href="https://works.do/xp0JOBc" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 8px; background-color: #a855f7; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; transition: all 0.2s; box-shadow: 0 4px 6px rgba(168, 85, 247, 0.25);">
              📥 데이터베이스 다운로드
            </a>
          </div>

          <p style="margin-bottom: 20px; color: var(--text-color, #374151); font-weight: 500;">포함된 소재별 템플릿 목록입니다.</p>
          
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <!-- Hybrid Ceramic -->
            <div style="background: var(--bg-color, #ffffff); border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
              <h4 style="color: #a855f7; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #f3e8ff; padding-bottom: 8px;">Hybrid Ceramic</h4>
              <ul class="card-list" style="margin: 0; padding-left: 20px; font-size: 14px; color: var(--text-color, #4b5563);">
                <li>Hybrid Ceramic_Abutment Crown bridge_NCS (highnees)</li>
                <li>Hybrid Ceramic_Abutment Crown_NCS (highnees)</li>
                <li>Hybrid Ceramic_Crown bridge</li>
                <li>Hybrid Ceramic_Crown</li>
                <li>Hybrid Ceramic_Inlay/Onlay bridge</li>
                <li>Hybrid Ceramic_Inlay/Onlay</li>
                <li>Hybrid Ceramic_Inlay/Onlay/ -Slow</li>
                <li>Hybrid Ceramic_Inlay/Onlay_1st -Cavity</li>
                <li>Hybrid Ceramic_Inlay/Onlay_2nd -Occlusal</li>
              </ul>
            </div>

            <!-- PMMA/PEEK -->
            <div style="background: var(--bg-color, #ffffff); border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
              <h4 style="color: #a855f7; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #f3e8ff; padding-bottom: 8px;">PMMA / PEEK</h4>
              <ul class="card-list" style="margin: 0; padding-left: 20px; font-size: 14px; color: var(--text-color, #4b5563);">
                <li>PMMA_Abutment Crown Bridge_NCS (B0.6)</li>
                <li>PMMA_Abutment Crown Bridge_NCS (highnees)</li>
                <li>PMMA_Abutment Crown Bridge_NCS (Megalink)</li>
                <li>PMMA_Abutment crown bridge</li>
                <li>PMMA_Abutment Crown_NCS (B0.6)</li>
                <li>PMMA_Abutment Crown_NCS (highnees)</li>
                <li>PMMA_Abutment Crown_NCS (Megalink)</li>
                <li>PMMA_Abutment crown</li>
                <li>PMMA_Over Structure</li>
                <li>PMMA_Crown bridge_D0.6</li>
                <li>PMMA_Crown_D0.6</li>
                <li>PMMA_Inlay/Onlay bridge_D0.6</li>
                <li>PMMA_Inlay/Onlay_D0.6</li>
                <li>Bite splint</li>
                <li>Bite splint - slow</li>
              </ul>
            </div>

            <!-- WAX -->
            <div style="background: var(--bg-color, #ffffff); border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
              <h4 style="color: #a855f7; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #f3e8ff; padding-bottom: 8px;">WAX</h4>
              <ul class="card-list" style="margin: 0; padding-left: 20px; font-size: 14px; color: var(--text-color, #4b5563);">
                <li>Wax_Crown bridge_D0.6</li>
                <li>Wax_Coping bridge</li>
                <li>WAX - Crown_D0.6</li>
                <li>WAX - Coping</li>
                <li>Wax_Inlay/Onlay -D0.6</li>
              </ul>
            </div>

            <!-- Zirconia -->
            <div style="background: var(--bg-color, #ffffff); border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
              <h4 style="color: #a855f7; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #f3e8ff; padding-bottom: 8px;">Zirconia</h4>
              <ul class="card-list" style="margin: 0; padding-left: 20px; font-size: 14px; color: var(--text-color, #4b5563);">
                <li>Zirconia_Abutment Crown Bridge_NCS (B0.6)</li>
                <li>Zirconia_Abutment Crown Bridge_NCS (highnees)</li>
                <li>Zirconia_Abutment Crown Bridge_NCS (Megalink)</li>
                <li>Zirconia_Abutment crown bridge</li>
                <li>Zirconia_Abutment Crown_NCS (B0.6)</li>
                <li>Zirconia_Abutment Crown_NCS (highnees)</li>
                <li>Zirconia_Abutment Crown_NCS (Megalink)</li>
                <li>Zirconia_Abutment crown</li>
                <li>Zirconia_Over Structure</li>
                <li>Zirconia_Crown bridge_D0.6</li>
                <li>Zirconia_Coping bridge</li>
                <li>Zirconia_Crown_D0.6</li>
                <li>Zirconia_Coping</li>
                <li>Zirconia_Inlay/Onlay bridge_D0.6</li>
                <li>Zirconia_Inlay/Onlay_D0.6</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="sec-mf-hd-fixture" class="content-section">
        <h2 data-i18n="nav-mf-hd-fixture">픽스처(Fixture)</h2>
        <div class="section-anchor" style="font-size:12px; color:#a855f7; margin-bottom:16px; font-family:monospace;">🔗
          Anchor: <a href="#sec-mf-hd-fixture" style="color:#a855f7; text-decoration:none;">#sec-mf-hd-fixture</a>
        </div>
        <p class="subtitle">MillFix hyperDENT</p>
        <div class="content-card">
          <p>콘텐츠가 추가될 예정입니다.</p>
        </div>
      </section>

      <section id="sec-mf-hd-postprocessor" class="content-section">
        <h2 data-i18n="nav-mf-hd-postprocessor">포스트프로세서(Postprocessor)</h2>
        <div class="section-anchor" style="font-size:12px; color:#a855f7; margin-bottom:16px; font-family:monospace;">🔗
          Anchor: <a href="#sec-mf-hd-postprocessor" style="color:#a855f7; text-decoration:none;">#sec-mf-hd-postprocessor</a>
        </div>
        <p class="subtitle">MillFix hyperDENT</p>
        <div class="content-card">
          <p>콘텐츠가 추가될 예정입니다.</p>
        </div>
      </section>`;

html = html.replace(oldSection, newSections);

// 3. Inject modal and parser logic right before </body>
const bodyEnd = '</body>';
const modalHTML = `  <!-- Template Modal -->
  <div id="template-modal" class="modal-overlay" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 1000; justify-content: center; align-items: center; padding: 20px;">
    <div style="background: var(--bg-color, #ffffff); border-radius: 12px; width: 100%; max-width: 800px; max-height: 90vh; display: flex; flex-direction: column; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
      <div style="padding: 20px; border-bottom: 1px solid #e5e7eb; display: flex; justify-content: space-between; align-items: center;">
        <h3 id="template-modal-title" style="margin: 0; color: #a855f7; font-size: 20px;">Template Title</h3>
        <button id="template-modal-close" style="background: none; border: none; font-size: 24px; cursor: pointer; color: var(--text-muted, #6b7280);">&times;</button>
      </div>
      <div id="template-modal-body" style="padding: 24px; overflow-y: auto; flex: 1; font-size: 14px; line-height: 1.6; color: var(--text-color, #374151); font-family: inherit;">
        <!-- Content will be injected here -->
      </div>
    </div>
  </div>

  <script src="dbconfig-data.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const modal = document.getElementById('template-modal');
      const closeBtn = document.getElementById('template-modal-close');
      const modalTitle = document.getElementById('template-modal-title');
      const modalBody = document.getElementById('template-modal-body');

      closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });

      const listItems = document.querySelectorAll('#sec-mf-hd-dbconfig .card-list li');
      listItems.forEach(li => {
        // Style them as clickable links
        li.style.cursor = 'pointer';
        li.style.textDecoration = 'underline';
        li.style.textDecorationColor = 'rgba(168, 85, 247, 0.4)';
        li.style.textUnderlineOffset = '4px';
        li.addEventListener('mouseenter', () => li.style.color = '#a855f7');
        li.addEventListener('mouseleave', () => li.style.color = 'var(--text-color, #4b5563)');

        li.addEventListener('click', () => {
          const title = li.textContent.trim();
          modalTitle.textContent = title;
          
          if (typeof dbConfigData !== 'undefined' && dbConfigData[title]) {
            let text = dbConfigData[title];
            // Remove frontmatter
            text = text.replace(/Materials\\n.*?Part \\(Prosthesis\\)\\n.*?\\nAdd a property\\n.*?\\n/g, '');
            text = text.replace(/.*?집\\n공유\\n/g, '');
            text = text.replace(/공유\\n이 페이지는.*?\\n사이트 보기\\n사이트 설정\\n아이콘 추가\\n커버 추가\\n인증 추가\\n레이아웃 사용자 지정\\n/g, '');
            
            const lines = text.split('\\n').map(l => l.trim()).filter(l => l);
            let htmlContent = '';
            
            const headers = [
              "The conditions for selecting",
              "What it needs to Prepare",
              "Overwritable processes",
              "User-defined area",
              "Tools list used",
              "Tools used in this strategy"
            ];
            
            let inTable = false;
            let tableRow = [];
            
            for (let i = 0; i < lines.length; i++) {
              const line = lines[i];
              if (line === '댓글' || line.includes('') || line === '??') continue;
              
              let isHeader = false;
              for (const h of headers) {
                if (line.toLowerCase().includes(h.toLowerCase())) {
                  isHeader = true;
                  break;
                }
              }
              
              if (isHeader) {
                if (inTable) { htmlContent += '</tbody></table></div>'; inTable = false; tableRow = []; }
                if (htmlContent !== '') {
                  htmlContent += '<hr style="margin: 32px 0 24px; border: 0; border-top: 1px solid #e5e7eb;">';
                }
                htmlContent += '<h4 style="color: #1f2937; font-size: 16px; margin-bottom: 16px; font-weight: 700;">' + line + '</h4>';
                
                if (line.toLowerCase().includes("tool")) {
                  inTable = true;
                  htmlContent += '<div style="overflow-x: auto;"><table style="width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 13px; text-align: left;">';
                  htmlContent += '<thead><tr style="background: #f9fafb; border-bottom: 2px solid #e5e7eb;"><th style="padding: 10px;">Tool#</th><th style="padding: 10px;">Name</th><th style="padding: 10px;">Comment</th></tr></thead><tbody>';
                  while (i + 1 < lines.length && (lines[i+1].includes('Tool pocket #') || lines[i+1] === 'Tools' || lines[i+1] === 'Comment')) {
                    i++;
                  }
                }
                continue;
              }
              
              if (inTable) {
                if (line === 'T35' || line.startsWith('T3') || line.startsWith('T4') || line.match(/^T\\d+/)) {
                  if (tableRow.length > 0) {
                    while (tableRow.length < 3) tableRow.push('');
                    htmlContent += '<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 10px; font-weight: 600;">' + tableRow[0] + '</td><td style="padding: 10px;">' + tableRow[1] + '</td><td style="padding: 10px; color: #6b7280;">' + tableRow[2] + '</td></tr>';
                  }
                  tableRow = [line];
                } else {
                  tableRow.push(line);
                }
                continue;
              }
              
              if (line.length > 0) {
                if (line.includes(':')) {
                  const parts = line.split(':');
                  htmlContent += '<div style="margin-bottom: 8px; display: flex; gap: 8px;"><span style="width: 6px; height: 6px; background: #a855f7; border-radius: 50%; margin-top: 8px; flex-shrink: 0;"></span><span><strong>' + parts[0] + ':</strong> <span style="color: #d946ef; font-style: italic;">' + parts.slice(1).join(':') + '</span></span></div>';
                } else if (line.length < 50 && !line.includes('.') && !line.includes(',') && !line.includes('-')) {
                  htmlContent += '<h5 style="margin: 16px 0 8px 0; font-size: 14px; font-weight: 600; color: #4b5563;">' + line + '</h5>';
                } else {
                  htmlContent += '<div style="margin-bottom: 8px; color: #4b5563; padding-left: 14px; position: relative;"><span style="position: absolute; left: 0; top: 0;">•</span>' + line + '</div>';
                }
              }
            }
            
            if (inTable) {
              if (tableRow.length > 0) {
                while (tableRow.length < 3) tableRow.push('');
                htmlContent += '<tr style="border-bottom: 1px solid #e5e7eb;"><td style="padding: 10px; font-weight: 600;">' + tableRow[0] + '</td><td style="padding: 10px;">' + tableRow[1] + '</td><td style="padding: 10px; color: #6b7280;">' + tableRow[2] + '</td></tr>';
              }
              htmlContent += '</tbody></table></div>';
            }
            
            modalBody.innerHTML = htmlContent;
          } else {
            modalBody.innerHTML = "<p>데이터를 불러올 수 없습니다.</p>";
          }
          
          modal.style.display = 'flex';
        });
      });
    });
  </script>
</body>`;

html = html.replace(bodyEnd, modalHTML);

fs.writeFileSync('index.html', html, 'utf-8');
console.log('Final fix applied to index.html');
