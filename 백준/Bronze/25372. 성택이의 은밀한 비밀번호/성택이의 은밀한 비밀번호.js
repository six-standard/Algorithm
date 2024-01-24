let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

input.forEach(i => {
  console.log(i.length >= 6 && i.length <= 9 ? "yes" : "no")
})