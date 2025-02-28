const n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let dp = [0n, 1n, 1n];

for (let i = 2; i <= n; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log("" + dp[n]);
