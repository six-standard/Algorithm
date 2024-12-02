const [[n, m], [k]] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

console.log(n + m >= k * 2 ? n + m - k * 2 : n + m);
