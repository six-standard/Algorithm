let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "))
  .map((i) => i.map(Number));

let [v, _, f] = input.shift();
let visited = Array.from({ length: v }, () => 0);
const arr = Array.from({ length: v }, () => []);
input.map((i) => {
  const [n, m] = i;
  arr[n - 1].push(m);
  arr[m - 1].push(n);
});
arr.map((i) => {
  i.sort((n, m) => n - m);
});

let step = 1;
function DFS(item) {
  let n = item;
  if (visited[n - 1] !== 0) return;
  visited[n - 1] = step++;
  arr[n - 1].map((i) => !!!visited[i - 1] && DFS(i));
  return;
}

DFS(f);
console.log(visited.join("\n"));
