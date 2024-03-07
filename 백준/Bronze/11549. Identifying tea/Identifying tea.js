let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const ans = input.shift();
const list = input.shift().split(" ");
let cnt = 0;

list.forEach(i => {
    if(i == ans) cnt++;
})

console.log(cnt);