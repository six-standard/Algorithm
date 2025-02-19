console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[length], ...items] = input.split("\n").map((i) => i.split(" ").map(Number));
  let ans = "";

  for (let i = 0; i < length * 2; i += 2) {
    const [[length], array] = [items[i], items[i + 1]];
    let graph = Array(length).fill(0);
    let visited = Array(length).fill(0);
    let cnt = 0;
    for (let j = 0; j < length; j++) graph[j] = array[j] - 1;
    for (let j = 0; j < length; j++) {
      if (visited[j]) continue;
      visited[j] = 1;
      let queue = [j];
      let head = 0;
      cnt++;

      while (head < queue.length) {
        const next = graph[queue[head++]];
        if (!visited[next]) {
          visited[next] = 1;
          queue.push(next);
        }
      }
    }
    ans += `${cnt}\n`;
  }

  return ans.trim();
}