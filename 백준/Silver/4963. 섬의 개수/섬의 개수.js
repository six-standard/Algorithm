console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const items = input.split("\n").map((item) => item.split(" ").map(Number));
  let maps = [];

  for (let i = 0; i < items.length; ) {
    let [x, y] = items[i++];
    if (x === 0 && y === 0) break;
    let map = [];
    for (let j = 0; j < y; j++) map.push(items[i++]);
    maps.push({ x, y, map });
  }

  return maps
    .map(({ x, y, map }) => {
      let islands = 0;
      for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
          if (map[j][i]) {
            bfs(i, j, x, y, map);
            islands++;
          }
        }
      }
      return islands;
    })
    .join("\n");
}

function bfs(ix, iy, x, y, map) {
  let queue = [[ix, iy]];
  while (queue.length) {
    let [cx, cy] = queue.shift();

    [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
      [1, 1],
      [1, -1],
      [-1, 1],
      [-1, -1],
    ].forEach(([tx, ty]) => {
      let [nx, ny] = [tx + cx, ty + cy];
      if (nx >= 0 && ny >= 0 && nx < x && ny < y && map[ny][nx]) {
        map[ny][nx] = 0;
        queue.push([nx, ny]);
      }
    });
  }
}