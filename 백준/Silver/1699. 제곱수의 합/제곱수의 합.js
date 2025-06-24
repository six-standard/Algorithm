console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const item = Number(input);
  const dp = new Array(1000001).fill(0);
  
  for(let i = 1; i<=item; i++) {
    dp[i] = i;
    for(let j = 1; j*j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i-j*j]+1);
    }
  }
  return dp[item];
}