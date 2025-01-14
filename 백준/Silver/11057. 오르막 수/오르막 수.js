console.log(
  solution(
    Number(
      require("fs")
        .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
        .toString()
        .trim()
    )
  )
);

function solution(length) {
  const dp = Array.from({ length }, () => []);
  dp[0] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  for (let i = 1; i < length; i++) {
    for (let j = 0; j < 10; j++) {
      dp[i][j] = dp[i - 1].slice(0, j + 1).reduce((arr, prv) => arr + prv) % 10007;
    }
  }
  return dp[length - 1].reduce((arr, prv) => arr + prv) % 10007;
}
