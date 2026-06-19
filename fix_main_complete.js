const fs = require('fs');

let c = fs.readFileSync('index.html', 'utf8');

// ===== STEP 1: Fix .mf-hotspot border in main page style block =====
// Replace the weak border inside sec-mf-main-page style
const mainSecStart = c.indexOf('<section id="sec-mf-main-page"');
const mainSecEnd = c.indexOf('</section>', mainSecStart) + 10;
let mainSec = c.substring(mainSecStart, mainSecEnd);

// Fix the border
mainSec = mainSec.replace(
    'border: 2px solid rgba(255, 204, 0, 0.5);',
    'border: 5px solid #ffcc00;'
);

// ===== STEP 2: Replace .mf-callout CSS definition with .mf-callout-custom =====
// Remove old .mf-callout definition block and add .mf-callout-custom instead
const oldCalloutCSS = `              .mf-callout {
                position: absolute;
                min-width: 170px;
                max-width: 360px;
                padding: 12px 16px;
                background: rgba(144, 106, 0, .88);
                color: #fff8dc;
                border: 3px solid #ffcc00;
                border-radius: 8px;
                box-shadow: 0 10px 28px rgba(0, 0, 0, .32);
                opacity: 0;
                transform: translateY(6px);
                transition: .15s ease;
                pointer-events: none;
                z-index: 10;
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

              .mf-callout.small .title {
                font-size: 18px;
              }

              .mf-callout.small .desc {
                font-size: 13px;
              }

              .mf-callout.center {
                text-align: center;
              }

              .mf-hotspot:hover+.mf-callout,
              .mf-hotspot:focus-visible+.mf-callout {
                opacity: 1;
                transform: translateY(0);
              }`;

const newCalloutCSS = `              /* ===== Glassmorphism Callout ===== */
              .mf-callout-custom {
                position: absolute;
                min-width: 170px;
                max-width: 400px;
                padding: 12px 16px;
                background: rgba(20, 15, 35, 0.45);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                color: #fff;
                border: 5px solid #ffcc00;
                border-radius: 8px;
                box-shadow: 0 10px 28px rgba(0, 0, 0, 0.32);
                opacity: 0;
                transform: translateY(6px);
                transition: .15s ease;
                pointer-events: none;
                z-index: 10;
              }

              .mf-callout-custom .title {
                display: block;
                font-size: 22px;
                line-height: 1.15;
                font-weight: 800;
                color: #ffcc00;
                margin-bottom: 4px;
              }

              .mf-callout-custom .desc {
                display: block;
                font-size: 21px;
                line-height: 1.35;
                color: #fff;
              }

              .mf-callout-custom.center {
                text-align: center;
              }

              .mf-hotspot:hover + .mf-callout-custom,
              .mf-hotspot:focus-visible + .mf-callout-custom {
                opacity: 1;
                transform: translateY(0);
              }

              /* Arrow: default points UP (callout is below the hotspot) */
              .mf-callout-custom::before {
                content: '';
                position: absolute;
                top: -10px;
                left: 20px;
                border: 10px solid transparent;
                border-top: none;
                border-bottom-color: #ffcc00;
              }
              .mf-callout-custom::after {
                content: '';
                position: absolute;
                top: -6px;
                left: 23px;
                border: 7px solid transparent;
                border-top: none;
                border-bottom-color: rgba(20, 15, 35, 0.45);
              }

              /* right-arrow: callout flips to the left of hotspot */
              .mf-callout-custom.right-arrow {
                transform: translateX(-100%) translateY(6px);
              }
              .mf-callout-custom.right-arrow::before {
                left: auto;
                right: 20px;
              }
              .mf-callout-custom.right-arrow::after {
                left: auto;
                right: 23px;
              }
              .mf-hotspot:hover + .mf-callout-custom.right-arrow,
              .mf-hotspot:focus-visible + .mf-callout-custom.right-arrow {
                opacity: 1;
                transform: translateX(-100%) translateY(0);
              }

              /* bottom-arrow: callout is ABOVE the hotspot, arrow points DOWN */
              .mf-callout-custom.bottom-arrow {
                transform: translateY(calc(-100% - 14px));
              }
              .mf-callout-custom.bottom-arrow::before {
                top: auto;
                bottom: -10px;
                border-top-color: #ffcc00;
                border-bottom: none;
              }
              .mf-callout-custom.bottom-arrow::after {
                top: auto;
                bottom: -6px;
                border-top-color: rgba(20, 15, 35, 0.45);
                border-bottom: none;
              }
              .mf-hotspot:hover + .mf-callout-custom.bottom-arrow,
              .mf-hotspot:focus-visible + .mf-callout-custom.bottom-arrow {
                opacity: 1;
                transform: translateY(calc(-100% - 14px));
              }

              /* right-arrow + bottom-arrow combined */
              .mf-callout-custom.right-arrow.bottom-arrow {
                transform: translateX(-100%) translateY(calc(-100% - 14px));
              }
              .mf-hotspot:hover + .mf-callout-custom.right-arrow.bottom-arrow,
              .mf-hotspot:focus-visible + .mf-callout-custom.right-arrow.bottom-arrow {
                opacity: 1;
                transform: translateX(-100%) translateY(calc(-100% - 14px));
              }

              /* mf-rounded-rect for non-button hotspot overlays */
              .mf-rounded-rect {
                position: absolute;
                border: 5px solid #ffcc00;
                border-radius: 12px;
                background: transparent;
                cursor: pointer;
                z-index: 5;
                animation: pulse-border 2s infinite;
              }
              .mf-rounded-rect:hover + .mf-callout-custom,
              .mf-rounded-rect:hover + .mf-callout-custom.right-arrow,
              .mf-rounded-rect:hover + .mf-callout-custom.bottom-arrow,
              .mf-rounded-rect:hover + .mf-callout-custom.right-arrow.bottom-arrow {
                opacity: 1;
              }`;

