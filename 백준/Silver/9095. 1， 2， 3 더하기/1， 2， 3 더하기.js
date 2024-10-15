const [_, ...n] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

let arr = [1, 2, 4];

for (let i of n) {
  for (let j = 3; j < i; j++) {
    arr[j] = arr[j - 1] + arr[j - 2] + arr[j - 3];
  }
  console.log(arr[i - 1]);
}
