console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [_, items] = input.split("\n").map((i) => i.split(""));
  const count = { A: 0, B: 0 };
  items.forEach((i) => count[i]++);

  if (count.A === count.B) return "Tie";
  else if (count.A > count.B) return "A";
  else return "B";
}
