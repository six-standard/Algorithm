let [end, ...maj] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

end = end.split(" ");
maj = maj.map((i) => i.split("").map(Number));
let moves = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];
let queue = [[0, 0, 1]];

while (queue.length) {
  const [x, y, move] = queue.shift();
  if (x == end[0] - 1 && y == end[1] - 1) {
    console.log(move);
    break;
  }
  for (let i = 0; i < 4; i++) {
    let [nx, ny] = [x + moves[i][0], y + moves[i][1]];
    if (nx >= 0 && nx >= 0 && nx < end[0] && ny < end[1] && maj[nx][ny]) {
      maj[nx][ny] = 0;
      queue.push([nx, ny, move + 1]);
    }
  }
}
