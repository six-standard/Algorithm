console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  return input
    .replaceAll("DKSH", "*")
    .split("")
    .filter((i) => i === "*").length;
}