const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf-8');

const targetRegex = /<script>\s*document\.addEventListener\('DOMContentLoaded'[\s\S]*?<\/script>\s*<\/body>/;

const replacement = `<script>
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
            modalBody.style.whiteSpace = 'normal';
            modalBody.style.fontFamily = 'inherit';
          } else {
            modalBody.innerHTML = "<p>데이터를 불러올 수 없습니다.</p>";
          }
          
          modal.style.display = 'flex';
        });
      });
    });
  </script>
</body>`;

html = html.replace(targetRegex, replacement);
fs.writeFileSync('index.html', html, 'utf-8');
console.log('Script updated successfully');
