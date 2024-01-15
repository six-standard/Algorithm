const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let arr = [0, 1, 1];
for (let i = 3; i <= Number(input); i++) {
  arr[i] = arr[i - 1] + arr[i - 2];
}

console.log(arr[Number(input)]);