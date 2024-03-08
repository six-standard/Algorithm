const input = require("fs").readFileSync("/dev/stdin").toString().trim().toUpperCase();

if (input == "N") {
  console.log("Naver D2");
} else {
  console.log("Naver Whale");
}
