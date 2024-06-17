let [_, ...n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
n = n.splice(-n.length);
let arr = [];
n.map((i) => {
  arr.push(/^(100+1+|01)+$/.test(i) ? "YES" : "NO");
});

console.log(arr.join("\n"));