const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .pop()
  .split(" ")
  .map(Number)
  .sort((i, j) => i - j);
let last = 0;
let ans = 0;

input.forEach((i) => {
  last += i;
  ans += last;
});
console.log(ans);
