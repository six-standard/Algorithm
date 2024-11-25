const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function solution(maps) {
  const [yl, xl] = [maps.length - 1, maps[0].length - 1];
  let visited = Array.from({ length: maps.length }, () => Array(maps[0].length).fill(false));
  visited[0][0] = true;
  let queue = [[0, 0, 1]];
  let cnt = -1;

  while (queue.length !== 0) {
    let [cy, cx, dist] = queue.shift();
    if (cy === yl && cx === xl) {
      cnt = dist;
      break;
    }
    for (let item of directions) {
      let [ny, nx] = [item[0] + cy, item[1] + cx];
      if (nx <= xl && nx >= 0 && ny <= yl && ny >= 0 && !!maps[ny][nx] && !visited[ny][nx]) {
        queue.push([ny, nx, dist + 1]);
        visited[ny][nx] = true;
      }
    }
  }

  return cnt;
}
