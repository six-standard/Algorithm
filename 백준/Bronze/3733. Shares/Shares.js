const n = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

for (let i of n) {
  console.log(Math.floor(i[1] / (i[0] + 1)));
}
