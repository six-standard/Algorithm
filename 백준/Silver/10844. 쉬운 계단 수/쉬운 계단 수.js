const n = require("fs").readFileSync("/dev/stdin").toString().trim();
const MODULER = 1000000000;

let dp = Array.from({ length: n }, () => []);
dp[0] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1];

for (let i = 1; i < n; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) dp[i][j] = dp[i - 1][j + 1] % MODULER;
    else if (j === 9) dp[i][j] = dp[i - 1][j - 1] % MODULER;
    else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % MODULER;
  }
}

console.log(dp[n - 1].reduce((cur, prv) => (cur += prv)) % MODULER);