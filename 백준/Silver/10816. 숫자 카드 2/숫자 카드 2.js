let M = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
M = [M[1], M[3]]

let hash = {};
let ans = [];

M[0].split(" ").forEach((i) => {
  if (!hash[i]) hash[i] = 0;
  hash[i]++;
});

M[1].split(" ").forEach((i) => {
  if (!hash[i]) ans.push(0);
  else ans.push(hash[i]);
});

console.log(ans.join(" "));