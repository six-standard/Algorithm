console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[h, w], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let drawings = [];

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (items[i][j]) {
        drawings.push(bfs(i, j, h, w, items));
      }
    }
  }

  return [drawings.length, drawings.length ? Math.max(...drawings) : 0].join("\n");
}

function bfs(cy, cx, my, mx, array) {
  let count = 1;
  let queue = [[cx, cy]];
  const path = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  array[cy][cx] = 0;
  while (queue.length) {
    let [cx, cy] = queue.shift();
    path.forEach(([tx, ty]) => {
      let [nx, ny] = [cx + tx, cy + ty];
      if (nx >= 0 && ny >= 0 && nx < mx && ny < my && array[ny][nx]) {
        array[ny][nx] = 0;
        count++;
        queue.push([nx, ny]);
      }
    });
  }

  return count;
}
