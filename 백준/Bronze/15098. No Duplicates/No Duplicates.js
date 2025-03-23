console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  return Object.entries(
    input
      .split(" ")
      .reduce(
        (acc, prev) =>
          acc[prev] === undefined ? { ...acc, [prev]: 1 } : { ...acc, [prev]: acc[prev] + 1 },
        {}
      )
  ).find(([_, length]) => length >= 2)
    ? "no"
    : "yes";
}