const input = require("fs").readFileSync("/dev/stdin").toString().split("");
let cnt = 0;
input.map(i => { if(i == "a" || i == "e" || i=="i" || i=="o" || i=="u") cnt++})
console.log(cnt);