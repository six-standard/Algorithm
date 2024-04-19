let [_, ...arr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
console.log(arr.sort((i, j) => i.split(" ")[0] - j.split(" ")[0]).join("\n"));