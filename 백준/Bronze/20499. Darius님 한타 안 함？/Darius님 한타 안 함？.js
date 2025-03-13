console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [K, D, A] = input.split("/").map(Number);

  if (D === 0 || K + A < D) return "hasu";
  return "gosu";
}
