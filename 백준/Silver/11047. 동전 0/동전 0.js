let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let [_, money] = input.shift().split(" ").map(Number);
input = input.sort((i, j) => i - j).map(Number);
let cnt = 0;

for (let i = input.length - 1; i > 0; i--) {
  cnt += Math.floor(money / input[i]);
  money = money % input[i];
}

console.log(cnt);