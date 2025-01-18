console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[length], ...items] = input.split("\n").map((item) => item.split(" ").map(Number));

  let graph = Array.from({ length }, () => []);
  let parent = Array.from({ length }, () => 0);
  let queue = [0];
  parent[0] = 0;

  items.forEach(([from, to]) => {
    graph[from - 1].push(to - 1);
    graph[to - 1].push(from - 1);
  });

  while (queue.length) {
    let index = queue.shift();
    graph[index].forEach((item) => {
      if (!parent[item]) {
        parent[item] = index + 1;
        queue.push(item);
      }
    });
  }

  return parent.slice(1, length + 1).join("\n");
}