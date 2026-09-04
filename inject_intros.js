const fs = require('fs');

const intros = {
  'bitumen-emulsion-explained': `
            {/* ── SECTION: Intro ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Most road problems — failed tack coats, patchy surface treatments, crumbling spray seals — trace back to a bitumen emulsion that was applied wrong, chosen wrong, or misunderstood entirely. And that happens because emulsion looks like a single product when it's actually a family of dozens, each built for a specific job.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide covers exactly how bitumen emulsion works, how it's made, and how to read the grade codes that tell you what each product actually does. By the end, you'll know how to pick the right type for the job — and why getting it wrong is more common than most contractors admit.
              </p>
            </section>`,

  'asphalt-estimation-mistakes': `
            {/* ── SECTION: Intro ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                A contractor once ordered 18 tonnes of asphalt for a car park. They needed 26. The mistake? A single wrong number in the area calculation — caught only after the crew was already on site. Asphalt estimation mistakes are rarely obvious until they're expensive.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide breaks down the 10 most common errors that inflate project costs or cause shortfalls, with direct fixes for each. Whether you're estimating a driveway or a commercial road, these are the mistakes worth knowing before the order goes in.
              </p>
            </section>`,

  'asphalt-thickness': `
            {/* ── SECTION: Intro ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Asphalt that's too thin fails early — it cracks, ruts, and breaks down under loads it was never built to handle. Asphalt that's too thick wastes money. Getting asphalt thickness right is one of the most consequential decisions in any paving job, and most guides give you the numbers without explaining the reasoning behind them.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide gives you thickness recommendations for driveways, roads, parking lots, and heavy equipment areas — along with the factors that push those numbers up or down on any specific project.
              </p>
            </section>`,

  'tpo-vs-modified-bitumen': `
            {/* ── SECTION: Intro ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                TPO vs modified bitumen is one of the most debated roofing decisions in commercial construction — and the honest answer is that neither system is universally better. Each has conditions where it outperforms the other, and making the wrong call adds years of maintenance headaches or an early replacement.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide breaks down both systems side by side — cost, durability, energy performance, climate suitability, and installation complexity — so you can make the call based on your specific roof, not a general recommendation.
              </p>
            </section>`,

  'bitumen-grades-explained': `
            {/* ── SECTION: Intro ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Pick the wrong bitumen grade and the road pays for it — literally. Too soft a binder and the pavement ruts in summer heat. Too stiff and it cracks in the cold. Bitumen grades exist to match the binder's behavior to the actual conditions a road will face, and getting that match right is the difference between a 20-year road and a 7-year one.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide explains the three main grading systems — penetration, viscosity, and performance grade — and shows you how to read them, compare them, and choose the right one for a given project.
              </p>
            </section>`,

  'modified-bitumen-roofing': `
            {/* ── SECTION: Intro ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Modified bitumen roofing has been waterproofing flat and low-slope commercial buildings since the 1970s — and it's still one of the most widely specified systems today. That track record comes from one thing: it works reliably when installed correctly, across a wide range of climates and building types.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide covers the full picture — how it's made, how it's installed, what it costs, and how it compares to TPO and EPDM — so you can decide whether it's the right fit for your roof.
              </p>
            </section>`,

  'modified-bitumen-roof-repair': `
            {/* ── SECTION: Intro ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Most modified bitumen roof leaks don't come from the membrane itself — they start at seams, flashings, and penetrations that were never fully bonded or have worked loose over years of thermal cycling. Knowing where to look changes how you diagnose a leak and whether a repair actually holds.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide walks through every common failure mode, how to spot each one, and what a proper repair looks like — including when a patch won't cut it and a replacement becomes the cheaper option long-term.
              </p>
            </section>`,

  'bitumen-density-chart': `
            {/* ── SECTION: Intro ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Bitumen density is one of those values that's easy to get approximately right and easy to get exactly wrong. Use the wrong figure — or ignore how much it shifts with temperature — and your quantity calculations will be off. That leads to material shortfalls, ordering errors, and wasted budget on jobs of any size.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide gives you a ready-to-use bitumen density chart by grade and temperature, explains what drives those variations, and shows you exactly how to apply the figures in real calculations.
              </p>
            </section>`,

  'cold-mix-bitumen': `
            {/* ── SECTION: Intro ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Cold mix bitumen fills more potholes than any other asphalt product — and is also one of the most misapplied. Chosen for the right job in the right conditions, it's fast, practical, and cost-effective. Used as a shortcut for repairs it wasn't designed to handle, it fails within months and leaves a bigger problem than the one it covered.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide explains how cold mix is made, when it's the right call, and how to apply it so repairs actually last — not just look fixed for a few weeks.
              </p>
            </section>`,

  'what-is-bitumen': `
            {/* ── SECTION: Intro ── */}
            <section className="mb-12">
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                Bitumen is one of the oldest and most used construction materials on the planet — and also one of the most misunderstood. Most people recognise it as the black stuff in roads, but that barely scratches the surface of what it is, where it comes from, and why so many different industries rely on it.
              </p>
              <p className="text-white/85 leading-relaxed mb-4 text-base">
                This guide covers the complete picture: the chemistry, the grades, the uses, and how bitumen compares to asphalt and tar — so whether you're specifying it for a project or just trying to understand it properly, you'll find clear answers here.
              </p>
            </section>`,
};

const ANCHOR = `{/* ── SECTION: Intro ── */}`;

const articles = Object.keys(intros);
articles.forEach(slug => {
  const fp = `d:/bitumencalcpro/app/blog/${slug}/page.tsx`;
  let c = fs.readFileSync(fp, 'utf8');

  // Skip if intro already exists
  if (c.includes(ANCHOR)) {
    console.log(`SKIP (already has intro): ${slug}`);
    return;
  }

  // Find the closing </div> of the TOC block and the start of the first SECTION comment
  // The TOC block ends just before: {/* SECTION: or {/* ── SECTION:
  const sectionCommentIdx = c.search(/\{\/\* (?:──\s*)?SECTION:/);
  if (sectionCommentIdx === -1) {
    console.error(`Could not find SECTION comment in ${slug}`);
    return;
  }

  const intro = intros[slug];
  c = c.slice(0, sectionCommentIdx) + intro + '\n\n            ' + c.slice(sectionCommentIdx);
  fs.writeFileSync(fp, c);
  console.log(`Injected intro: ${slug}`);
});

console.log('\nDone!');
