const i = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
console.log(parseInt(((i[0] + 1) * (i[1] + 1)) / (i[2] + 1) - 1));
