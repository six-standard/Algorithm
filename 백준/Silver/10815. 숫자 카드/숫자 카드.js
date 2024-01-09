const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let [n, myCard, m, card] = input.split("\n");

myCard = myCard.split(" ").map(Number);
card = card.split(" ").map(Number);
cardObj = {};
answer = "";

myCard.forEach((i) => {
  cardObj[i] = 1;
});

card.forEach((i) => {
  if (i in cardObj) answer += "1 ";
  else answer += "0 ";
});

console.log(answer);
