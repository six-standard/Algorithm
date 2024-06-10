let [_, n, __, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));
let ans = [];
n = n.sort((i, j) => i - j);

const binary = (item) => {
  let start = 0;
  let end = n.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (n[mid] == item) {
      return 1;
    }

    if (n[mid] > item) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return 0;
};

m.forEach((i) => ans.push(binary(i)));

console.log(ans.join("\n"));