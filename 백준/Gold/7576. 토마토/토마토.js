console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[w, h], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  const paths = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const queue = [];
  let answer = 0;
  let head = 0;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (items[i][j] === 1) queue.push([j, i, 0]);
    }
  }
  while (head < queue.length) {
    const [cx, cy, cc] = queue[head++];

    paths.forEach(([tx, ty]) => {
      const [nx, ny] = [cx + tx, cy + ty];
      if (ny >= 0 && nx >= 0 && ny < h && nx < w && items[ny][nx] === 0) {
        items[ny][nx] = 1;
        answer = cc + 1;
        queue.push([nx, ny, cc + 1]);
      }
    });
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (items[i][j] === 0) return -1;
    }
  }

  return answer;
}
