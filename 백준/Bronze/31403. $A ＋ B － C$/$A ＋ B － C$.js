const [a, b, c] = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const [na, nb, nc] = [a, b, c].map(Number);

console.log(na + nb - nc);
console.log(a + b - c);
