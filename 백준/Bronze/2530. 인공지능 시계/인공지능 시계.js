console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [[h, m, s], [time]] = input.split("\n").map((item) => item.split(" ").map(Number));
  let total = h * 3600 + m * 60 + s + time;

  const hour = Math.floor(total / 3600) % 24;
  const minute = Math.floor((total % 3600) / 60);
  const second = total % 60;

  return `${hour} ${minute} ${second}`;
}
