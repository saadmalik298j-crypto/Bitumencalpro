const fs = require('fs');
const path = require('path');

const dir = 'd:/bitumencalcpro/app/blog';
let fixedCount = 0;

fs.readdirSync(dir).forEach(folder => {
  const p = path.join(dir, folder, 'page.tsx');
  if (fs.existsSync(p)) {
    let c = fs.readFileSync(p, 'utf8');
    const before = c;
    // Find <h3 ...> followed by </h2> and fix the closing tag to </h3>
    c = c.replace(/<h3([^>]*)>([\s\S]*?)<\/h2>/g, '<h3$1>$2</h3>');
    if (before !== c) {
      console.log(`Fixed mismatched tags in: ${folder}`);
      fs.writeFileSync(p, c);
      fixedCount++;
    }
  }
});

console.log(`Total files fixed: ${fixedCount}`);
