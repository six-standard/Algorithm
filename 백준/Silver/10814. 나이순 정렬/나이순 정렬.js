console.log(
  solution(require("fs").readFileSync("/dev/stdin").toString().trim())
);

function solution(input) {
  let [_, ...items] = input
    .split("\n")
    .map((i) => i.split(" "))
    .map((i, j) => [Number(i[0]), i[1], j]);

  items.sort(([aKey, aVal, aI], [bKey, bVal, bI]) => {
    if (aKey !== bKey) return aKey - bKey;
    else return aI - bI;
  });

  return items.map((i) => i.slice(0, 2).join(" ")).join("\n");
}