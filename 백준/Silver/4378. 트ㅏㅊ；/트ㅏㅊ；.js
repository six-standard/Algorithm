let k = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let ans;

const keys = {
  "`": "`",
  1: "`",
  2: "1",
  3: "2",
  4: "3",
  5: "4",
  6: "5",
  7: "6",
  8: "7",
  9: "8",
  0: "9",
  "-": "0",
  "=": "-",
  W: "Q",
  E: "W",
  R: "E",
  T: "R",
  Y: "T",
  U: "Y",
  I: "U",
  O: "I",
  P: "O",
  "[": "P",
  "]": "[",
  "\\": "]",
  S: "A",
  D: "S",
  F: "D",
  G: "F",
  H: "G",
  J: "H",
  K: "J",
  L: "K",
  ";": "L",
  "'": ";",
  X: "Z",
  C: "X",
  V: "C",
  B: "V",
  N: "B",
  M: "N",
  ",": "M",
  ".": ",",
  "/": ".",
};

for (let i of k) {
  ans = [];
  for (let j of i) {
    ans.push(keys[j] || j);
  }
  console.log(ans.join(""));
}
