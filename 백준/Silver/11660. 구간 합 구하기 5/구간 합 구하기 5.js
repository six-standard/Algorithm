console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[N, M], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  const target = items.slice(0, N);
  const graph = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      graph[i][j] = graph[i - 1][j] + graph[i][j - 1] - graph[i - 1][j - 1] + target[i - 1][j - 1];
    }
  }

  let result = "";
  for (let i = 0; i < M; i++) {
    const [x1, y1, x2, y2] = items[N + i];

    const sum =
      graph[x2][y2] -
      (x1 > 1 ? graph[x1 - 1][y2] : 0) -
      (y1 > 1 ? graph[x2][y1 - 1] : 0) +
      (x1 > 1 && y1 > 1 ? graph[x1 - 1][y1 - 1] : 0);
    result += `${sum}\n`;
  }

  return result.trim();
}