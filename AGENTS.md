# Project Coding Rules

1. When inserting images into HTML, check whether the source image is already WebP. If it is not WebP, convert it to WebP first, then place it in the appropriate folder under `assets/images/` before referencing it from HTML.

## Permanent Translation Rules

- These rules apply to every current and future translation task in this repository, not only to the current conversation or requested section.
- A request to translate, translate to English/Japanese, or check missing translations includes all visible and dynamic content in scope: page text, template cards, modals, popups, tooltips, buttons, attributes, independent external HTML documents, and iframe documents.
- Do not treat an iframe or external document as out of scope because it is stored in a different file. When adding or changing one, implement the parent language handoff and the document's own language update path together.
- Translation validation must cover the actual rendering path, including data transforms and dynamic DOM generation. A static source-only check is not sufficient.
- English and Japanese validation must fail if Korean remains in rendered text or user-facing attributes within the changed scope.
- Do not report translation completion from source inspection or automated checks alone. Verify the user's specified execution environment; if that environment cannot be opened, state that before work and do not claim completion.
