console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [N, K] = input.split(" ").map(Number);
  if(N <= 1) return 0;
  const bunsets = Math.floor(N / 2);

  return Math.min(bunsets, K);
}
