let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
input.shift();
let arr = [1, 2, 4];

for (let i = 3; i <= Math.max.apply(null, input); i++) {
  arr[i] = arr[i - 1] + arr[i - 2] + arr[i - 3];
}

input.forEach((i) => {
  console.log(arr[i - 1]);
});
