console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) { 
  const items = input.split("\n");
  const obj = {};

  items.forEach(i => {
    if(obj[i] === undefined) obj[i] = 0;
    obj[i]++;
  });

  return Object.entries(obj).filter(([key, value]) => value % 2 !== 0)[0][0];
}