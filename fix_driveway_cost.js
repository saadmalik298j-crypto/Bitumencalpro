const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/blog/bitumen-driveway-cost-worldwide/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// 1. Change Country H2s to H3s
const lines = content.split('\n');
let insideCountryH2 = false;

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<h2 className="text-2xl sm:text-3xl font-black text-white mb-4 border-l-4 border-orange-400 pl-4">')) {
    lines[i] = lines[i].replace('<h2', '<h3');
    insideCountryH2 = true;
  }
  if (insideCountryH2 && lines[i].includes('</h2>')) {
    lines[i] = lines[i].replace('</h2>', '</h3>');
    insideCountryH2 = false;
  }
}

// 2. Remove Related Guides section
let relatedGuidesStart = -1;
let relatedGuidesEnd = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id="related-guides"')) {
    // Traverse backwards to find the <section opening tag
    for (let j = i; j >= 0; j--) {
      if (lines[j].includes('<section')) {
        relatedGuidesStart = j;
        break;
      }
    }
  }
  if (relatedGuidesStart !== -1 && i > relatedGuidesStart && lines[i].includes('</section>')) {
    relatedGuidesEnd = i;
    break;
  }
}

if (relatedGuidesStart !== -1 && relatedGuidesEnd !== -1) {
  lines.splice(relatedGuidesStart, relatedGuidesEnd - relatedGuidesStart + 1);
}

content = lines.join('\n');

// 3. Remove duplicate links
// Replace second what-is-bitumen link
content = content.replace(
  '<Link\n                    href="/blog/what-is-bitumen"\n                    className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"\n                  >\n                    what bitumen is and how it&apos;s made\n                  </Link>',
  'what bitumen is and how it&apos;s made'
);

// Replace second asphalt-thickness link
content = content.replace(
  '<Link\n                  href="/blog/asphalt-thickness"\n                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"\n                >\n                  asphalt thickness guide\n                </Link>',
  'asphalt thickness guide'
);

// Replace second asphalt-estimation-mistakes link
content = content.replace(
  '<Link\n                  href="/blog/asphalt-estimation-mistakes"\n                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"\n                >\n                  guide to common asphalt estimation mistakes\n                </Link>',
  'guide to common asphalt estimation mistakes'
);

// Replace second / link
content = content.replace(
  '<Link\n                    href="/"\n                    className="text-orange-400 hover:text-orange-300 underline underline-offset-2 transition-colors font-medium"\n                  >\n                    bitumen quantity calculator\n                  </Link>',
  'bitumen quantity calculator'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log("Successfully updated driveway cost page.");
