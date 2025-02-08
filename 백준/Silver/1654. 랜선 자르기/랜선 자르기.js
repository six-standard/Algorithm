console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [KN, ...lines] = input.split("\n");
  const [K, N] = KN.split(" ").map(Number);
  lines = lines.map(Number);

  let start = 0;
  let end = Math.max(...lines);

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let result = lines.reduce((prev, i) => (prev += parseInt(i / mid)), 0);

    if (result < N) end = mid - 1;
    else start = mid + 1;
  }

  return end;
}
