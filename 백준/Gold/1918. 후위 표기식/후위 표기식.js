const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim();

solution(input);

function level(n) {
  if(n == "(" || n == ")") return 0;
  else if(n == "+" || n == "-") return 1;
  else if(n == "*" || n == "/") return 2;
}

function solution(n) {
  let answer = [];
  let arr = [];
  n = n.split("");
  for(let i of n) {
    if(i.match(/[A-Z]/)) { // 피연산자
      answer.push(i);
    } else if(level(i) == 0) { // 괄호
      if(i == "(") arr.push(i); // 여는 괄호면 push
      else { // 닫는 괄호면 여는 괄호를 만날 때까지 출력
        let pop = 0;
        do {
          pop = arr.pop();
          answer.push(pop);
        } while(pop != "(")
      }
    } else { // 연산자
      let arrLVL = level(arr[arr.length-1]);
      const currentLVL = level(i);
      if(arrLVL < currentLVL) arr.push(i);
      else if(arrLVL > currentLVL) {
        while(arrLVL > currentLVL || arrLVL == currentLVL) {
          answer.push(arr.pop());
          arrLVL = level(arr[arr.length-1]);
        }
        arr.push(i);
      }
      else if(arrLVL == currentLVL) {
        answer.push(arr.pop());
        arr.push(i);
      } else {
        arr.push(i);
      }
    }
  }
  if(arr.length != 0) {
    arr.reverse().forEach(i => answer.push(i));
  }
  console.log(answer.join("").replace(/\(/gi, ""));
}