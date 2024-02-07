const input = BigInt(require("fs").readFileSync("/dev/stdin").toString())

console.log((input % 20000303n).toString().replace("n"));