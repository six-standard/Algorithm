const [_, ...n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.trim().split(" ").map(Number));

for (let i of n) {
  console.log("$" + (i[0] * i[1] * i[2]).toFixed(2));
}
