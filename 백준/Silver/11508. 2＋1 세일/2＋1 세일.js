console.log(solution(require("fs").readFileSync(0).toString().trim()));

function solution(input) {
  const [_, ...prices] = input.split("\n").map(Number);

  return prices.sort((a, b) => b-a).filter((_, index) => (index + 1) % 3 !== 0).reduce((acc, prev) => acc + prev, 0);
}
