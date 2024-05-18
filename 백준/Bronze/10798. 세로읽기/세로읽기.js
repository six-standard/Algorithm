const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(""));
let ans = [];
const length = Math.max(...input.map((i) => i.length));

for (let i = 0; i < length; i++) {
  let j = 0;
  while (j < input.length) {
    ans.push(!!input[j][i] ? input[j][i] : "");
    j++;
  }
}

console.log(ans.join(""));