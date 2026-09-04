const fs = require('fs');

function demoteH2(slug, text, fromColor) {
  const fp = `d:/bitumencalcpro/app/blog/${slug}/page.tsx`;
  let c = fs.readFileSync(fp, 'utf8');
  const re = new RegExp(
    `<h2(\\s+className="[^"]*border-${fromColor}-400[^"]*">\\r?\\n\\s*)(${text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`,
    'g'
  );
  const before = c;
  c = c.replace(re, (match, mid, txt) => `<h3${mid}${txt}`);
  if (c !== before) {
    // Fix closing tag
    const textIdx = c.indexOf(text);
    if (textIdx !== -1) {
      const closeIdx = c.indexOf('</h2>', textIdx);
      if (closeIdx !== -1 && closeIdx - textIdx < 300) {
        c = c.slice(0, closeIdx) + '</h3>' + c.slice(closeIdx + 5);
      }
    }
    fs.writeFileSync(fp, c);
    console.log(`  ✓ ${slug}: "${text}"`);
  } else {
    console.error(`  ✗ NOT FOUND: ${slug} — "${text}" (color: ${fromColor})`);
  }
}

// bitumen-grades-explained — "Penetration vs. VG vs. PG" is orange, "Summary" is teal
demoteH2('bitumen-grades-explained', 'Penetration vs. VG vs. PG: Quick Comparison', 'orange');
demoteH2('bitumen-grades-explained', 'Summary', 'teal');

// bitumen-density-chart — "How to Use This Chart" is orange, "Summary" is teal
demoteH2('bitumen-density-chart', 'How to Use This Chart for Calculations', 'orange');
demoteH2('bitumen-density-chart', 'Summary', 'teal');

console.log('Done.');
