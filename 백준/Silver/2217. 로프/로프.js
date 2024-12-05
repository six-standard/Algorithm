let [n, ...m] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let max = 0;

m = m.sort((i, j) => i - j);

for(let i = 0; i<n; i++) {
  max = Math.max(...[max, m[i] * (n - i)]);
}

console.log(max);