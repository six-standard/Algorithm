console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [n, ...items] = input.split("\n").map(Number);
  const avr = Math.round(items.reduce((a, b) => a + b, 0) / n);
  const mid = items.sort((a, b) => a - b)[Math.floor(items.length / 2)];
  let mos = {};
  const ran = Math.max(...items) - Math.min(...items);

  items.forEach((i) => {
    if (!mos[i]) mos[i] = 0;
    mos[i]++;
  });

  const mosMax = Math.max(...Object.values(mos));
  mos = Object.entries(mos)
    .filter((i) => i[1] === mosMax)
    .sort((a, b) => a[0] - b[0])
    .map((i) => Number(i[0]));

  answer = `${avr}\n${mid}\n${mos.length > 1 ? mos[1] : mos[0]}\n${ran}`;
  return answer;
}