let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let arr = [];
let cnt = 0;

input.forEach((i) => {
  if (i % 2 !== 0) {
    arr.push(parseInt(i));
    cnt += parseInt(i);
  }
});

if (arr.length === 0) console.log("-1");
else {
  arr = arr.sort((i, j) => i - j);
  console.log(cnt);
  console.log(arr[0]);
}