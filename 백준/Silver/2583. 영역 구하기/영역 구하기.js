
console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[M, N, K], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let answer = [];
  const graph = Array.from({ length: M }, () => Array(N).fill(0));

  const bfs = (x, y) => {
    let queue = [[x, y]];
    let head = 0;
    let cnt = 0;
    graph[y][x] = 1;

    while (head < queue.length) {
      const [cx, cy] = queue[head++];
      cnt++;
      [
        [cx + 1, cy],
        [cx - 1, cy],
        [cx, cy + 1],
        [cx, cy - 1],
      ].forEach(([nx, ny]) => {
        if (nx >= 0 && ny >= 0 && nx < N && ny < M && !graph[ny][nx]) {
          graph[ny][nx] = 1;
          queue.push([nx, ny]);
        }
      });
    }

    return cnt;
  };

  for (let [sx, sy, ex, ey] of items) {
    for (let j = sy; j < ey; j++) {
      for (let k = sx; k < ex; k++) {
        graph[j][k] = 1;
      }
    }
  }

  for (let y = 0; y < M; y++) {
    for (let x = 0; x < N; x++) {
      if (graph[y][x] === 0) {
        answer.push(bfs(x, y));
      }
    }
  }

  return `${answer.length}\n${answer.sort((a, b) => a - b).join(" ")}`;
}