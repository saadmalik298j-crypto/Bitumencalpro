const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app/blog/asphalt-thickness/page.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const targetText = `distributing weight before it ever reaches the soil.
              </p>`;

const replacementText = `distributing weight before it ever reaches the soil. While{" "}
                <Link
                  href="/blog/bitumen-driveway-cost-worldwide"
                  className="text-teal-400 hover:text-teal-300 underline underline-offset-2 transition-colors font-medium"
                >
                  bitumen driveway costs
                </Link>{" "}
                vary by country, these core thickness requirements remain similar worldwide.
              </p>`;

content = content.replace(targetText, replacementText);
fs.writeFileSync(filePath, content, 'utf8');
console.log("Replaced in asphalt thickness.");
