const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let dic = [];
let cnt = [1, 0];

for(let i = 0; i < 101; i++) {
  dic[i] = 0;
}

function fibo_n(n) {
  if(n <= 2) return 1;
  else {
    cnt[0]++;
    return fibo_n(n-1) + fibo_n(n-2);
  }
}

function fibo_d(n) {
  dic[1] = 1;
  dic[2] = 1;
  for(let i = 3; i <= n; i++) {
    dic[i] = dic[i-1] + dic[i-2];
    cnt[1]++;
  }
  return dic[n];
}

rl.on("line", (line) => {
  fibo_n(line);
  fibo_d(line);
  console.log(`${cnt[0]} ${cnt[1]}`)
  rl.close();
});