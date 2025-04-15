console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  return ["U", "O", "S"][(Number(input) - 1) % 3];
}
