const fs = require('fs');
const fp = 'd:/bitumencalcpro/app/blog/what-is-bitumen/page.tsx';
let c = fs.readFileSync(fp, 'utf8');

// Find the array using anchor points
const ARRAY_OPEN = '    {\r\n                  id: "bituminous-coating",';
const ARRAY_CLOSE = '              ]';

const startIdx = c.indexOf(ARRAY_OPEN);
// Find the ].map( that comes right after the closing bracket of the array
const mapIdx = c.indexOf('].map(({ id, title, body, bullets, extras })', startIdx);

if (startIdx === -1 || mapIdx === -1) {
  console.error('Anchors not found', startIdx, mapIdx);
  process.exit(1);
}

// The array ends at the ] before .map(
const newArrayContent = `    {
                  id: "paving-grade-bitumen",
                  title: "Paving-Grade Bitumen",
                  body: <>Paving-grade bitumen is the standard binder chosen specifically for road use, matched to the traffic and climate a road actually has to survive. It\u2019s classified by penetration grade, viscosity grade, or performance grade (PG), and which system applies depends on the country and specification you\u2019re working under. For a full breakdown of how each system works and how to pick the right one, see our <Link href="/blog/bitumen-grades-explained" className="text-orange-500 hover:underline">Bitumen Grades Explained</Link> guide.</>,
                },
                {
                  id: "modified-bitumen",
                  title: "Modified Bitumen",
                  body: "Modified bitumen is regular bitumen blended with polymers to handle tougher conditions than a standard grade can manage. Something like SBS (styrene-butadiene-styrene) changes how the binder stretches, recovers, and resists cracking or rutting \u2014 but it\u2019s worth saying plainly: modified bitumen isn\u2019t automatically the better choice for every road. Whether it\u2019s worth the extra cost comes down to traffic, climate, and how demanding the project actually is.",
                  bullets: [
                    "Polymer modified bitumen (PMB) \u2014 plastic or rubber polymers boost elasticity and heat resistance, common on highways and runways",
                    "Crumb rubber modified bitumen \u2014 recycled tire rubber improves durability and cuts down on road noise",
                  ],
                  extras: [
                    { label: "Note", text: <><Link href="/blog/modified-bitumen-roofing" className="text-orange-500 hover:underline">See our Modified Bitumen Roofing guide</Link> for how these binders get used outside of paving.</> },
                  ],
                },
                {
                  id: "bitumen-emulsion",
                  title: "Bitumen Emulsion",
                  body: <>Emulsion takes bitumen and breaks it into tiny droplets suspended in water, so it can be sprayed and handled cold instead of kept at hot-mix temperatures. Once it\u2019s applied, the water evaporates, the emulsion \u201cbreaks,\u201d and the bitumen is left bonded to the surface \u2014 used constantly for tack coats, surface treatments, and patching work. We cover the full picture, including cationic vs. anionic types and how it\u2019s produced, in our dedicated <Link href="/blog/bitumen-emulsion-explained" className="text-orange-500 hover:underline">Bitumen Emulsion guide</Link>.</>,
                },
                {
                  id: "cutback-bitumen",
                  title: "Cutback Bitumen",
                  body: "Cutback bitumen gets thinned with a petroleum solvent so it flows without needing heat. As the solvent evaporates after it\u2019s laid, the bitumen firms back up on its own. It\u2019s fallen out of favor in a lot of places, though \u2014 the solvents involved raise fire risk and release VOCs, so many regions have shifted to emulsions instead.",
                },
                {
                  id: "oxidized-blown-bitumen",
                  title: "Oxidized (Blown) Bitumen",
                  body: "Oxidized bitumen gets there differently \u2014 air is blown through hot bitumen, which pushes its softening point higher and changes how it responds to temperature. You won\u2019t find much of it on roads; it\u2019s roofing, waterproofing, and pipe coating where this one earns its keep.",
                },
              `;

c = c.slice(0, startIdx) + newArrayContent + c.slice(mapIdx);
fs.writeFileSync(fp, c);
console.log('Done! Bitumen types updated.');
