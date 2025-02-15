console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [NK, ...items] = input.split("\n");
  const [n, k] = NK.split(" ").map(Number);
  let dp = new Array(k + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    const target = items[i];
    for (let j = target; j <= k; j++) {
      dp[j] = Math.min(dp[j], dp[j - target] + 1);
    }
  }

  return dp[k] === Infinity ? -1 : dp[k];
}
