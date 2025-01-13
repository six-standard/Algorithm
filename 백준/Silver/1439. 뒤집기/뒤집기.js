let [index, ...n] = require("fs").readFileSync("/dev/stdin").toString().trim().split("");
let count = [0, 0];
count[index]++;

n.forEach((i) => {
  if (i !== index) {
    count[i]++;
    index = i;
  }
});

console.log(Math.min(...count));
