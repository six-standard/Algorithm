const n = parseInt(require("fs").readFileSync("/dev/stdin").toString());

console.log(n % 7 == 2 ? 1 : 0);