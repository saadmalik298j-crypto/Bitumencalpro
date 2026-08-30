const fs = require('fs'), path = require('path');
const dir = 'd:/bitumencalcpro/app/blog';
const dirs = fs.readdirSync(dir).filter(f => fs.statSync(path.join(dir, f)).isDirectory());
dirs.forEach(d => {
  const c = fs.readFileSync(path.join(dir, d, 'page.tsx'), 'utf8');
  const faqIdx = Math.max(c.indexOf('Frequently Asked'), c.indexOf('Common Questions'));
  if (faqIdx === -1) return;
  const suffix = c.slice(faqIdx);
  const hasSummary = suffix.includes('<summary');
  const hasDetails = suffix.includes('<details');
  const hasH3 = suffix.includes('<h3 className="text-lg font-bold text-white mb-2 leading-snug">');
  console.log(d, '| details:', hasDetails, '| summary:', hasSummary, '| h3 card:', hasH3);
});
