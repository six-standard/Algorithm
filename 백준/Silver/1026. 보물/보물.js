let [_, n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));
let result = 0;

n = n.sort((i, j) => i - j);
m = m.sort((i, j) => j - i);
n.forEach((i, j) => {
  result += i * m[j];
});

console.log(result);
