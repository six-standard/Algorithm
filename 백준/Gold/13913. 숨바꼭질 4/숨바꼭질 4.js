console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [N, K] = input.split(" ").map(Number);
  if (N === K) return `0\n${N}`;
  const visited = Array(100001).fill(0);
  const previous = Array(100001).fill(-1);
  const queue = [[N, 0]];
  let head = 0;

  while (head < queue.length) {
    const [cs, cc] = queue[head++];
    if (cs === K) {
      const path = [];
      for (let j = K; j !== -1 && path[path.length - 1] !== N; j = previous[j]) {
        path.push(j);
      }
      return `${cc}\n${path.reverse().join(" ")}`;
    }
    [cs + 1, cs - 1, cs * 2].forEach((i) => {
      if (i >= 0 && i <= 100000 && !visited[i]) {
        visited[i] = 1;
        previous[i] = cs;
        queue.push([i, cc + 1]);
      }
    });
  }
}