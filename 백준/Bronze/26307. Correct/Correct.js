const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const [n, m] = getFile.split(" ").map(Number);

console.log(n * 60 + m - 540);
