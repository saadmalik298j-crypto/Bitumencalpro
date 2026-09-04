const fs = require('fs');

function fixArticle(slug, textMatches) {
  const fp = `d:/bitumencalcpro/app/blog/${slug}/page.tsx`;
  let c = fs.readFileSync(fp, 'utf8');
  let count = 0;

  textMatches.forEach(({ text, fromColor, toSize }) => {
    // Match h2 with specific text (may be on next line) and a specific border color
    // Pattern: <h2 className="...border-COLOR...">TEXT</h2>  OR multiline
    const escapedText = text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Match both same-line and next-line text
    const re = new RegExp(
      `<h2(\\s+className="[^"]*border-${fromColor}-400[^"]*">)\\s*\\n?\\s*(${escapedText})`,
      'g'
    );
    const newStr = `<h3$1\n                ${text}`;
    const before = c;
    c = c.replace(re, (match, cls, txt) => {
      return `<h3${cls}\n                ${txt}`;
    });
    // Also fix the closing tag — replace </h2> that comes after this h3 content
    // We do a second pass: find the h3 we just created and fix its closing tag
    if (c !== before) {
      // The opening tag is now h3, but closing is still </h2> — fix it
      // Replace </h2> → </h3> everywhere (safe since all h2 should now be h3 OR already h2 elsewhere)
      // Instead, do targeted: find our text and replace next </h2> after it
      const textIdx = c.indexOf(text);
      if (textIdx !== -1) {
        const closeIdx = c.indexOf('</h2>', textIdx);
        if (closeIdx !== -1 && closeIdx - textIdx < 200) {
          c = c.slice(0, closeIdx) + '</h3>' + c.slice(closeIdx + 5);
        }
      }
      count++;
      console.log(`  ✓ ${text}`);
    } else {
      console.error(`  ✗ NOT FOUND: ${text}`);
    }
  });

  fs.writeFileSync(fp, c);
  console.log(`${slug}: ${count}/${textMatches.length} applied\n`);
}

// ─── asphalt-thickness ───────────────────────────
fixArticle('asphalt-thickness', [
  { text: 'Asphalt Thickness for Residential Driveways', fromColor: 'orange' },
  { text: 'Asphalt Thickness for Roads',                fromColor: 'teal'   },
  { text: 'Asphalt Thickness for Parking Lots',         fromColor: 'blue'   },
  { text: 'Asphalt Thickness for Heavy Equipment and Trucks', fromColor: 'orange' },
  { text: 'Video: Asphalt Thickness Explained',         fromColor: 'teal'   },
  { text: 'In Short',                                   fromColor: 'orange' },
]);

// ─── bitumen-emulsion-explained ──────────────────
fixArticle('bitumen-emulsion-explained', [
  { text: 'Advantages of Bitumen Emulsion',             fromColor: 'orange' },
  { text: 'Bitumen Emulsion Explained: Video Overview', fromColor: 'teal'   },
  { text: 'Bitumen Emulsion Storage and Shelf Life',    fromColor: 'orange' },
  { text: 'Final Verdict',                              fromColor: 'teal'   },
]);

// ─── bitumen-grades-explained ────────────────────
fixArticle('bitumen-grades-explained', [
  { text: 'Penetration vs. VG vs. PG: Quick Comparison', fromColor: 'teal'   },
  { text: 'Summary',                                      fromColor: 'orange' },
]);

// ─── bitumen-density-chart ───────────────────────
fixArticle('bitumen-density-chart', [
  { text: 'How to Use This Chart for Calculations', fromColor: 'teal'   },
  { text: 'Summary',                                fromColor: 'orange' },
]);

// ─── modified-bitumen-roofing ────────────────────
fixArticle('modified-bitumen-roofing', [
  { text: 'Conclusion', fromColor: 'blue' },
]);

// ─── modified-bitumen-roof-repair ────────────────
// Already applied (Summary done in prev run)

// ─── asphalt-estimation-mistakes ─────────────────
fixArticle('asphalt-estimation-mistakes', [
  { text: 'Quick Reference: Estimation Mistakes and Their Fixes', fromColor: 'teal' },
  { text: 'To Sum Things Up',                                      fromColor: 'red'  },
]);

// ─── tpo-vs-modified-bitumen ─────────────────────
fixArticle('tpo-vs-modified-bitumen', [
  { text: 'Summary', fromColor: 'teal' },
]);

console.log('All done.');
