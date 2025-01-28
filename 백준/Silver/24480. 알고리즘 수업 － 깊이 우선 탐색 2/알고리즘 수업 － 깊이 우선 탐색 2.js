console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [[nodes, edges, start], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let graph = Array.from({ length: nodes }, () => []);
  let visited = new Array(nodes).fill(0);
  visited[start - 1] = 1;
  let cnt = 1;

  items.forEach(([from, to]) => {
    graph[from - 1].push(to - 1);
    graph[to - 1].push(from - 1);
  });

  graph = graph.map((i) => i.sort((a, b) => b - a));

  function dfs(array, node) {
    array[node].forEach((i) => {
      if (!visited[i]) {
        visited[i] = ++cnt;
        dfs(array, i);
      }
    });
  }

  dfs(graph, start - 1);

  return visited.join("\n");
}
