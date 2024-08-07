let arr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

arr.pop();

arr.forEach((i) =>
  console.log(
    `Objects weighing ${i.toFixed(2)} on Earth will weigh ${(i * 0.167).toFixed(
      2
    )} on the moon.`
  )
);
