const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/blog/asphalt-estimation-mistakes/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const targetText = `This guide breaks down the 10 most common errors that inflate project costs or cause shortfalls, with direct fixes for each. Whether you're estimating a driveway or a commercial road, these are the mistakes worth knowing before the order goes in.`;

const replacementText = `This guide breaks down the 10 most common errors that inflate project costs or cause shortfalls, with direct fixes for each. Whether you're estimating a <Link href="/blog/bitumen-driveway-cost-worldwide" className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium">residential driveway</Link> or a commercial road, these are the mistakes worth knowing before the order goes in.`;

if (content.includes(targetText)) {
  content = content.replace(targetText, replacementText);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Replaced in asphalt estimation mistakes.");
} else {
  console.log("Could not find target text");
}
