let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.pop();

input.forEach((i) => {
  console.log(i.split("").reverse().join(""));
});