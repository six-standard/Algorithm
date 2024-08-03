let [n, m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let cnt = 0;
while (m > n) {
  const str = m.toString();
  if (m % 2 !== 0 && str[str.length - 1] === "1") {
    m = parseInt(str.slice(0, str.length - 1));
  } else {
    m /= 2;
  }
  cnt++;
}

console.log(m == n ? cnt+1 : -1);
