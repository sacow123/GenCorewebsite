# Project Coding Rules

## Protected Local Entry — 사용자 명시 승인 없이 변경 금지

- `index.html`을 `file:///`로 열면 `http://127.0.0.1:8080/index.html`로 자동 이동해야 합니다. 기존 query와 hash를 유지합니다.
- HTTP/HTTPS로 실행하는 페이지는 이동시키지 않습니다.
- `src/scripts/local-entry.js`와 `index.html`, `src/index.template.html`의 초기 로딩 연결을 삭제·우회·비활성화하거나 주소·포트를 변경하지 마십시오. 리팩터링·빌드·재생성 과정에서도 반드시 유지합니다.
- 위 동작은 사용자 보호 요청입니다. 변경하려면 해당 변경에 대한 사용자의 명시적인 승인을 먼저 받아야 합니다. 다른 수정 요청을 승인으로 간주하지 마십시오.
- HTML은 로컬 서버를 직접 시작할 수 없습니다. `로컬 서버 열기.cmd`와 `run_server.ps1`의 8080 서버 실행 경로를 유지합니다.
- 내부 개발용 loopback 로컬 서버(`127.0.0.1`, `localhost`, `::1`)는 로그인 없이 접속합니다. 사용자 명시 승인 없이 로컬 로그인 요구를 다시 추가하지 마십시오. 배포 사이트의 인증 보호는 유지하며, 로컬 편의를 위해 배포 인증 코드를 변경하지 마십시오.

1. When inserting images into HTML, check whether the source image is already WebP. If it is not WebP, convert it to WebP first, then place it in the appropriate folder under `assets/images/` before referencing it from HTML.

## Permanent Translation Rules

- These rules apply to every current and future translation task in this repository, not only to the current conversation or requested section.
- A request to translate, translate to English/Japanese, or check missing translations includes all visible and dynamic content in scope: page text, template cards, modals, popups, tooltips, buttons, attributes, independent external HTML documents, and iframe documents.
- Do not treat an iframe or external document as out of scope because it is stored in a different file. When adding or changing one, implement the parent language handoff and the document's own language update path together.
- Translation validation must cover the actual rendering path, including data transforms and dynamic DOM generation. A static source-only check is not sufficient.
- English and Japanese validation must fail if Korean remains in rendered text or user-facing attributes within the changed scope.
- Do not report translation completion from source inspection or automated checks alone. Verify the user's specified execution environment; if that environment cannot be opened, state that before work and do not claim completion.

## hyperDENT Manual Content

- When adding a hyperDENT post title, body description, caption, button, or navigation label, add its Korean, English, and Japanese translations in the same change.
- A hyperDENT post is not ready to report until its Korean, English, and Japanese screen text has been wired to the language switcher.

## Direct Visual Verification

- When the user provides a `file:///C:/Users/USER/Documents/GitHub/GenCorewebsite/...` URL and asks to directly check, inspect, or verify it, automatically convert the project-relative path to `http://127.0.0.1:8766/...` and launch the read-only local preview server with `node tools/preview-server.js 8766` if it is not already running.
- Do not ask the user to convert URLs, start a server, or provide a localhost URL. Open the converted URL yourself and verify the actual rendered screen.
- When the user asks for proof of direct verification, provide a screenshot of the inspected target section and state that the screenshot was captured from the local preview of the supplied file URL.
