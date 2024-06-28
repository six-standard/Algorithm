const [a, b] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

console.log(a % b == 0 ? "Yes" : "No");