const fs = require('fs');
const path = require('path');

const dir = 'd:/bitumencalcpro/app/blog';
const dirs = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());

let count = 0;
dirs.forEach(d => {
  const fp = path.join(dir, d, 'page.tsx');
  if (!fs.existsSync(fp)) return;
  let c = fs.readFileSync(fp, 'utf8');
  const before = c;

  // Replace opening h3 tag for TOC header
  c = c.replace(
    /<h3 className="text-white font-black text-sm uppercase tracking-wider mb-5 flex items-center gap-2">/g,
    '<div className="text-white font-black text-sm uppercase tracking-wider mb-5 flex items-center gap-2">'
  );

  // Replace the closing </h3> that comes before a <nav> element (TOC header closing tag)
  // We need to be careful to only replace the one that was the TOC header
  // Since we already changed the opening tag, look for the pattern: </h3> followed by whitespace and <nav
  c = c.replace(/<\/h3>(\s*\n\s*<nav)/g, '</div>$1');

  if (c !== before) {
    fs.writeFileSync(fp, c);
    count++;
    console.log('Fixed:', d);
  }
});

console.log(`Done. ${count} files updated.`);
