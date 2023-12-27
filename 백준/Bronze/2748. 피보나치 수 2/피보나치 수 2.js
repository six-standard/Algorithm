const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

let dp = Array(input + 1).fill(BigInt(0));
dp[1] = BigInt(1);

for(let i = 2; i<=input; i++) {
    dp[i] = dp[i-1] + dp[i-2];
}

console.log(dp[input].toString());