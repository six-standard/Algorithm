console.log(solution(require("fs").readFileSync("/dev/stdin").toString().trim()));

function solution(input) {
  const octalToBinary = {
    0: "000",
    1: "001",
    2: "010",
    3: "011",
    4: "100",
    5: "101",
    6: "110",
    7: "111",
  };

  let result = octalToBinary[input[0]];
  for (let i = 1; i < input.length; i++) result += octalToBinary[input[i]].padStart(3, "0");

  result = result.replace(/^0+/, "");
  return result === "" ? "0" : result;
}