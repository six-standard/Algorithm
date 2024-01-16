let M = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
M.shift();

let hash = {};
let cnt = 0;

M.forEach((i) => {
  if (i == "ENTER") hash = {};
  else {
    if (!hash[i]) {
      cnt++;
      hash[i] = 1;
    }
  }
});

console.log(cnt);
