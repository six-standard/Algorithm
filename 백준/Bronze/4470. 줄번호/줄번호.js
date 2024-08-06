let [_, ...m] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")

m.forEach((i, j) => {
  console.log(`${j+1}. ${i}`)
})
