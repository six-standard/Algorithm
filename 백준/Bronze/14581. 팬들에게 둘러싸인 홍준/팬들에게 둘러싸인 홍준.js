const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const n = getFile;

console.log(":fan::fan::fan:")
console.log(`:fan::${n}::fan:`)
console.log(":fan::fan::fan:")