let res = 1
let list = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

input.forEach(i => res *= parseInt(i));
res = res.toString();

for(i of res) list[i] += 1

list.forEach(i => console.log(i));