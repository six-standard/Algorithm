let [e, ...grd] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

grd = grd.map((i) => i.split("").map(Number));

let moves = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

const bfs = (start) => {
  let cnt = 1;
  let queue = [start];
  while (queue.length) {
    let [cx, cy] = queue.shift();
    for (let n = 0; n < 4; n++) {
      let [nx, ny] = [cx + moves[n][0], cy + moves[n][1]];
      if (nx >= 0 && nx < e && ny >= 0 && ny < e && grd[ny][nx]) {
        queue.push([nx, ny]);
        grd[ny][nx] = 0;
        cnt++;
      }
    }
  }
  return cnt;
};

let arr = [];

for (let y = 0; y < e; y++) {
  for (let x = 0; x < e; x++) {
    if (grd[y][x] === 1) {
      grd[y][x] = 0;
      arr.push(bfs([x, y]));
    }
  }
}

console.log(arr.length);
console.log(arr.sort((i, j) => i - j).join("\n"));
