const items = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .filter((a) => a !== "");

console.log(items.length);