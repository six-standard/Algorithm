console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [nm, ...items] = input.split("\n");
  const [n, m] = nm.split(" ").map(Number);
  const graph = items.map((item) => item.split(""));

  const queue = [];
  const moveX = [1, -1, 0, 0];
  const moveY = [0, 0, 1, -1];

  let head = 0;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (graph[y][x] === "S") queue.push(["H", x, y, 0]);
      else if (graph[y][x] === "*") queue.unshift(["W", x, y, 0]);
    }
  }

  while (head < queue.length) {
    const [type, cx, cy, time] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [cx + moveX[i], cy + moveY[i]];

      if (nx >= 0 && ny >= 0 && nx < m && ny < n && graph[ny][nx] !== "X") {
        const next = graph[ny][nx];
        if (type === "H" && next !== "*" && next !== "S") {
          if (graph[ny][nx] === "D") return time + 1;
          queue.push(["H", nx, ny, time + 1]);
          graph[ny][nx] = "S";
        } else if (type === "W" && next !== "*" && next !== "S" && next !== "D") {
          queue.push(["W", nx, ny, 0]);
          graph[ny][nx] = "*";
        }
      }
    }
  }

  return "KAKTUS";
}
