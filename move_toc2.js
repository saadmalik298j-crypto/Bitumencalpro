const fs = require('fs');
const path = require('path');

const blogDir = 'd:/bitumencalcpro/app/blog';

const dirs = fs.readdirSync(blogDir).filter(f => fs.statSync(path.join(blogDir, f)).isDirectory());

dirs.forEach(dir => {
  const filePath = path.join(blogDir, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if it has <aside
    const asideStart = content.indexOf('<aside');
    if (asideStart === -1) {
      console.log(`Skipping ${dir}: no <aside> found (already processed?)`);
      return;
    }
    
    const asideEnd = content.indexOf('</aside>', asideStart) + '</aside>'.length;
    
    // Check if there is a SIDEBAR comment before <aside
    let sidebarCommentStart = content.lastIndexOf('{/* ── SIDEBAR ── */}', asideStart);
    let removeStart = asideStart;
    if (sidebarCommentStart !== -1 && asideStart - sidebarCommentStart < 100) {
      removeStart = sidebarCommentStart;
    }
    
    const asideBlock = content.slice(asideStart, asideEnd);
    
    const innerDivStart = asideBlock.indexOf('<div className="bg-white/5 border border-white/10 rounded-2xl p-6">');
    if (innerDivStart === -1) {
      console.log(`Error: inner div not found in aside of ${dir}`);
      return;
    }
    const navEnd = asideBlock.indexOf('</nav>', innerDivStart);
    if (navEnd === -1) {
      console.log(`Error: </nav> not found in aside of ${dir}`);
      return;
    }
    
    const tocBox = asideBlock.slice(innerDivStart, navEnd + '</nav>'.length) + '\n            </div>';
    // Modify the extracted box to add mb-10
    const newTocBox = `
            {/* Table of Contents */}
            ` + tocBox.replace('className="bg-white/5', 'className="mb-10 bg-white/5');
            
    // Find Quick Answer Box end
    const qaStart = content.indexOf('bg-gradient-to-br from-teal-500/15');
    if (qaStart === -1) {
      console.log(`Error: Quick Answer Box not found in ${dir}`);
      return;
    }
    
    const qaEnd = content.indexOf('</div>', qaStart) + '</div>'.length;
    
    // Modify content
    // We must do the injection and removal carefully so indices don't shift improperly.
    // If we replace from the end to the start, indices are stable.
    if (removeStart > qaEnd) {
      // Normal case: sidebar is after Quick Answer
      content = content.slice(0, removeStart) + content.slice(asideEnd);
      content = content.slice(0, qaEnd) + '\n' + newTocBox + '\n' + content.slice(qaEnd);
    } else {
      console.log(`Warning: Sidebar is before Quick Answer in ${dir}`);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Successfully updated ${dir}`);
  }
});
