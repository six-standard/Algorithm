let start;
if (process.platform !== "linux") start = new Date();

console.log(
  solution(
    ...require("fs")
      .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
      .toString()
      .trim()
      .split("\n")
      .map((i) => i.split(" ").map(Number))
  )
);

if (process.platform !== "linux")
  console.log(
    new Date() - start + "ms",
    Math.floor(process.memoryUsage().heapUsed / 1024 / 1024) + "mb"
  );

// ---- function line ----

function bfs(x, y, arr) {
  let queue = [[x, y]];

  const paths = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  while (queue.length) {
    let [cx, cy] = queue.shift();

    if (arr[cy][cx] === 1) {
      paths.forEach((item) => {
        let [nx, ny] = [cx + item[0], cy + item[1]];
        if (nx >= 0 && ny >= 0 && arr[ny] && arr[ny][nx]) {
          queue.push([nx, ny]);
        }
      });
      arr[cy][cx] = 0;
    }
  }
}

function countBugs({ x, y, cabages }) {
  let arr = Array.from({ length: y }, () => Array.from({ length: x }, () => 0));
  let cnt = 0;

  cabages.forEach(([x, y]) => (arr[y][x] = 1));

  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (arr[i][j] === 1) {
        bfs(j, i, arr);
        cnt++;
      }
    }
  }

  return cnt;
}

function solution([length], ...items) {
  let array = [];
  let count = 0;

  for (let i = 0; i < length; i++) {
    const [x, y, cabages] = items[count];
    array.push({ x, y, cabages: items.slice(count + 1, count + 1 + cabages) });
    count += cabages + 1;
  }

  return array.map((item) => countBugs(item)).join("\n");
}
