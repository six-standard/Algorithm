const [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ");
console.log(((n * m) / 2).toFixed(1));
