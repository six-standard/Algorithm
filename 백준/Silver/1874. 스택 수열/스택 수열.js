console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [_, ...items] = input.split("\n").map(Number);
  const answer = [];
  const array = [0];
  let index = 0;
  let count = 1;

  while (index < items.length) {
    if (array[array.length - 1] < items[index]) {
      array.push(count++);
      answer.push("+");
    } else {
      const pop = array.pop();
      if (pop !== items[index]) {
        return "NO";
      }
      index++;
      answer.push("-");
    }
  }

  return answer.join("\n");
}
