console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [hw, ...items] = input.split("\n");
  items = items.map((i) => i.split(""));
  const [h, w] = hw.split(" ").map(Number);
  const answer = [0, 0];

  const bfs = (x, y) => {
    const queue = [[x, y]];
    let head = 0;
    let v = [0, 0];

    if (items[y][x] === "v") v[1]++;
    else v[0]++;
    items[y][x] = "#";

    while (head < queue.length) {
      const [cx, cy] = queue[head++];
      [
        [cx + 1, cy],
        [cx - 1, cy],
        [cx, cy + 1],
        [cx, cy - 1],
      ].forEach(([nx, ny]) => {
        const target = items[ny][nx];
        if (nx >= 0 && ny >= 0 && nx < w && ny < h && target !== "#") {
          if (target === "v") v[1]++;
          else if (target === "k") v[0]++;
          items[ny][nx] = "#";
          queue.push([nx, ny]);
        }
      });
    }

    return [+(v[0] <= v[1]), Math.max(...v)];
  };

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (items[i][j] === "v" || items[i][j] === "k") {
        const [target, result] = bfs(j, i);
        answer[target] += result;
      }
    }
  }

  return answer.join(" ");
}