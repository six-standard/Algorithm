console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [[C, _], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let dp = Array(100001).fill(0);

  items.forEach(([cost, result]) => {
    for (let i = cost; i <= 100000; i++) dp[i] = Math.max(dp[i], dp[i - cost] + result);
  });

  for (let i = 0; i <= 100000; i++) {
    if (dp[i] >= C) return i;
  }
}
