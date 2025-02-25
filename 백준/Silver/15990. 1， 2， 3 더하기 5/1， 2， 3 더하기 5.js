console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [_, ...items] = input.split("\n").map(Number);
  const dp = [
    [1, 0, 0],
    [0, 1, 0],
    [1, 1, 1],
  ];

  for (let i = 3; i < Math.max(...items); i++) {
    dp[i] = [];
    dp[i][0] = (dp[i - 1][1] % 1000000009) + (dp[i - 1][2] % 1000000009);
    dp[i][1] = (dp[i - 2][0] % 1000000009) + (dp[i - 2][2] % 1000000009);
    dp[i][2] = (dp[i - 3][0] % 1000000009) + (dp[i - 3][1] % 1000000009);
  }

  return items.map((i) => dp[i - 1].reduce((acc, prev) => acc + prev, 0) % 1000000009).join("\n");
}
