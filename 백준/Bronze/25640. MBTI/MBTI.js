let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [MBTI, _] = input.splice(0, 2);
let cnt = 0;

input.map((i) => {
  if (MBTI === i) cnt++;
});

console.log(cnt);
