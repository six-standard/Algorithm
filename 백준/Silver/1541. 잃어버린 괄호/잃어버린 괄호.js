console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let answer = input.split("-").map((i) =>
    i
      .split("+")
      .map(Number)
      .reduce((arr, prev) => arr + prev, 0)
  );
  return answer[0] * 2 - answer.reduce((arr, prev) => arr + prev, 0);
}