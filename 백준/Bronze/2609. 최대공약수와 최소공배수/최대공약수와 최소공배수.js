console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let N = input.split(" ").map(Number);
  let [a, b] = N;

  while (a % b !== 0) {
    let n = a % b;
    if (n !== 0) {
      a = b;
      b = n;
    }
  }

  return `${b}\n${(N[0] * N[1]) / b}`;
}
