let [_, ...n] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

let dp = Array.from({ length: 15 }, () => Array.from({ length: 14 }, (_, i) => i + 1));
let ans = [];

for (let i = 1; i <= 14; i++) {
  for (let j = 0; j < 14; j++) {
    if (j === 0) dp[i][j] = dp[i - 1][j];
    else {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }
}

for (let i = 0; i < n.length; i += 2) {
  ans.push(dp[n[i]][n[i + 1] - 1]);
}

console.log(ans.join("\n"));