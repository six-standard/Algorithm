
console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [[by, bm, bd], [cy, cm, cd]] = input.split("\n").map((i) => i.split(" ").map(Number));
  let korea_old = cy - by;
  const year_old = cy - by;
  const count_old = cy - by + 1;

  if (cm < bm || (cm === bm && cd < bd)) {
    korea_old--;
  }

  return [korea_old, count_old, year_old].join("\n");
}
