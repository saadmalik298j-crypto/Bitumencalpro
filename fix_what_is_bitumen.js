const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/blog/what-is-bitumen/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const targetText = `                  {
                    title: "Road construction & driveways",
                    desc: "Bitumen's biggest use. It binds crushed stone and sand into asphalt, which is then laid and compacted to form road surfaces, driveways, parking lots, and airport runways.",
                    color: "orange",
                  },`;

const replacementText = `                  {
                    title: "Road construction & driveways",
                    desc: <>Bitumen&apos;s biggest use. It binds crushed stone and sand into asphalt, which is then laid and compacted to form road surfaces, parking lots, airport runways, and driveways—with <Link href="/blog/bitumen-driveway-cost-worldwide" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">bitumen driveway costs</Link> varying significantly based on global location and size.</>,
                    color: "orange",
                  },`;

if (content.includes(targetText)) {
  content = content.replace(targetText, replacementText);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Replaced in what is bitumen.");
} else {
  console.log("Could not find target text");
}
