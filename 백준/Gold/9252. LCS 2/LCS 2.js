console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [a, b] = input.split("\n").map((i) => i.split(""));
  let dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  trace = [];

  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  let [i, j] = [a.length, b.length];
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      trace.push(a[i - 1]);
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else j--;
  }

  return `${dp[a.length][b.length]}${dp[a.length][b.length] ? `\n${trace.reverse().join("")}` : ""}`;
}