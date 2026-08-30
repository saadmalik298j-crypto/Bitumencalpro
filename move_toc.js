const fs = require('fs');
const path = require('path');

const blogDir = 'd:/bitumencalcpro/app/blog';

// Get all directories in blogDir
const dirs = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());

dirs.forEach(dir => {
  const filePath = path.join(blogDir, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Find the sidebar and extract TOC
    // The sidebar starts with {/* ── SIDEBAR ── */} and ends with </aside>
    const sidebarRegex = /\{\/\* ── SIDEBAR ── \*\/\}\s*<aside[\s\S]*?<div className="bg-white\/5 border border-white\/10 rounded-2xl p-6">([\s\S]*?)<\/aside>/;
    const match = content.match(sidebarRegex);
    
    if (match) {
      // The inner content of the TOC box (from <h3 to </nav></div></div>)
      // Actually, match[1] captures everything from inside the `p-6` div until </aside>.
      // Let's just find the entire TOC div.
      const tocDivRegex = /<div className="bg-white\/5 border border-white\/10 rounded-2xl p-6">([\s\S]*?)<\/nav>\s*<\/div>/;
      const tocMatch = match[0].match(tocDivRegex);
      
      if (tocMatch) {
        // Construct the new TOC block to inject
        const newTocBlock = `
            {/* Table of Contents */}
            <div className="mb-10 bg-white/5 border border-white/10 rounded-2xl p-6">
${tocMatch[1]}</nav>
            </div>
`;
        
        // Remove the entire sidebar from the content
        content = content.replace(sidebarRegex, '');
        
        // 2. Inject newTocBlock after Quick Answer Box
        // Quick Answer Box ends with a </div>. Let's find the first </div> after {/* Quick Answer Box */}
        const quickAnswerRegex = /(\{\/\* Quick Answer Box \*\/\}[\s\S]*?<\/div>\s*)(?=\n\s*\{\/\*|\n\s*<)/;
        
        // To be safer, let's find the Quick Answer Box block directly:
        // It starts with {/* Quick Answer Box */} and ends with </div> right before the next section or comment
        
        const qABoxMatch = content.match(/\{\/\* Quick Answer Box \*\/\}\s*<div[^>]*>[\s\S]*?<\/div>/);
        if (qABoxMatch) {
          const splitIndex = content.indexOf(qABoxMatch[0]) + qABoxMatch[0].length;
          
          content = content.slice(0, splitIndex) + '\n' + newTocBlock + content.slice(splitIndex);
          
          fs.writeFileSync(filePath, content);
          console.log(`Updated ${dir}`);
        } else {
          console.log(`Could not find Quick Answer Box in ${dir}`);
        }
      } else {
        console.log(`Could not extract TOC from sidebar in ${dir}`);
      }
    } else {
      console.log(`Could not find Sidebar in ${dir}`);
    }
  }
});
