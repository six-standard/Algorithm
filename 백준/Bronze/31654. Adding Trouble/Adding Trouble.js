const [a, b, c] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split(" ")
  .map(Number);

console.log(a + b == c ? "correct!" : "wrong!");