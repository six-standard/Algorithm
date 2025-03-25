console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [_, ...items] = input.split("\n").map((i) => i.split(" is "));
  const graph = {};
  const visited = {};
  const queue = ["Baba"];
  let head = 0;

  for (let [key, value] of items) {
    if (!graph[key]) graph[key] = [value];
    else graph[key].push(value);
  }

  while (head < queue.length) {
    const item = queue[head++];
    if (graph[item]) {
      graph[item].forEach((i) => {
        if (!visited[i]) {
          visited[i] = 1;
          queue.push(i);
        }
      });
    }
  }

  return Object.keys(visited)
    .sort((a, b) => a.localeCompare(b))
    .join("\n");
}