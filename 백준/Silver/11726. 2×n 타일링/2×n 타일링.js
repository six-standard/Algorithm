const n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let arr = [1, 2];

for (let i = 2; i < n; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
}

console.log(arr[n - 1]);
