const n = require("fs").readFileSync("/dev/stdin").toString().trim();

const arr = [1, 2];

for(let i = 2; i<n; i++) {
    arr[i] = (arr[i-1] + arr[i-2]) % 15746
}

console.log(arr[n-1]);