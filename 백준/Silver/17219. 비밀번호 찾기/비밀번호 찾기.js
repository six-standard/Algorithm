console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [format, ...items] = input.split("\n").map((i) => i.split(" "));
  const [N, M] = format.map(Number);
  let answer = "";
  const obj = {};

  items.slice(0, N).forEach(([site, password]) => {
    obj[site] = password;
  });

  items.slice(N, N + M).forEach((i) => {
    if (obj[i]) answer = answer + `${obj[i]}\n`;
  });

  return answer.trim();
}