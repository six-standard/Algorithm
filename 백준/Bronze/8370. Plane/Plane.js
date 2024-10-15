const n = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(n[0] * n[1] + n[2] * n[3]);
