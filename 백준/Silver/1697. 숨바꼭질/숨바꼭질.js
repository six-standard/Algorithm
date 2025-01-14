const [n, m] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

const solution = (me, target) => {
  let queue = [[me, 0]];
  let visited = Array.from({ length: 100101 }, () => 0);
  visited[me] = 1;

  while (true) {
    const [place, count] = queue.shift();
    if (place === target) return count;

    [place + 1, place - 1, place * 2].forEach((next) => {
      if (!visited[next] && next >= 0 && next <= 100000) {
        visited[next] = 1;
        queue.push([next, count + 1]);
      }
    });
  }
};

console.log(solution(n, m));