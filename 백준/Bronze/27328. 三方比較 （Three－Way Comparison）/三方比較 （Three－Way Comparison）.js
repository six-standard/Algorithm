const i = require("fs").readFileSync("/dev/stdin").toString().split("\n")
console.log(i[0] == i[1] ? 0 : i[0]<i[1] ? -1 : 1)