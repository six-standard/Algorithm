const [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")

console.log(n == m ? 1 : 0);
