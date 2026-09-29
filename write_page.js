const fs = require('fs');
const path = 'D:/bitumencalcpro/app/blog/how-to-remove-bitumen/page.tsx';
const c = fs.readFileSync('D:/bitumencalcpro/page_template.txt', 'utf8');
fs.writeFileSync(path, c, 'utf8');
console.log('done', fs.statSync(path).size);
