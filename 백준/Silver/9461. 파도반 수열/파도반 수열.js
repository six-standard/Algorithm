let [_, ...n] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let dp = [1, 1, 1, 2, 2];

for (let item of n) {
  for (let i = dp.length; i < item; i++) {
    dp[i] = dp[i - 1] + dp[i - 5];
  }
  console.log(dp[item - 1]);
}
