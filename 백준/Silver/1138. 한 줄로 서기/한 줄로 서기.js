console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[number], items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let answer = Array(number).fill(0);

  for (let i = 0; i < number; i++) {
    let count = items[i];

    for (let j = 0; j < number; j++) {
      if (answer[j] === 0) {
        if (count === 0) {
          answer[j] = i + 1;
          break;
        } else count--;
      }
    }
  }

  return answer.join(" ");
}