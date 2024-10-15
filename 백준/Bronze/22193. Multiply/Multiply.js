const [_, n, m] = require("fs").readFileSync("/dev/stdin").toString().split("\n");

console.log(BigInt(n) * BigInt(m) + "");
