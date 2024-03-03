let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();
let cnt = 0;

input.forEach((i) => {
  if (parseInt(i.replace("D-", "")) <= 90) cnt++;
});

console.log(cnt);