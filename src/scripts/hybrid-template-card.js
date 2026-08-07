(() => {
  'use strict';

  const TOOL_IMAGES = {
    T31: 't31-z20b.webp', T32: 't32-z10b.webp', T33: 't33-z06b.webp', T34: 't34-z03b.webp',
    T35: 't35-g20b.webp', T36: 't36-g10b.webp', T37: 't37-g06b.webp', T38: 't38-m20b.webp',
    T39: 't39-m10b.webp', T42: 't42-m15fl.webp', T43: 't43-m10f.webp', T44: 't44-m15r.webp', T45: 't45-m16t.webp'
  };

  const COPY = {
    en: { tag: 'MILLFIX TEMPLATE', conditions: 'WHEN TO USE', prepare: 'PREPARE', adjustable: 'ADJUSTABLE', uda: 'USER-DEFINED AREA (UDA)', tools: 'TOOLS', basic: 'Basic tools', basicHint: 'Always used', conditional: 'Conditional tools', conditionalHint: 'Used when applicable', t37: 'Fissure machining ON', t45: 'For angled screw channel' },
    ko: { tag: 'MILLFIX TEMPLATE', conditions: '사용 조건', prepare: '준비 사항', adjustable: '조정 가능 항목', uda: '사용자 정의 영역 (UDA)', tools: '공구', basic: '기본 사용 공구', basicHint: '항상 사용', conditional: '조건부 사용 공구', conditionalHint: '조건에 따라 사용', t37: '0.6 Fissure machining ON 시', t45: '앵글드 스크류 채널 전용' },
    ja: { tag: 'MILLFIX TEMPLATE', conditions: '使用条件', prepare: '準備', adjustable: '調整可能', uda: 'ユーザー定義領域 (UDA)', tools: '工具', basic: '基本使用工具', basicHint: '常に使用', conditional: '条件付き使用工具', conditionalHint: '条件に応じて使用', t37: '咬合溝加工がONの場合', t45: 'アングルドスクリューチャネル専用' }
  };

  const escapeHtml = (value) => String(value || '').replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' })[character]);
  const cleanLine = (value) => String(value || '')
    .replace(/<br\s*\/?\s*>/gi, ' ')
    .replace(/^[\s\-•·]+/, '')
    .replace(/\s+/g, ' ')
    .trim();

  const HEADER_MATCHERS = {
    conditions: [/conditions for selecting/i, /conditions for using/i, /템플릿을 사용하기 위한 조건/, /この戦略.*条件/, /このテンプレートを使用する条件/],
    prepare: [/what it needs to prepare/i, /preparation required for this template/i, /준비해야 할 사항/, /준비 사항/, /해당 템플릿.*준비해야/, /この戦略.*準備/, /このテンプレート.*準備/],
    adjustable: [/overwritable processes/i, /adjustable items/i, /조정 가능한 항목/, /덮어쓸 수 있는 공정/, /\uC870\uC815\s*\uAC00\uB2A5\uD55C\s*\uD56D\uBAA9/, /\uB36E\uC5B4\uC4F8\s*\uC218\s*\uC788\uB294\s*\uACF5\uC815/, /上書き可能なプロセス/, /調整可能な項目/],
    uda: [/^user-defined areas?\s*(?:\(uda\))?(?:\s+categories.*|\s+are available\.)?$/i, /^사용자 정의 영역(?:을 사용하실 수 있습니다\.)?$/, /^\uC0AC\uC6A9\uC790\s*\uC815\uC758\s*\uC601\uC5ED(?:\uC744\s*\uC0AC\uC6A9\uD558\uC2E4\s*\uC218\s*\uC788\uC2B5\uB2C8\uB2E4\.)?$/, /^ユーザー定義領域(?:（UDA）)?(?:を使用できます。)?$/],
    tools: [/tools used in this strategy/i, /tools used in this template/i, /tools list used/i, /사용되는 공구/, /사용된 공구 목록/, /\uC0AC\uC6A9(?:\uD558\uB294|\uB41C\uB294)?\s*\uACF5\uAD6C/, /\uC0AC\uC6A9\s*\uACF5\uAD6C\s*\uBAA9\uB85D/, /この戦略.*ツール/, /このテンプレート.*ツール/]
  };

  function findHeader(lines, key) {
    const matchers = HEADER_MATCHERS[key];
    return lines.findIndex((line) => matchers.some((matcher) => matcher.test(line)));
  }

  function sectionBetween(lines, start, endIndexes) {
    if (start < 0) return [];
    const laterEnds = endIndexes.filter((index) => index > start);
    const end = laterEnds.length ? Math.min(...laterEnds) : lines.length;
    return lines.slice(start + 1, end)
      .map(cleanLine)
      .filter((line) => line && !/^(margin lines|implant interfaces|tool pocket #|tools|comment)$/i.test(line));
  }

  function compressLines(lines) {
    const result = [];
    const seen = new Set();
    lines.forEach((line) => {
      const key = line.toLowerCase();
      if (seen.has(key) || /^category\s*\d|^カテゴリ|^유형\s*\d/i.test(line)) return;
      seen.add(key);
      result.push(line);
    });
    return result;
  }

  function parseTools(lines, toolsIndex, endIndex) {
    if (toolsIndex < 0) return [];
    const end = Number.isInteger(endIndex) && endIndex > toolsIndex ? endIndex : lines.length;
    const tools = [];
    for (let index = toolsIndex + 1; index < end; index += 1) {
      const id = cleanLine(lines[index]);
      if (!/^T\d{2}$/i.test(id)) continue;
      const name = cleanLine(lines[index + 1]);
      if (!name || /^T\d{2}$/i.test(name)) continue;
      const comments = [];
      let cursor = index + 2;
      while (cursor < end && !/^T\d{2}$/i.test(cleanLine(lines[cursor]))) {
        const comment = cleanLine(lines[cursor]);
        if (comment && !/^(tool pocket #|tools|comment)$/i.test(comment)) comments.push(comment);
        cursor += 1;
      }
      tools.push({ id: id.toUpperCase(), name, comment: comments.join(' ') });
      index = cursor - 1;
    }
    return tools;
  }

  function isConditionalTool(tool, sourceText) {
    if (/optional|option|선택 사항|선택적으로|선택적|\uC120\uD0DD\s*\uC0AC\uD56D|\uC120\uD0DD\uC801|任意|オプション/i.test(tool.comment)) return true;
    return tool.id === 'T37' || (tool.id === 'T45' && /angled|angle|각진|角度/i.test(sourceText));
  }

  function displayTitle(title) {
    return title.replace(/^(Hybrid Ceramic|PMMA|PEEK|Wax|Zirconia)_/, '').replace(/_/g, ' · ').replace(/\s+/g, ' ').trim();
  }

  function listMarkup(items) {
    if (!items.length) return '';
    return `<ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
  }

  function sectionMarkup(label, items) {
    if (!items.length) return '';
    return `<section class="hybrid-card-section"><h4><span aria-hidden="true"></span>${escapeHtml(label)}</h4>${listMarkup(items)}</section>`;
  }

  function udaMarkup(label, items, language) {
    if (!items.length) return '';
    const categories = items.map((item) => {
      const match = item.match(/^(?:category|유형|カテゴリ)\s*(\d+)\s*:/i);
      return { item, order: match ? Number(match[1]) : Number.MAX_SAFE_INTEGER };
    });
    if (!categories.some((entry) => Number.isFinite(entry.order) && entry.order !== Number.MAX_SAFE_INTEGER)) return sectionMarkup(label, items);
    categories.sort((first, second) => first.order - second.order);
    const directionCopy = {
      ko: ['0° / 180°에서 가공', '90°에서 가공'],
      en: ['Machining at 0° / 180°', 'Machining at 90°'],
      ja: ['0°／180°で加工', '90°で加工']
    };
    const direction = directionCopy[language];
    return `<section class="hybrid-card-section"><h4><span aria-hidden="true"></span>${escapeHtml(label)}</h4><div class="hybrid-uda-direction"><p>${direction[0]}</p><p>${direction[1]}</p></div><div class="hybrid-uda-grid">${categories.map((entry) => `<p>${escapeHtml(entry.item)}</p>`).join('')}</div></section>`;
  }

  function isAdjustmentHeading(line) {
    return /^(general settings|일반 설정|\uC77C\uBC18\s*\uC124\uC815|一般設定)$/i.test(line)
      || /^fissure machining(?=[\s_\[]|$)/i.test(line)
      || /^finishing inside[\s_]+(?!.*\bwith\b)/i.test(line)
      || /^(overall finishing|overall restmachining|roughing|rest machining)\b/i.test(line)
      || /^(마무리 가공|열구 가공|仕上げ|ひび割れ加工)/.test(line);
  }

  function isGeneralSettingsHeading(line) {
    return /^(general settings|일반 설정|\uC77C\uBC18\s*\uC124\uC815|一般設定|\u4E00\u822C\u8A2D\u5B9A)$/i.test(line);
  }

  function boundaryImageMarkup(language) {
    const labels = {
      ko: { open: '사진으로 보기', close: '사진 닫기', alt: '증분식 경계 옵셋과 증분식 경계 각도 안내' },
      en: { open: 'View image', close: 'Close image', alt: 'Incremental boundary offset and angle guide' },
      ja: { open: '画像を見る', close: '画像を閉じる', alt: '増分境界オフセットと角度のガイド' }
    }[language] || {};
    const image = language === 'ko' ? 'Boundaryoffsetangle_ko.webp' : 'Boundaryoffsetangle.webp';
    return `<details class="hybrid-boundary-image"><summary><span class="hybrid-boundary-image__open">${labels.open}</span><span class="hybrid-boundary-image__close">${labels.close}</span></summary><img src="./assets/images/sec-mf-Dbconfig/${image}" alt="${labels.alt}" loading="lazy"></details>`;
  }

  function isAdjustmentNote(line) {
    return /increase these|boundary error|if you get|만약 계산|경고 메시지|오류가 발생|\uB9CC\uC57D\s*\uACC4\uC0B0|\uACBD\uACE0\s*\uBA54\uC2DC\uC9C0|\uC624\uB958\uAC00\s*\uBC1C\uC0DD|計算.*エラー|エラー.*場合/i.test(line);
  }

  function adjustmentNoteMarkup(note, language) {
    if (language === 'ko' && /만약 계산중에 에러가 발생|\uB9CC\uC57D\s*\uACC4\uC0B0\uC911\uC5D0\s*\uC5D0\uB7EC\uAC00\s*\uBC1C\uC0DD/i.test(note)) {
      return `만약 계산중에 '경계 옵셋이나 경계각이 너무 적음'과 같은 에러가 발생한다면<br>해당 수치들을 조금 늘려 다시 시도해보세요.`;
    }
    return escapeHtml(note);
  }

  function isAdjustmentParameter(line) {
    return /^(calculate|calculation|allowance|add\.\s*(?:xy\s*)?allowance|계산|(?:추가\.?\s*XY\s*)?여유량|\uACC4\uC0B0|(?:\uCD94\uAC00\.?\s*XY\s*)?\uC5EC\uC720\uB7C9|計算|(?:追加\s*XY)?許容値|\u8A08\u7B97|(?:\u8FFD\u52A0\s*XY)?\u8A31\u5BB9\u5024)\s*[:：]/i.test(line);
  }

  function isFitAllowance(line) {
    return /^(allowance|add\.\s*(?:xy\s*)?allowance|(?:추가\.?\s*XY\s*)?여유량|(?:\uCD94\uAC00\.?\s*XY\s*)?\uC5EC\uC720\uB7C9|(?:追加\s*XY)?許容値|(?:\u8FFD\u52A0\s*XY)?\u8A31\u5BB9\u5024)\s*[:：]/i.test(line);
  }

  function fitDirectionMarkup(language) {
    const copy = {
      ko: ['(-\uB85C \uC124\uC815\uD560\uC218\uB85D \uC801\uD569\uC774 \uD5D0\uAC70\uC6CC\uC9D1\uB2C8\uB2E4)', '(+\uB85C \uC124\uC815\uD560\uC218\uB85D \uC801\uD569\uC774 \uD0C0\uC774\uD2B8\uD574\uC9D1\uB2C8\uB2E4)'],
      ja: ['（\u5024\u3092\u30DE\u30A4\u30CA\u30B9\u306B\u3059\u308B\u307B\u3069\u9069\u5408\u306F\u7DE9\u304F\u306A\u308A\u307E\u3059）', '（\u5024\u3092\u30D7\u30E9\u30B9\u306B\u3059\u308B\u307B\u3069\u9069\u5408\u306F\u30BF\u30A4\u30C8\u306B\u306A\u308A\u307E\u3059）'],
      en: ['(A more negative value makes the fit looser.)', '(A more positive value makes the fit tighter.)']
    }[language] || [];
    return `<span class="hybrid-fit-direction">${copy.map((item) => `<span>${item}</span>`).join('')}</span>`;
  }

  function adjustmentParameterMarkup(line, language) {
    const separator = Math.max(line.indexOf(':'), line.indexOf('：'));
    if (separator < 0) return `<p class="hybrid-adjustment-parameter">${escapeHtml(line)}</p>`;
    const label = line.slice(0, separator + 1);
    const value = line.slice(separator + 1).trim();
    return `<p class="hybrid-adjustment-parameter"><strong>${escapeHtml(label)}</strong>${value ? ` <em>${escapeHtml(value)}</em>` : ''}${isFitAllowance(line) ? fitDirectionMarkup(language) : ''}</p>`;
  }

  function adjustableMarkup(label, items, language) {
    if (!items.length) return '';
    const groups = [];
    let current = null;
    items.forEach((line) => {
      if (isAdjustmentHeading(line)) {
        current = { title: line, items: [], parameters: [], note: '' };
        groups.push(current);
        return;
      }
      if (!current) {
        current = { title: '', items: [], parameters: [], note: '' };
        groups.push(current);
      }
      if (isAdjustmentNote(line)) current.note = line;
      else if (isAdjustmentParameter(line)) current.parameters.push(line);
      else current.items.push(line);
    });
    const groupsMarkup = groups.map((group) => `<div class="hybrid-adjustment-group">${group.title ? `<h5>${escapeHtml(group.title)}</h5>` : ''}${listMarkup(group.items)}${group.parameters.map((parameter) => adjustmentParameterMarkup(parameter, language)).join('')}${group.note ? `<p class="hybrid-adjustment-note"><strong>※</strong> ${adjustmentNoteMarkup(group.note, language)}</p>` : ''}${isGeneralSettingsHeading(group.title) ? boundaryImageMarkup(language) : ''}</div>`).join('');
    return `<section class="hybrid-card-section"><h4><span aria-hidden="true"></span>${escapeHtml(label)}</h4>${groupsMarkup}</section>`;
  }

  function toolMarkup(tool, conditional, copy) {
    const image = TOOL_IMAGES[tool.id];
    const condition = tool.id === 'T37' ? copy.t37 : tool.id === 'T45' ? copy.t45 : tool.comment;
    return `<article class="hybrid-tool${conditional ? ' is-conditional' : ''}">
      <div class="hybrid-tool-crop">${image ? `<img src="./assets/images/sec-mf-tools/${image}" alt="${escapeHtml(`${tool.id} ${tool.name}`)}">` : ''}</div>
      <strong>${escapeHtml(tool.id)}</strong><em>${escapeHtml(tool.name)}</em>
      ${conditional ? `<small>${escapeHtml(condition)}</small>` : ''}
    </article>`;
  }

  function styleMarkup() {
    return `<style>
      .hybrid-template-card{max-width:980px;margin:0 auto;padding:clamp(18px,4vw,42px);border:2px solid #7c3aed;border-radius:28px;background:#fff;color:#141526;box-shadow:0 16px 40px rgba(49,22,112,.10);font-family:inherit;overflow:hidden}
      .hybrid-template-card *{box-sizing:border-box;overflow-wrap:anywhere}.hybrid-template-card__tag{display:inline-block;padding:8px 15px;border-radius:8px;background:linear-gradient(110deg,#8a5cf2,#6730dc);color:#fff;font-size:13px;font-weight:800;letter-spacing:.05em}.hybrid-template-card h3{margin:17px 0 6px;font-size:clamp(26px,4vw,46px);line-height:1.08;letter-spacing:-.04em;color:#111325}.hybrid-template-card__subtitle{margin:0 0 23px;color:#5e6075;font-size:clamp(15px,2.2vw,22px);font-weight:700}
      .hybrid-card-section{margin:13px 0;border:2px solid #bba8f5;border-left:7px solid #7c3aed;border-radius:16px;padding:18px 21px}.hybrid-card-section h4{display:flex;align-items:center;gap:10px;margin:0 0 10px;color:#5424d8;font-size:clamp(18px,2.4vw,24px);font-weight:850}.hybrid-card-section h4 span{display:inline-block;width:16px;height:16px;border-radius:50%;background:#7141e8}.hybrid-card-section ul{margin:0;padding-left:20px;color:#272839;font-size:16px;font-weight:600;line-height:1.55}.hybrid-card-section li::marker{color:#7141e8}.hybrid-uda-direction,.hybrid-uda-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}.hybrid-uda-direction{margin:0 0 7px}.hybrid-uda-direction p{margin:0;color:#6544c5;font-size:13px;font-weight:850;line-height:1.35}.hybrid-uda-grid p{margin:0;padding:10px 12px;border:1px solid #ded4fb;border-radius:9px;background:#fcfbff;color:#30284a;font-size:15px;font-weight:700;line-height:1.4}.hybrid-adjustment-group{margin-top:13px;padding:14px 15px;border:1px solid #ded4fb;border-radius:12px;background:#fcfbff}.hybrid-adjustment-group:first-of-type{margin-top:0}.hybrid-adjustment-group h5{margin:0 0 8px;color:#25114f;font-size:16px;font-weight:850}.hybrid-adjustment-group .hybrid-adjustment-note{margin:9px 0 0;padding:9px 11px;border-radius:8px;background:#f2ecff;color:#4f4371;font-size:14px;font-weight:650;line-height:1.5}.hybrid-adjustment-group p strong{color:#5424d8}.hybrid-adjustment-parameter{margin:8px 0 0;color:#373047;font-size:15px;font-weight:650;line-height:1.5}.hybrid-adjustment-parameter em{color:#5c4c81;font-style:italic;font-weight:600}.hybrid-fit-direction{display:grid;gap:2px;margin:6px 0 0;padding:7px 9px;border-left:3px solid #a78bfa;background:#f4f0ff;color:#5b4b79;font-size:13px;font-weight:650;line-height:1.45}.hybrid-fit-direction span{display:block}.hybrid-boundary-image{margin-top:12px}.hybrid-boundary-image summary{display:inline-flex;align-items:center;cursor:pointer;list-style:none;padding:8px 12px;border:1px solid #8d66f1;border-radius:8px;background:#fff;color:#5b2cdb;font-size:14px;font-weight:800}.hybrid-boundary-image summary::-webkit-details-marker{display:none}.hybrid-boundary-image__close{display:none}.hybrid-boundary-image[open] .hybrid-boundary-image__open{display:none}.hybrid-boundary-image[open] .hybrid-boundary-image__close{display:inline}.hybrid-boundary-image img{display:block;width:min(100%,620px);margin:12px auto 0;border:1px solid #ded4fb;border-radius:10px}
      .hybrid-tools{margin-top:16px;border:2px solid #bba8f5;border-radius:16px;overflow:hidden}.hybrid-tools h4{display:flex;align-items:center;gap:10px;margin:0;padding:15px 20px;background:linear-gradient(105deg,#1d0c48,#311768);color:#fff;font-size:22px}.hybrid-tools h4>span{display:inline-block;width:16px;height:16px;border-radius:50%;background:#fff}.hybrid-tool-group{margin:0;padding:15px 18px 0;color:#24114f;font-size:17px;font-weight:850}.hybrid-tool-group:before{content:'';display:inline-block;width:6px;height:19px;margin-right:8px;vertical-align:-4px;border-radius:4px;background:#7141e8}.hybrid-tool-group small{margin-left:7px;color:#71688a;font-size:12px}.hybrid-tool-grid{display:grid;gap:12px;padding:12px 18px 18px}.hybrid-tool-grid.basic{grid-template-columns:repeat(auto-fit,minmax(122px,1fr))}.hybrid-tool-grid.conditional{grid-template-columns:repeat(auto-fit,minmax(112px,1fr))}
      .hybrid-tool{min-width:0;padding:10px 7px;border:1.5px solid #8d66f1;border-radius:12px;background:#fff;text-align:center}.hybrid-tool.is-conditional{border:2px solid #7c3aed;background:linear-gradient(180deg,#fff,#fbf9ff)}.hybrid-tool-crop{position:relative;width:64px;height:130px;margin:0 auto 6px;overflow:hidden}.hybrid-tool-crop img{position:absolute;top:0;left:58px;width:260px;height:auto;transform:rotate(90deg);transform-origin:top left}.hybrid-tool strong,.hybrid-tool em,.hybrid-tool small{display:block}.hybrid-tool strong{font-size:20px;color:#121426}.hybrid-tool em{margin-top:2px;color:#592cdb;font-size:15px;font-style:normal;font-weight:800}.hybrid-tool small{margin:8px auto 0;padding:4px 6px;border-radius:6px;background:#f0e9ff;color:#572bd4;font-size:11px;font-weight:800;line-height:1.25}
      @media(max-width:640px){.hybrid-template-card{padding:18px 13px;border-radius:20px}.hybrid-card-section{padding:15px 14px;border-left-width:5px}.hybrid-card-section ul{font-size:14px}.hybrid-tool-grid.basic{grid-template-columns:repeat(2,minmax(0,1fr));padding:11px}.hybrid-tool-grid.conditional{grid-template-columns:repeat(auto-fit,minmax(112px,1fr));padding:11px}.hybrid-tool-crop{transform:scale(.82);transform-origin:top center;margin-bottom:-16px}.hybrid-tool-group{padding-left:13px}.hybrid-tools h4{padding:13px 15px}}
    </style>`;
  }

  function render({ title, sourceText, lang }) {
    const language = COPY[lang] ? lang : 'en';
    const copy = COPY[language];
    const lines = String(sourceText || '').replace(/<br\s*\/?\s*>/gi, '\n').split('\n').map(cleanLine).filter(Boolean);
    const conditionsIndex = findHeader(lines, 'conditions');
    const prepareIndex = findHeader(lines, 'prepare');
    let adjustableIndex = findHeader(lines, 'adjustable');
    let inferredAdjustableBoundary = false;
    // Some exported templates omit the section label and begin directly with "General settings".
    // Treat that first process heading as the adjustable section boundary so no source content is lost.
    if (adjustableIndex < 0) {
      adjustableIndex = lines.findIndex(isAdjustmentHeading);
      inferredAdjustableBoundary = adjustableIndex >= 0;
    }
    const udaIndex = findHeader(lines, 'uda');
    const toolsIndex = findHeader(lines, 'tools');
    const sectionIndexes = [conditionsIndex, prepareIndex, adjustableIndex, udaIndex, toolsIndex];
    const conditions = compressLines(sectionBetween(lines, conditionsIndex, sectionIndexes));
    const prepare = compressLines(sectionBetween(lines, prepareIndex, sectionIndexes));
    const adjustable = sectionBetween(lines, adjustableIndex, sectionIndexes);
    if (inferredAdjustableBoundary) adjustable.unshift(lines[adjustableIndex]);
    const uda = sectionBetween(lines, udaIndex, sectionIndexes);
    const toolSectionEndCandidates = [conditionsIndex, prepareIndex, adjustableIndex, udaIndex].filter((index) => index > toolsIndex);
    const toolSectionEnd = toolSectionEndCandidates.length ? Math.min(...toolSectionEndCandidates) : lines.length;
    const tools = parseTools(lines, toolsIndex, toolSectionEnd);
    const basicTools = tools.filter((tool) => !isConditionalTool(tool, sourceText));
    const conditionalTools = tools.filter((tool) => isConditionalTool(tool, sourceText));

    return `${styleMarkup()}<article class="hybrid-template-card" lang="${language}">
      <span class="hybrid-template-card__tag">${title.indexOf('PMMA_') === 0 ? 'PMMA TEMPLATE' : title.indexOf('PEEK_') === 0 ? 'PEEK TEMPLATE' : title.indexOf('Wax_') === 0 ? 'WAX TEMPLATE' : title.indexOf('Zirconia_') === 0 ? 'ZIRCONIA TEMPLATE' : copy.tag}</span>
      <h3>${title.indexOf('PMMA_') === 0 ? 'PMMA' : title.indexOf('PEEK_') === 0 ? 'PEEK' : title.indexOf('Wax_') === 0 ? 'Wax' : title.indexOf('Zirconia_') === 0 ? 'Zirconia' : 'Hybrid Ceramic'}</h3><p class="hybrid-template-card__subtitle">${escapeHtml(displayTitle(title))}</p>
      ${sectionMarkup(copy.conditions, conditions)}${sectionMarkup(copy.prepare, prepare)}${adjustableMarkup(copy.adjustable, adjustable, language)}${udaMarkup(copy.uda, uda, language)}
      <section class="hybrid-tools"><h4><span aria-hidden="true"></span>${copy.tools}</h4>
        ${basicTools.length ? `<p class="hybrid-tool-group">${copy.basic}<small>${copy.basicHint}</small></p><div class="hybrid-tool-grid basic">${basicTools.map((tool) => toolMarkup(tool, false, copy)).join('')}</div>` : ''}
        ${conditionalTools.length ? `<p class="hybrid-tool-group">${copy.conditional}<small>${copy.conditionalHint}</small></p><div class="hybrid-tool-grid conditional">${conditionalTools.map((tool) => toolMarkup(tool, true, copy)).join('')}</div>` : ''}
      </section>
    </article>`;
  }

  window.GenCoreHybridTemplateCard = { render };
  window.GenCoreMaterialTemplateCard = { render };
})();
