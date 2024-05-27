const [_, ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" ").map(Number));

input.forEach((i) => {
  let cnt = 0;
  for (let j = i[0]; j <= i[1]; j++) {
    let m = j.toString();
    if (m.includes("0"));
    {
      cnt += m.split("").filter((n) => n === "0").length;
    }
  }
  console.log(cnt);
});