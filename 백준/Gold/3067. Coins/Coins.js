console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  let [len, ...item] = input.split("\n");
  let array = [];
  let ans = [];

  for (let i = 0; i < item.length; i += 3) {
    array.push({ length: Number(item[i]), items: item[i + 1].split(" ").map(Number), amount: Number(item[i + 2]) });
  }

  for (let i = 0; i < len; i++) {
    const { length, items, amount } = array[i];
    let dp = Array.from({ length: amount + 1 }, () => 0);
    dp[0] = 1;
    for (let j = 0; j < length; j++) {
      for (let k = items[j]; k <= amount; k++) {
        dp[k] += dp[k - items[j]];
      }
    }
    ans.push(dp[amount]);
  }

  return ans.join("\n");
}