const fs = require('fs');
const path = require('path');

const dir = 'd:/bitumencalcpro/app/blog';
let totalFixed = 0;

fs.readdirSync(dir).forEach(folder => {
  const p = path.join(dir, folder, 'page.tsx');
  if (fs.existsSync(p)) {
    let c = fs.readFileSync(p, 'utf8');
    const original = c;
    
    // Replace any heading tag block so the closing tag matches the opening tag
    // We use a non-greedy match. Since headings don't nest headings, this is safe
    // as long as we check that innerHTML doesn't contain another heading start.
    c = c.replace(/<(h[1-6])([^>]*)>([\s\S]*?)<\/h[1-6]>/g, (match, tag, attrs, inner) => {
      // If the inner content contains another opening heading tag, we matched too much
      // (this shouldn't happen unless tags are completely broken)
      if (/<h[1-6][\s>]/.test(inner)) {
        return match;
      }
      return `<${tag}${attrs}>${inner}</${tag}>`;
    });

    if (c !== original) {
      console.log(`Fixed headings in: ${folder}`);
      fs.writeFileSync(p, c);
      totalFixed++;
    }
  }
});

console.log(`Finished fixing. Files modified: ${totalFixed}`);
