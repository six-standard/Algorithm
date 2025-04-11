console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [[L], crains, [l], items] = input.split("\n").map((i) => i.split(" ").map(Number));
  crains.sort((a, b) => b - a);
  items.sort((a, b) => b - a);

  if (crains[0] < items[0]) return -1;

  let answer = 0;
  let visited = Array(items.length).fill(false);
  let moved = 0;

  while (moved < items.length) {
    let idx = 0; // 아이템 포인터

    for (let i = 0; i < crains.length; i++) {
      while (idx < items.length) {
        if (!visited[idx] && crains[i] >= items[idx]) {
          visited[idx] = true;
          moved++;
          idx++;
          break;
        }
        idx++;
      }
    }

    answer++;
  }

  return answer;
}
