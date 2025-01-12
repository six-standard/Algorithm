const [m, ...n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const dp = Array.from({ length: m }, (_, index) => Array.from({ length: index + 1 }, () => 0));
dp[m - 1] = n[m - 1];

for (let i = m[0] - 2; i >= 0; i--) {
  const arr = n[i];
  for (let j = 0; j < arr.length; j++) {
    dp[i][j] = arr[j] + Math.max(dp[i + 1][j], dp[i + 1][j + 1]);
  }
}

console.log(dp[0][0]);
