const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let avg = 0;
let mid = 0;

input.forEach(i => avg += Number(i));
mid = input.sort((i, j) => { return Number(i) - Number(j) })[2];

console.log(parseInt(avg/5));
console.log(parseInt(mid));