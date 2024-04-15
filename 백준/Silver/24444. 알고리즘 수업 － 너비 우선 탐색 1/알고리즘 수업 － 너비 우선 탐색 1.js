// 입력
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "))
  .map((i) => i.map(Number));
const [items, _, first] = input.shift();

// BFS 큐
let queue = [first];
let visited = new Array(items).fill(0);
let qnt = 0;
let step = 1;

// 정점 설정
let graph = Array.from({ length: items }, () => []);
input.map((i) => {
  const [n, m] = i;
  graph[n - 1].push(m);
  graph[m - 1].push(n);
});
graph.map((i) => i.sort((n, m) => n - m));

const BFS = () => {
  while (qnt !== queue.length) {
    let item = queue[qnt++];
    if (visited[item - 1] != 0) continue;
    queue.push(...graph[item - 1]);
    visited[item - 1] = step++;
  }
};

BFS();

console.log(visited.join("\n"));
