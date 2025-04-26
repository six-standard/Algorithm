console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let item = Number(input);
  let month = 24288;

  month += item * 7;
  return `${Math.floor(month / 12)} ${(month % 12) + 1}`;
}
