# Project Coding Rules

1. When inserting images into HTML, check whether the source image is already WebP. If it is not WebP, convert it to WebP first, then place it in the appropriate folder under `assets/images/` before referencing it from HTML.

## Permanent Translation Rules

- These rules apply to every current and future translation task in this repository, not only to the current conversation or requested section.
- A request to translate, translate to English/Japanese, or check missing translations includes all visible and dynamic content in scope: page text, template cards, modals, popups, tooltips, buttons, attributes, independent external HTML documents, and iframe documents.
- Do not treat an iframe or external document as out of scope because it is stored in a different file. When adding or changing one, implement the parent language handoff and the document's own language update path together.
- Translation validation must cover the actual rendering path, including data transforms and dynamic DOM generation. A static source-only check is not sufficient.
- English and Japanese validation must fail if Korean remains in rendered text or user-facing attributes within the changed scope.
- Do not report translation completion from source inspection or automated checks alone. Verify the user's specified execution environment; if that environment cannot be opened, state that before work and do not claim completion.

## Direct Visual Verification

- When the user provides a `file:///C:/Users/USER/Documents/GitHub/GenCorewebsite/...` URL and asks to directly check, inspect, or verify it, automatically convert the project-relative path to `http://127.0.0.1:8766/...` and launch the read-only local preview server with `node tools/preview-server.js 8766` if it is not already running.
- Do not ask the user to convert URLs, start a server, or provide a localhost URL. Open the converted URL yourself and verify the actual rendered screen.
- When the user asks for proof of direct verification, provide a screenshot of the inspected target section and state that the screenshot was captured from the local preview of the supplied file URL.
