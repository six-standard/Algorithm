const [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
console.log(`${m - n} ${m}`);
