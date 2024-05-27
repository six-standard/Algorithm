const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .sort((i, j) => i - j);

let cnt = input.reduce((sum, now) => sum + now) - 100;

outer: for (let i = 0; i < 9; i++) {
  inner: for (let j = i + 1; j < 9; j++) {
    if (input[i] + input[j] === cnt) {
      console.log(
        input.filter((n) => n !== input[i] && n !== input[j]).join("\n")
      );
      break outer;
    }
  }
}