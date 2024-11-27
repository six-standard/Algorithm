const [_, ...n] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

const solution = (n, r) => {
  let parent = 1;
  let child = 1;

  for (let i = 0; i < n; i++) {
    parent *= r - i;
    child *= n - i;
  }
  //Math.round()를 사용해서 반올림 해줘야 됨
  console.log(Math.round(parent / child));
};

n.forEach((i) => solution(...i));