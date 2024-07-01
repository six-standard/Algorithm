let getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

let [n, m] = getFile.split("\n");

console.log((BigInt(n) + BigInt(m)).toString().replace("n", ""));
console.log((BigInt(n) - BigInt(m)).toString().replace("n", ""));
console.log((BigInt(n) * BigInt(m)).toString().replace("n", ""));
