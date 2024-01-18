let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.pop();

input.forEach((i) => {
  let tmp = i.split(" ").map(Number);
  if (tmp[0] > tmp[1]) {
    console.log("Yes");
  } else {
    console.log("No");
  }
});