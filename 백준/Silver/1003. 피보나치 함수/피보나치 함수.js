let [_, ...n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let arr = [
  [1, 0],
  [0, 1],
];

n.forEach((i) => {
  if (!!arr[i]) {
    console.log(arr[i].join(" "));
  } else {
    for (let j = arr.length; j <= i; j++) {
      arr[j] = [arr[j - 1][0] + arr[j - 2][0], arr[j - 1][1] + arr[j - 2][1]];
    }
    console.log(arr[i].join(" "));
  }
});