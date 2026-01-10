console.log(
  solution(require("fs").readFileSync("/dev/stdin").toString().trim())
);

function solution(input) {
  const [_, ...items] = [...new Set(input.split("\n"))];

  return items
    .sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      }
      return a.localeCompare(b);
    })
    .join("\n");
}
