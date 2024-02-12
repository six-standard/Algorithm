const input = require("fs").readFileSync("/dev/stdin").toString().split("\n")[1].split("");
let cnt = 0;

for(let i of input) {
    if(i == "a" | i=="e" | i=="i" | i=="o" | i=="u") cnt++
}
console.log(cnt);