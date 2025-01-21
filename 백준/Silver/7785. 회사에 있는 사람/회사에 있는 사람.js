console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [_, ...items] = input.split("\n").map((i) => i.split(" "));
  let people = {};

  items.forEach(([name, state]) => (people[name] = state));

  return Object.entries(people)
    .filter((i) => i[1] === "enter")
    .map((i) => i[0])
    .sort((i, j) => (i > j ? -1 : 1))
    .join("\n");
}
