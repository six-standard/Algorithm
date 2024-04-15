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
let visited = new Array(items).fill(false);
let qnt = 0;

//답
let ansB = [];
let ansD = [];

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
    if (visited[item - 1] !== false) continue;
    queue.push(...graph[item - 1]);
    visited[item - 1] = true;
    ansB.push(item);
  }
};

function DFS(item) {
  let n = item;
  if (visited[n - 1] !== false) return;
  visited[n - 1] = true;
  ansD.push(n);
  graph[n - 1].map((i) => !visited[i - 1] && DFS(i));
  return;
}

DFS(first);
visited = new Array(items).fill(false);
BFS();

console.log(ansD.join(" "));
console.log(ansB.join(" "));
