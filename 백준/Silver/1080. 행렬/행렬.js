console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [hw, ...items] = input.split("\n");
  items = items.map((i) => i.split("").map(Number));
  const [h, w] = hw.split(" ").map(Number);
  const [a, b] = [items.slice(0, h), items.slice(h, h * 2)];
  let cnt = 0;

  const flip = (x, y) => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        a[y + i][x + j] = 1 - a[y + i][x + j];
      }
    }
  };

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      if (a[y][x] !== b[y][x]) {
        if (w < 3 || x > w - 3 || h < 3 || y > h - 3) return -1;
        cnt++;
        flip(x, y);
      }
    }
  }

  return cnt;
}