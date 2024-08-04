let items = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const burger = Math.min(...items.slice(0, 3).map(Number));
const drink = Math.min(...items.slice(3, 5).map(Number));
console.log(burger + drink - 50);
