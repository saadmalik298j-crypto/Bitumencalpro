const fs = require('fs');
const path = require('path');

const blogDir = 'd:/bitumencalcpro/app/blog';
const files = fs.readdirSync(blogDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => path.join(blogDir, dirent.name, 'page.tsx'))
  .filter(file => fs.existsSync(file));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  const badImport = 'import AuthorBio from "../../components/AuthorBio";\n';
  
  if (content.includes(badImport)) {
    content = content.replace(badImport, '');
    
    // just put it at the very top of the file
    content = badImport + content;
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Fixed imports in ${file}`);
  }
}
