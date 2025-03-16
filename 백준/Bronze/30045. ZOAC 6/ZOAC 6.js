console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [_, ...items] = input.split("\n");
  return items.filter((i) => i.includes("OI") || i.includes("01")).length;
}