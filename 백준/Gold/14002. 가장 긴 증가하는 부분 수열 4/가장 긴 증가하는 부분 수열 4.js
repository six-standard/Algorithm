console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[n], items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let dp = Array(n).fill(1);
  let trace = Array(n).fill(-1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (items[i] > items[j] && dp[i] < dp[j] + 1) {
        dp[i] = dp[j] + 1;
        trace[i] = j;
      }
    }
  }

  let max_index = dp.indexOf(Math.max(...dp));
  let answer = [];

  while (max_index !== -1) {
    answer.push(items[max_index]);
    max_index = trace[max_index];
  }

  return `${answer.length}\n${answer.reverse().join(" ")}`;
}
