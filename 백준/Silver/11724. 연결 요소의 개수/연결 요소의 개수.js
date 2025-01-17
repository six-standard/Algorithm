console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[point, _], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));

  let graph = Array.from({ length: point }, () => []);
  let visited = Array.from({ length: point }, () => 0);
  let answer = 0;

  items.forEach(([from, to]) => {
    graph[from - 1].push(to - 1);
    graph[to - 1].push(from - 1);
  });

  for (let i = 0; i < point; i++) {
    if (!visited[i]) {
      bfs(i, graph, visited);
      answer++;
    }
  }

  return answer;
}

function bfs(start, graph, visited) {
  let queue = [start];

  while (queue.length) {
    const current = queue.shift();
    graph[current].forEach((item) => {
      if (!visited[item]) {
        visited[item] = 1;
        queue.push(item);
      }
    });
  }
}
