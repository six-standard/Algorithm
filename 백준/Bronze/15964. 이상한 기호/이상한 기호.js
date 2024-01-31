const i = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
console.log((i[0] + i[1]) * (i[0] - i[1]));