if (mainSec.includes(oldCalloutCSS)) {
    mainSec = mainSec.replace(oldCalloutCSS, newCalloutCSS);
    console.log('✅ Replaced CSS block');
} else {
    console.log('⚠️ Could not find exact CSS block, trying partial...');
    // Try replacing just the .mf-callout { ... } + related rules
    // Check if the old css is there at all
    if (mainSec.includes('.mf-callout {')) {
        console.log('Found .mf-callout { - doing manual replacement');
        // Find the style end tag
        const styleEnd = mainSec.lastIndexOf('</style>');
        const styleStart = mainSec.indexOf('<style>');
        // Replace everything between .mf-callout { and </style>
        const calloutIdx = mainSec.indexOf('.mf-callout {');
        mainSec = mainSec.substring(0, calloutIdx) + newCalloutCSS + '\n            ' + mainSec.substring(styleEnd);
        console.log('✅ Done via manual replacement');
    } else if (mainSec.includes('.mf-hotspot:hover+.mf-callout')) {
        // Just replace the hover trigger
        mainSec = mainSec.replace(
            '.mf-hotspot:hover+.mf-callout,\n              .mf-hotspot:focus-visible+.mf-callout {\n                opacity: 1;\n                transform: translateY(0);\n              }',
            newCalloutCSS
        );
    }
}

// ===== STEP 3: Replace all mf-callout class usages with mf-callout-custom =====
// In the hotspot divs: class="mf-callout ..." -> class="mf-callout-custom ..."
// Keep the extra classes (small, center) and also keep right/bottom arrows

// Replace pattern: class="mf-callout small center" -> class="mf-callout-custom center"
// (drop "small" since mf-callout-custom doesn't have that modifier, but font sizes are same)
mainSec = mainSec.replace(/class="mf-callout small center"/g, 'class="mf-callout-custom center"');
mainSec = mainSec.replace(/class="mf-callout center"/g, 'class="mf-callout-custom center"');
mainSec = mainSec.replace(/class="mf-callout"/g, 'class="mf-callout-custom"');
// Also fix any remaining variants
mainSec = mainSec.replace(/class="mf-callout small"/g, 'class="mf-callout-custom"');

console.log('✅ Replaced all mf-callout class usages');

// ===== STEP 4: Reassemble the full file =====
c = c.substring(0, mainSecStart) + mainSec + c.substring(mainSecEnd);

fs.writeFileSync('index.html', c);
console.log('✅ Done! File saved.');
