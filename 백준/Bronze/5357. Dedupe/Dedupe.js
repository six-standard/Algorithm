console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [_, ...items] = input.split("\n");
  let answer = "";
  items.forEach((i) => {
    let items = [];
    i.split("").forEach((j) => items[items.length - 1] !== j && items.push(j));
    answer += `${items.join("")}\n`;
  });
  return answer.trim();
}
