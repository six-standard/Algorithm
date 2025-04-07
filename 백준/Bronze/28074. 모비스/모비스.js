console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const items = input.split("");
  const obj = {};

  items.forEach((i) => (obj[i] = 1));
  return obj["M"] && obj["O"] && obj["B"] && obj["I"] && obj["S"] ? "YES" : "NO";
}