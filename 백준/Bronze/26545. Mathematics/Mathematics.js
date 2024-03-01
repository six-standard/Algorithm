let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let cnt = 0;
input.shift();

input.map((i) => (cnt += parseInt(i)));

console.log(cnt);
