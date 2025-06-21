console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [_, ...coins] = input.split("\n").map(Number);
  const max = Math.max(...coins);

  const dp = new Array(max+1).fill(0);
  dp[0] = 1;

  [1, 2, 3].forEach(item => {
    for(let i = item; i<=max; i++) {
      dp[i] += dp[i - item];
    }
  });
  
  return coins.map(i => dp[i]).join("\n");
}
