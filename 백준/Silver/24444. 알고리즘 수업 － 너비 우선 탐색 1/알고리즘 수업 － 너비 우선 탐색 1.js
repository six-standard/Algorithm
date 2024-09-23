const [[V, _, S], ...I] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

let arr = Array.from({ length: V }, () => []);
let visited = Array.from({ length: V }, () => 0);

I.forEach((i) => {
  const [n, m] = i;
  arr[n - 1].push(m - 1);
  arr[m - 1].push(n - 1);
});

arr.forEach((i) => i.sort((n, m) => n - m));

let que = [S - 1];
let qnt = 0;
let step = 1;

while (qnt !== que.length) {
  const q = que[qnt++];
  if (!!visited[q]) continue;
  visited[q] = step++;
  que.push(...arr[q]);
  arr[q].forEach((i) => !!!visited[i] && que.push(i));
}

console.log(visited.join("\n"));
