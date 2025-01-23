console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [sizes, ...items] = input.split("\n");
  const [h, w] = sizes.split(" ").map(Number);
  const array = items.map((i) => i.split(""));

  let start = null;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (array[y][x] === "I") {
        return bfs(x, y, w, h, array);
      }
    }
  }
}

function bfs(x, y, w, h, array) {
  let queue = [[x, y]];
  let visited = Array.from({ length: h }, () => Array(w).fill(0));
  visited[y][x] = 1;
  let cnt = 0;
  const paths = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  while (queue.length) {
    let [cx, cy] = queue.shift(); // shift를 사용하지만 큐 최적화를 통해 개선 가능

    for (let [tx, ty] of paths) {
      let [nx, ny] = [cx + tx, cy + ty];

      if (ny >= 0 && nx >= 0 && ny < h && nx < w && !visited[ny][nx] && array[ny][nx] !== "X") {
        visited[ny][nx] = 1; // 방문 체크
        queue.push([nx, ny]);
        if (array[ny][nx] === "P") cnt++;
      }
    }
  }

  return cnt > 0 ? cnt : "TT";
}
