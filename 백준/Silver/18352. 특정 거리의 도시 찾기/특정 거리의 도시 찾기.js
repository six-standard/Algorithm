console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[N, M, K, X], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let graph = Array.from({ length: N + 1 }, () => []);
  let visited = Array(N + 1).fill(-1);
  let answer = [];
  for (let i = 0; i < M; i++) graph[items[i][0]].push(items[i][1]);

  let queue = [[X, 0]];
  let head = 0;
  visited[X] = 0;

  while (head < queue.length) {
    let [target, dist] = queue[head++];
    if (dist > K) break;
    if (dist === K) answer.push(target);
    graph[target].forEach((i) => {
      if (visited[i] === -1) {
        visited[i] = dist + 1;
        queue.push([i, dist + 1]);
      }
    });
  }

  return answer.sort((a, b) => a-b).join("\n") || -1;
}