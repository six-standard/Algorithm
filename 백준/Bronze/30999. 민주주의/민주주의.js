console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [AB, ...items] = input.split("\n");
  const [A, B] = AB.split(" ").map(Number);

  return items.reduce(
    (acc, prev) =>
      prev.split("").filter((i) => i === "O").length > Math.floor(B / 2) ? acc + 1 : acc,
    0
  );
}