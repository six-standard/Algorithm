let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("");

let answer = [];

for (let i = 0; i < 26; i++) {
  answer.push(0);
}

input.forEach((i, j) => {
  answer[Number(i.charCodeAt(0)) - 97] += 1;
});

console.log(answer.join(" "));
