const i = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n")
i.shift();

i.forEach(j => {
  const tmp = j.split(" ").map(Number);
  console.log(tmp[0] + tmp[1]);
})