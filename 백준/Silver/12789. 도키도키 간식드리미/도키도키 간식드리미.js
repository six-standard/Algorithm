const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[1]
  .split(" ")
  .map(Number);
let s = 1;
let arr = [];
let ans = [];

while (input.length) {
  let i = input.shift();
  if (i == s) {
    ans.push(i);
    s++;
  } else {
    arr.push(i);
  }
  while (arr) {
    let i = arr.pop();
    if (i === s) {
      ans.push(i);
      s++;
    } else {
      i !== undefined && arr.push(i);
      break;
    }
  }
}

while (arr) {
  let i = arr.pop();
  if (i > ans[ans.length - 1]) {
    ans.push(i);
    s++;
  } else {
    i !== undefined && arr.push(i);
    break;
  }
}

console.log(!arr.length ? "Nice" : "Sad");
