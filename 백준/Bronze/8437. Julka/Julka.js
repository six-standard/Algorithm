const [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => BigInt(i));
console.log((n + m) / 2n + "");
console.log((n - m) / 2n + "");
