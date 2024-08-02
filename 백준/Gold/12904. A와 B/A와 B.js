const data = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let arr = data[1].split("");

while (arr.length > data[0].length) {
  let data = arr.pop();
  if (data === "A") {
    continue;
  } else {
    arr.reverse();
  }
}

console.log(arr.join("") === data[0] ? 1 : 0);