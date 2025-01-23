console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [[length], [from, to], [relates], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let graph = Array.from({ length }, () => []);
  let visited = Array.from({ length }, () => 0);
  let queue = [[from - 1, 0]];

  items.forEach(([from, to]) => {
    graph[from - 1].push(to - 1);
    graph[to - 1].push(from - 1);
  });

  while (queue.length) {
    let [cur, cnt] = queue.shift();
    if (cur === to - 1) return cnt;
    graph[cur].forEach((i) => {
      if (!visited[i]) {
        visited[i] = 1;
        queue.push([i, cnt + 1]);
      }
    });
  }

  return -1;
}