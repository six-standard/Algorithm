let input = require("fs")
  .readFileSync("/dev/stdin")

if (input.toString().includes("7")) {
  if (input % 7 == 0) {
    console.log("3");
  } else {
    console.log("2");
  }
} else {
  if (input % 7 == 0) {
    console.log("1");
  } else {
    console.log("0");
  }
}