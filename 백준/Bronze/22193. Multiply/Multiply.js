const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

let [_, n, m] = getFile.split("\n").map(Number);

console.log(n * m);