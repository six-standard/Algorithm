let input = require("fs").readFileSync("dev/stdin").toString().split("\n")
input.pop();

input.forEach((i) => {
  for (let j = 1; j <= Number(i); j++) {
    console.log(new Array(j).fill("*").join(""));
  }
});
