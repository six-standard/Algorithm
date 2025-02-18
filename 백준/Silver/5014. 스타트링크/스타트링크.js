console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [F, S, G, U, D] = input.split(" ").map(Number);
  let queue = [[S, 0]];
  let visited = Array(F + 1).fill(0);
  let head = 0;

  if (S === G) return 0;

  while (head < queue.length) {
    const [floor, count] = queue[head++];
    if (floor === G) {
      return count;
    }

    [floor + U, floor - D].forEach((i) => {
      if (visited[i] || i < 1 || i > F) return "use the stairs";
      visited[i] = 1;
      queue.push([i, count + 1]);
    });
  }

  return "use the stairs";
}
