let [_, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((i) => i.split(" "))
  .map((i) => i.map(Number));
input = input.sort((i, j) => {
  if (i[1] === j[1]) {
    return i[0] - j[1];
  } else {
    return i[1] - j[1];
  }
});
let arr = [];
let last = 0;
input.forEach((i) => {
  if (i[0] >= last) {
    arr.push(i);
    last = i[1];
  }
});
console.log(arr.length);
