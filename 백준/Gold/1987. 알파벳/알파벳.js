console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [hw, ...items] = input.split("\n");
  const [h, w] = hw.split(" ").map(Number);
  const x = [1, -1, 0, 0];
  const y = [0, 0, 1, -1];
  const visited = {};
  let max = 0;

  items = items.map((i) => i.split(""));

  const DFS = (cx, cy, count = 0) => {
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [cx + x[i], cy + y[i]];
      if (nx >= 0 && ny >= 0 && nx < w && ny < h) {
        const next = items[ny][nx];
        if (!visited[next]) {
          visited[next] = 1;

          DFS(nx, ny, count + 1);
          visited[next] = 0;
        }
      }
    }
    if (count > max) max = count;
  };

  visited[items[0][0]] = 1;

  DFS(0, 0, 1);

  return max;
}