const n = Number(require("fs").readFileSync("/dev/stdin").toString().trim());
console.log(new Array(n).fill("LoveisKoreaUniversity").join(" "));
