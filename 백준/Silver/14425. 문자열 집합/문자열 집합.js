console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [format, ...items] = input.split("\n");
  const [N, _] = format.split(" ").map(Number);
  const obj = new Set(items.slice(0, N));
  let ans = 0;

  items.slice(N, items.length).forEach((i) => obj.has(i) && ans++);

  return ans;
}