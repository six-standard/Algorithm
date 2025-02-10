console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  [[l], items] = input.split("\n").map((i) => i.split(" ").map(Number));
  const dp = Array(l).fill(1);

  for (let i = 1; i < l; i++) {
    for (let j = 0; j < i; j++) {
      if (items[j] < items[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  return Math.max(...dp);
}
