const n = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

const m = n.reduce((acc, prev) => acc + prev, 0) - 100;

outer: for (let i = 0; i < n.length; i++) {
  for (let j = i; j < n.length; j++) {
    if (n[i] + n[j] === m && i !== j) {
      n[i] = undefined;
      n[j] = undefined;
      break outer;
    }
  }
}

for (let i of n.sort((a, b) => a - b)) {
  if (i !== undefined) {
    console.log(i);
  }
}
