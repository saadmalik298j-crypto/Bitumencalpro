const fs = require('fs');
const path = require('path');

const dir = 'd:/bitumencalcpro/app/blog';
const dirs = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());

let count = 0;
dirs.forEach(d => {
  const fp = path.join(dir, d, 'page.tsx');
  if (!fs.existsSync(fp)) return;
  let c = fs.readFileSync(fp, 'utf8');

  // Only modify inside FAQ sections
  const faqIdx = c.indexOf('Frequently Asked');
  if (faqIdx === -1) {
    console.log(`Skipping ${d}: no FAQ section found`);
    return;
  }

  // The pattern inside FAQ map is:
  // <summary className="...">
  //   <span>{q}</span>
  // We want:
  // <summary className="...">
  //   <h3 className="..."><span>{q}</span></h3>
  // But since summary already has font-bold text-white, the h3 wraps the span with proper semantics.
  // Simpler: replace <span>{q}</span> with <h3 className="...text-base font-bold text-white m-0 inline">{q}</h3>

  const before = c;

  // Replace the span holding {q} inside the summary
  // Pattern: <span>{q}</span>  =>  <h3 className="text-base font-bold text-white m-0 leading-snug">{q}</h3>
  // We need to only do this in the FAQ section, so we work on the suffix of the file from faqIdx
  const prefix = c.slice(0, faqIdx);
  let suffix = c.slice(faqIdx);

  suffix = suffix.replace(/<span>\{q\}<\/span>/g, '<h3 className="text-base font-bold text-white m-0 leading-snug">{q}</h3>');

  c = prefix + suffix;

  if (c !== before) {
    fs.writeFileSync(fp, c);
    count++;
    console.log(`Fixed: ${d}`);
  } else {
    console.log(`No change in ${d}`);
  }
});

console.log(`Done. ${count} files updated.`);
