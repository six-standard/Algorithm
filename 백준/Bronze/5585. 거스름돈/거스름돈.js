let n = 1000 - Number(require("fs").readFileSync("/dev/stdin").toString().trim());
let cnt = 0;
const charges = [500, 100, 50, 10, 5, 1];

charges.forEach((i) => {
  const value = Math.floor(n / i);
  n -= i * value;
  cnt += value;
});

console.log(cnt);
