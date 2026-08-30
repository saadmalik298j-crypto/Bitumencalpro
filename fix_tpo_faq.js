const fs = require('fs');
const fp = 'd:/bitumencalcpro/app/blog/tpo-vs-modified-bitumen/page.tsx';
let c = fs.readFileSync(fp, 'utf8');
const before = c;

// Replace all occurrences of <span>{q}</span> with h3 (handles both LF and CRLF)
c = c.split('<span>{q}</span>').join('<h3 className="text-base font-bold text-white m-0 leading-snug">{q}</h3>');

if (c !== before) {
  fs.writeFileSync(fp, c);
  console.log('Fixed: tpo-vs-modified-bitumen');
} else {
  console.log('No change made');
}
