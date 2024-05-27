let [[_, min], input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "))
  .map((i) => i.map(Number));
let max = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    for (let n = j + 1; n < input.length; n++) {
      const item = input[i] + input[j] + input[n];
      if (item > max && item <= min) {
        max = item;
      }
    }
  }
}
console.log(max);
