let [n, m, k] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);
let result = n % m;

for (let i = 0; i < k - 1; i++) {
  result *= 10;
  result %= m;
}

result *= 10;

console.log(Math.floor(result / m));
