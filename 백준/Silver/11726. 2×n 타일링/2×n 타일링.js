const input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());;;

const solution = (n) => {
  let dp = Array(n).fill(0);

  dp[1] = 1;
  dp[2] = 2;

  for(let i = 3; i<=n; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % 10007;
  }

  return(dp[n]);
}

console.log(solution(input));