const [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(i => BigInt(i));
console.log(n + m + "")