console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let items = input.split("\n").map(i => i.split(" ").map(Number));
  const x = new Array(1000).fill(0);
  const y = new Array(1000).fill(0);

  items.forEach(([cx, cy]) => {
    x[cx]++;
    y[cy]++;
  })

  return [x.findIndex(i => i === 1), y.findIndex(i => i === 1)].join(" ");
}