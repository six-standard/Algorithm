console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [n, m] = input.split(" ").map(Number);
  let visited = new Array(n).fill(0);
  let answer = "";

  function dfs(depth, array, start) {
    if (depth === m) {
      answer += array.join(" ") + "\n";
    } else {
      for (let i = start; i < n; i++) {
        if (!visited[i]) {
          visited[i] = 1;
          dfs(depth + 1, [...array, i + 1], i);
          visited[i] = 0;
        }
      }
    }
  }

  dfs(0, [], 0);

  return answer.trim();
}