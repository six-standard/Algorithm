console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [NM, ...IS] = input.split("\n");
  const [N, M] = NM.split(" ").map(Number);
  const items = IS.map(Number);
  let answer = 0;

  let start = Math.max(...items);
  let end = items.reduce((acc, prev) => acc + prev, 0);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let total = 0;
    let count = 0;

    items.forEach((i) => {
      if (total + i <= mid) total += i;
      else {
        count++;
        total = i;
      }
    });
    if (total) {
      count++;
    }

    if (count > M) start = mid + 1;
    else {
      end = mid - 1;
      answer = mid;
    }
  }

  return answer;
}