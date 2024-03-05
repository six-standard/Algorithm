let input = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number);
input.shift();

input.forEach(i => {
  console.log("=".repeat(i));
})