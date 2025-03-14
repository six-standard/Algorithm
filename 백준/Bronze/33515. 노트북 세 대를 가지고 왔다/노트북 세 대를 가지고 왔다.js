console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const items = input.split(" ").map(Number);
  return Math.min(...items);
}
