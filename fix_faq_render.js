const fs = require('fs');
const path = require('path');

const dir = 'd:/bitumencalcpro/app/blog';
const dirs = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());

// The new map render block to inject (replaces the old details/summary pattern)
const newMapRender = `.map(({ q, a }, i) => (
      <div
        key={i}
        className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 transition-colors hover:bg-white/[0.08]"
      >
        <h3 className="text-lg font-bold text-white mb-2 leading-snug">
          {q}
        </h3>
        <p className="text-white/70 text-sm leading-relaxed">
          {a}
        </p>
      </div>
    ))}`;

let count = 0;
dirs.forEach(d => {
  const fp = path.join(dir, d, 'page.tsx');
  if (!fs.existsSync(fp)) return;
  let c = fs.readFileSync(fp, 'utf8');
  const before = c;

  // Find the FAQ section (could be "Frequently Asked" or "Common Questions")
  const faqIdx = Math.max(c.indexOf('Frequently Asked'), c.indexOf('Common Questions'), c.indexOf('"faq"'));
  if (faqIdx === -1) {
    console.log(`Skipping ${d}: no FAQ section found`);
    return;
  }

  // Find the .map(({ q, a }, i) start in FAQ section
  const mapIdx = c.indexOf('.map(({ q, a }', faqIdx);
  if (mapIdx === -1) {
    console.log(`No FAQ map found in ${d}`);
    return;
  }

  // Find the closing of the map — the pattern ends with ))}\n
  // The map block goes from .map( to the closing ))} 
  // We look for the end: ))}\n  (two closing parens then brace)
  let depth = 0;
  let i = mapIdx + 5; // skip ".map("
  let mapEnd = -1;
  while (i < c.length) {
    if (c[i] === '(') depth++;
    else if (c[i] === ')') {
      depth--;
      if (depth < 0) {
        mapEnd = i + 1;
        // expect "}" after )
        let j = mapEnd;
        while (j < c.length && (c[j] === ' ' || c[j] === '\r' || c[j] === '\n')) j++;
        if (c[j] === '}') mapEnd = j + 1;
        break;
      }
    }
    i++;
  }

  if (mapEnd === -1) {
    console.log(`Could not find map end in ${d}`);
    return;
  }

  // Replace from .map( to mapEnd with new block
  c = c.slice(0, mapIdx) + newMapRender + c.slice(mapEnd);

  if (c !== before) {
    fs.writeFileSync(fp, c);
    count++;
    console.log(`Fixed: ${d}`);
  } else {
    console.log(`No change: ${d}`);
  }
});

console.log(`\nDone. ${count} files updated.`);
