console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) { 
  const [X, Y] = input.split(" ");

  return Number((Number(X.split("").reverse().join("")) + Number(Y.split("").reverse().join(""))).toString().split("").reverse().join(""));
}