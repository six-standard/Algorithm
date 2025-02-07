console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[N, M], woods] = input.split("\n").map((i) => i.split(" ").map(Number));

  let start = 0;
  let end = Math.max(...woods);

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let trees = 0;

    woods.forEach((i) => {
      if (i > mid) {
        trees += i - mid;
      }
    });

    if (trees < M) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return end;
}