const [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(n >= 12 && n <= 16 && m == 0 ? 320 : 280);
