console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [[max, length], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  [length, max] = [length + 1, max + 1];

  let dp = Array.from({ length }, () => Array.from({ length: max }, () => 0));

  for (let i = 1; i < length; i++) {
    for (let j = 1; j < max; j++) {
      if (j >= items[i - 1][1]) {
        dp[i][j] = Math.max(dp[i - 1][j], items[i - 1][0] + dp[i - 1][j - items[i - 1][1]]);
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[length - 1][max - 1];
}
