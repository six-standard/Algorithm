const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const n = getFile.split("");

console.log(n[0] == n[1] ? 1 : 0)
