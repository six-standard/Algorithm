console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [_, ...items] = input.split("\n");
  const dp = {};

  items.forEach((i) => {
    if (!dp[i]) dp[i] = 0;
    dp[i]++;
  });

  const answer = Object.entries(dp)
    .filter((i) => i[1] >= 2)
    .map((i) => i[0])
    .sort((a, b) => a.localeCompare(b));

  return [answer.length, ...answer].join("\n");
}
