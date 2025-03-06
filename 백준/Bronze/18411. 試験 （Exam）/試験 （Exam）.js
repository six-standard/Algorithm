console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [a, b] = input
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  return a + b;
}