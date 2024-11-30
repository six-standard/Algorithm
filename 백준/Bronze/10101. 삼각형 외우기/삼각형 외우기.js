let [a, b, c] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);
let is180 = a + b + c === 180;

function solution() {
  if (a === 60 && b === 60 && c === 60) {
    return "Equilateral";
  } else if (is180 && (a === b || a === c || b === c)) {
    return "Isosceles";
  } else if (is180 && a !== b && a !== c && b !== c) {
    return "Scalene";
  } else {
    return "Error";
  }
}

console.log(solution());
