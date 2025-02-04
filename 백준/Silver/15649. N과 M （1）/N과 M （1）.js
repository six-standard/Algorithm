console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [n, m] = input.split(" ").map(Number);
  let visited = new Array(n).fill(0);
  let answer = "";

  function dfs(depth, array) {
    if (depth === m) {
      answer += array.join(" ") + "\n";
    } else {
      for (let i = 0; i < n; i++) {
        if (!visited[i]) {
          visited[i] = 1;
          dfs(depth + 1, [...array, i + 1]);
          visited[i] = 0;
        }
      }
    }
  }

  dfs(0, []);

  return answer.trim();
}