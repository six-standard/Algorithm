const [a, b, c] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(a * 3 + b * 4 + c * 5);
