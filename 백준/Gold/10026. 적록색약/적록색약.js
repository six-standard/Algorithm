console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const trs = { R: 1, G: 2, B: 3 };
  let [N, ...items] = input.split("\n").map((i) => i.split("").map((i) => trs[i] || Number(i)));
  N = Number(N.join(""));

  const x = [1, -1, 0, 0];
  const y = [0, 0, 1, -1];
  const answer = [];

  const BFS = () => {
    const visited = Array.from({ length: N }, () => Array(N).fill(0));
    let count = 0;

    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visited[i][j]) {
          count++;
          const queue = [[j, i]];
          const cv = items[i][j];
          visited[i][j] = 1;
          while (queue.length) {
            const [cx, cy] = queue.shift();

            for (let n = 0; n < 4; n++) {
              const [nx, ny] = [cx + x[n], cy + y[n]];

              if (
                nx >= 0 &&
                ny >= 0 &&
                nx < N &&
                ny < N &&
                !visited[ny][nx] &&
                items[ny][nx] === cv
              ) {
                visited[ny][nx] = 1;
                queue.push([nx, ny]);
              }
            }
          }
        }
      }
    }
    return count;
  };

  answer.push(BFS());

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (items[i][j] === 2) items[i][j] = 1;
    }
  }

  answer.push(BFS());

  return answer.join(" ");
}
