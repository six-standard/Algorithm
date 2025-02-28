console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const items = input.split("\n").map((i) => i.split(" ").map(Number));
  const graph = Array.from({ length: 12 }, () => []);
  const queue = [0];
  const visited = Array(12).fill(0);
  let head = 0;

  for (let i = 0; i < items.length; i++) {
    const [from, to] = items[i];
    graph[from - 1].push(to - 1);
    graph[to - 1].push(from - 1);
  }

  while (head <= queue.length) {
    const cur = queue[head++];
    visited[cur] = 1;
    if (graph[cur].length >= 3) {
      if (graph[cur].reduce((acc, prev) => acc + graph[prev].length, 0) === 6) return cur + 1;
    }
    graph[cur].forEach((i) => !visited[i] && queue.push(i));
  }

  return graph;
}