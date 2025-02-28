console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  if (input === "1 2 3 4 5 6 7 8") return "ascending";
  else if (input === "8 7 6 5 4 3 2 1") return "descending";
  else return "mixed";
}
