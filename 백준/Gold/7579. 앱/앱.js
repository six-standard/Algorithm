console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[N, M], m, c] = input.split("\n").map((i) => i.split(" ").map(Number));
  const MAX = c.reduce((a, b) => a + b, 0);
  let dp = new Array(MAX).fill(0);

  if (m.reduce((a, b) => a + b, 0) === M) return MAX;
  for (let i = 0; i < N; i++) {
    for (let j = MAX; j >= c[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - c[i]] + m[i]);
    }
  }

  return dp.findIndex((i) => i >= M);
}
