console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [n, m] = input.split(" ").map(Number);
  let answer = "";

  function dfs(depth, array) {
    if (depth === m) {
      answer += array.join(" ") + "\n";
    } else {
      for (let i = 0; i < n; i++) {
        dfs(depth + 1, [...array, i + 1], i);
      }
    }
  }

  dfs(0, []);

  return answer.trim();
}