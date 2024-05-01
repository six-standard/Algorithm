let input = require("fs").readFileSync("/dev/stdin").toString();

input = input.replaceAll("XXXX", "AAAA");
input = input.replaceAll("XX", "BB");

console.log(input.includes("X") ? -1 : input);