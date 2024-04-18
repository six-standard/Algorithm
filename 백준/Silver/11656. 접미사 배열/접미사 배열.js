let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("");
let items = [];

while (input.length) {
  items.push(input.join(""));
  input.shift();
}

console.log(items.sort().join("\n"));