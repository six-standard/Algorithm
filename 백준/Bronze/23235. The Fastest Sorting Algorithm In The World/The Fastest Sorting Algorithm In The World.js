n = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .slice(0, -1);

n.forEach((_, j) => {
  console.log(`Case ${j+1}: Sorting... done!`);
});
