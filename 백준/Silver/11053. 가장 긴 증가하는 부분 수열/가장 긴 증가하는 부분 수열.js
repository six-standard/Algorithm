const [_, n] = require("fs")
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

let arr = [];

for (let i of n) {
  if (!!!arr || arr[arr.length - 1] < i) {
    arr.push(i);
  } else {
    let left = binarySearch(arr, i);
    arr[left] = i;
  }
}

console.log(arr.length);
