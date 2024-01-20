let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");
console.log(input.map((i) => (i === i.toUpperCase() ? i.toLowerCase() : i.toUpperCase())).join(""));
