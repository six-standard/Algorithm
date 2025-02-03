console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [_, ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let answer = "";

  for (let i = 0; i < items.length; i += 2) {
    const queue = items[i + 1];
    let count = 0;
    let location = items[i][1];

    while (queue.length) {
      const max = Math.max(...queue);
      const current = queue.shift();

      if (current !== max) queue.push(current);
      else {
        count++;
        if (location === 0) {
          answer += count + "\n";
          break;
        }
      }

      if (location === 0) location = queue.length - 1;
      else location--;
    }
  }

  return answer.trim();
}