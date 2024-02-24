const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const queue = Array.from(new Array(input[0]).keys()).map((i) => i + 1);
let answer = [];

let count = 1;
while (queue.length) {
  const shiftItem = queue.shift();
  if (count % input[1] === 0) {
    answer.push(shiftItem);
  } else {
    queue.push(shiftItem);
  }
  count += 1;
}

console.log(`<${answer.join(", ")}>`);
