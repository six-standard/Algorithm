console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [_, ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  const cases = [];
  let answers = [];

  for (let i = 0; i < items.length; i += 2) {
    cases.push({ length: items[i][0], target: items[i][1], files: items[i + 1].map((i, j) => [i, j]) });
  }

  cases.forEach(({ length, target, files }) => {
    const answer = files[target];
    const queue = [...files];
    let count = 0;
    let max = Math.max(...queue.map((i) => i[0]));

    while (queue.length >= 1) {
      const current = queue.shift();

      if (current[0] !== max) queue.push(current);
      else if (current[0] === max) {
        count++;
        max = Math.max(...queue.map((i) => i[0]));
        if (answer.join("") === current.join("")) {
          answers.push(count);
          break;
        }
        continue;
      }
    }
  });

  return answers.join("\n");
}