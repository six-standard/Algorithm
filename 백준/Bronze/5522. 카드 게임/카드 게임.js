const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const n = getFile
  .split("\n")
  .map(Number)
  .reduce((acc, prev) => acc + prev);

console.log(n);