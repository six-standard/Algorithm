const [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

console.log((BigInt(n) / BigInt(m)).toString().replaceAll("n", ""));
console.log((BigInt(n) % BigInt(m)).toString().replaceAll("n", ""));
