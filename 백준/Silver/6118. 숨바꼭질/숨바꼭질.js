console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[N, M], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  const graph = Array.from({ length: N + 1 }, () => []);
  const visited = Array(N + 1).fill(0);
  const queue = [[1, 0]];
  const answer = [0, []];
  let head = 0;
  visited[1] = 1;

  for (let i = 0; i < M; i++) {
    const [from, to] = items[i];

    graph[from].push(to);
    graph[to].push(from);
  }

  while (head < queue.length) {
    const [current, dist] = queue[head++];

    if (dist < answer[0]) continue;
    if (dist > answer[0]) {
      answer[0] = dist;
      answer[1] = [current];
    } else answer[1].push(current);

    graph[current].forEach((i) => {
      if (!visited[i]) {
        visited[i]++;
        queue.push([i, dist + 1]);
      }
    });
  }

  return `${Math.min(...answer[1])} ${answer[0]} ${answer[1].length}`;
}