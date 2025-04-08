console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const items = input.split("\n").map((i) => i.split(" "));
  items.pop();
  let answer = [];

  for (let [name, age, weight] of items) {
    if (age > 17 || weight >= 80) answer.push(name + " Senior");
    else answer.push(name + " Junior");
  }

  return answer.join("\n");
}