const fs = require('fs');

const data = [
  {
    "key": "custom-abutment-interface",
    "title": "Calculating custom abutment in hyperDENT (using interface)",
    "youtubes": [
      "https://youtu.be/HUDvKuoz32k"
    ],
    "icon": "abutment_icon.webp"
  },
  {
    "key": "inlay-onlay",
    "title": "Calculating Inlay/Onlay in hyperDENT",
    "youtubes": [
      "https://www.youtube.com/watch?v=l5DUbtoPz8s"
    ],
    "icon": "inlay_icon.webp"
  },
  {
    "key": "overstructure",
    "title": "Calculating Overstructure in hyperDENT",
    "youtubes": [
      "https://youtu.be/bgPJ2SxF7oA"
    ],
    "icon": "overstructure_icon.webp"
  },
  {
    "key": "veneer",
    "title": "Calculating Veneer in hyperDENT.",
    "youtubes": [
      "https://youtu.be/0_hUvd-n2iU"
    ],
    "icon": "veneer_icon.webp"
  },
  {
    "key": "denture-base-teeth",
    "title": "Denture base/teeth in hyperDENT",
    "youtubes": [
      "https://youtu.be/__mpzyBbPZc?si=DZUfi7GXR65ked6M",
      "https://www.youtube.com/watch?v=V-InJGegsdk"
    ],
    "icon": "denture_icon.webp"
  },
  {
    "key": "ibar",
    "title": "iBar calculation in hyperDENT",
    "youtubes": [
      "https://www.youtube.com/watch?v=VieM-AjP-ug"
    ],
    "icon": "ibar_icon.webp"
  }
];

try {
  let text = fs.readFileSync('index.html', 'utf8');

  // 1. Generate FEATURE_DATA string
  let featureDataHtml = '';
  for (const item of data) {
    if (text.includes(`'${item.key}': {`)) continue;
    
    featureDataHtml += `
      '${item.key}': {
        title: '${item.title.replace(/'/g, "\\'")}',
        steps: [
          {
            heading: '${item.title.replace(/'/g, "\\'")}',
            youtubes: ${JSON.stringify(item.youtubes)},
            items: []
          }
        ]
      },`;
  }

  if (featureDataHtml) {
     text = text.replace(/('m-ai-software':\s*\{)/, featureDataHtml + '\n      $1');
  }

  // 2. Change icons for Tutorial 2
  // Replace images/sec-mf-Tutorials/tutorial_2_icon.png and images/sec-mf-Tutorials/Abutment milling/image 5.png with images/sec-mf-Tutorials/abutment_icon.webp
  text = text.replace(/images\/sec-mf-Tutorials\/tutorial_2_icon\.png/g, 'images/sec-mf-Tutorials/abutment_icon.webp');
  text = text.replace(/images\/sec-mf-Tutorials\/Abutment milling\/image 5\.png/g, 'images/sec-mf-Tutorials/abutment_icon.webp');
  
  // Also fix FEATURE_DATA for 'abutment-milling' image
  text = text.replace(/img:\s*'images\/sec-mf-Tutorials\/Abutment milling\/image 5\.png'/g, "img: 'images/sec-mf-Tutorials/abutment_icon.webp'");

  fs.writeFileSync('index.html', text, 'utf8');
  console.log('Fixed FEATURE_DATA and Icons successfully!');
} catch (err) {
  console.error(err);
}
