const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('d:/bitumencalcpro/app/blog');
let modifiedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // Replace figure to strictly bound width and avoid prose breaking it
  newContent = newContent.replace(/<figure className="my-10 not-prose">/g, '<figure className="my-8 sm:my-10 w-[calc(100vw-32px)] max-w-full lg:w-full overflow-hidden not-prose">');
  
  // Also fix the div wrapper to never exceed parent width
  newContent = newContent.replace(/<div className="relative w-full rounded-2xl overflow-hidden border border-white\/10 shadow-2xl bg-black\/20">/g, '<div className="relative w-full max-w-full rounded-xl sm:rounded-2xl overflow-hidden border border-white/10 shadow-xl sm:shadow-2xl bg-black/20">');
  
  // Replace the image style to be extremely robust with inline max-width
  newContent = newContent.replace(/className="w-full max-w-full h-auto object-cover"\s*style=\{\{\s*width:\s*'100%',\s*height:\s*'auto'\s*\}\}/g, `className="w-full max-w-full h-auto object-contain sm:object-cover" style={{ maxWidth: '100%', height: 'auto', display: 'block' }}`);

  // Any other variations
  newContent = newContent.replace(/className="w-full max-w-full h-auto object-cover"\s*style=\{\{\s*width:\s*"100%",\s*height:\s*"auto"\s*\}\}/g, `className="w-full max-w-full h-auto object-contain sm:object-cover" style={{ maxWidth: '100%', height: 'auto', display: 'block' }}`);

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    modifiedCount++;
    console.log('Modified:', file);
  }
});

console.log('Total files modified:', modifiedCount);
