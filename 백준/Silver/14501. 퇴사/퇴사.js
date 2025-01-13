let [[length], ...reservs] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

let dp = Array.from({ length }, () => 0);

for (let i = 0; i < length; i++) {
  const [period, reward] = reservs[i];
  if (period + i > length) continue;
  dp[i] += reward;
  for (let j = i + period; j < length; j++) {
    dp[j] = Math.max(dp[j], dp[i]);
  }
}

console.log(Math.max(...dp));
