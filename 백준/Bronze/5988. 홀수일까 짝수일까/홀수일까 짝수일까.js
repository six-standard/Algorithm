console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [_, ...items] = input.split("\n").map(BigInt);
  return items.map((i) => (i % 2n === 0n ? "even" : "odd")).join("\n");
}