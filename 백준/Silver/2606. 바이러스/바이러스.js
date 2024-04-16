// 입력
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "))
  .map((i) => i.map(Number));
const [peak] = input.shift();
input.shift();

const DFS = (first, peak, items) => {
  let visited = new Array(peak).fill(false);
  let graph = Array.from({ length: peak }, () => []);
  let answer = [];

  items.map((i) => {
    const [n, m] = i;
    graph[n - 1].push(m);
    graph[m - 1].push(n);
  });

  function innerDFS(item) {
    let n = item;
    if (visited[n - 1] !== false) return;
    visited[n - 1] = true;
    answer.push(n);
    graph[n - 1].map((i) => !visited[i - 1] && innerDFS(i));
    return;
  }

  innerDFS(first);
  return answer;
};

console.log(DFS(1, peak, input).length - 1);
