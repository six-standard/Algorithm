const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const n = parseInt(getFile);
let a = 1;

for (let i = 1; i <= n; i++) {
  a *= i;
}

console.log(a);