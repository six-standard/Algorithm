console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [[l, m], ...it] = input.split("\n").map((i) => i.split(" ").map(Number));

  let d = new Array(m + 1).fill(0);

  for (let i = 0; i < l; i++) {
    for (let j = m; j >= it[i][0]; j--) {
      d[j] = Math.max(d[j], it[i][1] + d[j - it[i][0]]);
    }
  }

  return Math.max(d[m]);
}