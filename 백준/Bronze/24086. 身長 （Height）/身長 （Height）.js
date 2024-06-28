const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const [n, m] = getFile.split("\n").map(Number);

console.log(m - n)
