console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[_, K], caffeins] = input.split("\n").map((i) => i.split(" ").map(Number));
  const graph = Array(K + 1).fill(Infinity);
  graph[0] = 0;

  for (let c of caffeins) for (let i = K; i >= c; i--) graph[i] = Math.min(graph[i], graph[i - c] + 1);

  return graph[K] === Infinity ? -1 : graph[K];
}