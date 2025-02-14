console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[n], items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let dp = [...items];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (items[j] < items[i]) dp[i] = Math.max(dp[i], dp[j] + items[i]);
    }
  }

  return Math.max(...dp);
}
