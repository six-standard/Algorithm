console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  return Math.floor(input / 10);
}
