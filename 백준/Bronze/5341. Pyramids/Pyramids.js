const n = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

for (let i of n) {
  if (i === 0) break;
  let ans = 0;
  for (let j = 1; j <= i; j++) {
    ans += j;
  }
  console.log(ans);
}
