## Style Guidelines
* **Yellow Borders**: When creating or updating yellow borders (e.g., hotspots, buttons), the default style is always border: 5px solid #ffcc00;.
* **Image Popups**: When creating or updating image popups, the default size should be `width: 24.2%; height: auto;`
* **Popup Design**: The default design for popups must use the HTML/CSS style of .mf-callout-custom (Modern White Theme: white background, dark gray text, soft drop shadow, no text outline, and an arrow pointer).
* **Popup Positioning**: If a popup's `left` coordinate is greater than 50%, automatically apply the `.right-arrow` class to mirror it horizontally and prevent it from going off-screen.
* **Popup Positioning**: If a popup's `top` coordinate is greater than 50%, automatically apply the `.bottom-arrow` class. If both `left` and `top` are > 50%, apply both `.right-arrow` and `.bottom-arrow`.
* **Popup Text Formatting**: For callout messages, the Title is always yellow and Description is white. **NEVER use line breaks (`<br>`) in the description text unless explicitly requested by the user.** The text must be strictly on a single line.
