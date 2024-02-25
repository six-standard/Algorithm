let input = require("fs")
  .readFileSync("/dev/stdin") 
  .toString()
  .trim()
  .split("\n");

const M = parseInt(input.shift().split(" ")[0]);
let obj = {};
let cnt = 0;
input.splice(0, M).map(i => obj[i] = true);


input.forEach((i) => {
  if (obj[i]) cnt++;
});

console.log(cnt);