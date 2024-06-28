const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

const n = getFile;
let ans = "";

if (n >= 620 && n <= 780) ans = "Red";
else if (n >= 590 && n < 620) ans = "Orange";
else if (n >= 570 && n < 590) ans = "Yellow";
else if (n >= 495 && n < 570) ans = "Green";
else if (n >= 450 && n < 495) ans = "Blue";
else if (n >= 425 && n < 450) ans = "Indigo";
else if (n >= 380 && n < 425) ans = "Violet";

console.log(ans);