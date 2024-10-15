const n = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

console.log(n[0] >= n[1] / 2 ? "E" : "H");
