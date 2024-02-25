let input = require("fs")
  .readFileSync("dev/stdin") ///input.txt
  .toString()
  .trim()
  .split("\n");
let ans = [0, 0];

input.forEach((i, j) => {
  i.split(" ")
    .map(Number)
    .map((i) => (ans[j] += i));
});

console.log(ans[0] >= ans[1] ? ans[0] : ans[1]);
