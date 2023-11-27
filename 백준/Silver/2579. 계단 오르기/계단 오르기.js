// 도저히 규칙을 못 찾겠어서 답을 보고 푼 문제입니다.
// 답을 보고 제출한 대신 코드와 규칙애 대헤 설명하겠습니다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../input.txt";

/* 입력값을 입력받습니다. 
  계단의 갯수, 계단의 값들 순입니다.
  여기서 계단의 값들은 여러 줄에 걸쳐 출력받기 때문에, spread 문법을 사용하였습니다.
*/
let [count, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");
count = Number(count);

// map함수를 통해 값의 자료형을 바꿉니다.
// Number, Float, String 등의 자료형으로 바꿀 수 있습니다.
input = input.map(Number);

solution(input, count);

function solution(input, count) {
  // input배열의 길이 만큼의 배열을 만들며, 0으로 초기화합니다.
  const dp = Array(input.length).fill(0);
  dp[0] = input[0];
  dp[1] = input[0] + input[1];
  dp[2] = Math.max(input[0], input[1]) + input[2];
  /*
    0번째 dp값은 0번째 입력값으로 설정합니다.
    1번째 dp값은 0번째 입력값 + 1번째 입력값으로 설정합니다.
    2번째 dp값은 (0번째 입력값과 1번째 입력값중 더 큰 수) + 2번째 입력값으로 설정합니다.
      이는 칸을 한번에 2개까지만 갈 수 있다는 규칙 때문입니다.
      2번째 입력값으로 가기 위해선 0번째, 혹은 1번째 입력값을 먼저 입력해야 하는데, 가장 큰 값을 구하려면 둘 중 더 큰 값으로 가야 하기 때문입니다.
  */
  
  for (let i = 3; i < input.length; i += 1) {
    /* 
      i번째 dp값은 (i-2번쨰 dp값 + i번째 입력값)과 (i-3번째 dp값 + i-1번째 입력값) 중 큰 수로 설정합니다.
        이는 가능한 값들 중 가장 큰 값을 구하기 위함입니다. 
        3을 예로 들면 1번째 칸에서 3번째 칸으로 온 경우, 0번째 칸에서 2번째 칸으로 온 경우 두 가지가 있습니다.
    */
    dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
  }
  
  // 원하는 값을 출력합니다.
  console.log(dp[count - 1]);
}
