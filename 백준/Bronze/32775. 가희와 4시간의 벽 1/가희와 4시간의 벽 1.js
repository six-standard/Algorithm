console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [a, b] = input.split("\n").map(Number);

  return a > b ? "flight" : "high speed rail";
}
