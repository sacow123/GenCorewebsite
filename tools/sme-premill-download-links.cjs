const urls = [
  'https://drive.google.com/file/d/15dFxGZ5j6JXSNhGiiMAoFfn0vejtePfj/view?usp=sharing',
  'https://drive.google.com/file/d/19wXs_qBCDtv3uJDWX3R0fH7_1u0FqUVs/view?usp=sharing',
  'https://drive.google.com/file/d/1l-rMxBckrTe0K9JQaUqYywi32HSFrXWx/view?usp=sharing'
];
const labels = {ko:'다운로드', en:'Download', ja:'ダウンロード', es:'Descargar'};
const requirements = [/26\.11\.17/, /DB_M\.Ai_V10\.1\.X_2601030_R2/, /Fixtures_M\.Ai_V10_260815/];

module.exports = function addDownloadLinks(html, lang) {
  return requirements.reduce((result, requirement, index) => {
    let matched = false;
    const updated = result.replace(/(<li style="list-style-type:disc">)([^<]*)(<\/li>)/g, (row, start, text, end) => {
      if (!requirement.test(text)) return row;
      matched = true;
      return start + text + ' <a class="sme-download" href="' + urls[index] +
        '" target="_blank" rel="noopener noreferrer">' + labels[lang] + '</a>' + end;
    });
    if (!matched) throw Error('Missing S ME download requirement: ' + requirement);
    return updated;
  }, html);
};
