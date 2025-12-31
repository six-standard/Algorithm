const [_, ...items] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((i) => i.split(" "));

items.forEach((i) => {
  console.log(i.slice(2, i.length).join(" ") + ` ${i[0]}` + ` ${i[1]}`);
});
