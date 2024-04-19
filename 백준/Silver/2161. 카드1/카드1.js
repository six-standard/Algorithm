let arr = Array.from(
  new Array(
    parseInt(require("fs").readFileSync("/dev/stdin").toString().trim())
  ).keys()
).map((i) => i + 1);
let ans = [];

while (arr.length !== 1) {
  ans.push(arr.shift());
  arr.push(arr.shift());
}

console.log(ans.concat(arr).join(" "));