console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  return input.slice(input.length - 5, input.length);
}
