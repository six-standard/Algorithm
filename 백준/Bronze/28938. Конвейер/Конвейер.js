const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const [_, n] = getFile.split("\n").map((i) => i.split(" "));
const val = n.reduce((acc, prev) => parseInt(acc) + parseInt(prev));
console.log(val === 0 ? "Stay" : val > 0 ? "Right" : "Left");