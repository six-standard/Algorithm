console.log(
  solution(
    ...require("fs")
      .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
      .toString()
      .trim()
      .split("\n")
      .map((i) => i.split(" ").map(Number))
  )
);

function solution([length], items) {
  let dp = [items[0]];

  for (let i = 1; i < length; i++) {
    dp[i] = items[i];
    for (let j = 0; j < i; j++) {
      if (items[j] < items[i]) dp[i] = Math.max(dp[i], dp[j] + items[i]);
    }
  }

  return Math.max(...dp);
}
