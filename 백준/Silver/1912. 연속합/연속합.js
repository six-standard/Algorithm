let n = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")[1]
  .split(" ")
  .map(Number);

let dp = [n[0]];
let ans = n[0];

for (let i = 1; i < n.length; i++) {
  dp[i] = Math.max(dp[i - 1] + n[i], n[i]);
  ans = Math.max(dp[i], ans);
}

console.log(ans);
