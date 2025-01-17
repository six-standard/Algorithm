console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[length], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));

  items.sort((i, j) => {
    if (i[1] === j[1]) return i[0] - j[0];
    return i[1] - j[1];
  });

  return items.map((i) => i.join(" ")).join("\n");
}
