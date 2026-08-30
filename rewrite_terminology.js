const fs = require('fs');
let c = fs.readFileSync('d:/bitumencalcpro/app/blog/what-is-bitumen/page.tsx', 'utf8');

const startTarget = c.indexOf('<section id="bitumen-vs-asphalt-vs-tar"');
const endTarget = c.lastIndexOf('            {/*', c.indexOf('<section id="bitumen-road-construction"'));

if (startTarget !== -1 && endTarget !== -1) {
  const replacement = `            {/* ── SECTION: Comparisons & Terminology ── */}
            <section id="comparisons-and-terminology" className="mb-12 scroll-mt-24">
              <h2 className="text-3xl font-black text-white mb-5 border-l-4 border-orange-400 pl-4">
                Comparisons & Terminology: Bitumen vs Asphalt, Tar & Concrete
              </h2>
              <p className="text-white/80 leading-relaxed mb-6 text-base">
                These terms get mixed up constantly, and the confusion is understandable since they are all used in paving or construction. But they are distinct materials.
              </p>

              <h3 className="text-2xl font-black text-white mb-4 mt-8">Bitumen vs. Asphalt vs. Tar</h3>
              <InfoTable
                headers={["Feature", "Bitumen", "Asphalt", "Tar"]}
                rows={[
                  ["Source", "Crude oil (refined or natural)", "Bitumen + aggregate mix", "Coal or wood, distilled"],
                  ["Composition", "Pure binder", "Bitumen combined with stone, sand, gravel", "Different hydrocarbon structure"],
                  ["Appearance", "Thick, black, semi-solid", "Grayish-black finished surface", "Darker, thinner, stronger smell"],
                  ["Main use", "Binding agent", "Finished road/pavement surface", "Historically roofing and roads"],
                  ["Weather resistance", "Good", "Good (depends on mix)", "Lower; breaks down faster under UV"],
                ]}
              />
              <p className="text-white/80 leading-relaxed my-6 text-base">
                The short version: <strong className="text-white">bitumen is an ingredient</strong>, asphalt is the finished product that contains it, and tar is a related but chemically different material largely replaced by bitumen in modern construction due to environmental and durability concerns.
              </p>

              <SectionImage
                src="/bitumen-vs-asphalt-vs-tar .webp"
                alt="Bitumen vs asphalt vs tar — comparison of road paving materials"
                caption="Bitumen (left) is the pure binder; asphalt (centre) is the finished mix; tar (right) is a distinct material from coal distillation"
              />

              <h3 className="text-2xl font-black text-white mb-4 mt-8">Bitumen vs Concrete</h3>
              <InfoTable
                headers={["Feature", "Bitumen Binder", "Concrete (Cement-based)"]}
                rows={[
                  ["Flexibility", "High (thermoplastic, yields to pressure)", "Low (rigid, can crack under settling)"],
                  ["Waterproof", "Excellent natural waterproofing", "Moderate (requires sealants)"],
                  ["Cost", "Generally lower initial cost", "Higher initial cost"],
                  ["Repair", "Easier to mill and patch", "Harder to patch seamlessly"],
                ]}
              />

              <h3 className="text-2xl font-black text-white mb-4 mt-8">Asphalt Binder & Bituminous Concrete</h3>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                When engineers talk about &ldquo;binder&rdquo; in paving, they mean bitumen. <strong className="text-white">Asphalt binder</strong> is simply another name for the bitumen portion of an asphalt mix — the substance that coats and holds the aggregate together. Without the binder, asphalt would just be loose gravel.
              </p>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                <strong className="text-white">Bituminous concrete</strong>, sometimes called asphalt concrete, is the technical name for pavement made by mixing bitumen with graded aggregate — a precise combination of different stone and sand sizes. It's the standard material for most modern road surfaces, made up of 90–95% aggregate by weight, with bitumen filling the rest.
              </p>

              <h3 className="text-2xl font-black text-white mb-4 mt-8">Is Bitumen the Same as Blacktop or Tarmac?</h3>
              <p className="text-white/80 leading-relaxed mb-5 text-base">
                Not quite, though the terms are often used interchangeably in everyday conversation.
              </p>
              <div className="space-y-4 mb-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-white/90 text-sm leading-relaxed">
                    <strong className="text-white text-base block mb-1">Blacktop:</strong>
                    A general term for asphalt pavement, especially in North America. It refers to the finished road surface, not the binder itself.
                  </p>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                  <p className="text-white/90 text-sm leading-relaxed">
                    <strong className="text-white text-base block mb-1">Tarmac:</strong>
                    A British term, short for &ldquo;tar-macadam,&rdquo; originally made with tar rather than bitumen. Modern tarmac typically uses bitumen as the binder, so the name has stuck even though the ingredients changed.
                  </p>
                </div>
              </div>
            </section>\n\n`;

  c = c.slice(0, startTarget) + replacement + c.slice(endTarget);
  fs.writeFileSync('d:/bitumencalcpro/app/blog/what-is-bitumen/page.tsx', c);
  console.log('Successfully replaced terminology sections');
} else {
  console.log('Could not find start or end targets', startTarget, endTarget);
}
