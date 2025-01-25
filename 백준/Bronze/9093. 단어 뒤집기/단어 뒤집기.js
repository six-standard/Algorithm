console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [_, ...items] = input.split("\n").map((i) => i.split(" "));
  return items.map((i) => i.map((j) => j.split("").reverse().join("")).join(" ")).join("\n");
}