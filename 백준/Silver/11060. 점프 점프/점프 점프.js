console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[length], items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let dp = new Array(length).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j <= i + items[i] && j < length; j++) {
      dp[j] = Math.min(dp[j], dp[i] + 1);
    }
  }

  if (dp[length - 1] === Infinity) return -1;
  else return dp[length - 1];
}
