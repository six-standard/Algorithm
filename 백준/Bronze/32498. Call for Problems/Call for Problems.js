const [_, ...n] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(n.reduce((acc, prev) => (prev % 2 !== 0 ? acc + 1 : acc), 0));
