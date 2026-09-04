const fs = require('fs');
const path = require('path');

const dir = 'd:/bitumencalcpro/app/blog';
let totalFixed = 0;

const targets = [
  "Conclusion",
  "Summary",
  "To Sum Things Up",
  "Final Verdict",
  "In Short"
];

fs.readdirSync(dir).forEach(folder => {
  const p = path.join(dir, folder, 'page.tsx');
  if (fs.existsSync(p)) {
    let c = fs.readFileSync(p, 'utf8');
    const original = c;

    // We look for any <h3 ...>TARGET</h3> and change it to <h2 ...>TARGET</h2>
    targets.forEach(text => {
      // Create a regex to find <h3...>{text}</h3> or <h3...>\n {text}\n</h3>
      const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(`<h3([^>]*)>(\\s*${escapedText}\\s*)</h3>`, 'g');
      
      c = c.replace(re, (match, attrs, innerText) => {
        // We also need to fix font sizes if they were changed. 
        // Typically h3 was text-2xl and h2 was text-3xl.
        let newAttrs = attrs.replace('text-2xl', 'text-3xl');
        return `<h2${newAttrs}>${innerText}</h2>`;
      });
      
      // Also catch cases where they might be <h3...> \n {text} \n </h3> without matching exactly above
      // But above should handle \s* which includes newlines.
    });

    if (c !== original) {
      console.log(`Reverted to H2 in: ${folder}`);
      fs.writeFileSync(p, c);
      totalFixed++;
    }
  }
});

console.log(`Finished reverting. Files modified: ${totalFixed}`);
