const fs = require('fs');
const fp = 'd:/bitumencalcpro/app/blog/modified-bitumen-roofing/page.tsx';
let c = fs.readFileSync(fp, 'utf8');

// Fix: h3 for Conclusion should use text-2xl not text-3xl
c = c.split('text-3xl font-black text-white mb-5 border-l-4 border-blue-400 pl-4">\n                Conclusion')
     .join('text-2xl font-black text-white mb-5 border-l-4 border-blue-400 pl-4">\n                Conclusion');

// Also handle CRLF variant
c = c.split('text-3xl font-black text-white mb-5 border-l-4 border-blue-400 pl-4">\r\n                Conclusion')
     .join('text-2xl font-black text-white mb-5 border-l-4 border-blue-400 pl-4">\r\n                Conclusion');

fs.writeFileSync(fp, c);
console.log('Done');
