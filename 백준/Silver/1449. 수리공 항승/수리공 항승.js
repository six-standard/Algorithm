console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [[N, L], items] = input.split("\n").map((i) => i.split(" ").map(Number));
  items = items.sort((a, b) => a - b);
  const loc = Array(1002).fill(0);
  let answer = 0;

  for (let i = 0; i < N; i++) loc[items[i]] = 1;

  for (let i = 1; i <= 1000; ) {
    if (loc[i]) {
      i += L;
      answer++;
    } else i++;
  }

  return answer;
}