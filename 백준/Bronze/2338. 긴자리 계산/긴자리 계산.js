const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(BigInt);

console.log(`${a + b}`.replace('n', ''));
console.log(`${a - b}`.replace('n', ''));
console.log(`${a * b}`.replace('n', ''));
