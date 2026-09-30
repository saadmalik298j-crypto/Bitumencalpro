const fs = require('fs');
const outPath = 'D:/bitumencalcpro/app/blog/bitumen-quality-tests/page.tsx';
const c = fs.readFileSync('D:/bitumencalcpro/quality_tests_page.tsx', 'utf8');
fs.writeFileSync(outPath, c, 'utf8');
console.log('done', fs.statSync(outPath).size);
