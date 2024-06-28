const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const n = getFile.split("\n").map((i) => i.split(" ").map(Number));
let ans = [];
n.forEach((i) => {
  ans.push(i[0] * 6 + i[1] * 3 + i[2] * 2 + i[3] * 1 + i[4] * 2);
});

console.log(ans.join(" "));