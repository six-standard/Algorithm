console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const [_, ...items] = input.split("\n").map(BigInt); // BigInt로 변환
  const answer = {};

  for (let i of items) answer[i] = (answer[i] || 0n) + 1n; // BigInt 연산

  const maxCount = Math.max(...Object.values(answer).map(Number)); // 최댓값 찾기
  return String(
    Object.entries(answer)
      .filter(([_, count]) => count === BigInt(maxCount)) // 가장 많이 나온 숫자 찾기
      .map(([num]) => BigInt(num))
      .sort((a, b) => (a < b ? -1 : 1))[0] // 정렬 후 가장 작은 숫자 반환
  );
}