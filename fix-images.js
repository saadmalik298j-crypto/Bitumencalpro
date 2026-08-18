const fs = require('fs');

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

// Old InfoTable outer wrapper patterns (various forms across files)
const oldWrappers = [
  `<div className="my-8 overflow-x-auto not-prose rounded-xl border border-white/10 shadow-lg">`,
  `<div className="my-8 not-prose overflow-x-auto rounded-xl border border-white/10 shadow-lg">`,
];

// New wrapper: edge-to-edge on mobile (-mx-4), full rounded on sm+
const newWrapper = `<div className="my-6 sm:my-8 -mx-4 sm:mx-0 overflow-x-auto not-prose sm:rounded-xl border-y sm:border border-white/10 shadow-lg">`;

// Old table tag
const oldTable = `<table className="w-full text-sm">`;
// New table: auto width so it doesn't force overflow
const newTable = `<table className="w-full min-w-[320px] text-sm">`;

// Old th (what-is-bitumen multiline form)
const oldTh = `className="text-left px-5 py-3.5 text-white font-bold text-xs uppercase tracking-wider whitespace-nowrap"`;
const newTh  = `className="text-left px-3 py-2.5 sm:px-5 sm:py-3.5 text-white font-bold text-xs uppercase tracking-wider"`;

// Old td
const oldTd = `className="px-5 py-3 text-white/80 leading-relaxed"`;
const newTd  = `className="px-3 py-2 sm:px-5 sm:py-3 text-white/80 leading-relaxed text-xs sm:text-sm"`;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // Replace wrapper
  oldWrappers.forEach(old => {
    newContent = newContent.split(old).join(newWrapper);
  });

  newContent = newContent.split(oldTable).join(newTable);
  newContent = newContent.split(oldTh).join(newTh);
  newContent = newContent.split(oldTd).join(newTd);

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    modifiedCount++;
    console.log('Updated:', file);
  }
});

console.log('Done. Files modified:', modifiedCount);
