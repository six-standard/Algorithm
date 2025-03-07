function solution(number, k) {
let answer = [];
  let count = k;

  for (let i of number.split("").map(Number)) {
    while (answer[answer.length - 1] < i && count) {
      count--;
      answer.pop();
    }
    answer.push(i);
  }

    if(count) {
        while(count) {
            count--;
            answer.pop();
        }
    }
    
  return answer.join("");
}