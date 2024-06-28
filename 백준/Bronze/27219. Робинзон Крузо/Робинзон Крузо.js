const n = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log("V".repeat(n / 5) + "I".repeat(n % 5));
