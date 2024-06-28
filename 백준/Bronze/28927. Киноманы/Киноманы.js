const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

let [[a, b, c], [d, e, f]] = getFile.split("\n").map((i) => i.split(" "));

const max = a * 3 + b * 20 + c * 120;
const mel = d * 3 + e * 20 + f * 120;

console.log(max !== mel ? (max > mel ? "Max" : "Mel") : "Draw");
