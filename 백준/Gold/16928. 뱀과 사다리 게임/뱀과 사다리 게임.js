console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [_, ...items] = input.split("\n").map((item) => item.split(" ").map(Number));
  const graph = new Array(101).fill(0);
  const queue = [[1, 0]];
  const visited = new Array(101).fill(0);

  items.forEach(([from, to]) => (graph[from] = to));
  visited[1] = 1;

  while (queue.length) {
    const [pos, count] = queue.shift();

    if (pos === 100) return count;

    for (let i = 1; i <= 6; i++) {
      let next = pos + i;
      if (next > 100) continue;

      if (graph[next]) next = graph[next]; // 사다리나 뱀이 있다면 도착 위치로 이동

      if (!visited[next]) {
        visited[next] = 1;
        queue.push([next, count + 1]);
      }
    }
  }

  return 0;
}
