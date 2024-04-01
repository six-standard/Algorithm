const input = parseInt(
  require("fs").readFileSync("/dev/stdin").toString().trim()
);

let arr = Array.from(new Array(input).keys()).map((i) => i + 1);
let cnt = 0;
while (arr.length - cnt > 1) {
  cnt++;
  arr.push(arr[cnt++]);
}

console.log(arr[cnt]);