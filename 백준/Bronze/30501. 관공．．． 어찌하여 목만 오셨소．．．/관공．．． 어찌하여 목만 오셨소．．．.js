console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [_, ...items] = input.split("\n");
  let answer = "";

  items.forEach((i) => {
    if (i.includes("S")) answer = i;
  });

  return answer;
}