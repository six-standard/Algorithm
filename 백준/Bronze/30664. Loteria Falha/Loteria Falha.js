const getFile = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

console.log(
  getFile
    .split("\n")
    .splice(0, getFile.split("\n").length - 1)
    .map((i) =>
      BigInt(i) % BigInt(42) === 0n ? "PREMIADO" : "TENTE NOVAMENTE"
    )
    .join("\n")
);