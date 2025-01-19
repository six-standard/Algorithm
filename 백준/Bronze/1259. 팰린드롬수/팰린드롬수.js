console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const items = input.split("\n");
  let ans = [];

  for (let i = 0; i < items.length - 1; i++) {
    const odd = items[i].length % 2;
    let len = Math.floor(items[i].length / 2);
    let [start, end] = [
      items[i].slice(0, len),
      items[i]
        .slice(len + odd, items.length + 1)
        .split("")
        .reverse()
        .join(""),
    ];

    ans.push(start === end ? "yes" : "no");
  }

  return ans.join("\n");
}