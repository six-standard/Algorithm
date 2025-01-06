let n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());

let answer = 0;
let count = 0;

while (true) {
  ++answer;
  if (/666/.test(answer.toString())) {
    count++;
    if (count === n) {
      console.log(answer);
      break;
    }
  }
}