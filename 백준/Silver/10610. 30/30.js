let n = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("")
  .map(Number)
  .sort((i, j) => j - i);
const isSam = n.reduce((acc, prev) => acc + prev, 0) % 3 === 0;
console.log(n[n.length - 1] === 0 && isSam ? n.join("") : -1);