const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const [n, m, a, b, c] = getFile.split(" ");

console.log(n * m - a * b * c);