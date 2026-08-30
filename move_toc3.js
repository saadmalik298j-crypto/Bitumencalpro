const fs = require('fs');
const path = require('path');

const blogDir = 'd:/bitumencalcpro/app/blog';

const dirs = ['asphalt-thickness', 'modified-bitumen-roofing'];

dirs.forEach(dir => {
  const filePath = path.join(blogDir, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    const asideStart = content.indexOf('<aside');
    if (asideStart === -1) {
      console.log(`Skipping ${dir}: no <aside> found`);
      return;
    }
    
    const asideEnd = content.indexOf('</aside>', asideStart) + '</aside>'.length;
    
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
    
    const tocBox = asideBlock.slice(innerDivStart, navEnd + '</nav>'.length) + '\n            </div>';
    const newTocBox = `
            {/* Table of Contents */}
            ` + tocBox.replace('className="bg-white/5', 'className="mb-10 bg-white/5');
            
    // Find Quick Answer Box
    const qaStart = content.indexOf('{/* Quick Answer');
    if (qaStart === -1) {
      console.log(`Error: Quick Answer Box not found in ${dir}`);
      return;
    }
    
    const qaDiv = content.indexOf('<div', qaStart);
    const qaEnd = content.indexOf('</div>', qaDiv) + '</div>'.length;
    
    if (removeStart > qaEnd) {
      content = content.slice(0, removeStart) + content.slice(asideEnd);
      content = content.slice(0, qaEnd) + '\n' + newTocBox + '\n' + content.slice(qaEnd);
    } else {
      console.log(`Warning: Sidebar is before Quick Answer in ${dir}`);
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Successfully updated ${dir}`);
  }
});
