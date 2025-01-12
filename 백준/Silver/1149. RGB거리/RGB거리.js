const [m, ...n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

// 첫 집 값은 모두 지불하고 시작해야 함
let dp = Array.from({ length: m }, () => [0, 0, 0]);
dp[0] = n[0];

for (let i = 1; i < m[0]; i++) {
  // 지불 이후, 현재 칠한 색을 제외한 다른 색의 가격을 비교해서 저장함
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + n[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + n[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + n[i][2];
}

console.log(Math.min(...dp[m - 1]));
