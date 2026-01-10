const items = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(""));

items.forEach((item) => {
  if (item[0] == "0") return;
  let ck = true;
  for (let i = Math.floor(item.length / 2) - 1; i >= 0; i--) {
    if (item[i] !== item[item.length - 1 - i]) {
      ck = false;
      break;
    }
  }
  console.log(ck ? "yes" : "no");
});