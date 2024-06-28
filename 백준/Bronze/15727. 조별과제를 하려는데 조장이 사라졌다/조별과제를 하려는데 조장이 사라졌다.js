const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

let n = getFile;
let sum = Math.floor(n / 5);
n -= n * 5;

if (!!(n % 5)) sum += 1;

console.log(sum);