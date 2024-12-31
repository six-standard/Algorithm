let [_, ...n] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(
  n
    .join(" ")
    .split(" ")
    .sort((i, j) => i - j)
    .join(" ")
);
