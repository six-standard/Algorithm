const input = parseInt(require("fs").readFileSync("/dev/stdin"));
let first = 0;
let third = 0;

for (let i = 0; i <= input; i++) {
  first += i;
  third += i * i * i;
}

console.log(first);
console.log(first * first);
console.log(third);
