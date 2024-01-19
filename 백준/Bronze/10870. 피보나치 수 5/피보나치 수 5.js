const input = require("fs").readFileSync("/dev/stdin").toString().trim();
let pibo = [0, 1, 1];

for (let i = 3; i <= input; i++) {
  pibo[i] = pibo[i - 1] + pibo[i - 2];
}
console.log(pibo[input]);