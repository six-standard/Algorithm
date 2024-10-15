const [n, [a, b]] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

console.log(+(n[0] <= a / b));
