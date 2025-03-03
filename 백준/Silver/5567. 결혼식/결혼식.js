console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[n], [m], ...f] = input.split("\n").map((i) => i.split(" ").map(Number));
  const visited = Array(n + 1).fill(0);
  const graph = Array.from({ length: n + 1 }, () => []);
  const queue = [[1, 0]];
  let head = 0;
  let answer = -1;

  for (let i = 0; i < m; i++) {
    const [a, b] = f[i];
    graph[a].push(b);
    graph[b].push(a);
  }

  while (head < queue.length) {
    const [cur, level] = queue[head++];
    if (level > 2 || visited[cur]) continue;
    visited[cur] = 1;
    answer++;
    graph[cur].forEach((item) => !visited[item] && queue.push([item, level + 1]));
  }

  return answer;
}