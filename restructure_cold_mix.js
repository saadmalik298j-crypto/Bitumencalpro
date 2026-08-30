const fs = require('fs');
const fp = 'd:/bitumencalcpro/app/blog/cold-mix-bitumen/page.tsx';
let c = fs.readFileSync(fp, 'utf8');

function repAll(from, to) {
  if (!c.includes(from)) { console.error('NOT FOUND:', from.slice(0,60)); return; }
  c = c.split(from).join(to);
}

// ── 1. TOC: replace flat items with 2 grouped items ──
// Each line uses CRLF in the file, so use split/join per unique id
const tocStart = '{ id: "cold-mix-uses", label: "What Is It Used For?" }';
const tocEnd   = '{ id: "cold-mix-storage", label: "Storage" },';

const tocBlockIdx = c.indexOf(tocStart);
const tocEndIdx = c.indexOf(tocEnd) + tocEnd.length;

if (tocBlockIdx === -1 || tocEndIdx === -1) {
  console.error('TOC block not found');
} else {
  const tocReplacement = `{ id: "uses-selection-application", label: "Uses, Selection & Application" },
                    { id: "performance-cost-storage", label: "Performance, Cost & Storage" },`;
  c = c.slice(0, tocBlockIdx) + tocReplacement + c.slice(tocEndIdx);
  console.log('TOC updated');
}

// ── 2. Demote H2 → H3 for Group 1 (Uses, Choosing, Apply, Fail) ──
repAll('<h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">What Is Cold Mix Bitumen Used For?</h2>',
       '<h3 className="text-2xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">What Is Cold Mix Bitumen Used For?</h3>');
repAll('<h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">Choosing the Right Cold Mix Product</h2>',
       '<h3 className="text-2xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">Choosing the Right Cold Mix Product</h3>');
repAll('<h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">How to Apply Cold Mix Bitumen</h2>',
       '<h3 className="text-2xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">How to Apply Cold Mix Bitumen</h3>');
repAll('<h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">Why Cold Mix Patches Fail (and How to Prevent It)</h2>',
       '<h3 className="text-2xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">Why Cold Mix Patches Fail (and How to Prevent It)</h3>');

// ── 3. Demote H2 → H3 for Group 2 (Benefits, Limitations, Cost, Lifespan, Storage) ──
repAll('<h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">Benefits of Cold Mix Bitumen</h2>',
       '<h3 className="text-2xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">Benefits of Cold Mix Bitumen</h3>');
repAll('<h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">Limitations of Cold Mix Bitumen</h2>',
       '<h3 className="text-2xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">Limitations of Cold Mix Bitumen</h3>');
repAll('<h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">What Affects Cold Mix Bitumen Cost</h2>',
       '<h3 className="text-2xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">What Affects Cold Mix Bitumen Cost</h3>');
repAll('<h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">How Long Does Cold Mix Bitumen Last?</h2>',
       '<h3 className="text-2xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">How Long Does Cold Mix Bitumen Last?</h3>');
repAll('<h2 className="text-3xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">Cold Mix Bitumen Storage</h2>',
       '<h3 className="text-2xl font-black text-white mb-5 border-l-4 border-teal-400 pl-4">Cold Mix Bitumen Storage</h3>');

// ── 4. Inject parent wrapper for Group 1 before Uses section ──
// Find the Uses section start comment and wrap it
const G1_START_COMMENT = '{/* SECTION: Uses */}';
const G1_END_COMMENT   = '{/* SECTION: Benefits */}';

const g1Start = c.indexOf(G1_START_COMMENT);
const g1End   = c.indexOf(G1_END_COMMENT);

if (g1Start === -1 || g1End === -1) {
  console.error('Group 1 boundaries not found', g1Start, g1End);
} else {
  const g1Inner = c.slice(g1Start, g1End);
  const g1Wrapped =
    `{/* ── SECTION: Uses, Selection & Application ── */}\n` +
    `            <section id="uses-selection-application" className="mb-12 scroll-mt-24">\n` +
    `              <h2 className="text-3xl font-black text-white mb-8 border-l-4 border-teal-400 pl-4">Uses, Selection &amp; Application</h2>\n\n` +
    g1Inner +
    `            </section>\n            {/* ── END Group 1 ── */}\n\n            `;
  c = c.slice(0, g1Start) + g1Wrapped + c.slice(g1End);
  console.log('Group 1 wrapped');
}

// ── 5. Inject parent wrapper for Group 2 before Benefits section ──
const G2_START_COMMENT = '{/* SECTION: Benefits */}';
const G2_END_COMMENT   = '{/* SECTION: Conclusion */}';

const g2Start = c.indexOf(G2_START_COMMENT);
const g2End   = c.indexOf(G2_END_COMMENT);

if (g2Start === -1 || g2End === -1) {
  console.error('Group 2 boundaries not found', g2Start, g2End);
} else {
  const g2Inner = c.slice(g2Start, g2End);
  const g2Wrapped =
    `{/* ── SECTION: Performance, Cost & Storage ── */}\n` +
    `            <section id="performance-cost-storage" className="mb-12 scroll-mt-24">\n` +
    `              <h2 className="text-3xl font-black text-white mb-8 border-l-4 border-orange-400 pl-4">Performance, Cost &amp; Storage</h2>\n\n` +
    g2Inner +
    `            </section>\n            {/* ── END Group 2 ── */}\n\n            `;
  c = c.slice(0, g2Start) + g2Wrapped + c.slice(g2End);
  console.log('Group 2 wrapped');
}

fs.writeFileSync(fp, c);
console.log('Done!');
