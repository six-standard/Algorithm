const n = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

let ans = true;
for(let i of n) {
  if(i !== 0 && i !== 1) {
    ans = false;
  }
}

console.log(ans ? "S" : "F")