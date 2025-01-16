console.log(
  solution(
    ...require("fs")
      .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
      .toString()
      .trim()
      .split("\n")
      .map(Number)
  )
);

function solution(_, ...items) {
  let dp = [1, 2, 4];

  items.forEach((item) => {
    for (let i = dp.length; i < item; i++) {
      dp[i] = (dp[i - 1] + dp[i - 2] + dp[i - 3]) % 1000000009;
    }
  });

  return items.map((i) => dp[i - 1] % 1000000009).join("\n");
}