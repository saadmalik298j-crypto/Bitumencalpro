const fs = require('fs');
const path = 'D:/bitumencalcpro/app/blog/asphalt-vs-concrete/page.tsx';
const c = fs.readFileSync('C:/Users/saad/.gemini/antigravity-ide/brain/d373a03d-9a7a-4f3f-be10-30cc866975f8/scratch/avc_page_template.txt', 'utf8');
fs.writeFileSync(path, c, 'utf8');
console.log('done', fs.statSync(path).size);
