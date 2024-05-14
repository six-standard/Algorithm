const m = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let cnt = [1, 0];
let arr = [1, 1];

const fib1 = (n) => {
  if (n > 2) {cnt[0]++;}
  return n <= 2 ? 1 : fib1(n - 1) + fib1(n - 2);
};

const fib2 = (n) => {
  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
    cnt[1]++;
  }
  return arr[n - 1];
};

fib1(m);
fib2(m);

console.log(cnt.join(" "));