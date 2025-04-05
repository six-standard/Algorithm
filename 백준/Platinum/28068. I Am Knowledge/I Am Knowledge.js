console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [_, ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let joy = 0;

  let plus = items.filter(([a, b]) => b >= a).sort((a, b) => a[0] - b[0]);
  let minus = items.filter(([a, b]) => b < a).sort((a, b) => b[1] - a[1]);

  let sorted = [...plus, ...minus];

  for (let [from, to] of sorted) {
    if (joy - from < 0) {
      return 0;
    } else joy = joy - from + to;
  }

  return 1;
}
