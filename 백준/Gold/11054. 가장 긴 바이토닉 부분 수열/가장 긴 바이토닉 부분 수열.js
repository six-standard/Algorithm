console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [[N], items] = input.split("\n").map(i => i.split(" ").map(Number));
  const lis = new Array(N).fill(1)
  const lds = new Array(N).fill(1)
  

  for(let i = 1; i<N; i++) {
    for(let j = 0; j<i; j++) {
      if(items[j] < items[i]) lis[i] = Math.max(lis[i], lis[j] + 1);
    }
  }
  const reversed = [...items].reverse();

  for(let i = 1; i<N; i++) {
    for(let j = 0; j<i; j++) {
      if(reversed[j] < reversed[i]) lds[i] = Math.max(lds[i], lds[j] + 1);
    }
  }

  const newer = lis.map((i, j) => i + lds[N-j-1] - 1);

  return Math.max(...newer);
}
