const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

let n = getFile;

console.log(n - n * 0.22, n - (n - n * 0.8) * 0.22);
