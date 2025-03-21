console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[A, B], [C, D]] = input.split("\n").map((i) => i.split(" ").map(Number));
  if (B <= A) return B * C;
  return A * C + (B - A) * D;
}
