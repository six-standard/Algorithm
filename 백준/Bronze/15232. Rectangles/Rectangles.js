const [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

console.log(("*".repeat(m) + "\n").repeat(n - 1) + "*".repeat(m));