const [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

if(n > m)console.log(24 - n + m);
else console.log(m - n);