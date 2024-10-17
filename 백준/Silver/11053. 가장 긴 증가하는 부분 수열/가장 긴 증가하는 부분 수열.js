const [m, n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const binarySearch = (arr, target) => {
  let [left, right] = [0, arr.length - 1];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

let arr = [n[0]];

for (let i = 1; i < m; i++) {
  if (arr[arr.length - 1] < n[i]) {
    arr.push(n[i]);
  } else {
    let left = binarySearch(arr, n[i]);
    arr[left] = n[i];
  }
}

console.log(arr.length);
