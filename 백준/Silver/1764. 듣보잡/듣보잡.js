let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ");
// let input = [
//   "ohhenrie",
//   "charlie",
//   "baesangwook",
//   "obama",
//   "baesangwook",
//   "ohhenrie",
//   "clinton",
// ];
let hrd = input.splice(0, n);
let ent = input.splice(0, input.length);
let obj = {};
let ans = [];

hrd.forEach((i) => {
  obj[i] = true;
});
ent.forEach((i) => {
  if (obj[i]) ans.push(i);
});

console.log(ans.length);
ans.sort().forEach((i) => console.log(i));