console.log(
  require("fs")
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")[1]
    .split(" ")
    .sort((i, j) => i - j)
    .map(Number)
    .reduce((acc, prev) => [acc[0] + prev, acc[1] + acc[0] + prev], [0, 0])[1]
);
