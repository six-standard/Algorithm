const n = require("fs").readFileSync("/dev/stdin").toString().trim() - 1;

let arr = [1n, 1n];

if (n <= 1) {
  console.log("1");
} else {
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  console.log(arr[n].toString().replace("n", ""));
}
