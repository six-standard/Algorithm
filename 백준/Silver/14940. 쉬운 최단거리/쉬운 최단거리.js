console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[n, m], ...grid] = input.split("\n").map((i) => i.split(" ").map(Number));
  const dist = Array.from({ length: n }, () => Array(m).fill(-1));
  const queue = [];
  let head = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 2) {
        queue.push([j, i]);
        dist[i][j] = 0;
      } else if (grid[i][j] === 0) dist[i][j] = 0;
    }
  }

  const dx = [0, 0, 1, -1];
  const dy = [1, -1, 0, 0];

  while (head < queue.length) {
    const [x, y] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && ny >= 0 && ny < n && nx < m) {
        if (grid[ny][nx] === 1 && dist[ny][nx] === -1) {
          dist[ny][nx] = dist[y][x] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  return dist.map((i) => i.join(" ")).join("\n");
}
